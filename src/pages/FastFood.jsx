import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import "../styles/home.css";

const products = [
  { 
    id: 1, 
    name: "Hamburguesa", 
    price: 15000, 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4YDCJqgMFtsD9dBn2uch0RTrROXHmvr1vnw&s" 
  },
  { 
    id: 2, 
    name: "Pizza", 
    price: 20000, 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJKJPlaalwOKPpT-IChFJIU4S8ZMGOiyGQ&s" 
  },
  { 
    id: 3, 
    name: "Arepa Rellena", 
    price: 8000, 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZoIQsEpTT3c5sDeEQ3AGHzH54FT2Rz9c3Mg&s" 
  },
  { 
    id: 4, 
    name: "Tacos", 
    price: 12000, 
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/330px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg"
  },
  { 
    id: 5, 
    name: "Burritos", 
    price: 11500, 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuq2KkCYkH8SG_sTnLm8zP7IOy-pyJyXD2Bw&s"
  }
];

function FastFood() {
  const { agregarAlCarrito } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="home-container">
        
        {/* Botón para devolverse a la página anterior */}
        <button className="btn-volver" onClick={() => navigate(-1)}>
          ← Volver
        </button>

        <h1 className="page-title">🍔 Comida Rápida</h1>

        <div className="products-grid">
          {products.map((p) => (
            <div key={p.id} className="card">
              <div className="img-wrapper">
                <img src={p.img} alt={p.name} />
              </div>
              <h3>{p.name}</h3>
              <p className="price">${p.price.toLocaleString("es-CO")}</p>
              <button className="btn-agregar" onClick={() => agregarAlCarrito(p)}>
                🛒 Agregar al carrito
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default FastFood;