import React, { useEffect }from 'react';
import { useDispatch } from "react-redux";
import "../../../public/css/PerfilUser.css";
import { checkUser } from "../../../redux/apiCalls/authApiCalls";

const Perfil = () => {

  const dispatch = useDispatch();
  
  const user = JSON.parse(JSON.parse(localStorage.getItem("persist:auth")).currentUser)
    
  useEffect(()=>{
    checkUser(dispatch);
  }, [dispatch])

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
                          id = 'nombre'
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
                          value= {user.apellido}
                          placeholder="Apellido"
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
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="labels">Direccion</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Direccion"
                          value={user.direccion}
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="labels">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          value={user.email}
                        />
                      </div>
                    </div>
                    {/* <div className="row mt-3">
                      <div className="col-md-6">
                        <label className="labels">Salario</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Pais"
                          value= {user.salario}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="labels">Fecha de Ingreso</label>
                        <input
                          type="text"
                          className="form-control"
                          value={user.fecha_ingreso}
                          placeholder="Ciudad"
                        />
                      </div> 
                    </div>*/}
                  </div>
                </div>



              </div>

            </div>
          
     
    );
}
export default Perfil;
