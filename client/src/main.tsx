// importing using "@" from src folder but you can easily use "./" annotations
import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/index.css";

import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { store } from "@/state/store";

setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
