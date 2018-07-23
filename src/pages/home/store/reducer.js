/*
 * @Author: YooHoeh 
 * @Date: 2018-07-19 23:16:00 
 * @Last Modified by: YooHoeh
 * @Last Modified time: 2018-07-20 19:13:53
 * @Description: 
 */

import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [],
  recommendList: [],
  articleList: [],
  writer: [],
  showScroll: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case "change_home_data":
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      });
    case "showToTopBtn":
      console.log("bingo");
      return state.set("showScroll", true);
    case "hideToTopBtn":
      return state.set("showScroll", false);
    default:
      return state;
  }
};
