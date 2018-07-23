/*
 * @Author: YooHoeh 
 * @Date: 2018-07-17 16:23:09 
 * @Last Modified by: YooHoeh
 * @Last Modified time: 2018-07-23 09:49:11
 * @Description: 
 */

import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
  position: reletive;
  height: 56px;
  // background: red;
  border-bottom: 1px solid #f0f0f0f0;
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;
export const Nav = styled.div`
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
  width: 960px;
  height: 100%;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 13px;
    width: 30px;
    border-radius: 15px;
    line-height: 30px;
    text-align: center;
    color: #999;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
  .zoom:hover {
    background: red;
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  margin: 9px 0 9px 20px;
  padding: 0 30px 0 20px;
  text-indent: 8px;
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-exit,
  &.slide-enter {
    transition: all 0.2s ease-in;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;
export const SearchInfo = styled.div`
  width: 240px;
  position: absolute;
  z-index: 1;
  top: 56px;
  left: 0;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background: #fff;
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  font-size: 13px;
  float: right;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all 0.5s ease-in;
    transform-origin: center center;
  }
`;
export const SearchInfoList = styled.div`
  overflow: hidden;
`;
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
  line-height: 20px;
  color: #787878;
  padding: 0 5px;
  border: 1px solid #ddd;
  border-radius: 3px;
`;
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 35px;
  padding: 0 20px;
  line-height: 38px;
  border: 1px solid #ec6148;
  border-radius: 19px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    background: #ec6149;
    color: #fff;
  }
  i {
    position: relative;
    margin-right: 8px;
  }
`;
