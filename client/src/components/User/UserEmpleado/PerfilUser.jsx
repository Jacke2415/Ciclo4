import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { checkUser } from "../../../redux/apiCalls/authApiCalls";
import "../../../public/css/PerfilUser.css";

const Perfil = (props) => {
  
  const dispatch = useDispatch();
  
  const user = JSON.parse(JSON.parse(localStorage.getItem("persist:auth")).currentUser)
  
  useEffect(() => {
    checkUser(dispatch);
  }, [dispatch])
  
  
    const [enabled, setEnabled] = useState(true);
    const handleGameClick = () => {
      setEnabled(!enabled);
    }
  
  return (
    <div className="content">
      <div className="row">
        <div className="col-md-3 bg-white border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQF2psCzfbB611rnUhxgMi-lc2oB78ykqDGYb4v83xQ1pAbhPiB&usqp=CAU" alt=""
            />
            <span className="font-weight-bold">Amelly</span>
            <span className="text-black-50">amelly12 @bbb.com</span>
            <span> </span>
          </div>
        </div>


        <div className="col-md-5 bg-white border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Perfil Empleado</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  id='nombre'
                  disabled
                  value={user.nombre}
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={user.apellido}
                  placeholder="Apellido"
                />
              </div>
              <div className="col-md-6">
                <label className="labels">N° Identificacion</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="N° Identificacion"
                  disabled
                  value=""
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Cargo</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cargo"
                  disabled
                  value=""
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Numero de Telefono</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Numero de Telefono"
                  value={user.telefono}
                  disabled={enabled}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Direccion</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Direccion"
                  value={user.direccion}
                  disabled={enabled}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  value={user.email}
                  disabled={enabled}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">Salario</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pais"
                  value={user.salario}
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Fecha de Ingreso</label>
                <input
                  type="text"
                  className="form-control"
                  value={user.fecha_ingreso}
                  placeholder="Ciudad"
                  disabled
                />
              </div>
            </div>
          </div>
        <button type="button" class="btn btn-primary" onClick={handleGameClick}>Editar Perfil</button>
        </div>
      </div>
    </div>
    

  );
}
export default Perfil;
