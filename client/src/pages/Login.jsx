
import '../../src/public/css/Login.css'
<<<<<<< HEAD
import FormLogin from '../components/Login/formLogin';
=======
import FormLogin from '../components/Login/formLogin.jsx';
>>>>>>> 522fa1b8536d6db25bda309867eee495cff76b9b
import Particulas from '../components/Login/particulas';
import Panel from '../components/Login/panel';

export default function Login() {
  return (
    <>
    
    <Panel/>
    
    <div className="Login">
      <header className="Login-header">
        <div class="header">
          <div>Nominas</div>
        </div>
          <FormLogin />
      </header>
    </div>
    <Particulas />
    </>
  );
}