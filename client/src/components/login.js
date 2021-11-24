import React from 'react';
import "./template/css/login.css";


class Login extends React.Component {

    render() {
        
        return (

            <><div className="header">
                <div>Nominas</div>
            </div>
            <br />
            <div className="login">
                    <input type="text" placeholder="username" name="user" /><br />
                    <input type="password" placeholder="password" name="password" /><br />
                    <input type="button" value="Login" />
                </div></>
        );
    }
}

export default Login;