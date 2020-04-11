import React from "react";
import ReactDOM from "react-dom";
import "./index.module.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import uiReducer from "./store/reducers/ui";
import stepsReducer from "./store/reducers/steps";
import dataReducer from "./store/reducers/data";
import activeReducer from "./store/reducers/active";
import registerServiceWorker from "./registerServiceWorker";

const rootReducer = combineReducers({
  ui: uiReducer,
  steps: stepsReducer,
  data: dataReducer,
  active: activeReducer,
});

const middleware = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware] Dispatching", action);
      const result = next(action);
      console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(middleware, thunk)));

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
