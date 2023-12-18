import React, { useState } from 'react';
import "./Colors.css";
import Input from "../../components/Input";
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowTop from '../../assets/icons/arrow-top.svg';

const Colors = ({ handleChange }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCategory = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <div className='sidebar-toggle'  onClick={toggleCategory}>

        <h2 className="sidebar-title color-title">Colors</h2>
        <img src={isOpen ? arrowLeft : arrowTop} alt="Arrow" />
</div>
        
<p onChange={handleChange} className='allCategory'>All</p>
{isOpen &&
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

    
            </>
}
      </div>
    </>
    
  );
};

export default Colors;
