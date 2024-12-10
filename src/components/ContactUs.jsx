import React from 'react'
import { useState } from 'react'
import './ContactUs.css'
import validator from 'validator'


const ContactUs = () => {
  const [subscribe, setScribe] = useState('Subscribe');

  const handleSubscribe = () =>{
  setScribe('Subscribed')
  
  }

  return (
    <div>
      <div id="contact-main-container">
        <h3>Connect with us</h3>
        <p>Sign up for 10% off your next order, plus first access to the latest news, coffee releases, merchandise and more!</p>

        <div id='input-subscribe-button'>

        <input type="text" 
        placeholder='Enter your email'
        />

        <button onClick={handleSubscribe}>{subscribe}</button> 
        </div>
        
      </div>
    </div>
  )
}

export default ContactUs
