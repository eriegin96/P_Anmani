(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5386],{87138:function(e,n,t){Promise.resolve().then(t.bind(t,40178))},11145:function(e,n,t){"use strict";t.d(n,{A:function(){return r}});let r={rules:[{required:!0,message:"Trường n\xe0y kh\xf4ng được để trống"}]}},40178:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var r=t(9268),i=t(83206),l=t(50946),u=t(56008),o=t(86006),a=t(52264),s=t(70509),c=t(76234),h=t(53235),f=t(81145),d=t(3508),x=t(11145),m=t(99073),g=t(48438);function I(){let e=i.Z.useFormInstance(),n=i.Z.useWatch("targetType",e);return(0,r.jsxs)(s.Z,{gutter:20,children:[(0,r.jsx)(c.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"avatar",label:"Ảnh avatar",...x.A,children:(0,r.jsx)(h.default,{placeholder:g.uX})})}),(0,r.jsx)(c.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"title",label:"Ti\xeau đề th\xf4ng b\xe1o",...x.A,children:(0,r.jsx)(h.default,{placeholder:"Cập nhật th\xf4ng tin từ chủ đầu tư"})})}),(0,r.jsx)(c.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"type",label:"Loại th\xf4ng b\xe1o",...x.A,children:(0,r.jsxs)(f.ZP.Group,{children:[(0,r.jsx)(f.ZP,{value:m.tx.UPDATE,children:"Tiến độ thanh to\xe1n"}),(0,r.jsx)(f.ZP,{value:m.tx.INFO,children:"Khuyến m\xe3i từ nh\xe0 đầu tư"})]})})}),(0,r.jsxs)(c.Z,{span:12,children:[(0,r.jsx)(i.Z.Item,{name:"targetType",label:"Đối tượng nhận th\xf4ng b\xe1o",...x.A,children:(0,r.jsxs)(f.ZP.Group,{children:[(0,r.jsx)(f.ZP,{value:m.bq.ALL,children:"Tất cả"}),(0,r.jsx)(f.ZP,{value:m.bq.INDIVIDUAL,children:"Lựa chọn kh\xe1ch"})]})}),n===m.bq.INDIVIDUAL&&(0,r.jsx)(i.Z.Item,{name:"target",label:"T\xean người d\xf9ng",...x.A,children:(0,r.jsx)(d.Z,{mode:"multiple",placeholder:"Vui l\xf2ng chọn người d\xf9ng nhận th\xf4ng b\xe1o",allowClear:!0,onChange:e=>{console.log("status ".concat(e))},options:a.Lh.map(e=>{let{id:n,name:t}=e;return{label:t,value:n}})})})]}),(0,r.jsx)(c.Z,{span:24,children:(0,r.jsx)(i.Z.Item,{name:"content",label:"Nội dung th\xf4ng b\xe1o",...x.A,children:(0,r.jsx)(h.default.TextArea,{autoSize:{minRows:3}})})})]})}var T=t(47990),p=t.n(T),_=t(88484);function j(e){let{isEditing:n=!1}=e,[t]=i.Z.useForm(),s=(0,u.useRouter)(),{id:c}=(0,u.useParams)(),{data:h}=(0,_.$v)(c),{trigger:f,isMutating:d}=(0,_.r4)(),{trigger:x,isMutating:g}=(0,_.dc)(c);return(0,o.useEffect)(()=>{let e=h&&a.d5.find(e=>e.id===c);t.setFieldsValue({...e,targetType:(null==e?void 0:e.target.length)?"individual":"all"}),console.log(e)},[h,c,t]),(0,r.jsxs)(i.Z,{layout:"vertical",requiredMark:"optional",form:t,onFinish:e=>{let{targetType:t,...r}=e,i=t===m.bq.ALL?[]:e.target;console.log({...r,target:i}),n?x({...r,target:i}):f({...r,target:i})},className:p().form,children:[(0,r.jsxs)("h3",{className:p().formTitle,children:[c?"Sửa th\xf4ng tin":"Tạo"," Th\xf4ng b\xe1o ",!c&&"chung"]}),(0,r.jsx)("label",{children:"Th\xf4ng tin chung"}),(0,r.jsx)(I,{}),(0,r.jsxs)("div",{className:p().actionWrapper,children:[(0,r.jsx)(l.ZP,{danger:!0,onClick:()=>s.back(),children:"Hủy"}),(0,r.jsxs)(l.ZP,{type:"primary",htmlType:"submit",loading:n?g:d,children:[n?"Sửa":"Tạo"," Th\xf4ng b\xe1o ",!c&&"chung"]})]})]})}},48438:function(e,n,t){"use strict";t.d(n,{fX:function(){return r},jw:function(){return a},sj:function(){return l},uX:function(){return o},y2:function(){return i},zT:function(){return u}});let r=1e8,i=5e11,l=RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),u="DD/MM/YYYY",o="https://img.photo.com",a="nguyenvana@email.com"},88484:function(e,n,t){"use strict";t.d(n,{r4:function(){return f},dt:function(){return g},$v:function(){return r.$},_Y:function(){return s},dc:function(){return x}}),t(32277);var r=t(76949),i=t(61305),l=t(90529),u=t(85771),o=t(57797);let a=e=>i.b.get(e).then(e=>e),s=e=>(0,o.ZP)(e?(0,u.R)(l.QP.NOTIFICATIONS,e.id):null,a);var c=t(41496);let h=(e,n)=>{let{arg:t}=n;return i.b.post(l.QP.NOTIFICATIONS,JSON.stringify(t)).then(e=>e)},f=()=>{let{data:e,trigger:n,isMutating:t,error:r}=(0,c.Z)(l.$h.CREATE_NOTIFICATION,h);return{trigger:n,isMutating:t,error:r}},d=(e,n)=>{let{arg:t}=n;return i.b.patch(e,JSON.stringify(t)).then(e=>e)},x=e=>{let{data:n,trigger:t,isMutating:r,error:i}=(0,c.Z)((0,u.R)(l.QP.NOTIFICATIONS,e),d);return{trigger:t,isMutating:r,error:i}},m=(e,n)=>{let{arg:t}=n;return i.b.delete((0,u.R)(l.QP.NOTIFICATIONS,t)).then(e=>e)},g=()=>{let{data:e,trigger:n,isMutating:t,error:r}=(0,c.Z)(l.$h.DELETE_NOTIFICATION,m);return{trigger:n,isMutating:t,error:r}}},76949:function(e,n,t){"use strict";t.d(n,{$:function(){return a}});var r=t(61305),i=t(90529),l=t(85771),u=t(57797);let o=e=>r.b.get(e).then(e=>e),a=e=>(0,u.ZP)((0,l.R)(i.QP.NOTIFICATIONS,e),o)},32277:function(e,n,t){"use strict";t.d(n,{s:function(){return o}});var r=t(61305),i=t(90529),l=t(57797);let u=e=>r.b.get(e).then(e=>e),o=e=>(0,l.ZP)(e?i.QP.NOTIFICATIONS:null,u)},85771:function(e,n,t){"use strict";t.d(n,{R:function(){return r}});let r=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.join("/")}},47990:function(e){e.exports={form:"form_form___uL8A",formTitle:"form_formTitle__uNNDT",addListItemBtn:"form_addListItemBtn__4otIN",formListItem:"form_formListItem__ulczd",formListItemDiv:"form_formListItemDiv__yGsTN",actionWrapper:"form_actionWrapper__VjW65",overlayShow:"form_overlayShow__Kgy1e",overlayHide:"form_overlayHide__7ob_K"}}},function(e){e.O(0,[6695,8332,1032,3394,2894,946,7269,1512,6366,3508,1145,3206,1656,8868,9253,5769,1744],function(){return e(e.s=87138)}),_N_E=e.O()}]);