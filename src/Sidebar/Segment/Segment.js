import React, { useState } from 'react';
 import "./Segment.css";
// import Input from "../../components/Input";
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowTop from '../../assets/icons/arrow-top.svg';

const Segment = ({ handleChange }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCategory = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <div className='sidebar-toggle'  onClick={toggleCategory}>

        <h2 className="sidebar-title segment-title">Segment</h2>
        <img src={isOpen ? arrowLeft : arrowTop} alt="Arrow" />
</div>
       
<p onChange={handleChange} className='allCategory'>All</p>

      </div>
    </>
    
  );
};

export default Segment;
