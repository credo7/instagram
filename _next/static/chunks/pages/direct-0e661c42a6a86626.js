(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[842],{5151:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/direct",function(){return r(3588)}])},701:function(e,t,r){"use strict";r.d(t,{Z:function(){return a},e:function(){return s}});var n=r(2804),s=(0,n.cn)({key:"modalState",default:!1}),a=(0,n.cn)({key:"storyViewState",default:!1})},9980:function(e,t,r){"use strict";var n=r(4051),s=r.n(n),a=r(5893),l=r(7516),i=r(8193),c=r(6084),o=r(3750),u=r(2804),d=r(701),m=r(9815),x=r(9583),f=r(7294),p=r(1153),h=r(6357),v=r(3854),w=r(1163),g=r(5321);function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t,r,n,s,a,l){try{var i=e[a](l),c=i.value}catch(o){return void r(o)}i.done?t(c):Promise.resolve(c).then(n,s)}function b(e){return function(){var t=this,r=arguments;return new Promise((function(n,s){var a=e.apply(t,r);function l(e){y(a,n,s,l,i,"next",e)}function i(e){y(a,n,s,l,i,"throw",e)}l(void 0)}))}}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,s,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(c){i=!0,s=c}finally{try{l||null==r.return||r.return()}finally{if(i)throw s}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.Z=function(){var e=N((0,u.FV)(d.e),2),t=(e[0],e[1]),r=(0,m.a)().currentUser,n=(0,f.useState)(!1),j=n[0],y=n[1],k=(0,f.useRef)(),S=(0,f.useState)(null),C=S[0],O=S[1],M=(0,f.useState)(!1),E=M[0],L=M[1],_=(0,w.useRouter)(),P=(0,f.useState)([]),z=P[0],U=P[1],A=(0,f.useRef)(),R=function(){var e=b(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E){e.next=2;break}return e.abrupt("return");case 2:return L(!0),(n=(0,p.iH)(h.tO,"".concat(r.uid,"/profile.png"))).bucket.replace("appspot.com","firebaseapp.com"),e.next=7,(0,p.sf)(n,C,"data_url").then(function(){var e=b(s().mark((function e(t){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.Jt)(n);case 2:a=e.sent,(0,v.ck)(r,{image:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)}));case 7:t(!1),L(!1),O(null);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){_.push("/")},F=function(){var e=b(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.replace(/.$/,(function(e){return String.fromCharCode(e.charCodeAt(0)+1)})),e.next=3,(0,g.PL)((0,g.IO)((0,g.hJ)(h.db,"users"),(0,g.ar)("username",">=",t),(0,g.ar)("username","<",r)));case 3:return n=e.sent,a=[],e.next=7,null===n||void 0===n?void 0:n.docs.forEach((function(e){var t;a.push(null===(t=null===e||void 0===e?void 0:e.data())||void 0===t?void 0:t.username)}));case 7:U(a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"w-full min-h-[60px] border-none flex justify-center items-center",children:(0,a.jsx)("div",{className:"w-full lg:w-[1024px] md:w-[768px] sm:w-[640px] sm:rounded-[32px] sm:rounded-t-none backdrop-blur-3xl bg-[rgba(255,255,255,0.9)] shadow-sm fixed z-50",children:(0,a.jsxs)("div",{className:"min-h-[60px] flex flex-row px-4 justify-between items-center py-[10px] max-w-[970px] lg:mx-auto",children:[(0,a.jsx)("div",{className:"relative inline-grid flex-shrink-0",children:(0,a.jsx)("img",{onClick:I,className:"h-[29px] w-auto relative top-1 cursor-pointer",src:"instTextLogo.svg"})}),(0,a.jsxs)("div",{className:"hidden sm:block sm:relative max-w-xs",children:[(0,a.jsx)("div",{className:"absolute inset-y-0 pl-3 flex items-center",children:(0,a.jsx)(l.Goc,{className:"w-5 h-5 text-gray-300"})}),(0,a.jsx)("input",{ref:A,onKeyUp:function(e){return F(e.currentTarget.value)},className:"block w-full pl-10 bg-gray-50 placeholder-gray-300 sm:text-sm border-none rounded-[32px] focus:ring-0",type:"text",placeholder:"Search"}),z.length>0?(0,a.jsx)("div",{className:"absolute top-[32px] w-full max-h-[300px] bg-gray-50 overflow-y-scroll rounded-sm shadow-lg",children:(0,a.jsx)("ul",{className:"px-4 py-2",children:z.map((function(e){return(0,a.jsx)("li",{className:"w-full h-full cursor-pointer",onClick:function(){return function(e){A.current.value="",U([]),_.push("/"+e)}(e)},children:e})}))})}):(0,a.jsx)(a.Fragment,{})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center justify-end space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 relative",children:[(0,a.jsx)(i.V9Z,{onClick:I,className:"navbtn"}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(c.dVn,{className:"navbtn rotate-45 relative bottom-1 left-1"}),(0,a.jsx)("div",{className:"hidden md:flex absolute -top-1.5 left-[16px] text-xs w-4 h-4 bg-red-500 rounded-full items-center justify-center animate-pulse text-white",children:"3"})]}),(0,a.jsx)(o.X4Q,{onClick:function(){return t(!0)},className:"navbtn w-6 h-6"}),(0,a.jsx)(i.lo,{className:"navbtn w-8 h-8"}),(0,a.jsxs)("div",{className:"cursor-pointer",onClick:function(){return y(!j)},children:[" ",r.photoURL?(0,a.jsx)("img",{className:"h-9 w-9 rounded-full object-cover",src:r.photoURL}):(0,a.jsx)(x.wzp,{className:"h-7 w-7"})]}),j?(0,a.jsxs)("div",{className:"absolute top-[76px] right-0 bg-white border-[1px] border-gray-200 rounded-sm flex flex-col items-center justify-center min-h-[280px] min-w-[210px]",children:[r.photoURL?(0,a.jsx)("img",{onClick:function(){return k.current.click()},className:"h-28 w-28 object-cover rounded-full cursor-pointer mt-[12px]",src:r.photoURL}):(0,a.jsx)(x.wzp,{onClick:function(){return k.current.click()},className:"h-28 w-28 cursor-pointer"}),(0,a.jsx)("input",{ref:k,type:"file",className:"absolute",hidden:!0,onChange:function(e){var t=new FileReader;e.target.files[0]&&t.readAsDataURL(e.target.files[0]),t.onload=function(e){var t,r;(null===(t=e.target)||void 0===t?void 0:t.result)&&O(null===(r=e.target)||void 0===r?void 0:r.result)}}}),C?(0,a.jsx)("button",{className:"mt-5 mb-1 bg-blue-400 h-[28px] w-[112px] text-white text-lg rounded-sm font-light",onClick:R,children:E?"Loading...":"Upload"}):(0,a.jsx)("button",{className:"text-sm text-gray-400 mt-5 mb-1 h-[28px] w-[112px]",onClick:function(){return k.current.click()},children:"Click to change"})]}):(0,a.jsx)(a.Fragment,{})]})]})})})})}},6275:function(e,t,r){"use strict";r.r(t),r.d(t,{MineMessage:function(){return l},YourMessage:function(){return a},default:function(){return s}});var n=r(5893);function s(e){var t=e.isLast,r=e.text,s=e.timeStamp;return e.owner?(0,n.jsx)(l,{isLast:t,text:r,timeStamp:s}):(0,n.jsx)(a,{isLast:t,text:r,timeStamp:s})}function a(e){var t=e.isLast,r=e.text,s=e.timeStamp;return(0,n.jsxs)("div",{className:"flex flex-row space-x-3",children:[(0,n.jsx)("div",{className:"bg-[#eee] px-4 py-2 rounded-[24px] max-w-[80%] ml-4 relative ".concat(t&&"message_last_left"),children:(0,n.jsx)("span",{className:"",children:r})}),(0,n.jsx)("p",{className:"mt-auto text-right text-xs text-gray-500",children:s})]})}function l(e){var t=e.isLast,r=e.text,s=e.timeStamp;return(0,n.jsxs)("div",{className:"flex flex-row space-x-3 w-full justify-end pr-4",children:[(0,n.jsx)("p",{className:"mt-auto ml-3 text-right text-xs text-gray-500",children:s}),(0,n.jsx)("div",{className:"bg-[#2591ff] text-white mr-4 px-4 py-2 rounded-[24px] max-w-[80%] mt-2 relative ".concat(t&&"message_last_right"),children:(0,n.jsx)("span",{className:"",children:r})})]})}},9377:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(5893),s=r(3750),a=r(1649),l=r(6275);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}var o=[{text:"Hello my friend",timeStamp:"12:10",owner:!1},{text:"Hey! I'm glad to see you yu uio ui y ui op pi uy t r",timeStamp:"12:20",owner:!0},{text:"What about a walk?",timeStamp:"12:22",owner:!1},{text:"If u in, i'm ready",timeStamp:"12:23",owner:!1}];function u(e){var t=e.username;e.messages;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"min-h-[50px] md:hidden"}),(0,n.jsxs)("div",{className:"fixed md:relative z-10 md:rounded-tr-[32px] top-0 w-full flex flex-row h-[50px] items-center justify-between px-4 bg-white border-b-[1px] border-b-gray-100",children:[(0,n.jsxs)("div",{className:"flex flex-row space-x-3 items-center rounded-t-[32px]",children:[(0,n.jsx)(a.u1R,{className:"h-5 w-5"}),(0,n.jsx)("img",{className:"w-8 h-8 rounded-full",src:"https://fakeimg.pl/300/"}),(0,n.jsx)("p",{className:"",children:t})]}),(0,n.jsx)(s.evw,{className:"h-5 w-5"})]}),(0,n.jsx)("div",{className:"flex flex-col space-y-3 py-3 md:border-l-[1px] md:border-l-gray-100 h-full overflow-y-scroll",children:o.map((function(e,t){return(0,n.jsx)("div",{children:(0,n.jsx)(l.default,c({},e,{isLast:!(t<o.length-1)||!(e.owner==o[t+1].owner)}))},t)}))})]})}},8453:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(5893);function s(e){var t=e.username,r=e.lastMsg,s=e.timeStamp,a=e.unreadMsgCount;return(0,n.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,n.jsxs)("div",{className:"h-60px flex flex-row items-center px-5 space-x-4 my-2",children:[(0,n.jsx)("img",{className:"h-12 w-12 rounded-full",src:"https://fakeimg.pl/300/"}),(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("div",{className:"",children:t}),(0,n.jsx)("div",{className:"text-gray-500 text-sm",children:r})]})]}),(0,n.jsx)("div",{className:"pr-4",children:a>0?(0,n.jsx)("div",{className:"bg-red-500 w-[20px] h-[20px] flex justify-center items-center rounded-full",children:(0,n.jsx)("p",{className:"text-xs text-white",children:a})}):(0,n.jsx)("p",{className:"text-xs font-light text-gray-500",children:s})})]})}},4422:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),s=r(7294),a=r(7516),l=r(8453),i=[{username:"vitaly",lastMsg:"Let's go for a walk",timeStamp:"16:00",unreadMsgCount:2},{username:"bandrw",lastMsg:"Are u good man",timeStamp:"17:30",unreadMsgCount:0},{username:"evanguy",lastMsg:"Wow.. it's crazy!",timeStamp:"16:00",unreadMsgCount:7},{username:"clock",lastMsg:"I don't think so",timeStamp:"16:00",unreadMsgCount:0}];function c(){var e=(0,s.useState)(i),t=e[0],r=e[1],c=(0,s.useState)(0),o=c[0],u=c[1];(0,s.useEffect)((function(){var e=i.filter((function(e){return e.unreadMsgCount>0}));u(e.length)}),[i]);return(0,n.jsxs)("div",{className:"mx-auto min-w-screen flex flex-col rounded-[32px] py-3 pt-4",children:[(0,n.jsxs)("p",{className:"ml-5 font-medium text-2xl",children:["Messages",(0,n.jsxs)("span",{className:"ml-1 text-blue-500",children:["(",o,")"]})]}),(0,n.jsxs)("div",{className:"px-4 w-full mx-auto relative",children:[(0,n.jsx)("input",{placeholder:"username",onChange:function(e){return function(e){var t=i.filter((function(t){return t.username.toUpperCase().startsWith(e.currentTarget.value.toUpperCase())}));e.currentTarget.value?r(t):r(i)}(e)},className:" text-[16px] w-full border-[1px] border-gray-50 bg-gray-200 md:bg-gray-100 mx-auto py-[8px] pl-10 rounded-[32px] my-2 outline-none text-sm h-[42px]"}),(0,n.jsx)(a.Goc,{className:"absolute top-[22px] left-[35px] text-gray-400"})]}),(0,n.jsx)("div",{className:" overflow-y-scroll",children:t.map((function(e,r){return(0,n.jsxs)("div",{children:[(0,n.jsx)(l.default,{username:e.username,lastMsg:e.lastMsg,timeStamp:e.timeStamp,unreadMsgCount:e.unreadMsgCount}),r!=t.length-1?(0,n.jsx)("hr",{className:"w-[90%] relative left-[5%] border-t-gray-100"}):""]},r)}))})]})}},3588:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),s=r(7294),a=r(9980);var l=r(9377),i=r(4422);function c(){var e=function(){var e=(0,s.useState)({width:0,height:0}),t=e[0],r=e[1];return(0,s.useEffect)((function(){var e=function(){r({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}(),t=(0,s.useState)(!0),r=t[0];t[1];return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"max-h-[100vh] overflow-hidden w-full ",children:[e.width<550&&r?"":(0,n.jsx)(a.Z,{}),(0,n.jsx)("div",{className:"sm:px-8",children:(0,n.jsxs)("div",{className:"h-[calc(100vh-100px)] flex flex-row sm:mt-4 xl:w-[1240px] mx-auto sm:border-[1px] border-gray-100 sm:shadow-md rounded-[32px] mb-2",children:[e.width<800&&r?"":(0,n.jsx)("div",{className:"w-full md:w-[25%] min-w-[314px] md:bg-white md:rounded-l-[32px]",children:(0,n.jsx)(i.default,{})}),e.width>800||r?(0,n.jsx)("div",{className:"min-h-full w-full md:w-[75%]",children:(0,n.jsx)(l.default,{username:"Andrew",messages:[{text:"Hello guyes",timeStamp:"Lol",owner:!1}]})}):""]})})]})})}},1163:function(e,t,r){e.exports=r(880)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return o}});var n=r(7294),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(s),l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},l.apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,l({key:t},e.attr),c(e.child))}))}function o(e){return function(t){return n.createElement(u,l({attr:l({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var r,s=e.attr,a=e.size,c=e.title,o=i(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,o,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(s)}}},function(e){e.O(0,[13,874,445,617,556,866,774,888,179],(function(){return t=5151,e(e.s=t);var t}));var t=e.O();_N_E=t}]);