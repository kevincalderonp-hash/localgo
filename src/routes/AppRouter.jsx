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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    {/* Definimos las rutas de la aplicación */ }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/tiendas" element={<Tiendas />} />
        <Route path="/tiendas/fast-food" element={<FastFood />} />
        <Route path="/tiendas/super-market" element={<SuperMarket />} />
        <Route path="/registrar" element={<Register />} />
        <Route path="/empleado-user" element={<EmpleadoUser />} />

        <Route path="*" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;