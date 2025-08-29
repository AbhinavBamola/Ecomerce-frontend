import { useState } from "react"
import axios from '../utils/util'
import {useNavigate} from 'react-router-dom'

export default function CreatenewProduct(){
        const navigate=useNavigate();
        const[name,setname]=useState("");
        const[description,setdescription]=useState("");
        const[category,setcategory]=useState("");
        const[price,setprice]=useState(0);
        const[stock,setstock]=useState(0);

        async function handleCreateNewProduct(e){
                e.preventDefault();
                const res=await axios.post('/product/createproduct',{name,description,category,price,stock})
                if(res.data.err){
                alert(res.data.err);
                }
                else{
                        navigate('/');
                }
        }
        return(<>
                <form action="">
                        <label htmlFor="">Name:</label>
                        <input type="text" value={name} onChange={e=>setname(e.target.value)}/> <br />
                        <label htmlFor="">description:</label>
                        <input type="text" value={description} onChange={e=>setdescription(e.target.value)}/> <br />
                        <label htmlFor="">category:</label>
                        <input type="text" value={category} onChange={e=>setcategory(e.target.value)}/> <br />
                        <label htmlFor="">price:</label>
                        <input type="number" value={price} onChange={e=>setprice(e.target.value)}/> <br />
                        <label htmlFor="">stock:</label>
                        <input type="number" value={stock} onChange={e=>setstock(e.target.value)}/> <br />
                        <button onClick={handleCreateNewProduct}>Create New Product:</button>
                </form>
        </>)    
}