webpackJsonp([30],{233:function(n,t,e){"use strict";function i(n){l||e(831)}Object.defineProperty(t,"__esModule",{value:!0});var a=e(455),o=e.n(a);for(var p in a)"default"!==p&&function(n){e.d(t,n,function(){return a[n]})}(p);var r=e(833),d=e.n(r),l=!1,s=e(0),g=i,c=s(o.a,d.a,!1,g,null,null);c.options.__file="src/views/advanced-router/component/shopping-info.vue",t.default=c.exports},455:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"shopping-info",data:function(){return{showInfo:!1,shopping_col:[{title:"购买物品名称",key:"name",align:"center"},{title:"购买时间",key:"time",align:"center"},{title:"价格",key:"price",align:"center"}],shopping_data:[]}},methods:{init:function(){var n="",t="",e="";switch(this.$route.query.shopping_id.toString()){case"100001":n="《vue.js实战》",t="2017年11月12日 13：33：24",e="79";break;case"100002":n="面包",t="2017年11月5日 19：13：24",e="10";break;case"100003":n="咖啡",t="2017年11月8日 10：39：24",e="57";break;case"100004":n="超级豪华土豪金牙签",t="2017年11月9日 11：45：24",e="200"}var i={name:n,time:t,price:e};this.shopping_data=[i]}},mounted:function(){this.init()},watch:{$route:function(){this.init()}}}},831:function(n,t,e){var i=e(832);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(10)("7379f11e",i,!1,{})},832:function(n,t,e){t=n.exports=e(9)(!1),t.push([n.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.advanced-router {\n  height: 240px !important;\n}\n.advanced-router-tip-p {\n  padding: 10px 0;\n}\n",""])},833:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("Row",[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"compose"}}),n._v("\n                订单详情\n            ")],1),n._v(" "),e("Table",{attrs:{columns:n.shopping_col,data:n.shopping_data}})],1)],1)],1)},a=[];i._withStripped=!0;var o={render:i,staticRenderFns:a};t.default=o}});