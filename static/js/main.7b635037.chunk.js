(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,a,t){e.exports=t(252)},109:function(e,a,t){},110:function(e,a,t){},252:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(17),r=t.n(l),i=(t(109),t(28)),s=t(29),c=t(33),d=t(30),u=t(34),m=t(16),p=t(99),g=t.n(p),h=(t(110),t(35)),f=(t(66),{data:[{x1:0,x2:0,x3:0,w0:.3,w1:.8,w2:.4,y:.31,t:0},{x1:0,x2:1,x3:0,w0:.3,w1:.8,w2:.4,y:.35,t:0},{x1:1,x2:0,x3:1,w0:.3,w1:.8,w2:.4,y:.55,t:0},{x1:1,x2:1,x3:1,w0:.3,w1:.8,w2:.4,y:.9,t:0}]}),b=t(45),F=t.n(b),w=t(47),E=t.n(w),y=t(6),C=t.n(y),x=t(46),v=t.n(x),N=t(20),O=t.n(N),S=t(37),k=t.n(S),j=t(31),L=t(18),W=t.n(L),I=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(c.a)(this,Object(d.a)(a).call(this))).handleChange=function(a){return function(t){var n=Object(h.a)(e.state.data.data),o=t.target.id;if("w0"===o||"w1"===o||"w2"===o)for(var l=0;l<n.length;l++)n[l][o]=parseFloat(t.target.value).toFixed(2);else n[a][o]=parseInt(t.target.value);e.setState({data:{data:n}}),e.fetchData()}},e.state={data:f,isLoading:!1},e.handleChange=e.handleChange.bind(Object(m.a)(Object(m.a)(e))),e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"fetchData",value:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://powerful-beyond-88239.herokuapp.com/v1/calculate";this.setState({isLoading:!0}),fetch(a,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state.data)}).then(function(e){return e.json()}).then(function(a){for(var t=Object(h.a)(e.state.data.data),n=0;n<t.length;n++)t[n].t=parseInt(a[n].t);e.setState({data:{data:t},isLoading:!1})}).catch(function(a){return e.setState({error:a,isLoading:!1})})}},{key:"componentWillMount",value:function(){console.log(this.state.data)}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this,a=this.state.data,t=this.props.classes;return console.log(this.state),o.a.createElement(k.a,{className:t.root,square:!0,elevation:0},o.a.createElement(F.a,{className:t.table},o.a.createElement(v.a,{className:t.table},o.a.createElement(O.a,null,o.a.createElement(C.a,{colSpan:5,className:t.font,align:"center",padding:"dense"},"Inputs"),o.a.createElement(C.a,{className:t.font,align:"center",padding:"dense"},"Output")),o.a.createElement(O.a,null,o.a.createElement(C.a,{className:t.font,align:"center",padding:"dense"},"X1"),o.a.createElement(C.a,{className:t.font,align:"center",padding:"dense"},"X2"),o.a.createElement(C.a,{className:t.font,align:"center",padding:"dense"},"W0"),o.a.createElement(C.a,{className:t.font,align:"center",padding:"dense"},"W1"),o.a.createElement(C.a,{className:t.font,align:"center",padding:"dense"},"W2"),o.a.createElement(C.a,{className:t.font,align:"center",padding:"dense"},"t"))),o.a.createElement(E.a,null,a.data.map(function(a,n){return o.a.createElement(O.a,{key:n},o.a.createElement(C.a,{id:"X1",className:t.fontEditable,align:"center",padding:"none"},o.a.createElement(W.a,{id:"x1",onChange:e.handleChange(n),inputProps:{type:"number",min:"0",max:"1"},className:t.InputOfX,defaultValue:a.x1})),o.a.createElement(C.a,{id:"X2",className:t.fontEditable,align:"center",padding:"none"},o.a.createElement(W.a,{id:"x2",onChange:e.handleChange(n),inputProps:{type:"number",min:"0",max:"1"},className:t.InputOfX,value:a.x2})),0===n?o.a.createElement(C.a,{id:"W0",className:t.fontEditable,rowSpan:4,align:"center",padding:"none"},o.a.createElement(W.a,{id:"w0",onChange:e.handleChange(),inputProps:{type:"number",min:"-1",max:"1",step:"0.05"},className:t.Input,defaultValue:a.w0})):null,0===n?o.a.createElement(C.a,{id:"W1",className:t.fontEditable,rowSpan:4,align:"center",padding:"none"},o.a.createElement(W.a,{id:"w1",onChange:e.handleChange(),inputProps:{type:"number",min:"-1",max:"1",step:"0.05"},className:t.Input,defaultValue:a.w1})):null,0===n?o.a.createElement(C.a,{id:"W2",className:t.fontEditable,rowSpan:4,align:"center",padding:"none"},o.a.createElement(W.a,{id:"w2",onChange:e.handleChange(),inputProps:{type:"number",min:"-1",max:"1",step:"0.05"},className:t.Input,defaultValue:a.w2})):null,o.a.createElement(C.a,{id:"t",className:t.font,align:"center",padding:"dense"},a.t))}))))}}]),a}(n.Component),X=Object(j.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto",backgroundColor:"transparent"},table:{minWidth:500,borderTop:"1px solid white",borderLeft:"1px solid white",borderRight:"1px solid white"},font:{color:"#FFFFFF",fontFamily:"Roboto",fontSize:"1.5rem",fontWeight:500,borderLeft:"1px solid white",align:"center",backgroundColor:"rgba(45, 25, 107, 0.6)"},fontEditable:{color:"#FFFFFF",fontFamily:"Roboto",fontSize:"1.5rem",fontWeight:500,borderLeft:"1px solid white",align:"center",backgroundColor:"transparent"},Input:{color:"#FFFFFF",fontFamily:"Roboto",fontSize:"1.5rem",fontWeight:500,backgroundColor:"transparent",marginLeft:30,width:65,padding:0},InputOfX:{color:"#FFFFFF",fontFamily:"Roboto",fontSize:"1.5rem",fontWeight:500,backgroundColor:"transparent",marginLeft:30,width:45,padding:0}}})(I),P=t(63),R=t(101),B=t(103),z=t.n(B),A=t(102),T=t.n(A),V=t(64),M=t.n(V),D=function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,paddingBottom:50,overflowX:"auto",backgroundColor:"transparent"},table:{minWidth:500,borderTop:"1px solid white",borderLeft:"1px solid white",borderRight:"1px solid white"},font:{color:"#FFFFFF",fontFamily:"Roboto",fontSize:"1.5rem",fontWeight:500,borderLeft:"1px solid white",align:"center",backgroundColor:"rgba(45, 25, 107, 0.6)"},fontEditable:{color:"#FFFFFF",fontFamily:"Roboto",fontSize:"1.5rem",fontWeight:500,borderLeft:"1px solid white",align:"center",backgroundColor:"transparent"},Input:{color:"#FFFFFF",fontFamily:"Roboto",fontSize:"1.5rem",fontWeight:500,backgroundColor:"transparent",marginLeft:30,width:65,padding:0},InputOfX:{color:"#FFFFFF",fontFamily:"Roboto",fontSize:"1.5rem",fontWeight:500,backgroundColor:"transparent",marginLeft:30,width:45,padding:0},output:{color:"#FFFFFF",fontFamily:"Roboto",fontSize:"1.5rem",fontWeight:500,borderLeft:"1px solid white",align:"center",width:50,backgroundColor:"rgba(45, 25, 107, 0.6)"},button:{boxShadow:"none",textTransform:"none",color:"#FFFFFF",fontFamily:"Roboto",fontSize:".75rem",fontWeight:500,margin:e.spacing.unit,marginBottom:0,backgroundColor:"rgba(45, 25, 107, 0.6)","&:hover":{backgroundColor:"rgba(45, 25, 107, 0.9)"},"&:active":{boxShadow:"none",backgroundColor:"rgba(45, 25, 107, 0.8)"}},container:{display:"flex",flexWrap:"wrap",margin:0},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:150},selected:{"&$selected":{color:"white"}},label:{"&$focusedLabel":{color:"white"},"&$erroredLabel":{color:"white"}},focusedLabel:{},erroredLabel:{},underline:{"&$error:after":{borderBottomColor:"white"},"&:after":{borderBottom:"1px solid white"}},error:{}}},$=Object(j.withStyles)(D)(function(e){var a=e.classes,t=Object(R.a)(e,["classes"]);return o.a.createElement(T.a,Object.assign({InputLabelProps:{classes:{root:a.label,focused:a.focusedLabel,error:a.erroredLabel}},InputProps:{classes:{root:a.underline,error:a.error}}},t))}),J=[{value:"Linear"},{value:"Sigmoid"},{value:"Hyperbolic tangent"}],q=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(c.a)(this,Object(d.a)(a).call(this))).handleChange=function(a){return function(t){var n=Object(h.a)(e.state.data.data),o=t.target.id;if("w0"===o||"w1"===o||"w2"===o)for(var l=0;l<n.length;l++)n[l][o]=parseFloat(t.target.value).toFixed(2),e.setState({data:{data:n}});else"layer"===a?e.setState(Object(P.a)({},a,t.target.value)):(n[a][o]=parseInt(t.target.value),e.setState({data:{data:n}}))}},e.state={data:f,isLoading:!1,layer:"Linear",xColumns:2},e.handleChange=e.handleChange.bind(Object(m.a)(Object(m.a)(e))),e.handleXChange=e.handleXChange.bind(Object(m.a)(Object(m.a)(e))),e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"fetchData",value:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"http://localhost:8080/v1/calculate";this.setState({isLoading:!0}),fetch(a,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state.data)}).then(function(e){return e.json()}).then(function(a){for(var t=Object(h.a)(e.state.data.data),n=0;n<t.length;n++)t[n].t=parseInt(a[n].t);e.setState({data:{data:t},isLoading:!1})}).catch(function(a){return e.setState({error:a,isLoading:!1})})}},{key:"componentWillMount",value:function(){console.log(this.state.data)}},{key:"componentDidMount",value:function(){}},{key:"handleXChange",value:function(e){this.setState(Object(P.a)({},e.target.id,parseInt(e.target.value)))}},{key:"render",value:function(){var e=this,a=this.state.data.data,t=this.props.classes,n=Array.apply(null,new Array(this.state.xColumns)).map(function(e,a){return a}),l=Array.apply(null,new Array(this.state.xColumns-1)).map(function(e,a){return a});return console.log(n),o.a.createElement("div",null,o.a.createElement("form",{className:t.container,noValidate:!0,autoComplete:"off"},o.a.createElement($,{inputProps:{type:"number",min:"2",max:"3",style:{color:"#FFFFFF",width:150}},value:this.state.xColumns,onChange:this.handleXChange,error:!0,label:"Xn columns",id:"xColumns"}),o.a.createElement($,{id:"layer",select:!0,inputProps:{style:{width:150}},error:!0,label:"Output layer",className:t.textField,value:this.state.layer,onChange:this.handleChange("layer"),SelectProps:{MenuProps:{className:t.menu,PaperProps:{style:{backgroundColor:"#4527a0"}}}}},J.map(function(e){return o.a.createElement(z.a,{classes:{selected:t.selected},key:e.value,value:e.value},o.a.createElement("div",{style:{color:"white"}},e.value))})),o.a.createElement($,{inputProps:{type:"number",min:"100",step:"100",style:{color:"#FFFFFF",width:150}},defaultValue:100,error:!0,label:"Iterations per click",id:"iterations"}),o.a.createElement(M.a,{variant:"contained",className:t.button},"Train"),o.a.createElement($,{inputProps:{type:"number",min:"0",step:"0.5",style:{color:"#FFFFFF",width:150}},defaultValue:.5,error:!0,label:"Learning rate",id:"learningRate"}),o.a.createElement(M.a,{variant:"contained",className:t.button},"Start")),o.a.createElement(k.a,{className:t.root,square:!0,elevation:0},o.a.createElement(F.a,{className:t.table},o.a.createElement(v.a,{className:t.table},o.a.createElement(O.a,null,o.a.createElement(C.a,{colSpan:3+this.state.xColumns,className:t.font,align:"center",padding:"dense"},"Inputs"),o.a.createElement(C.a,{colSpan:2,className:t.font,align:"center",padding:"dense"},"Output")),o.a.createElement(O.a,null,n.map(function(e){return o.a.createElement(C.a,{key:"headX"+e,className:t.font,align:"center",padding:"dense"},"X",e+1)}),o.a.createElement(C.a,{className:t.font,align:"center",padding:"dense"},"W0"),o.a.createElement(C.a,{className:t.font,align:"center",padding:"dense"},"W1"),o.a.createElement(C.a,{className:t.font,align:"center",padding:"dense"},"W2"),o.a.createElement(C.a,{className:t.font,align:"center",padding:"dense"},"y"),o.a.createElement(C.a,{className:t.font,align:"center",padding:"dense"},"t"))),o.a.createElement(E.a,null,a.map(function(a,n){return l.map(function(l){return o.a.createElement(O.a,{key:n+l},o.a.createElement(C.a,{id:"X1",className:t.fontEditable,align:"center",padding:"none"},o.a.createElement(W.a,{id:"x1",onChange:e.handleChange(n),inputProps:{type:"number",min:"0",max:"1"},className:t.InputOfX,defaultValue:a.x1})),o.a.createElement(C.a,{id:"X2",className:t.fontEditable,align:"center",padding:"none"},o.a.createElement(W.a,{id:"x2",onChange:e.handleChange(n),inputProps:{type:"number",min:"0",max:"1"},className:t.InputOfX,defaultValue:a.x2})),3===e.state.xColumns?o.a.createElement(C.a,{id:"X3",className:t.fontEditable,align:"center",padding:"none"},o.a.createElement(W.a,{id:"x3",onChange:e.handleChange(n),inputProps:{type:"number",min:"0",max:"1"},className:t.InputOfX,defaultValue:a.x3})):null,l>0?null:0===n?o.a.createElement(C.a,{id:"W0",className:t.font,rowSpan:Math.pow(2,e.state.xColumns),align:"center",padding:"none"},a.w0):null,l>0?null:0===n?o.a.createElement(C.a,{id:"W1",className:t.font,rowSpan:Math.pow(2,e.state.xColumns),align:"center",padding:"none"},a.w1):null,l>0?null:0===n?o.a.createElement(C.a,{id:"W2",className:t.font,rowSpan:Math.pow(2,e.state.xColumns),align:"center",padding:"none"},a.w2):null,o.a.createElement(C.a,{id:"y",className:t.output,align:"center",padding:"dense"},a.y),o.a.createElement(C.a,{id:"t",className:t.output,align:"center",padding:"dense"},a.t))})})))))}}]),a}(n.Component),H=Object(j.withStyles)(D)(q),G=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(c.a)(this,Object(d.a)(a).call(this))).state={class:"Button"},e.handleClick=e.handleClick.bind(Object(m.a)(Object(m.a)(e))),e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"handleClick",value:function(){"Button"===this.state.class?this.setState({class:"Button-clicked"}):this.setState({class:"Button"})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:g.a,alt:"",className:"App-logo"}),o.a.createElement("button",{onClick:this.handleClick,className:this.state.class},"Manual ",o.a.createElement("span",null,"Auto")),"Button"===this.state.class?o.a.createElement("div",null,o.a.createElement(X,null)):o.a.createElement(H,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},99:function(e,a,t){e.exports=t.p+"static/media/Logo.7fede0bd.png"}},[[104,1,2]]]);
//# sourceMappingURL=main.7b635037.chunk.js.map