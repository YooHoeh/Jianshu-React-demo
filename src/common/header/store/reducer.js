/*
 * @Author: YooHoeh 
 * @Date: 2018-07-17 23:08:53 
 * @Last Modified by: YooHoeh
 * @Last Modified time: 2018-07-19 17:33:03
 * @Description: 
 */
import { fromJS } from "immutable";
import * as constants from "./constants";

//immutable对象的set方法会结合之前的immutable对象的值和设置的值，返回一个新的对象而不是直接改变immutable对象
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUSED:
      return state.set("focused", true);
    case constants.SEARCH_BLUR:
      return state.set("focused", false);
    case constants.GET_SEARCH_TAG:
      return state.merge({ list: action.data, totalPage: action.totalPage }); //同时修改多个state
    case constants.CHANGE_SEARCH_PAGE:
      return state.set("page", action.index);
    case constants.ENTER_SEARCH_INFO:
      return state.set("mouseIn", true);
    case constants.EXIT_SEARCH_INFO:
      return state.set("mouseIn", false);
    default:
      return state;
  }
};
