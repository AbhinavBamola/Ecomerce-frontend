import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider}  from 'react-redux'
import {store} from './store/store.js'
import App from './App.jsx'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import Home from './Components/Home.jsx'
import AdminRegistration from './Components/AdminRegistration.jsx'
import EditProduct from './Components/EditProduct.jsx'
import CreatenewProduct from './Components/CreatenewProduct.jsx'
import {createBrowserRouter,Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/> 
      <Route path='/login' element={<Login/>}/> 
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/adminreg' element={<AdminRegistration/>}/>
       <Route path='/createnewproduct' element={<CreatenewProduct/>}/>
       <Route path='/editproduct/:id' element={<EditProduct/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>,
)
