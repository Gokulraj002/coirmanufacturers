import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../Stylesheet/navbar.css";
import { RiMenu2Fill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

function Navbar() {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  const closeSideNav = () => {
    setSideNavOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const phoneNumber = "+91 9787118836";
  const message = "Hello, I would like to inquire about your services.";

  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const location = useLocation();

  const navLinkStyle = (isActive) => ({
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "#6719BD" : "#212121",
    transition: "color 0.3s ease",
  });

  const email = "abcoirmart@gmail.com";

  const handleClicktomail = () => {
    window.location.href = `mailto:${email}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handles the click event on a nav item
  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      setSideNavOpen(false); // Close side navigation when clicking a nav link on mobile
    }
  };

  // Toggles the side navigation menu
  const handleToggleOffCanvas = () => {
    setSideNavOpen(!sideNavOpen);
  };

  return (
    <>
      <header className="container-fluid banner p-0 m-0">
        <div className="container-fluid top-nav-hide p-0">
          <div className="d-flex justify-content-between pt-2  w-100">
            <div>
              <ul className="top-nav">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <IoLogoWhatsapp onClick={handleClick} />
                </li>
                <li className="h6">
                  <IoIosCall className="fs-5" />
                  <a
                    href="tel:+91 9787118836"
                    className="text-decoration-none"
                    style={{ color: "#493112" }}
                  >
                    +91 9787118836
                  </a>
                </li>
                <li className="h6">
                  <MdEmail className="fs-5" onClick={handleClicktomail} />
                  abcoirmart@gmail.com
                </li>
              </ul>
            </div>
            <div>
              <ul className="top-nav">
                <li className="h6">
                  <FaLocationDot />
                  <span className="ps-1">Salem</span>
                </li>
                <li>
                  {searchOpen && <input type="search" className="search-input" />}
                  <IoSearch onClick={toggleSearch} className="search-icon" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <button
            className="navbar-toggler ms-3 d-block d-lg-none p-2"
            type="button"
            onClick={handleToggleOffCanvas}
          >
            <RiMenu2Fill className="navbar-toggler-btn" />
          </button>
          <a className="navbar-brand ms-auto me-3 mt-2 d-block d-lg-none" href="#">
            <img src="logo.webp" alt="Logo" width="80px" />
          </a>
        </div>

        <div className={`main-navigation ${isScrolled ? "scrolled" : ""} ${sideNavOpen ? "active" : ""}`}>
          <nav className="navbar navbar-expand-lg p-0">
            <div className="container-fluid">
              <div className="overlay d-flex d-lg-none" onClick={closeSideNav}></div>
              <div className="d-lg-flex w-100 sidebar pb-3 pb-lg-0">
                <button className="btn-close d-lg-none" onClick={closeSideNav}></button>
                <div className="w-100 sidebar-content">
                  <div className="nav-1">
                    <ul className="navbar-nav">
                      <li
                        className="nav-item"
                        style={navLinkStyle(location.pathname === "/")}
                        onClick={handleNavClick}
                      >
                        <NavLink to="/" className="nav-link px-lg-2">
                          HOME
                        </NavLink>
                      </li>
                      <li
                        className="nav-item"
                        style={navLinkStyle(location.pathname === "/categories")}
                        onClick={handleNavClick}
                      >
                        <NavLink to="/categories" className="nav-link">
                          CATEGORIES
                        </NavLink>
                      </li>
                      <li
                        className="nav-item"
                        style={navLinkStyle(location.pathname === "/productdetails")}
                        onClick={handleNavClick}
                      >
                        <NavLink to="/productdetails" className="nav-link">
                          PRODUCTS
                        </NavLink>
                      </li>
                      <li
                        className="nav-item"
                        style={navLinkStyle(location.pathname === "/aboutus")}
                        onClick={handleNavClick}
                      >
                        <NavLink to="/aboutus" className="nav-link">
                          ABOUT US
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="logo d-none d-md-block">
                    <img src="logo.webp" alt="Logo" width="100px" />
                  </div>
                  <div className="nav-2">
                    <ul className="navbar-nav">
                      <li
                        className="nav-item"
                        style={navLinkStyle(location.pathname === "/whyus")}
                        onClick={handleNavClick}
                      >
                        <NavLink to="/whyus" className="nav-link text-dark px-lg-2">
                          WHY US
                        </NavLink>
                      </li>
                      <li
                        className="nav-item"
                        style={navLinkStyle(location.pathname === "/gallery")}
                        onClick={handleNavClick}
                      >
                        <NavLink to="/gallery" className="nav-link">
                          GALLERY
                        </NavLink>
                      </li>
                      <li
                        className="nav-item"
                        style={navLinkStyle(location.pathname === "/videos")}
                        onClick={handleNavClick}
                      >
                        <NavLink to="/videos" className="nav-link">
                          VIDEOS
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" href="#">
                          MORE
                        </NavLink>
                      </li>
                      <span className="d-block d-lg-none" style={{ color: "#493112" }}>
                        <li className="nav-item">
                          <FaFacebookF />
                        </li>
                        <li className="nav-item fw-medium">
                          <IoLogoWhatsapp onClick={handleClick} />
                          <span className="ps-2">Whatsapp</span>
                        </li>
                        <li className="h6 nav-item fw-medium">
                          <IoIosCall className="fs-5" />
                          <a
                            href="tel:+91 9787118836"
                            className="text-decoration-none fw-medium"
                            style={{ color: "#493112" }}
                          >
                            +91 9787118836
                          </a>
                        </li>
                        <li className="fs-6 nav-item fw-medium">
                          <MdEmail className="fs-5" onClick={handleClicktomail} />
                          abcoirmart@gmail.com
                        </li>
                      </span>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="banner-content d-flex ps-4 align-items-center">
          <div className="text-white text-center ps-5">
            <p className="h2" style={{ color: "#493112" }}>
              Premium Quality Coir Products
            </p>
            <button className="mt-3 banner-btn px-3 py-2 h5">
              <NavLink className="text-decoration-none text-light" to="/productdetails">
                Learn More
              </NavLink>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
