import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import postsReducer from "./reducers/posts";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

const store = configureStore({
  reducer: { posts: postsReducer },
});

// Initial render
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
