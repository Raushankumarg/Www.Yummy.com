import React from 'react'
import './FooterStyle.css'
import footer_logo from '../Assets/market.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinstester_icon from '../Assets/pinstester-icon.png'
import whatsapp_icon from '../Assets/whatsapp-icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} alt=''/> 
        <p>Yummy Fast Delivery</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offeices</li>
        <li>About</li> 
        <li>Contect</li>
      </ul>
      <div className='footer-social-icon'>
        <div className='footer-icons-container'>
          <img src={instagram_icon} alt=''/>
       </div>
        <div className='footer-icons-container'>
            <img src={pinstester_icon} alt=''/>
        </div>
        <div className='footer-icons-container'>
            <img src={whatsapp_icon} alt=''/>
        </div>
      </div>
      <div className='footer-copyright'>
          <hr />
          <p>copyright @2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
