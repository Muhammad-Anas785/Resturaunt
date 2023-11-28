//Old version

// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </>,
//   document.getElementById("root")
// );

//New version
import App from "./App";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <BrowserRouter basename="/Resturaunt">
      <App />
    </BrowserRouter>
  </>
);
