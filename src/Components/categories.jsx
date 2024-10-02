import React from "react";
import "../Stylesheet/categories.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Categories() {
  useEffect(() => {
    AOS.init({
      duration: 300, 
    });
  }, []);
  return (
    <>
      <div className="container-fluid p-0 m-0 ">
        <p className="h2 text-center my-5" style={{color:"#493112"}}>Categories</p>
        <div className="row m-0 p-0">
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3  p-0">
            <div className="card border-0 rounded-0" data-aos="zoom-in-up">
            <img
                className="mx-auto categories-img rounded-circle"
                src="coir-faiber.jpeg"
                alt="Card image"
              />
              <div className="card-body text-center">
                <h4 className="card-title">Coir Fiber</h4>
                <p className="card-text ">Coir Fiber is extracted from brown Cocunut Husky and then it is processed into the finest fibres.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 p-0">
            <div className="card border-0 rounded-0" data-aos="zoom-in-up">
              <img
                className="mx-auto categories-img rounded-circle"
                src="coir-pith.jpg"
                alt="Card image"
              />
              <div className="card-body text-center">
                <h4 className="card-title">Coir Peat</h4>
                <p className="card-text ">We are the manufacturer and Supplier of Coconut Coir Pith or Coir DDust it is totally organic and fully safe to use.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 p-0">
            <div className="card border-0 rounded-0" data-aos="zoom-in-up">
              <img
                className="mx-auto categories-img rounded-circle"
                src="coir-yarns.jpg"
                alt="Card image"
              />
              <div className="card-body text-center">
                <h4 className="card-title">Coir Yarn</h4>
                <p className="card-text">We offer Coir Yarn that server various industrial purposes and is available in different qualities on the quality of fiber.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 p-0">
            <div className="card border-0 rounded-0" data-aos="zoom-in-up">
              <img
                className="mx-auto categories-img rounded-circle"
                src="coir-rope.jpg"
                alt="Card image"
              />
              <div className="card-body text-center">
                <h4 className="card-title">Coir Rope</h4>
                <p className="card-text">Our Coir Rope well known for their strength and with finest quality it has a long lasting functional life in the market</p>
              </div>
            </div>
          </div>

         
        </div>
      
      </div>
    </>
  );
}

export default Categories;
