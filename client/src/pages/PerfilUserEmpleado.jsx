import PerfilUser from '../components/User/UserEmpleado/PerfilUser.jsx';
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
              <PerfilUser />
            </div>
          </div>
        </div>
        
      </>
    );
}
