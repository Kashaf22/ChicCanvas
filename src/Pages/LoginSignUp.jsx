import React from 'react'
import './CSS/LoginSignUp.css'
export const LoginSignUp = () => {
  return (
    <div className='loginsignUp'>
      <div className="loginsignUp-container">
          <h1>Sign Up</h1>
          <div className="loginsignUp-fields">
            <input type="text" placeholder='Your Name '/>
            <input type="text" placeholder='Your Name '/>
            <input type="email" placeholder='Email Address '/>
            <input type="password" placeholder='Password '/>
          </div>
          <button>Continue </button>
          <p className='loginsignUp-login'>Already have an account ? <span>Login here</span></p>
          <div className="loginsignup-agree">
             <input type="checkbox" name='' id='' />
             <p>By continuing, I agree to the terms of use and privacy.</p>
          </div>
      </div>
    </div>
  )
}
export default LoginSignUp;
