import { useNavigate } from 'react-router-dom';
import logo from './logo.png';
import './Header.css';


export default function Header() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const loginHandler = () => {
    navigate('/login');
  };

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/login');
  };

  return (
    <nav className="header">
        <div className="nav_items">
          <div className="nav_item"><a href="/#models">MOTORCYCLES</a></div>
          <div className="nav_item"><a href="/#experience">OUR STORY</a></div>
          <div className="nav_item"><a href="/#fuel-calculator">RIDE PLANNER</a></div>
        </div>
        <a href="/" className="logo" id="logo2" aria-label="Ducati home">
          <img src={logo} alt="Ducati" />
        </a>
        <div className="nav_items">
          <div id="dealer"><a href="/#models">EXPLORE RANGE</a></div>
          {isLoggedIn === 'true' ? (
            <button type="button" onClick={logoutHandler} className="login_button">LOGOUT</button>
          ) : (
            <button type="button" onClick={loginHandler} className="login_button">LOGIN</button>
          )}
        </div>
    </nav>
  );
}