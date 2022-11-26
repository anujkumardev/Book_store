import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function Navigation({title}){
  const [topnav, setTopnav] = useState(false);
    return (
      <>
<header>
  <nav className={` topnav ${topnav ? "responsive" : ""}`} id="myTopnav">
  <Link to={'/'} >ecommerce</Link>
  <Link to={'/'} >Home</Link>
  <Link to={"my_orders"}>My orders</Link>
  <Link to={"/cart"}>Cart</Link>
  <a className="icon"  onClick={()=>setTopnav(!topnav)}>
    <i  className="fa fa-bars"></i>
  </a>
</nav>
</header>
        

      </>
        
    );
}
export default Navigation;