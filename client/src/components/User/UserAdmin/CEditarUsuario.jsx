import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export default function CEditarUsuario(props) {
  const [user, setUser] = useState({
    nombre: "",
  });
  const [error, setError] = useState({});
  const HandleEditarUser = () => {};
  const HandleCrearUser = () => {};

  const GetData = async () => {
    const conditional = {
      cedula: props.cedula
    }
    try{
      const respuesta = await axios.post('http://localhost:5000/users/cedula', conditional)
      console.log("Respuesta consulta: \n", props)
      setUser(respuesta.data);
    }catch(error){
      console.log("GetData Error: \n",error)
    }


  }
  useEffect(() => {
    GetData()
  }, []);

  return (
    <>
      <Container>
        <form
          className="row"
          onSubmit={
            props.tipo === "editar" ? HandleEditarUser : HandleCrearUser
          }
          style={{ position: "relative" }}
        >
          <h2>Informacion Empleado</h2>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={
                    error.nombre ? "form-control is-invalid" : "form-control"
                  }
                  id="nombre"
                  placeholder="Nombre"
                  value={user.nombre}
                  onChange={(event) => {
                    setUser({ ...user, nombre: event.target.value });
                  }}
                />

                <label for="">Nombre</label>
                <div className="text-danger">{error.nombre}</div>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={
                    error.apellido ? "form-control is-invalid" : "form-control"
                  }
                  id="apellido"
                  placeholder="Apellido"
                  value={user.apellido}
                  onChange={(event) => {
                    setUser({ ...user, apellido: event.target.value });

                    /* const isValidLetras = validator.isAlpha(user.apellido);
                                  if (!isValidLetras) {
                                      setError((error) => {
                                          return { ...error, apellido: "El Apellido Solo debe contener letras" };
                                      });
                                  } else {
                                      setError((error) => {
                                          return { ...error, apellido: "" };
                                      });

                                  } */
                  }}
                />
                <label htmlFor="">Apellido</label>
                <div className="text-danger">{error.apellido}</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <select
                className="form-select mb-3"
                aria-label="Default select example"
                id="tipo_identificacion"
                value={user.tipo_identificacion}
                onChange={(event) => {
                  setUser({
                    ...user,
                    tipo_identificacion: event.target.value,
                  });
                }}
              >
                <option selected>Tipo Identificación</option>
                <option value="CC">Cedula de Ciudadania</option>
                <option value="CE">Cedula de Extranjeria</option>
                <option value="Pasaporte">Pasaporte</option>
              </select>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={
                    error.cedula ? "form-control is-invalid" : "form-control"
                  }
                  id="cedula"
                  placeholder="No Identificación"
                  value={user.cedula}
                  onChange={(event) => {
                    setUser({ ...user, cedula: event.target.value });
                    /*const isValidCedula = validator.isLength(user.cedula, { min: 7, max: 10 });
                                  if (!isValidCedula) {
                                      setError((error) => {
                                          return { ...error, cedula: "El No identificacion solo debe contener numeros y solo de 8 a 10 caracteres" };
                                      });
                                  } else {
                                      setError((error) => {
                                          return { ...error, cedula: "" };
                                      });

                                  } */
                  }}
                />
                <label htmlFor="NoIdentificacion">Numero Identificación</label>
                <div className="text-danger">{error.cedula}</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className={
                    error.password ? "form-control is-invalid" : "form-control"
                  }
                  id="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={(event) => {
                    setUser({ ...user, password: event.target.value });
                  }}
                />
                <label htmlFor="">Password</label>
                <div className="text-danger">{error.password}</div>
              </div>
            </div>
            <div class="col">
              <div className="form-floating mb-3">
                <input
                  type="date"
                  className="form-control"
                  id="fecha_nacimiento"
                  placeholder="Fecha Nacimiento"
                  value={user.fecha_nacimiento}
                  onChange={(event) => {
                    setUser({
                      ...user,
                      fecha_nacimiento: event.target.value,
                    });
                  }}
                />
                <label htmlFor="">Fecha De Nacimiento</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <div
                  className="form-check form-check-inline"
                  value={user.sexo}
                  onChange={(event) => {
                    setUser({ ...user, sexo: event.target.value });
                  }}
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="myRadio"
                    value="Masculino"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    Masculino
                  </label>
                </div>
                <div
                  className="form-check form-check-inline"
                  value={user.sexo}
                  onChange={(event) => {
                    setUser({ ...user, sexo: event.target.value });
                  }}
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="myRadio"
                    value="Femenino"
                  />
                  <label className="form-check-label" for="inlineRadio2">
                    Femenino
                  </label>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={
                    error.telefono ? "form-control is-invalid" : "form-control"
                  }
                  placeholder="Telefono"
                  id="telefono"
                  value={user.telefono}
                  onChange={(event) => {
                    setUser({ ...user, telefono: event.target.value });
                    /* const isValidCedula = validator.isLength(user.telefono, { min: 8, max: 10 });
                                  const isValidNumero = validator.isNumeric(user.telefono);
                                  if (!isValidNumero) {
                                      setError((error) => {
                                          return { ...error, telefono: "El Telefono debe contener de 8 a 10 caracteres y debe ser numerico" };
                                      });
                                  } else if (!isValidCedula) {
                                      setError((error) => {
                                          return { ...error, telefono: "El Telefono debe contener de 8 a 10 caracteres y debe ser numerico" };
                                      });
                                  } else {
                                      setError((error) => {
                                          return { ...error, telefono: "" };
                                      });

                                  }*/
                  }}
                />
                <label htmlFor="">Telefono</label>
                <div className="text-danger">{error.telefono}</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={
                    error.direccion ? "form-control is-invalid" : "form-control"
                  }
                  id="direccion"
                  placeholder="Direccion"
                  required
                  value={user.direccion}
                  onChange={(event) => {
                    setUser({ ...user, direccion: event.target.value });
                    /* const isValidPassword = validator.isLength(user.direccion, { min: 12 });
                                  if (!isValidPassword) {
                                      setError((error) => {
                                          return { ...error, direccion: "La dirección debe contener mas de 12 caracteres" };
                                      });
                                  } else {
                                      setError((error) => {
                                          return { ...error, direccion: "" };
                                      });

                                  } */
                  }}
                />
                <label htmlFor="">Dirección</label>
                <div className="text-danger">{error.direccion}</div>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={
                    error.email ? "form-control is-invalid" : "form-control"
                  }
                  id="email"
                  placeholder="Email"
                  required
                  value={user.email}
                  onChange={(event) => {
                    setUser({ ...user, email: event.target.value });
                    /*const isValidEmail = validator.isEmail(user.email);
                                  if (!isValidEmail) {
                                      setError((error) => {
                                          return { ...error, email: "Correo Invalido" };
                                      });
                                  } else {
                                      setError((error) => {
                                          return { ...error, email: "" };
                                      });

                                  } */
                  }}
                />
                <label htmlFor="">Email</label>
                <div className="text-danger">{error.email}</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="date"
                  className="form-control"
                  id="fingreso"
                  placeholder="Fecha De Ingreso"
                  required
                  value={user.fecha_ingreso}
                  onChange={(event) => {
                    setUser({ ...user, fecha_ingreso: event.target.value });
                  }}
                />
                <label htmlFor="">Fecha De Ingreso</label>
              </div>
            </div>
            <div className="col">
              <select
                className="form-select  mb-3"
                aria-label=" "
                id="tcontrato"
                value={user.tipo_contrato}
                onChange={(event) => {
                  setUser({ ...user, tipo_contrato: event.target.value });
                }}
              >
                <option selected>Tipo De Contrato</option>
                <option value="Indefinido">A Termino Indefinido</option>
                <option value="Fijo">A Temino Fijo</option>
                <option value="ObraLabor">Por Obra o Labor</option>
                <option value="Temporal">Temporal</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={
                    error.salario ? "form-control is-invalid" : "form-control"
                  }
                  id="salario"
                  placeholder="Salario"
                  required
                  value={user.salario}
                  onChange={(event) => {
                    setUser({ ...user, salario: event.target.value });
                    const salariomin = parseInt(event.target.value);
                    console.log(salariomin);
                    /*const isValidNumero = validator.isNumeric(user.salario);*/
                    if (parseInt(salariomin) < 908526) {
                      setError((error) => {
                        return {
                          ...error,
                          salario:
                            "El Salario debe ser numerico y mayor o igual a 908.526 ",
                        };
                      });
                    } else {
                      setError((error) => {
                        return { ...error, salario: "" };
                      });
                    }
                  }}
                />
                <label htmlFor="">Salario</label>
                <div className="text-danger">{error.salario}</div>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="cargo"
                  placeholder="Cargo"
                  required
                  value={user.cargo}
                  onChange={(event) => {
                    setUser({ ...user, cargo: event.target.value });
                    /* const isValidLetras = validator.isAlpha(user.cargo);
                                  console.log(user.cargo);
                                  if (!isValidLetras) {
                                      setError((error) => {
                                          return { ...error, cargo: "El Cargo Del Empleado Solo debe contener letras" };
                                      });
                                  } else {
                                      setError((error) => {
                                          return { ...error, cargo: "" };
                                      });

                                  } */
                  }}
                />
                <label htmlFor="">Cargo</label>
                <div className="text-danger">{error.cargo}</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={HandleEditarUser}
                >
                  {props.tipo === "editar"
                    ? "Editar Empleado"
                    : "Crear Empleado"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
}
