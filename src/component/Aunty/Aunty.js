import React from "react";
import Cousin from "../Cousin/Cousin";

const Aunty = ({ house }) => {
  return (
    <div>
      <h2> aunty</h2>
      <section className="flex">
        <Cousin house={house}></Cousin>
        <Cousin house={house}></Cousin>
      </section>
    </div>
  );
};

export default Aunty;
