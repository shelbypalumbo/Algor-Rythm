(this["webpackJsonpalgor-rythm"]=this["webpackJsonpalgor-rythm"]||[]).push([[0],{10:function(e,t,a){e.exports={chalkboard:"style_chalkboard__3khwf","card-body":"style_card-body__3DtQv",algorithm:"style_algorithm__3332j",title:"style_title__3h8eW",testcase:"style_testcase__497aG",margin:"style_margin__3swwT"}},11:function(e,t,a){e.exports={box:"style_box__3LUwK",inner:"style_inner__3NAL1",marquee:"style_marquee__I2omG"}},25:function(e,t,a){e.exports=a(40)},30:function(e,t,a){},36:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),s=a.n(l),o=a(11),c=a.n(o),i=function(){return r.a.createElement("div",{className:c.a.box},r.a.createElement("div",{className:c.a.inner},r.a.createElement("span",null,"Algor-Rythm")),r.a.createElement("div",{className:c.a.inner},r.a.createElement("span",null,"Algor-Rythm")))},m=a(18),u=a(19),h=a(24),d=a(23),f=(a(30),a(42)),v=a(43),E=a(44),p=a(45),g=a(46),y=a(10),b=a.n(y);var w=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{className:b.a.margin},r.a.createElement(v.a,null,r.a.createElement(E.a,null,r.a.createElement("h1",{className:b.a.title},e.title)),r.a.createElement(p.a,null,r.a.createElement("h3",{className:b.a.title},e.subtitle)),r.a.createElement(g.a,{className:b.a.chalkboard},r.a.createElement("p",{className:b.a.algorithm},e.algorithm),r.a.createElement("p",{className:b.a.testcase},r.a.createElement("i",{class:"fas fa-asterisk"}),r.a.createElement("br",null),e.testcase,r.a.createElement("br",null),r.a.createElement("i",{class:"fas fa-asterisk"}),r.a.createElement("br",null),e.children)))))},_=[{id:0,title:"Basic Arithmetic",subtitle:"Add, Subtract, Multiply, and Divide two numbers",algorithm:"\nlet result;\n\nconst add = (num1, num2) => {\n  return (result = num1 + num2);\n};\n\nconst subtract = (num1, num2) =>{\n  return (result = num1 - num2);\n};\n\nconst multiply = (num1, num2) => {\n  return (result = num1 * num2);\n};\n\nconst divide = (num1, num2) => {\n  return (result = num1 / num2);\n};",testcase:"\nIf you pass, num1 = 3 and num2 = 6 as arguments to each fuction, you will get:\n\n      add(3,6), result = 9;\n      subtract(3,6), result = -3;\n      multiply(3,6), result = 18;\n      divide(3,6), result = 0.5\n\n        This is basic arithmetic. You are simply returning the value of 'result', \n      which is the artithmetic equation. \n        "},{id:1,title:"Vowel Count",subtitle:"Find the number of vowels in a string",algorithm:'\nconst vowelCount = (str) => {\n  let vowels = ["a", "e", "i", "o", "u"];\n  let result = 0;\n\n  for (let i = 0; i < str.length; i++) {\n    var letter = str[i].toLowerCase();\n\n    if (vowels.indexOf(letter) !== -1) {\n      result += 1;\n    }\n  }\n\n  return result;\n};\n',testcase:'\nCheck each characters of the input string \'str\' against the items in the vowel array (the vowels). If the str character at index [i] does occur in the array, add +1 to the result, otherwise do nothing and return result.\n\nIf str="Mina", the for loop would iterate 4 times! Each iteration, setting the next character of the string to lowercase using the toLowerCase() method. If the character of the iteration matches any of the items in the vowel array, +1 to the result! \n\nIn this case, "Mina" has 2 vowels, so the value of result = 2.\n'}],N=a(20),k=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={Algorithms:_,value:"",copied:!1},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.Algorithms.map((function(t){return r.a.createElement("div",null,r.a.createElement(w,{key:t.id,title:t.title,subtitle:t.subtitle,algorithm:t.algorithm,testcase:t.testcase},r.a.createElement(N.CopyToClipboard,{text:t.algorithm,onCopy:function(){return e.setState({copied:!0})}},r.a.createElement("span",{className:"copyBtn"},"Copy this Algorithm"))))})))}}]),a}(n.Component),A=a(21),C=a(3),x=(a(36),function(){return r.a.createElement("div",{className:"topnav",id:"myTopnav"},r.a.createElement("a",{href:"/Algor-Rythm",className:"active"},"Home"),r.a.createElement("a",{href:"/AboutMe"},"About Me"),r.a.createElement("a",{href:"/Publications"},"Publications"),r.a.createElement("a",{href:"/Contact"},"Contact"),r.a.createElement("a",{href:"#/",className:"icon",onClick:function(){var e=document.getElementById("myTopnav");"topnav"===e.className?e.className+=" responsive":e.className="topnav"}},r.a.createElement("i",{className:"fa fa-bars"})))});var I=function(){return r.a.createElement(A.a,null,r.a.createElement(x,null),r.a.createElement(C.c,null,r.a.createElement(C.a,{exact:!0,path:"/Algor-Rythm",component:i}),r.a.createElement(C.a,{exact:!0,path:"/Publications",component:k})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.b0485911.chunk.js.map