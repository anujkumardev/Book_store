
//import Item from "./Item";
import 'bootstrap/dist/css/bootstrap.min.css';
import { memo } from 'react';
import '../style/item.css';
import { lazy, Suspense} from "react";
const Item = lazy(()=>import("./Item"));
const books =require("../books.js").books;

function Home() {
 
  return (
    <>
      <div className="card_group">
        
        { books.map((book)=>{
    return (<Suspense fallback={<div className='card'>Loading ...</div>} key={book.isbn}><Item book={book} key={book.isbn}/></Suspense>)
  })}
  
      </div >
    
    </>
  );
}
export default memo(Home);