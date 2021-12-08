import React, { useState } from "react";
import { ValidacionForm } from "./ValidacionForm";
import "../../../public/css/Formulario.css"

const salariomin=908526;
const initialForm = {
    nombre:"",
    apellido:"",
    tidentificacion:"",
    identificacion:"",
    fnacimiento:"",
    masculino:"",
    femenino:"",
    telefono:"",
    direccion:"",
    email:"",
    fingreso:"",
    tcontrato:"",
    cargo:"",
    salario:"",

};

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
    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleSubmit,
        handleBlur,
    } = ValidacionForm(initialForm,validationsForm);
  
    return(
        <>
            
                
                <form className="card">
                    <h2>Informacion Empleado</h2>
                    <div class="row">
                        <div class="col">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" 
                                id="nombre" placeholder="Nombre" required
                                onBlur= {handleBlur} onChange= {handleChange} 
                                value ={form.name} />
                                <label for="">Nombre</label>
                                {errors.nombre && <p className="error"> {errors.nombre} </p>}
                            </div>
                        </div>
                        <div class="col">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" 
                                id="apellido" placeholder="Apellido" required
                                onBlur= {handleBlur} onChange= {handleChange} 
                                value ={form.apellido}/>
                                <label for="">Apellido</label>
                                {errors.apellido && <p className="error"> {errors.apellido} </p>}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div className="">
                                <select className="form-select mb-3" aria-label="Default select example"
                                id="tidentificacion">
                                <option selected>Tipo Identificación</option>
                                <option value="CC">Cedula de Ciudadania</option>
                                <option value="CE">Cedula de Extranjeria</option>
                                <option value="Pasaporte">Pasaporte</option>
                                </select>
                            </div>   
                        </div>
                        <div class="col">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" 
                                id="identificacion" placeholder="No Identificación" 
                                required onBlur= {handleBlur} onChange= {handleChange} 
                                value ={form.identificacion}/>
                                <label for="NoIdentificacion">
                                Numero Identificación</label>
                                {errors.identificacion && <p className="error"> {errors.identificacion} </p>}
                            </div>
                        </div>
                       
                    </div>
                    <div class="row">
                        <div class="col">
                            <div className="form-floating mb-3">
                                <input type="date" className="form-control" 
                                id="fnacimiento" placeholder="Fecha Nacimiento" 
                                onBlur= {handleBlur} onChange= {handleChange} 
                                value ={form.fnacimiento}/>
                                <label for="">Fecha De Nacimiento</label>
                                {errors.fnacimiento && <p className="error"> {errors.fnacimiento} </p>}
                            </div>
                        </div>
                        <div class="col">
                            <div className="form-floating mb-3">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value= {form.masculino} />
                                    <label className="form-check-label" for="inlineRadio1">Masculino</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value= {form.femenino} />
                                    <label className="form-check-label" for="inlineRadio2">Femenino</label>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div class="row">
                        <div class="col">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" 
                                id="telefono" placeholder="Telefono" required
                                onBlur= {handleBlur} onChange= {handleChange} 
                                value ={form.telefono}/>
                                <label for="">Telefono</label>
                                {errors.telefono && <p className="error"> {errors.telefono} </p>}
                            </div>
                            
                        </div>
                        <div class="col">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" 
                                id="direccion" placeholder="Direccion" required
                                onBlur= {handleBlur} onChange= {handleChange} 
                                value ={form.direccion}/>
                                <label for="">Dirección</label>
                                {errors.direccion && <p className="error"> {errors.direccion} </p>}
                            
                            </div> 
                            
                        </div>
                       
                    </div>
                    <div class="row">
                        <div class="col">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" 
                                id="email" placeholder="Email" required
                                onBlur= {handleBlur} onChange= {handleChange} 
                                value ={form.email}/>
                                <label for="">Email</label>
                                {errors.email && <p className="error"> {errors.email} </p>}
                            </div>
                            
                        </div>
                        <div class="col">
                            <div className="form-floating mb-3">
                                <input type="date" className="form-control" 
                                id="fingreso" placeholder="Fecha De Ingreso" required
                                onBlur= {handleBlur} onChange= {handleChange} 
                                value ={form.fingreso}/>
                                <label for="">Fecha De Ingreso</label>
                                {errors.fingreso && <p className="error"> {errors.fingreso} </p>}
                            </div> 
                            
                        </div>
                       
                    </div>
                    <div class="row">
                        <div class="col">
                            <select className="form-select  mb-3" aria-label=" "
                            id="tcontrato">
                                <option selected>Tipo De Contrato</option>
                                <option value="Indefinido">A Termino Indefinido</option>
                                <option value="Fijo">A Temino Fijo</option>
                                <option value="ObraLabor">Por Obra o Labor</option>
                                <option value="Temporal">Temporal</option>
                            </select> 
                            
                        </div>
                        <div class="col">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" 
                                id="salario" placeholder="Salario" required
                                onBlur= {handleBlur} onChange= {handleChange} 
                                value ={form.salario}/>
                                <label for="">Salario</label>
                                {errors.salario && <p className="error"> {errors.salario} </p>}
                            </div>  
                            
                        </div>
                       
                    </div>
                    <div class="row">
                        <div class="col">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" 
                                id="cargo" placeholder="Cargo" required
                                onBlur= {handleBlur} onChange= {handleChange} 
                                value ={form.cargo}/>
                                <label for="">Cargo</label>
                                {errors.cargo && <p className="error"> {errors.cargo} </p>}
                            </div> 
                            
                        </div>
                        <div class="col">
                            <div className="d-grid gap-2">
                                <button type="submit" 
                                className="btn btn-primary">Crear Empleado</button>
                            </div>    
                            
                        </div>
                       
                    </div>
           
        </form>
            
        </>
    )
}
export default Formulario