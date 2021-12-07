
import '../../src/public/css/Login.css'
import FormLogin from '../components/Login/formLogin.jsx';
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