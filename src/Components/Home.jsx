
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { setProducts } from "../features/productSlice";
import axios from '../utils/util'
import { NavLink } from "react-router-dom";

export default function Home(){
  const dispatch=useDispatch();
  const user=useSelector(state=>state.user.user);
  useEffect(()=>{
      const getProducts=async function() {
            const res=await axios.get('/product/getallproducts');
            dispatch(setProducts(res.data.products))
      }
      getProducts();
  },[])
  const products=useSelector(state=>state.product.products)
return(<>
  {user?(user.role==="admin"?<div>
    <button><NavLink to="/createnewproduct">Create New Product</NavLink></button>
     {products.map(product=><div key={product._id}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button><NavLink to={`/editproduct/${product._id}`}>Edit</NavLink></button>
    </div>)}
  </div>
  :<div>
    {products.map(product=><div key={product._id}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button>Buy</button>
    </div>)}
  </div>): <div>Hello Guest</div>}
</>)
}