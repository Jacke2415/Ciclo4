import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../../public/css/Login.css';
import axios from 'axios'

const FormLogin = () => {
    const [user_Login, setUser_Login] = useState({
        email:'',
        password:''
    });

axios.defaults.withCredentials = true;
const loginUser = (e) => {
    e.preventDefault();
    axios
        .post("http://localhost:5000/signin", user_Login)
        .then(() => {
            window.location.reload(false)
            })
        .catch((error) => {
            console.log(error);
        });
};    

    return(
<<<<<<< HEAD
        <form className ="d-grid gap-2 col-2 min-auto">
            <p><input type="text" placeholder="username" name="user" /></p>
            <input type="password" placeholder="password" name="password" /><br/> 
            <Link to = '/singin/userNomina/Perfil' type="button" className= 'btn btn-secondary'>Login</Link>
=======
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
            <button type="submit" className= 'btn btn-secondary'>Login</button>
>>>>>>> ad966ea00a1f8ad4319b60e295f60cabd418ed38
        </form> 
    );
}
export default FormLogin