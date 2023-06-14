const mysql = require("mysql2/promise");
// Create a connection pool to the database

const { DB_HOST, DB_PORT, DB_USER, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: process.env.DB_PASSWORD,
  database: DB_NAME,
});

// Try a connection

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  );
});
