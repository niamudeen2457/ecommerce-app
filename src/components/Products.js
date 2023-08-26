import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchProudcts from "../redux/acitons/productActions";
import Product from "./Prouduct";

const Products = () => {
  const products = useSelector((state) => state?.productReducer?.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProudcts());
  }, []);

  return <Product products={products} />;
};

export default Products;
