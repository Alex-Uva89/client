import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'menu-mamma-elvira.cpuk68cqabe5.eu-south-1.rds.amazonaws.com',
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || 'adminDev',
  password: process.env.DB_PASSWORD || '*1qaz2wsx3edc',
  database: process.env.DB_NAME || 'db_menu',
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

export default app;
