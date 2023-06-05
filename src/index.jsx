import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/DataProvider";

import App from "./App";

import { Provider } from "react-redux";
import { store } from "./store";

import "./assets/css/index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </DataProvider>
    </BrowserRouter>
  </StrictMode>
);
