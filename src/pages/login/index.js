/*
 * @Author: YooHoeh 
 * @Date: 2018-07-18 09:49:05 
 * @Last Modified by: YooHoeh
 * @Last Modified time: 2018-07-23 10:45:16
 * @Description: 
 */

import React, { PureComponent } from "react";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Redirect } from "react-router-dom";

class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="帐号"
              innerRef={input => {
                this.account = input;
              }}
            />
            <Input
              placeholder="密码"
              type="password"
              innerRef={input => {
                this.password = input;
              }}
            />
            <Button
              onClick={() => this.props.login(this.account, this.password)}
            >
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}
const mapState = state => ({
  loginStatus: state.login.get("login")
});
const mapDispatch = dispatch => ({
  login(accountElem, passwordElem) {
    actionCreators.login(accountElem.value, passwordElem.value);
  }
});
export default connect(
  mapState,
  mapDispatch
)(Login);
