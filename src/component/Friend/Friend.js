import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Friend = () => {
  const [house, setHouse] = useContext(RingContext);
  return (
    <div>
      <h2>Friend</h2>
      <p>Ring : {house}</p>
      <button onClick={() => setHouse(house + 1)}>Increase</button>
    </div>
  );
};

export default Friend;
