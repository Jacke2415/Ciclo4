import React from "react";
import BuscarPermisos from "../components/User/UserNomina/BucarPermisos";
import  TablaVacaciones  from "../components/User/UserNomina/TablaVacaciones"
import NavbarNomina from "../components/Nav_Bar/NavbarNomina";

const PermisosNomina = () => {
    return(
        <>  
            <div className="container-lg">
                <div className="row">
                    <div className="col">
                        <NavbarNomina />
                    </div>
                    <div className="col-10">
                        <div className="container">
                            <div className="">
                                <h1>Gestion Empleados - Permisos</h1>
                            </div>
                            <br /><br /><br />
                            <BuscarPermisos/>
                            <br /><br /><br /><br /><br /><br /><br /><br />
                            <TablaVacaciones/>
                        </div> 
                    </div>
                </div>
            </div>
            
             
        </>
    )
}
export default PermisosNomina