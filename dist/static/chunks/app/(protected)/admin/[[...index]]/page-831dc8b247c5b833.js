(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8695],{35655:function(t,e,n){Promise.resolve().then(n.bind(n,72874))},61305:function(t,e,n){"use strict";n.d(e,{b:function(){return u}}),n(90529);var r=n(24214);let u=r.Z.create({baseURL:"https://vercel.live/link/p-anmani-server-btf0wlhjf-eriegin96.vercel.app?via=deployment-domains-list-commit",headers:{"Content-Type":"application/json"},withCredentials:!0}),i=async t=>{if(r.Z.isAxiosError(t))return Promise.reject(t)};u.interceptors.request.use(function(t){return t}),u.interceptors.response.use(t=>t.data,i)},72874:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var r=n(9268),u=n(58578),i=n(58187),c=n(78875),s=n(97476),l=n(70509),o=n(76234),E=n(84070),a=n(74904);function f(){let{data:t}=(0,u.qf)(),{data:e}=(0,c.iu)(),{data:n}=(0,s.Mz)(),{data:f}=(0,i.r8)();return(0,r.jsx)("div",{children:(0,r.jsxs)(l.Z,{gutter:[16,16],children:[(0,r.jsx)(o.Z,{span:8,children:(0,r.jsx)(E.Z,{children:(0,r.jsx)(a.default,{title:"Tổng đơn h\xe0ng",value:null==t?void 0:t.length})})}),(0,r.jsx)(o.Z,{span:8,children:(0,r.jsx)(E.Z,{children:(0,r.jsx)(a.default,{title:"Tổng sản phẩm",value:null==e?void 0:e.length})})}),(0,r.jsx)(o.Z,{span:8,children:(0,r.jsx)(E.Z,{children:(0,r.jsx)(a.default,{title:"Tổng voucher",value:null==n?void 0:n.length})})}),(0,r.jsx)(o.Z,{span:8,children:(0,r.jsx)(E.Z,{children:(0,r.jsx)(a.default,{title:"Tổng video Kh\xe1m ph\xe1",value:null==f?void 0:f.length})})})]})})}},90529:function(t,e,n){"use strict";n.d(e,{$h:function(){return i},QP:function(){return u},_n:function(){return r}});let r="https://dummyjson.com",u={MOCK:"",GET_ME:"auth/me",USER_CARTS:"carts/user",CARTS:"carts",EXPLORES:"videos",NOTIFICATIONS:"notifications",PRODUCTS:"products",VOUCHERS:"vouchers",SIGN_UP:"auth/register",SIGN_IN:"auth/login",REFRESH_TOKEN:"auth/refresh"},i={MOCK:"",GET_ME:"auth/me",USER_CARTS:"carts/user",CARTS:"carts",EXPLORES:"videos",NOTIFICATIONS:"notifications",PRODUCTS:"products",VOUCHERS:"vouchers",CREATE_CART:"create-carts",CREATE_EXPLORE:"create-videos",CREATE_NOTIFICATION:"create-notifications",CREATE_PRODUCT:"create-products",CREATE_VOUCHER:"create-vouchers",DELETE_CART:"delete-carts",DELETE_EXPLORE:"delete-videos",DELETE_NOTIFICATION:"delete-notifications",DELETE_PRODUCT:"delete-products",DELETE_VOUCHER:"delete-vouchers",SIGN_UP:"auth/register",SIGN_IN:"auth/login",REFRESH_TOKEN:"auth/refresh"}},58578:function(t,e,n){"use strict";n.d(e,{r0:function(){return R},KL:function(){return o},qf:function(){return r.q},rA:function(){return f}});var r=n(21191);n(7105);var u=n(61305),i=n(90529),c=n(85771),s=n(57797);let l=t=>u.b.get(t).then(t=>t),o=t=>(0,s.ZP)(t?(0,c.R)(i.QP.USER_CARTS,t.id):null,l);n(29442);var E=n(41496);let a=(t,e)=>{let{arg:n}=e;return u.b.patch(t,JSON.stringify(n)).then(t=>t)},f=()=>{let{data:t,trigger:e,isMutating:n,error:r}=(0,E.Z)(i.QP.USER_CARTS,a);return{trigger:e,isMutating:n,error:r}},h=(t,e)=>{let{arg:n}=e;return u.b.patch(i.QP.CARTS,n).then(t=>t)},R=()=>{let{data:t,trigger:e,isMutating:n,error:r}=(0,E.Z)(i.$h.DELETE_CART,h);return{trigger:e,isMutating:n,error:r}}},29442:function(t,e,n){"use strict";n.d(e,{m:function(){return s}});var r=n(61305),u=n(90529),i=n(41496);let c=(t,e)=>{let{arg:n}=e;return r.b.post(u.QP.CARTS,JSON.stringify(n)).then(t=>t)},s=()=>{let{data:t,trigger:e,isMutating:n,error:r}=(0,i.Z)(u.$h.CREATE_CART,c);return{trigger:e,isMutating:n,error:r}}},7105:function(t,e,n){"use strict";n.d(e,{L:function(){return l}});var r=n(61305),u=n(90529),i=n(85771),c=n(57797);let s=t=>r.b.get(t).then(t=>t),l=t=>(0,c.ZP)((0,i.R)(u.QP.CARTS,t),s)},21191:function(t,e,n){"use strict";n.d(e,{q:function(){return s}});var r=n(61305),u=n(90529),i=n(57797);let c=t=>r.b.get(t).then(t=>t),s=()=>(0,i.ZP)(u.QP.CARTS,c)},58187:function(t,e,n){"use strict";n.d(e,{lj:function(){return o},mb:function(){return R},jb:function(){return u.j},r8:function(){return r.r},$A:function(){return f}});var r=n(87209),u=n(21154),i=n(61305),c=n(90529),s=n(41496);let l=(t,e)=>{let{arg:n}=e;return i.b.post(c.QP.EXPLORES,JSON.stringify(n)).then(t=>t)},o=()=>{let{data:t,trigger:e,isMutating:n,error:r}=(0,s.Z)(c.$h.CREATE_EXPLORE,l);return{trigger:e,isMutating:n,error:r}};var E=n(85771);let a=(t,e)=>{let{arg:n}=e;return i.b.patch(t,JSON.stringify(n)).then(t=>t)},f=t=>{let{data:e,trigger:n,isMutating:r,error:u}=(0,s.Z)((0,E.R)(c.QP.EXPLORES,t),a);return{trigger:n,isMutating:r,error:u}},h=(t,e)=>{let{arg:n}=e;return i.b.delete((0,E.R)(c.QP.EXPLORES,n)).then(t=>t)},R=()=>{let{data:t,trigger:e,isMutating:n,error:r}=(0,s.Z)(c.$h.DELETE_EXPLORE,h);return{trigger:e,isMutating:n,error:r}}},21154:function(t,e,n){"use strict";n.d(e,{j:function(){return l}});var r=n(61305),u=n(90529),i=n(85771),c=n(57797);let s=t=>r.b.get(t).then(t=>t),l=t=>(0,c.ZP)((0,i.R)(u.QP.EXPLORES,t),s)},87209:function(t,e,n){"use strict";n.d(e,{r:function(){return s}});var r=n(61305),u=n(90529),i=n(57797);let c=t=>r.b.get(t).then(t=>t),s=()=>(0,i.ZP)(u.QP.EXPLORES,c)},78875:function(t,e,n){"use strict";n.d(e,{gl:function(){return o},HF:function(){return R},eA:function(){return u.e},iu:function(){return r.i},vO:function(){return f}});var r=n(8864),u=n(12130),i=n(61305),c=n(90529),s=n(41496);let l=(t,e)=>{let{arg:n}=e;return i.b.post(c.QP.PRODUCTS,JSON.stringify(n)).then(t=>t)},o=()=>{let{data:t,trigger:e,isMutating:n,error:r}=(0,s.Z)(c.$h.CREATE_PRODUCT,l);return{trigger:e,isMutating:n,error:r}};var E=n(85771);let a=(t,e)=>{let{arg:n}=e;return i.b.patch(t,JSON.stringify(n)).then(t=>t)},f=t=>{let{data:e,trigger:n,isMutating:r,error:u}=(0,s.Z)((0,E.R)(c.QP.PRODUCTS,t),a);return{trigger:n,isMutating:r,error:u}},h=(t,e)=>{let{arg:n}=e;return i.b.delete((0,E.R)(c.QP.PRODUCTS,n)).then(t=>t)},R=()=>{let{data:t,trigger:e,isMutating:n,error:r}=(0,s.Z)(c.$h.DELETE_PRODUCT,h);return{trigger:e,isMutating:n,error:r}}},12130:function(t,e,n){"use strict";n.d(e,{e:function(){return l}});var r=n(61305),u=n(90529),i=n(85771),c=n(57797);let s=t=>r.b.get(t).then(t=>t),l=t=>(0,c.ZP)(t?(0,i.R)(u.QP.PRODUCTS,t):null,s)},8864:function(t,e,n){"use strict";n.d(e,{i:function(){return s}});var r=n(61305),u=n(90529),i=n(57797);let c=t=>r.b.get(t).then(t=>t),s=()=>(0,i.ZP)(u.QP.PRODUCTS,c)},97476:function(t,e,n){"use strict";n.d(e,{ve:function(){return o},bg:function(){return R},GF:function(){return u.G},Mz:function(){return r.M},cB:function(){return f}});var r=n(68498),u=n(67247),i=n(61305),c=n(90529),s=n(41496);let l=(t,e)=>{let{arg:n}=e;return i.b.post(c.QP.VOUCHERS,JSON.stringify(n)).then(t=>t)},o=()=>{let{data:t,trigger:e,isMutating:n,error:r}=(0,s.Z)(c.$h.CREATE_VOUCHER,l);return{trigger:e,isMutating:n,error:r}};var E=n(85771);let a=(t,e)=>{let{arg:n}=e;return i.b.patch(t,JSON.stringify(n)).then(t=>t)},f=t=>{let{data:e,trigger:n,isMutating:r,error:u}=(0,s.Z)((0,E.R)(c.QP.VOUCHERS,t),a);return{trigger:n,isMutating:r,error:u}},h=(t,e)=>{let{arg:n}=e;return i.b.delete((0,E.R)(c.QP.VOUCHERS,n)).then(t=>t)},R=()=>{let{data:t,trigger:e,isMutating:n,error:r}=(0,s.Z)(c.$h.DELETE_VOUCHER,h);return{trigger:e,isMutating:n,error:r}}},67247:function(t,e,n){"use strict";n.d(e,{G:function(){return l}});var r=n(61305),u=n(90529),i=n(85771),c=n(57797);let s=t=>r.b.get(t).then(t=>t),l=t=>(0,c.ZP)((0,i.R)(u.QP.VOUCHERS,t),s)},68498:function(t,e,n){"use strict";n.d(e,{M:function(){return s}});var r=n(61305),u=n(90529),i=n(57797);let c=t=>r.b.get(t).then(t=>t),s=()=>(0,i.ZP)(u.QP.VOUCHERS,c)},85771:function(t,e,n){"use strict";n.d(e,{R:function(){return r}});let r=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.join("/")}}},function(t){t.O(0,[6695,8332,7269,6366,2913,622,4628,9253,5769,1744],function(){return t(t.s=35655)}),_N_E=t.O()}]);