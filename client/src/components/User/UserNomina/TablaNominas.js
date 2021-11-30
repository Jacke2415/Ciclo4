import MaterialTable from "material-table";
import { AddBox, ArrowDownward, Remove } from "@material-ui/icons";
import tableIcons from "./TableIcons";

const columns=[
    {title : "Estado", field:'estado'    },
    {title:'Mes Liquidado', field:'mes'  },
    {title:'Tipo Liquidación',field:'tipo'},
    {title:'Fecha Inicio', field:'inicio'},
    {title:'Fecha Final', field:'final'},
    {title:'Total Nomina', field:'total', type:"numeric"}
];
const data=[
{estado:'Pagada', mes:'Enero' , tipo:'Mensual', inicio:"01-01-2021", final:'31-01-2021', total:2000000},
{estado:'Pagada', mes:'Febrero' , tipo:'Mensual', inicio:"01-02-2021", final:'28-02-2021', total:1800000},
{estado:'Pagada', mes:'Marzo' , tipo:'Mensual', inicio:"01-03-2021", final:'31-03-2021', total:2000000},
{estado:'Pagada', mes:'Abril' , tipo:'Mensual', inicio:"01-04-2021", final:'30-04-2021', total:1900000},
];

export const TablaNominas = () => {
  return <MaterialTable title="Listado de Nominas" columns={columns} data={data} icons={tableIcons} />;
};
