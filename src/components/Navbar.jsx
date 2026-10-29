import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-brand">
          <Link to="/" className="brand-link">
            LocalGo 🚀
          </Link>
        </div>
        <div className="navbar-menu">
          <Link to="/" className="nav-link">
            <span className="nav-icon">🏠</span> Inicio
          </Link>
          <Link to="/cart" className="nav-link cart-link">
            <span className="nav-icon">🛒</span> Carrito
            {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </Link>
          <Link to="/login" className="nav-link">
            <span className="nav-icon">👤</span> Iniciar sesión
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;