import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ScrollProvider } from "./context/scroll-context";

ReactDOM.render(
  <React.StrictMode>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
