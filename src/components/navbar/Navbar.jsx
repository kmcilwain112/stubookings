import React from 'react'
import "./navbar.css"
import logo from './logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
        
        <img src={logo} className="logo" alt="logo" />  
            <span className="logotxt">
            stubookings.com
              </span>
            <div className='navItems'>
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
