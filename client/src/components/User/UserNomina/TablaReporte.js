import MaterialTable from "material-table";
//import { AddBox, ArrowDownward, Edit, Event, Remove, DeleteIcon} from "@material-ui/icons";
import {
  AddBox,
  ArrowDownward,
  Edit,
  Event,
  Remove,
  DeleteIcon,
} from "./TableIcons";
import tableIcons from "./TableIcons";
import { Avatar, Container, Grid, Table, Tooltip } from "@material-ui/core";

const columns = [
  {
    title: "Nombre",
    field: "nombre",
    render: (row) => (
      <Grid container alignItems="center">
        <Grid item sm={3}>
          <Avatar>{row.nombre[0]}</Avatar>
        </Grid>
        <Grid item>{row.nombre}</Grid>
      </Grid>
    ),
  },
  { title: "Apellido", field: "apellido" },
  { title: "Identificación", field: "identificacion", type: "numeric" },
  { title: "No. Contrato", field: "contrato" },
  { title: "Tipo de Contrato", field: "tipocontrato" },
  { title: "Salario", field: "salario", type: "numeric" },
];
const data = [
  {
    nombre: "Luis",
    apellido: "Mercado",
    identificacion: 1111111,
    contrato: "2021-0001",
    tipocontrato: "fijo",
    salario: 20000,
  },
  {
    nombre: "Luis",
    apellido: "Eduardo",
    identificacion: 1111111,
    contrato: "2021-0001",
    tipocontrato: "fijo",
    salario: 200000,
  },
];

export const TablaReporte = () => {
  return (
    <>
      <div>
        <br />
        <div class="container-md">
          <MaterialTable
            title="Listado de Funcionarios"
            columns={columns}
            data={data}
            icons={tableIcons}
            options={{
              hidden: true,
              headerStyle: {
                backgroundColor: "#00113b",
                color: "#FFF",
              },
              exportButton: true,
            }}
          />
        </div>
      </div>
    </>
  );
};
