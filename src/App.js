
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Header from './components/header/Header';
import Movies from './components/desc/Movies';
import SecondNav from './components/header/SecondNav/SecondNav';
import SalaryCalculator from './components/salaryCalculator/SalaryCalculator'
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SecondNav/>
      <Header/>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Home />
              <Movies />
              <SalaryCalculator />
              <Footer />
            </>
          }
        />
        <Route path='/login' element={<><Login /><Footer /></>} />
        <Route path='/register' element={<><Register /><Footer /></>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
