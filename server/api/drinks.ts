import { defineEventHandler } from 'h3'
import pool from '../../utils/db'

export default defineEventHandler(async () => {
  const query = `
    SELECT d.*
    FROM drinks d
    INNER JOIN categories c ON d.category_id = c.id
    INNER JOIN category_venue cv ON c.id = cv.category_id
    WHERE cv.venue_id = 1 
    AND c.is_drink = true
    AND d.is_active = true
    AND (
      c.name LIKE '%VINI%'
      OR c.name LIKE '%Spumanti%'
      OR c.name LIKE '%Champagne%'
    )
  `
  const [rows] = await pool.query(query)
  return rows
})
