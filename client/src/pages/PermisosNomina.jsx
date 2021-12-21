import React from "react";
import BuscarPermisos from "../components/User/UserNomina/BucarPermisos";
import NavbarNomina from "../components/Nav_Bar/NavbarNomina";
import TablaPermisos from "../components/User/UserNomina/TablaPermisos";

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
                            <TablaPermisos/>
                        </div> 
                    </div>
                </div>
            </div>
            
             
        </>
    )
}
export default PermisosNomina