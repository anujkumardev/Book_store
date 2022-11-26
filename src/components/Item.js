import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
function Item({book}){
    return (<>

<div className="card">
<Link className='card_prop' to={`/book_desc/${book.isbn}`} state= {{book : book}}>
  <img src={book.thumbnailUrl} alt={book.title} style={{width:"100%"}}/>
  <p className='title'>{book.title}</p>
  <p className="price">$19.00</p>
  <p className='Book-shrtdesc'>{book.shortDescription}</p>
  </Link>
</div>

</>
    );

}
export default Item;