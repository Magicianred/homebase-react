shadow$provide.module$js_gen$counter_example=function(global,require,module,exports){Object.defineProperty(exports,"__esModule",{value:!0});exports.App=void 0;var _react=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(require("module$node_modules$react$index"));const {HomebaseProvider,useTransact,useEntity}=window.homebase.react,config={initialData:[{counter:{identity:"counter",count:0}}]};exports.App=()=>_react.default.createElement(HomebaseProvider,{config},_react.default.createElement(Counter,
null));const Counter=()=>{const [counter]=useEntity({identity:"counter"}),[transact]=useTransact();return _react.default.createElement("div",null,"Count: ",counter.get("count"),_react.default.createElement("div",null,_react.default.createElement("button",{onClick:()=>transact([{counter:{id:counter.get("id"),count:counter.get("count")+1}}])},"Increment")))}}
//# sourceMappingURL=module$js_gen$counter_example.js.map