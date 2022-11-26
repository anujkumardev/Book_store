
import {  useDispatch, useSelector } from "react-redux";
import { orderAction } from "../store/myOrders";
import { cartAction } from '../store/cart-slice';
function Checkout(){
    const dispatch = useDispatch();
    let isbn = useSelector((state)=>state.cartitem.select_Book);
    const bookList =useSelector((state)=>state.cartitem.bookList);

    const buy=(book)=>{
       
        if(book.totalPrice ){
            let item=book;
            dispatch(orderAction.deliverOrder(item));
            dispatch(cartAction.buyBook(item));
        }       
        else{
            alert('please select the book from the cart');
        }
        
    }

    let book={};
    book=bookList.find((book)=>{return book.isbn === isbn});
    if(book === undefined){book={totalPrice:0};isbn=0;}


    return (
        <>      
        
        <h2>Payment info</h2>
        <p>items Price : {isbn !== 0 && book.totalPrice}</p>
        <p>Tax : {isbn !== 0 && '12.00$'}</p>
        <p>Shipping charges : { isbn !== 0 && '3.00$'}</p>
        <hr/>
        <p>Total price : {isbn !== 0 && `${book.totalPrice+12.00+3.00}$`}</p>
        <button  onClick={()=>buy(book)}>Checkout</button>
       
        </>
    );
}
export default Checkout;