import { useEffect } from "react";
import { useState } from "react";
import axios from './utils/util.js';

export default function App(){
  const [msg,setmsg]=useState("No server");

  useEffect(()=>{
    try{
        const getmsg= async function () {
            
            const res=await axios.get('/');
            console.log(res.data)
            setmsg(res.data.Message)
        }
        getmsg();
  }
catch(error){
  console.log(error);
}
})

return(<>
  <h1>Message:{msg}</h1>
</>)
}