import React, { useState } from "react";
import { ValidacionForm } from "./ValidacionForm";
import "../../../public/css/Formulario.css"
import axios from 'axios'

const salariomin=908526;

const validationsForm = (form) => {
    let errors={};
    const expletras=(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/);
    const expemail=(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/);
    const expnumerica=(/^([0-9])*$/);
    const explongitud=(/^([0-9]){1,10}$/);

    if (form.nombre.length===0){
        errors.nombre="Debe Ingresar un 'Nombre' Valido ";
    }else if(!expletras.test(form.nombre)){
        errors.nombre="Solo debe contener letras y espacios";
    }
    
    if (form.apellido.length===0){
        errors.apellido="Debe Ingresar un 'Apellido' Valido ";
    }else if(!expletras.test(form.apellido)){
        errors.apellido="Solo debe contener letras y espacios";
    }
    
    if(form.identificacion.length===0){
        errors.identificacion="Debe Ingresar un 'No Identificación' Valido";
    }else if(!expnumerica.test(form.identificacion)){
        errors.identificacion="Su identificacion no es valida, solo debe contener numeros";
    }else if(!explongitud.test(form.identificacion)){
        errors.identificacion="Su identificacion no es valida, solo debe tener un maximo de 10 digitos";
    }

    if(form.telefono.length===0){
        errors.telefono="Debe Ingresar un 'No Telefono' Valido";
    }else if(!expnumerica.test(form.telefono)){
        errors.telefono="Solo debe contener numeros";
    }else if(!explongitud.test(form.telefono)){
        errors.telefono="El numero telefonico solo debe tener un maximo de 10 digitos ";
    }      
    
    if (form.direccion.length===0){
        errors.direccion="Debe Ingresar una Dirección Valida 'ej: C 50 # 37a 50'";
    }
    
    if (form.email.length===0){
        errors.email="Debe Ingresar un 'Email' Valido";
    }else if(!expemail.test(form.email)){
    errors.email="Debe Ingresar un Email Valido 'ejemplo@xxxx.com'";
    }
    
    if (form.salario.length===0){
        errors.salario="Debe Ingresar un 'Valor de Salario' Valido";
    }else if(!expnumerica.test(form.salario)){
        errors.salario="Solo debe contener numeros";
    }else if(form.salario<salariomin){
        errors.salario="El salario debe ser igual o mayor a $908.526"
    }

    if (form.cargo.length===0){
        errors.cargo="Debe Asignar un 'Cargo' al Empleado";
    }else if(!expletras.test(form.cargo)){
        errors.cargo="Solo debe contener letras y espacios";
    }
                        
    return errors;
}

