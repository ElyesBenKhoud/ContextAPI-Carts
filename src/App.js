/* eslint-disable no-undef */
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="App">
          <Route path="/" exact Component={Home} />
          <Route path="/cart" exact Component={Cart} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
