(this.webpackJsonpprofile=this.webpackJsonpprofile||[]).push([[0],{17:function(e,t,s){},18:function(e,t,s){},22:function(e,t,s){},24:function(e,t,s){"use strict";s.r(t);var r=s(2),n=s.n(r),o=s(5),i=s.n(o),a=(s(17),s(18),s(6)),l=s(9),c=s(10),u=s(4),p=s(12),m=s(11),h=(s(22),s(0)),d=0;var j=function(e){Object(p.a)(s,e);var t=Object(m.a)(s);function s(e){var r;Object(l.a)(this,s),(r=t.call(this,e)).onKeyDown=r.onKeyDown.bind(Object(u.a)(r));var n=[];return r.state={rowData:n,promptItemList:n.map((function(e){return r.createRowElement(e)})),customStyle:{}},r}return Object(c.a)(s,[{key:"onKeyDown",value:function(e){if("Enter"===e.key){if(null==e.target.value||""===e.target.value)return;if("clear"===e.target.value||"cls"===e.target.value)this.setState({rowData:[],promptItemList:[]});else{var t=this.getCorrespondingCommandOutput(e.target.value);null!=t&&this.updatePrompt(t)}e.preventDefault(),e.target.value=""}if("Tab"===e.key){if(null==e.target.value||""===e.target.value)return;e.preventDefault();var s=this.getClosestMatchingCommandName(e.target.value);null!=s&&(e.target.value=s)}}},{key:"getClosestMatchingCommandName",value:function(e){var t=e;if(null!=this.props.responseList.commandList&&this.props.responseList.commandList.length>=0){var s=this.props.responseList.commandList.find((function(t){return t.command.startsWith(e)}));null!=s&&(t=s.command)}return t}},{key:"getCorrespondingCommandOutput",value:function(e){var t={id:++d};if(null!=this.props.responseList.commandList&&this.props.responseList.commandList.length>=0){var s=this.props.responseList.commandList.find((function(t){return t.command===e}));if(null!=s)return Object.assign(t,{type:"generalResponse",data:s.response}),t}return this.props.responseList.hasOwnProperty("error")?Object.assign(t,{type:"errorResponse",data:this.props.responseList.error}):Object.assign(t,{type:"errorResponse",data:"Looks like your trying something which I cannot answer, try asking for help"}),t}},{key:"updatePrompt",value:function(e){var t=this.state.rowData;t.push(e);var s=this.state.promptItemList;s.push(this.createRowElement(e)),this.setState({rowData:t,promptItemList:s})}},{key:"componentDidMount",value:function(){var e=this,t=[];null!=this.props.responseList.disclaimer&&t.push({type:"disclaimer",data:this.props.responseList.disclaimer});var s={backgroundColor:"black",color:"green"};null!=this.props.responseList.defaultColor&&(s.color=this.props.responseList.defaultColor),this.setState({rowData:t,promptItemList:t.map((function(t){return e.createRowElement(t)})),customStyle:s}),this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"scrollToBottom",value:function(){null!=this.el&&this.el.scrollIntoView({behaviour:"smooth"})}},{key:"createRowElement",value:function(e){var t=this;return"generalResponse"===e.type||"errorResponse"===e.type?Object(h.jsxs)("div",{ref:function(e){t.el=e},className:"tr tr-general",children:[Object(h.jsxs)("div",{className:"terminalCursor",children:[" ",">>"," "]}),Object(h.jsx)("div",{children:e.data})]},e.id):"disclaimer"===e.type?Object(h.jsx)("div",{className:"tr tr-disclaimer",children:e.data},e.id):void 0}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"terminal",style:this.state.customStyle,children:[Object(h.jsx)("div",{className:"terminalOutputArea",style:this.state.customStyle,children:this.state.promptItemList}),Object(h.jsxs)("div",{className:"terminalInputArea",style:this.state.customStyle,children:[Object(h.jsxs)("div",{className:"terminalCursor",style:this.state.customStyle,children:[" ",">>"," "]}),Object(h.jsx)("input",{className:"terminalInputBox",onSubmit:this.onKeyDown,onKeyDown:this.onKeyDown,style:this.state.customStyle,autoFocus:!0})]})]})}}]),s}(n.a.Component),b={disclaimer:Object(h.jsxs)("div",{children:["Welcome to V-shell",Object(h.jsx)("div",{className:"subDisclaimer",children:Object(h.jsx)("i",{children:"type help to know more"})})]}),commandList:[{command:"ls",response:Object(h.jsxs)("div",{children:["about.sh",Object(h.jsx)("br",{}),"interests.sh",Object(h.jsx)("br",{}),"links.sh"]})},{command:"./about.sh",response:Object(h.jsxs)("diV",{children:[Object(h.jsx)("h1",{children:"Hi, I'm Venkat"}),Object(h.jsx)("h3",{children:"A full-stack engineer interested in everything CS"})]})},{command:"./interests.sh",response:Object(h.jsx)("h1",{children:"namaste"})},{command:"help",response:Object(h.jsxs)("div",{children:["Here are some of the commands to try out",Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("b",{children:"ls"})," - for list of available commands"]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("b",{children:"./about.sh"})," - run a script :-)"]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("b",{children:"help"})," - to get back here"]})]}),"There are few hidden easter eggs too! Do drop a star on github repo if you liked this page!"]})}],colorPallete:["green","blue","maroon","yellow","aqua","red"],defaultColor:"crimson",error:Object(h.jsx)("div",{children:"I'm not sure what info you've asked for. You can ask for help by typing help"})};var v=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(a.a,{children:Object(h.jsx)("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');"})}),Object(h.jsx)(j,{className:"terminal",responseList:b})]})},f=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,25)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,o=t.getLCP,i=t.getTTFB;s(e),r(e),n(e),o(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),f()}},[[24,1,2]]]);
//# sourceMappingURL=main.f049c4f9.chunk.js.map