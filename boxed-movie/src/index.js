import React from "react";
import ReactDOM from "react-dom/client";
import { SearchProvider } from "./store/Search-provider";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SearchProvider>
    <App />
  </SearchProvider>
);
