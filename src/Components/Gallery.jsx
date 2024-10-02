import React from 'react'
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Gallery() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  return (
    <>
     <div className='container-fluid'>
        <p className='text-center mt-3 h2' style={{color:"#493112"}} data-aos="zoom-in">Gallery</p>
        <div className='row py-3'>
            <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4 p-3'>
                <img src="gallery-img1.jpg" className='img-fluid rounded-4' alt="" data-aos="zoom-in"/>
            </div>
           <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4 p-3'>
            <img src="gallery-img2.jpg" className='img-fluid rounded-4' alt="" data-aos="zoom-in"/>
           </div>
           <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4 p-3'>
            <img src="gallery-img3.webp" className='img-fluid rounded-4' alt="" data-aos="zoom-in"/>
           </div>
        </div>
     </div>
    </>
  )
}

export default Gallery