import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className="home">
        <div className='home_container'>
            
            <img  className="home_image" src="https://www.seekajob.in/wp-content/uploads/2022/06/Flipkart-GRiD-4.0.png" >
            </img>
            <div className='home_row'>
                <Product></Product>
                <Product></Product>
            </div>
            <div className='home_row'>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>

            <div className='home_row'>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>


        </div>


    </div>
  )
}

export default Home