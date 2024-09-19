import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
    // console.log(product);
    
  return (
    <div className=' ProductDisplay'>
      <diV className='productdisplay-left'>
           <div className='productdisplay-img-list'>
            </div>
            <div className='productdisplay-img'>
                <img className='productdisply-main-img' src={product.image} alt='' />
            </div>
      </diV>
      <diV className='productdisplay-right'>
           <h1>{product.name}</h1>
           <div className='productdisplay-right-stars'>
               <img src={star_icon} alt='' />
               <img src={star_icon} alt='' />
               <img src={star_icon} alt='' />
               <img src={star_icon} alt='' />
               <img src={star_dull_icon} alt='' />
               <p>(122)</p>
           </div>
           <div className='productdisplay-right-prices'>
              <div className='productdisplay-right-price-old'>Rs.{product.old_price}</div>
              <div className='productdisplay-right-price-new'>Rs.{product.new_price}</div>
           </div>
           <div className='productdisplay-right-description'>
           Organic products are made using natural substances and are produced without synthetic pesticides, herbicides, or fertilizers. Organic products can be categorized as 100% organic, 
           </div>
           {/* <div className='productdisplay-right-size'>
               <h1>Select Size</h1>
               <div className='productdisplay-right-size'>
                   <div>Small</div>
                   <div>Midium</div>
                   <div>Large</div>
               </div>
           </div> */}
           <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
           <p className='productdisplay-right-category'><span>Category :</span>GROCERY , FASTFOOD , FRUITS</p>
           <p className='productdisplay-right-category'><span>Tags:</span>Helthy Letest</p>
       </diV> 
    </div>
  )
}

export default ProductDisplay
