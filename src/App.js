/* eslint-disable no-undef */
import React, { useState } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setcart] = useState([]);

  return (
    <Routes>
      <Header />
      <div className="App">
        <Route exact path="/">
          <Home cart={cart} setcart={setcart} />
        </Route>
        <Route exact path="/cart">
          <Cart cart={cart} setcart={setcart} />
        </Route>
      </div>
    </Routes>
  );
};

export default App;
