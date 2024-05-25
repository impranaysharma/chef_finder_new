import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
    <nav>
        <div className="nleft">
            <div className='head'>Chef Finder</div>
            <a href="#carouselExampleIndicators">Testimonials</a>
            <a href="#">About</a>
            <a href="#">Contact Us</a>
        </div>
        <div className="nright">
            <button>Login</button>
            <button>Signup</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar