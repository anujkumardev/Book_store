import { Form, Button} from "react-bootstrap";
import { useSelector } from "react-redux";

function CartForm(){
  const address=useSelector(state=>state.address.address);
    return (
        <>
        <Form className="p-2">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Shipping Address</Form.Label>
    <Form.Control type="text" defaultValue={address} placeholder="enter the shipping address"  />
  </Form.Group>
  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>
        </>
    );
}

export default CartForm;