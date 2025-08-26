import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './App.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// GitHub Pages용 basename 설정
const isProduction = process.env.NODE_ENV === "production";
const basename = isProduction
  ? process.env.REACT_APP_BASENAME || "/"
  : "/";

console.log( "NODE_ENV >> ", process.env.NODE_ENV);
console.log( "REACT_APP_BASENAME >> ", process.env.REACT_APP_BASENAME);

root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);