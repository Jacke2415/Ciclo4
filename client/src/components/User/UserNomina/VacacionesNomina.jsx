import React from "react";
import BuscarEmpleado from "./BuscarEmpleado";

import TablaVacaciones from "./TablaVacaciones";



const VacacionesNomina = () => {
    return(
        <>  
            <div className="container">
           
                <div className="row">
                    <h1>Gestion Empleados - Vacaciones</h1>
                </div>
                <br /><br /><br />
                <div className="row">
                    <BuscarEmpleado/>
                </div>
                <br /><br /><br /><br />
                <div className="row">
                   <TablaVacaciones/>
                </div> 
            </div>  
        </>
    )
}
export default VacacionesNomina