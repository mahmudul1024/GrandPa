import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleDelete }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please buy atleast one</p>;
  } else if (cart.length === 3) {
    message = <p>are beta R kinis na</p>;
  } else {
    message = <p>Thank you for buying {cart.length} Items</p>;
  }

  return (
    <div>
      <h2 className={cart.length === 2 ? "purple" : "orange"}>Order summery</h2>
      <h3 className={`bold  ${cart.length === 2 ? "purple" : "green"}`}>
        Order quantity : {cart.length}
      </h3>

      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}

          <button onClick={() => handleDelete(tshirt._id)}>delete</button>
        </p>
      ))}
      {message}

      {cart.length === 4 ? <p>gift for 4 jon</p> : <p>r koto kinba</p>}

      {cart.length === 2 && <h1>hoi hoi</h1>}
    </div>
  );
};

export default Cart;

// conditional rendering
// 1. use element in a varible with the help of if else conditions

// 2. ternary operation condition?
