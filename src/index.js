import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import {store} from "./store";
import store from "./store";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { AppRoutes } from "./routes/index.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={AppRoutes} />
    </Provider>
  </React.StrictMode>
);
