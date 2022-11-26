
import 'bootstrap/dist/css/bootstrap.min.css';
import { memo } from 'react';
import { Col, Container, Row, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CartForm from './CartForm';
import CartItems from './CartItems';
import Checkout from './Checkout';
import { orderAction } from '../store/myOrders';
function Cart(){
    const dispatch = useDispatch();
    const delivered = useSelector((state)=>state.myorders.delivered);
    const status=()=>{
        return (<Alert  variant="success" onClose={()=>dispatch(orderAction.delivered())} dismissible>
        book delivered...
      </Alert>);
    };
    return (
    <>
    {delivered && status()}
    <Container className='mt-4 cart'>
        <Row>
        <Col sm={4} className=' text-light'>
        <Row className='bg-dark m-2'><CartForm/></Row>
        <Row className='bg-dark m-2'><Checkout/></Row>
        </Col>
        <Col className='bg-light'>
        <h2>Shopping Bag</h2>
        <CartItems key={123}/>
        </Col>
        </Row>
    </Container>
    </>
    );
}
export default memo(Cart);