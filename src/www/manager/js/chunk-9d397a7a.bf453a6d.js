(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d397a7a"],{"0cfc":function(t,e,s){},"5c01":function(t,e,s){"use strict";var r=s("0cfc"),a=s.n(r);a.a},"696f":function(t,e,s){"use strict";var r=s("751a");class a extends r["a"]{getArticleList(){const t=a.getStorage("token");return this.get("/article/list",{auth:{username:t}})}postArticle(t){return this.post("/article",t,{auth:{username:r["a"].getStorage("token")}})}getCategoryList(){return this.get("/category/list")}getTagList(){return this.get("/tag/list")}deleteArticle(t){return this.delete("/article?articleName="+t)}putArticle(t){return this.put("/article",t,{auth:{username:r["a"].getStorage("token")}})}}e["a"]=a},a55b:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"login"},[s("div",{staticClass:"panel"},[s("el-form",{ref:"form",staticClass:"form",attrs:{rules:t.rules,model:t.form}},[s("h1",{staticClass:"title"},[t._v("Admin Manager")]),s("el-form-item",{attrs:{prop:"account"}},[s("el-input",{staticClass:"input",attrs:{placeholder:"登录账户"},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}},[s("i",{staticClass:"el-input__icon el-icon-user",attrs:{slot:"prefix"},slot:"prefix"})])],1),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{staticClass:"input",attrs:{placeholder:"账户密码","show-password":""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}},[s("i",{staticClass:"el-input__icon el-icon-lock",attrs:{slot:"prefix"},slot:"prefix"})])],1),s("el-button",{staticClass:"submit",attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("登录")])],1)],1)])},a=[],i=(s("696f"),s("0a85"));const o=new i["a"];var n={name:"Login",data(){return{account:"",password:"",form:{account:"",password:""},rules:{account:[{required:!0,message:"登录账户",trigger:["change","blur"]},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:["change","blur"]}],password:[{required:!0,message:"账户密码",trigger:["change","blur"]},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:["change","blur"]}]}}},methods:{onSubmit(){this.$refs["form"].validate(t=>{if(!t)return!1;this.login()})},async login(){const t=await o.login({account:this.form.account,password:this.form.password});0!==t.errorCode?this.loginFail(t):this.loginSuccess(t)},loginSuccess(t){i["a"].setStorage("token",t.message.token),this.$root.isLogin=!0,this.$router.replace("/home/managerArticle")},loginFail(t){this.$notify.error({title:"登陆失败",message:t.message})}}},c=n,l=(s("5c01"),s("2877")),u=Object(l["a"])(c,r,a,!1,null,"5f9be39f",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-9d397a7a.bf453a6d.js.map