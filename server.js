//const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt"); // para encriptar contraseñas

//const app = express();
//app.use(cors());
//app.use(express.json());

// Conexión a MySQL
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Entraramysql24",
  database: "logingo", // tu base de datos
  port: 3306
});

// Verificar conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error("Error conectando a MySQL:", err.message);
    console.log("⚠️ El servidor continúa ejecutándose, pero las operaciones de BD fallarán");
  } else {
    console.log("✅ Conectado a MySQL");
  }
});

// Ruta de registro
app.post("/register", async (req, res) => {
  const { email, password, nombre } = req.body;

  if (!email || !password) {
    return res.json({ success: false, message: "Faltan campos obligatorios" });
  }

  try {
    // Encriptar la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = "INSERT INTO usuarios (email, password, nombre) VALUES (?, ?, ?)";
    db.query(query, [email, hashedPassword, nombre], (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, message: "Error al registrar usuario" });
      }
      res.json({ success: true, message: "Usuario registrado correctamente ✅" });
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error interno del servidor" });
  }
});

// Ruta de login 
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  {/*const query = "SELECT * FROM usuarios WHERE email = ?"; */}
    const query = `SELECT * FROM usuarios WHERE email = '${email}' AND password = '${password}'`
  db.query(query, [email], async (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Error en el servidor" });
    }

    if (result.length === 0) {
      return res.json({ success: false, message: "Usuario no encontrado ❌" });
    }

    const user = result[0];
    {/*const isValid = await bcrypt.compare(password, user.password);*/}
    const isValid = password === user.password; // Comparación directa (no segura)

    if (isValid) {
      res.json({ success: true, message: "Login exitoso ✅", user: { id: user.id, email: user.email, nombre: user.nombre } });
    } else {
      res.json({ success: false, message: "Contraseña incorrecta ❌" });
    }
  });
});
app.listen(3001, () => {
  console.log("Servidor corriendo en http://localhost:3001");
});
