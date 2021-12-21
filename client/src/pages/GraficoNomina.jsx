//import '../../../public/css/Login.css'
import NavbarAdmin from '../components/Nav_Bar/NavbarAdmin';
import {Grafico} from '../components/Graphics/grafico.jsx';
import Background from "../components/Login/Background";
export default function GraficoNomina() {
    const gdata = [2001000, 900000]
    const labels = ['Empleado mayor de', 'Empleado menor de']
    return (
      <>
        <div className="container-lg">
          <div className="row">
            <div className="col">
              <Background />
              <NavbarAdmin />
            </div>
            <div className="col-10">
                <div className="container">
              <div className="row d-flex justify-content-center">
                  <div className="col-12">
                      <h1>Grafico Nomina</h1>
                  </div>
                  <div className="col-12">
                      <span> Descripcion aqui..</span>
                  </div>
                  <div className="col-7">
                      <br/>
                        <Grafico data={gdata} labels={labels}/>

                  </div>
                 
              </div>

                </div>
              
            </div>
           
          </div>
        </div>
        
        
      

      </>
    );
  }

  
