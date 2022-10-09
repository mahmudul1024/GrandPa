import React, { useState } from "react";
import "./Home.css";
import { useLoaderData, useSearchParams } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddtoCart = (tshirt) => {
    const exists = cart.find((ts) => ts._id === tshirt._id);
    if (exists) {
      alert("Already exists");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };

  const handleDelete = (id) => {
    const remaining = cart.filter((ts) => ts._id !== id);
    setCart(remaining);
  };
  return (
    <div className="home_container">
      <div className="tshirt_conatiner">
        {tshirts.map((tshirt) => (
          <Tshirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddtoCart={handleAddtoCart}
          ></Tshirt>
        ))}
      </div>
      <div className="cart_container">
        <Cart cart={cart} handleDelete={handleDelete}></Cart>
      </div>
    </div>
  );
};

export default Home;
