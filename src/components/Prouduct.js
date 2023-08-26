import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import addToCArt from "../redux/acitons/cartActions";

const Product = ({ products }) => {
  // const naviagtion = useNavigate();
  const cart = useSelector((state) => state?.cartReducer);
  console.log(cart, "cart");
  const dispatch = useDispatch();
  const handleProduct = () => {
    // naviagtion("/cart");
  };

  const handleAddtoCart = (data) => {
    console.log("product added");
    dispatch(addToCArt(data));
  };
  return (
    <Row>
      {products?.map((data) => {
        return (
          <Col
            className="col-4 shadow mb-5 p-2"
            key={data?.id}
            onClick={() => handleProduct()}
          >
            {(data?.title).substring(0, 5)}
            <div>
              <button
                className="cursor-pointer"
                onClick={() => handleAddtoCart(data)}
              >
                Add to Cart
              </button>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default Product;
