(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{221:function(t,s,o){},226:function(t,s,o){"use strict";var n=o(221);o.n(n).a},232:function(t,s,o){"use strict";o.r(s);o(1);var n={props:{title:{type:String,default:"组件"},linesOfCode:{type:Number,default:0}},data:function(){return{isExpand:!1}},computed:{statusClass:function(){return{expand:this.isExpand}},codeBlockStyle:function(){return this.isExpand&&this.linesOfCode>0?"height: calc(".concat(22*this.linesOfCode+40,"px + 0.85rem);"):"height: 0px"}},methods:{handleButtonClick:function(){this.isExpand=!this.isExpand}}},e=(o(226),o(2)),c=Object(e.a)(n,function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"show-components"},[o("div",{staticClass:"show-components__header"},[o("h3",{staticClass:"show-components__title"},[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"show-components__code-control"},[o("button",{staticClass:"code-control__btn",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),t.handleButtonClick(s)}}},[o("Icon",{staticClass:"code-control__btn__icon",class:t.statusClass,attrs:{styles:{color:"#FFF"},color:"rgb(16, 110, 190)",size:"16"}},[t._v("Remote")]),t._v(" "),o("span",{staticClass:"code-control__btn__text"},[t._v("Show code")])],1)])]),t._v(" "),o("div",{staticClass:"show-components__body"},[t._t("default")],2),t._v(" "),o("div",{staticClass:"show-components__code",style:t.codeBlockStyle},[t._t("code")],2)])},[],!1,null,null,null);s.default=c.exports}}]);