import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FormAlert from '../../components/formAlert/FormAlert';
import './Login.css';
import logo from './logo.png';


export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [alert, setAlert] = useState(
    location.state?.registrationSuccess
      ? { type: 'success', message: 'Your account is ready. Sign in to continue.' }
      : null
  );

  const loginHandler = (e) => {
    e.preventDefault();

    const registeredUsername = localStorage.getItem("username");
    const registeredPassword = localStorage.getItem("password");

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    if (username.value === registeredUsername && password.value === registeredPassword) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      setAlert({ type: 'error', message: 'Email or password is incorrect. Please try again.' });
    }
  }

  const registerHandler = () => {
    navigate("/register")
  };

  return (
    <form className="login" onSubmit={e => loginHandler(e)}>
      <div><img src={logo} alt="Logo" /></div>
      <p>Login</p>
      {alert && (
        <FormAlert
          type={alert.type}
          message={alert.message}
          onDismiss={() => setAlert(null)}
        />
      )}
      <input id="username" required type="text" placeholder="EMAIL" />
      <input id="password" required type="password" placeholder="Password" />
      <input type="submit" value="LOGIN" />
      
        <button type="button" id='sign-up-li' onClick={registerHandler}>Create an account</button>
      
    </form>
  );
}