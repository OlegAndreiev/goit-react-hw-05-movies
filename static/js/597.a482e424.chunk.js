"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[597],{597:function(n,t,e){e.r(t);var i=e(439),r=e(154),o=e(791),a=e(689),c=e(184);t.default=function(){var n=(0,a.UO)().movieId,t=(0,o.useState)(null),e=(0,i.Z)(t,2),l=e[0],u=e[1],s=(0,o.useState)(null),p=(0,i.Z)(s,2),d=p[0],h=p[1];return(0,o.useEffect)((function(){fetch("".concat("https://api.themoviedb.org/3","/movie/").concat(n,"/credits?api_key=").concat("00f2cafab9ed8b61ede4a54c54838e2c","&language=en-US")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something has gone wrong!"))})).catch((function(n){return h({error:n})})).then((function(n){return u(n)}))}),[n]),l?(d&&console.log(d),(0,c.jsx)("div",{children:(0,c.jsx)(o.Suspense,{fallback:null,children:0!==l.length?(0,c.jsx)(r.uU,{children:l.cast.map((function(n){return(0,c.jsxs)("li",{children:[(0,c.jsx)("img",{src:n.profile_path?"https://image.tmdb.org/t/p/w500".concat(n.profile_path):"https://t4.ftcdn.net/jpg/00/07/88/43/360_F_7884307_RoHrYRl7DCnwfHX4tucmPuQ6eLtUB3kS.jpg",alt:n.name,width:"100"}),(0,c.jsx)("p",{children:n.name}),(0,c.jsxs)("p",{children:["Character: ",n.character]})]},n.id)}))}):" We don`t have any casts for this movie"})})):null}},154:function(n,t,e){e.d(t,{$0:function(){return s},Wf:function(){return d},Zx:function(){return p},ks:function(){return h},uU:function(){return f}});var i,r,o,a,c,l=e(168),u=e(444),s=u.ZP.section(i||(i=(0,l.Z)(["\n  border-bottom: 1px solid black;\n  margin-bottom: 20px;\n"]))),p=u.ZP.div(r||(r=(0,l.Z)(["\n  display: flex;\n  gap: 16px;\n"]))),d=u.ZP.img(o||(o=(0,l.Z)(["\n  width: 400px;\n  // height: 560px;\n  object-fit: cover;\n  border: 1px solid black;\n"]))),h=u.ZP.div(a||(a=(0,l.Z)(["\n  display: flex;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  width: 100%;\n  weight: 50px;\n"]))),f=u.ZP.ul(c||(c=(0,l.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])))}}]);
//# sourceMappingURL=597.a482e424.chunk.js.map