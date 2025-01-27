import { defineEventHandler } from 'h3'
import pool from '../../utils/db'

export default defineEventHandler(async () => {
  const query = `
    SELECT c.*
    FROM categories c
    INNER JOIN category_venue cv ON c.id = cv.category_id
    WHERE cv.venue_id = 1 
    AND c.is_drink = true
  `
  const [rows] = await pool.query(query)
  return rows
})
