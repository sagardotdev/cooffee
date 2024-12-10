import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div id='main-main'>
        <div id="main-upper-nav-container">

          <div id="upper-nav-li">

            <ul className='upper-nav-ul-list'>
              <li id='upper-nav-li'><Link to="/">Contact</Link></li>
              <li id='upper-nav-li'><Link to="/wholesale">Wholesale</Link></li>
              <li id='upper-nav-li'><Link to="/page">Catering</Link></li>
              </ul>
          </div>

          <div className="upper-nav-icons">
              <i className="ri-instagram-line"></i>
              <i className="ri-facebook-fill"></i>
          </div>

      </div>   {/* end of main upper nav container */}

      
      <div id="main-lower-nav-container">
        <div id="logo">
          Cooffee
        </div>

        <div id="lower-nav-ul-list">
          <ul>
            <li>Subscribe</li>
            <li>Shop</li>
            <li>Location</li>
            <li>Learn</li>
          </ul>
        </div>

        <div id="lower-nav-icons">
          <i className="ri-user-fill"></i>
          <i className="ri-search-line"></i>
          <i className="ri-shopping-bag-4-line"></i>
        </div>
      </div>
       
    </div>
  );
}

export default Navbar;
