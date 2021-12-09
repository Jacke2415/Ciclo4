import {ShowUser} from '../components/User/UserNomina/ShowUser';
/* import NavbarNomina from '../components/Nav_Bar/NavbarNomina'; */

export default function AllEmpleados() {
    return (
      <>
        <div className="container-lg">
          <div className="row">
            <div className="col-2">
              {/* <NavbarNomina /> */}
            </div>
            <div className="col-8">
              <ShowUser />
            </div>
          </div>
        </div>
        
      </>
    );
}

      