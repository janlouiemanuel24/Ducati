import { useState } from 'react';
import './Movies.css';
import planets from './data/data';

export default function Planets() {
  const [activePlanet, setActivePlanet] = useState(0);

  const tabButtonHandler = (planetNum) => {
    setActivePlanet(planetNum);
  };

  const tabButtons = () => {
    return (
      <div className='tabButtons' role='group' aria-label='Choose a Ducati model'>
        <p>DUCATI RANGE</p>
        <button aria-pressed={activePlanet === 0} onClick={() => tabButtonHandler(0)} type='button'>DesertX</button>
        <button aria-pressed={activePlanet === 1} onClick={() => tabButtonHandler(1)} type='button'>Streetfighter V4</button>
        <button aria-pressed={activePlanet === 2} onClick={() => tabButtonHandler(2)} type='button'>Monster</button>
        <button aria-pressed={activePlanet === 3} onClick={() => tabButtonHandler(3)} type='button'>Multistrada V4</button>
        <button aria-pressed={activePlanet === 4} onClick={() => tabButtonHandler(4)} type='button'>Panigale V4</button>
      </div>
    );
  };

  const leftImages = () => {
    return (
      <div>
        {activePlanet === 0 && <img alt='Ducati DesertX motorcycle' className='planet' src={planets.mercury} />}
        {activePlanet === 1 && <img alt='Ducati Streetfighter V4 motorcycle' className='planet' src={planets.venus} />}
        {activePlanet === 2 && <img alt='Ducati Monster motorcycle' className='planet' src={planets.earth} />}
        {activePlanet === 3 && <img alt='Ducati Multistrada V4 motorcycle' className='planet' src={planets.animation} />}
        {activePlanet === 4 && <img alt='Ducati Panigale V4 motorcycle' className='planet' src={planets.drama} />}
      </div>
    );
  };

  const rightDescriptions = () => {
    return (
      <div className='descriptions'>
        {activePlanet === 0 && (
          <>
            <div className='description_title'>Desert X</div>
            <div className='description_list'>
              <ul>
                <li>DesertX is designed to handle even the most challenging off-road terrain. Ducati has combined its road expertise with dedicated off-road development to create a responsive and manoeuvrable bike that is at ease on all types of trail and asphalt.</li>
                
              </ul>
            </div>
          </>
        )}

        {activePlanet === 1 && (
          <>
            <div className='description_title'>StreetFighter V4</div>
            <div className='description_list'>
              <ul>
                <li>Streetfighter V4 is a bike that pushes the concepts of the "Fight Formula" even further. The evolution follows that of the Panigale V4 family: no fairings, high and wide handlebars, 178 kg weight, 208 hp Desmosedici Stradale engine, biplane wings and latest generation electronic package. </li>
                
              </ul>
            </div>
          </>
        )}

        {activePlanet === 2 && (
          <>
            <div className='description_title'>Monster</div>
            <div className='description_list'>
              <ul>
                <li>Ducati Monster is the perfect bike for young riders. And this is why it is also available in a 35 kW version, for those with an A2 licence, with a €1000 reduction with respect to the list price.</li>
                
              </ul>
            </div>
          </>
        )}

{activePlanet === 3 && (
          <>
            <div className='description_title'>Multistrada V4</div>
            <div className='description_list'>
              <ul>
                <li>The Multistrada V4 Rally is the ideal travel companion in any situation, as easy and intuitive in the urban jungle as it is on more intrepid routes. High-performance, sturdy, and reliable with its V4 Granturismo engine and extended service intervals, it will carry you wherever your sense of adventure leads.</li>
                
              </ul>
            </div>
          </>
        )}

{activePlanet === 4 && (
          <>
            <div className='description_title'>Panigale v4</div>
            <div className='description_list'>
              <ul>
                <li>The Panigale V4 represents the last step in the characteristic path of Borgo Panigale's sports bikes. As is the case with motorcycles engaged in MotoGP and WorldSBK, the Panigale V4 is updated and improved year after year. A series of electronic improvements have been introduced that make the bike even easier and more intuitive for riders of all levels.</li>
                
              </ul>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <section className='planets_section' id='models'>
      {tabButtons()}
      <div className='main'>
        {leftImages()}
        {rightDescriptions()}
      </div>
    </section>
  );
};