import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
const id=process.env.CLIENT_ID;
console.log();
root.render(
  <Router>
    <React.StrictMode>
      <GoogleOAuthProvider clientId={id}>
        <App />
      </GoogleOAuthProvider>
      ;
    </React.StrictMode>
  </Router>
);
