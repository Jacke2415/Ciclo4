import SoliCerti from '../components/User/UserEmpleado/SoliCerti.jsx';
import Navbar from '../components/Nav_Bar/Navbar.jsx';
import Background from "../components/Login/Background";
export default function CrearEmpleado() {
    return (
      <>
        <div className="container-lg">
          <div className="row">
            <div className="col">
              <Background />
              <Navbar />
            </div>
            <div className="col-10">
              <SoliCerti />
            </div>
          </div>
        </div>
        
      </>
    );
}