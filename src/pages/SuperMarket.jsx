import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import "../styles/home.css";



const products = [
  { id: 1, name: "Arroz", price: 15000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_MxHUFEi4xvMpJKOd1ZNNtwl_KunTyZf9AA&s" },
  { id: 2, name: "Jabon", price: 20000, img: "https://mejorconsalud.as.com/wp-content/uploads/2021/02/jabon.jpg" },
  { id: 3, name: "Leche", price: 8000, img: "https://www.merieuxnutrisciences.com/wp-content/uploads/2023/08/leche.png" },
  {id: 4, name: "Huevos", price: 12000, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvbFZLsjqcEyyIzifrg7NPv6-i1njdVIJkg&s"},
  {id: 5, name: "Pan", price: 11500, img:"https://i.blogs.es/512fb8/pan_comun/650_1200.jpg" }
];

function SuperMarket() {
  const { agregarAlCarrito } = useContext(CartContext);

  return (
    <div>
      <Navbar />

      <div className="home-container">
        <div className="products-grid">
          {products.map((p) => (
            <div key={p.id} className="caja">
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p>${p.price}</p>

              <button className="btn-Agregar" onClick={() => agregarAlCarrito(p)}>
                Agregar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

    export default SuperMarket;