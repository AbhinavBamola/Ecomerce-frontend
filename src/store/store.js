import {configureStore,combineReducers} from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import productReducer from '../features/productSlice'
import orderReducer from '../features/orderSlice'

const rootReducer=combineReducers({
    user:userReducer,
    product:productReducer,
    order:orderReducer
})

export  const store=configureStore({
    reducer:rootReducer
})