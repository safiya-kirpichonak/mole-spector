import React from "react";
import { Provider } from "react-redux";

import "./App-light.css";
import "./App-dark.css";

import AppRouter from "./routes";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
