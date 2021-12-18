/* eslint-disable no-undef */
import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Routes>
      <Header />
      <div className="App">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </div>
    </Routes>
  );
};

export default App;
