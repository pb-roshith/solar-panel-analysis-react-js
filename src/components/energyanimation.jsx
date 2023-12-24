import React from 'react';
import './energy.css'; // Make sure to import your CSS file

const YourComponent = () => {
  return (
    <div className="king">
        <div className="preloader">
      <div className="preloader__ring">
        <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div>
      </div>

      <div className="preloader__ring">
        <div className="preloader">
          <div className="preloader__sector">*</div>
          <div className="preloader__sector"> . </div>
          <div className="preloader__sector">*</div>
          <div className="preloader__sector"> . </div>
          <div className="preloader__sector">*</div>
          <div className="preloader__sector"> . </div>
          <div className="preloader__sector">*</div>
        </div>
      </div>

      <div className="preloader__ring">
        <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div>
      </div>
    </div>
    </div>
    
  );
};

export default YourComponent;
