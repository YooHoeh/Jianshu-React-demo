/*
 * @Author: YooHoeh 
 * @Date: 2018-07-18 10:49:11 
 * @Last Modified by: YooHoeh
 * @Last Modified time: 2018-07-20 10:32:50
 * @Description: 
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { TopicWrapper, TopicItem } from "../style";

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        {this.props.list.map(item => {
          return (
            <TopicItem key={item.get("id")}>
              <img src={item.get("imgUrl")} alt="" />
              {item.get("title")}
            </TopicItem>
          );
        })}
      </TopicWrapper>
    );
  }
}
const mapState = state => ({
  list: state.home.get("topicList")
});
export default connect(
  mapState,
  null
)(Topic);
