(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[569,4496],{16398:function(e,t,n){"use strict";var a=n(52322),r=n(97729),o=n.n(r),i=n(86741);function l(e){let{code:t,head:n}=e;return t?n?(0,a.jsx)(o(),{children:(0,i.ZP)(t)}):(0,a.jsx)(a.Fragment,{children:(0,i.ZP)(t)}):null}l.defaultProps={head:!1},t.Z=l},56752:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var a=n(52322),r=n(72779),o=n.n(r),i=n(2784),l=n(81632),c=n(2049),s=n(18113),d=n(25237),u=n.n(d),m=n(96577),h=n.n(m),g=n(5632),p=n(85609),f=n(89916),v=n(58079);let b=u()((()=>Promise.all([n.e(480),n.e(8070),n.e(2591),n.e(7028),n.e(7696),n.e(8135),n.e(3595)]).then(n.bind(n,8135)).then((e=>e.Icon))),{loadableGenerated:{webpack:()=>[8135]},ssr:!1}),w=u()((()=>Promise.all([n.e(480),n.e(8070),n.e(2591),n.e(7028),n.e(7696),n.e(8135),n.e(3595)]).then(n.bind(n,8135)).then((e=>e.Serializer))),{loadableGenerated:{webpack:()=>[8135]}}),y=(0,i.createContext)({isBurgerOpen:!1,setIsBurgerOpen:()=>{throw Error("Please wrap component around NavbarContext.Provider")}});function x(e){let{setIsBurgerOpen:t}=(0,i.useContext)(y),{color:n,url:r,internalLink:c,openInNewTab:s,className:d,children:u}=e,m=o()(d,{"td-navbar-item-color-gradient":!!n&&(0,l.W3)(n)});return r?(0,a.jsx)("a",{href:r,target:s?"_blank":"_self",className:m,onClick:()=>t(!1),rel:c?void 0:"noreferrer",children:u}):(0,a.jsx)("div",{className:m,children:u})}function _(e){let{title:t,fontFamily:n,type:r,color:o,url:i,internalLink:s,openInNewTab:d,children:u}=e,m="button"===r?e.background:void 0,h=o&&(0,l.W3)(o),g=(0,a.jsx)("div",{className:"button"===r?"td-navbar-item-button":"td-navbar-item-link",role:"none",style:{color:(0,l.Tj)(o,c.lq),background:"button"===r?(0,l.Tj)(m,c.z7):void 0,fontFamily:n,boxShadow:"button"===r?"0 10px 20px -10px ".concat((0,l.Tj)(m,c.My)):void 0},children:(0,a.jsx)("span",{style:{backgroundImage:o&&h?(0,l.Tj)(o,c.eR):void 0},children:t})});return(0,a.jsxs)(x,{url:i,internalLink:s,openInNewTab:d,color:o,className:"td-navbar-item",children:[u,g]})}function k(e){let{title:t,fontFamily:n,color:r,menu:o,url:s,internalLink:d,openInNewTab:u}=e,m=(0,i.useRef)(null),[g,f]=(0,i.useState)(!1);return(0,a.jsxs)("div",{ref:m,role:"none",className:"td-navbar-item",onClick:()=>f((e=>!e)),"data-state":g?"open":void 0,children:[(0,a.jsx)(x,{url:s,internalLink:d,openInNewTab:u,color:r,className:"td-navbar-item-dropdown",children:(0,a.jsx)("div",{style:{color:(0,l.Tj)(r,c.lq),fontFamily:n},children:(0,a.jsx)("span",{style:{backgroundImage:r&&(0,l.W3)(r)?(0,l.Tj)(r,c.eR):void 0},children:t})})}),(0,a.jsx)("svg",{viewBox:"0 0 16 16",height:"15",width:"15","aria-hidden":"true",focusable:"false",fill:"currentColor",className:"icon-chevron-down",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})}),(0,a.jsx)(p.N.Provider,{value:(0,i.useMemo)((()=>({navbarItemRef:m})),[]),children:(0,a.jsx)(w,{node:o,optimizedImageComponent:h(),isImageOptimizable:v.q,rootClassName:"typedream content td-navbar-item-dropdown-menu",rootStyle:{width:"card"===(null==o?void 0:o.style)?void 0:"100%",minHeight:"big-box"===(null==o?void 0:o.style)?0:void 0}})})]})}x.defaultProps={className:void 0};function T(e){let{title:t,fontFamily:n,type:r,color:o,url:i,internalLink:l,openInNewTab:c,children:s}=e;return"dropdown"!==r||(e=>0===e.children.length||1===e.children.length&&0===e.children[0].children.length||"navbar_dropdown_menu_column"===e.children[0].type&&1===e.children[0].children.length&&"text"in e.children[0].children[0]&&""===e.children[0].children[0].text)(e.menu)?(0,a.jsx)(_,{type:"button"===r?"button":"link",title:t,fontFamily:n,color:o,background:"button"===r?e.background:void 0,url:i,internalLink:l,openInNewTab:c,children:s}):(0,a.jsx)(k,{title:t,fontFamily:n,color:o,url:i,internalLink:l,openInNewTab:c,menu:e.menu})}let F={regular:"bx",solid:"bxs",logo:"bxl"};function N(e){let[t,n]=(0,i.useState)(!1);switch(e.logoType){case"image":{let{logoImage:r,logoScale:o}=e,i=t?r:(0,f.default)({src:r,width:384});return(0,a.jsx)("div",{className:"td-navbar-brand-logo",children:(0,a.jsx)("img",{src:i,style:{height:28*(o||1),maxHeight:"3rem"},alt:"website logo",onError:()=>n(!0)})})}case"emoji":{let{logoImage:t,logoScale:n}=e;return(0,a.jsx)("div",{className:"td-navbar-brand-logo td-navbar-brand-emoji",style:{fontSize:"".concat(30*(n||1),"px")},children:t})}case"icon":{let{logoImage:t,logoScale:n}=e,r=F[t.type],o=t.name;return(0,a.jsx)("div",{className:"td-navbar-brand-logo",style:{color:c.eR[t.color],fontSize:"".concat(30*(n||1),"px")},children:(0,a.jsx)(b,{type:r,name:o})})}default:return(0,a.jsx)("div",{})}}function j(e){let{logoType:t,logoColor:n,logoFontFamily:r,logoURL:l,position:c,style:d,logoTitle:u,logoOpenInNewTab:m,logoURLInternalLink:h,alignment:p,menu:f,endMenu:v,isBlur:b}=e,w=""!==t?e.logoImage:void 0,x=(0,g.useRouter)(),[_,k]=(0,i.useState)(!1);(0,i.useEffect)((()=>{let e=()=>k(!1);return x.events.on("routeChangeComplete",e),()=>{x.events.off("routeChangeComplete",e)}}),[x]);let F=(f||[]).map((e=>(0,a.jsx)(T,{...e,fontFamily:s.R[e.fontFamily]},"".concat(e.title,"-").concat(e.type)))),j=(v||[]).map((e=>(0,a.jsx)(T,{...e,fontFamily:s.R[e.fontFamily]},"".concat(e.title,"-").concat(e.type)))),I=j.length>0||F.length>0;return(0,a.jsxs)(y.Provider,{value:(0,i.useMemo)((()=>({isBurgerOpen:_,setIsBurgerOpen:k})),[_,k]),children:[(0,a.jsxs)("nav",{id:"td-navbar",className:o()("td-navbar",{"td-navbar-container-shadow":"shadow"===d,"td-navbar-container-border":"border"===d,"td-navbar-container-blur":b&&!_,"align-start":"start"===p,"align-center":"center"===p,"align-end":"end"===p}),role:"navigation","aria-label":"main navigation",style:{position:c,height:60,maxWidth:"100vw",width:"100%"},children:[(0,a.jsxs)("div",{className:"td-navbar-brand",children:[(u||w)&&(0,a.jsx)(T,{title:u||"",color:n||"",fontFamily:s.R[r],type:"link",url:l,internalLink:h,openInNewTab:m,children:(0,a.jsx)(N,{...e})},"".concat(u,"-").concat(t)),I&&(0,a.jsxs)("span",{role:"button",className:o()("td-navbar-burger",{"is-active":_}),onKeyDown:()=>{},tabIndex:0,onClick:()=>k((e=>!e)),"aria-label":"menu","aria-expanded":_,children:[(0,a.jsx)("span",{"aria-hidden":"true"}),(0,a.jsx)("span",{"aria-hidden":"true"}),(0,a.jsx)("span",{"aria-hidden":"true"})]})]}),_&&(0,a.jsx)("div",{className:"td-navbar-mobile",style:{top:60,maxHeight:"fixed"===c?"calc(100vh - ".concat(60,"px)"):void 0},children:[...F,...j]}),(0,a.jsx)("div",{className:"td-navbar-middle",children:F.length>0&&F}),(0,a.jsx)("div",{className:"td-navbar-end",children:j.length>0&&j})]}),"fixed"===c&&(0,a.jsx)("div",{style:{height:60}})]})}},73122:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var a,r,o,i,l=n(52322),c=n(39097),s=n.n(c),d=n(75619);(a=o||(o={})).OWNER="owner",a.ADMIN="admin",a.WRITER="writer",a.READER="reader",(r=i||(i={})).ACTIVE="active",r.INACTIVE="inactive";var u=n(42050),m=n.n(u),h=function(e){var t;let{subscription:n,spaceID:a,pageType:r}=e,o=(null==n?void 0:n.product_id)===d.Uw||(null==n?void 0:n.status)!==i.ACTIVE||(null==n||null===(t=n.metadata)||void 0===t?void 0:t.affiliate),c=(null==n?void 0:n.product_id)===d.c8;return"link_in_bio"===r&&(o||c)?(0,l.jsx)("div",{className:m().watermarkDumplink,children:(0,l.jsx)(s(),{href:"".concat(d.og,"?utm_source=link-watermark:").concat(a),target:"_new",children:(0,l.jsx)("img",{className:m().watermarkDumplinkImage,src:"/watermark-typedream.png",alt:"Made in ".concat(d.i5)})})}):o?(0,l.jsx)(s(),{href:"".concat(d.og,"?utm_source=watermark:").concat(a),target:"_new",className:m().watermarkTypedream,children:"Made in ".concat(d.i5)}):null}},75619:function(e,t,n){"use strict";n.d(t,{Fh:function(){return w},HY:function(){return i},L0:function(){return l},OH:function(){return b},PJ:function(){return o},Si:function(){return v},Uw:function(){return g},Yu:function(){return h},Yw:function(){return c},bG:function(){return r},c8:function(){return p},gE:function(){return d},i5:function(){return s},it:function(){return f},oQ:function(){return u},og:function(){return m}});var a=n(34406);let r="https://api.typedream.com/v0",o="https://analytics.typedream.com";a.env.NEXT_PUBLIC_EDITOR_DOMAIN;let i=a.env.NEXT_PUBLIC_LINK_IN_BIO_DOMAIN||"dumpl.ink",l="CUSTOM_DOMAIN",c="pk_live_51ILPa6KqrvH8BszmcFBTxrjxZYpFFDrqDTi0b3VdhnTE7vQvPmi9rrb7KPRqMNbU0MBAhnjqdu6aSEbWHwZ85rs000ou3c3rPR",s="Typedream",d="@typedreamHQ",u="/images/logo@100.png",m="https://typedream.com",h="A website made with Typedream.",g="FREE",p=a.env.NEXT_PUBLIC_SPACE_PLAN_MINI_PRODUCT_ID,f="id",v="ITEM_PAGE_URL",b={METADATA:{fieldName:"".concat("TD",":metadata"),label:"Metadata",description:"For SEO Settings, Twitter cards, etc.",type:"rich_text"},SLUG:{fieldName:"".concat("TD",":slug"),label:"Slug",description:"To specify the URL for each item",type:"rich_text"},PUBLISHED_CONTENT:{fieldName:"TD:page_content_published",label:"Page Content",description:"To store your page's published rich text content",type:"rich_text"},CONTENT:{fieldName:"TD:page_content",label:"Page Content Draft",description:"To store your page's draft rich text content",type:"rich_text"}},w="typedream_theme"},78973:function(e,t,n){"use strict";var a=n(9669),r=n.n(a),o=n(75619);t.Z=class{mergeHeaders(e,t){return{...e,...t,headers:{...null==e?void 0:e.headers,...(null==t?void 0:t.headers)||{}}}}async get(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{headers:{}};return r().get("".concat(this.api).concat(e),this.mergeHeaders({headers:{}},t))}async post(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{headers:{}};return r().post("".concat(this.api).concat(e),t,this.mergeHeaders({headers:{}},n))}async put(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{headers:{}};return r().put("".concat(this.api).concat(e),t,this.mergeHeaders({headers:{}},n))}async patch(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{headers:{}};return r().patch("".concat(this.api).concat(e),t,this.mergeHeaders({headers:{}},n))}async delete(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{headers:{}};return r().delete("".concat(this.api).concat(e),this.mergeHeaders({headers:{}},t))}constructor(){this.api=o.bG,this.config={}}}},67864:function(e,t,n){"use strict";n.d(t,{L:function(){return m}});var a=n(52322),r=n(2784),o=n(75619);let i=()=>{let e=document.querySelector("html"),t="light"===((null==e?void 0:e.getAttribute("data-theme"))||"light")?"dark":"light";null==e||e.setAttribute("data-theme",t),localStorage.setItem(o.Fh,t)},l=()=>{let e=document.querySelector("html"),t=localStorage.getItem(o.Fh);t&&(null==e||e.setAttribute("data-theme",t))};var c=n(35113),s=n.n(c);function d(){return(0,a.jsx)("svg",{viewBox:"0 0 20 20",height:"32",width:"32",fill:"currentColor",className:s().moon,children:(0,a.jsx)("path",{d:"M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586z"})})}function u(){return(0,a.jsx)("svg",{viewBox:"0 0 20 20",height:"32",width:"32",fill:"currentColor",className:s().sun,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm4 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-.464 4.95.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 1.414zm2.12-10.607a1 1 0 0 1 0 1.414l-.706.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM17 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1zm-7 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM5.05 6.464A1 1 0 1 0 6.465 5.05l-.708-.707a1 1 0 0 0-1.414 1.414l.707.707zm1.414 8.486-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414zM4 11a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2h1z",clipRule:"evenodd"})})}var m=function(){return(0,r.useEffect)(l,[]),(0,a.jsxs)("button",{type:"button",className:s().switch,onClick:i,tabIndex:-1,children:[(0,a.jsx)(u,{}),(0,a.jsx)(d,{})]})}},89916:function(e,t,n){"use strict";n.r(t);let a=JSON.parse('{"path":"https://image.typedream.com","loader":"custom","loaderFile":"./utils/imageLoader.ts","imageSizes":[16,32,48,64,96,128,256,384],"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"domains":["staging-api.typedream.com","api.typedream.com","typedream.sfo3.digitaloceanspaces.com","typedream-assets.sfo3.digitaloceanspaces.com"],"formats":["image/avif","image/webp"],"minimumCacheTTL":31536000}'),r=null==a?void 0:a.domains,o=!!(null==a?void 0:a.dangerouslyAllowSVG),i=[...(null==a?void 0:a.deviceSizes)||[],...(null==a?void 0:a.imageSizes)||[]];i.sort(((e,t)=>e-t));let l=(null==a?void 0:a.path)||"/_next/image";t.default=e=>{let{src:t,width:n,quality:a}=e;if(!t)return;if(t.startsWith("//")||t.endsWith(".svg")&&!o)return t;if(!t.startsWith("/")&&r)try{let e=new URL(t);if(!(null==r?void 0:r.includes(e.hostname))||e.pathname.endsWith(".svg")&&!o)return t}catch(e){return t}let c=n&&i.find((e=>e>=n))||i[i.length-1],s=["width=".concat(c),"format=auto","fit=scale-down"];a?s.push("quality=".concat(a)):s.push("quality=85");let d=s.join(",");return"".concat(l,"/cdn-cgi/image/").concat(d,"/").concat((e=>e.startsWith("/")?e.slice(1):e)(t))}},58079:function(e,t,n){"use strict";n.d(t,{q:function(){return r}});let a=JSON.parse('{"path":"https://image.typedream.com","loader":"custom","loaderFile":"./utils/imageLoader.ts","imageSizes":[16,32,48,64,96,128,256,384],"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"domains":["staging-api.typedream.com","api.typedream.com","typedream.sfo3.digitaloceanspaces.com","typedream-assets.sfo3.digitaloceanspaces.com"],"formats":["image/avif","image/webp"],"minimumCacheTTL":31536000}'),r=e=>{if(!e)return!1;let t=!1;try{var n;t=!!(null==a||null===(n=a.domains)||void 0===n?void 0:n.some((t=>t===new URL(e).hostname)))}catch(e){}return t}},85609:function(e,t,n){"use strict";n.d(t,{N:function(){return a}});let a=(0,n(2784).createContext)({navbarItemRef:{current:null}})},2049:function(e,t,n){"use strict";n.d(t,{MR:function(){return l},My:function(){return i},Tk:function(){return d},XI:function(){return r},d_:function(){return u},eR:function(){return c},lq:function(){return s},z7:function(){return o}});let a={accent:"#5E5DF0",text_on_accent:"#ffffff"},r={unicorn:"linear-gradient(135deg, #FFCC33 0%, #E233FF 100%)",nebula:"linear-gradient(135deg, #6699FF 0%, #FF3366 100%)",water:"linear-gradient(135deg, #2F80ED 0%, #B2FFDA 100%)",candy:"linear-gradient(135deg, #CB5EEE 0%, #4BE1EC 100%)",melon:"linear-gradient(135deg, #D6FF7F 0%, #00B3CC 100%)"},o={...a,default:"var(--background)",gray:"var(--background-highlight)",orange:"#FA9E34",yellow:"#F7CC5C",green:"#23CFA4",blue:"#06C1FF",indigo:"#6968F7",purple:"#8A24FF",pink:"#F54B94",red:"#F32E60",black:"#000000",white:"#ffffff",...r},i={accent:"var(--shadow-color-accent)",text_on_accent:"#ffffff",default:"var(--shadow-modal-color)",gray:"var(--background-highlight)",orange:"var(--shadow-color-orange)",yellow:"var(--shadow-color-yellow)",green:"var(--shadow-color-green)",blue:"var(--shadow-color-blue)",indigo:"var(--shadow-color-indigo)",purple:"var(--shadow-color-purple)",pink:"var(--shadow-color-pink)",red:"var(--shadow-color-red)",black:"var(--shadow-color-black)",white:"var(--shadow-color-white)",unicorn:"var(--shadow-color-unicorn)",nebula:"var(--shadow-color-nebula)",water:"var(--shadow-color-water)",candy:"var(--shadow-color-candy)",melon:"var(--shadow-color-melon)"},l={default:"var(--text-sharp)",gray:"var(--text-light)",orange:"#FA9E34",yellow:"#F7CC5C",green:"#23CFA4",blue:"#06C1FF",indigo:"#6968F7",purple:"#8A24FF",pink:"#F54B94",red:"#F32E60",black:"#000000",white:"#ffffff"},c={...a,...l,...r},s={...a,...l,unicorn:"#F18099",nebula:"#B664B0",water:"#67B7E5",candy:"#9D8EEE",melon:"#5CD4AC"},d="accent",u="text_on_accent"},18113:function(e,t,n){"use strict";n.d(t,{R:function(){return a}});let a={default:"Inter",inter:"Inter",libre_caslon_text:"Libre Caslon Text",space_mono:"Space Mono",quicksand:"Quicksand"}},81632:function(e,t,n){"use strict";n.d(t,{K_:function(){return r},Tj:function(){return o},W3:function(){return i}});var a=n(2049);let r=e=>/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(e),o=(e,t,n)=>e?(null==t?void 0:t[e])||((e=>{{let t=(new Option).style;return(null==e?void 0:e.includes("-gradient"))?(t.backgroundImage=e,""!==t.backgroundImage):(t.color=e,""!==t.color)}})(e)?e:void 0):n,i=e=>Object.keys(a.XI).includes(e)||(null==e?void 0:e.includes("-gradient"))},42050:function(e){e.exports={watermarkTypedream:"Watermark_watermarkTypedream__lVuFv",watermarkDumplink:"Watermark_watermarkDumplink__Q2c0U",watermarkDumplinkImage:"Watermark_watermarkDumplinkImage__Qrzr2"}},35113:function(e){e.exports={switch:"ThemeToggler_switch__tvM6S",icon:"ThemeToggler_icon__V7Vg8",sun:"ThemeToggler_sun__KYXV5 ThemeToggler_icon__V7Vg8",moon:"ThemeToggler_moon__CeIMq ThemeToggler_icon__V7Vg8"}}}]);