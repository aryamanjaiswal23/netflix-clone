import React, { useEffect } from 'react';
import './App.css';
import Login from './Login'
import HomeScreen  from './HomeScreen.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './ProfileScreen';
function App() {

  const user=useSelector(selectUser);
  
  // const user=null;
  const dispatch=useDispatch();
  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //login
        dispatch(
          login({
            uid:userAuth.uid,
            email:userAuth.email,
          })
        )
        
      } else{ 
        dispatch(logout())
    }
    })
    return unsubscribe
  },[dispatch])
    
  return (
    <div className="app">
      <Router>
        {!user ? <Login /> :
      (<Routes>
        
        <Route path='/profile' element={<ProfileScreen/>}>
          
      </Route>
        <Route exact path="/" element={<HomeScreen />}>
        </Route>
        
      </Routes>
      )
}
    </Router>
    </div>
    
  
  );
}

export default App;
