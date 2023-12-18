import React, { useState } from 'react';
import "./Category.css";
import Input from "../../components/Input";
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowTop from '../../assets/icons/arrow-top.svg';

function Category({ handleChange }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCategory = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className='sidebar-toggle'  onClick={toggleCategory}>
      <h2 className="sidebar-title">IDEAL FOR</h2>
      <img src={isOpen ? arrowLeft : arrowTop} alt="Arrow" />
      </div>
      <p onChange={handleChange} className='allCategory'>All</p>

      {isOpen && (

      <div className='sidebarlabel'>
       
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
      )}
    </div>
  );
}

export default Category;
