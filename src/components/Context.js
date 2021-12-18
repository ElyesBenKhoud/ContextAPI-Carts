import { createContext } from "react";
import { useState } from "react";

const Carts = createContext();

const Context = ({ children }) => {
  const [cart, setcart] = useState([]);
  return <Carts.Provider value={{ cart, setcart }}>{children}</Carts.Provider>;
};

export default Context;
