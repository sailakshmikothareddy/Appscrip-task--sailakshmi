import React, { useState } from 'react';
import Button from "../components/Button";
import "./Recommended.css";
import arrowTop from '../assets/icons/arrow-top.svg';
import arrowLeft from '../assets/icons/arrow-left.svg';


const Recommended = ({ handleClick }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCategory = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
       <div className="recommended-text">
        <p className="recommended-title">DISCOVER OUR PRODUCTS</p>
        <p className='recparagraph'>Lorem ipsum dolor sit amet consecteur. Amet est posuere rhoncus</p>
        <p className='recparagraph'>scelerisque. Dolor integer scelerisque nibh amet mi utelementum dolor.</p>
        <div className="recommendation-container">
          <h5>3425 ITEMS</h5>
<div></div>   
<div className='sidebar-toggle'  onClick={toggleCategory}>

<h5 className='recommendedd'>RECOMMENDED</h5>
        <img src={isOpen ? arrowLeft : arrowTop} alt="Arrow" className='recommendicon'/>
</div>       

        </div>
        
      </div>
    </>
  );
};

export default Recommended;
