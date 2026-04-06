import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Agregar producto
  const agregarAlCarrito = (product) => {
    setCart([...cart, product]);
  };

  // Eliminar producto
  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  // Total
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider value={{ cart, agregarAlCarrito, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
}