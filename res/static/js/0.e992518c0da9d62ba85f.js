webpackJsonp([0],{FeBl:function(t,e){var r=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=r)},lLmE:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("mvHQ"),s=r.n(a),n={data:function(){return this.phoneRules=[{required:!0,message:"请输入手机号"},{validator:this.phoneValidator,message:"手机号格式错误"}],this.dwRules=[{required:!0,message:"请输入单位"}],this.nameRules=[{required:!0,message:"请输入姓名"}],this.currentCityRules=[{required:!0,message:"请输入目前所在城市"}],this.workTypeRules=[{required:!0,message:"请输入2020年春学期原计划承担课程或岗位"}],this.reasonRules=[{required:!0,message:"请输入无法返回原因"}],this.returnLiuZhouRules=[{required:!0,message:"请输入本周内是否返柳"}],this.returnLiuZhouWayRules=[{required:!0,message:"请输入计划返柳交通工具"}],{form:{},dateShow:!1}},methods:{initForm:function(){this.$set(this.form,"dw",""),this.$set(this.form,"name",""),this.$set(this.form,"currentCity",""),this.$set(this.form,"phone",""),this.$set(this.form,"myHealth",""),this.$set(this.form,"workType",""),this.$set(this.form,"reason",""),this.$set(this.form,"returnLiuZhou",""),this.$set(this.form,"returnLiuZhouTime",""),this.$set(this.form,"returnLiuZhouWay",""),this.$set(this.form,"intro","")},submitForm:function(){var t=this;this.$axios.post("/api/frontdesk/questionnaire",s()(this.form)).then(function(e){var r=e.data;console.log(e.data),0==r.code?t.$messagebox("提示","提交成功,谢谢您的参与").then(function(t){}):t.$toast(r.msg)})},phoneValidator:function(t){return/1\d{10}/.test(t)},onSubmit:function(t){console.log("submit",t)},onFailed:function(t){console.log("failed",t)}}},o={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("van-nav-bar",{attrs:{title:"滞留疫区无法返回教职工信息"}}),t._v(" "),r("van-form",{attrs:{"validate-first":""},on:{submit:t.onSubmit,failed:t.onFailed},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[r("van-cell",{staticStyle:{"text-align":"left"},attrs:{title:"单位："}}),t._v(" "),r("van-field",{attrs:{placeholder:"单位",rules:t.dwRules},model:{value:t.form.dw,callback:function(e){t.$set(t.form,"dw",e)},expression:"form.dw"}}),t._v(" "),r("van-cell",{staticStyle:{"text-align":"left"},attrs:{title:"姓名："}}),t._v(" "),r("van-field",{attrs:{placeholder:"请输入姓名",rules:t.nameRules},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),r("van-cell",{staticStyle:{"text-align":"left"},attrs:{title:"目前所在城市："}}),t._v(" "),r("van-field",{attrs:{placeholder:"请输入",rules:t.currentCityRules},model:{value:t.form.currentCity,callback:function(e){t.$set(t.form,"currentCity",e)},expression:"form.currentCity"}}),t._v(" "),r("van-cell",{staticStyle:{"text-align":"left"},attrs:{title:"手机号："}}),t._v(" "),r("van-field",{attrs:{name:"phone",rules:t.phoneRules},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}}),t._v(" "),r("van-cell",{staticStyle:{"text-align":"left"},attrs:{title:"健康状况："}}),t._v(" "),r("van-field",{attrs:{name:"radio"}},[r("van-radio-group",{attrs:{slot:"input"},slot:"input",model:{value:t.form.myHealth,callback:function(e){t.$set(t.form,"myHealth",e)},expression:"form.myHealth"}},[r("van-radio",{attrs:{name:"1"}},[t._v("健康")]),t._v(" "),r("van-radio",{attrs:{name:"2"}},[t._v("咳嗽")]),t._v(" "),r("van-radio",{attrs:{name:"3"}},[t._v("发热")]),t._v(" "),r("van-radio",{attrs:{name:"4"}},[t._v("咳嗽和发热")])],1)],1),t._v(" "),r("van-cell",{staticStyle:{"text-align":"left"},attrs:{title:"2020年春学期原计划承担课程或岗位："}}),t._v(" "),r("van-field",{attrs:{placeholder:"请输入",rules:t.workTypeRules},model:{value:t.form.workType,callback:function(e){t.$set(t.form,"workType",e)},expression:"form.workType"}}),t._v(" "),r("van-cell",{staticStyle:{"text-align":"left"},attrs:{title:"无法返回原因："}}),t._v(" "),r("van-field",{attrs:{placeholder:"请输入",rules:t.reasonRules},model:{value:t.form.reason,callback:function(e){t.$set(t.form,"reason",e)},expression:"form.reason"}}),t._v(" "),r("van-cell",{staticStyle:{"text-align":"left"},attrs:{title:"本周内是否返柳："}}),t._v(" "),r("van-field",{attrs:{name:"radio"}},[r("van-radio-group",{attrs:{slot:"input",rules:t.returnLiuZhouRules},slot:"input",model:{value:t.form.returnLiuZhou,callback:function(e){t.$set(t.form,"returnLiuZhou",e)},expression:"form.returnLiuZhou"}},[r("van-radio",{attrs:{name:"1"}},[t._v("是")]),t._v(" "),r("van-radio",{attrs:{name:"2"}},[t._v("否")])],1)],1),t._v(" "),r("van-cell",{staticStyle:{"text-align":"left"},attrs:{title:"计划返柳交通工具："}}),t._v(" "),r("van-field",{attrs:{placeholder:"请输入",rules:t.returnLiuZhouWayRules},model:{value:t.form.returnLiuZhouWay,callback:function(e){t.$set(t.form,"returnLiuZhouWay",e)},expression:"form.returnLiuZhouWay"}}),t._v(" "),r("van-cell",{staticStyle:{"text-align":"left"},attrs:{title:"备注："}}),t._v(" "),r("van-field",{attrs:{placeholder:"请输入"},model:{value:t.form.intro,callback:function(e){t.$set(t.form,"intro",e)},expression:"form.intro"}}),t._v(" "),r("div",{staticStyle:{margin:"16px"}},[r("van-button",{attrs:{round:"",block:"",type:"info"},on:{click:function(e){return t.submitForm()}}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]},i=r("VU/8")(n,o,!1,null,null,null);e.default=i.exports},mvHQ:function(t,e,r){t.exports={default:r("qkKv"),__esModule:!0}},qkKv:function(t,e,r){var a=r("FeBl"),s=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}}});
//# sourceMappingURL=0.e992518c0da9d62ba85f.js.map