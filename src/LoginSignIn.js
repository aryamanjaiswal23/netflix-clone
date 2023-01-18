import React, { useRef } from 'react'
import { auth } from './firebase'
import './LoginSignIn.css'
function LoginSignIn() {
  const emailRef=useRef(null)
  const passRef=useRef(null)
  const register=(e)=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(emailRef.current.value,passRef.current.value).then((authUser)=>console.log(authUser)).catch((error)=>alert(error.message))
    
  }
  const signIn=(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(emailRef.current.value,passRef.current.value)
  }
  return (
    <div className='signin'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Email' />
        <input ref={passRef} type="password" placeholder='Password' />
        <button type='submit' className="signin_button" onClick={signIn}>Sign In</button>
        <h4><span className='signin_gray'>New to Netflix? </span>
        <span className='signin_link' onClick={register}>Sign Up Now</span>
        </h4>
      </form>
    </div>
  )
}

export default LoginSignIn