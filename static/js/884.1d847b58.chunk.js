"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[884],{884:function(n,t,e){e.r(t);var i=e(439),r=e(791),o=e(689),a=e(87),l=e(636),s=e(154),c=e(184);t.default=function(){var n,t,e=(0,o.UO)().movieId,d=(0,r.useState)(null),p=(0,i.Z)(d,2),u=p[0],x=p[1],h=(0,r.useState)(null),m=(0,i.Z)(h,2),g=m[0],f=m[1],j=null!==(n=null===(t=(0,o.TH)().state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/";return(0,r.useEffect)((function(){fetch("".concat("https://api.themoviedb.org/3","/movie/").concat(e,"?api_key=").concat("00f2cafab9ed8b61ede4a54c54838e2c","&language=en-US")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something has gone wrong!"))})).catch((function(n){return f({error:n})})).then((function(n){return x(n)}))}),[e]),u?(g&&console.log(g),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(r.Suspense,{fallback:null,children:[(0,c.jsxs)(s.$0,{children:[(0,c.jsx)(s.ks,{children:(0,c.jsxs)(a.rU,{to:j,style:{display:"flex",gap:"5px",color:"black",textDecoration:"none",width:"100px",backgroundColor:"lavender",border:"1px solid black"},children:[(0,c.jsx)(l.wFh,{}),"Go back"]})}),(0,c.jsxs)(s.Zx,{children:[(0,c.jsx)(s.Wf,{src:"https://image.tmdb.org/t/p/w500".concat(u.poster_path),alt:u.title}),(0,c.jsxs)("div",{style:{maxWidth:500},children:[(0,c.jsx)("h2",{children:u.title}),(0,c.jsxs)("p",{children:["Popularity: ",u.popularity]}),(0,c.jsx)("h3",{children:"Overview"}),(0,c.jsx)("p",{children:u.overview}),(0,c.jsx)("h3",{children:"Genres"}),u.genres.map((function(n){return(0,c.jsx)("p",{children:n.name},n.name)}))]})]})]}),(0,c.jsxs)(s.$0,{children:["Additional information",(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"cast",state:{from:j},children:"Cast"})}),(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"reviews",state:{from:j},children:"Reviews"})})]}),(0,c.jsx)(r.Suspense,{fallback:null,children:(0,c.jsx)(o.j3,{})})]})]})})):null}},154:function(n,t,e){e.d(t,{$0:function(){return d},Wf:function(){return u},Zx:function(){return p},ks:function(){return x},uU:function(){return h}});var i,r,o,a,l,s=e(168),c=e(444),d=c.ZP.section(i||(i=(0,s.Z)(["\n  border-bottom: 1px solid black;\n  margin-bottom: 20px;\n  padding: 20px;\n"]))),p=c.ZP.div(r||(r=(0,s.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 5fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),u=c.ZP.img(o||(o=(0,s.Z)(["\n  width: 100%;\n  // max-height: 414px;\n  object-fit: contain;\n  // border: 1px solid black;\n"]))),x=c.ZP.div(a||(a=(0,s.Z)(["\n  display: flex;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  width: 100%;\n  weight: 50px;\n"]))),h=c.ZP.ul(l||(l=(0,s.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 3fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])))}}]);
//# sourceMappingURL=884.1d847b58.chunk.js.map