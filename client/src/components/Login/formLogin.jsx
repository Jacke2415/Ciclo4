import React, { useState } from "react";
import { Link } from 'react-router-dom'
import '../../public/css/Login.css'
const LoginService = require('../../services/login.js');
const FormLogin = () => {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const handleLogin = async (event) => {
        event.preventDefault();
        
        try{
            const user = await LoginService.login({
                correo,
                password
            });

            console.log(user);

            setUser(user);
            setCorreo('');
            setPassword('');

        }catch(e){
            
        }
    }
    return(
        <form onSubmit={handleLogin} className ="d-grid gap-2 col-2 min-auto">
            <input 
            type="text" 
            placeholder="email" 
            value={correo} 
            name="email"
            onChange={({target}) => setCorreo(target.value)} />
            <input
             type="text"
             value={password}
             placeholder="password" 
              name="password"
              onChange={({target}) => setPassword(target.value)} />
              <br/>
            <button type="submit" className="btn btn-secondary">Login</button> 
        </form> 
    );
}
export default FormLogin