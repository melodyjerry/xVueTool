webpackJsonp([27],{0:function(e,t,n){n("j1ja"),e.exports=n("NHnr")},"0OYy":function(e,t){},"2uFj":function(e,t,n){"use strict";t.a={TOKEN_KEY:"token",ROUTER_KEY:"routers",DYNAMIC_ROUTER_KEY:"dynamic-routers",ROUTER_WHITE_LIST:["/login"]}},"5W1q":function(e,t){},EARb:function(e,t){},"L/EB":function(e,t){},MWF8:function(e,t,n){var i={"./":["8hXn",2],"./basic/color-picker":["vAOe",16],"./basic/color-picker.vue":["vAOe",16],"./basic/count-to":["+rsb",17],"./basic/count-to.vue":["+rsb",17],"./basic/floor":["GYXo",12],"./basic/floor.vue":["GYXo",12],"./basic/form":["Uial",18],"./basic/form.vue":["Uial",18],"./basic/image-crop":["YE0o",0,7],"./basic/image-crop.vue":["YE0o",0,7],"./basic/select-tree":["egjg",11],"./basic/select-tree.vue":["egjg",11],"./basic/table":["Yvoq",22],"./basic/table.vue":["Yvoq",22],"./basic/tree":["wiei",10],"./basic/tree.vue":["wiei",10],"./code-tools/base64":["QLI3",6,0],"./code-tools/base64.vue":["QLI3",6,0],"./code-tools/md5":["DOCW",5,0],"./code-tools/md5.vue":["DOCW",5,0],"./components/menu-bar":["7Yuv",0,25],"./components/menu-bar.vue":["7Yuv",0,25],"./components/menu-item":["uQBQ",0],"./components/menu-item.vue":["uQBQ",0],"./components/menu-link":["1ENj",0],"./components/menu-link.vue":["1ENj",0],"./components/nav-bar":["H0Nb",20],"./components/nav-bar.vue":["H0Nb",20],"./components/views-bar":["jKLp",0,15],"./components/views-bar.vue":["jKLp",0,15],"./editor/code":["kUqG",4],"./editor/code.vue":["kUqG",4],"./editor/crontab":["pQxs",9],"./editor/crontab.vue":["pQxs",9],"./editor/jsoneditor":["PkjR",14],"./editor/jsoneditor.vue":["PkjR",14],"./editor/markdown":["zO5+",13],"./editor/markdown.vue":["zO5+",13],"./editor/xmleditor":["CcfB",3,0],"./editor/xmleditor.vue":["CcfB",3,0],"./error/401":["3RDD",21],"./error/401.vue":["3RDD",21],"./error/404":["34W9",24],"./error/404.vue":["34W9",24],"./error/500":["ExNb",19],"./error/500.vue":["ExNb",19],"./home":["26dS",0,8],"./home.vue":["26dS",0,8],"./index":["8hXn",2],"./index.vue":["8hXn",2],"./login":["Quw4",1],"./login.vue":["Quw4",1],"./settings":["p9Hj",23],"./settings.vue":["p9Hj",23]};function o(e){var t=i[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}o.keys=function(){return Object.keys(i)},o.id="MWF8",e.exports=o},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),o={name:"App",mounted:function(){var e=document.createElement("script");e.src="https://v1.cnzz.com/z_stat.php?id=1278632265&web_id=1278632265",e.language="JavaScript",document.body.appendChild(e)},watch:{$route:function(){if(window._czc){var e=window.location,t=e.pathname+e.hash;window._czc.push(["_trackPageview",t,"/"])}}}},a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")(o,a,!1,function(e){n("EARb")},null,null).exports,s=n("YaEn"),c=n("Dd8w"),u=n.n(c),d=n("SQ6o"),m=(n("2uFj"),n("NYxO")),E=n("pFYg"),f=n.n(E),l=n("OVpc"),p=n.n(l),T={getCircularReplacer:function(){var e=new p.a;return function(t,n){if("object"===(void 0===n?"undefined":f()(n))&&null!==n){if(e.has(n))return;e.add(n)}return n}},notNull:function(e){return null!=e&&void 0!=e&&"null"!=e&&"undefined"!=e&&""!=e},isNull:function(e){return!this.notNull(e)},getSettingStorage:function(e){var t=localStorage.getItem(e);return"true"==(t=!!this.notNull(t)&&t)}},_={state:{settings:{lang:localStorage.getItem("lang")||"zh-CN",openSetting:T.getSettingStorage("openSetting"),showViewsBar:T.getSettingStorage("showViewsBar"),viewBarType:localStorage.getItem("viewBarType")||"tab",keepViewsByRefresh:T.getSettingStorage("keepViewsByRefresh"),collapseMenu:T.getSettingStorage("collapseMenu"),uniqueOpened:T.getSettingStorage("uniqueOpened"),showBreadCrumb:T.getSettingStorage("showBreadCrumb")}},mutations:{UPDATE_SETTINGS:function(e,t){var n=t.key,i=t.value,o=t.type;if(o&&"toggle"===o)return e.settings[n]=!e.settings[n],void localStorage.setItem(n,e.settings[n]);e.settings[n]=i,localStorage.setItem(n,i)}},actions:{updateSettings:function(e,t){(0,e.commit)("UPDATE_SETTINGS",t)}}},v=n("//Fk"),g=n.n(v),w=n("woOf"),S=n.n(w),h=n("Gu7T"),I=n.n(h),R=n("BO1k"),V=n.n(R),N=n("d7EF"),b=n.n(N),O=n("mvHQ"),A=n.n(O),B={state:{keepViewsByRefresh:T.getSettingStorage("keepViewsByRefresh"),visitedViews:[]},mutations:{ADD_VISITED_VIEW:function(e,t){var n=e.keepViewsByRefresh?JSON.parse(sessionStorage.getItem("visitedViews")||"[]"):e.visitedViews;if(n.some(function(e){return e.path===t.path}))e.visitedViews=n;else{var i={};i.name=t.name||"无标题",i.path=t.path,i.fullPath=t.fullPath,i.fixed=t.fixed,n.push(i),e.visitedViews=n,sessionStorage.setItem("visitedViews",A()(n))}},DEL_VISITED_VIEW:function(e,t){var n=e.keepViewsByRefresh?JSON.parse(sessionStorage.getItem("visitedViews")||"[]"):e.visitedViews,i=!0,o=!1,a=void 0;try{for(var r,s=V()(n.entries());!(i=(r=s.next()).done);i=!0){var c=r.value,u=b()(c,2),d=u[0];if(u[1].path===t.path){n.splice(d,1),e.visitedViews=n,sessionStorage.setItem("visitedViews",A()(n));break}}}catch(e){o=!0,a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}},DEL_OTHERS_VISITED_VIEWS:function(e,t){var n=e.keepViewsByRefresh?JSON.parse(sessionStorage.getItem("visitedViews")||"[]"):e.visitedViews,i=n.filter(function(e){return e.fixed}),o=!0,a=!1,r=void 0;try{for(var s,c=V()(n.entries());!(o=(s=c.next()).done);o=!0){var u=s.value,d=b()(u,2),m=d[0];if(d[1].path===t.path&&!t.fixed){n=n.slice(m,m+1),n=[].concat(I()(i),I()(n)),e.visitedViews=n,sessionStorage.setItem("visitedViews",A()(n));break}}}catch(e){a=!0,r=e}finally{try{!o&&c.return&&c.return()}finally{if(a)throw r}}},DEL_ALL_VISITED_VIEWS:function(e){var t=e.visitedViews.filter(function(e){return e.fixed});e.visitedViews=t,sessionStorage.setItem("visitedViews",A()(t))},UPDATE_VISITED_VIEW:function(e,t){var n=!0,i=!1,o=void 0;try{for(var a,r=V()(e.visitedViews);!(n=(a=r.next()).done);n=!0){var s=a.value;if(s.path===t.path){s=S()(s,t);break}}}catch(e){i=!0,o=e}finally{try{!n&&r.return&&r.return()}finally{if(i)throw o}}}},actions:{addView:function(e,t){(0,e.dispatch)("addVisitedView",t)},addVisitedView:function(e,t){(0,e.commit)("ADD_VISITED_VIEW",t)},delView:function(e,t){var n=e.dispatch,i=e.state;return new g.a(function(e){n("delVisitedView",t),e({visitedViews:[].concat(I()(i.visitedViews))})})},delVisitedView:function(e,t){var n=e.commit,i=e.state;return new g.a(function(e){n("DEL_VISITED_VIEW",t),e([].concat(I()(i.visitedViews)))})},delOthersViews:function(e,t){var n=e.dispatch,i=e.state;return new g.a(function(e){n("delOthersVisitedViews",t),e({visitedViews:[].concat(I()(i.visitedViews))})})},delOthersVisitedViews:function(e,t){var n=e.commit,i=e.state;return new g.a(function(e){n("DEL_OTHERS_VISITED_VIEWS",t),e([].concat(I()(i.visitedViews)))})},delAllViews:function(e,t){var n=e.dispatch,i=e.state;return new g.a(function(e){n("delAllVisitedViews",t),e({visitedViews:[].concat(I()(i.visitedViews))})})},delAllVisitedViews:function(e){var t=e.commit,n=e.state;return new g.a(function(e){t("DEL_ALL_VISITED_VIEWS"),e([].concat(I()(n.visitedViews)))})},updateVisitedView:function(e,t){(0,e.commit)("UPDATE_VISITED_VIEW",t)}}},D={state:{user:{},role:[],routers:s.a.options.routes,dynamicRouters:[]},mutations:{GET_USER:function(e){return e.user},SET_USER:function(e,t){e.user=t},SET_ROUTER:function(e,t){e.routers=e.routers.concat(t)},GET_DYNAMIC_ROUTER:function(e){return e.dynamicRouters},SET_DYNAMIC_ROUTER:function(e,t){e.dynamicRouters=t}},actions:{getUser:function(e){(0,e.commit)("GET_USER")},setUser:function(e,t){(0,e.commit)("SET_USER",t)},setRouters:function(e,t){(0,e.commit)("SET_ROUTER",t)},getDynamicRouters:function(e){(0,e.commit)("GET_DYNAMIC_ROUTER")},setDynamicRouters:function(e,t){(0,e.commit)("SET_DYNAMIC_ROUTER",t)}}},U={settings:function(e){return e.settings.settings},visitedViews:function(e){return e.viewsBar.visitedViews},showBreadCrumb:function(e){return e.viewsBar.showBreadCrumb},user:function(e){return e.user.user},routers:function(e){return e.user.routers},dynamicRouters:function(e){return e.user.dynamicRouters}};i.default.use(m.a);var y=new m.a.Store({modules:{settings:_,viewsBar:B,user:D},getters:U}),L=n("Y81h"),k=n.n(L),X=(n("UVIz"),n("pd7E"));s.a.beforeEach(function(e,t,n){k.a.start(),0===y.state.user.dynamicRouters.length?Y(n,e):n()}),s.a.afterEach(function(){k.a.done()});var Y=function(e,t){var n=d.a.getDynamicRouters();0===n.length&&(n=X.a.routers,d.a.setDynamicRouters(n)),y.dispatch("setDynamicRouters",X.a.routers),s.a.addRoutes(C(n)),e(u()({},t,{replace:!0}))},C=function e(t){return t.filter(function(t){if(t.component){var n=t.component;t.component=x(n)}return t.children&&t.children.length&&(t.children=e(t.children)),!0})},x=function(e){return function(){return n("MWF8")("./"+e)}},W=n("zL8q"),P=n.n(W),j=(n("tvR6"),n("5W1q"),n("XLwt")),G=n.n(j),F=(n("ZHXk"),n("oGZU")),K=n.n(F),H=(n("0OYy"),n("L/EB"),n("urW8")),M=n.n(H),Q=n("TXmL"),q=n("wUZ8"),z=n.n(q),J=u()({message:{settings:{TITLE:"settings",OPEN_VIEWS_BAR_TEXT:"open views-bar",VIEWS_BAR_SYTLE_TEXT:"views-bar style",VIEWS_BAR_SYTLE_TAB_TEXT:"Tab",VIEWS_BAR_SYTLE_TAG_TEXT:"Tag",KEEP_VIEWS_AFTER_REFRESH_TEXT:"Keep views after refreshing",COLLAPSE_MENU_BAR_TEXT:"collapse menu bar",UNIQUE_OPENED_TEXT:"unique opened",OPEN_BREAD_CRUMB_TEXT:"open bread crumb"},navBar:{MESSAGE_TEXT:"message",NOTE_TEXT:"note",SHARE_TEXT:"share",FULL_SCREEN_TEXT:"fullscreen",CANCEL_FULL_SCREEN_TEXT:"cancel",SETTINGS_TEXT:"settings",BASIC_INFO_TEXT:"information",ABOUT_TEXT:"about",LOGOUT_TEXT:"logout"}}},z.a),Z=n("Vi3T"),$=n.n(Z),ee={en:J,"zh-CN":u()({message:{settings:{TITLE:"系统设置",OPEN_VIEWS_BAR_TEXT:"开启视图页签",VIEWS_BAR_SYTLE_TEXT:"视图页签样式",VIEWS_BAR_SYTLE_TAB_TEXT:"选项卡",VIEWS_BAR_SYTLE_TAG_TEXT:"标签",KEEP_VIEWS_AFTER_REFRESH_TEXT:"刷新保留其他视图",COLLAPSE_MENU_BAR_TEXT:"收缩菜单栏",UNIQUE_OPENED_TEXT:"保持一个子菜单展开",OPEN_BREAD_CRUMB_TEXT:"开启面包屑"},navBar:{MESSAGE_TEXT:"消息",NOTE_TEXT:"便签",SHARE_TEXT:"分享",FULL_SCREEN_TEXT:"全屏",CANCEL_FULL_SCREEN_TEXT:"取消全屏",SETTINGS_TEXT:"系统设置",BASIC_INFO_TEXT:"基本信息",ABOUT_TEXT:"关于我们",LOGOUT_TEXT:"退出登录"}}},$.a)};i.default.use(Q.a);var te=new Q.a({locale:localStorage.lang||"zh-CN",messages:ee});M.a.i18n(function(e,t){return te.t(e,t)});var ne=te,ie=n("wvfG"),oe=n.n(ie);i.default.use(oe.a),i.default.config.productionTip=!1,i.default.use(P.a),i.default.use(G.a),i.default.use(K.a),new i.default({el:"#app",router:s.a,store:y,i18n:ne,components:{App:r},template:"<App/>"})},SQ6o:function(e,t,n){"use strict";var i=n("mvHQ"),o=n.n(i),a=n("2uFj"),r={getToken:function(){return sessionStorage.getItem(a.a.TOKEN_KEY)},setToken:function(e){return sessionStorage.setItem(a.a.TOKEN_KEY,e)},delToken:function(){return sessionStorage.setItem(a.a.TOKEN_KEY,null)},getRouters:function(){var e=sessionStorage.get(a.a.ROUTER_KEY);return JSON.parse(e||"[]")},setRouters:function(e){return sessionStorage.set(a.a.ROUTER_KEY,o()(e))},getDynamicRouters:function(){var e=sessionStorage.getItem(a.a.DYNAMIC_ROUTER_KEY);return JSON.parse(e||"[]")},setDynamicRouters:function(e){return sessionStorage.setItem(a.a.DYNAMIC_ROUTER_KEY,o()(e))},delRouters:function(){return sessionStorage.setItem(a.a.ROUTER_KEY,null)}};t.a=r},UVIz:function(e,t){},YaEn:function(e,t,n){"use strict";var i=n("7+uW"),o=n("/ocq");i.default.use(o.a),t.a=new o.a({routes:[{path:"/login",name:"login",component:function(){return n.e(1).then(n.bind(null,"Quw4"))}}]})},pd7E:function(e,t,n){"use strict";t.a={userName:"admin",password:"admin",roles:[],routers:[{path:"/",name:"Home",enName:"Home",component:"home",redirect:"index",children:[{id:1,path:"index",name:"首页",enName:"Home",icon:"el-icon-s-home",parentId:0,fixed:!0,component:"index",meta:{fixed:!0}}]},{id:5,path:"/code-tools",name:"编码工具",enName:"codeTools",icon:"fa fa-cogs",parentId:0,component:"home",children:[{id:501,path:"base64",name:"Base64加密解密",enName:"Base64Tool",icon:"fa fa-table",parentId:5,component:"code-tools/base64"},{id:502,path:"md5",name:"md5加密",enName:"md5Tool",icon:"fa fa-table",parentId:5,component:"code-tools/md5"}]},{id:9,path:"/editor",name:"编辑器",enName:"Editor",icon:"fa fa-pencil-square",parentId:0,component:"home",children:[{id:901,path:"code",name:"代码编辑器",enName:"Code",icon:"fa fa-code",parentId:9,component:"editor/code"},{id:902,path:"markdown",name:"markdown",enName:"markdown",icon:"dd markdown",parentId:9,component:"editor/markdown"},{id:903,path:"jsoneditor",name:"json编辑器",enName:"jsonEditor",icon:"fa fa-code",parentId:9,component:"editor/jsoneditor"},{id:904,path:"xmleditor",name:"xml编辑器",enName:"xmlEditor",icon:"fa fa-code",parentId:9,component:"editor/xmleditor"},{id:905,path:"crontab",name:"Cron编辑器",enName:"CronTab",icon:"fa fa-code",parentId:9,component:"editor/crontab"}]},{id:16,path:"/settings",name:"Settings",enName:"Settings",icon:"fa fa-cog",parentId:0,component:"home",type:"click",children:[{id:17,path:"settings",name:"系统设置",enName:"Settings",icon:"fa fa-cog",parentId:16,type:"click"}]},{id:20,path:"/error",name:"错误页面",enName:"Error Page",icon:"fa fa-bug",parentId:0,component:"home",children:[{id:21,path:"401",name:"401 页面",enName:"401 Page",icon:"fa fa-table",parentId:20,component:"error/401"},{id:22,path:"404",name:"404 页面",enName:"404 Page",icon:"fa fa-wpforms",parentId:20,component:"error/404"},{id:23,path:"500",name:"500 页面",enName:"500 Page",icon:"fa fa-wpforms",parentId:20,component:"error/500"}]},{id:30,path:"https://www.xwintop.com",name:"链接",enName:"Link",icon:"fa fa-link",type:"external",parentId:0,children:[{id:31,path:"https://www.xwintop.com",name:"外部链接",enName:"External Link",icon:"fa fa-external-link-square",parentId:30,type:"external"}]}]}},tvR6:function(e,t){}},[0]);