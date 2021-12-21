import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "../../../public/css/PerfilUser.css";
import { checkUser } from "../../../redux/apiCalls/authApiCalls";
import {
  registerStart,
  registerSuccess,
  registerFailure,
} from "../../../redux/slices/auth";
import axios from "axios";
const Perfil = (props) => {
  const [user, setUser] = useState({});
  const [enabled, setEnabled] = useState(true);
  const { currentUser } = useSelector((state) => state.auth);
  const [telefono, setTelefono] = useState(currentUser.telefono);
  const [direccion, setDireccion] = useState(currentUser.direccion);
  const handleGameClick = async () => {
    const data = {
      userData: {
        telefono: telefono,
        direccion: direccion,
      },
      user: {
        _id: currentUser._id,
      },
    };
    try {
      const res = await axios.post("http://localhost:5000/users/edit", data);

      dispatch(registerSuccess(res.data));
    } catch (error) {
      dispatch(registerFailure(error.response.data));
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    checkUser(dispatch);
  }, [dispatch]);

  console.log("Dato preguntado");
  console.log(user);
  console.log("Dato respondido");
  console.log(currentUser);

  return (
    <div className="content" style={{ position: "relative" }}>
      <div className="row">
        <div className="col-md-3 bg-white border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              src="https://www.cheso.com.py/images/users/31330.png"
              alt=""
            />
            <span className="font-weight-bold">
              {currentUser.nombre} {currentUser.apellido}
            </span>
            <span className="text-black-50">{currentUser.email}</span>
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
                  id="nombre"
                  disabled
                  value={currentUser.nombre}
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={currentUser.apellido}
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
                  value={currentUser.cedula}
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Cargo</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cargo"
                  disabled
                  value={currentUser.cargo}
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
                  value={telefono}
                  onChange={({ target }) => {
                    setTelefono(target.value);
                  }}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Direccion</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Direccion"
                  
                  value={direccion}
                  onChange={({ target }) => {
                    setDireccion(target.value);
                  }}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  disabled={enabled}
                  value={currentUser.email}
                  disabled
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
                  disabled
                  value={currentUser.salario}
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Fecha de Ingreso</label>
                <input
                  type="text"
                  className="form-control"
                  value={currentUser.fecha_ingreso}
                  placeholder="Ciudad"
                  disabled
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-primary"
            onClick={handleGameClick}
          >
            Editar Perfil
          </button>
        </div>
      </div>
    </div>
  );
};
export default Perfil;
