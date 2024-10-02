import React from "react";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Whyus() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  return (
    <>
      <div className="container-fluid py-5">
      <p className="h2 text-center mb-5" style={{color:"#493112"}}>Why Us</p>
        <div className="row text-center d-flex justify-content-evenly">
          <div className="col-sm-10 col-md-6 col-lg-2 col-xl-2 p-1 shadow" data-aos="zoom-in">
            <div > 
            <img
              src="permium-quality.webp"
              className="img-fluid "
              alt="permium-quality product"
              title="permium-quality product"
              
            />
            </div>

            <h4>Premium Quality Product</h4>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-2 col-xl-2 p-1 shadow" data-aos="zoom-in">
          <div className=""> 
            <img
              src="customer.png"
              className="img-fluid h-75 w-100"
              alt="Customer"
              title="Customer Satisfaction"
              
            />
            </div>
            <h4>Customer Satisfaction</h4>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-2 col-xl-2 p-1 shadow" data-aos="zoom-in">
          <div className=""> 
            <img
              src="competitive.webp"
              className="img-fluid h-75 w-100"
              alt="Competitive Price"
              title="Competitive Price"
              
            />
            </div>
            <h4>Competitive Price</h4>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-2 col-xl-2 p-1 shadow " data-aos="zoom-in">
          <div className=""> 
            <img
              src="mechineries.png"
              className="img-fluid h-75 w-100"
              alt="Well Equipped macheneries"
              title="Well Equipped macheneries"
              
            />
            </div>
            <h4>Well Equipped Machineries</h4>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-2 col-xl-2 p-1 shadow" data-aos="zoom-in">
          <div className=""> 
            <img
              src="highly-qualified.png"
              className="img-fluid h-75 w-100"
              alt="Highly Qualified Staff"
              title="Highly Qualified Staff"
              
            />
            </div>
            <h4>Highly Qualified Staff</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whyus;
