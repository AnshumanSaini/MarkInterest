import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <GoogleOAuthProvider clientId="627131070518-te5s1qvi8vgatcc5pirfehcogmhf5362.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
      ;
    </React.StrictMode>
  </Router>
);
