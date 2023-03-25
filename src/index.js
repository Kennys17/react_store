import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import { store } from "./features/store";
import "./styles/index.css";
import { Provider } from 'react-redux';

createRoot(document.getElementById("root")).render(
<Provider store={store}>
<BrowserRouter>
<App/>
</BrowserRouter>
</Provider>
);