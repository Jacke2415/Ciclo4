import MaterialTable from "material-table";
//import { AddBox, ArrowDownward, Remove } from "@material-ui/icons";
import tableIcons from "./TableIcons";

const columns=[
       
    {title:'Mes liquidado',field:'mes'},
    {title:'Tipo Liquidación',field:'tipoLiquidacion'},
    {title:'Fecha Inicio', field:'fechainicio'},
    {title:'Fecha Final', field:'fechaFinal'},
    {title:'Total Nomina', field:'total', type:"numeric"}
];
const data=[
{estado:'Pagada', mes:'Enero' , tipo:'Mensual', inicio:"01-01-2021", final:'31-01-2021', total:2000000},
{estado:'Pagada', mes:'Febrero' , tipo:'Mensual', inicio:"01-02-2021", final:'28-02-2021', total:1800000},
{estado:'Pagada', mes:'Marzo' , tipo:'Mensual', inicio:"01-03-2021", final:'31-03-2021', total:2000000},
{estado:'Pagada', mes:'Abril' , tipo:'Mensual', inicio:"01-04-2021", final:'30-04-2021', total:1900000},
];

export const TablaNominas = () => {
  return(
  <div>
    <div class="container-md">
       <MaterialTable title="Listado de Nominas"
      columns={columns}
      data={data}
      icons={tableIcons} 
      

        options={{
            actionsColumnIndex: -1,
            headerStyle: {
                backgroundColor: '#00113b',
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
  )
  };
