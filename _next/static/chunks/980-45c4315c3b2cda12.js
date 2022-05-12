"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[980],{701:function(e,t,n){n.d(t,{Z:function(){return s},e:function(){return a}});var r=n(2804),a=(0,r.cn)({key:"modalState",default:!1}),s=(0,r.cn)({key:"storyViewState",default:!1})},9980:function(e,t,n){var r=n(4051),a=n.n(r),s=n(5893),o=n(5321),c=n(1153),i=n(1163),l=n(7294),u=n(8193),d=n(7516),f=n(3750),m=n(9583),x=n(6084),p=n(2804),h=n(701),v=n(6357),g=n(1984),b=n(9815);function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t,n,r,a,s,o){try{var c=e[s](o),i=c.value}catch(l){return void n(l)}c.done?t(i):Promise.resolve(i).then(r,a)}function j(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function o(e){y(s,r,a,o,c,"next",e)}function c(e){y(s,r,a,o,c,"throw",e)}o(void 0)}))}}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,s=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);o=!0);}catch(i){c=!0,a=i}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.Z=function(){var e=N((0,p.FV)(h.e),2),t=(e[0],e[1]),n=(0,b.a)(),r=n.currentUser,w=n.logout,y=n.userSecondaryInfo,k=(0,l.useState)(!1),C=k[0],S=k[1],U=(0,l.useRef)(),A=(0,l.useState)(null),R=A[0],L=A[1],E=(0,l.useState)(!1),F=E[0],I=E[1],O=(0,i.useRouter)(),_=(0,l.useState)([]),J=_[0],V=_[1],z=(0,l.useRef)(),P=(0,l.useState)(""),T=P[0],Z=P[1];(0,l.useEffect)((function(){(null===y||void 0===y?void 0:y.photoURL)&&Z(null===y||void 0===y?void 0:y.photoURL)}),[y]);var B=function(){var e=j(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!F){e.next=2;break}return e.abrupt("return");case 2:return I(!0),Z(R),(n=(0,c.iH)(v.tO,"".concat(r.uid,"/profile.png"))).bucket.replace("appspot.com","firebaseapp.com"),e.next=8,(0,c.sf)(n,R,"data_url").then(j(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Jt)(n);case 2:t=e.sent,Z(t);case 4:case"end":return e.stop()}}),e)})))).catch((function(e){return console.log(e)}));case 8:(0,c.Jt)((0,c.iH)(v.tO,"".concat(r.uid,"/profile.png"))).then((function(e){var t=(0,o.JU)(v.db,"users/".concat(r.uid));(0,o.r7)(t,{photoURL:e})})),t(!1),I(!1),L(null);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){O.push("".concat("/my-feed","/"))},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t&&(z.current.value="",V([])),O.push("".concat("/my-feed","/").concat(e))},$=function(){var e=j(a().mark((function e(t){var n,r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.replace(/.$/,(function(e){return String.fromCharCode(e.charCodeAt(0)+1)})),e.next=3,(0,o.PL)((0,o.IO)((0,o.hJ)(v.db,"users"),(0,o.ar)("username",">=",t),(0,o.ar)("username","<",n)));case 3:return r=e.sent,s=[],e.next=7,null===r||void 0===r?void 0:r.docs.forEach((function(e){var t;s.push(null===(t=null===e||void 0===e?void 0:e.data())||void 0===t?void 0:t.username)}));case 7:V(s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"relative w-full min-h-[50px] sm:min-h-[60px] border-none flex justify-center items-center",children:(0,s.jsx)("div",{className:"w-full lg:w-[1024px] md:w-[768px] sm:w-[640px] sm:rounded-[32px] sm:rounded-t-none bg-[rgb(254,254,255)] sm:bg-white sm:shadow-sm fixed z-50",children:(0,s.jsxs)("div",{className:"min-h-[50px] sm:min-h-[60px] flex flex-row px-4 justify-between items-center sm:py-[10px] max-w-[970px] lg:mx-auto",children:[(0,s.jsx)("div",{className:"relative inline-grid flex-shrink-0",children:(0,s.jsx)("img",{onClick:H,className:"h-[29px] w-auto relative top-1 cursor-pointer",src:"".concat("/my-feed","/instTextLogo.svg")})}),(0,s.jsxs)("div",{className:"hidden sm:block sm:relative max-w-xs",children:[(0,s.jsx)("div",{className:"absolute inset-y-0 pl-3 flex items-center",children:(0,s.jsx)(d.Goc,{className:"w-5 h-5 text-gray-300"})}),(0,s.jsx)("input",{ref:z,onKeyUp:function(e){return $(e.currentTarget.value)},className:"block w-full pl-10 bg-gray-50 placeholder-gray-300 sm:text-sm border-none rounded-[32px] focus:ring-0",type:"text",placeholder:"Search"}),J.length>0?(0,s.jsx)("div",{className:"absolute top-[32px] w-full max-h-[300px] bg-gray-50 overflow-y-scroll rounded-[32px] shadow-lg",children:(0,s.jsx)("ul",{className:"px-4 py-2",children:J.map((function(e,t){return(0,s.jsx)("li",{className:"w-full h-full cursor-pointer font-light",onClick:function(){return M(e,!0)},children:e},t)}))})}):(0,s.jsx)(s.Fragment,{})]}),(0,s.jsxs)("div",{className:"flex flex-row items-center justify-end space-x-3 sm:space-x-3 md:space-x-4 lg:space-x-6 relative",children:[(0,s.jsx)(u.V9Z,{onClick:H,className:"hidden sm:block navbtn"}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(x.dVn,{onClick:g.B,className:"navbtn rotate-45 relative bottom-1 left-1"}),(0,s.jsx)("div",{className:"hidden md:flex absolute -top-1.5 left-[16px] text-xs w-4 h-4 bg-red-500 rounded-full items-center justify-center animate-pulse text-white",children:"3"})]}),(0,s.jsx)(f.X4Q,{onClick:function(){return t(!0)},className:"navbtn w-6 h-6"}),(0,s.jsx)(u.lo,{className:"hidden navbtn w-8 h-8"}),(0,s.jsxs)("div",{className:"cursor-pointer",onClick:function(){return S(!C)},children:[" ",T?(0,s.jsx)("img",{className:"h-9 w-9 rounded-full object-cover",src:T}):(0,s.jsx)(m.wzp,{className:"h-7 w-7"})]}),C?(0,s.jsxs)("div",{className:"absolute top-[76px] right-0 bg-[rgb(254,254,255)] border-[1px] border-gray-200 rounded-[32px] shadow-md flex flex-col items-center justify-center min-h-[280px] min-w-[210px]",children:[T||R?(0,s.jsx)("img",{onClick:function(){return U.current.click()},className:"h-28 w-28 object-cover rounded-full cursor-pointer mt-[12px]",src:R||T}):(0,s.jsx)(m.wzp,{onClick:function(){return U.current.click()},className:"h-28 w-28 cursor-pointer"}),(0,s.jsx)("input",{ref:U,type:"file",className:"absolute",hidden:!0,onChange:function(e){var t=new FileReader;e.target.files[0]&&t.readAsDataURL(e.target.files[0]),t.onload=function(e){var t,n;(null===(t=e.target)||void 0===t?void 0:t.result)&&L(null===(n=e.target)||void 0===n?void 0:n.result)}}}),R?(0,s.jsx)("button",{className:"mt-5 mb-1 bg-gray-800 h-[28px] w-[112px] text-white text-sm rounded-[32px] font-light",disabled:F,onClick:B,children:F?"Loading...":"Upload"}):(0,s.jsx)("button",{className:"text-sm mt-5 mb-1 w-[112px] bg-gray-800 text-white rounded-[32px] py-2 px-4",onClick:function(){return U.current.click()},children:"Click to change"}),(0,s.jsx)("button",{className:"text-sm text-gray-800 mt-2 font-medium",onClick:function(){return M(y.username)},children:"My profile"}),(0,s.jsx)("button",{onClick:w,className:"text-sm text-blue-500 mt-2 font-medium",children:"Sign out"})]}):(0,s.jsx)(s.Fragment,{})]})]})})})})}},1984:function(e,t,n){function r(){alert("\u0415\u0449\u0435 \u0447\u0443\u0442\u044c-\u0447\u0443\u0442\u044c \u0431\u044d\u043a\u0435\u043d\u0434\u0430.. \u0418 \u0431\u0443\u0434\u0435\u0442 \u0433\u043e\u0442\u043e\u0432\u043e :)")}n.d(t,{B:function(){return r}})}}]);