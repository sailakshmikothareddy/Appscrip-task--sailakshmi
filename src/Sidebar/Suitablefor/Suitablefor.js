import React, { useState } from 'react';
 import "./Suitablefor.css";
// import Input from "../../components/Input";
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowTop from '../../assets/icons/arrow-top.svg';

const Suitablefor = ({ handleChange }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCategory = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <div className='sidebar-toggle'  onClick={toggleCategory}>

        <h2 className="sidebar-title suitablefor-title">Suitablefor</h2>
        <img src={isOpen ? arrowLeft : arrowTop} alt="Arrow" />
</div>
        {/* <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label> */}
<p onChange={handleChange} className='allCategory'>All</p>
{/* {isOpen &&
<>
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        /* <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label> 
            </>
} */}
      </div>
    </>
    
  );
};

export default Suitablefor;
