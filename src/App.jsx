import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/layout'
import Nopage from "./Components/nopage";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Index from "./Components";
import Productdetails from "./Components/productdetails";
import Categories from "./Components/categories";
import ProductList from "./Components/products";
import Aboutus from "./Components/aboutus";
import Testimonial from "./Components/Testimonial";
import Videos from "./Components/videos";
import Gallery from "./Components/Gallery";
import Whyus from "./Components/whyus";
import Contactus from "./Components/Contactus";
import ScrollToTop from "./Components/ScrollToTop";


function App() {

  return (
    <>
       <BrowserRouter>
       <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Index/>}/>
        <Route path="navbar" element={<Navbar/>}/>
        <Route path="footer" element={<Footer/>}/>
        <Route path="/productdetails" element={<Productdetails/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/productlist" element={<ProductList/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/testimonial" element={<Testimonial/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/whyus" element={<Whyus/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path="*" element={<Nopage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

// AB COIR MART