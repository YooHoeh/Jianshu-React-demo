/*
 * @Author: YooHoeh 
 * @Date: 2018-07-18 10:49:03 
 * @Last Modified by: YooHoeh
 * @Last Modified time: 2018-07-20 11:24:22
 * @Description: 
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { WriterWrapper, WriterItem } from "../style";

class Writer extends Component {
  render() {
    return (
      <WriterWrapper>
        {this.props.list.map(item => {
          return <WriterItem />;
        })}
      </WriterWrapper>
    );
  }
}

const mapState = state => ({
  list: state.home.get("writer")
});

export default connect(
  mapState,
  null
)(Writer);
