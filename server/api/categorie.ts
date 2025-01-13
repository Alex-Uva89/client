import { defineEventHandler } from 'h3'
import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

export default defineEventHandler(async () => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT DISTINCT c.*
      FROM categories c
      INNER JOIN category_venue cv ON c.id = cv.category_id
      WHERE cv.venue_id = 1 AND c.is_drink = true
    `
    connection.query(query, (error, results) => {
      if (error) reject(error)
      resolve(results)
    })
  })
})
