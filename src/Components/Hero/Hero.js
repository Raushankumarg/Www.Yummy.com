import React from 'react'
import './Hero.css'

// import arrow_icon from '../Assets/arrow-btn.png'
import hero_img from '../Assets/Fruit-Mix-by-LIKE-TOPIC-removebg-preview - Copy.png'


const Hero = () => {
  return (
    <div className='hero'>
       <div className='hero-left'>
          <h2>Enjoy Your Healthy  And <span>Delicious</span> Food</h2>
          <p> A digital platform information about food products and services</p>
          <div className='hero-latest-btn'>
              Explore Now
          </div>
       </div>
       <div className='hero-right'>
       <img src={hero_img} alt=''/>
       </div>
    </div>
  )
}

export default Hero
