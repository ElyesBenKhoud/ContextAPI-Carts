import React from "react";

const Cart = ({ cart, setcart }) => {
  return (
    <div>
      <span style={{ fontSize: 30 }}> My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}> Total : Eur.100</span>
      <div className="productContainer">{}</div>
    </div>
  );
};

export default Cart;
