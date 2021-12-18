import { createContext, useContext, useState } from "react";
import faker from "faker";
//create context accecssible from any component
const Cart = createContext();
//storing save data randomly
faker.seed(100);
//create context and passing children to manage state from any component
const Context = ({ children }) => {
  //create state
  const [cart, setCart] = useState([]);
  //creating dummy data from faker website with 20 storing in 1 array
  const productsArray = [...Array(20)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));

  const [products] = useState(productsArray);
  //passing all states to all component as value attr
  return (
    <Cart.Provider value={{ cart, setCart, products }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
