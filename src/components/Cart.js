import React, { useState, useEffect, useContext } from "react";
import SingleProduct from "./SingleProduct";
import Carts from "./Context";

export const Cart = () => {
  const [total, settotal] = useState();
  const { cart, setcart } = useContext(Carts);

  useEffect(() => {
    settotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  return (
    <div>
      <span style={{ fontSize: 30 }}> My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}> Total : {total} $</span>
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
