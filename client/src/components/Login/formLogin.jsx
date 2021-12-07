import React from "react";
import { Link } from 'react-router-dom'
import '../../public/css/Login.css'

const FormLogin = () => {
    return(
        <form className ="d-grid gap-2 col-2 min-auto">
            <p><input type="text" placeholder="username" name="user" /></p>
            <input type="text" placeholder="password" name="password" /><br/> 
            <Link to = '/singin/userEmpleado/perfilEmpleado' type="button" className= 'btn btn-secondary'>Login</Link>
        </form> 
    );
}
export default FormLogin