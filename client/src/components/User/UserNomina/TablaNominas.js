import MaterialTable from "material-table";
//import { AddBox, ArrowDownward, Remove } from "@material-ui/icons";
import tableIcons from "./TableIcons";
import React, { useState, useEffect } from "react";
import axios from "axios";


const columns = [
  { title: "Mes liquidado", field: "mes" },
  { title: "Tipo Liquidación", field: "tipoLiquidacion" },
  { title: "Fecha Inicio", field: "fechaInicio" },
  { title: "Fecha Final", field: "fechaFin" },
  { title: "Total Nomina", field: "total", type: "numeric" },
];
const baseUrl="http://localhost:5000/nomina"
export const TablaNominas = () => {
  const [data, setData] = useState([]);
  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
     setData(response.data);
    });
  };
  useEffect(() => {
    peticionGet();
  }, []);
  return (
    <div>
      <div class="container-md">
        <MaterialTable
          title="Listado de Nominas"
          columns={columns}
          data={data}
          icons={tableIcons}
          options={{
            actionsColumnIndex: -1,
            headerStyle: {
              backgroundColor: "#00113b",
              color: "#FFF",
            },
            //selection: true
          }}
          localization={{
            header: {
              actions: "Acciones",
            },
          }}
        />
      </div>
    </div>
  );
};
