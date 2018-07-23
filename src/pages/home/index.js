/*
 * @Author: YooHoeh 
 * @Date: 2018-07-18 09:49:05 
 * @Last Modified by: YooHoeh
 * @Last Modified time: 2018-07-20 19:29:21
 * @Description: 
 */

import React, { PureComponent } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Topic from "./components/Topic";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import List from "./components/List";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            alt=""
            className="banner-img"
            src="https://upload.jianshu.io/admin_banners/web_images/4345/7c956f527bc16d8e639c436dcbb806e99fc4142a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.show ? (
          <button
            onClick={() => window.scrollTo(0, 0)}
            style={{
              position: "fixed",
              bottom: "100px",
              right: "100px",
              width: "100px",
              height: "100px",
              fontSize: "80px;"
            }}
          >
            TOP
          </button>
        ) : null}
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }
  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}
const mapState = state => ({
  show: state.home.get("showScroll")
});
const mapDispatch = dispatch => ({
  changeHomeData() {
    const action = actionCreators.changeHomeData();
    dispatch(action);
  },
  changeScrollTopShow(e) {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 400) {
      dispatch({
        type: "showToTopBtn"
      });
    } else {
      dispatch({
        type: "hideToTopBtn"
      });
    }
  }
});
export default connect(
  mapState,
  mapDispatch
)(Home);
