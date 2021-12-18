import React, { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";

const Cart = ({ cart, setcart }) => {
  const [total, settotal] = useState();
  useEffect(() => {
    settotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, []);
  return (
    <div>
      <span style={{ fontSize: 30 }}> My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}> Total : Eur.{total}</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct
            prod={prod}
            key={prod.id}
            cart={cart}
            setcart={setcart}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
