import React, { useEffect } from "react";
import "../Stylesheet/aboutus.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Aboutus() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row my-3">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-3  order-last order-md-first">
          <div className="mt-5">
            <p className="h2 text-center" style={{ color: "#493112" }}>
              About Us
            </p>
            <p
              className="text-justify"
              style={{ fontSize: "16px", fontWeight: "400" }}
            >
              Our firm, located in Salem, India, specializes in high-quality products derived from fresh coconuts, including natural coir
              fiber, coir pith, coir yarn, and coir rope. As one of the largest coir product manufacturers, we are committed to delivering
              superior quality to both national and international customers.Recognized for our honesty and dependability, we offer a wide
              range of products designed to meet your budget and requirements.
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-3 order-first order-md-last"
          data-aos="zoom-in"
        >
          <img
            src="coir-rope.jpg"
            className="w-100 rounded-4"
            alt="Coir Rope"
            title="Coir-Rope"
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
