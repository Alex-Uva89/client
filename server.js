import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// defined express

const app = express();
app.use(cors());
app.use(express.json());

// defined connection

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

//debug connection

connection.connect((err) => {
  if (err) {
    console.error('Errore di connessione al database:', err.message);
  } else {
    console.log('Connesso al database con successo!');
  }
});

app.get('/api/drinks', (req, res) => {
  connection.query('SELECT * FROM drinks', (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Database error' });
      return;
    }
    res.json(results);
  });
});

app.get('/api/categories', (req, res) => {
  const query = `
    SELECT DISTINCT c.*
    FROM categories c
    INNER JOIN category_venue cv ON c.id = cv.category_id
    WHERE cv.venue_id = 1 AND c.is_drink = true
  `;
  connection.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Database error' });
      return;
    }
    res.json(results);
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
