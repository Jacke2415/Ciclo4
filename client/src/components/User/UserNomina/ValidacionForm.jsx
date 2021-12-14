import { useState } from "react";

export const handleErrors = (isValidEmail, isValidPassword)=>{
    let error = {email: "", password:""};

    if(!isValidEmail){
        error.email= "Correo Invalido";
    }
    if(!isValidPassword){
        error.password= "El password debe contener de 8 a 10 caracteres";
    }
    return error;
};

