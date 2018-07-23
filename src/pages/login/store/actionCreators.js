/*
 * @Author: YooHoeh 
 * @Date: 2018-07-19 23:28:29 
 * @Last Modified by: YooHoeh
 * @Last Modified time: 2018-07-23 10:46:39
 * @Description: 
 */
import axios from "axios";

const changeLogin = () => ({
  type: "change_login",
  value: true
});
export const login = (account, password) => {
  console.log("click");
  return dispatch => {
    axios
      .get("/api/login.json?account" + account + "&password" + password)
      .then(res => {
        const result = res.date.date;
        if (result) {
          dispatch(changeLogin());
        } else {
          alert("登录失败");
        }
      });
  };
};
