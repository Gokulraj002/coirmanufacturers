import React from 'react'
import Categories from './categories'
import Products from "./products";
import Aboutus from './aboutus';
import Whyus from './whyus';
import Gallery from './Gallery';
import Videos from './videos';
import Testimonial from './Testimonial';
import Contactus from './Contactus';

function Index() {
  return (
    <>
     <div className='container-fluid m-0 p-0'>
        <div>
            <Categories/>
        </div>
        <div>
            <Products/>
        </div>
        <div>
            <Aboutus/>
        </div>
        <div>
          <Whyus/>
        </div>
        <div>
          <Gallery/>
        </div>
        <div>
          <Videos/>
        </div>
        <div>
          <Testimonial/>
        </div>
        <div className='container-fluid m-0 p-0'>
          <Contactus/>
          </div>
     </div>
    </>
  )
}

export default Index