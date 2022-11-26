import { useState } from "react";
import { Container,Row,Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cart-slice";
function CartItems(){
    const [select , setSelect]=useState('');
    const [selectid, setSelectid] = useState('');
    const dispatch = useDispatch();
    const add=(book)=>{
        dispatch(
            cartAction.addToCart({
                ...book
            })
        );
    }
    const remove=(book)=>{
        dispatch(   cartAction.removeFromCart(book)   );
    }
    const checkout=(book)=>{
        dispatch(  cartAction.selectBook(book)  );
        
    };
    const items=useSelector((state)=>state.cartitem.bookList);

    return (
        <Container>
        {
            items.map((element)=>{
                return (
                    <Row key={element.isbn} className={selectid===element.isbn?select:''} onClickCapture={()=>{setSelectid(element.isbn);setSelect('selectedBook')}} onClick={()=>{checkout(element)}}>
                <Col sm={3}>
                    <img style={{width:'100%'}} src={element.thumbnailUrl} alt={element.title}/>
                </Col>
                <Col>
                {element.price} $  X  {element.quantity} = {element.totalPrice} $
                </Col>
                <Col>
                <Button onClick={()=>remove(element)}>-</Button> {element.quantity} <Button onClick={()=>add(element)}>+</Button>
                
                 </Col>
                </Row>
                );
            })
        }
        </Container>
    );
}
export default CartItems;