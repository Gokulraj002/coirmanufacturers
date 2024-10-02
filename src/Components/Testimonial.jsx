import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import "../Stylesheet/Testimonial.css";

function Testimonial() {
  return (
    <div className="container-fluid p-0">
      {/* <!-- Carousel --> */}
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        {/* <!-- Indicators/dots --> */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
         
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        {/* <!-- The slideshow/carousel --> */}
        <div className="carousel-inner">
          <p className="text-center text-white mt-2 h2" style={{color:"#493112"}}>Testimonials</p>
          <div className=" text-center py-2"> <RiDoubleQuotesR  className="fs-1 text-warning"/></div>
          <div className="carousel-item active">
            <div className="carousel-caption">
              <p>
                Excellent service, wide variety of coir ropes that will fit in
                your budget and requirements to choose from , also prompt staff.
              </p>
              <h2>"Great Exprience"</h2>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-caption">
              <p>
                Their coir products are of excellent quality. Would recommend
                others.
              </p>
              <h2>"Best Services"</h2>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-caption">
              <p>
                Have been buying from them for a while now. Not once have I been
                disappointed.
              </p>
              <h2>"Punctualit"y</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
