import React from 'react'
import "./navbar.css"
import logo from './logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
        
        <img src={logo} className="logo" alt="logo" /> 
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }} > 
            <span className="logotxt">
            stubookings.com
              </span>
              </Link>
            <div className='navItems'>
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
