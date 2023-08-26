import axios from "axios";

const fetchProudcts = () => async (dispatch) => {
  const res = await axios.get("https://fakestoreapi.com/products");
  dispatch({
    type: "FETCH_PRODUCTS",
    payload: res?.data
  });
};
export default fetchProudcts;
