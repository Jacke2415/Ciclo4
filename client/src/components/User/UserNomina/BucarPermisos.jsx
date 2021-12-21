import React  from "react"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


export default function BuscarPermisos() {
  const [cedula, setCedula]=useState("");
  const [estado, setEstado]=useState("");  

  const actualizarPermiso = (n) => {
    n.preventDefault();
    axios
      .patch("http://localhost:5000/permisos/Actualizar", {
          cedula, estado,
      })
      .then((response) => {
        window.location.reload(false);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form className="card" onSubmit={actualizarPermiso}>
        <h6>Gestionar Permisos</h6>
        <div className="row">
          
          <div className="col-3">
            <div className="form">
              <input
                type="text"
                className="form-control"
                id="cedula"
                placeholder="No Identificación"
                value={cedula}
                onChange={(event) => {
                  setCedula(event.target.value);
                }}
              />
              
            </div>
          </div>
          <div className="col">
            <select
              className="form-select mb-2"
              aria-label="Default select example"
              id="estado"
              value={estado}
              onChange={(event) => {
                setEstado(event.target.value );
              }}
            >
              <option selected>Escoger</option>
              <option value="Aceptada">Aceptar</option>
              <option value="Rechazada">Rechazar</option>
            </select>
          </div>
          
          
          
        </div>

        <div className="row">
          <div className="col-4">
            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={actualizarPermiso}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
