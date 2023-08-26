import "./styles.css";
import Header from "./layout/Header";
import Products from "./components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
