import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Stylesheet/products.css';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from 'react-router-dom';


const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow next-arrow"
      onClick={onClick}
    >
      <IoIosArrowForward className='arrow' />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow prev-arrow"
      onClick={onClick}
    >
      <IoIosArrowBack className='arrow' />
    </div>
  );
};

const Products = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // screens up to 1024px wide
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // screens up to 600px wide
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // screens up to 480px wide
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const shareOnWhatsApp = (product) => {
    const phoneNumber = '7530048133'; 
    const message = `Check out this product:\nName: ${product.name}\nDescription: ${product.description}\nImage: ${window.location.origin}/${product.image}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <Slider {...settings}>
      {products.map((product) => (
        <div key={product.id}  className='col-12 col-md-6 col-lg-4 product-wrapper'>
          <div className="product-card">
            <div className='card-img'>
            <img src={`${window.location.origin}/${product.image}`} alt={product.name} className='img-fluid' />
              </div>
            <h4 className='my-2 fs-5'>{product.name}</h4>
            <button onClick={()=>shareOnWhatsApp(product)} style={{ backgroundColor: "#493112" }} className='btn my-2 text-white fw-bold rounded-3 product-btn'>Enquiry Now</button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

const ProductList = () => {
  const products = [
    { id: 1, name: 'Coir Fiber', description: 'Description 1', price: 10.0, image: 'coir-faiber.jpeg' },
    { id: 2, name: 'Coir Peat', description: 'Description 2', price: 20.0, image: 'coir-pith.jpg' },
    { id: 3, name: 'Coir Rope', description: 'Description 3', price: 30.0, image: 'coir-rope.jpg' },
    { id: 4, name: 'Coir Yarns', description: 'Description 4', price: 40.0, image: 'coir-yarns.jpg' },
    { id: 5, name: 'Coir Rope Bundle', description: 'Description 5', price: 50.0, image: 'rope.jpg' },
    { id: 6, name: 'Coir Bales', description: 'Description 6', price: 60.0, image: 'coir-fibre-bales.jpg' },
    // Add more products as needed
  ];

  return (
    <div className='container-fluid' id='productpage'>
      <div className='py-5'>
        <p className='text-center my-3 h2' style={{color:"#493112"}}>Products</p>
       <div className='d-flex justify-content-end pe-3 my-3'><NavLink to="/productdetails" className='btn border text-white fw-bold' style={{ backgroundColor: "#493112" }}>See All Products</NavLink></div>
        <Products products={products} />
      </div>
    </div>
  );
};

export default ProductList;
