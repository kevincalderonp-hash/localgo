import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Tiendas from "../pages/Tiendas";
import FastFood from "../pages/FastFood";


function AppRouter() {
  return (
    <BrowserRouter>
    {/* Definimos las rutas de la aplicación */ }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Tiendas" element={<Tiendas />} />
        <Route path="/Tiendas/FastFood" element={<FastFood />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;