"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[607],{20:function(n,e,t){t.d(e,{UK:function(){return l},Wf:function(){return f},_V:function(){return d},yc:function(){return p}});var r,o,i,a,c,u=t(168),s=t(444),l=(s.ZP.div(r||(r=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n"]))),s.ZP.div(o||(o=(0,u.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n\n  > a {\n    text-decoration: none;\n  }\n"])))),d=s.ZP.h3(i||(i=(0,u.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: blue;\n  }\n"]))),p=s.ZP.ul(a||(a=(0,u.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),f=s.ZP.img(c||(c=(0,u.Z)(["\n  width: 100%;\n  height: 360px;\n  object-fit: cover;\n"])))},607:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,o,i,a,c=t(439),u=t(791),s=t(168),l=t(444),d=(l.ZP.div(r||(r=(0,s.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n"]))),l.ZP.form(o||(o=(0,s.Z)(["\n  > a {\n    text-decoration: none;\n  }\n"])))),p=l.ZP.input(i||(i=(0,s.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"]))),f=l.ZP.button(a||(a=(0,s.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"]))),h=t(126),g=t(87),m=t(689),x=t(20),v=t(184),b=function(n){var e=n.findedMovies,t=(0,m.TH)();return(0,v.jsxs)("ul",{children:[(0,v.jsx)("h2",{children:"Finded movies"}),e.map((function(n){return(0,v.jsx)("li",{children:(0,v.jsx)(g.rU,{to:"".concat(n.id),state:{from:t},children:(0,v.jsx)(x.UK,{children:(0,v.jsx)(x._V,{children:n.original_title})})})},n.id)}))]})},Z=function(){var n,e=(0,u.useState)((function(){return""})),t=(0,c.Z)(e,2),r=t[0],o=t[1],i=(0,u.useState)([]),a=(0,c.Z)(i,2),s=a[0],l=a[1],m=(0,g.lr)(),x=(0,c.Z)(m,2),Z=x[0],j=x[1],k=(0,u.useState)(null),_=(0,c.Z)(k,2),w=_[0],y=_[1],P="https://api.themoviedb.org/3",S="00f2cafab9ed8b61ede4a54c54838e2c",C=null!==(n=Z.get("search"))&&void 0!==n?n:"",E=function(){o("")};return w&&console.log(w),(0,u.useEffect)((function(){fetch("".concat(P,"/search/movie?api_key=").concat(S,"&query=").concat(C)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something has gone wrong!"))})).catch((function(n){return y({error:n})})).then((function(n){return 0!==n.results.length?l(n.results):alert("No movies found")})),o(C)}),[]),(0,v.jsx)("div",{children:(0,v.jsxs)(u.Suspense,{fallback:null,children:[(0,v.jsxs)(d,{onSubmit:function(n){var e=n.currentTarget;n.preventDefault(),""!==r&&(fetch("".concat(P,"/search/movie?api_key=").concat(S,"&query=").concat(r)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something has gone wrong!"))})).catch((function(n){return y({error:n})})).then((function(n){return 0!==n.results.length?l(n.results):alert("No movies found")})),e.reset(),E())},children:[(0,v.jsx)(p,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:C,onChange:function(n){var e=n.currentTarget.value;o(e.trim().toLowerCase()),j(""!==e?{search:e}:{})}}),(0,v.jsx)(f,{type:"submit",children:(0,v.jsx)(h.dVI,{})})]}),0!==s.length&&(0,v.jsx)(b,{findedMovies:s})]})})}}}]);
//# sourceMappingURL=607.d02bb735.chunk.js.map