import React from 'react'
import './DiscriptionBox.css'

const DiscriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
         <p>A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.</p>
         <p>New IT technologies have completely changed the way people shop in the 21st century. Internet and mobile devices have made it possible to purchase products or services at any time and in any location. As a result, a tremendous number of e-commerce websites appeared on the world wide web and continue to compete with each other.</p>
      </div>
    </div>
  )
}

export default DiscriptionBox
