import React  from "react"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Style = {
  width: '18rem',
};
const baseUrl="http://localhost:5000/signin/users/cedula"
const BuscarEmpleado = () =>{
  const [cedula, setCedula] =useState(""); 
  const [data, setData]=useState([ ]);
    const peticionGet=async(cedula)=>{
        await axios.get(baseUrl).then(response=>{
            setData(response.data)
        })
    }
    console.log(data);
    useEffect(()=>{
        peticionGet();
    },[])
    
    return(
      <>        
        <div className="container">
          <div className="row">
            <div className="col-6">
              <form className="card">
                
                <div className="row-3 mb-2">
                  <label htmlFor="cedula" className="visually-hidden">No Identificacion</label>
                  <input type="text" className="form-control" id="cedula" placeholder="No Identificación" 
                  value={cedula} onChange={(event) => {
                    setCedula({ setCedula: event.target.value })}} />                  
                </div>              
                <div className="row-3">
                  <button type="submit" className="btn btn-primary mb-3">Buscar</button>
                </div>
              </form>
            </div>
            <div className="col-6">
              <div className="card-body" style={{ padding: "5px"}}>
                  <h5 className="card-title">Nombre: Kelly Rolon</h5>
                  <p className="card-text"> Cargo: Contador <br /> Fecha Inicial: 01-01-2022 <br />
                  Fecha Final: 15-01-2022
                  </p>
                  <p className="card-text"> </p>
                  <button type="submit" className="btn btn-primary ">Aceptar</button> &nbsp; &nbsp; &nbsp; &nbsp;
                  <button type="submit" className="btn btn-danger">Rechazar</button>
              </div> 
            </div>            
          </div>
        </div>
      </>  
          
    )
}
export default BuscarEmpleado;

    

