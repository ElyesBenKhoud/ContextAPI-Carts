import React, { useState } from "react";
//faker hold fake imgs and dummy data
import faker from "faker";
import SingleProduct from "./SingleProduct";

function Home() {
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
        <SingleProduct prod={prod} />
      ))}
    </div>
  );
}

export default Home;
