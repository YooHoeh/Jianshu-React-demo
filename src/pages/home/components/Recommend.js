/*
 * @Author: YooHoeh 
 * @Date: 2018-07-18 10:49:06 
 * @Last Modified by: YooHoeh
 * @Last Modified time: 2018-07-20 10:38:56
 * @Description: 
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { RecommendBorad, RecommemdItem } from "../style";

class Recommend extends Component {
  render() {
    return (
      <RecommendBorad>
        {this.props.list.map(item => {
          return (
            <RecommemdItem key={item.get("id")} src={item.get("imgUrl")} />
          );
        })}
      </RecommendBorad>
    );
  }
}
const mapState = state => ({
  list: state.home.get("recommendList")
});
export default connect(
  mapState,
  null
)(Recommend);
