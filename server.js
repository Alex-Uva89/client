import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express()
app.use(cors())

const connection = mysql.createConnection({
  host: 'menu-mamma-elvira.cpuk68cqabe5.eu-south-1.rds.amazonaws.com',
  port: 3306,
  user: 'adminDev',
  password: '*1qaz2wsx3edc',
  database: 'db_menu'
})

// Drinks endpoint
app.get('/api/drinks', (req, res) => {
  connection.query('SELECT * FROM drinks', (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Database error' })
      return
    }
    res.json(results)
  })
})

// Categories endpoint
app.get('/api/categories', (req, res) => {
    connection.query('SELECT * FROM categories WHERE is_drink = true', (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Database error' })
        return
      }
      res.json(results)
    })
  })
  

const PORT = 8000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
