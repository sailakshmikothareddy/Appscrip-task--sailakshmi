import React, { useState } from 'react';
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import Work from './Work/Work';
import Fabric from './Fabric/Fabric';
import "./Sidebar.css";
import arrowLeft from '../assets/icons/arrow-left.svg';
import arrowTop from '../assets/icons/arrow-top.svg';
import Segment from './Segment/Segment';
import Suitablefor from './Suitablefor/Suitablefor';
import Rawmaterials from './Rawmaterials/Rawmaterials';
import Pattern from './Pattern/Pattern';

const Sidebar = ({ handleChange }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isColorsOpen, setIsColorsOpen] = useState(true);
  const [isWorkOpen, setIsWorkOpen] = useState(true);
  const [isFabricOpen, setIsFabricOpen] = useState(true);
  const [isSegmentOpen, setIsSegmentOpen] = useState(true);
  const [isSuitableforOpen, setIsSuitableforOpen] = useState(true);
  const [isRawmaterialsOpen, setIsRawmaterialsOpen] = useState(true);
 const [isPatternOpen, setIsPatternOpen] = useState(true);


  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const togglePrice = () => {
    setIsPriceOpen(!isPriceOpen);
  };

  const toggleColors = () => {
    setIsColorsOpen(!isColorsOpen);
  };

  const toggleWorks = () => {
    setIsWorkOpen(!isWorkOpen);
  };
  const toggleSegments = () => {
    setIsSegmentOpen(!isSegmentOpen);
  };
  const toggleFabrics = () => {
    setIsFabricOpen(!isFabricOpen);
  };
  const toggleSuitablefor = () => {
    setIsSuitableforOpen(!isSuitableforOpen);
  };
  const toggleRawmaterials = () => {
    setIsRawmaterialsOpen(!isRawmaterialsOpen);
  };
  const togglePatterns = () => {
    setIsPatternOpen(!isPatternOpen);
  };
  return (
    <>
      <section className="sidebar">
       
        <Category isOpen={isCategoryOpen} handleChange={handleChange} toggleCategory={toggleCategory} arrowIcon={isCategoryOpen ? arrowLeft : arrowTop} />
        
        <Price isOpen={isPriceOpen} handleChange={handleChange} togglePrice={togglePrice} arrowIcon={isPriceOpen ? arrowLeft : arrowTop} />
        {/* <Colors isOpen={isColorsOpen} handleChange={handleChange} toggleColors={toggleColors} arrowIcon={isColorsOpen ? arrowLeft : arrowTop} /> */}
        <Work isOpen={isWorkOpen} handleChange={handleChange} toggleColors={toggleWorks} arrowIcon={isWorkOpen ? arrowLeft : arrowTop} />
        <Fabric isOpen={isFabricOpen} handleChange={handleChange} toggleColors={toggleFabrics} arrowIcon={isFabricOpen ? arrowLeft : arrowTop} />
        <Segment isOpen={isSegmentOpen} handleChange={handleChange} toggleColors={toggleSegments} arrowIcon={isSegmentOpen ? arrowLeft : arrowTop} />
        <Suitablefor isOpen={isSuitableforOpen} handleChange={handleChange} toggleColors={toggleSuitablefor} arrowIcon={isSuitableforOpen ? arrowLeft : arrowTop} />
        <Rawmaterials isOpen={isRawmaterialsOpen} handleChange={handleChange} toggleColors={toggleRawmaterials} arrowIcon={isRawmaterialsOpen ? arrowLeft : arrowTop} />
        <Pattern isOpen={isPatternOpen} handleChange={handleChange} toggleColors={togglePatterns} arrowIcon={isPatternOpen ? arrowLeft : arrowTop} />
      </section>
    </>
  );
};

export default Sidebar;
