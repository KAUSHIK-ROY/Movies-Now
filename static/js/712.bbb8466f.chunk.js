"use strict";(self.webpackChunkmovies_now=self.webpackChunkmovies_now||[]).push([[712],{712:(e,s,a)=>{a.r(s),a.d(s,{default:()=>x});var n=a(43),i=a(910),l=a(929),t=a(3),r=a(475),c=a(178),d=a.n(c),o=a(144),m=a(642),h=a(659),j=a(579);function x(){const e=(0,t.d4)((e=>e.moviesData.bannerData)),s=(0,t.d4)((e=>e.moviesData.imageURL)),{getGenreNames:a}=(0,m.A)(),{getLanguageName:c}=(0,o.A)(),[x,v]=(0,n.useState)(0),p=()=>{x<e.length-1&&v((e=>e+1))};(0,n.useEffect)((()=>{const s=setInterval((()=>{x<e.length-1?p():v(0)}),5e3);return()=>clearInterval(s)}),[e,s,x]);const g=(0,t.wA)();return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("div",{className:"promotion",children:[e.map(((e,n)=>(0,j.jsx)("div",{className:"details",children:(0,j.jsxs)("div",{className:"banner",style:{transform:`translateX(-${100*x}%)`,transition:"transform 0.5s ease-in-out"},children:[(0,j.jsx)("img",{src:s+e.backdrop_path,alt:""}),(0,j.jsx)(r.N_,{to:"/"+(null===e||void 0===e?void 0:e.media_type)+"/"+e.id,children:(0,j.jsx)("div",{className:"black",children:(0,j.jsxs)("div",{className:"banner-details",children:[(0,j.jsx)("h1",{children:e.name||e.title||e.original_title||e.original_name}),(0,j.jsxs)("p",{className:"bold",children:[e.media_type," | ",c(e.original_language)," | "," ",d()(e.release_date||e.first_air_date).format("YYYY")]}),(0,j.jsx)("p",{children:e.overview}),(0,j.jsx)("p",{className:"bold",children:a(e.genre_ids)}),(0,j.jsxs)("div",{className:"play-btn",children:[(0,j.jsx)(r.N_,{to:`/${null===e||void 0===e?void 0:e.media_type}/${e.id}/video`,children:(0,j.jsxs)("div",{className:"play",children:[(0,j.jsx)("span",{children:(0,j.jsx)(i.g,{icon:l.ijD})}),"Watch Now"]})}),(0,j.jsx)("div",{className:"w-list-btn",onClick:s=>((e,s,a)=>{e.preventDefault(),g((0,h.UQ)(s,a))})(s,e.media_type,e.id),children:(0,j.jsx)(i.g,{icon:l.QLR})})]})]})})})]})}))),(0,j.jsxs)("div",{className:"next-banner",children:[(0,j.jsx)("button",{className:"btn",onClick:()=>{x>0&&v((e=>e-1))},children:(0,j.jsx)(i.g,{icon:l.Wzs})}),(0,j.jsx)("div",{className:"slide-banner",children:e.map(((e,a)=>(0,j.jsx)("div",{className:"mini-banner",style:{transform:`translateX(-${9.4*x}vw)`,transition:"transform 0.5s ease-in-out"},children:(0,j.jsx)("img",{src:s+e.backdrop_path,alt:""})})))}),(0,j.jsx)("button",{className:"btn",onClick:p,children:(0,j.jsx)(i.g,{icon:l.XkK})})]})]})})}}}]);
//# sourceMappingURL=712.bbb8466f.chunk.js.map