import React from "react";
import BuscarPermisos from "../components/User/UserNomina/BucarPermisos";
import  TablaVacaciones  from "../components/User/UserNomina/TablaVacaciones"


const PermisosNomina = () => {
    return(
        <>  
            <div className="container">
           
                <div className="">
                    <h1>Gestion Empleados - Permisos</h1>
                </div>
                <br /><br /><br />
                <BuscarPermisos/>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <TablaVacaciones/>
                
            </div>  
        </>
    )
}
export default PermisosNomina