import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/login.css";



export default function Login() {
  const navigate = useNavigate(); // Hook para redireccionar a otras páginas
  const [email, setEmail] = useState("");     // 📧 almacena el correo
  const [password, setPassword] = useState(""); // 🔑 almacena la contraseña
  const [error, setError] = useState("");     // ⚠️ almacena mensajes de error

  // 📝 Función que se ejecuta cuando el usuario envía el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica antes de enviar al backend
    if (!email || !password) {
      setError("Por favor ingresa todos los campos");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert(`Login exitoso ✅ ${data.user.nombre}`);
        setError("");
        navigate("/EmpleadoUser"); // Redirigir al dashboard después del login exitoso
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Error de conexión con el servidor");
    }
  };

  return (
    <div className="login-container">
      <Navbar />
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn-primary">Ingresar</button>
      </form>
      
      <div className="registrar"></div>
        <p>¿No tienes una cuenta? <a href="/registrar">Regístrate aquí</a></p>

      </div>
   
  );
}
