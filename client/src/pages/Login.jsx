
import '../../src/public/css/Login.css'
import FormLogin from '../components/Login/FormLogin';
import Particulas from '../components/Login/Particulas';
import Panel from '../components/Login/Panel';

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