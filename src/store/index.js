import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import myorder from './myOrders';
import address from './address';
const Store=configureStore({
  reducer: {
    cartitem : cartSlice.reducer,
    myorders : myorder.reducer,
    address : address.reducer
  }
});

export default Store;