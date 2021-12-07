import Formulario from '../components/User/UserNomina/Formulario';
import NavbarNomina from '../components/Nav_Bar/NavbarNomina';

export default function CrearEmpleado() {
    return (
      <>
        <div className="container-lg">
          <div className="row">
            <div className="col">
              <NavbarNomina />
            </div>
            <div className="col-10">
              <Formulario />
            </div>
          </div>
        </div>
        
      </>
    );
}

      