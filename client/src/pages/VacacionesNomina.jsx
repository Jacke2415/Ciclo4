import React from "react";
import BuscarEmpleado from "../components/User/UserNomina/BuscarEmpleado";
import  TablaVacaciones  from "../components/User/UserNomina/TablaVacaciones"
import NavbarNomina from "../components/Nav_Bar/NavbarNomina";

const VacacionesNomina = () => {
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
                                <h1>Gestion Empleados - Vacaciones</h1>
                            </div>
                            <br /><br /><br />
                            <BuscarEmpleado/>
                            <br /><br /><br />
                            <TablaVacaciones/>
                         </div>  
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default VacacionesNomina