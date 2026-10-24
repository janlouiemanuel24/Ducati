import heroImage from '../header/bg_img.png';
import './Banner.css';

export default function Banner() {
  return (
    <section
      className='hero'
      id='experience'
      style={{ backgroundImage: `linear-gradient(90deg, rgba(8, 9, 11, .88) 0%, rgba(8, 9, 11, .58) 48%, rgba(8, 9, 11, .12) 100%), url(${heroImage})` }}
    >
      <div className='hero_content'>
        <p className='eyebrow'>MADE IN BORGO PANIGALE · SINCE 1926</p>
        <h1>Born to<br /><span>ride.</span></h1>
        <p className='hero_description'>
          Italian design. Unmistakable performance. Find the Ducati that makes
          every road feel like your own.
        </p>
        <div className='hero_actions'>
          <a className='button button_primary' href='#models'>Explore the range <span aria-hidden='true'>↗</span></a>
          <a className='button button_secondary' href='#fuel-calculator'>Plan your ride</a>
        </div>
        <div className='hero_signature'><span /> THE ART OF PERFORMANCE</div>
      </div>
    </section>
  );
}