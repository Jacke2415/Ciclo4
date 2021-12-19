import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import tableIcons from "./TableIcons";
import axios from "axios";

const columns = [
  { title: "Nombre", field: "nombre" },
  { title: "Apellido", field: "apellido" },
  { title: "Identificación", field: "cedula", type: "numeric" },
  { title: "Salario", field: "salario", type: "numeric" },
  { title: "Salud", field: "deducciones", type: "numeric" },
  { title: "Vacaciones", field: "vacaciones", type: "numeric" },
  { title: "Días", field: "dias", type: "numeric" },
  { title: "Total", field: "total", type: "numeric" }

];

const baseUrl = "http://localhost:5000/users";



export const TablaLiquidar = () => {
  const [data, setData] = useState([]);
    const peticionGet = async () => {
        await axios.get(baseUrl).then(response => {
            setData(response.data)
        })
    }

    

    useEffect(() => {
        peticionGet();
    }, [])

  return (
    <>
      <div>
        <br />
        <div class="container-md">
          <MaterialTable
            title="Listado de Funcionarios a Liquidar"
            columns={columns}
            data={data}
            icons={tableIcons}
            
            options={{
              /* selection: true, */
              headerStyle: {
                backgroundColor: "#00113b",
                color: "#FFF",
              },
              exportButton: true,
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
