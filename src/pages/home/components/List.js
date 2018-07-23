/*
 * @Author: YooHoeh 
 * @Date: 2018-07-18 10:49:08 
 * @Last Modified by: YooHoeh
 * @Last Modified time: 2018-07-20 20:32:12
 * @Description: 
 */
import React, { Component } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map((item, index) => {
          return (
            <Link key={index} to="./detail">
              <ListItem key={item.get("id")}>
                <img className="pic" src={item.get("imgUrl")} alt="" />
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc"> {item.get("desc")}</p>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
        <LoadMore>加载更多</LoadMore>
      </div>
    );
  }
}
const mapstate = state => ({
  list: state.home.get("articleList")
});
const mapDispatch = dispatch => {};
export default connect(
  mapstate,
  mapDispatch
)(List);
