import { createSlice } from "@reduxjs/toolkit";

const address= createSlice({
    name:'address',
    initialState:{
            address:'123 street abc, london'
        },
    reducers:{
        save(state,actions){
            state.address= actions.payload;
        }
    }
});
export const addressAction = address.actions;
export default address;