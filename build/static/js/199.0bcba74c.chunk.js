"use strict";(self.webpackChunkworkers=self.webpackChunkworkers||[]).push([[199],{199:(e,s,i)=>{i.r(s),i.d(s,{default:()=>m});var t=i(858),o=i(403),r=i(899),n=i(3),a=i(216),l=i(768),c=i(579);const d=r.Ik({UserName:r.Yj().required("Required field"),Password:r.Yj().required("Required field").min(3,"\u05e1\u05d9\u05e1\u05de\u05d0 \u05d7\u05d9\u05d9\u05d1\u05ea \u05dc\u05d4\u05db\u05d9\u05dc \u05dc\u05e4\u05d7\u05d5\u05ea 3 \u05ea\u05d5\u05d5\u05d9\u05dd")}).required();function m(){var e,s;const i=(0,a.Zp)(),r=(0,n.wA)(),{register:m,handleSubmit:u,formState:{errors:h}}=(0,t.mN)({resolver:(0,o.t)(d)});return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{id:"container",style:{display:"flex",justifyContent:"center",paddingTop:"50px"},children:(0,c.jsx)("div",{id:"form",className:"ui placeholder segment",children:(0,c.jsx)("form",{onSubmit:u((e=>{r((0,l.E8)(e,i))})),children:(0,c.jsx)("div",{className:"ui one column very relaxed stackable grid",children:(0,c.jsx)("div",{className:"column",children:(0,c.jsxs)("div",{className:"ui form",children:[(0,c.jsxs)("div",{className:"field",children:[(0,c.jsx)("label",{children:"\u05e9\u05dd \u05de\u05e9\u05ea\u05de\u05e9:"}),(0,c.jsxs)("div",{className:"ui right icon input",children:[(0,c.jsx)("i",{className:"user icon"}),(0,c.jsx)("input",{placeholder:"\u05d4\u05db\u05e0\u05e1 \u05e9\u05dd \u05de\u05e9\u05ea\u05de\u05e9",...m("UserName")})]}),h.UserName&&(0,c.jsx)("p",{className:"ui pointing red basic label",children:null===(e=h.UserName)||void 0===e?void 0:e.message})]}),(0,c.jsxs)("div",{className:"field",children:[(0,c.jsx)("label",{children:"\u05e1\u05d9\u05e1\u05de\u05d0:"}),(0,c.jsxs)("div",{className:"ui right icon input",children:[(0,c.jsx)("i",{className:"lock icon"}),(0,c.jsx)("input",{type:"password",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05e1\u05d9\u05e1\u05de\u05d0",...m("Password")})]}),h.Password&&(0,c.jsx)("p",{className:"ui pointing red basic label",children:null===(s=h.Password)||void 0===s?void 0:s.message})]}),(0,c.jsx)("button",{className:"ui submit button",style:{backgroundColor:"rgb(19 23 122) ",color:"white"},type:"submit",children:"Connection"})]})})})})})})})}},768:(e,s,i)=>{i.d(s,{E8:()=>l,je:()=>c});var t=i(154),o=i(64),r=i.n(o),n=i(93);const a="https://localhost:7079/api/Employee",l=(e,s)=>async i=>{try{const o=(await t.A.post("".concat(a,"/Login"),{Name:e.UserName,Password:e.Password})).data;i({type:n.dQ,user:o}),localStorage.setItem("user",JSON.stringify(o));const l=o.roles.some((e=>"Director"===e.role.name));localStorage.setItem("isDirector",l?"true":"false"),s("/"),r().fire({position:"top",title:"".concat(o.firstName," Hello to "),showConfirmButton:!1,timer:1500}),setTimeout((function(){window.location.reload()}),1300)}catch(o){console.log(o.message),r().fire({position:"top",title:"You are not registered in the system ".concat(o.message),showConfirmButton:!1,timer:1500})}},c=e=>s=>{r().fire({title:"Oops...",showCancelButton:!0,showDenyButton:!1,confirmButtonText:"go out",cancelButtonText:"cancel"}).then((i=>{i.isConfirmed&&(s({type:n.mn}),r().fire({title:"By By:)",showConfirmButton:!1,timer:800})),e("/HomePage")}))}}}]);
//# sourceMappingURL=199.0bcba74c.chunk.js.map