import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {setUser,clearUser} from '../features/userSlice';
import axios from '../utils/util';
import { useNavigate } from "react-router-dom";

export default function  AdminRegistration(){
      const dispatch=useDispatch();
      const user=useSelector(state=>state.user)
    const [adminkey,setadminkey]=useState('');
  const navigate=useNavigate();

    async function handleLogin(e){
        try{
        e.preventDefault();
        const id=user._id;
        const res=await axios.post('/user/adminreg',{id,adminkey});
        const userr=res.data.user;
        console.log(userr)
        dispatch(setUser(userr));
        navigate('/');
        }
        catch(err){
            console.log(err);
            dispatch(clearUser());
        }
    }

    return(<>
        <form action="">
            <label htmlFor="">Admin Key:</label>
            <input type="text" value={adminkey} onChange={e=>setadminkey(e.target.value)} /> <br />
            <button type="submit" onClick={handleLogin}>Signup</button>
        </form>
    </>)

}