import '../../public/css/inicio.css';
import nomina from '../../public/img/nominas.png';
import '../../public/js/inicio'


export default function Plantilla1(){ 
      
    return (              
    <div className="accordian" id="accordian"> 
             
             
        <img className="mx-lg-5" src={nomina} weight="90px" height="90px" style={{ marginLeft: '20px', borderRadius: '10px' }} alt = ''></img> 
            
        <ul className="show-dropdown main-navbar">              
                <div className="selector-active">
                    <div className="top"></div>
                    <div className="bottom"></div>
                </div>

                <li className="active">
                    <a href={'javascript:void(0)'}><i className="fas fa-user-edit"></i>Perfil Usuario</a>
                </li>
                <li>
                    <a href={'javascript:void(0)'}><i className="fas fa-money-check-alt"></i>Reporte Nomina</a>
                </li>
                <li>
                    <a href={'javascript:void(0)'}><i className="far fa-calendar-alt"></i>Solicitar Vacaciones</a>
                </li>
                <li>
                    <a href={'javascript:void(0)'}><i className="far fa-file"></i>Solicitar Certificados</a>
                </li>
                <li>
                    <a href={'javascript:void(0)'}><i className="far fa-clipboard"></i>Solicitar Permisos</a>
                </li>
            </ul>
        </div>
         
    
  );
}

