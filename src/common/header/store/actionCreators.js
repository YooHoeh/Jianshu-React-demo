/*
 * @Author: YooHoeh 
 * @Date: 2018-07-17 23:20:12 
 * @Last Modified by: YooHoeh
 * @Last Modified time: 2018-07-19 23:05:09
 * @Description: 
 */
import * as constants from "./constants";
import { fromJS } from "immutable";
import axios from "axios";

const getItem = data => ({
  type: constants.GET_SEARCH_TAG,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUSED
});
export const enterSearchInfo = () => ({
  type: constants.ENTER_SEARCH_INFO
});
export const exitSearchInfo = () => ({
  type: constants.EXIT_SEARCH_INFO
});
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});
export const changeSearchPage = index => ({
  type: constants.CHANGE_SEARCH_PAGE,
  index
});
export const getSearchTag = () => {
  return dispatch => {
    axios
      .get("/api/headerList.json")
      .then(res => {
        dispatch(getItem(res.data.data));
      })
      .catch(() => {
        console.log("error");
      });
  };
};
