import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../../../src/redux/apiCalls/authApiCalls";
import { Link } from 'react-router-dom';
import '../../public/css/Login.css';

const FormLogin = () => {

    const [user_Login, setUser_Login] = useState({})
    const { error, currentUser } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const userLink = () => {
        if (currentUser.rol === 2){
            const userLink = '/signin/administrador/perfilAdministrador'
            return userLink
        }
        if (currentUser.rol === 1){
            const userLink = '/signin/userNomina/Perfil'
            return userLink
        }
        if (currentUser.rol === 0){
            const userLink = '/signin/userEmpleado/perfilEmpleado'
            return userLink
        }
        else {
            const userLink = '/signin'
            return userLink
        }
    }

    const loginUser = (e) => {
        e.preventDefault();
        login(dispatch, user_Login);
    }

    console.log('Datos enviados')
    console.log(user_Login)
    console.log('Datos recibidos')
    /*console.log(currentUser.cedula)*/
    console.log('link correspondiente')
    console.log(userLink())
    
    return(
        <form className ="d-grid gap-2 col-2 min-auto" onSubmit = {loginUser}>
            <p><input 
            type="email" 
            className="form-control"
            id="email"
            placeholder="email"
            value ={user_Login.email}   
            onChange= {(event) => setUser_Login({...user_Login, email: event.target.value})} 
            required /></p>
            <input 
            type="password" 
            className="form-control"
            id="password"
            placeholder="password"
            value ={user_Login.password}   
            onChange= {(event) => setUser_Login({...user_Login, password: event.target.value})} 
            required  /><br/> 
            {/* {(currentUser.rol === 2 ) ?
            <Link to = '/signin/administrador/perfilAdministrador' type="submit" className= 'btn btn-secondary'>Login</Link>:<Link to = '/signin' type="submit" className= 'btn btn-secondary'>Login</Link>
            } */}
            {/* (currentUser.rol === 1 ) ?
            <Link to = '/signin/userNomina/Perfil' type="submit" className= 'btn btn-secondary' onClick = {loginUser}>Login</Link>:
            
            }  */}
            <button type="submit" className= 'btn btn-secondary'>Login</button>
            {/* <Link to = '/signin/administrador/perfilAdministrador' type="submit" className= 'btn btn-secondary'>Login</Link> */}
        </form> 
    );
}
export default FormLogin