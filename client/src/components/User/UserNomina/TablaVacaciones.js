import React from "react"
import MaterialTable from "material-table";
import tableIcons from "./TableIcons";

const columns=[
    {title: "No Identificación", field:'identificacion'    },
    {title:'Nombre', field:'nombre'  },
    {title:'Apellido',field:'apellido'},
    {title:'Fecha Ingreso', field:'fingreso'},
    {title:'Estado Solicitud', field:'estado'}
];
const data=[
{identificacion:'12345678', nombre:'Mark' , apellido:'Gonzalez', fingreso:"01/02/2019", estado:'Pendiente'},
{identificacion:'412563987', nombre:'Natalia' , apellido:'Bermudez', fingreso:"15/06/2019", estado:'Pendiente'},
{identificacion:'11310487', nombre:'Esteban' , apellido:'Sanchez', fingreso:"29/10/2019", estado:'Pendiente'},
];
const TablaVacaciones = () =>{
    return(
        <>
            <div>
                <div class="container-md">
                    <MaterialTable title="Listado de Solicitudes"
                    columns={columns}
                    data={data}
                    icons={tableIcons} 
                    actions={[
                        
                        
                        
                    ]}

                        options={{
                            actionsColumnIndex: -1,
                            headerStyle: {
                                backgroundColor: '#01579b',
                                color: '#FFF',
                                },
                                //selection: true

                            
                            

                        }}
                        localization={{
                            header:{
                                actions: 'Acciones'
                            }
                        }}
                    />

                    </div>
                </div>

            
            
        </>
    )
}
export default TablaVacaciones 