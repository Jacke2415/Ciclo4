import React from "react";
import DNavbar from "./Navbar.jsx";
import {
  svgperfil,
  svgCreateNomina,
  svgGestionarVacaciones,
  svgCreateEmpleado,
  svgGestionarPermisos,
  svgSalario,
} from "./LogosNavbar.jsx";

const NavbarN = () => {
  const items = [
    {
      name: "Perfil de Usuario",
      url: "/signin/userNomina/Perfil",
      svg: svgperfil(),
    },
    {
      name: "Crear Empleado",
      url: "/signin/userNomina/crearEmpleado",
      svg: svgCreateEmpleado(),
    },
    {
      name: "Crear Nomina",
      url: "/signin/userNomina/crearNomina",
      svg: svgCreateNomina(),
    },
    {
      name: "Gestionar Vacaciones",
      url: "/signin/userNomina/gestionarVacaciones",
      svg: svgGestionarVacaciones(),
    },
    {
      name: "Gestionar Permisos",
      url: "/signin/userNomina/gestionarPermisos",
      svg: svgGestionarPermisos(),
    },
    {
      name: "Reporte Salario",
      url: "/signin/userNomina/reporteSalario",
      svg: svgSalario(),
    },
  ];
  return <DNavbar items={items} />;
};

export default NavbarN;
