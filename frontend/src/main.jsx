import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserContexProvider } from "./utilis/useContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContexProvider>
    <App />
  </UserContexProvider>
);
