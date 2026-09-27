import React, { useState } from "react";
import "../styles/registro.css"; // estilos separados

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  // ⚠️ almacena mensajes de error
  const [error, setError] = useState("");

  // 📝 Función que se ejecuta al enviar el formulario
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor ingresa todos los campos");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({email, password, nombre }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Registro exitoso ✅");
        setError("");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Error de conexión con el servidor");
    }
  };

  return (
    <div className="register-container">
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo"
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
