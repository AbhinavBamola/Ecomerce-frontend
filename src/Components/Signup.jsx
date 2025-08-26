import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {setUser,clearUser} from '../features/userSlice';
import axios from '../utils/util';
import { useNavigate } from "react-router-dom";

export default function Signup(){
      const dispatch=useDispatch();
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const navigate=useNavigate();

    async function handleSignup(e){
        try{
        e.preventDefault();
        const res=await axios.post('/user/signup',{name,email,password});
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
            <label htmlFor="">Name:</label>
            <input type="text" value={name} onChange={e=>setname(e.target.value)} /> <br />
            <label htmlFor="">Email:</label>
            <input type="text" value={email} onChange={e=>setemail(e.target.value)} /> <br />
            <label htmlFor="">Password:</label>
            <input type="text" value={password} onChange={e=>setpassword(e.target.value)} /> <br />
            <button type="submit" onClick={handleSignup}>Signup</button>
        </form>
    </>)

}