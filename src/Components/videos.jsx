import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Videos() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  return (
    <>
     <div className='container-fluid'>
        <p className='text-center mt-4 h2' style={{color:"#493112"}} data-aos="zoom-in">Videos</p>
        <div className='row py-4'>
            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 p-3'>
            <iframe
        className="rounded-4"
        width="100%"
        height="340"
        src="https://www.youtube.com/embed/wuIJZ2ZprPs?si=W_35cc2x4DDzDz2I"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="no-referrer"
      ></iframe>
                <h5 className='text-center my-2'>Coir Products Quality</h5>
            </div>
           <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 p-3'>
           <iframe
  className='rounded-4'
  width="100%"
  height="340"
  src="https://www.youtube.com/embed/2ILftHY4tKU?si=zAe2pJY5u5PA0dTB"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  frameBorder="0" 
  allowFullScreen
  referrerPolicy="no-referrer"
></iframe>

            <h5 className='text-center my-2'>Coir Products and their Details</h5>

           </div>
           
        </div>
     </div>
    </>
  )
}

export default Videos