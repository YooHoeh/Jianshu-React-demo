import { injectGlobal } from "styled-components";

injectGlobal`
@font-face {
  font-family: "iconfont";
  @font-face {
    font-family: 'iconfont';  /* project id 751740 */
    src: url('//at.alicdn.com/t/font_751740_fepxf22ux9h.eot');
    src: url('//at.alicdn.com/t/font_751740_fepxf22ux9h.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_751740_fepxf22ux9h.woff') format('woff'),
    url('//at.alicdn.com/t/font_751740_fepxf22ux9h.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_751740_fepxf22ux9h.svg#iconfont') format('svg');
  }
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
