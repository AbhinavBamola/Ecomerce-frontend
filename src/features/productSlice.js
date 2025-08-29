import {asyncThunkCreator, createSlice} from '@reduxjs/toolkit';
import { userSlice } from './userSlice';

const initialState={
    products:[],
}

export const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
        setProducts:(state,action)=>{
            state.products=[...action.payload];
        }
    }
})

export const {setProducts}=productSlice.actions;

export default productSlice.reducer;