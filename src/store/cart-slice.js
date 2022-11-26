import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cartitem',
    initialState:{
        totalQuantity:0,
        bookList:[],
        select_Book:''
    },
    reducers:{
        addToCart(state,actions){
            const newitem=actions.payload;
            const existingbook=state.bookList.find((book)=>{return book.isbn === newitem.isbn});
            if(existingbook){
                existingbook.quantity++;
                existingbook.totalPrice+=existingbook.price;
                
            }
            else{
                state.bookList.push({
                    ...newitem,
                    quantity:1,
                    price:19,
                    totalPrice:19
                });
                
                state.totalQuantity++;
            }
            
        },
        removeFromCart(state,actions){
                const newitem=actions.payload;
                const book=state.bookList.find((item)=>{return item.isbn === newitem.isbn});
               
                if(book.quantity === 1){
                    state.bookList=state.bookList.filter((item)=>{return item.isbn !== newitem.isbn});
                    state.select_Book='';
                }
                else if(book.quantity > 1){
                    
                    book.quantity--;
                    book.totalPrice-=book.price;}

                
        },
        selectBook(state,actions){
            const existingbook = actions.payload;
            state.select_Book = existingbook.isbn;
        },
        buyBook(state,actions){
            const newitem=actions.payload;
            state.bookList=state.bookList.filter((item)=>{return item.isbn !== newitem.isbn});
            state.select_Book='';
                
        }
    }
});

export const cartAction = cartSlice.actions;
export default cartSlice;