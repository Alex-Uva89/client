import { c as defineEventHandler } from '../../_/nitro.mjs';
import { p as pool } from '../../_/db.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'mysql2/promise';

const drinks = defineEventHandler(async () => {
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
  `;
  const [rows] = await pool.query(query);
  return rows;
});

export { drinks as default };
//# sourceMappingURL=drinks.mjs.map
