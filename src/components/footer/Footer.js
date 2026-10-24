import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';



import './Footer.css';




function Footer() {
    return (
      <footer className="footer">
        <div className='footer_img'>      <img src="https://images.ctfassets.net/x7j9qwvpvr5s/2CsA99p11kL3UvzN4txafd/832dabdc0d00a62a43fe559933a46c35/Ducati-Member-of-the-Audi-Group.svg" alt="Description" />
</div>
        <div className="nav_footers">

        <a href="#" >TERMS OF USE</a>
        <a href="#" >PRIVACY INFORMATION</a>
        <a href="#" >COOKIES INFORMATION</a>
        
      </div>
      


      <div className='footer_desc'>
        <p>Copyright © 2024 Ducati Motor Holding S.p.A. – A Sole Shareholder Company - A Company subject to the Management and Coordination activities of AUDI AG. All rights reserved. VAT 05113870967</p>
      </div>
      <div className='contact'>
        <a href='https://www.facebook.com/xxx.louiee.yyy/' className='soc_media'><FontAwesomeIcon icon={faFacebook} /></a>
        <a href='https://www.instagram.com/lowiiiiiiiiiiiiiii/?hl=en' className='soc_media'><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
      </footer>
    );
  }
  
  export default Footer;
  
