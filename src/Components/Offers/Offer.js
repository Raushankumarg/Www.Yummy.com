import React from 'react'
import './Offer.css'
import exclusive_img from '../Assets/expensive-snacks1.jpg'

const Offer = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
          <h1>BEST</h1>
          <h1>Offers For You</h1>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <button>Check Now</button>
      </div>
      <div className='offers-right'>
          <img src={exclusive_img } alt=''/>
      </div>
    </div>
  )
}

export default Offer
