import { c as defineEventHandler } from '../../_/nitro.mjs';
import { p as pool } from '../../_/db.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'mysql2/promise';

const categories = defineEventHandler(async () => {
  const query = `
    SELECT c.*
    FROM categories c
    INNER JOIN category_venue cv ON c.id = cv.category_id
    WHERE cv.venue_id = 1 
    AND c.is_drink = true
  `;
  const [rows] = await pool.query(query);
  return rows;
});

export { categories as default };
//# sourceMappingURL=categories.mjs.map
