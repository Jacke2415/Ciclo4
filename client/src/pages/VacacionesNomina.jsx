import React from "react";
import BuscarEmpleado from "../components/User/UserNomina/BuscarEmpleado";
import  TablaVacaciones  from "../components/User/UserNomina/TablaVacaciones"


const VacacionesNomina = () => {
    return(
        <>  
            <div className="container">
           
                <div className="">
                    <h1>Gestion Empleados - Vacaciones</h1>
                </div>
                <br /><br /><br />
                <BuscarEmpleado/>
                <br /><br /><br />
                <TablaVacaciones/>
                
            </div>  
        </>
    )
}
export default VacacionesNomina