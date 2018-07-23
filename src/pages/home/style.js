/*
 * @Author: YooHoeh 
 * @Date: 2018-07-18 09:56:36 
 * @Last Modified by: YooHoeh
 * @Last Modified time: 2018-07-20 13:58:04
 * @Description: 
 */

import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  margin: 0 auto;
  width: 960px;
  right: 300;
`;
export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.div`
  float: right;
  width: 280px;
`;
export const TopicWrapper = styled.div`
  padding: 20px 0 1 0px 0;
  overflow: hidden;
  margin-left: -18px;
  margin-top: 20px;
  border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  margin-left: 18px;
  margin-bottom: 10px;
  float: left;
  background: #f7f7f7;
  height: 32px;
  height: 32px;
  font-size: 12px;
  padding-right: 10px;
  line-height: 32px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  img {
    width: 32px;
    padding-right: 10px;
    height: 32px;
    display: block;
    float: left;
  }
`;
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;
export const RecommendBorad = styled.div`
  margin: 30px 0;
  width: 280px;
`;
export const RecommemdItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${props => props.src});
  background-size: contain;
`;
export const WriterWrapper = styled.div`
  width: 278x;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-aligh: center;
  background: red;
`;
export const WriterItem = styled.div``;
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  margin-top: 15px;
  color: #fff;
  cursor: pointer;
`;
