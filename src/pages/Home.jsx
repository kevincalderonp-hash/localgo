import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="container text-center">
          <h1 className="hero-title">LocalGo 🚀</h1>
          <p className="hero-subtitle">
            Tu app de delivery local para apoyar los negocios de tu barrio. ¡Pide comida fresca y llega rápido!
          </p>
          <Link to="/tiendas" className="btn btn-primary hero-btn">
            <span className="btn-icon">🚚</span> Ver Tiendas
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-4">
        <div className="container">
          <h2 className="section-title text-center mb-4">¿Por qué elegir LocalGo?</h2>
          <div className="grid grid-3">
            <div className="card feature-card">
              <div className="feature-icon">🏪</div>
              <h3>Tiendas Locales</h3>
              <p>Apoya a los negocios de tu comunidad con entregas rápidas y seguras.</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">🍔</div>
              <h3>Comida Fresca</h3>
              <p>Disfruta de platos preparados con ingredientes frescos y locales.</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Delivery Rápido</h3>
              <p>Recibe tu pedido en minutos con nuestro servicio de entrega eficiente.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;