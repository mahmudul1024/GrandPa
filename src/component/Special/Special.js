import React, { useContext } from "react";
import { MoneyContext, RingContext } from "../Grandpa/Grandpa";

const Special = () => {
  const [house, setHouse] = useContext(RingContext);
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>SPecial</h2>
      <p>Gift : {house}</p>
      <p>Money : {money}</p>
      <button onClick={() => setMoney(money + 500)}>Money Grow</button>
      <button onClick={() => setHouse(house - 1)}>Decrease</button>
    </div>
  );
};

export default Special;
