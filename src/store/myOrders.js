import { createSlice } from "@reduxjs/toolkit";

const myorder= createSlice({
    name:'myorders',
    initialState:{
        orders: [],
        tax:15.00,
        delivered: false
    },
    reducers:{
        deliverOrder(state,actions){
            const book = actions.payload;
            state.orders.push(book);
            state.delivered=!state.delivered;
            
        },
        delivered(state,actions){
            state.delivered=!state.delivered;
        }
    }
});
export const orderAction = myorder.actions;
export default myorder;