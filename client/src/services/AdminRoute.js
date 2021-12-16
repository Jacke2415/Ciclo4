import React from "react";
import { Routes, Route, Redirect } from "react-router-dom";

/* pages */
import PerfilUserAdmin from './pages/PerfilUserAdmin';
import GestinarEmpleadoAdmin from './pages/GestionarEmpleadoAdmin';
import LiquidarNominaAdmin from './pages/LiquidarNominaAdmin';
import ReporteSalario from './pages/ReporteSalario';
import Formulario from '../src/components/User/UserNomina/Formulario';
import SoliRep from './components/User/UserEmpleado/SolicitaRep';
import GraficoNomina from './pages/GraficoNomina.jsx';


/* import HomePage from './HomePage';
 */
const AdminRoute = () => {
  return (
    <Routes>
      <Route
        path="/signin/administrador/perfilAdministrador"
        element={<PerfilUserAdmin />}
      />
      <Route
        path="/signin/administrador/gestionarEmpleado"
        element={<GestinarEmpleadoAdmin />}
      />
      <Route
        path="/signin/administrador/gestionarNomina"
        element={<LiquidarNominaAdmin />}
      />
      <Route
        path="/signin/administrador/gestionarVacaciones"
        element={<ReporteSalario />}
      />
      <Route
        path="/signin/administrador/gestionarPermiso"
        element={<Formulario />}
      />
      <Route
        path="/signin/administrador/generarReportes"
        element={<SoliRep />}
      />
      <Route
        path="/signin/administrador/graficaNomina"
        element={<GraficoNomina />}
      />

      <Redirect to="/signin/administrador/perfilAdministrador" />
    </Routes>
  );
};

export default AdminRoute;
