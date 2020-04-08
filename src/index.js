import React from "react";
import ReactDOM from "react-dom";
import "./index.module.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./store/reducer";

const rootReducer = combineReducers({
  ui: 
  steps:
  data: 
})

const store = createStore(reducer);

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
