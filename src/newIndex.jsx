import ReactDOM from "react-dom/client";
import React from 'react';

import App from "./newApp.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);