import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/tiendas.css";

function Tiendas() {
  return (
    <div className="tiendas">
      <Navbar />
      <div className="container py-4">
        <h1 className="section-title text-center mb-4">Nuestras Tiendas</h1>
        <p className="subtitle text-center mb-4">
          Explora nuestras tiendas asociadas y encuentra los mejores productos.
        </p>

        <div className="grid grid-2">
          <div className="card tienda-card">
            <img
              src="logoComidaRapida.png"
              className="tienda-image"
            />
            <div className="tienda-content">
              <h2 className="tienda-title">
                <span className="tienda-icon">🍔</span> Comida Rápida
              </h2>
              <p>Hamburguesas, pizzas, tacos y más. ¡Deliciosos y rápidos!</p>
              <Link to="/Tiendas/FastFood" className="btn btn-primary tienda-btn">
                Ver Opciones
              </Link>
            </div>
          </div>

          <div className="card tienda-card">
            <img
              src="logomarket.png"
              alt="Supermercado"
              className="tienda-image"
            />
            <div className="tienda-content">
              <h2 className="tienda-title">
                <span className="tienda-icon">🛒</span> Supermercado
              </h2>
              <p>Productos frescos, bebidas y artículos del hogar.</p>
              <Link to="/Tiendas/SuperMarket" className="btn btn-primary tienda-btn">
                Ver Productos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tiendas;