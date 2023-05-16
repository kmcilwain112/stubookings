import React from 'react'
import "./mailList.css"


const MailList = () => {
  return (
    <div className='mail'>
      <h1 className="mailTitle">Stay Up To Date on Local Studios</h1>
      <span className='mailDesc'>Sign Up Now</span>
      <div className="mailInputContainer">
        <input type='text' placeholder='Your email'></input>
        <button>Subcribe</button>
       
      </div>
     
    </div>
  )
}

export default MailList
