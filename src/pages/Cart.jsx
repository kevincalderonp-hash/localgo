import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import "../styles/cart.css";



function Cart() {
  const { cart, removeFromCart, total } = useContext(CartContext);

  return (
    <div className="cart-page">
      <Navbar />

      <div className="container py-4">
        <h1 className="cart-title">Tu Carrito 🛒</h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Tu carrito está vacío</h2>
            <p>¡Agrega algunos productos deliciosos!</p>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cart.map((product, index) => (
                <div key={index} className="cart-item card">
                  <div className="cart-item-info">
                    <h3 className="cart-item-name">{product.name}</h3>
                    <p className="cart-item-price">${product.price}</p>
                  </div>
                  <button
                    className="btn btn-secondary remove-btn"
                    onClick={() => removeFromCart(index)}
                  >
                    🗑️ Eliminar
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary card">
              <h2>Resumen del Pedido</h2>
              <div className="cart-total">
                <span>Total:</span>
                <span className="total-amount">${total}</span>
              </div>
              <button className="btn btn-primary checkout-btn">
                Proceder al Pago 💳
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;