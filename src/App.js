/*
 * @Author: YooHoeh 
 * @Date: 2018-07-17 16:18:04 
 * @Last Modified by: YooHoeh
 * @Last Modified time: 2018-07-21 15:24:56
 * @Description: 
 */

import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header";
import store from "./store";
import Detail from "./pages/detail";
import Home from "./pages/home";
import Login from "./pages/login";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/*因为Provider不会渲染，所以还需要在Provider里面在加一个div来嵌套里面的标签，确保renderDOM只返回一个节点*/}
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/detail" exact component={Detail} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
