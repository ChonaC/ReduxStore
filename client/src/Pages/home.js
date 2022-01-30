import React from "react";
import ProductList from "../Components/ProductList";
import CategoryMenu from "../Components/CategoryMenu";
import Cart from "../Components/Cart";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;