const Formulario = () => {
    
    const [user, setUser] = useState({
        tipo_usuario:'',
        nombre:'',
        apellido:'',
        tipo_identificacion:'',
        cedula:'',
        password: '',
        fecha_nacimiento:'',
        sexo:'',
        telefono:'',
        direccion:'',
        email:'',
        fecha_ingreso:'',
        tipo_contrato:'',
        salario:'',
        cargo:'',
        estado:''
    });

    const {
        errors,
        handleBlur,
    } = ValidacionForm(user,validationsForm);

    const createUser = () => {
        axios.post('http://localhost:5000/users/create', user).then(() => {
            window.location.reload(false)
            console.log(user)
        }) 
    }
  
    return(
        <>
            <div className='container '>
                <p> <h2>Informacion Empleado</h2></p>
                <div className="">
                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" 
                                id="nombre" placeholder="Nombre" value ={user.nombre}  onBlur= {handleBlur} onChange= {(event) => {
                                    setUser({...user, nombre: event.target.value})
                                }} />
                                {errors.nombre && <p className="error"> {errors.nombre} </p>}
                                <label for="">Nombre</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" 
                                id="apellido" placeholder="Apellido" value ={user.apellido} onBlur= {handleBlur} onChange= {(event) => {
                                    setUser({...user, apellido: event.target.value})
                                }} />
                                <label for="">Apellido</label>
                                {errors.apellido && <p className="error"> {errors.apellido} </p>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <select className="form-select mb-3" aria-label="Default select example"
                            id="tidentificacion" value ={user.tipo_identificacion} onBlur= {handleBlur} onChange= {(event) => {
                                setUser({...user, tipo_identificacion: event.target.value})
                            }}>
                                <option selected>Tipo Identificación</option>
                                <option value="CC">Cedula de Ciudadania</option>
                                <option value="CE">Cedula de Extranjeria</option>
                                <option value="Pasaporte">Pasaporte</option>
                            </select>
                        </div>   
                        <div className="col">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" 
                                id="cedula" placeholder="No Identificación" 
                                value ={user.cedula} onBlur= {handleBlur} onChange= {(event) => {
                                    setUser({...user, cedula: event.target.value})
                                }} />
                                <label for="NoIdentificacion">
                                Numero Identificación</label>
                                {errors.identificacion && <p classNameName="error"> {errors.identificacion} </p>}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" 
                                id="password" placeholder="Password" value ={user.password} onBlur= {handleBlur} onChange= {(event) => {
                                    setUser({...user, password: event.target.value})
                                }} />
                                {errors.password && <p className="error"> {errors.password} </p>}
                                <label for="">Password</label>
                            </div>
                    </div>
                        
                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3">
                                <input type="date" className="form-control" 
                                id="fnacimiento" placeholder="Fecha Nacimiento" 
                                value ={user.fecha_nacimiento} onBlur= {handleBlur} onChange= {(event) => {
                                    setUser({...user, fecha_nacimiento: event.target.value})
                                }} />
                                <label for="">Fecha De Nacimiento</label>
                                {errors.fnacimiento && <p classNameName="error"> {errors.fnacimiento} </p>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating mb-3">
                                <div className="form-check form-check-inline" value ={user.sexo} onBlur= {handleBlur} onChange= {(event) => {
                                    setUser({...user, sexo: event.target.value})
                                }} >
                                    <input className="form-check-input" type="radio" name="myRadio" value="Masculino" />
                                    <label className="form-check-label" for="inlineRadio1">Masculino</label>
                                </div>
                                <div className="form-check form-check-inline" value ={user.sexo} onChange= {(event) => {
                                    setUser({...user, sexo: event.target.value})
                                }} >
                                    <input className="form-check-input" type="radio" name="myRadio" value="Femenino" />
                                    <label className="form-check-label" for="inlineRadio2">Femenino</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" 
                                placeholder="Telefono" required
                                value ={user.telefono} onBlur= {handleBlur} onChange= {(event) => {
                                    setUser({...user, telefono: event.target.value})
                                }} />
                                <label for="">Telefono</label>
                                {errors.telefono && <p className="error"> {errors.telefono} </p>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" 
                                id="direccion" placeholder="Direccion" required
                                value ={user.direccion} onBlur= {handleBlur} onChange= {(event) => {
                                    setUser({...user, direccion: event.target.value})
                                }} />
                                <label for="">Dirección</label>
                                {errors.direccion && <p className="error"> {errors.direccion} </p>}
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" 
                                id="email" placeholder="Email" required
                                value ={user.email} onBlur= {handleBlur} onChange= {(event) => {
                                    setUser({...user, email: event.target.value})
                                }} />
                                <label for="">Email</label>
                                {errors.email && <p className="error"> {errors.email} </p>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating mb-3">
                                <input type="date" className="form-control" 
                                id="fingreso" placeholder="Fecha De Ingreso" required
                                value ={user.fecha_ingreso} onBlur= {handleBlur} onChange= {(event) => {
                                    setUser({...user, fecha_ingreso: event.target.value})
                                }} />
                                <label for="">Fecha De Ingreso</label>
                                {errors.fingreso && <p className="error"> {errors.fingreso} </p>}
                            </div>
                        </div>
                    </div>
                    <div className="row"> 
                        <div className="col">
                            <select className="form-select  mb-3" aria-label=" "
                            id="tcontrato" value ={user.tipo_contrato} onBlur= {handleBlur} onChange= {(event) => {
                                setUser({...user, tipo_contrato: event.target.value})
                            }} >
                                <option selected>Tipo De Contrato</option>
                                <option value="Indefinido">A Termino Indefinido</option>
                                <option value="Fijo">A Temino Fijo</option>
                                <option value="ObraLabor">Por Obra o Labor</option>
                                <option value="Temporal">Temporal</option>
                            </select>
                        </div> 
                        <div className="col">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" 
                                id="salario" placeholder="Salario" required
                                value ={user.salario} onBlur= {handleBlur} onChange= {(event) => {
                                    setUser({...user, salario: event.target.value})
                                }} />
                                <label for="">Salario</label>
                                {errors.salario && <p className="error"> {errors.salario} </p>}
                            </div>
                        </div>
                    </div>
                    <div className="row"> 
                        <div className="col">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" 
                                id="cargo" placeholder="Cargo" required
                                value ={user.cargo} onBlur= {handleBlur} onChange= {(event) => {
                                    setUser({...user, cargo: event.target.value})
                                }} />
                                <label for="">Cargo</label>
                                {errors.cargo && <p className="error"> {errors.cargo} </p>}
                            </div>
                            
                        </div> 
                        <div className="col">
                            <div className="d-grid gap-2">
                                <button type="submit" 
                                className="btn btn-primary" onClick = {createUser}>Crear Empleado</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Formulario