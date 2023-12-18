import React, { useState } from 'react';
import "./Product.css";
import Sidebar from '../Sidebar/Sidebar';

const Products = ({ result }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div style={{display:'flex'}}>
     <Sidebar handleChange={handleChange} />
    
      <section className="card-container">{result}</section>
    </div>
  );
};

export default Products;
