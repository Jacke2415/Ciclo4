import React from "react"

const TablaVacaciones = () =>{
    return(
        <>
            <div className='container'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No Identificacion</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Fecha Ingreso</th>
                            <th scope="col">Estado Solicitud</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">12345678</th>
                            <td>Mark</td>
                            <td>Gonzalez</td>
                            <td>01/02/2019</td>
                            <td>Pendiente</td>
                        </tr>
                        <tr>
                            <th scope="row">412563987</th>
                            <td>Natalia</td>
                            <td>Bermudez</td>
                            <td>15/06/2019</td>
                            <td>Pendiente</td>
                        </tr>
                        <tr>
                            <th scope="row">11310487</th>
                            <td>Esteban</td>
                            <td>Sanchez</td>
                            <td>29/10/2019</td>
                            <td>Pendiente</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        </>
    )
}
export default TablaVacaciones 