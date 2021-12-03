

import FormLogin from './formLogin';
import Particulas from './particulas';
import Panel from './panel';

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
        <div id="particles-js">

        </div>
      </header>
    </div>
    <Particulas />
    </>
  );
}