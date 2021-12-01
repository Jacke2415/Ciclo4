import MaterialTable,{ MTableToolbar } from "material-table";
//import { AddBox, ArrowDownward, Edit, Event, Remove, DeleteIcon} from "@material-ui/icons";
import { AddBox, ArrowDownward, Edit, Event, Remove, DeleteIcon} from "./TableIcons";
import tableIcons from "./TableIcons";
import { Avatar, Container, Grid, Table, Tooltip } from "@material-ui/core";


const columns=[
    
    {title : "Nombre", field:'nombre', render:(row)=><Grid container alignItems="center">
        <Grid item sm={3}>
            <Avatar>{row.nombre[0]}</Avatar>
        </Grid>
        <Grid item>
            {row.nombre}
        </Grid>
        </Grid>},        
    {title:'Apellido', field:'apellido'  },
    {title:'Identificación',field:'identificacion',type:"numeric"},
    {title:'No. Contrato', field:'contrato'},
    {title:'Tipo de Contrato', field:'tipocontrato'},
    {title:'Salario', field:'salario', type:"numeric"}
];
const data=[
{nombre:'Luis', apellido:'Mercado' , identificacion:1111111, contrato:"2021-0001", tipocontrato:'fijo', salario:20000}
];

export const TablaFuncionario = () => {
  return (
     
  <div>
      <div class="container-md">
        <MaterialTable title="Listado de Funcionarios" 
            columns={columns} 
            data={data} 
            icons={tableIcons}
            actions={[
                {
                    icon : tableIcons.Edit,
                    tooltip : 'Editar Funcionario',
                    onClick : (event, rowData)=>alert('Editar al Funcionario: '+rowData.nombre+" "+rowData.apellido)
                },
                {
                    icon : tableIcons.Delete,
                    tooltip : 'Eliminar Funcionario',
                    onClick : (event, rowData)=>window.confirm('Esta seguro de eliminar este funcionario: '+rowData.nombre+" "+rowData.apellido)
                }
                
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
  );
};




