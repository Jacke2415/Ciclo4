import PerfilUser from '../components/User/UserEmpleado/PerfilUser.jsx';
import Navbar from '../components/Nav_Bar/Navbar.jsx';

export default function CrearEmpleado() {
    return (
      <>
        <div className="container-lg">
          <div className="row">
            <div className="col">
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
