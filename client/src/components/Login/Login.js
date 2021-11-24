
import '../../public/css/Login.css'
import FormLogin from './formLogin';

export default function Login() {
  return (
    <div className="Login">
      <header className="Login-header">
        <div class="header">
          <div>Nominas</div>
        </div>
          <FormLogin />
      </header>
    </div>
  );
}