import React from "react";
import { Routes, Route, Redirect } from "react-router-dom";
/* Pages */
import LiquidarNomina from "./pages/LiquidarNomina";
import CrearEmpleado from "./pages/CrearEmpleado";
import CrearNomina from "./pages/CrearNomina";
import VacacionesNomina from "./pages/VacacionesNomina";
import PermisosNomina from "./pages/PermisosNomina";
import ReporteSalario from "./pages/ReporteSalario";
import Formulario from "../src/components/User/UserNomina/Formulario";
import PerfilUserNomina from "./pages/PerfilUserNomina.jsx";
import GraficoNomina from './pages/GraficoNomina.jsx';

const NominaRoute = () => {
  return (
    <Routes>
      <Route path="/signin/userNomina/Perfil" element={<PerfilUserNomina />} />
      <Route path="/signin/userNomina/crearNomina" element={<CrearNomina />} />
      <Route
        path="/signin/userNomina/liquidarNomina"
        element={<LiquidarNomina />}
      />
      <Route
        path="/signin/userNomina/reporteSalario"
        element={<ReporteSalario />}
      />
      <Route path="/signin/userNomina/formulario" element={<Formulario />} />
      <Route
        path="/signin/userNomina/crearEmpleado"
        element={<CrearEmpleado />}
      />
      <Route
        path="/signin/userNomina/liquidarNomina"
        element={<LiquidarNomina />}
      />
      <Route
        path="/signin/userNomina/gestionarVacaciones"
        element={<VacacionesNomina />}
      />
      <Route
        path="/signin/userNomina/gestionarPermisos"
        element={<PermisosNomina />}
      />
      <Route
        path="/signin/userNomina/GraficaNomina"
        element={<GraficoNomina />}
      />
     
      <Redirect to="/signin/userNomina/Perfil" />
    </Routes>
  );
};

export default NominaRoute;
