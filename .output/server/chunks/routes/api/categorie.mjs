import { c as defineEventHandler } from '../../_/nitro.mjs';
import mysql from 'mysql2';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
const categorie = defineEventHandler(async () => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT DISTINCT c.*
      FROM categories c
      INNER JOIN category_venue cv ON c.id = cv.category_id
      WHERE cv.venue_id = 1 AND c.is_drink = true
    `;
    connection.query(query, (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });
});

export { categorie as default };
//# sourceMappingURL=categorie.mjs.map
