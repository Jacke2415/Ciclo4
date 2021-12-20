import React from "react";
import BuscarPermisos from "../components/User/UserNomina/BucarPermisos";
import TablaVacaciones from "../components/User/UserNomina/TablaVacaciones";
import NavbarNomina from "../components/Nav_Bar/NavbarNomina";
import Background from "../components/Login/Background";

const PermisosNomina = () => {
    return (
        <>
            <div className="container-lg">
                <div className="row">
                    <div className="col">
                        <Background />  
                        <NavbarNomina />
                    </div>
                    <div className="col-10">
                        <div className="container">
                            <div className="">
                                <h1>Gestion Empleados - Permisos</h1>
                            </div>

                            <BuscarPermisos />
                            <br />
                            <TablaVacaciones />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default PermisosNomina