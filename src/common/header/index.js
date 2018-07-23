/*
 * @Author: YooHoeh 
 * @Date: 2018-07-17 16:18:56 
 * @Last Modified by: YooHoeh
 * @Last Modified time: 2018-07-23 11:16:55
 * @Description: 
 */

import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from "./style";

class Header extends Component {
  getListArea() {
    const {
      list,
      focused,
      page,
      totalPage,
      mouseIn,
      handleChangeSearchPage,
      handleMouseEnterInfo,
      handleMouseExitInfo
    } = this.props;
    const pageList = [];
    const newList = list.toJS();
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(<SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>);
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnterInfo}
          onMouseLeave={handleMouseExitInfo}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() =>
                handleChangeSearchPage(page, totalPage, this.spinIcon)
              }
            >
              <i
                ref={icon => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe705;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
  render() {
    const {
      focused,
      list,
      handleInputFocused,
      handleInputBlur,
      login
    } = this.props;

    return (
      <HeaderWrapper>
        <Link to="./">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {login ? (
            <NavItem className="right">注销</NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          )}

          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => handleInputFocused(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? "focused zoom iconfont" : "iconfont zoom"}>
              &#xe61e;
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe6bf;</i>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.header.get("list"),
    page: state.header.get("page"),
    totalPage: state.header.get("totalPage"),
    focused: state.header.get("focused"), //使用combineReducers之后需要在这里添加对应的标题
    mouseIn: state.header.get("mouseIn"),
    login: state.login.get("login")
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleInputFocused(list) {
      if (list.size === 0) dispatch(actionCreators.getSearchTag());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnterInfo() {
      console.log("enter");
      dispatch(actionCreators.enterSearchInfo());
    },
    handleMouseExitInfo() {
      console.log("exit");
      dispatch(actionCreators.exitSearchInfo());
    },
    handleChangeSearchPage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";
      page === totalPage ? (page = 1) : page++;
      dispatch(actionCreators.changeSearchPage(page));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
