import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "./Prouduct";

const Cart = () => {
  const cart = useSelector((state) => state?.cartReducer?.cart);
  return (
    <div>
      <Link to="/">
        <button>back</button>
      </Link>
      <h1>Cart</h1>
      <Product products={cart} />
    </div>
  );
};

export default Cart;
