import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormAlert from '../../components/formAlert/FormAlert';
import './Register.css';
import logo from './logo.png';


export default function Login() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(null);

  const registerHandler = (e) => {
    e.preventDefault()

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const confirmation = document.getElementById("confirmation");

    if (password.value === confirmation.value) {
      localStorage.setItem("username", username.value);
      localStorage.setItem("password", password.value);

      navigate('/login', { state: { registrationSuccess: true } });
    } else {
      setAlert({ type: 'error', message: 'Your passwords do not match. Check them and try again.' });
    }
  }

  const loginHandler = () => {
    navigate("/login");
  };

  return (
    <form className="register" onSubmit={e => registerHandler(e)}>
      <div><img src={logo} alt="Logo" /></div>
      <p>MyDucati registration</p>
      {alert && (
        <FormAlert
          type={alert.type}
          message={alert.message}
          onDismiss={() => setAlert(null)}
        />
      )}
      <input id="username" required type="text" placeholder="E-MAIL" />
      <input id="password" required type="password" placeholder="PASSWORD" />
      <input id="confirmation" required type="password" placeholder="REPEAT PASSWORD" />
      <input type="submit" value="SIGN UP" />
      
        <button type="button" className='login-li' id='login-li' onClick={loginHandler}>Already registered? Log in</button>
      
    </form>
  );
}