const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

// Cambia aquí según quieras usar MySQL o Postgres
const db = require("./db_postgres"); // Para Postgres
// const db = require("./db_postgres");

const app = express();
app.use(cors());
app.use(express.json());

// Registro
app.post("/register", async (req, res) => {
  const { email, password, nombre } = req.body;
  if (!email || !password) {
    return res.json({ success: false, message: "Faltan campos obligatorios" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    if (db.query.length === 2) {
      // MySQL usa "?"
      const query = "INSERT INTO usuarios (email, password, nombre) VALUES (?, ?, ?)";
      db.query(query, [email, hashedPassword, nombre], (err) => {
        if (err) return res.status(500).json({ success: false, message: "Error al registrar ❌" });
        res.json({ success: true, message: "Usuario registrado correctamente ✅" });
      });
    } else {
      // Postgres usa $1, $2, $3
      await db.query("INSERT INTO usuario (email, password, nombre) VALUES ($1, $2, $3)", [email, hashedPassword, nombre]);
      res.json({ success: true, message: "Usuario registrado correctamente ✅" });
    }
 } catch (error) {
  console.error("❌ Error en /register:", error);
  res.status(500).json({ success: false, message: "Error interno ❌" });
}

});

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (db.query.length === 2) {
      // MySQL
      const query = "SELECT * FROM usuarios WHERE email = ?";
      db.query(query, [email], async (err, result) => {
        if (err) return res.status(500).json({ success: false, message: "Error en servidor ❌" });
        if (result.length === 0) return res.json({ success: false, message: "Usuario no encontrado ❌" });

        const user = result[0];
        const isValid = await bcrypt.compare(password, user.password);
        if (isValid) {
          res.json({ success: true, message: "Login exitoso ✅", user: { id: user.id, email: user.email, nombre: user.nombre } });
        } else {
          res.json({ success: false, message: "Contraseña incorrecta ❌" });
        }
      });
    } else {
      // Postgres
      const result = await db.query("SELECT * FROM usuario WHERE email = $1", [email]);
      if (result.rows.length === 0) return res.json({ success: false, message: "Usuario no encontrado ❌" });

      const user = result.rows[0];
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid) {
        res.json({ success: true, message: "Login exitoso ✅", user: { id: user.id, email: user.email, nombre: user.nombre } });
      } else {
        res.json({ success: false, message: "Contraseña incorrecta ❌" });
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Error en login ❌" });
  }
});

app.listen(4000, () => {
  console.log("🚀 Servidor corriendo en http://localhost:4000");
});
