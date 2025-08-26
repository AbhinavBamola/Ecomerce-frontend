import { useEffect } from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {clearUser,setUser} from "./features/userSlice.js"
import axios from './utils/util.js';
import { Outlet, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";


export default function App(){
  const dispatch=useDispatch();
  const user=useSelector(state=>state.user);
  const navigate=useNavigate();

  useEffect(()=>{
    try{
    const getUser=async function () {
      const req=await axios.get('/api/me');
      dispatch(setUser(req.data.user));
    }
    getUser();
  }
  catch(err){
    console.log(err);
    dispatch(clearUser());
  }
  },[])

  async function handleLogout() {
      await axios.post('user/logout');
      dispatch(clearUser());
      navigate('/');
  }

return(<>
  <h1>Header</h1>
  {user? <div>
    <NavLink to='/'>Home</NavLink>
    <button onClick={handleLogout}>Logout</button>
    <NavLink to='/adminreg'>Admin registeration</NavLink>
  </div> :<div>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/login'>Login</NavLink>
    <NavLink to='/signup'>Signup</NavLink>
  </div>}

  <Outlet/>
  <h1>Footer</h1>
</>)
}