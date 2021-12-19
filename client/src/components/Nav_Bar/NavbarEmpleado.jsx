import React from "react";
import DNavbar from "./Navbar.jsx";
import {
  svgperfil,
  svgSolicitarPermiso,
  svgSolicitarVacaciones,
  svgSolicitarCertificado,
  svgSalario,
} from "./LogosNavbar.jsx";

const NavbarEmpleado = () => {
  const items = [
    {
      name: "Perfil de Usuario",
      url: "/signin/userEmpleado/perfilEmpleado",
      svg: svgperfil(),
    },
    {
      name: "Solicitar Permisos",
      url: "/signin/userEmpleado/solicitarPermiso",
      svg: svgSolicitarPermiso(),
    },
    {
      name: "Solicitar Vacaciones",
      url: "/signin/userEmpleado/solicitarVaciones",
      svg: svgSolicitarVacaciones(),
    },
    {
      name: "Certificados Laborales",
      url: "/signin/userEmpleado/solicitarCertificado",
      svg: svgSolicitarCertificado(),
    },
    {
      name: "Solicitar Reportes de Pago",
      url: "/signin/userEmpleado/reporteNomina",
      svg: svgSalario(),
    },
  ];

  return <DNavbar items={items} />;
};

export default NavbarEmpleado;
