import {createSlice} from '@reduxjs/toolkit'

const initialState={
    order:null
}

export const orderSlice=createSlice({
    name:"order",
    initialState,
    reducers:{
        setOrders:(state,action)=>{
            state.order=[...action.payload];
        }
    }
})

export const {setOrders}=orderSlice.actions;

export default orderSlice.reducer;