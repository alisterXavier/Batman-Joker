(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(441)}])},1619:function(e,t,s){"use strict";s.d(t,{Z:function(){return h}});var a=s(5893),l=s(7294),i=s(6385),n=s(578),r=s(4002),c=s(7761);let o=()=>{let[e,t]=(0,l.useState)(),s=()=>{t(window.innerWidth)};return(0,l.useEffect)(()=>(window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}),[]),e};var d=s(5246);let x=e=>{let{characterName:t,secondName:s}=e,x=o(),h=(0,l.useRef)(null),[m,u]=(0,l.useState)(0),[g,v]=(0,l.useState)(0),{scrollY:f}=(0,i.v)(),p=m-g,w=x&&x<=1024?[100,0]:[300,0],j=[0,1],b=m+w[0],N=m+j[0],_=(0,n.H)(f,[p,b],w),y=(0,n.H)(f,[p,N],j),E=(0,r.q)(_,{stiffness:200,damping:90}),{activateTransition:z}=(0,l.useContext)(d.Transition);return(0,l.useLayoutEffect)(()=>{let e=h.current,t=()=>{e&&(u(e.getBoundingClientRect().top-500+window.scrollY||window.pageYOffset),v(window.innerHeight))};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[h]),(0,l.useEffect)(()=>{},[]),(0,a.jsxs)("main",{className:"hero-section min-w-[100vw] h-[100vh] bg-black relative flex items-center justify-center ".concat(z&&"activate-glitch"," "),"data-hero":!0,children:[(0,a.jsx)(c.E.h1,{className:"character-name ".concat("harley"===t?" lg:text-[#781312] text-white left-[10%] text-[70px] lg:text-[110px] capitalize":"left-5 text-[50px] lg:text-[100px]"," z-[1] font-bold absolute"),ref:h,style:{x:E},children:t}),s&&(0,a.jsx)(c.E.h1,{className:"character-name text-[#781312] lg:text-white z-[1] top-[50%] left-[40%] lg:left-[20%]    text-[70px] lg:text-[110px] font-bold absolute",style:{x:E},children:s}),(0,a.jsxs)(c.E.div,{className:"glitch lg:translate-x-[25%]",style:{opacity:y},children:[(0,a.jsx)("div",{className:"glitch__img ".concat(t.toLowerCase(),"-img")}),(0,a.jsx)("div",{className:"glitch__img ".concat(t.toLowerCase(),"-img")}),(0,a.jsx)("div",{className:"glitch__img ".concat(t.toLowerCase(),"-img")}),(0,a.jsx)("div",{className:"glitch__img ".concat(t.toLowerCase(),"-img")}),(0,a.jsx)("div",{className:"glitch__img ".concat(t.toLowerCase(),"-img")})]})]})};var h=x},9105:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var a=s(5893),l=s(1619),i=s(7294),n=s(5675),r=s.n(n);let c=()=>{let e=(0,i.useRef)([]),t=t=>{var s;let{pageX:a,pageY:l}=t,i=-((a-1e3)*1)/200,n=-((l-300)*1)/200;null===(s=e.current)||void 0===s||s.map(e=>{e.style.setProperty("--x","".concat(i,"px")),e.style.setProperty("--y","".concat(n,"px"))})};return(0,a.jsxs)("section",{className:"variant-wrapper h-[300vh]","data-variants":!0,children:[(0,a.jsx)("div",{className:"main-img-container",children:(0,a.jsx)("div",{className:"img-container top-[40%] w-[95%] h-[30%] lg:top-[20%] lg:w-[70%] lg:h-[70%] border-[10px] border-[#e7b200]",onMouseMove:t,children:(0,a.jsxs)("div",{className:"imgs-wrapper relative w-[100%] h-[100%] flex items-center justify-center",children:[(0,a.jsxs)("div",{className:"absolute left-0 top-0 w-full h-full",children:[(0,a.jsx)(r(),{alt:"bg",src:"/assets/images/batman_variants/original/bg.png",quality:100,className:"absolute",fill:!0}),(0,a.jsx)("h1",{className:"lg:text-[60px] text-sm text-[#e7b200] rotate-[-54deg] absolute top-[40%]",children:"THE BATMAN"})]}),(0,a.jsx)("div",{className:"character-img relative w-[85%] h-[100%] translate-x-[9%]",ref:t=>{e.current[0]=t},children:(0,a.jsx)(r(),{alt:"variant",src:"/assets/images/batman_variants/original/variant.png",quality:100,className:"bat",fill:!0})})]})})}),(0,a.jsx)("div",{className:"main-img-container",children:(0,a.jsx)("div",{className:"img-container top-[40%] w-[95%] h-[30%] lg:top-[20%] lg:w-[70%] lg:h-[70%] border-[10px] border-[#df0000]",onMouseMove:t,children:(0,a.jsxs)("div",{className:"imgs-wrapper relative w-[100%] h-[100%] flex items-center justify-center",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(r(),{alt:"bg",src:"/assets/images/batman_variants/beyond/bg.png",quality:100,className:"absolute",fill:!0}),(0,a.jsx)("h1",{className:"text-lg lg:text-[60px] text-red-600 absolute top-[5%] left-[5%]",children:"BATMAN"})]}),(0,a.jsxs)("div",{className:"character-img relative w-[76%] h-full translate-x-[-15%]",ref:t=>{e.current[1]=t},children:[(0,a.jsx)(r(),{alt:"variant",src:"/assets/images/batman_variants/beyond/variant.png",quality:100,className:"beyond-suit",fill:!0}),(0,a.jsx)("h1",{className:"text-lg lg:text-[60px] text-red-600 absolute top-[55%] right-[10%]",children:"BEYOND"})]})]})})}),(0,a.jsx)("div",{className:"main-img-container",children:(0,a.jsx)("div",{className:"img-container top-[40%] w-[95%] h-[30%] lg:top-[20%] lg:w-[70%] lg:h-[70%] border-[10px] border-[#23313a]",onMouseMove:t,children:(0,a.jsxs)("div",{className:"imgs-wrapper relative w-[100%] h-[100%] flex justify-center items-center",children:[(0,a.jsxs)("div",{className:"absolute left-0 top-0 w-full h-full",children:[(0,a.jsx)(r(),{alt:"bg",src:"/assets/images/batman_variants/wholaughs/bg.png",quality:100,className:"absolute",fill:!0}),(0,a.jsx)("h1",{className:"text-sm lg:text-[60px] text-[#506877] absolute top-[5%] left-[10%]",children:"THE BATMAN"})]}),(0,a.jsxs)("div",{className:"character-img relative translate-x-[-10px] w-[75%] h-[100%]",ref:t=>{e.current[2]=t},children:[(0,a.jsx)(r(),{alt:"variant",src:"/assets/images/batman_variants/wholaughs/variant.png",quality:100,className:"bat",fill:!0}),(0,a.jsx)("h1",{className:"text-sm lg:text-[60px] text-[#630e0f] absolute right-[10%] top-[70%] lg:right-[-100px]",children:"Who Laughs"})]})]})})})]})},o=()=>(0,a.jsxs)("div",{className:"quote relative z-[1] h-[400vh] text-2xl lg:text-7xl",children:[(0,a.jsx)("div",{className:"quote-container w-screen h-screen bg-[#e7b200] flex items-center justify-center absolute top-0 z-[1] overflow-hidden",children:(0,a.jsx)("div",{className:"fixed z-[1] top-[50%] overflow-hidden w-[75%]",children:(0,a.jsx)("h1",{className:"text-black",children:"I am vengeance."})})}),(0,a.jsx)("div",{className:"quote-container w-screen h-screen bg-black flex items-center justify-center absolute top-[100vh] z-[2] overflow-hidden",children:(0,a.jsx)("div",{className:"fixed z-[2] top-[50%] overflow-hidden w-[75%]",children:(0,a.jsx)("h1",{className:"text-[#e7b200]",children:"I am the night."})})}),(0,a.jsx)("div",{className:"quote-container w-screen h-screen bg-[#e7b200] flex items-center justify-center absolute top-[200vh] z-[3] overflow-hidden",children:(0,a.jsx)("div",{className:"fixed z-[3] top-[50%] overflow-hidden text-center w-[75%]",children:(0,a.jsx)("h1",{className:"text-black",children:"I am"})})}),(0,a.jsx)("div",{className:"quote-container w-screen h-screen bg-black flex items-center justify-center absolute top-[300vh] z-[3] overflow-hidden",children:(0,a.jsx)("div",{className:"fixed z-[3] top-[50%] overflow-hidden text-center w-[75%]",children:(0,a.jsx)("h1",{className:"text-[#e7b200] text-[50px] lg:text-[100px]",children:"BATMAN"})})})]}),d=()=>(0,a.jsxs)("div",{className:"batman",children:[(0,a.jsx)(l.Z,{characterName:"batman"}),(0,a.jsx)(c,{}),(0,a.jsx)(o,{})]});var x=d},441:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return r}});var a=s(5893),l=s(9008),i=s.n(l),n=s(9105);function r(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("title",{children:"Batman"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(n.default,{})]})}},9008:function(e,t,s){e.exports=s(5443)}},function(e){e.O(0,[589,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);