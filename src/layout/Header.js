import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cart = useSelector((state) => state?.cartReducer?.cart);
  return (
    <div className="mb-3 text-light bg-dark" style={{ Height: "10vh" }}>
      <div className="d-flex justify-content-between px-5">
        <p>Ecommerce</p>
        <Link to="/cart">
          <button>Cart {cart.length}</button>
        </Link>
      </div>
    </div>
  );
};

const data = "Niamudeen";

export default Header;
export { data };
