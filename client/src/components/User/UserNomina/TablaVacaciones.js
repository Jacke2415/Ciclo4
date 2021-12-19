import React from "react";
import MaterialTable from "material-table";
import tableIcons from "./TableIcons";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const columns = [
  { title: "No Identificación", field: "cedula" },
  { title: "Fecha Inicial", field: "fechaInicial" },
  { title: "Fecha Final", field: "fechaFinal" },
  { title: "Estado Solicitud", field: "estado" },
];
const baseUrl = "http://localhost:5000/vacaciones";

const TablaVacaciones = () => {
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
    <>
      <div>
        <div class="container-md">
          <MaterialTable
            title="Listado de Solicitudes"
            columns={columns}
            data={data}
            icons={tableIcons}
            actions={[]}
            options={{
              actionsColumnIndex: -1,
              headerStyle: {
                backgroundColor: "#01579b",
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
    </>
  );
};
export default TablaVacaciones;
