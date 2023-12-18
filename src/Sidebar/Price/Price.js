import React, { useState } from 'react';
import Input from "../../components/Input";
import "./Price.css";
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowTop from '../../assets/icons/arrow-top.svg';

const Price = ({ handleChange }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCategory = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="">
      <div className='sidebar-toggle'  onClick={toggleCategory}>

        <h2 className="sidebar-title price-title">Price</h2>
        <img src={isOpen ? arrowLeft : arrowTop} alt="Arrow" />
</div>
<p className='allCategory'>All</p>
        
{isOpen &&
<>
        <Input
          handleChange={handleChange}
          value={50}
          title="$0 - 50"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
        />
        </>
}
      </div>
    </>
  );
};

export default Price;
