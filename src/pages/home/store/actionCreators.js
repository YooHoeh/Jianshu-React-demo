/*
 * @Author: YooHoeh 
 * @Date: 2018-07-19 23:28:29 
 * @Last Modified by: YooHoeh
 * @Last Modified time: 2018-07-20 14:44:12
 * @Description: 
 */
import axios from "axios";

const changeData = result => ({
  type: "change_home_data",
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

export const changeHomeData = () => {
  return dispatch => {
    axios.get("/api/home.json").then(res => {
      const result = res.data.data;
      const action = changeData(result);
      dispatch(action);
    });
  };
};
export const loadMoreArticle = () => {
  type: "load_more";
};
