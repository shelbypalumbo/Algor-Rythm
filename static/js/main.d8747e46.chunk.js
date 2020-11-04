(this["webpackJsonpalgor-rythm"]=this["webpackJsonpalgor-rythm"]||[]).push([[0],{10:function(e,t,n){e.exports={chalkboard:"style_chalkboard__3khwf","card-body":"style_card-body__3DtQv",algorithm:"style_algorithm__3332j",title:"style_title__3h8eW",testcase:"style_testcase__497aG",margin:"style_margin__3swwT"}},12:function(e,t,n){e.exports={Contact:"style_Contact__WdzTh",ContactH1:"style_ContactH1__3Z93k",link:"style_link__27hFG"}},13:function(e,t,n){e.exports={box:"style_box__3LUwK",inner:"style_inner__3NAL1",marquee:"style_marquee__I2omG"}},26:function(e,t,n){e.exports=n(41)},31:function(e,t,n){},37:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(19),o=n.n(l),s=n(11),i=n(3),c=n(13),m=n.n(c),u=function(){return r.a.createElement("div",{className:m.a.box},r.a.createElement("div",{className:m.a.inner},r.a.createElement("span",null,"Algor-Rythm")),r.a.createElement("div",{className:m.a.inner},r.a.createElement("span",null,"Algor-Rythm")))},h=n(20),d=n(21),g=n(25),b=n(24),v=(n(31),n(43)),f=n(44),y=n(45),E=n(46),p=n(47),w=n(10),_=n.n(w);var N=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{className:_.a.margin},r.a.createElement(f.a,null,r.a.createElement(y.a,null,r.a.createElement("h1",{className:_.a.title},e.title)),r.a.createElement(E.a,null,r.a.createElement("h3",{className:_.a.title},e.subtitle)),r.a.createElement(p.a,{className:_.a.chalkboard},r.a.createElement("p",{className:_.a.algorithm},e.algorithm),r.a.createElement("p",{className:_.a.testcase},r.a.createElement("i",{class:"fas fa-asterisk"}),r.a.createElement("br",null),e.testcase,r.a.createElement("br",null),r.a.createElement("i",{class:"fas fa-asterisk"}),r.a.createElement("br",null),e.children)))))},k=[{id:0,title:"Basic Arithmetic",subtitle:"Add, Subtract, Multiply, and Divide two numbers",algorithm:"\nlet result;\n\nconst add = (num1, num2) => {\n  return (result = num1 + num2);\n};\n\nconst subtract = (num1, num2) =>{\n  return (result = num1 - num2);\n};\n\nconst multiply = (num1, num2) => {\n  return (result = num1 * num2);\n};\n\nconst divide = (num1, num2) => {\n  return (result = num1 / num2);\n};",testcase:"\nIf you pass, num1 = 3 and num2 = 6 as arguments to each fuction, you will get:\n\n      add(3,6), result = 9;\n      subtract(3,6), result = -3;\n      multiply(3,6), result = 18;\n      divide(3,6), result = 0.5\n\n        This is basic arithmetic. You are simply returning the value of 'result', \n      which is the artithmetic equation. \n        "},{id:1,title:"Vowel Count",subtitle:"Find the number of vowels in a string",algorithm:'\nconst vowelCount = (str) => {\n  let vowels = ["a", "e", "i", "o", "u"];\n  let result = 0;\n\n  for (let i = 0; i < str.length; i++) {\n    var letter = str[i].toLowerCase();\n\n    if (vowels.indexOf(letter) !== -1) {\n      result += 1;\n    }\n  }\n\n  return result;\n};\n',testcase:'\nCheck each characters of the input string \'str\' against the items in the vowel array (the vowels). If the str character at index [i] does occur in the array, add +1 to the result, otherwise do nothing and return result.\n\nIf str="Mina", the for loop would iterate 4 times! Each iteration, setting the next character of the string to lowercase using the toLowerCase() method. If the character of the iteration matches any of the items in the vowel array, +1 to the result! \n\nIn this case, "Mina" has 2 vowels, so the value of result = 2.\n'},{id:2,title:"Print Out Only Even Numbers",subtitle:"Log the even numbers from a given array of numbers.",algorithm:'\nconst numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];\n\nconst logEvenNums = numbers => {\n  for (let i = 0; i <= numbers.length; i++) {\n    if (numbers[i] % 2 == 0) {\n      let even = numbers[i];\n      console.log(even, "Even Numbers!!!");\n    }\n  }\n};\n\nlogEvenNums(numbers);\n',testcase:"In this function you are console logging only the value of the even number in the given array.\n    \n    This is done by iterating over an if statement that checks IF this array item has a remainder of 0, then log the number. \n    \n    The amount of for loop iterations are the length of the given numbers array and numbers[i] will be the value of each array item during each iteration.\n\n    The console will log 0,2,4,6,8,10,12,14,16,18\n"},{id:2,title:"Number Countdown",subtitle:"Reverse the order of a given array of numbers",algorithm:'\nconst nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];\n\nconst countDown = nums => {\n  let reversed = nums.reverse();\n  for (var i = 0; i <= reversed.length - 1; i++) {\n    console.log("nums", reversed[i]);\n  }\n};\n\ncountDown(nums);\n',testcase:"\n"}],C=n(22),x=function(e){Object(g.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={Algorithms:k,value:"",copied:!1},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.Algorithms.map((function(t){return r.a.createElement("div",null,r.a.createElement(N,{key:t.id,title:t.title,subtitle:t.subtitle,algorithm:t.algorithm,testcase:t.testcase},r.a.createElement("br",null),r.a.createElement(C.CopyToClipboard,{text:t.algorithm,onCopy:function(){return e.setState({copied:!0})}},r.a.createElement("span",{className:"copyBtn"},"Copy this Algorithm"))))})))}}]),n}(a.Component),A=n(12),I=n.n(A),L=function(){return r.a.createElement("div",{className:I.a.Contact},r.a.createElement("h1",{className:I.a.ContactH1},"Contact:"),r.a.createElement("p",null,"Feel free to contact me via my contact page on my main\xa0",r.a.createElement("a",{className:I.a.link,target:"_blank",href:"https://shelbypalumbo.github.io/Shelby-Pumbo-React-Portfolio/"},"website"),"!"),r.a.createElement("p",null,"Or connect with me on"," ",r.a.createElement("a",{className:I.a.link,target:"_blank",href:"https://www.linkedin.com/in/shelby-palumbo/"},"linkedIn"),"."))},O=(n(37),function(){return r.a.createElement("div",{className:"topnav",id:"topNav"},r.a.createElement(s.b,{to:"/Contact",className:"active"},"Contact"),r.a.createElement(s.b,{to:"/AlgoLibrary"},"Algorithm Library"),r.a.createElement("a",{href:"#/",className:"icon",onClick:function(){var e=document.getElementById("topNav");"topnav"===e.className?e.className+=" responsive":e.className="topnav"}},r.a.createElement("i",{className:"fa fa-bars"})),r.a.createElement(s.b,{to:"/Algor-Rythm"},"Home"))});var T=function(){return r.a.createElement(s.a,null,r.a.createElement(O,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/Algor-Rythm",component:u}),r.a.createElement(i.a,{exact:!0,path:"/AlgoLibrary",component:x}),r.a.createElement(i.a,{exact:!0,path:"/Contact",component:L})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.d8747e46.chunk.js.map