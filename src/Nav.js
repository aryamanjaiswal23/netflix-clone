import React, { useEffect, useState ,useHistory} from 'react'
import './Nav.css'
function Nav() {
    const history=useHistory()
    const [show,handleShow]=useState(false);
    const transitionNavbar=()=>{
        if(window.scrollY>100) handleShow(true)
        else handleShow(false);
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar)
        return ()=> window.removeEventListener("scroll",transitionNavbar)
    },[])
  return (
    <div className={`nav ${ show && 'nav_black'}`}>
        <div className="nav_contents">
            <img src="https://1000logos.net/wp-content/uploads/2017/05/Color-Netflix-Logo.jpg" alt="" className="nav_logo" />
            <img onClick={()=>history.push('/profile')} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="" className="nav_avatar" />
        </div> 
    </div>
    
  )
}

export default Nav