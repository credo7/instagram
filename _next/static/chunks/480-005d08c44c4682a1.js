"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[480],{701:function(e,t,r){r.d(t,{Z:function(){return s},e:function(){return a}});var n=r(2804),a=(0,n.cn)({key:"modalState",default:!1}),s=(0,n.cn)({key:"storyViewState",default:!1})},9980:function(e,t,r){var n=r(4051),a=r.n(n),s=r(5893),l=r(7516),o=r(8193),i=r(6084),c=r(3750),u=r(2804),d=r(701),f=r(9815),p=r(9583),x=r(7294),m=r(1153),h=r(6357),v=r(3854),b=r(1163),y=r(5321);function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function w(e,t,r,n,a,s,l){try{var o=e[s](l),i=o.value}catch(c){return void r(c)}o.done?t(i):Promise.resolve(i).then(n,a)}function j(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function l(e){w(s,n,a,l,o,"next",e)}function o(e){w(s,n,a,l,o,"throw",e)}l(void 0)}))}}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,s=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);l=!0);}catch(i){o=!0,a=i}finally{try{l||null==r.return||r.return()}finally{if(o)throw a}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.Z=function(){var e=N((0,u.FV)(d.e),2),t=(e[0],e[1]),r=(0,f.a)().currentUser,n=(0,x.useState)(!1),g=n[0],w=n[1],k=(0,x.useRef)(),C=(0,x.useState)(null),S=C[0],U=C[1],A=(0,x.useState)(!1),R=A[0],L=A[1],I=(0,b.useRouter)(),E=(0,x.useState)([]),F=E[0],O=E[1],_=(0,x.useRef)(),P=function(){var e=j(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!R){e.next=2;break}return e.abrupt("return");case 2:return L(!0),(n=(0,m.iH)(h.tO,"".concat(r.uid,"/profile.png"))).bucket.replace("appspot.com","firebaseapp.com"),e.next=7,(0,m.sf)(n,S,"data_url").then(function(){var e=j(a().mark((function e(t){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Jt)(n);case 2:s=e.sent,(0,v.ck)(r,{image:s});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)}));case 7:t(!1),L(!1),U(null);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){I.push("/")},T=function(){var e=j(a().mark((function e(t){var r,n,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.replace(/.$/,(function(e){return String.fromCharCode(e.charCodeAt(0)+1)})),e.next=3,(0,y.PL)((0,y.IO)((0,y.hJ)(h.db,"users"),(0,y.ar)("username",">=",t),(0,y.ar)("username","<",r)));case 3:return n=e.sent,s=[],e.next=7,null===n||void 0===n?void 0:n.docs.forEach((function(e){var t;s.push(null===(t=null===e||void 0===e?void 0:e.data())||void 0===t?void 0:t.username)}));case 7:O(s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"w-full min-h-[60px] border-none flex justify-center items-center",children:(0,s.jsx)("div",{className:"w-full lg:w-[1024px] md:w-[768px] sm:w-[640px] sm:rounded-[32px] sm:rounded-t-none backdrop-blur-3xl bg-[rgba(255,255,255,0.9)] shadow-sm fixed z-50",children:(0,s.jsxs)("div",{className:"min-h-[60px] flex flex-row px-4 justify-between items-center py-[10px] max-w-[970px] lg:mx-auto",children:[(0,s.jsx)("div",{className:"relative inline-grid flex-shrink-0",children:(0,s.jsx)("img",{onClick:J,className:"h-[29px] w-auto relative top-1 cursor-pointer",src:"instTextLogo.svg"})}),(0,s.jsxs)("div",{className:"hidden sm:block sm:relative max-w-xs",children:[(0,s.jsx)("div",{className:"absolute inset-y-0 pl-3 flex items-center",children:(0,s.jsx)(l.Goc,{className:"w-5 h-5 text-gray-300"})}),(0,s.jsx)("input",{ref:_,onKeyUp:function(e){return T(e.currentTarget.value)},className:"block w-full pl-10 bg-gray-50 placeholder-gray-300 sm:text-sm border-none rounded-[32px] focus:ring-0",type:"text",placeholder:"Search"}),F.length>0?(0,s.jsx)("div",{className:"absolute top-[32px] w-full max-h-[300px] bg-gray-50 overflow-y-scroll rounded-sm shadow-lg",children:(0,s.jsx)("ul",{className:"px-4 py-2",children:F.map((function(e){return(0,s.jsx)("li",{className:"w-full h-full cursor-pointer",onClick:function(){return function(e){_.current.value="",O([]),I.push("/"+e)}(e)},children:e})}))})}):(0,s.jsx)(s.Fragment,{})]}),(0,s.jsxs)("div",{className:"flex flex-row items-center justify-end space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 relative",children:[(0,s.jsx)(o.V9Z,{onClick:J,className:"navbtn"}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(i.dVn,{className:"navbtn rotate-45 relative bottom-1 left-1"}),(0,s.jsx)("div",{className:"hidden md:flex absolute -top-1.5 left-[16px] text-xs w-4 h-4 bg-red-500 rounded-full items-center justify-center animate-pulse text-white",children:"3"})]}),(0,s.jsx)(c.X4Q,{onClick:function(){return t(!0)},className:"navbtn w-6 h-6"}),(0,s.jsx)(o.lo,{className:"navbtn w-8 h-8"}),(0,s.jsxs)("div",{className:"cursor-pointer",onClick:function(){return w(!g)},children:[" ",r.photoURL?(0,s.jsx)("img",{className:"h-9 w-9 rounded-full object-cover",src:r.photoURL}):(0,s.jsx)(p.wzp,{className:"h-7 w-7"})]}),g?(0,s.jsxs)("div",{className:"absolute top-[76px] right-0 bg-white border-[1px] border-gray-200 rounded-sm flex flex-col items-center justify-center min-h-[280px] min-w-[210px]",children:[r.photoURL?(0,s.jsx)("img",{onClick:function(){return k.current.click()},className:"h-28 w-28 object-cover rounded-full cursor-pointer mt-[12px]",src:r.photoURL}):(0,s.jsx)(p.wzp,{onClick:function(){return k.current.click()},className:"h-28 w-28 cursor-pointer"}),(0,s.jsx)("input",{ref:k,type:"file",className:"absolute",hidden:!0,onChange:function(e){var t=new FileReader;e.target.files[0]&&t.readAsDataURL(e.target.files[0]),t.onload=function(e){var t,r;(null===(t=e.target)||void 0===t?void 0:t.result)&&U(null===(r=e.target)||void 0===r?void 0:r.result)}}}),S?(0,s.jsx)("button",{className:"mt-5 mb-1 bg-blue-400 h-[28px] w-[112px] text-white text-lg rounded-sm font-light",onClick:P,children:R?"Loading...":"Upload"}):(0,s.jsx)("button",{className:"text-sm text-gray-400 mt-5 mb-1 h-[28px] w-[112px]",onClick:function(){return k.current.click()},children:"Click to change"})]}):(0,s.jsx)(s.Fragment,{})]})]})})})})}},5050:function(e,t,r){var n=r(4051),a=r.n(n),s=r(5893),l=r(7294),o=r(2804),i=r(701),c=r(5155),u=r(8193),d=r(9959),f=r(5321),p=r(6357),x=r(1153),m=r(9815);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e,t,r,n,a,s,l){try{var o=e[s](l),i=o.value}catch(c){return void r(c)}o.done?t(i):Promise.resolve(i).then(n,a)}function b(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function l(e){v(s,n,a,l,o,"next",e)}function o(e){v(s,n,a,l,o,"throw",e)}l(void 0)}))}}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,s=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);l=!0);}catch(i){o=!0,a=i}finally{try{l||null==r.return||r.return()}finally{if(o)throw a}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.Z=function(){var e=y((0,o.FV)(i.e),2),t=e[0],r=e[1],n=(0,l.useRef)(),h=(0,l.useRef)(),v=(0,l.useState)(null),g=v[0],w=v[1],j=(0,l.useState)(!1),N=j[0],k=j[1],C=(0,m.a)().currentUser,S=function(){var e=b(a().mark((function e(t){var n,s,l,o,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!N){e.next=4;break}return e.abrupt("return");case 4:return k(!0),e.next=7,(0,f.PL)((0,f.IO)((0,f.hJ)(p.db,"users"),(0,f.ar)("uid","==",C.uid)));case 7:return s=e.sent,e.next=10,null===(n=null===s||void 0===s?void 0:s.docs[0])||void 0===n?void 0:n.data().username;case 10:return l=e.sent,e.next=13,(0,f.ET)((0,f.hJ)(p.db,"posts"),{uid:(0,d.h)(),user_uid:C.uid,username:l,caption:h.current.value,profileImg:C.photoURL||"",timeStamp:(0,f.Bt)()});case 13:return o=e.sent,(i=(0,x.iH)(p.tO,"posts/".concat(o.id,"/image"))).bucket.replace("appspot.com","firebaseapp.com"),e.next=18,(0,x.sf)(i,g,"data_url").then(function(){var e=b(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.Jt)(i);case 2:return r=e.sent,e.next=5,(0,f.r7)((0,f.JU)(p.db,"posts",o.id),{imageURL:r});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 18:r(!1),k(!1),w(null);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){t&&(document.body.style.overflow="hidden"),!t&&(document.body.style.overflow="unset")}),[t]),(0,s.jsx)(s.Fragment,{children:t&&(0,s.jsx)("div",{className:" w-full h-screen fixed bg-[#030303c7] top-0 z-50 scrollbar-hide",children:(0,s.jsx)("div",{className:"w-full h-screen flex items-center justify-center",children:(0,s.jsxs)("div",{className:"flex flex-col w-[50%] h-[80%] min-h-[400px] bg-white border-[1px] border-gray-300 rounded-lg min-w-[250px] relative",children:[(0,s.jsx)("div",{className:"min-h-[50px] flex h-14 justify-center items-center w-full border-b-[1px]",children:(0,s.jsx)("p",{children:"Create new post"})}),(0,s.jsxs)("div",{className:"flex flex-col h-full justify-center items-center pb-6",children:[(0,s.jsx)("div",{className:"flex justify-center items-center h-[60%] w-full min-h-[80px] py-4",children:g?(0,s.jsx)("img",{className:"max-h-full max-w-full h-full w-auto",onClick:function(){return w(null)},src:g,alt:"uploaded_img"}):(0,s.jsx)(u.IEK,{onClick:function(){return n.current.click()},className:"w-[50%] h-[80%] text-gray-300"})}),(0,s.jsx)("p",{className:"pb-6 text-xl",children:"Drag photos and videos here"}),(0,s.jsxs)("div",{className:"flex flex-col space-y-4 mb-8",children:[(0,s.jsx)("button",{onClick:function(){return n.current.click()},className:" bg-gray-300 p-2 px-4 rounded-lg text-gray-800",children:"Select from Computer"}),(0,s.jsx)("div",{className:"absolute",children:(0,s.jsx)("input",{ref:n,onChange:function(e){var t=new FileReader;e.target.files[0]&&t.readAsDataURL(e.target.files[0]),t.onload=function(e){var t,r;(null===(t=e.target)||void 0===t?void 0:t.result)&&w(null===(r=e.target)||void 0===r?void 0:r.result)}},type:"file",hidden:!0})}),(0,s.jsxs)("form",{className:"flex flex-col space-y-4",onSubmit:S,children:[(0,s.jsx)("input",{ref:h,placeholder:"Please enter a caption",className:" py-1 px-4 outline-none border-[1px] rounded-md text-gray-500 w-[192px] font-light"}),(0,s.jsx)("button",{hidden:!g,className:" bg-blue-400 p-2 px-4 rounded-lg text-white my-4",children:N?"Uploading...":"Upload post"})]})]})]}),(0,s.jsx)(c.v8y,{onClick:function(){r(!1)},className:"absolute h-6 w-6 text-gray-800 top-[14px] right-3"})]})})})})}}}]);