/*
 * @Author: YooHoeh 
 * @Date: 2018-07-17 23:07:45 
 * @Last Modified by: YooHoeh
 * @Last Modified time: 2018-07-18 15:18:12
 * @Description: 
 */

import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
