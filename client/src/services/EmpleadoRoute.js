import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PerfilEmpleado from "./components/User/UserEmpleado/PerfilUser.jsx";
import SoliRep from "./components/User/UserEmpleado/SolicitaRep";
import SolicitarPermiso from "./components/User/UserEmpleado/SolicitarPermiso";
import SolicitarVacaciones from "./components/User/UserEmpleado/SolicitarVac";
/* import HomePage from './HomePage';
 */
const EmpleadoRoute = () => {
  return (
    <Switch>
      <Route
        path="/signin/userEmpleado/perfilEmpleado"
        element={<PerfilEmpleado />}
      />
      <Route path="/signin/userEmpleado/reporteNomina" element={<SoliRep />} />
      <Route
        path="/signin/userEmpleado/solicitarPermiso"
        element={<SolicitarPermiso />}
      />
      <Route
        path="/signin/userEmpleado/solicitarVaciones"
        element={<SolicitarVacaciones />}
      />
      <Route
        path="/signin/userEmpleado/solicitarCertificado"
        element={<SoliRep />}
      />

      <Redirect to="/signin/userEmpleado/perfilEmpleado" />
    </Switch>
  );
};

export default EmpleadoRoute;
