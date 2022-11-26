import {  BrowserRouter,  Routes,  Route} from "react-router-dom";
import './App.css';
import './style/navBar.css';
import './style/byNow.css';
import './style/myorders.css';
import Navigation from "./components/Navigation";
import MyOrder from "./components/MyOrder";
import Home from "./components/Home";
import Cart from "./components/Cart";
import BookDesc from "./components/bookDesc";
import Footer from "./components/footer";
function App() {
  
  return (
      
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/my_orders' element={<MyOrder/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>        
        <Route path='/book_desc/:isbn' element={<BookDesc/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
