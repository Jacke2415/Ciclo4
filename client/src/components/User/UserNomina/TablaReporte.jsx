import MaterialTable, { MTableToolbar } from "material-table";

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
import axios from "axios";
import React, { useState, useEffect } from "react";

const columns = [
  { title: "Nombre", field: "nombre" },
  { title: "Apellido", field: "apellido" },
  { title: "Identificación", field: "cedula", type: "numeric" },
  { title: "Salario", field: "salario", type: "numeric" },
  


];

const baseUrl = "http://localhost:5000/users/active";
const baseUrlFilter = "http://localhost:5000/users/filter";

export const TablaReporte = () => {
  const [data, setData] = useState([]);
  const [valueSelect, setValueSelect] = useState([]);
  const [value, setValue] = useState([]);

  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {

       response.data.forEach(element => {
            console.log(element);
        });

      setData(response.data);
    });
  };

  const peticionGetFilter = async () => {
    await axios.get(baseUrlFilter,{ params: {
        valueSelect: valueSelect,
        value: value
      }}).then((response) => {
        console.log(response);
      setData(response.data);
    });
  };

  useEffect(() => {
    peticionGet();
  }, []);
 
  function handleValueChange(e) {
    setValueSelect(e.target.value);
    }

    function onClickReport(e) {
        console.log(value)
        console.log(valueSelect)
        peticionGetFilter();
    }

  return (
    <>
        <div
            className="row border m-4 p-2 rounded"
            style={{
            backgroundColor: "#f7f7f7",
            }}>
          <div className="col-12">
            <span>
              <h6>Reporte de Salarios</h6>
            </span>
          </div>
          <div className="col-12">
            <form
              className="d-flex justify-content-around"
              
            >
              <div className="col-4 p-1">
                <select
                  className="form-select mb-2"
                  aria-label="Default select example"
                  id="escogersalario" required onChange={handleValueChange}
                  /* onBlur= {handleBlur} */
                  
                >
                  <option selected>Escoja valor del reporte</option>
                  <option value="mayor">Salarios Mayores</option>
                  <option value="menor">Salarios Menores</option>
                </select> 
                <div class="invalid-feedback">
                      Por favor escoja el reporte que necesita
                </div> 
              </div>
              <div className="col-3 p-1">
                <input
                  type="text"
                  className="form-control"
                  id="descripcion"
                  placeholder="Ingrese salario"
                  value={value}
                  onChange={e => setValue(e.target.value)}

                  
                />
                
              </div>

            </form>
            <div className="row">
              <div className="col-4">
                <div className="d-grid gap-2">
                <button type="button" class="btn btn-primary" onClick={onClickReport}>
                  Generar Reporte
                </button>
                </div>
              </div>
              <div className="col-2">
                <button type="button" class="btn btn-primary">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
        <br />
        <div class="container-md">
          <MaterialTable
            title="Listado de Funcionarios"
            columns={columns}
            data={data}
            icons={tableIcons}
            options={{
              /* selection: true, */
              headerStyle: {
                backgroundColor: "#0d6fff",
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
