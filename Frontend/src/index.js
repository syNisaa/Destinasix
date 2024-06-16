// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Added Bootstrap CSS import
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./App"; // Path yang benar ke App.js

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
