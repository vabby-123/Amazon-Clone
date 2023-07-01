import React from 'react'
import "./Product.css"

function Product() {
  return (
    <div className="Product">
         <div className='product_info'>
            <p>The lean startup</p>
            <p className='product_price'>
                <small>₹</small>
                <strong>200</strong>
            </p>
            <div className='product_rating'>
                <p>⭐⭐</p>

            </div>
         </div>
         <img src="https://www.seekajob.in/wp-content/uploads/2022/06/Flipkart-GRiD-4.0.png"/>
         <button>Add to basket</button>


    </div>
  )
}

export default Product