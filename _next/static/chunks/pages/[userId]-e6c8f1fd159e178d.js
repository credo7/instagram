(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[681],{6714:function(e,A,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[userId]",function(){return t(362)}])},5896:function(e,A,t){"use strict";t.r(A);var r=t(5893),n=t(7294),s=t(332),i=t.n(s);A.default=function(e){var A=e.posts,t=(0,n.useMemo)((function(){return(0,r.jsx)("div",{className:"flex flex-wrap",children:A.map((function(e,A){return(0,r.jsx)("div",{className:i().square,children:(0,r.jsx)("img",{className:"absolute w-full object-contain top-0",src:e.imageURL,alt:"post"})},A)}))})}),[A]);return(0,r.jsx)(r.Fragment,{children:t})}},362:function(e,A,t){"use strict";t.r(A),t.d(A,{__N_SSG:function(){return v}});var r=t(4051),n=t.n(r),s=t(5893),i=t(5321),o=t(7294),c=t(9980),u=t(6357),a=t(9583),l=t(3750),p=t(1163),m=t(9815),x=t(5896),f=t(5050);function d(e,A,t,r,n,s,i){try{var o=e[s](i),c=o.value}catch(u){return void t(u)}o.done?A(c):Promise.resolve(c).then(r,n)}function h(e){return function(){var A=this,t=arguments;return new Promise((function(r,n){var s=e.apply(A,t);function i(e){d(s,r,n,i,o,"next",e)}function o(e){d(s,r,n,i,o,"throw",e)}i(void 0)}))}}var v=!0;A.default=function(e){var A=(0,p.useRouter)(),t=(0,m.a)().currentUser,r=(0,o.useState)(!1),d=r[0],v=r[1];(0,o.useEffect)((function(){t||A.push("/auth/signin")}),[t]);var j=t.uid&&t.uid==e.user.uid;(0,o.useEffect)((function(){var A=function(){var A=h(n().mark((function A(){var r,s,o;return n().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return s=(0,i.hJ)(u.db,"users"),A.next=4,(0,i.PL)((0,i.IO)(s,(0,i.ar)("uid","==",t.uid),(0,i.ar)("followings","array-contains",e.user.uid)));case 4:o=A.sent,(null===(r=null===o||void 0===o?void 0:o.docs[0])||void 0===r?void 0:r.exists())&&v(!0);case 6:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}();A()}),[]);var w=function(){var A=h(n().mark((function A(){var r;return n().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:r=(0,i.JU)(u.db,"users",t.uid),(0,i.r7)(r,{followings:(0,i.vr)(e.user.uid)}),v(!0);case 3:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),E=function(){var A=h(n().mark((function A(){var r;return n().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:r=(0,i.JU)(u.db,"users",t.uid),(0,i.r7)(r,{followings:(0,i.Ab)(e.user.uid)}),v(!1);case 3:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}();return(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsxs)("div",{className:"w-full h-screen flex flex-col items-center",children:[(0,s.jsx)(c.Z,{}),(0,s.jsxs)("div",{className:" max-w-[975px] sm:px-[20px] pt-[32px]",children:[(0,s.jsxs)("div",{className:"flex flex-col mb-[20px] sm:mb-0 justify-center items-center sm:flex-row px-[16px] sm:px-0",children:[(0,s.jsx)("div",{className:"min-w-[150px] md:min-w-[292px] sm:mr-[32px]",children:(0,s.jsx)("img",{className:"mx-auto w-[120px] h-[120px] md:w-[200px] md:h-[200px] p-[5px] object-cover rounded-[32px] border-[3px] border-red-500",src:e.user.photoURL||"data:image/jpeg;base64,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"})}),(0,s.jsxs)("section",{className:"flex flex-col space-y-4 sm:space-y-6 justify-center",children:[(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row space-x-4 justify-start items-center",children:[(0,s.jsx)("h2",{className:" text-3xl font-light mb-2 sm:mb-0",children:e.user.username}),j?(0,s.jsx)("button",{className:"py-[5px] px-[9px] bg-white border-[1px] rounded-[3px] text-sm font-medium",children:"Edit profile"}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"flex flex-row space-x-2",children:[(0,s.jsx)("button",{className:"py-[5px] px-[9px] bg-white border-[1px] rounded-[3px] text-sm font-medium",children:"Message"}),d?(0,s.jsx)("button",{onClick:E,className:"py-[5px] px-[16px] bg-white border-[1px] rounded-[3px] text-sm",children:(0,s.jsx)(a.TZR,{})}):(0,s.jsx)("button",{onClick:w,className:"py-[5px] px-[16px] bg-white border-[1px] rounded-[3px] text-sm font-medium",children:"Follow"})]}),(0,s.jsx)(l.evw,{className:"hidden sm:block w-6 h-6"})]})]}),(0,s.jsxs)("ul",{className:"hidden sm:flex flex-row space-x-4",children:[(0,s.jsxs)("li",{className:"",children:[(0,s.jsx)("span",{className:"font-medium",children:e.posts.length}),"\xa0 ",1==e.posts.length?"post":"posts"]}),(0,s.jsxs)("li",{className:"",children:[(0,s.jsx)("span",{className:"font-medium",children:e.followers.length}),"\xa0follower",1!=e.followers.length&&"s"]}),(0,s.jsxs)("li",{className:"",children:[(0,s.jsx)("span",{className:"font-medium",children:e.followings.length}),"\xa0following",1!=e.followings.length&&"s"]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:" font-medium",children:e.user.name||" "}),(0,s.jsx)("span",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores beatae iure praesentium corporis facere aliquam doloribus eaque delectus in perferendis impedit, magni sint molestias culpa eum consequatur temporibus cumque vero!"})]})]})]}),(0,s.jsx)("hr",{className:"m-8 mx-0"}),(0,s.jsx)(x.default,{posts:e.posts})]})]}),(0,s.jsx)(f.Z,{})]})}},332:function(e){e.exports={"square-container":"posts_square-container__e7115",square:"posts_square__wnFzn",content:"posts_content__xkVL6"}},1163:function(e,A,t){e.exports=t(880)},8357:function(e,A,t){"use strict";t.d(A,{w_:function(){return u}});var r=t(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(n),i=function(){return i=Object.assign||function(e){for(var A,t=1,r=arguments.length;t<r;t++)for(var n in A=arguments[t])Object.prototype.hasOwnProperty.call(A,n)&&(e[n]=A[n]);return e},i.apply(this,arguments)},o=function(e,A){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&A.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)A.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t};function c(e){return e&&e.map((function(e,A){return r.createElement(e.tag,i({key:A},e.attr),c(e.child))}))}function u(e){return function(A){return r.createElement(a,i({attr:i({},e.attr)},A),c(e.child))}}function a(e){var A=function(A){var t,n=e.attr,s=e.size,c=e.title,u=o(e,["attr","size","title"]),a=s||A.size||"1em";return A.className&&(t=A.className),e.className&&(t=(t?t+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},A.attr,n,u,{className:t,style:i(i({color:e.color||A.color},A.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==s?r.createElement(s.Consumer,null,(function(e){return A(e)})):A(n)}},9959:function(e,A,t){"use strict";t.d(A,{h:function(){return i}});for(var r,n=256,s=[];n--;)s[n]=(n+256).toString(16).substring(1);function i(e){var A=0,t=e||11;if(!r||n+t>512)for(r="",n=0;A<256;A++)r+=s[256*Math.random()|0];return r.substring(n,n+++t)}}},function(e){e.O(0,[13,874,445,617,556,158,480,774,888,179],(function(){return A=6714,e(e.s=A);var A}));var A=e.O();_N_E=A}]);