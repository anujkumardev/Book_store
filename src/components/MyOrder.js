
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/myorders.css';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { memo } from 'react';
function MyOrder(){
    const orders = useSelector((state)=>state.myorders.orders);
    const tax=useSelector((state)=>state.myorders.tax);
    const representation=()=>{
        const list=[];
        for(let i=0;i<orders.length;i++){
            const element=orders[i];
            list.push( 
            <div className='book' key={element.isbn}>
            <div className='book-status'>
            <div ><p>order placed : {new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}</p></div>
            <div ><p>Status : {'Delivered'}</p></div>
        </div>
        <div className='book-info'>
            <div >
            <img style={{width:'100%'}} src={element.thumbnailUrl} />
            </div>
            <div>
                <div >
                    <h3>{element.title}</h3>
                    <p>By: {element.authors}</p>
                    <p>price: {element.totalPrice + tax}$</p>
                    <p>quantity: {element.quantity}</p>
                </div>
            </div>
        </div></div>);
        }
        return list;

    };
    return (
        <>
    <Container >
        <h2 style={{textAlign:'center'}}>My Orders</h2>
        {representation() }
        
    </Container>
    </>
    );
}
export default memo(MyOrder);