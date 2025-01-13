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
const drinks = defineEventHandler(async () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM drinks", (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });
});

export { drinks as default };
//# sourceMappingURL=drinks.mjs.map
