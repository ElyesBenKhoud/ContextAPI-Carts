import React, { useState } from "react";
//faker hold fake imgs and dummy data
import faker from "faker";
import SingleProduct from "./SingleProduct";

//to have same data
faker.seed(100);

const Home = ({ cart, setcart }) => {
  //getting dummy data from faker website store it in 20 objects inside an array
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));

  const [products] = useState(productArray);

  return (
    <div className="productContainer">
      {products.map((prod, key) => (
        <SingleProduct key={key} prod={prod} cart={cart} setcart={setcart} />
      ))}
    </div>
  );
};

export default Home;
