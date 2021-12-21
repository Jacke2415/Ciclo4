import React from "react";
import DNavbar from "./Navbar.jsx";
import {
  svgperfil,
  svgCreateNomina,
  svgGestionarVacaciones,
  svgCreateEmpleado,
  svgGestionarPermisos,
  svgSalario,
  svgGraficaNomina,
} from "./LogosNavbar.jsx";

const NavbarAdmin = () => {
  const items = [
    {
      name: "Perfil de Usuario",
      url: "/signin/administrador/perfilAdministrador",
      svg: svgperfil(),
    },
    {
      name: "Gestionar Empleado",
      url: "/signin/administrador/gestionarEmpleado",
      svg: svgCreateEmpleado(),
    },
    {
      name: "Gestionar Nomina",
      url: "/signin/administrador/gestionarNomina",
      svg: svgCreateNomina(),
    },
    {
      name: "Gestionar Vacaciones",
      url: "/signin/administrador/gestionarVacaciones",
      svg: svgGestionarVacaciones(),
    },
    {
      name: "Gestionar Permisos",
      url: "/signin/administrador/gestionarPermisos",
      svg: svgGestionarPermisos(),
    },
    {
      name: "Generar Reporte",
      url: "/signin/administrador/generarReportes",
      svg: svgSalario(),
    },
    {
      name: "Grafica Nomina",
      url: "/signin/administrador/graficaNomina",
      svg: svgGraficaNomina(),
    },
    
  ];
  return <DNavbar items={items} />;
};

export default NavbarAdmin;
