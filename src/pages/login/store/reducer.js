/*
 * @Author: YooHoeh 
 * @Date: 2018-07-19 23:16:00 
 * @Last Modified by: YooHoeh
 * @Last Modified time: 2018-07-23 10:34:12
 * @Description: 
 */

import { fromJS } from "immutable";

const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case "change_login":
      return state.set("login", action.value);
    default:
      return state;
  }
};
