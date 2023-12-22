import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionBox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box-fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that enables the buying and selling of goods and services over the internet. It serves as a virtual storefront where transactions are processed digitally, offering convenience and accessibility to consumers globally.</p>
            <p> Products are usually sold by variety of small businesses on one platform</p>
        </div>
    </div>
  )
}

export default DescriptionBox;
