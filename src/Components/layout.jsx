import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

function Layout() {
  return (
<>
<nav className="container-fluid p-0 m-0">
    <Navbar/>
</nav>
<main  className="container-fluid p-0 m-0">
    <Outlet/>
</main>
<footer  className="container-fluid p-0 m-0">
    <Footer/>
</footer>

</> 
)
}

export default Layout