import React, {useState, useEffect}from 'react';
import MaterialTable from "material-table";
//import { AddBox, ArrowDownward, Edit, Event, Remove, DeleteIcon} from "@material-ui/icons";
/* import { AddBox, ArrowDownward, Edit, Event, Remove, DeleteIcon} from "./TableIcons"; */
import tableIcons from "./TableIcons";
import { Avatar, Grid } from "@material-ui/core";
import axios from 'axios';


const columns=[

    {title : "Nombre", field:'nombre', },        
    {title:'Apellido', field:'apellido'  },
    {title:'Identificación',field:'cedula',type:"numeric"},
    /* {title:'No. Contrato', field:'contrato'}, */
    {title:'Tipo de Contrato', field:'tipo_contrato'},
    {title:'Salario', field:'salario', type:"numeric"}
    
   /*  {title : "Nombre", field:'nombre', render:(row)=><Grid container alignItems="center">
        <Grid item sm={3}>
            <Avatar>{row.nombre[0]}</Avatar>
        </Grid>
        <Grid item>
            {row.nombre}
        </Grid>
        </Grid>},        
    {title:'Apellido', field:'apellido'  },
    {title:'Identificación',field:'cedula',type:"numeric"},
    
    {title:'Tipo de Contrato', field:'tipo_contrato'},
    {title:'Salario', field:'salario', type:"numeric"} */
    
];

const baseUrl="http://localhost:5000/signin/users"



/* {nombre:'Luis', apellido:'Mercado' , identificacion:1111111, contrato:"2021-0001", tipocontrato:'fijo', salario:20000},
{nombre:'Luis', apellido:'Eduardo' , identificacion:1111111, contrato:"2021-0001", tipocontrato:'fijo', salario:200000} */

export const TablaFuncionario = () => {
    const [data, setData]=useState([ ]);
    const peticionGet=async()=>{
        await axios.get(baseUrl).then(response=>{
            setData(response.data)
        })
    }

    useEffect(()=>{
        peticionGet();
    },[])
  return (
     <>
  <div>
      <br />
      <div class="container-md">
        <MaterialTable title="Listado de Funcionarios" 
            columns={columns} 
            data={data} 
            icons={tableIcons}
            
            
            
            options={{
                //selection: true,
                headerStyle: {
                    backgroundColor: ' rgb(0, 17, 59)',
                    color: '#FFF',
                    },
                exportButton: true,
               

            }}
            
            
            />
      </div>
    </div>
    </>
  );
}




