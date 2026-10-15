

const mysql = require("mysql2");

const dbMysql = mysql.createConnection({
  host: "127.0.0.1", // o localhost
  user: "root", // Mi usuario de MySQL
  password: "Entraramysql24",  // Mi contraseña de MySQL
  database: "logingo",
  port: 3306
});

dbMysql.connect((err) => {
  if (err) {
    console.error("❌ Error conectando a MySQL:", err.message);
  } else {
    console.log("✅ Conectado a MySQL");
  }
});

module.exports = dbMysql;
