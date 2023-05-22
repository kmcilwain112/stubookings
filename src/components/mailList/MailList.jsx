import React from 'react'
import "./mailList.css"
import logo from './logo.svg'


const MailList = () => {
  return (
    <div className='mail'>
      <h1 className="mailTitle">Stay Up To Date on Local Studios</h1>
      <span className='mailDesc'>Sign Up Now</span>
      <div className="mailInputContainer">
        <input type='text' placeholder='Your email'></input>
        <button>Subcribe</button>        
      </div>
      <img src={logo} className="mailLogo" alt="logo" />
    </div>
  )
}

export default MailList
