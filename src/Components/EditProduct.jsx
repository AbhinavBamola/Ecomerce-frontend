import { useState } from "react"
import axios from '../utils/util'
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from "react";

export default function EditProduct(){
        const navigate=useNavigate();
        const Params=useParams();
        const id=Params.id;
        const[name,setname]=useState("");
        const[description,setdescription]=useState("");
        const[category,setcategory]=useState("");
        const[price,setprice]=useState(0);
        const[stock,setstock]=useState(0);

        useEffect(()=>{
            const getProductDetails=async function () {
                const res=await axios.get(`/product/getproduct/${id}`);
                setname(res.data.product.name);
                setdescription(res.data.product.description);
                setcategory(res.data.product.category);
                setprice(res.data.product.price);
                setstock(res.data.product.stock);
            }
            getProductDetails();
        },[id])

        async function handleEditProduct(e){

                e.preventDefault();
                const res=await axios.post(`/product/updateproduct/${id}`,{name,description,category,price,stock})
                if(res.data.err){
                alert(res.data.err);
                }
                else{
                        navigate('/');
                }
        }

        async function handleDeleteProduct(e) {
            e.preventDefault();
            const res=await axios.post(`/product/deleteproduct/${id}`)
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
                        <button onClick={handleEditProduct}>Edit Product:</button> <br />
                        <button onClick={handleDeleteProduct}>Delete Product</button>

                </form>
        </>)    
}