import React, { useState } from 'react'
import './Login.css'
import LoginSignIn from './LoginSignIn';
function Login() {
  const [signIn,setSignIn]=useState(false);

  return (
    <div className='login'>
        <img src="https://1000logos.net/wp-content/uploads/2017/05/Color-Netflix-Logo.jpg" alt="" className="login_logo" />
        <button className="login_button" onClick={()=>setSignIn(true)}>Sign In</button>
        <div className="login_gradient" />
   
    <div className="login_body">
      {signIn? <LoginSignIn />:(
      <>
          <h1>Unlimited films, TV programmes and 
            real-life whores who'll suck your
            daddy dick.
          </h1>
          <h2>Watch anywhere. Cancel at anytime and you gay</h2>
          <h3>Ready to fuck daddy? Enter your email to create or erect your cock</h3>
        <div className="login_input">
          <form>
            <input type="email" placeholder='Email Address' />
            <button className="login_getStarted" onClick={()=>setSignIn(true)}>GET STARTED</button>
          </form>
        </div>
        </>)
}
        </div>
        </div>
    
  )
}

export default Login