import React, { useState } from "react";
/* import { useSelector } from "react-redux"; */
import { useDispatch } from "react-redux";
import { login } from "../../../src/redux/apiCalls/authApiCalls";
import "../../public/css/Login.css";

const FormLogin = () => {
  const [user_Login, setUser_Login] = useState({});
  /* const { currentUser } = useSelector((state) => state.auth); */

  const dispatch = useDispatch();

  const loginUser = (e) => {
    e.preventDefault();
    login(dispatch, user_Login);
  };

  /* Para fines educativos despues de haber iniciado sesión
    console.log('Datos enviados')
    console.log(user_Login)
    console.log('Datos recibidos')
    console.log(currentUser.rol)
    console.log('final') */

  return (
    <div className="f-login">
      <form className="d-grid gap-2 col-2 min-auto" onSubmit={loginUser}>
        <p>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="email"
            value={user_Login.email}
            onChange={(event) =>
              setUser_Login({ ...user_Login, email: event.target.value })
            }
            required
          />
        </p>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="password"
          value={user_Login.password}
          onChange={(event) =>
            setUser_Login({ ...user_Login, password: event.target.value })
          }
          required
        />
        <br />
        <button type="submit" className="btn btn-secondary">
          Login
        </button>
      </form>
    </div>
  );
};
export default FormLogin;
