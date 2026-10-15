require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // necesario para Neon
});

pool.connect()
  .then(() => console.log("✅ Conectado a Neon Postgres"))
  .catch(err => console.error("❌ Error de conexión:", err));

module.exports = pool;
