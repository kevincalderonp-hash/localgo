import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Tiendas from "../pages/Tiendas";
import FastFood from "../pages/FastFood";
import SuperMarket from "../pages/SuperMarket";
import Register from "../pages/Registro";
import EmpleadoUser from "../pages/EmpleadoUser";


function AppRouter() {
  return (
    <BrowserRouter>
    {/* Definimos las rutas de la aplicación */ }
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Tiendas" element={<Tiendas />} />
        <Route path="/Tiendas/FastFood" element={<FastFood />} />
        <Route path="/Tiendas/SuperMarket" element={<SuperMarket />} />
        <Route path="/registrar" element={<Register />} />
        <Route path="/EmpleadoUser" element={<EmpleadoUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;