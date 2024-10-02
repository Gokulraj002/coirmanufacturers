import React, { useEffect } from "react";
import "../Stylesheet/productdetails.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Productdetails() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="container-fluid">
      <p className="h2 py-3 text-center" style={{ color: "#493112" }} data-aos="zoom-in-up">
        Our Product details
      </p>
      <div className="row my-3">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-3  order-last order-md-first">
          <div className="mt-5 ">
            <p className="h2 py-3 text-center" style={{ color: "#493112" }} data-aos="zoom-in-up">
              COIR FIBRE
            </p>
            <p className="text-justify">
              Durability: Coir is highly durable and resistant to rot and
              saltwater, making it ideal for marine applications. Elasticity:
              Coir has good elasticity, which makes it suitable for various
              applications like mats and mattresses. Water Absorption: It has a
              high capacity for water retention, which is beneficial in
              horticulture and erosion control. Biodegradability: Coir is
              biodegradable and decomposes naturally,making it an
              environmentally friendly option.
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-12 col-lg-6 col-xl-6 order-first order-md-last p-3"
          data-aos="zoom-in"
        >
          <img
            src="coir-faiber.jpeg"
            className="w-100 rounded-4 product-img"
            alt="Coir Fibre"
            title="Coir-Fibre"
          />
        </div>
      </div>
      {/* row-2 */}
      <div className="row my-4">
        <div
          className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-3"
          data-aos="zoom-in"
        >
          <img
            src="coir-pith.jpg"
            className="w-100 rounded-4 product-img"
            alt="Coir Pith"
            title="Coir-Pith"
          />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-3 ">
          <div className="mt-5">
            <p className="h2 py-3 text-center" style={{ color: "#493112" }} data-aos="zoom-in-up">
              COIR PEAT
            </p>
            <p className="text-justify">
              Certainly! Here’s a clearer version of the text: Coco pith is
              mixed with sand, compost, and fertilizer to create high-quality
              potting soil. It is also used for growing mushrooms due to its
              high cellulose content. One of the most attractive qualities of
              coco pith is its reusability, as it can be used up to three times,
              making it more sustainable than peat moss and other alternatives.
              Coco pith boasts excellent water retention properties, helping to
              keep plants hydrated for longer periods. Additionally, it improves
              soil aeration, which is crucial for root health and growth. This
              natural material is pH-neutral, reducing the risk of soil acidity
              issues that can harm plants.
            </p>
          </div>
        </div>
      </div>
      {/* row-3 */}
      <div className="row my-4">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-3 order-last order-md-first">
          <div className="mt-5">
            <p className="h2 py-3 text-center" style={{ color: "#493112" }} data-aos="zoom-in-up">
              COIR YARNS
            </p>
            <p className="text-justify ">
              Our firm, located in Salem, India, specializes in high-quality
              products derived from fresh coconuts, including natural coir
              fiber, coir pith, coir yarn, and coir rope. As one of the largest
              coir product manufacturers, we are committed to delivering
              superior quality to both national and international
              customers.Recognized for our honesty and dependability, we offer a
              wide range of products designed to meet your budget and
              requirements.
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-3 order-first order-md-last"
          data-aos="zoom-in"
        >
          <img
            src="coir-yarns.jpg"
            className="w-100 rounded-4 product-img"
            alt="Coir yarns"
            title="Coir-yarns"
          />
        </div>
      </div>
      {/* row-4 */}
      <div className="row my-4">
        <div
          className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-3"
          data-aos="zoom-in"
        >
          <img
            src="coir-rope.jpg"
            className="w-100 rounded-4 product-img"
            alt="Coir Rope"
            title="Coir-Rope"
          />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-3 ">
          <div className="mt-5 ">
            <p className="h2 py-3 text-center" style={{ color: "#493112" }} data-aos="zoom-in-up">
              COIR ROPE
            </p>
            <p className="text-justify ">
              Our firm, located in Salem, India, specializes in high-quality
              products derived from fresh coconuts, including natural coir
              fiber, coir pith, coir yarn, and coir rope. As one of the largest
              coir product manufacturers, we are committed to delivering
              superior quality to both national and international
              customers.Recognized for our honesty and dependability, we offer a
              wide range of products designed to meet your budget and
              requirements.
            </p>
          </div>
        </div>
      </div>
      
      {/* row-6 */}
      <div className="row my-4">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-3 order-last order-md-first">
          <div className="mt-5">
            <p className="h2 py-3 text-center" style={{ color: "#493112" }} data-aos="zoom-in-up">
              COCONUTS
            </p>
            <p className="text-justify">
              Our firm, located in Salem, India, specializes in high-quality
              products derived from fresh coconuts, including natural coir
              fiber, coir pith, coir yarn, and coir rope. As one of the largest
              coir product manufacturers, we are committed to delivering
              superior quality to both national and international
              customers.Recognized for our honesty and dependability, we offer a
              wide range of products designed to meet your budget and
              requirements.
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-3 order-first order-md-last"
          data-aos="zoom-in"
        >
          <img
            src="coconut.avif"
            className="w-100 rounded-4 product-img"
            alt="Coconut"
            title="Coconut"
          />
        </div>
      </div>


      {/* row-7 */}
      <div className="row my-4">
      <div
          className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-3"
          data-aos="zoom-in"
        >
          <img
            src="green-coconut.jpg"
            className="w-100 rounded-4 product-img"
            alt="Fresh-Coconut"
            title="Fresh-Coconut"
          />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-3 ">
          <div className="mt-5">
            <p className="h2 py-3 text-center" style={{ color: "#493112" }} data-aos="zoom-in-up">
              GREEN COCONUTS
            </p>
            <p className="text-justify">
              Our firm, located in Salem, India, specializes in high-quality
              products derived from fresh coconuts, including natural coir
              fiber, coir pith, coir yarn, and coir rope. As one of the largest
              coir product manufacturers, we are committed to delivering
              superior quality to both national and international
              customers.Recognized for our honesty and dependability, we offer a
              wide range of products designed to meet your budget and
              requirements.
            </p>
          </div>
        </div>
       
      </div>
       {/* row-8 */}
       <div className="row my-4">
  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-3 order-last order-md-first">
    <div className="mt-5">
      <p className="h2 py-3 text-center" style={{ color: "#493112" }} data-aos="zoom-in-up">
        COCO BROOMS
      </p>
      <p className="text-justify">
        Our firm, located in Salem, India, specializes in high-quality
        products derived from fresh coconuts, including natural coir
        fiber, coir pith, coir yarn, and coir rope. As one of the largest
        coir product manufacturers, we are committed to delivering
        superior quality to both national and international
        customers.Recognized for our honesty and dependability, we offer a
        wide range of products designed to meet your budget and
        requirements.
      </p>
    </div>
  </div>
  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-3 order-first order-md-last" data-aos="zoom-in">
    <img
      src="coir-brush.jpg"
      className="w-100 rounded-4 product-img"
      alt="Coir-Brush"
      title="Coir-Brush"
    />
  </div>
</div>

 
    </div>
  );
}

export default Productdetails;
