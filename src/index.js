import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Context from "./Context";

//wrapping all with the context tag so it can be accessible context from all component
ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,

  document.getElementById("root")
);
