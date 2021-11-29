import React from "react";

const FormLogin = () => {
    return(
        <form>
            <p><input type="text" placeholder="username" name="user" /></p>
            <input type="text" placeholder="password" name="password" /> 
            <input type="button" value="Login" />
        </form> 
    );
}
export default FormLogin