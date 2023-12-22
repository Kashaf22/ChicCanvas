import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
   const {getTotalCartAmount, all_product, cartItems, RemoveFromCart} = useContext(ShopContext);
  return (
    <div className='cart-items'>
       <div className="cartitems-format-main">
          <p>Products</p>
          <p>Title </p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p> 
          <p>Remove</p> 
       </div>
       <hr/>
       {all_product.map((e)=>{
          if(cartItems[e.id]>0){
             return <div>
             <div className="cartitems-format cartitems-format-main">
                 <img src= {e.image} alt="" className='carticon-product-icon'/>
                 <p>{e.name}</p>
                 <p>${e.new_price}</p>
                 <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                 <p>{e.new_price*cartItems[e.id] }</p>
                 <img className='cart-items-removeicon' src= {remove_icon} onClick={()=>{RemoveFromCart(e.id)}} alt="" />
             </div>
              <hr/>
         </div>
          }
          return null; 
       })}
       <div className="cartitems-down">
          <div className="cartitems-total">
             <h1>Cart Total </h1>
             <div> 
                <div className="cartItems-local-items">
                     <p>Subtotal</p>
                     <p>${getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className='cartItems-local-items'>
                     <p> Shipping Fee </p>
                     <p> Free </p>
                </div>
               <hr/>
                <div className='cartItems-local-i tems'>
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
                <div/>
          </div>  
          <button>PROCEED TO CHECKOUT </button>
       </div>
        <div className="cartItems-promocode">
            <p>If you have a promo code enter it here</p>
            <div className='cartItems-promobox '> 
               <input type="text" placeholder='promo code'></input>
               <button>Submit </button>
            </div>
        </div>
       </div>
    </div>
    </div>
  )
}

export default CartItems;