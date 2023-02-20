import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import { ExchangeRate } from "./components/ExchangeRate";
import { getInitialRates } from "./store/rates";
import "./style.css";

// start AJAX 

store.dispatch(getInitialRates)

ReactDOM.render(
  <Provider store={store}>
    <ExchangeRate />
  </Provider>,
  document.getElementById("root")
);
