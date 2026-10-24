import './SecondNav.css'
import scrambler from './scrambler.png'
export default function SecondNav({ activeNav }) {


  
  const nav0 = () => {
    return (
      <div className='secondnav_container'>
        <a className='logo' href='#'>
               <div className='scrambler'><img src={scrambler} alt="scrambler" /></div></a>
            <a className='logo' href='#'>  <div className='land'><p>THE LAND OF JOY</p></div>
        </a>
      </div>
    );
  };

  
  const navState = (navIndex) => {
    switch(navIndex) {
      case 0:
        return nav0();
      
      default:
        return nav0();
    }
  };

  return (
    <div className='secondnav'>
      {navState(activeNav)}
    </div>

    
  );
};