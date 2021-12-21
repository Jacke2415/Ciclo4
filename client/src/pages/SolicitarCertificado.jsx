import SoliCerti from '../components/User/UserEmpleado/SoliCerti.jsx';
import NavbarEmpleado from '../components/Nav_Bar/NavbarEmpleado.jsx';
import Background from "../components/Login/Background";
export default function CrearEmpleado() {
    return (
      <>
        <div className="container-lg">
          <div className="row">
            <div className="col">
              <Background />
              <NavbarEmpleado />
            </div>
            <div className="col-10">
              <SoliCerti />
            </div>
          </div>
        </div>
        
      </>
    );
}