
import React from 'react';
import "./Footer.css";
import Frame from '../assets/icons/Frame 28.svg';
import Frame1 from '../assets/icons/Frame 136278.svg';
import Language from '../assets/icons/Language.svg';

const Footer = () => {
  return (
    <footer className='footer-section' >
      <div className='section1' >
        <div className='item' >
          <h4>BE THE FIRST TO KNOW</h4>
          <p className="signup-text">signup for updates from abc</p>
           <form>
           <input type="email" placeholder="Enter your email..." className="email-input" />
             <button type="submit" className="subscribe-button">
  SUBSCRIBE
</button>          </form>
        </div>
        <div className='item'>
          <h4>Contact us</h4>
           <ul>
             <li><a href="#">+4421345 5360</a></li>
             <li><a href="#">customercare@abc.com</a></li>
           </ul>
           <h4>CURRENCY</h4>
         <ul>
            <li><img src={Language}/></li>
            <li>transactions will be completed in Euros and currency reference is available on hover</li>

          </ul>
        </div>
      </div>

      <div className='hr-line'></div>

      <div className='section1' >
        <div className='item1' >
          <div  style={{display:'flex' ,justifyContent:'space-between',marginRight:'7rem'}}>
<div>
          <h4>abc</h4>
         <ul>
           <li>about us</li>
           <li>stories</li>
           <li>Artisans</li>
           <li>Boutiques</li>
           <li>Contact Us</li>
           <li>Eu Compliance Docs</li>
         </ul>
         </div>
         <div>

          <h4>QUICK LINKS</h4>
         <ul>
         <li>about us</li>
           <li>stories</li>
           <li>Artisans</li>
           <li>Boutiques</li>
           <li>Contact Us</li>
           <li>Eu Compliance Docs</li>
           </ul>
        </div>
        </div>
        </div>
      
        <div className='item1' >
          <h4>FOLLOW US</h4>
          <img src={Frame}/>
          <h4 style={{marginTop:'3rem'}}>abc ACCEPTS</h4>
          <img src={Frame1}/>

        </div>
        </div>
        
        <p className='copy-right'>Copyright @ 2023 abc. All rights reserved</p>
    </footer>
  );
};
export default Footer;



