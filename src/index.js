import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./Components/ProductContext/ProductContext";
import { FilterContextProvider } from "./Components/ProductContext/FilterContext";
import { CartProvider } from "./Components/ProductContext/cartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <AppProvider>
    <FilterContextProvider>
    <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CartProvider>
    </FilterContextProvider>
    </AppProvider>

);

reportWebVitals();
