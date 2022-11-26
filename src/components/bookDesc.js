import { memo } from 'react';
import { useState } from 'react';
import { Button , Alert} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {  useLocation , Link } from 'react-router-dom';
import { cartAction } from '../store/cart-slice';
function BookDesc(){
    const [flag,setFlag]=useState(false);
    const {book} = useLocation().state;
    const dispatch= useDispatch();
    const addToCart=()=>{
        dispatch(
            cartAction.addToCart({
                ...book,
                quantity : 1,
                price : 19,
                totalprice : 19

            })
        );
        setFlag(true);
        
    };
    const status=()=>{
        return (<Alert  variant="success" onClose={()=>setFlag(false)} dismissible>
        1 book add to cart...
      </Alert>);
    };
    return (
        <>
        { flag && status()}
        <div className='product'>
           <div className='product_img'> 
            <img style={{ width: '100%'}} src={book.thumbnailUrl} alt={book.title}/>
            </div>
        
            <div className='product_info'>
            <h2>{book.title}</h2>
            <p><strong>Book Price : </strong>19.00$</p>
            <p><strong>Author Name : </strong>{book.authors.join(" , ")}</p>
            <p><strong>Page Count : </strong>{book.pageCount}</p>
            <p><strong>ISBN : </strong>{book.isbn}</p>
            <Button ><Link style={{color:'white',textDecoration:'none'}}  to={'/cart'}>Buy Now</Link></Button>
            <Button className='product_addToCart' onClick={addToCart}>Add to Cart</Button>
            <h4 className='product_desc'>Description</h4>
            <p> {book.longDescription}</p>
            </div>
        </div>
        </>
    );
}
export default memo(BookDesc);