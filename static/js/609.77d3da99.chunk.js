"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[609],{4609:function(e,n,t){t.r(n),t.d(n,{default:function(){return X}});var r=t(605),a=t(9603),i=t(4720),s=t(1758),d=t(4942),l=t(4165),o=t(5861),m=t(1413),c=t(9439),u=t(2791),p=t(8691),h={name:"",email:"",message:""};function x(e){var n={};return e.name||(n.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="Email address is invalid"):n.email="Email address is required",e.message||(n.message="Message is required"),n}var Z,g,v,f,j,b,y,C,w,S,P,k,A=t(5224),z=t(168),E=t(1191),O=(0,E.ZP)("p")(Z||(Z=(0,z.Z)(["\n  margin-top: 1.5rem;\n"]))),Y=(0,E.ZP)("div")(g||(g=(0,z.Z)(["\n  position: relative;\n  max-width: 700px;\n"]))),_=(0,E.ZP)("div")(v||(v=(0,z.Z)(["\n  border-radius: 3rem;\n  max-width: 400px;\n"]))),M=t(184),q=(0,i.Z)()((function(e){var n=e.title,t=e.content,r=e.t;return(0,M.jsxs)(Y,{children:[(0,M.jsx)("h6",{children:r(n)}),(0,M.jsx)(_,{children:(0,M.jsx)(O,{children:r(t)})})]})})),F=(0,E.ZP)("div")(f||(f=(0,z.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n"]))),L=(0,E.ZP)("input")(j||(j=(0,z.Z)(["\n  font-size: 0.875rem;\n"]))),T=(0,E.ZP)("div")(b||(b=(0,z.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n  margin-bottom: -0.625rem;\n"]))),G=(0,E.ZP)("textarea")(y||(y=(0,z.Z)(["\n  resize: none;\n  font-size: 0.875rem;\n  height: 185px;\n"]))),N=(0,E.ZP)("label")(C||(C=(0,z.Z)(["\n  display: block;\n  padding-bottom: 10px;\n  text-transform: capitalize;\n"]))),Q=(0,i.Z)()((function(e){var n=e.name,t=e.placeholder,r=e.onChange,a=e.t;return(0,M.jsxs)(F,{children:[(0,M.jsx)(N,{htmlFor:n,children:a(n)}),(0,M.jsx)(L,{placeholder:a(t),name:n,id:n,onChange:r})]})})),R=(0,i.Z)()((function(e){var n=e.name,t=e.placeholder,r=e.onChange,a=e.t;return(0,M.jsxs)(T,{children:[(0,M.jsx)(N,{htmlFor:n,children:a(n)}),(0,M.jsx)(G,{placeholder:a(t),id:n,name:n,onChange:r})]})})),D=(0,E.ZP)("div")(w||(w=(0,z.Z)(["\n  padding: 5rem 0;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 3rem 0;\n  }\n"]))),H=(0,E.ZP)("form")(S||(S=(0,z.Z)(["\n  width: 100%;\n  max-width: 520px;\n\n  @media only screen and (max-width: 1045px) {\n    max-width: 100%;\n    margin-top: 2rem;\n  }\n"]))),I=(0,E.ZP)("span")(P||(P=(0,z.Z)(["\n  display: block;\n  font-weight: 600;\n  color: rgb(145, 193, 31);\n  height: 0.775rem;\n  padding: 0 0.675rem;\n"]))),U=(0,E.ZP)("div")(k||(k=(0,z.Z)(["\n  text-align: end;\n  position: relative;\n\n  @media only screen and (max-width: 414px) {\n    padding-top: 0.75rem;\n  }\n"]))),X=(0,i.Z)()((function(e){var n=e.title,t=e.content,i=e.id,Z=e.t,g=function(e){var n=(0,u.useState)({values:(0,m.Z)({},h),errors:(0,m.Z)({},h)}),t=(0,c.Z)(n,2),r=t[0],a=t[1],i=function(){var n=(0,o.Z)((0,l.Z)().mark((function n(t){var i,s,d,o,c;return(0,l.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.preventDefault(),i=r.values,s=e(i),a((function(e){return(0,m.Z)((0,m.Z)({},e),{},{errors:s})})),Object.values(s).every((function(e){return""===e}))&&(d={"entry.438172514":i.name,"entry.1205585586":i.email,"entry.1076294773":i.message},(o=document.createElement("iframe")).style.display="none",o.name="hidden_iframe",document.body.appendChild(o),o.onload=function(){p.Z.success({message:"Success",description:"Your message has been sent!"}),a({values:(0,m.Z)({},h),errors:(0,m.Z)({},h)}),document.body.removeChild(o)},(c=document.createElement("form")).setAttribute("method","POST"),c.setAttribute("action","https://docs.google.com/forms/d/e/1FAIpQLSdCzgzEQ53XSHStsn_1tbpsaYALTZczuG9e7kgUL8AS07GTRg/formResponse"),c.setAttribute("target","hidden_iframe"),c.style.display="none",Object.keys(d).forEach((function(e){var n=document.createElement("input");n.setAttribute("type","hidden"),n.setAttribute("name",e),n.setAttribute("value",d[e]),c.appendChild(n)})),document.body.appendChild(c),c.submit(),document.body.removeChild(c));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return{handleChange:function(e){e.persist();var n=e.target,t=n.name,r=n.value;a((function(e){return(0,m.Z)((0,m.Z)({},e),{},{values:(0,m.Z)((0,m.Z)({},e.values),{},(0,d.Z)({},t,r)),errors:(0,m.Z)((0,m.Z)({},e.errors),{},(0,d.Z)({},t,""))})}))},handleSubmit:i,values:r.values,errors:r.errors}}(x),v=g.values,f=g.errors,j=g.handleChange,b=g.handleSubmit,y=function(e){var n=e.type,t=f[n];return(0,M.jsx)(I,{children:t})};return(0,M.jsx)(D,{id:i,children:(0,M.jsxs)(r.Z,{justify:"space-between",align:"middle",children:[(0,M.jsx)(a.Z,{lg:12,md:11,sm:24,xs:24,children:(0,M.jsx)(s.Mi,{direction:"left",triggerOnce:!0,children:(0,M.jsx)(q,{title:n,content:t})})}),(0,M.jsx)(a.Z,{lg:12,md:12,sm:24,xs:24,children:(0,M.jsx)(s.Mi,{direction:"right",triggerOnce:!0,children:(0,M.jsxs)(H,{autoComplete:"off",onSubmit:b,children:[(0,M.jsxs)(a.Z,{span:24,children:[(0,M.jsx)(Q,{type:"text",name:"name",placeholder:"Your Name",value:v.name||"",onChange:j}),(0,M.jsx)(y,{type:"name"})]}),(0,M.jsxs)(a.Z,{span:24,children:[(0,M.jsx)(Q,{type:"text",name:"email",placeholder:"Your Email",value:v.email||"",onChange:j}),(0,M.jsx)(y,{type:"email"})]}),(0,M.jsxs)(a.Z,{span:24,children:[(0,M.jsx)(R,{placeholder:"Your Message",value:v.message||"",name:"message",onChange:j}),(0,M.jsx)(y,{type:"message"})]}),(0,M.jsx)(U,{children:(0,M.jsx)(A.z,{name:"submit",children:Z("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=609.77d3da99.chunk.js.map