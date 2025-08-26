import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {setUser,clearUser} from '../features/userSlice';
import axios from '../utils/util';
import { useNavigate } from "react-router-dom";

export default function  Login(){
      const dispatch=useDispatch();
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
  const navigate=useNavigate();

    async function handleLogin(e){
        try{
        e.preventDefault();
        const res=await axios.post('/user/login',{email,password});
        const user=res.data.user;
        dispatch(setUser(user));
        navigate('/');
        }
        catch(err){
            console.log(err);
            dispatch(clearUser());
        }
    }

    return(<>
        <form action="">
            <label htmlFor="">Email:</label>
            <input type="text" value={email} onChange={e=>setemail(e.target.value)} /> <br />
            <label htmlFor="">Password:</label>
            <input type="text" value={password} onChange={e=>setpassword(e.target.value)} /> <br />
            <button type="submit" onClick={handleLogin}>Signup</button>
        </form>
    </>)

}