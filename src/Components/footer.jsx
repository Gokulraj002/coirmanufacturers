import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "../Stylesheet/footer.css";


function Footer() {
  const phoneNumber = '+91 9787118836';
  const message = 'Hello, I would like to inquire about your services.';

  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="d-flex justify-content-between bg-white">
          <div className="ps-4">
            <img src="logo.webp" alt="Brand-Logo" />
          </div>
          <div className="d-flex justify-content-center py-3 px-2">
            <ul className="list-unstyled list-inline footer-icon">
              <li className="list-inline-item p-1 px-2 rounded-circle bg-dark text-white">
                <FaFacebookF className="ficon"/>
              </li>
              <li className="list-inline-item p-1 px-2 rounded-circle bg-dark text-white">
                <IoLogoWhatsapp className="ficon"  onClick={handleClick}/>
              </li>
              <li className="list-inline-item px-1">
                <IoIosCall />
                <a href="tel:+91 9787118836" className="text-decoration-none text-dark">+91 9787118836</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row m-0">
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 ps-0 py-2 ">
            <ul className="footer-nav ps-4">
              <li>
                <NavLink to="/" className=" custom-nav-link">
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/categories" className="custom-nav-link">
                  CATEGORIES
                </NavLink>
              </li>
              <li>
                <NavLink to="/productdetails" className="custom-nav-link">
                  PRODUCTS
                </NavLink>
              </li>
              <li>
                <NavLink to="/aboutus" className="custom-nav-link">
                  ABOUT US
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="copyrights pt-2 pe-4 col-sm-12 col-md-12 col-lg-8 col-xl-8 py-2">
            <p className="float-end">
            © Copyrights 2024-2025.Coir Manufacturers.All Rights Reserved.
            </p>
          </div>
        </div>
       
      </div>
    </>
  );
}

export default Footer;
