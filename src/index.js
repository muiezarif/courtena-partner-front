/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "App";
import { Provider } from "react-redux";
import {createStore,applyMiddleware,compose} from "redux";
import reduxThunk from "redux-thunk"
import reducers from "./reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)))
// Soft UI Dashboard React Context Provider
import { SoftUIControllerProvider } from "context";
import SignIn from "layouts/authentication/sign-in";
 import "./global.css"
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <SoftUIControllerProvider>
    
      <App />
    </SoftUIControllerProvider>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
