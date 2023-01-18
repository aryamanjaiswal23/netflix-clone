import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import Nav from './Nav'
import auth from './firebase';
import PlanScreen from './PlanScreen';
function ProfileScreen() {
  const user=useSelector(selectUser)
  return (
    <div className='profilescreen'>
      <Nav />
      <div className="profilescreen_body">
        <h1>Edit Profile</h1>
        <div className="profilescreen_info">
          <img src="" alt="" />
          <div className="profilescreen_details">
            <h2>{user.email}</h2>
            <div className="profilescreen_plans">
              <h3>Plans</h3>
              <PlanScreen />
             <button onClick={()=>auth.signOut()} className="profilescreen_signout">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen