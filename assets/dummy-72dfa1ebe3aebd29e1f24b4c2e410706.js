"use strict";define("dummy/acceptance-tests/main",["exports","ember-cli-sri/acceptance-tests/main"],function(e,n){e["default"]=n["default"]}),define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,n,t,r,a){var o;n["default"].MODEL_FACTORY_INJECTIONS=!0,o=n["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:t["default"]}),r["default"](o,a["default"].modulePrefix),e["default"]=o}),define("dummy/application/controller",["exports","ember","dummy/utils/generate-data"],function(e,n,t){e["default"]=n["default"].Controller.extend({gridRows:t["default"](500,{name:"name",age:{name:"age",options:{type:"adult"}},salary:{name:"dollar",options:{max:2e5}},email:{name:"email",options:{domain:"example.com"}}},4359)})}),define("dummy/application/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.0-canary+182ab2d9",loc:{source:null,start:{line:8,column:4},end:{line:10,column:4}},moduleName:"dummy/application/template.hbs"},isEmpty:!1,arity:3,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("      [");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode(":");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("] ");e.appendChild(n,t);var t=e.createElement("strong"),r=e.createComment("");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=new Array(3);return r[0]=e.createMorphAt(n,1,1,t),r[1]=e.createMorphAt(n,3,3,t),r[2]=e.createMorphAt(e.childAt(n,[5]),0,0),r},statements:[["content","rowIndex",["loc",[null,[9,7],[9,19]]]],["content","column.key",["loc",[null,[9,20],[9,34]]]],["content","field",["loc",[null,[9,44],[9,53]]]]],locals:["field","rowIndex","column"],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.2.0-canary+182ab2d9",loc:{source:null,start:{line:4,column:2},end:{line:12,column:2}},moduleName:"dummy/application/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("    \n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=new Array(1);return r[0]=e.createMorphAt(n,1,1,t),r},statements:[["block","eg-body",[],[],0,null,["loc",[null,[8,4],[10,16]]]]],locals:[],templates:[e]}}(),n=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.0-canary+182ab2d9",loc:{source:null,start:{line:18,column:4},end:{line:20,column:4}},moduleName:"dummy/application/template.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("      ");e.appendChild(n,t);var t=e.createElement("span");e.setAttribute(t,"style","text-align: right;display: block;");var r=e.createComment("");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=new Array(1);return r[0]=e.createMorphAt(e.childAt(n,[1]),0,0),r},statements:[["content","column.header",["loc",[null,[19,54],[19,71]]]]],locals:["column"],templates:[]}}(),n=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.0-canary+182ab2d9",loc:{source:null,start:{line:21,column:4},end:{line:21,column:47}},moduleName:"dummy/application/template.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createComment("");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=new Array(1);return r[0]=e.createMorphAt(n,0,0,t),e.insertBoundary(n,0),e.insertBoundary(n,null),r},statements:[["content","column.header",["loc",[null,[21,30],[21,47]]]]],locals:["column"],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.2.0-canary+182ab2d9",loc:{source:null,start:{line:16,column:2},end:{line:23,column:2}},moduleName:"dummy/application/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("    \n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("    ");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n\n");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=new Array(2);return r[0]=e.createMorphAt(n,1,1,t),r[1]=e.createMorphAt(n,3,3,t),r},statements:[["block","eg-header",[],[],0,null,["loc",[null,[18,4],[20,18]]]],["block","eg-footer",[],[],1,null,["loc",[null,[21,4],[21,61]]]]],locals:[],templates:[e,n]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.2.0-canary+182ab2d9",loc:{source:null,start:{line:2,column:0},end:{line:26,column:0}},moduleName:"dummy/application/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n  ");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n  ");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=new Array(4);return r[0]=e.createMorphAt(n,1,1,t),r[1]=e.createMorphAt(n,3,3,t),r[2]=e.createMorphAt(n,5,5,t),r[3]=e.createMorphAt(n,7,7,t),r},statements:[["block","eg-column",[],["key","name","width",250,"header","Name","footer","Footer text","min-width",150,"max-width",300,"align","center"],0,null,["loc",[null,[4,2],[12,16]]]],["inline","eg-column",[],["key","age","width",50,"footer","Age Footer","resizable",!1,"align","center"],["loc",[null,[14,2],[14,85]]]],["block","eg-column",[],["key","salary","width",80,"header","Salary"],1,null,["loc",[null,[16,2],[23,16]]]],["inline","eg-column",[],["key","email","width",150,"header","Email","footer","Email Footer"],["loc",[null,[25,2],[25,74]]]]],locals:[],templates:[e,n]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.2.0-canary+182ab2d9",loc:{source:null,start:{line:1,column:0},end:{line:27,column:0}},moduleName:"dummy/application/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createElement("h2");e.setAttribute(t,"id","title");var r=e.createTextNode("Ember Grid");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createComment("");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=new Array(1);return r[0]=e.createMorphAt(n,2,2,t),e.insertBoundary(n,null),r},statements:[["block","ember-grid",[],["width",800,"height",200,"rowHeight",25,"data",["subexpr","@mut",[["get","gridRows",["loc",[null,[2,53],[2,61]]]]],[],[]],"showFooter",!0],0,null,["loc",[null,[2,0],[26,15]]]]],locals:[],templates:[e]}}())}),define("dummy/components/eg-body",["exports","ember-grid/components/eg-body/component"],function(e,n){e["default"]=n["default"]}),define("dummy/components/eg-column",["exports","ember-grid/components/eg-column/component"],function(e,n){e["default"]=n["default"]}),define("dummy/components/eg-footer",["exports","ember-grid/components/eg-footer/component"],function(e,n){e["default"]=n["default"]}),define("dummy/components/eg-header",["exports","ember-grid/components/eg-header/component"],function(e,n){e["default"]=n["default"]}),define("dummy/components/eg-render/eg-body-cell",["exports","ember-grid/components/eg-render/eg-body-cell/component"],function(e,n){e["default"]=n["default"]}),define("dummy/components/eg-render/eg-body-row/component",["exports","ember-grid/components/eg-render/eg-body-row/component"],function(e,n){e["default"]=n["default"]}),define("dummy/components/eg-render/eg-body",["exports","ember-grid/components/eg-render/eg-body/component"],function(e,n){e["default"]=n["default"]}),define("dummy/components/eg-render/eg-footer-cell",["exports","ember-grid/components/eg-render/eg-footer-cell/component"],function(e,n){e["default"]=n["default"]}),define("dummy/components/eg-render/eg-footer/component",["exports","ember-grid/components/eg-render/eg-footer/component"],function(e,n){e["default"]=n["default"]}),define("dummy/components/eg-render/eg-header-cell",["exports","ember-grid/components/eg-render/eg-header-cell/component"],function(e,n){e["default"]=n["default"]}),define("dummy/components/eg-render/eg-header-resize-handle/component",["exports","ember-grid/components/eg-render/eg-header-resize-handle/component"],function(e,n){e["default"]=n["default"]}),define("dummy/components/eg-render/eg-header",["exports","ember-grid/components/eg-render/eg-header/component"],function(e,n){e["default"]=n["default"]}),define("dummy/components/ember-collection",["exports","ember-collection/components/ember-collection"],function(e,n){e["default"]=n["default"]}),define("dummy/components/ember-grid",["exports","ember-grid/components/ember-grid/component"],function(e,n){e["default"]=n["default"]}),define("dummy/controllers/array",["exports","ember"],function(e,n){e["default"]=n["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,n){e["default"]=n["default"].Controller}),define("dummy/dom-util/util",["exports","ember-grid/dom-util/util"],function(e,n){e["default"]=n["default"]}),define("dummy/helpers/eg-add",["exports","ember-grid/helpers/eg-add"],function(e,n){e["default"]=n["default"],e.egAdd=n.egAdd}),define("dummy/helpers/eg-cell-data",["exports","ember-grid/helpers/eg-cell-data"],function(e,n){e["default"]=n["default"],e.egCellData=n.egCellData}),define("dummy/helpers/fixed-grid-layout",["exports","ember","ember-collection/layouts/grid"],function(e,n,t){e["default"]=n["default"].Helper.helper(function(e,n){return new t["default"](e[0],e[1])})}),define("dummy/helpers/mixed-grid-layout",["exports","ember","ember-collection/layouts/mixed-grid"],function(e,n,t){e["default"]=n["default"].Helper.helper(function(e,n){return new t["default"](e[0])})}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,n,t){function r(e,r){if(t["default"].exportApplicationGlobal!==!1){var a,o=t["default"].exportApplicationGlobal;a="string"==typeof o?o:n["default"].String.classify(t["default"].modulePrefix),window[a]||(window[a]=r,r.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("dummy/instance-initializers/app-version",["exports","dummy/config/environment","ember"],function(e,n,t){var r=t["default"].String.classify,a=!1;e["default"]={name:"App Version",initialize:function(e){if(!a){var o=r(e.toString());t["default"].libraries.register(o,n["default"].APP.version),a=!0}}}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,n,t){var r=n["default"].Router.extend({location:t["default"].locationType});r.map(function(){}),e["default"]=r}),define("dummy/utils/generate-data",["exports","ember"],function(e,n){function t(e,t,a){var o=null==a?r:new Chance(a);return n["default"].A(Array.apply(null,new Array(e)).map(function(){return _.object(Object.keys(t).map(function(e){var n,r=t[e];"string"==typeof r?n=void 0:(n=r.options,r=r.name);var a=o[r](n);return[e,a]}))}))}e["default"]=t;var r=new Chance(13345)}),define("dummy/config/environment",["ember"],function(e){var n="dummy";try{var t=n+"/config/environment",r=e["default"].$('meta[name="'+t+'"]').attr("content"),a=JSON.parse(unescape(r));return{"default":a}}catch(o){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-grid",version:"0.0.1+18876ac8"});