import{S as Yt,r as p,T as qt,U as Xt,V as Kt,_ as Zt,W as y,K as Jt,s as M,g as E,u as ke,j as m,a as _,H as Le,X as Qt,Y as ie,Z as en,N as tn,h as re,$ as nn,Q as Ae,a0 as rn,a1 as on,a2 as _e,a3 as Ce,a4 as an,a5 as un,a6 as sn,a7 as ln,a8 as cn,x as dn,a9 as pn,C as fn}from"./index-3596d226.js";import{T as hn}from"./TitlePage-5d040848.js";import{e as ae,a as mt,h as mn,_ as gn,b as vn,c as bn,d as xn,g as En}from"./defineProperty-5994ded1.js";import{s as Cn,c as Sn}from"./diarySelector-59eb112d.js";var S=function(t,r){var o=arguments;if(r==null||!Yt.call(r,"css"))return p.createElement.apply(void 0,o);var e=o.length,a=new Array(e);a[0]=qt,a[1]=Xt(t,r);for(var u=2;u<e;u++)a[u]=o[u];return p.createElement.apply(null,a)};function Re(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return Kt(t)}var wn=function(){var t=Re.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};const yn=Math.min,Fn=Math.max,he=Math.round,le=Math.floor,me=n=>({x:n,y:n});function On(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function gt(n){return bt(n)?(n.nodeName||"").toLowerCase():"#document"}function N(n){var t;return(n==null||(t=n.ownerDocument)==null?void 0:t.defaultView)||window}function vt(n){var t;return(t=(bt(n)?n.ownerDocument:n.document)||window.document)==null?void 0:t.documentElement}function bt(n){return n instanceof Node||n instanceof N(n).Node}function Pe(n){return n instanceof Element||n instanceof N(n).Element}function Te(n){return n instanceof HTMLElement||n instanceof N(n).HTMLElement}function Ge(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof N(n).ShadowRoot}function xt(n){const{overflow:t,overflowX:r,overflowY:o,display:e}=$e(n);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!["inline","contents"].includes(e)}function Dn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function In(n){return["html","body","#document"].includes(gt(n))}function $e(n){return N(n).getComputedStyle(n)}function An(n){if(gt(n)==="html")return n;const t=n.assignedSlot||n.parentNode||Ge(n)&&n.host||vt(n);return Ge(t)?t.host:t}function Et(n){const t=An(n);return In(t)?n.ownerDocument?n.ownerDocument.body:n.body:Te(t)&&xt(t)?t:Et(t)}function ge(n,t,r){var o;t===void 0&&(t=[]),r===void 0&&(r=!0);const e=Et(n),a=e===((o=n.ownerDocument)==null?void 0:o.body),u=N(e);return a?t.concat(u,u.visualViewport||[],xt(e)?e:[],u.frameElement&&r?ge(u.frameElement):[]):t.concat(e,ge(e,[],r))}function Pn(n){const t=$e(n);let r=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const e=Te(n),a=e?n.offsetWidth:r,u=e?n.offsetHeight:o,l=he(r)!==a||he(o)!==u;return l&&(r=a,o=u),{width:r,height:o,$:l}}function Be(n){return Pe(n)?n:n.contextElement}function Se(n){const t=Be(n);if(!Te(t))return me(1);const r=t.getBoundingClientRect(),{width:o,height:e,$:a}=Pn(t);let u=(a?he(r.width):r.width)/o,l=(a?he(r.height):r.height)/e;return(!u||!Number.isFinite(u))&&(u=1),(!l||!Number.isFinite(l))&&(l=1),{x:u,y:l}}const Mn=me(0);function Vn(n){const t=N(n);return!Dn()||!t.visualViewport?Mn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function kn(n,t,r){return t===void 0&&(t=!1),!r||t&&r!==N(n)?!1:t}function Ye(n,t,r,o){t===void 0&&(t=!1),r===void 0&&(r=!1);const e=n.getBoundingClientRect(),a=Be(n);let u=me(1);t&&(o?Pe(o)&&(u=Se(o)):u=Se(n));const l=kn(a,r,o)?Vn(a):me(0);let i=(e.left+l.x)/u.x,s=(e.top+l.y)/u.y,c=e.width/u.x,d=e.height/u.y;if(a){const f=N(a),v=o&&Pe(o)?N(o):o;let b=f.frameElement;for(;b&&o&&v!==f;){const x=Se(b),h=b.getBoundingClientRect(),g=$e(b),D=h.left+(b.clientLeft+parseFloat(g.paddingLeft))*x.x,I=h.top+(b.clientTop+parseFloat(g.paddingTop))*x.y;i*=x.x,s*=x.y,c*=x.x,d*=x.y,i+=D,s+=I,b=N(b).frameElement}}return On({width:c,height:d,x:i,y:s})}function Ln(n,t){let r=null,o;const e=vt(n);function a(){clearTimeout(o),r&&r.disconnect(),r=null}function u(l,i){l===void 0&&(l=!1),i===void 0&&(i=1),a();const{left:s,top:c,width:d,height:f}=n.getBoundingClientRect();if(l||t(),!d||!f)return;const v=le(c),b=le(e.clientWidth-(s+d)),x=le(e.clientHeight-(c+f)),h=le(s),D={rootMargin:-v+"px "+-b+"px "+-x+"px "+-h+"px",threshold:Fn(0,yn(1,i))||1};let I=!0;function A(P){const C=P[0].intersectionRatio;if(C!==i){if(!I)return u();C?u(!1,C):o=setTimeout(()=>{u(!1,1e-7)},100)}I=!1}try{r=new IntersectionObserver(A,{...D,root:e.ownerDocument})}catch{r=new IntersectionObserver(A,D)}r.observe(n)}return u(!0),a}function Rn(n,t,r,o){o===void 0&&(o={});const{ancestorScroll:e=!0,ancestorResize:a=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:i=!1}=o,s=Be(n),c=e||a?[...s?ge(s):[],...ge(t)]:[];c.forEach(g=>{e&&g.addEventListener("scroll",r,{passive:!0}),a&&g.addEventListener("resize",r)});const d=s&&l?Ln(s,r):null;let f=-1,v=null;u&&(v=new ResizeObserver(g=>{let[D]=g;D&&D.target===s&&v&&(v.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{v&&v.observe(t)})),r()}),s&&!i&&v.observe(s),v.observe(t));let b,x=i?Ye(n):null;i&&h();function h(){const g=Ye(n);x&&(g.x!==x.x||g.y!==x.y||g.width!==x.width||g.height!==x.height)&&r(),x=g,b=requestAnimationFrame(h)}return r(),()=>{c.forEach(g=>{e&&g.removeEventListener("scroll",r),a&&g.removeEventListener("resize",r)}),d&&d(),v&&v.disconnect(),v=null,i&&cancelAnimationFrame(b)}}function qe(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),r.push.apply(r,o)}return r}function w(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?qe(Object(r),!0).forEach(function(o){ae(n,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):qe(Object(r)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(r,o))})}return n}function Tn(n){if(Array.isArray(n))return n}function $n(n,t){var r=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var o,e,a,u,l=[],i=!0,s=!1;try{if(a=(r=r.call(n)).next,t===0){if(Object(r)!==r)return;i=!1}else for(;!(i=(o=a.call(r)).done)&&(l.push(o.value),l.length!==t);i=!0);}catch(c){s=!0,e=c}finally{try{if(!i&&r.return!=null&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw e}}return l}}function Bn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(n,t){return Tn(n)||$n(n,t)||mt(n,t)||Bn()}function Z(n,t){if(n==null)return{};var r=Zt(n,t),o,e;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)o=a[e],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(r[o]=n[o])}return r}var jn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Hn(n){var t=n.defaultInputValue,r=t===void 0?"":t,o=n.defaultMenuIsOpen,e=o===void 0?!1:o,a=n.defaultValue,u=a===void 0?null:a,l=n.inputValue,i=n.menuIsOpen,s=n.onChange,c=n.onInputChange,d=n.onMenuClose,f=n.onMenuOpen,v=n.value,b=Z(n,jn),x=p.useState(l!==void 0?l:r),h=K(x,2),g=h[0],D=h[1],I=p.useState(i!==void 0?i:e),A=K(I,2),P=A[0],C=A[1],F=p.useState(v!==void 0?v:u),O=K(F,2),V=O[0],$=O[1],j=p.useCallback(function(W,J){typeof s=="function"&&s(W,J),$(W)},[s]),B=p.useCallback(function(W,J){var Q;typeof c=="function"&&(Q=c(W,J)),D(Q!==void 0?Q:W)},[c]),G=p.useCallback(function(){typeof f=="function"&&f(),C(!0)},[f]),Y=p.useCallback(function(){typeof d=="function"&&d(),C(!1)},[d]),T=l!==void 0?l:g,L=i!==void 0?i:P,z=v!==void 0?v:V;return w(w({},b),{},{inputValue:T,menuIsOpen:L,onChange:j,onInputChange:B,onMenuClose:Y,onMenuOpen:G,value:z})}function Wn(n){if(Array.isArray(n))return mn(n)}function Un(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Nn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function je(n){return Wn(n)||Un(n)||mt(n)||Nn()}function zn(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var Me=p.useLayoutEffect,_n=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ve=function(){};function Gn(n,t){return t?t[0]==="-"?n+t:n+"__"+t:n}function Yn(n,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),e=2;e<r;e++)o[e-2]=arguments[e];var a=[].concat(o);if(t&&n)for(var u in t)t.hasOwnProperty(u)&&t[u]&&a.push("".concat(Gn(n,u)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Xe=function(t){return nr(t)?t.filter(Boolean):gn(t)==="object"&&t!==null?[t]:[]},Ct=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var r=Z(t,_n);return w({},r)},k=function(t,r,o){var e=t.cx,a=t.getStyles,u=t.getClassNames,l=t.className;return{css:a(r,t),className:e(o??{},u(r,t),l)}};function Ee(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function qn(n){return Ee(n)?window.innerHeight:n.clientHeight}function St(n){return Ee(n)?window.pageYOffset:n.scrollTop}function be(n,t){if(Ee(n)){window.scrollTo(0,t);return}n.scrollTop=t}function Xn(n){var t=getComputedStyle(n),r=t.position==="absolute",o=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var e=n;e=e.parentElement;)if(t=getComputedStyle(e),!(r&&t.position==="static")&&o.test(t.overflow+t.overflowY+t.overflowX))return e;return document.documentElement}function Kn(n,t,r,o){return r*((n=n/o-1)*n*n+1)+t}function ce(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ve,e=St(n),a=t-e,u=10,l=0;function i(){l+=u;var s=Kn(l,e,a,r);be(n,s),l<r?window.requestAnimationFrame(i):o(n)}i()}function Ke(n,t){var r=n.getBoundingClientRect(),o=t.getBoundingClientRect(),e=t.offsetHeight/3;o.bottom+e>r.bottom?be(n,Math.min(t.offsetTop+t.clientHeight-n.offsetHeight+e,n.scrollHeight)):o.top-e<r.top&&be(n,Math.max(t.offsetTop-e,0))}function Zn(n){var t=n.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Ze(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Jn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var wt=!1,Qn={get passive(){return wt=!0}},de=typeof window<"u"?window:{};de.addEventListener&&de.removeEventListener&&(de.addEventListener("p",ve,Qn),de.removeEventListener("p",ve,!1));var er=wt;function tr(n){return n!=null}function nr(n){return Array.isArray(n)}function pe(n,t,r){return n?t:r}var rr=function(t){for(var r=arguments.length,o=new Array(r>1?r-1:0),e=1;e<r;e++)o[e-1]=arguments[e];var a=Object.entries(t).filter(function(u){var l=K(u,1),i=l[0];return!o.includes(i)});return a.reduce(function(u,l){var i=K(l,2),s=i[0],c=i[1];return u[s]=c,u},{})},or=["children","innerProps"],ir=["children","innerProps"];function ar(n){var t=n.maxHeight,r=n.menuEl,o=n.minHeight,e=n.placement,a=n.shouldScroll,u=n.isFixedPosition,l=n.controlHeight,i=Xn(r),s={placement:"bottom",maxHeight:t};if(!r||!r.offsetParent)return s;var c=i.getBoundingClientRect(),d=c.height,f=r.getBoundingClientRect(),v=f.bottom,b=f.height,x=f.top,h=r.offsetParent.getBoundingClientRect(),g=h.top,D=u?window.innerHeight:qn(i),I=St(i),A=parseInt(getComputedStyle(r).marginBottom,10),P=parseInt(getComputedStyle(r).marginTop,10),C=g-P,F=D-x,O=C+I,V=d-I-x,$=v-D+I+A,j=I+x-P,B=160;switch(e){case"auto":case"bottom":if(F>=b)return{placement:"bottom",maxHeight:t};if(V>=b&&!u)return a&&ce(i,$,B),{placement:"bottom",maxHeight:t};if(!u&&V>=o||u&&F>=o){a&&ce(i,$,B);var G=u?F-A:V-A;return{placement:"bottom",maxHeight:G}}if(e==="auto"||u){var Y=t,T=u?C:O;return T>=o&&(Y=Math.min(T-A-l,t)),{placement:"top",maxHeight:Y}}if(e==="bottom")return a&&be(i,$),{placement:"bottom",maxHeight:t};break;case"top":if(C>=b)return{placement:"top",maxHeight:t};if(O>=b&&!u)return a&&ce(i,j,B),{placement:"top",maxHeight:t};if(!u&&O>=o||u&&C>=o){var L=t;return(!u&&O>=o||u&&C>=o)&&(L=u?C-P:O-P),a&&ce(i,j,B),{placement:"top",maxHeight:L}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(e,'".'))}return s}function ur(n){var t={bottom:"top",top:"bottom"};return n?t[n]:"bottom"}var yt=function(t){return t==="auto"?"bottom":t},sr=function(t,r){var o,e=t.placement,a=t.theme,u=a.borderRadius,l=a.spacing,i=a.colors;return w((o={label:"menu"},ae(o,ur(e),"100%"),ae(o,"position","absolute"),ae(o,"width","100%"),ae(o,"zIndex",1),o),r?{}:{backgroundColor:i.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Ft=p.createContext(null),lr=function(t){var r=t.children,o=t.minMenuHeight,e=t.maxMenuHeight,a=t.menuPlacement,u=t.menuPosition,l=t.menuShouldScrollIntoView,i=t.theme,s=p.useContext(Ft)||{},c=s.setPortalPlacement,d=p.useRef(null),f=p.useState(e),v=K(f,2),b=v[0],x=v[1],h=p.useState(null),g=K(h,2),D=g[0],I=g[1],A=i.spacing.controlHeight;return Me(function(){var P=d.current;if(P){var C=u==="fixed",F=l&&!C,O=ar({maxHeight:e,menuEl:P,minHeight:o,placement:a,shouldScroll:F,isFixedPosition:C,controlHeight:A});x(O.maxHeight),I(O.placement),c==null||c(O.placement)}},[e,a,u,l,o,c,A]),r({ref:d,placerProps:w(w({},t),{},{placement:D||yt(a),maxHeight:b})})},cr=function(t){var r=t.children,o=t.innerRef,e=t.innerProps;return S("div",y({},k(t,"menu",{menu:!0}),{ref:o},e),r)},dr=cr,pr=function(t,r){var o=t.maxHeight,e=t.theme.spacing.baseUnit;return w({maxHeight:o,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:e,paddingTop:e})},fr=function(t){var r=t.children,o=t.innerProps,e=t.innerRef,a=t.isMulti;return S("div",y({},k(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:e},o),r)},Ot=function(t,r){var o=t.theme,e=o.spacing.baseUnit,a=o.colors;return w({textAlign:"center"},r?{}:{color:a.neutral40,padding:"".concat(e*2,"px ").concat(e*3,"px")})},hr=Ot,mr=Ot,gr=function(t){var r=t.children,o=r===void 0?"No options":r,e=t.innerProps,a=Z(t,or);return S("div",y({},k(w(w({},a),{},{children:o,innerProps:e}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),e),o)},vr=function(t){var r=t.children,o=r===void 0?"Loading...":r,e=t.innerProps,a=Z(t,ir);return S("div",y({},k(w(w({},a),{},{children:o,innerProps:e}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),e),o)},br=function(t){var r=t.rect,o=t.offset,e=t.position;return{left:r.left,position:e,top:o,width:r.width,zIndex:1}},xr=function(t){var r=t.appendTo,o=t.children,e=t.controlElement,a=t.innerProps,u=t.menuPlacement,l=t.menuPosition,i=p.useRef(null),s=p.useRef(null),c=p.useState(yt(u)),d=K(c,2),f=d[0],v=d[1],b=p.useMemo(function(){return{setPortalPlacement:v}},[]),x=p.useState(null),h=K(x,2),g=h[0],D=h[1],I=p.useCallback(function(){if(e){var F=Zn(e),O=l==="fixed"?0:window.pageYOffset,V=F[f]+O;(V!==(g==null?void 0:g.offset)||F.left!==(g==null?void 0:g.rect.left)||F.width!==(g==null?void 0:g.rect.width))&&D({offset:V,rect:F})}},[e,l,f,g==null?void 0:g.offset,g==null?void 0:g.rect.left,g==null?void 0:g.rect.width]);Me(function(){I()},[I]);var A=p.useCallback(function(){typeof s.current=="function"&&(s.current(),s.current=null),e&&i.current&&(s.current=Rn(e,i.current,I,{elementResize:"ResizeObserver"in window}))},[e,I]);Me(function(){A()},[A]);var P=p.useCallback(function(F){i.current=F,A()},[A]);if(!r&&l!=="fixed"||!g)return null;var C=S("div",y({ref:P},k(w(w({},t),{},{offset:g.offset,position:l,rect:g.rect}),"menuPortal",{"menu-portal":!0}),a),o);return S(Ft.Provider,{value:b},r?Jt.createPortal(C,r):C)},Er=function(t){var r=t.isDisabled,o=t.isRtl;return{label:"container",direction:o?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},Cr=function(t){var r=t.children,o=t.innerProps,e=t.isDisabled,a=t.isRtl;return S("div",y({},k(t,"container",{"--is-disabled":e,"--is-rtl":a}),o),r)},Sr=function(t,r){var o=t.theme.spacing,e=t.isMulti,a=t.hasValue,u=t.selectProps.controlShouldRenderValue;return w({alignItems:"center",display:e&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(o.baseUnit/2,"px ").concat(o.baseUnit*2,"px")})},wr=function(t){var r=t.children,o=t.innerProps,e=t.isMulti,a=t.hasValue;return S("div",y({},k(t,"valueContainer",{"value-container":!0,"value-container--is-multi":e,"value-container--has-value":a}),o),r)},yr=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Fr=function(t){var r=t.children,o=t.innerProps;return S("div",y({},k(t,"indicatorsContainer",{indicators:!0}),o),r)},Je,Or=["size"],Dr=["innerProps","isRtl","size"],Ir={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Dt=function(t){var r=t.size,o=Z(t,Or);return S("svg",y({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Ir},o))},He=function(t){return S(Dt,y({size:20},t),S("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},It=function(t){return S(Dt,y({size:20},t),S("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},At=function(t,r){var o=t.isFocused,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return w({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:o?u.neutral60:u.neutral20,padding:a*2,":hover":{color:o?u.neutral80:u.neutral40}})},Ar=At,Pr=function(t){var r=t.children,o=t.innerProps;return S("div",y({},k(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),o),r||S(It,null))},Mr=At,Vr=function(t){var r=t.children,o=t.innerProps;return S("div",y({},k(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),o),r||S(He,null))},kr=function(t,r){var o=t.isDisabled,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return w({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:o?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},Lr=function(t){var r=t.innerProps;return S("span",y({},r,k(t,"indicatorSeparator",{"indicator-separator":!0})))},Rr=wn(Je||(Je=zn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Tr=function(t,r){var o=t.isFocused,e=t.size,a=t.theme,u=a.colors,l=a.spacing.baseUnit;return w({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:e,lineHeight:1,marginRight:e,textAlign:"center",verticalAlign:"middle"},r?{}:{color:o?u.neutral60:u.neutral20,padding:l*2})},we=function(t){var r=t.delay,o=t.offset;return S("span",{css:Re({animation:"".concat(Rr," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:o?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},$r=function(t){var r=t.innerProps,o=t.isRtl,e=t.size,a=e===void 0?4:e,u=Z(t,Dr);return S("div",y({},k(w(w({},u),{},{innerProps:r,isRtl:o,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),S(we,{delay:0,offset:o}),S(we,{delay:160,offset:!0}),S(we,{delay:320,offset:!o}))},Br=function(t,r){var o=t.isDisabled,e=t.isFocused,a=t.theme,u=a.colors,l=a.borderRadius,i=a.spacing;return w({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:i.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:o?u.neutral5:u.neutral0,borderColor:o?u.neutral10:e?u.primary:u.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:e?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:e?u.primary:u.neutral30}})},jr=function(t){var r=t.children,o=t.isDisabled,e=t.isFocused,a=t.innerRef,u=t.innerProps,l=t.menuIsOpen;return S("div",y({ref:a},k(t,"control",{control:!0,"control--is-disabled":o,"control--is-focused":e,"control--menu-is-open":l}),u,{"aria-disabled":o||void 0}),r)},Hr=jr,Wr=["data"],Ur=function(t,r){var o=t.theme.spacing;return r?{}:{paddingBottom:o.baseUnit*2,paddingTop:o.baseUnit*2}},Nr=function(t){var r=t.children,o=t.cx,e=t.getStyles,a=t.getClassNames,u=t.Heading,l=t.headingProps,i=t.innerProps,s=t.label,c=t.theme,d=t.selectProps;return S("div",y({},k(t,"group",{group:!0}),i),S(u,y({},l,{selectProps:d,theme:c,getStyles:e,getClassNames:a,cx:o}),s),S("div",null,r))},zr=function(t,r){var o=t.theme,e=o.colors,a=o.spacing;return w({label:"group",cursor:"default",display:"block"},r?{}:{color:e.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},_r=function(t){var r=Ct(t);r.data;var o=Z(r,Wr);return S("div",y({},k(t,"groupHeading",{"group-heading":!0}),o))},Gr=Nr,Yr=["innerRef","isDisabled","isHidden","inputClassName"],qr=function(t,r){var o=t.isDisabled,e=t.value,a=t.theme,u=a.spacing,l=a.colors;return w(w({visibility:o?"hidden":"visible",transform:e?"translateZ(0)":""},Xr),r?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:l.neutral80})},Pt={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Xr={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":w({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Pt)},Kr=function(t){return w({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Pt)},Zr=function(t){var r=t.cx,o=t.value,e=Ct(t),a=e.innerRef,u=e.isDisabled,l=e.isHidden,i=e.inputClassName,s=Z(e,Yr);return S("div",y({},k(t,"input",{"input-container":!0}),{"data-value":o||""}),S("input",y({className:r({input:!0},i),ref:a,style:Kr(l),disabled:u},s)))},Jr=Zr,Qr=function(t,r){var o=t.theme,e=o.spacing,a=o.borderRadius,u=o.colors;return w({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:e.baseUnit/2})},eo=function(t,r){var o=t.theme,e=o.borderRadius,a=o.colors,u=t.cropWithEllipsis;return w({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:e/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},to=function(t,r){var o=t.theme,e=o.spacing,a=o.borderRadius,u=o.colors,l=t.isFocused;return w({alignItems:"center",display:"flex"},r?{}:{borderRadius:a/2,backgroundColor:l?u.dangerLight:void 0,paddingLeft:e.baseUnit,paddingRight:e.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},Mt=function(t){var r=t.children,o=t.innerProps;return S("div",o,r)},no=Mt,ro=Mt;function oo(n){var t=n.children,r=n.innerProps;return S("div",y({role:"button"},r),t||S(He,{size:14}))}var io=function(t){var r=t.children,o=t.components,e=t.data,a=t.innerProps,u=t.isDisabled,l=t.removeProps,i=t.selectProps,s=o.Container,c=o.Label,d=o.Remove;return S(s,{data:e,innerProps:w(w({},k(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:i},S(c,{data:e,innerProps:w({},k(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:i},r),S(d,{data:e,innerProps:w(w({},k(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},l),selectProps:i}))},ao=io,uo=function(t,r){var o=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.theme,l=u.spacing,i=u.colors;return w({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:a?i.primary:e?i.primary25:"transparent",color:o?i.neutral20:a?i.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:o?void 0:a?i.primary:i.primary50}})},so=function(t){var r=t.children,o=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.innerRef,l=t.innerProps;return S("div",y({},k(t,"option",{option:!0,"option--is-disabled":o,"option--is-focused":e,"option--is-selected":a}),{ref:u,"aria-disabled":o},l),r)},lo=so,co=function(t,r){var o=t.theme,e=o.spacing,a=o.colors;return w({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:a.neutral50,marginLeft:e.baseUnit/2,marginRight:e.baseUnit/2})},po=function(t){var r=t.children,o=t.innerProps;return S("div",y({},k(t,"placeholder",{placeholder:!0}),o),r)},fo=po,ho=function(t,r){var o=t.isDisabled,e=t.theme,a=e.spacing,u=e.colors;return w({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:o?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},mo=function(t){var r=t.children,o=t.isDisabled,e=t.innerProps;return S("div",y({},k(t,"singleValue",{"single-value":!0,"single-value--is-disabled":o}),e),r)},go=mo,vo={ClearIndicator:Vr,Control:Hr,DropdownIndicator:Pr,DownChevron:It,CrossIcon:He,Group:Gr,GroupHeading:_r,IndicatorsContainer:Fr,IndicatorSeparator:Lr,Input:Jr,LoadingIndicator:$r,Menu:dr,MenuList:fr,MenuPortal:xr,LoadingMessage:vr,NoOptionsMessage:gr,MultiValue:ao,MultiValueContainer:no,MultiValueLabel:ro,MultiValueRemove:oo,Option:lo,Placeholder:fo,SelectContainer:Cr,SingleValue:go,ValueContainer:wr},bo=function(t){return w(w({},vo),t.components)},Qe=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function xo(n,t){return!!(n===t||Qe(n)&&Qe(t))}function Eo(n,t){if(n.length!==t.length)return!1;for(var r=0;r<n.length;r++)if(!xo(n[r],t[r]))return!1;return!0}function Co(n,t){t===void 0&&(t=Eo);var r=null;function o(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];if(r&&r.lastThis===this&&t(e,r.lastArgs))return r.lastResult;var u=n.apply(this,e);return r={lastResult:u,lastArgs:e,lastThis:this},u}return o.clear=function(){r=null},o}var So={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},wo=function(t){return S("span",y({css:So},t))},et=wo,yo={guidance:function(t){var r=t.isSearchable,o=t.isMulti,e=t.tabSelectsValue,a=t.context,u=t.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(e?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(t["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(o?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var r=t.action,o=t.label,e=o===void 0?"":o,a=t.labels,u=t.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(e,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(e," is disabled. Select another option."):"option ".concat(e,", selected.");default:return""}},onFocus:function(t){var r=t.context,o=t.focused,e=t.options,a=t.label,u=a===void 0?"":a,l=t.selectValue,i=t.isDisabled,s=t.isSelected,c=t.isAppleDevice,d=function(x,h){return x&&x.length?"".concat(x.indexOf(h)+1," of ").concat(x.length):""};if(r==="value"&&l)return"value ".concat(u," focused, ").concat(d(l,o),".");if(r==="menu"&&c){var f=i?" disabled":"",v="".concat(s?" selected":"").concat(f);return"".concat(u).concat(v,", ").concat(d(e,o),".")}return""},onFilter:function(t){var r=t.inputValue,o=t.resultsMessage;return"".concat(o).concat(r?" for search term "+r:"",".")}},Fo=function(t){var r=t.ariaSelection,o=t.focusedOption,e=t.focusedValue,a=t.focusableOptions,u=t.isFocused,l=t.selectValue,i=t.selectProps,s=t.id,c=t.isAppleDevice,d=i.ariaLiveMessages,f=i.getOptionLabel,v=i.inputValue,b=i.isMulti,x=i.isOptionDisabled,h=i.isSearchable,g=i.menuIsOpen,D=i.options,I=i.screenReaderStatus,A=i.tabSelectsValue,P=i.isLoading,C=i["aria-label"],F=i["aria-live"],O=p.useMemo(function(){return w(w({},yo),d||{})},[d]),V=p.useMemo(function(){var T="";if(r&&O.onChange){var L=r.option,z=r.options,W=r.removedValue,J=r.removedValues,Q=r.value,ue=function(X){return Array.isArray(X)?null:X},R=W||L||ue(Q),H=R?f(R):"",q=z||J||void 0,ee=q?q.map(f):[],U=w({isDisabled:R&&x(R,l),label:H,labels:ee},r);T=O.onChange(U)}return T},[r,O,x,l,f]),$=p.useMemo(function(){var T="",L=o||e,z=!!(o&&l&&l.includes(o));if(L&&O.onFocus){var W={focused:L,label:f(L),isDisabled:x(L,l),isSelected:z,options:a,context:L===o?"menu":"value",selectValue:l,isAppleDevice:c};T=O.onFocus(W)}return T},[o,e,f,x,O,a,l,c]),j=p.useMemo(function(){var T="";if(g&&D.length&&!P&&O.onFilter){var L=I({count:a.length});T=O.onFilter({inputValue:v,resultsMessage:L})}return T},[a,v,g,O,D,I,P]),B=(r==null?void 0:r.action)==="initial-input-focus",G=p.useMemo(function(){var T="";if(O.guidance){var L=e?"value":g?"menu":"input";T=O.guidance({"aria-label":C,context:L,isDisabled:o&&x(o,l),isMulti:b,isSearchable:h,tabSelectsValue:A,isInitialFocus:B})}return T},[C,o,e,b,x,h,g,O,l,A,B]),Y=S(p.Fragment,null,S("span",{id:"aria-selection"},V),S("span",{id:"aria-focused"},$),S("span",{id:"aria-results"},j),S("span",{id:"aria-guidance"},G));return S(p.Fragment,null,S(et,{id:s},B&&Y),S(et,{"aria-live":F,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!B&&Y))},Oo=Fo,Ve=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Do=new RegExp("["+Ve.map(function(n){return n.letters}).join("")+"]","g"),Vt={};for(var ye=0;ye<Ve.length;ye++)for(var Fe=Ve[ye],Oe=0;Oe<Fe.letters.length;Oe++)Vt[Fe.letters[Oe]]=Fe.base;var kt=function(t){return t.replace(Do,function(r){return Vt[r]})},Io=Co(kt),tt=function(t){return t.replace(/^\s+|\s+$/g,"")},Ao=function(t){return"".concat(t.label," ").concat(t.value)},Po=function(t){return function(r,o){if(r.data.__isNew__)return!0;var e=w({ignoreCase:!0,ignoreAccents:!0,stringify:Ao,trim:!0,matchFrom:"any"},t),a=e.ignoreCase,u=e.ignoreAccents,l=e.stringify,i=e.trim,s=e.matchFrom,c=i?tt(o):o,d=i?tt(l(r)):l(r);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=Io(c),d=kt(d)),s==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Mo=["innerRef"];function Vo(n){var t=n.innerRef,r=Z(n,Mo),o=rr(r,"onExited","in","enter","exit","appear");return S("input",y({ref:t},o,{css:Re({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var ko=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function Lo(n){var t=n.isEnabled,r=n.onBottomArrive,o=n.onBottomLeave,e=n.onTopArrive,a=n.onTopLeave,u=p.useRef(!1),l=p.useRef(!1),i=p.useRef(0),s=p.useRef(null),c=p.useCallback(function(h,g){if(s.current!==null){var D=s.current,I=D.scrollTop,A=D.scrollHeight,P=D.clientHeight,C=s.current,F=g>0,O=A-P-I,V=!1;O>g&&u.current&&(o&&o(h),u.current=!1),F&&l.current&&(a&&a(h),l.current=!1),F&&g>O?(r&&!u.current&&r(h),C.scrollTop=A,V=!0,u.current=!0):!F&&-g>I&&(e&&!l.current&&e(h),C.scrollTop=0,V=!0,l.current=!0),V&&ko(h)}},[r,o,e,a]),d=p.useCallback(function(h){c(h,h.deltaY)},[c]),f=p.useCallback(function(h){i.current=h.changedTouches[0].clientY},[]),v=p.useCallback(function(h){var g=i.current-h.changedTouches[0].clientY;c(h,g)},[c]),b=p.useCallback(function(h){if(h){var g=er?{passive:!1}:!1;h.addEventListener("wheel",d,g),h.addEventListener("touchstart",f,g),h.addEventListener("touchmove",v,g)}},[v,f,d]),x=p.useCallback(function(h){h&&(h.removeEventListener("wheel",d,!1),h.removeEventListener("touchstart",f,!1),h.removeEventListener("touchmove",v,!1))},[v,f,d]);return p.useEffect(function(){if(t){var h=s.current;return b(h),function(){x(h)}}},[t,b,x]),function(h){s.current=h}}var nt=["boxSizing","height","overflow","paddingRight","position"],rt={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function ot(n){n.preventDefault()}function it(n){n.stopPropagation()}function at(){var n=this.scrollTop,t=this.scrollHeight,r=n+this.offsetHeight;n===0?this.scrollTop=1:r===t&&(this.scrollTop=n-1)}function ut(){return"ontouchstart"in window||navigator.maxTouchPoints}var st=!!(typeof window<"u"&&window.document&&window.document.createElement),oe=0,ne={capture:!1,passive:!1};function Ro(n){var t=n.isEnabled,r=n.accountForScrollbars,o=r===void 0?!0:r,e=p.useRef({}),a=p.useRef(null),u=p.useCallback(function(i){if(st){var s=document.body,c=s&&s.style;if(o&&nt.forEach(function(b){var x=c&&c[b];e.current[b]=x}),o&&oe<1){var d=parseInt(e.current.paddingRight,10)||0,f=document.body?document.body.clientWidth:0,v=window.innerWidth-f+d||0;Object.keys(rt).forEach(function(b){var x=rt[b];c&&(c[b]=x)}),c&&(c.paddingRight="".concat(v,"px"))}s&&ut()&&(s.addEventListener("touchmove",ot,ne),i&&(i.addEventListener("touchstart",at,ne),i.addEventListener("touchmove",it,ne))),oe+=1}},[o]),l=p.useCallback(function(i){if(st){var s=document.body,c=s&&s.style;oe=Math.max(oe-1,0),o&&oe<1&&nt.forEach(function(d){var f=e.current[d];c&&(c[d]=f)}),s&&ut()&&(s.removeEventListener("touchmove",ot,ne),i&&(i.removeEventListener("touchstart",at,ne),i.removeEventListener("touchmove",it,ne)))}},[o]);return p.useEffect(function(){if(t){var i=a.current;return u(i),function(){l(i)}}},[t,u,l]),function(i){a.current=i}}var To=function(t){var r=t.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},$o={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Bo(n){var t=n.children,r=n.lockEnabled,o=n.captureEnabled,e=o===void 0?!0:o,a=n.onBottomArrive,u=n.onBottomLeave,l=n.onTopArrive,i=n.onTopLeave,s=Lo({isEnabled:e,onBottomArrive:a,onBottomLeave:u,onTopArrive:l,onTopLeave:i}),c=Ro({isEnabled:r}),d=function(v){s(v),c(v)};return S(p.Fragment,null,r&&S("div",{onClick:To,css:$o}),t(d))}var jo={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Ho=function(t){var r=t.name,o=t.onFocus;return S("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:o,css:jo,value:"",onChange:function(){}})},Wo=Ho;function We(n){var t;return typeof window<"u"&&window.navigator!=null?n.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function Uo(){return We(/^iPhone/i)}function Lt(){return We(/^Mac/i)}function No(){return We(/^iPad/i)||Lt()&&navigator.maxTouchPoints>1}function zo(){return Uo()||No()}function _o(){return Lt()||zo()}var Go=function(t){return t.label},Yo=function(t){return t.label},qo=function(t){return t.value},Xo=function(t){return!!t.isDisabled},Ko={clearIndicator:Mr,container:Er,control:Br,dropdownIndicator:Ar,group:Ur,groupHeading:zr,indicatorsContainer:yr,indicatorSeparator:kr,input:qr,loadingIndicator:Tr,loadingMessage:mr,menu:sr,menuList:pr,menuPortal:br,multiValue:Qr,multiValueLabel:eo,multiValueRemove:to,noOptionsMessage:hr,option:uo,placeholder:co,singleValue:ho,valueContainer:Sr},Zo={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Jo=4,Rt=4,Qo=38,ei=Rt*2,ti={baseUnit:Rt,controlHeight:Qo,menuGutter:ei},De={borderRadius:Jo,colors:Zo,spacing:ti},ni={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ze(),captureMenuScroll:!Ze(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Po(),formatGroupLabel:Go,getOptionLabel:Yo,getOptionValue:qo,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Xo,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Jn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var r=t.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function lt(n,t,r,o){var e=Bt(n,t,r),a=jt(n,t,r),u=$t(n,t),l=xe(n,t);return{type:"option",data:t,isDisabled:e,isSelected:a,label:u,value:l,index:o}}function fe(n,t){return n.options.map(function(r,o){if("options"in r){var e=r.options.map(function(u,l){return lt(n,u,t,l)}).filter(function(u){return dt(n,u)});return e.length>0?{type:"group",data:r,options:e,index:o}:void 0}var a=lt(n,r,t,o);return dt(n,a)?a:void 0}).filter(tr)}function Tt(n){return n.reduce(function(t,r){return r.type==="group"?t.push.apply(t,je(r.options.map(function(o){return o.data}))):t.push(r.data),t},[])}function ct(n,t){return n.reduce(function(r,o){return o.type==="group"?r.push.apply(r,je(o.options.map(function(e){return{data:e.data,id:"".concat(t,"-").concat(o.index,"-").concat(e.index)}}))):r.push({data:o.data,id:"".concat(t,"-").concat(o.index)}),r},[])}function ri(n,t){return Tt(fe(n,t))}function dt(n,t){var r=n.inputValue,o=r===void 0?"":r,e=t.data,a=t.isSelected,u=t.label,l=t.value;return(!Wt(n)||!a)&&Ht(n,{label:u,value:l,data:e},o)}function oi(n,t){var r=n.focusedValue,o=n.selectValue,e=o.indexOf(r);if(e>-1){var a=t.indexOf(r);if(a>-1)return r;if(e<t.length)return t[e]}return null}function ii(n,t){var r=n.focusedOption;return r&&t.indexOf(r)>-1?r:t[0]}var Ie=function(t,r){var o,e=(o=t.find(function(a){return a.data===r}))===null||o===void 0?void 0:o.id;return e||null},$t=function(t,r){return t.getOptionLabel(r)},xe=function(t,r){return t.getOptionValue(r)};function Bt(n,t,r){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(t,r):!1}function jt(n,t,r){if(r.indexOf(t)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(t,r);var o=xe(n,t);return r.some(function(e){return xe(n,e)===o})}function Ht(n,t,r){return n.filterOption?n.filterOption(t,r):!0}var Wt=function(t){var r=t.hideSelectedOptions,o=t.isMulti;return r===void 0?o:r},ai=1,Ut=function(n){vn(r,n);var t=bn(r);function r(o){var e;if(xn(this,r),e=t.call(this,o),e.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},e.blockOptionHover=!1,e.isComposing=!1,e.commonProps=void 0,e.initialTouchX=0,e.initialTouchY=0,e.openAfterFocus=!1,e.scrollToFocusedOptionOnUpdate=!1,e.userIsDragging=void 0,e.isAppleDevice=_o(),e.controlRef=null,e.getControlRef=function(i){e.controlRef=i},e.focusedOptionRef=null,e.getFocusedOptionRef=function(i){e.focusedOptionRef=i},e.menuListRef=null,e.getMenuListRef=function(i){e.menuListRef=i},e.inputRef=null,e.getInputRef=function(i){e.inputRef=i},e.focus=e.focusInput,e.blur=e.blurInput,e.onChange=function(i,s){var c=e.props,d=c.onChange,f=c.name;s.name=f,e.ariaOnChange(i,s),d(i,s)},e.setValue=function(i,s,c){var d=e.props,f=d.closeMenuOnSelect,v=d.isMulti,b=d.inputValue;e.onInputChange("",{action:"set-value",prevInputValue:b}),f&&(e.setState({inputIsHiddenAfterUpdate:!v}),e.onMenuClose()),e.setState({clearFocusValueOnUpdate:!0}),e.onChange(i,{action:s,option:c})},e.selectOption=function(i){var s=e.props,c=s.blurInputOnSelect,d=s.isMulti,f=s.name,v=e.state.selectValue,b=d&&e.isOptionSelected(i,v),x=e.isOptionDisabled(i,v);if(b){var h=e.getOptionValue(i);e.setValue(v.filter(function(g){return e.getOptionValue(g)!==h}),"deselect-option",i)}else if(!x)d?e.setValue([].concat(je(v),[i]),"select-option",i):e.setValue(i,"select-option");else{e.ariaOnChange(i,{action:"select-option",option:i,name:f});return}c&&e.blurInput()},e.removeValue=function(i){var s=e.props.isMulti,c=e.state.selectValue,d=e.getOptionValue(i),f=c.filter(function(b){return e.getOptionValue(b)!==d}),v=pe(s,f,f[0]||null);e.onChange(v,{action:"remove-value",removedValue:i}),e.focusInput()},e.clearValue=function(){var i=e.state.selectValue;e.onChange(pe(e.props.isMulti,[],null),{action:"clear",removedValues:i})},e.popValue=function(){var i=e.props.isMulti,s=e.state.selectValue,c=s[s.length-1],d=s.slice(0,s.length-1),f=pe(i,d,d[0]||null);e.onChange(f,{action:"pop-value",removedValue:c})},e.getFocusedOptionId=function(i){return Ie(e.state.focusableOptionsWithIds,i)},e.getFocusableOptionsWithIds=function(){return ct(fe(e.props,e.state.selectValue),e.getElementId("option"))},e.getValue=function(){return e.state.selectValue},e.cx=function(){for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return Yn.apply(void 0,[e.props.classNamePrefix].concat(s))},e.getOptionLabel=function(i){return $t(e.props,i)},e.getOptionValue=function(i){return xe(e.props,i)},e.getStyles=function(i,s){var c=e.props.unstyled,d=Ko[i](s,c);d.boxSizing="border-box";var f=e.props.styles[i];return f?f(d,s):d},e.getClassNames=function(i,s){var c,d;return(c=(d=e.props.classNames)[i])===null||c===void 0?void 0:c.call(d,s)},e.getElementId=function(i){return"".concat(e.state.instancePrefix,"-").concat(i)},e.getComponents=function(){return bo(e.props)},e.buildCategorizedOptions=function(){return fe(e.props,e.state.selectValue)},e.getCategorizedOptions=function(){return e.props.menuIsOpen?e.buildCategorizedOptions():[]},e.buildFocusableOptions=function(){return Tt(e.buildCategorizedOptions())},e.getFocusableOptions=function(){return e.props.menuIsOpen?e.buildFocusableOptions():[]},e.ariaOnChange=function(i,s){e.setState({ariaSelection:w({value:i},s)})},e.onMenuMouseDown=function(i){i.button===0&&(i.stopPropagation(),i.preventDefault(),e.focusInput())},e.onMenuMouseMove=function(i){e.blockOptionHover=!1},e.onControlMouseDown=function(i){if(!i.defaultPrevented){var s=e.props.openMenuOnClick;e.state.isFocused?e.props.menuIsOpen?i.target.tagName!=="INPUT"&&i.target.tagName!=="TEXTAREA"&&e.onMenuClose():s&&e.openMenu("first"):(s&&(e.openAfterFocus=!0),e.focusInput()),i.target.tagName!=="INPUT"&&i.target.tagName!=="TEXTAREA"&&i.preventDefault()}},e.onDropdownIndicatorMouseDown=function(i){if(!(i&&i.type==="mousedown"&&i.button!==0)&&!e.props.isDisabled){var s=e.props,c=s.isMulti,d=s.menuIsOpen;e.focusInput(),d?(e.setState({inputIsHiddenAfterUpdate:!c}),e.onMenuClose()):e.openMenu("first"),i.preventDefault()}},e.onClearIndicatorMouseDown=function(i){i&&i.type==="mousedown"&&i.button!==0||(e.clearValue(),i.preventDefault(),e.openAfterFocus=!1,i.type==="touchend"?e.focusInput():setTimeout(function(){return e.focusInput()}))},e.onScroll=function(i){typeof e.props.closeMenuOnScroll=="boolean"?i.target instanceof HTMLElement&&Ee(i.target)&&e.props.onMenuClose():typeof e.props.closeMenuOnScroll=="function"&&e.props.closeMenuOnScroll(i)&&e.props.onMenuClose()},e.onCompositionStart=function(){e.isComposing=!0},e.onCompositionEnd=function(){e.isComposing=!1},e.onTouchStart=function(i){var s=i.touches,c=s&&s.item(0);c&&(e.initialTouchX=c.clientX,e.initialTouchY=c.clientY,e.userIsDragging=!1)},e.onTouchMove=function(i){var s=i.touches,c=s&&s.item(0);if(c){var d=Math.abs(c.clientX-e.initialTouchX),f=Math.abs(c.clientY-e.initialTouchY),v=5;e.userIsDragging=d>v||f>v}},e.onTouchEnd=function(i){e.userIsDragging||(e.controlRef&&!e.controlRef.contains(i.target)&&e.menuListRef&&!e.menuListRef.contains(i.target)&&e.blurInput(),e.initialTouchX=0,e.initialTouchY=0)},e.onControlTouchEnd=function(i){e.userIsDragging||e.onControlMouseDown(i)},e.onClearIndicatorTouchEnd=function(i){e.userIsDragging||e.onClearIndicatorMouseDown(i)},e.onDropdownIndicatorTouchEnd=function(i){e.userIsDragging||e.onDropdownIndicatorMouseDown(i)},e.handleInputChange=function(i){var s=e.props.inputValue,c=i.currentTarget.value;e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange(c,{action:"input-change",prevInputValue:s}),e.props.menuIsOpen||e.onMenuOpen()},e.onInputFocus=function(i){e.props.onFocus&&e.props.onFocus(i),e.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(e.openAfterFocus||e.props.openMenuOnFocus)&&e.openMenu("first"),e.openAfterFocus=!1},e.onInputBlur=function(i){var s=e.props.inputValue;if(e.menuListRef&&e.menuListRef.contains(document.activeElement)){e.inputRef.focus();return}e.props.onBlur&&e.props.onBlur(i),e.onInputChange("",{action:"input-blur",prevInputValue:s}),e.onMenuClose(),e.setState({focusedValue:null,isFocused:!1})},e.onOptionHover=function(i){if(!(e.blockOptionHover||e.state.focusedOption===i)){var s=e.getFocusableOptions(),c=s.indexOf(i);e.setState({focusedOption:i,focusedOptionId:c>-1?e.getFocusedOptionId(i):null})}},e.shouldHideSelectedOptions=function(){return Wt(e.props)},e.onValueInputFocus=function(i){i.preventDefault(),i.stopPropagation(),e.focus()},e.onKeyDown=function(i){var s=e.props,c=s.isMulti,d=s.backspaceRemovesValue,f=s.escapeClearsValue,v=s.inputValue,b=s.isClearable,x=s.isDisabled,h=s.menuIsOpen,g=s.onKeyDown,D=s.tabSelectsValue,I=s.openMenuOnFocus,A=e.state,P=A.focusedOption,C=A.focusedValue,F=A.selectValue;if(!x&&!(typeof g=="function"&&(g(i),i.defaultPrevented))){switch(e.blockOptionHover=!0,i.key){case"ArrowLeft":if(!c||v)return;e.focusValue("previous");break;case"ArrowRight":if(!c||v)return;e.focusValue("next");break;case"Delete":case"Backspace":if(v)return;if(C)e.removeValue(C);else{if(!d)return;c?e.popValue():b&&e.clearValue()}break;case"Tab":if(e.isComposing||i.shiftKey||!h||!D||!P||I&&e.isOptionSelected(P,F))return;e.selectOption(P);break;case"Enter":if(i.keyCode===229)break;if(h){if(!P||e.isComposing)return;e.selectOption(P);break}return;case"Escape":h?(e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange("",{action:"menu-close",prevInputValue:v}),e.onMenuClose()):b&&f&&e.clearValue();break;case" ":if(v)return;if(!h){e.openMenu("first");break}if(!P)return;e.selectOption(P);break;case"ArrowUp":h?e.focusOption("up"):e.openMenu("last");break;case"ArrowDown":h?e.focusOption("down"):e.openMenu("first");break;case"PageUp":if(!h)return;e.focusOption("pageup");break;case"PageDown":if(!h)return;e.focusOption("pagedown");break;case"Home":if(!h)return;e.focusOption("first");break;case"End":if(!h)return;e.focusOption("last");break;default:return}i.preventDefault()}},e.state.instancePrefix="react-select-"+(e.props.instanceId||++ai),e.state.selectValue=Xe(o.value),o.menuIsOpen&&e.state.selectValue.length){var a=e.getFocusableOptionsWithIds(),u=e.buildFocusableOptions(),l=u.indexOf(e.state.selectValue[0]);e.state.focusableOptionsWithIds=a,e.state.focusedOption=u[l],e.state.focusedOptionId=Ie(a,u[l])}return e}return En(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Ke(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(e){var a=this.props,u=a.isDisabled,l=a.menuIsOpen,i=this.state.isFocused;(i&&!u&&e.isDisabled||i&&l&&!e.menuIsOpen)&&this.focusInput(),i&&u&&!e.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!i&&!u&&e.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Ke(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(e,a){this.props.onInputChange(e,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(e){var a=this,u=this.state,l=u.selectValue,i=u.isFocused,s=this.buildFocusableOptions(),c=e==="first"?0:s.length-1;if(!this.props.isMulti){var d=s.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(i&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:s[c],focusedOptionId:this.getFocusedOptionId(s[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(e){var a=this.state,u=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var i=u.indexOf(l);l||(i=-1);var s=u.length-1,c=-1;if(u.length){switch(e){case"previous":i===0?c=0:i===-1?c=s:c=i-1;break;case"next":i>-1&&i<s&&(c=i+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var i=0,s=l.indexOf(u);u||(s=-1),e==="up"?i=s>0?s-1:l.length-1:e==="down"?i=(s+1)%l.length:e==="pageup"?(i=s-a,i<0&&(i=0)):e==="pagedown"?(i=s+a,i>l.length-1&&(i=l.length-1)):e==="last"&&(i=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[i],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[i])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(De):w(w({},De),this.props.theme):De}},{key:"getCommonProps",value:function(){var e=this.clearValue,a=this.cx,u=this.getStyles,l=this.getClassNames,i=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,f=d.isMulti,v=d.isRtl,b=d.options,x=this.hasValue();return{clearValue:e,cx:a,getStyles:u,getClassNames:l,getValue:i,hasValue:x,isMulti:f,isRtl:v,options:b,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var e=this.state.selectValue;return e.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var e=this.props,a=e.isClearable,u=e.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(e,a){return Bt(this.props,e,a)}},{key:"isOptionSelected",value:function(e,a){return jt(this.props,e,a)}},{key:"filterOption",value:function(e,a){return Ht(this.props,e,a)}},{key:"formatOptionLabel",value:function(e,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(e,{context:a,inputValue:u,selectValue:l})}else return this.getOptionLabel(e)}},{key:"formatGroupLabel",value:function(e){return this.props.formatGroupLabel(e)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var e=this.props,a=e.isDisabled,u=e.isSearchable,l=e.inputId,i=e.inputValue,s=e.tabIndex,c=e.form,d=e.menuIsOpen,f=e.required,v=this.getComponents(),b=v.Input,x=this.state,h=x.inputIsHidden,g=x.ariaSelection,D=this.commonProps,I=l||this.getElementId("input"),A=w(w(w({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":f,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(g==null?void 0:g.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?p.createElement(b,y({},D,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:I,innerRef:this.getInputRef,isDisabled:a,isHidden:h,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:s,form:c,type:"text",value:i},A)):p.createElement(Vo,y({id:I,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ve,onFocus:this.onInputFocus,disabled:a,tabIndex:s,inputMode:"none",form:c,value:""},A))}},{key:"renderPlaceholderOrValue",value:function(){var e=this,a=this.getComponents(),u=a.MultiValue,l=a.MultiValueContainer,i=a.MultiValueLabel,s=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,f=this.commonProps,v=this.props,b=v.controlShouldRenderValue,x=v.isDisabled,h=v.isMulti,g=v.inputValue,D=v.placeholder,I=this.state,A=I.selectValue,P=I.focusedValue,C=I.isFocused;if(!this.hasValue()||!b)return g?null:p.createElement(d,y({},f,{key:"placeholder",isDisabled:x,isFocused:C,innerProps:{id:this.getElementId("placeholder")}}),D);if(h)return A.map(function(O,V){var $=O===P,j="".concat(e.getOptionLabel(O),"-").concat(e.getOptionValue(O));return p.createElement(u,y({},f,{components:{Container:l,Label:i,Remove:s},isFocused:$,isDisabled:x,key:j,index:V,removeProps:{onClick:function(){return e.removeValue(O)},onTouchEnd:function(){return e.removeValue(O)},onMouseDown:function(G){G.preventDefault()}},data:O}),e.formatOptionLabel(O,"value"))});if(g)return null;var F=A[0];return p.createElement(c,y({},f,{data:F,isDisabled:x}),this.formatOptionLabel(F,"value"))}},{key:"renderClearIndicator",value:function(){var e=this.getComponents(),a=e.ClearIndicator,u=this.commonProps,l=this.props,i=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||i||!this.hasValue()||s)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,y({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var e=this.getComponents(),a=e.LoadingIndicator,u=this.commonProps,l=this.props,i=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!a||!s)return null;var d={"aria-hidden":"true"};return p.createElement(a,y({},u,{innerProps:d,isDisabled:i,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator,u=e.IndicatorSeparator;if(!a||!u)return null;var l=this.commonProps,i=this.props.isDisabled,s=this.state.isFocused;return p.createElement(u,y({},l,{isDisabled:i,isFocused:s}))}},{key:"renderDropdownIndicator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator;if(!a)return null;var u=this.commonProps,l=this.props.isDisabled,i=this.state.isFocused,s={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,y({},u,{innerProps:s,isDisabled:l,isFocused:i}))}},{key:"renderMenu",value:function(){var e=this,a=this.getComponents(),u=a.Group,l=a.GroupHeading,i=a.Menu,s=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,f=a.NoOptionsMessage,v=a.Option,b=this.commonProps,x=this.state.focusedOption,h=this.props,g=h.captureMenuScroll,D=h.inputValue,I=h.isLoading,A=h.loadingMessage,P=h.minMenuHeight,C=h.maxMenuHeight,F=h.menuIsOpen,O=h.menuPlacement,V=h.menuPosition,$=h.menuPortalTarget,j=h.menuShouldBlockScroll,B=h.menuShouldScrollIntoView,G=h.noOptionsMessage,Y=h.onMenuScrollToTop,T=h.onMenuScrollToBottom;if(!F)return null;var L=function(H,q){var ee=H.type,U=H.data,te=H.isDisabled,X=H.isSelected,se=H.label,zt=H.value,Ue=x===U,Ne=te?void 0:function(){return e.onOptionHover(U)},_t=te?void 0:function(){return e.selectOption(U)},ze="".concat(e.getElementId("option"),"-").concat(q),Gt={id:ze,onClick:_t,onMouseMove:Ne,onMouseOver:Ne,tabIndex:-1,role:"option","aria-selected":e.isAppleDevice?void 0:X};return p.createElement(v,y({},b,{innerProps:Gt,data:U,isDisabled:te,isSelected:X,key:ze,label:se,type:ee,value:zt,isFocused:Ue,innerRef:Ue?e.getFocusedOptionRef:void 0}),e.formatOptionLabel(H.data,"menu"))},z;if(this.hasOptions())z=this.getCategorizedOptions().map(function(R){if(R.type==="group"){var H=R.data,q=R.options,ee=R.index,U="".concat(e.getElementId("group"),"-").concat(ee),te="".concat(U,"-heading");return p.createElement(u,y({},b,{key:U,data:H,options:q,Heading:l,headingProps:{id:te,data:R.data},label:e.formatGroupLabel(R.data)}),R.options.map(function(X){return L(X,"".concat(ee,"-").concat(X.index))}))}else if(R.type==="option")return L(R,"".concat(R.index))});else if(I){var W=A({inputValue:D});if(W===null)return null;z=p.createElement(d,b,W)}else{var J=G({inputValue:D});if(J===null)return null;z=p.createElement(f,b,J)}var Q={minMenuHeight:P,maxMenuHeight:C,menuPlacement:O,menuPosition:V,menuShouldScrollIntoView:B},ue=p.createElement(lr,y({},b,Q),function(R){var H=R.ref,q=R.placerProps,ee=q.placement,U=q.maxHeight;return p.createElement(i,y({},b,Q,{innerRef:H,innerProps:{onMouseDown:e.onMenuMouseDown,onMouseMove:e.onMenuMouseMove},isLoading:I,placement:ee}),p.createElement(Bo,{captureEnabled:g,onTopArrive:Y,onBottomArrive:T,lockEnabled:j},function(te){return p.createElement(s,y({},b,{innerRef:function(se){e.getMenuListRef(se),te(se)},innerProps:{role:"listbox","aria-multiselectable":b.isMulti,id:e.getElementId("listbox")},isLoading:I,maxHeight:U,focusedOption:x}),z)}))});return $||V==="fixed"?p.createElement(c,y({},b,{appendTo:$,controlElement:this.controlRef,menuPlacement:O,menuPosition:V}),ue):ue}},{key:"renderFormField",value:function(){var e=this,a=this.props,u=a.delimiter,l=a.isDisabled,i=a.isMulti,s=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return p.createElement(Wo,{name:s,onFocus:this.onValueInputFocus});if(!(!s||l))if(i)if(u){var f=d.map(function(x){return e.getOptionValue(x)}).join(u);return p.createElement("input",{name:s,type:"hidden",value:f})}else{var v=d.length>0?d.map(function(x,h){return p.createElement("input",{key:"i-".concat(h),name:s,type:"hidden",value:e.getOptionValue(x)})}):p.createElement("input",{name:s,type:"hidden",value:""});return p.createElement("div",null,v)}else{var b=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:s,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var e=this.commonProps,a=this.state,u=a.ariaSelection,l=a.focusedOption,i=a.focusedValue,s=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(Oo,y({},e,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:l,focusedValue:i,isFocused:s,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var e=this.getComponents(),a=e.Control,u=e.IndicatorsContainer,l=e.SelectContainer,i=e.ValueContainer,s=this.props,c=s.className,d=s.id,f=s.isDisabled,v=s.menuIsOpen,b=this.state.isFocused,x=this.commonProps=this.getCommonProps();return p.createElement(l,y({},x,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:f,isFocused:b}),this.renderLiveRegion(),p.createElement(a,y({},x,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:f,isFocused:b,menuIsOpen:v}),p.createElement(i,y({},x,{isDisabled:f}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(u,y({},x,{isDisabled:f}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(e,a){var u=a.prevProps,l=a.clearFocusValueOnUpdate,i=a.inputIsHiddenAfterUpdate,s=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,f=a.instancePrefix,v=e.options,b=e.value,x=e.menuIsOpen,h=e.inputValue,g=e.isMulti,D=Xe(b),I={};if(u&&(b!==u.value||v!==u.options||x!==u.menuIsOpen||h!==u.inputValue)){var A=x?ri(e,D):[],P=x?ct(fe(e,D),"".concat(f,"-option")):[],C=l?oi(a,D):null,F=ii(a,A),O=Ie(P,F);I={selectValue:D,focusedOption:F,focusedOptionId:O,focusableOptionsWithIds:P,focusedValue:C,clearFocusValueOnUpdate:!1}}var V=i!=null&&e!==u?{inputIsHidden:i,inputIsHiddenAfterUpdate:void 0}:{},$=s,j=c&&d;return c&&!j&&($={value:pe(g,D,D[0]||null),options:D,action:"initial-input-focus"},j=!d),(s==null?void 0:s.action)==="initial-input-focus"&&($=null),w(w(w({},I),V),{},{prevProps:e,ariaSelection:$,prevWasFocused:j})}}]),r}(p.Component);Ut.defaultProps=ni;var ui=p.forwardRef(function(n,t){var r=Hn(n);return p.createElement(Ut,y({ref:t},r))}),pt=ui;let ft=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((t,r)=>(r&=63,r<36?t+=r.toString(36):r<62?t+=(r-26).toString(36).toUpperCase():r>62?t+="-":t+="_",t),"");const si=M.form`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
    &:before {
      content: 'Filters';
      position: absolute;
      top: -24px;
      right: 0;
      color: rgba(239, 237, 232, 0.5);
      font-size: 14px;
      line-height: 1.2857;
      word-wrap: break-word;
    }
  }
`,li=M.div`
  position: relative;
`,ci=M.input`
  width: 100%;
  padding: 14px 68px 14px 14px;
  height: 46px;
  border-radius: 12px;
  border: 1px solid ${E.colorInput};
  background: transparent;
  color: ${E.colorWhite};
  font-size: 14px;
  line-height: 1.42857;

  ::placeholder {
    color: ${E.colorWhite};
    font-size: 14px;
    line-height: 1.42857;
    font-weight: 400;
    word-wrap: break-word;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 1.5;
    }
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus,
  &:active {
    border: 1px solid ${E.colorOrange};
  }

  @media (min-width: 768px) {
    width: 236px;
    height: 52px;
    font-size: 16px;
    line-height: 1.5;
  }
`,di=M.div`
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    display: block;
    width: 18px;
    height: 18px;
    padding: 0;
    margin: 0;
    border: none;
    background: transparent;

    &:hover > svg {
      stroke: ${E.colorBeige};
    }
  }
`,pi=M.svg`
  stroke: ${E.colorWhite};
  transition: stroke 0.3s ease;
`,fi=M.svg`
  stroke: ${E.colorOrange};
  transition: stroke 0.3s ease;
`,hi=M.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,mi={singleValue:n=>({...n,color:`${E.colorWhite}`}),control:(n,{isSelected:t})=>({...n,display:"flex",color:t?`${E.colorBeige}`:`${E.colorWhite}`,backgroundColor:"transparent",width:"146px",borderRadius:"12px",padding:"14px",lineHeight:"1.2857",fontSize:"14px",fontWeight:"400",outline:"none",border:`1px solid ${E.colorInput}`,boxShadow:"none",cursor:"pointer",wordWrap:"break-word",":hover":{border:`1px solid ${E.colorOrange}`},":active":{border:`1px solid ${E.colorOrange}`},":focus":{outline:"none",border:`1px solid ${E.colorOrange}`},"@media (min-width: 768px)":{fontSize:"16px",lineHeight:"1.5",width:"192px",height:"52px"},"@media (max-width: 375px)":{width:"88vw"}}),option:(n,{isHover:t,isDisabled:r,isFocused:o,isSelected:e})=>({...n,color:e?`${E.colorOrange1}`:o?`${E.colorBeige}`:t?`${E.colorBeige}`:`${E.colorWhite}`,fontSize:"14px",fontWeight:"400",lineHeight:"1.2857",cursor:"pointer",backgroundColor:r?"none":e?`${E.colorInput}`:"transparent",":active":{...n[":active"],backgroundColor:e?`${E.colorInput}`:"none"}}),menu:n=>({...n,backgroundColor:"#1C1C1C",padding:"14px",borderRadius:"12px",border:"none"}),menuList:n=>({...n,boxSizing:"content-box","&::-webkit-scrollbar":{width:"6px",position:"relative"},"&::-webkit-scrollbar-thumb":{borderRadius:"12px",background:"rgba(239, 237, 232, 0.1)"},"&::-webkit-scrollbar-track":{background:"transparent"}}),indicatorSeparator:()=>({display:"none"}),valueContainer:n=>({...n,padding:"0px",margin:"0px"}),clearIndicator:n=>({...n,padding:0,color:`${E.colorOrange}`,cursor:"pointer"}),dropdownIndicator:(n,t)=>({...n,padding:0,color:`${E.colorWhite}`,transition:"all .3s ease",transform:t.selectProps.menuIsOpen?"rotate(180deg)":null}),placeholder:n=>({...n,color:`${E.colorWhite}`})},gi={singleValue:n=>({...n,color:`${E.colorWhite}`}),control:(n,{isSelected:t})=>({...n,display:"flex",color:t?`${E.colorBeige}`:`${E.colorWhite}`,backgroundColor:"transparent",width:"173px",borderRadius:"12px",padding:"14px",lineHeight:"1.2857",fontSize:"14px",fontWeight:"400",outline:"none",border:`1px solid ${E.colorInput}`,boxShadow:"none",cursor:"pointer",wordWrap:"break-word",":hover":{border:`1px solid ${E.colorOrange}`},":active":{border:`1px solid ${E.colorOrange}`},":focus":{outline:"none",border:`1px solid ${E.colorOrange}`},"@media (min-width: 768px)":{fontSize:"16px",lineHeight:"1.5",width:"204px",height:"52px"},"@media (max-width: 375px)":{width:"88vw"}}),option:(n,{isHover:t,isDisabled:r,isFocused:o,isSelected:e})=>({...n,color:e?`${E.colorOrange1}`:o?`${E.colorBeige}`:t?`${E.colorBeige}`:`${E.colorWhite}`,fontSize:"14px",fontWeight:"400",lineHeight:"1.2857",cursor:"pointer",backgroundColor:r?"none":e?`${E.colorInput}`:"transparent",":active":{...n[":active"],backgroundColor:e?`${E.colorInput}`:"transparent"}}),menu:n=>({...n,backgroundColor:"#1C1C1C",padding:"14px",borderRadius:"12px",border:"none"}),menuList:n=>({...n,boxSizing:"content-box","&::-webkit-scrollbar":{width:"6px",position:"relative"},"&::-webkit-scrollbar-thumb":{borderRadius:"12px",background:"rgba(239, 237, 232, 0.1)"},"&::-webkit-scrollbar-track":{background:"transparent"}}),indicatorSeparator:()=>({display:"none"}),valueContainer:n=>({...n,padding:"0px",margin:"0px"}),clearIndicator:n=>({...n,padding:0,color:`${E.colorOrange}`,cursor:"pointer"}),dropdownIndicator:(n,t)=>({...n,padding:0,color:`${E.colorWhite}`,transition:"all .3s ease",transform:t.selectProps.menuIsOpen?"rotate(180deg)":null}),placeholder:n=>({...n,color:`${E.colorWhite}`})},vi=M.p`
  display: flex;
  color: ${E.colorSecondaryRed};
  font-size: 12px;
  margin: 0;
  line-height: 1.5;
  position: absolute;
  word-wrap: break-word;

  > svg {
    width: 16px;
    height: 16px;
    fill: ${E.colorOrange};
  }
`,bi=({categories:n})=>{const t=ke(),[r,o]=p.useState(!1),[e,a]=p.useState(""),[u,l]=p.useState(!1),[i,s]=p.useState(""),[c,d]=p.useState(null),[f,v]=p.useState(null),b=n.map(C=>C[0].toUpperCase()+C.slice(1).toLowerCase()),x=C=>[...C.map(F=>({value:F,label:F}))],h=[{value:"all",label:"All"},{value:"recommended",label:"Recommended"},{value:"not-recommended",label:"Not recommended"}],g=C=>{C&&C.preventDefault();const F={title:i||"",category:c||null,filter:f||"all"};if(!(i.length<=40))a(`Please enter up to 30 characters, now ${i.length}`),l(!0);else{a(""),l(!1);try{t(ie(F))}catch{toast.error("Sorry, something went wrong, please try again",{theme:"dark"})}}},D=C=>{const F=C.target.value;o(F.length>0),s(F)},I=()=>{o(!1),s(""),t(ie({title:"",category:c||null,filter:f||"all"}))},A=C=>{const F=C?C.value:null;d(F),t(ie({title:i||"",category:F,filter:f||"all"}))},P=C=>{const F=C?C.value.toLowerCase():"all";v(F),t(ie({title:i||"",category:c||null,filter:F}))};return m.jsxs(m.Fragment,{children:[m.jsxs(si,{onSubmit:g,noValidate:!0,children:[m.jsxs(li,{children:[m.jsx(ci,{type:"text",name:"title",placeholder:"Search",value:i,onChange:D}),m.jsxs(di,{children:[r&&m.jsx("button",{type:"button",onClick:I,children:m.jsx(fi,{children:m.jsx("use",{href:_+"#icon-x"})})}),m.jsx("button",{type:"submit",children:m.jsx(pi,{children:m.jsx("use",{href:_+"#icon-search"})})})]}),u&&m.jsxs(vi,{children:[m.jsx("svg",{children:m.jsx("use",{href:_+"#icon-checkbox-circle-fill"})}),e]})]}),m.jsxs(hi,{children:[m.jsx(pt,{id:ft(),options:x(b),value:x(b).find(C=>C.value===c),isSearchable:!1,isMulti:!1,isClearable:!0,onChange:A,placeholder:"Categories",styles:mi}),m.jsx(pt,{id:ft(),options:h,value:h.find(C=>C.value===f),isSearchable:!1,isMulti:!1,isClearable:!0,onChange:P,placeholder:"All",styles:gi})]})]}),m.jsx(p.Suspense,{fallback:m.jsx(Le,{}),children:m.jsx(Qt,{})})]})},xi=M.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 22px;
  height: 22px;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;

  @media (min-width: 768px) {
    top: 16px;
    right: 16px;
    width: 26px;
    height: 26px;
  }

  > svg {
    stroke: ${E.colorWhite};
    transition: stroke 0.3s ease;
  }

  &:hover {
    > svg {
      stroke: ${E.colorOrange};
    }
  }
`,Ei=({isOpen:n,onRequestClose:t,children:r})=>{const[o,e]=p.useState(n);p.useEffect(()=>(o?document.body.style.overflow="hidden":document.body.style.overflow="visible",()=>{document.body.style.overflow="visible"}),[o]);const a=()=>{e(!1),t&&t()},u={overlay:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(18, 20, 23, 0.50)",zIndex:1e3,overflow:"auto"},content:{maxWidth:"fit-content",maxHeight:"fit-content",margin:"auto",overflow:"auto",inset:0,border:"none",background:"none",padding:0}};return m.jsxs(en,{isOpen:o,onRequestClose:a,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,ariaHideApp:!1,style:u,children:[m.jsx(xi,{type:"button",onClick:a,children:m.jsx("svg",{children:m.jsx("use",{href:_+"#icon-x"})})}),r]})},Ci="/PowerPulse/assets/avocado-46dd5bc9.png",Si=M.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 335px;
  height: 362px;
  padding: 48px;
  background: #10100f;
  border-radius: 12px;
  overflow: hidden;
  border: 1px rgba(239, 237, 232, 0.2) solid;
  text-align: center;

  @media (max-width: 335px) {
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  @media (min-width: 768px) {
    width: 430px;
    height: 428px;
    padding: 64px;
  }
`,wi=M.div`
  margin: 0 auto 3px;
  width: 123px;
  height: 97px;
  background: url(${Ci});

  @media (min-width: 768px) {
    margin-bottom: 19px;
  }
`,yi=M.h4`
  margin: 0 auto 16px;
  color: ${E.colorWhite};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
  word-wrap: break-word;
`,Fi=M.p`
  color: ${E.colorOrange};
  line-height: 1.2857;
  word-wrap: break-word;
  > span {
    color: rgba(239, 237, 232, 0.3);
  }
`,Oi=M.button`
  cursor: pointer;
  display: block;
  margin: 32px auto 16px;
  width: 157px;
  height: 42px;
  background-color: ${E.colorOrange};
  border-radius: 12px;
  color: ${E.colorWhite};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.125;
  word-wrap: break-word;
  outline: none;
  border: transparent;

  @media (min-width: 768px) {
    height: 52px;
  }

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${E.colorOrange1};
  }
`,Di=M(tn)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${E.colorInput};
  line-height: 1.2357;
  word-wrap: break-word;
  transition: color 0.3s ease;

  > svg {
    stroke: ${E.colorInput};
    width: 16px;
    height: 16px;
    transition: stroke 0.3s ease;
  }

  &:hover {
    color: ${E.colorOrange1};
    > svg {
      stroke: ${E.colorOrange1};
      width: 16px;
      height: 16px;
    }
  }
`,Ii=({calories:n,closeModalAddProductSuccess:t})=>m.jsxs(Si,{children:[m.jsx(wi,{}),m.jsx(yi,{children:"Well done"}),m.jsxs(Fi,{children:[m.jsx("span",{children:"Calories: "}),n]}),m.jsx(Oi,{type:"button",onClick:t,children:"Next product"}),m.jsxs(Di,{to:"/diary",onClick:t,children:["To the diary",m.jsx("svg",{children:m.jsx("use",{href:_+"#icon-arrow"})})]})]}),Ai=M.form`
  width: 335px;
  height: 280px;
  padding: 48px 24px;
  background: #10100f;
  border-radius: 12px;
  overflow: hidden;
  border: 1px rgba(239, 237, 232, 0.2) solid;

  @media (max-width: 335px) {
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  @media (min-width: 768px) {
    width: 479px;
    height: 286px;
    padding: 48px 32px;
  }
`,Pi=M.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,Mi=M.h4`
  padding: 8px 14px;
  height: 34px;
  width: 100%;
  align-self: flex-start;
  color: ${E.colorInput};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2857;
  word-wrap: break-word;
  border-radius: 12px;
  border: 1px #e6533c solid;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    width: 216px;
    height: 40px;
    font-size: 16px;
    line-height: 1.5;
  }
`,Vi=M.div`
  position: relative;
  height: 34px;

  @media (min-width: 768px) {
    width: 155px;
    height: 40px;
  }
`,ki=M.input`
  width: 100%;
  padding: 8px 14px;
  height: 100%;
  border-radius: 12px;
  border: 1px solid ${E.colorOrange};
  background: transparent;
  color: ${E.colorWhite};
  font-size: 14px;
  line-height: 1.2857;
  word-wrap: break-word;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: rgba(239, 237, 232, 0.4);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`,Li=M.label`
  position: absolute;
  top: 8px;
  right: 14px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 1.5;
  word-wrap: break-word;

  @media (min-width: 768px) {
    top: 10px;
  }
`,Ri=M.p`
  display: flex;
  color: ${E.colorSecondaryRed};
  font-size: 12px;
  margin: 0;
  line-height: 1.5;
  position: absolute;
  word-wrap: break-word;

  > svg {
    width: 16px;
    height: 16px;
    fill: ${E.colorSecondaryRed};
  }
`,ht=M.p`
  color: ${E.colorWhite};
  line-height: 1.5;
  font-size: 12px;
  word-wrap: break-word;
  margin-top: 16px;

  > span {
    color: rgba(239, 237, 232, 0.4);
  }
`,Ti=M.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 24px;

  > button {
    cursor: pointer;
    display: block;
    border-radius: 12px;
    color: ${E.colorWhite};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.125;
    word-wrap: break-word;
    outline: none;
    height: 42px;

    @media (min-width: 768px) {
      line-height: 1.5;
      height: 52px;
    }
  }

  @media (min-width: 768px) {
    margin-top: 64px;
  }
`,$i=M.button`
  max-width: 151px;
  background-color: ${E.colorOrange};
  border: transparent;
  padding: 12px 32px;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${E.colorOrange1};
  }
`,Bi=M.button`
  max-width: 121px;
  background-color: transparent;
  border: 1px ${E.colorInput} solid;
  padding: 12px 34px;

  @media (min-width: 768px) {
    width: 142px;
  }

  transition: border0.3s ease;

  &:hover {
    border: 1px ${E.colorOrange1} solid;
  }
`,ji=({closeModallAddProductForm:n,onClick:t,productTitle:r,calories:o,productId:e})=>{const a=ke(),u=re(Cn),[l,i]=p.useState({product:"",date:"",amount:"",calories:""}),[s,c]=p.useState(""),[d,f]=p.useState(""),[v,b]=p.useState(!1),h=Sn(new Date),g=r[0].toUpperCase()+r.slice(1).toLowerCase(),D=async A=>{if(A.preventDefault(),(0>=l.amount||3e3<=l.amount)&&l.amount)f("Entering value must be at range 1g to 3000g"),b(!0),c(o);else if(Object.keys(l).length<0||l.amount==="")f("Enter amount*"),b(!0);else if(u){Ae.error("Sorry, something went wrong, please try again",{theme:"dark"});return}else{f(""),b(!1);try{n(),t(l.calories),await a(nn(l))}catch{Ae.error("Sorry, something went wrong, please try again",{theme:"dark"})}}},I=A=>{const P=parseFloat(A.target.value),C=parseFloat(o);if(!isNaN(P)&&!isNaN(C)){const F=Math.round(P*C/100);c(F),i({productId:e,date:h,amount:P,calories:F}),f(""),b(!1)}else c(o),i({productId:"",date:"",amount:"",calories:""})};return m.jsxs(Ai,{onSubmit:D,noValidate:!0,children:[m.jsxs(Pi,{children:[m.jsx(Mi,{children:g}),m.jsxs(Vi,{children:[m.jsx(Li,{htmlFor:"calories",children:"grams"}),m.jsx(ki,{type:"number",name:"calories",placeholder:"100",autoComplete:"off",required:!0,step:"1",min:"1",max:"3000",onChange:I}),v&&m.jsxs(Ri,{children:[m.jsx("svg",{children:m.jsx("use",{href:_+"#icon-checkbox-circle-fill"})}),d]})]})]}),s?m.jsxs(ht,{children:[m.jsx("span",{children:"Calories: "}),s]}):m.jsxs(ht,{children:[m.jsx("span",{children:"Calories: "}),o]}),m.jsxs(Ti,{children:[m.jsx($i,{type:"submit",children:"Add to diary"}),m.jsx(Bi,{type:"button",onClick:()=>{n()},children:"Cancel"})]})]})},Hi=({product:n,type:t,handleOpenModal:r})=>{const o=d=>[...d.map(f=>f[0].toUpperCase()+f.slice(1).toLowerCase())],{title:e,category:a,calories:u,weight:l}=n,i=o([e])[0],s=o([a])[0];let c;return t?c="Recommended":c="Not recommended",m.jsxs(rn,{children:[m.jsx(on,{children:"DIET"}),m.jsxs("div",{style:{display:"flex",gap:"16px",alignSelf:"flex-end",flexWrap:"wrap"},children:[m.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[m.jsx(_e,{children:t?m.jsx("use",{href:_+"#icon-Ellipse-82",style:{fill:E.colorSecondaryGreen,stroke:E.colorSecondaryGreen}}):m.jsx("use",{href:_+"#icon-Ellipse-82",style:{fill:E.colorSecondaryRed,stroke:E.colorSecondaryRed}})}),m.jsx(Ce,{children:c})]}),m.jsxs(an,{onClick:()=>r(n),children:["Add",m.jsx(_e,{style:{width:"16px",height:"16px"},children:m.jsx("use",{href:_+"#icon-arrow",style:{stroke:E.colorOrange}})})]})]}),m.jsxs(un,{children:[m.jsx("svg",{style:{flexShrink:0,width:"24px",height:"24px"},children:m.jsx("use",{href:_+"#icon-running-stick-figure-svgrepo-com-1"})}),m.jsx(sn,{children:i})]}),m.jsxs(ln,{children:[m.jsxs(Ce,{children:[m.jsx("span",{children:"Calories:"}),u]}),m.jsxs(cn,{children:[m.jsx("span",{children:"Category:"}),s]}),m.jsxs(Ce,{children:[m.jsx("span",{children:"Weight:"}),l]})]})]})},Wi=n=>n.products.productsArray,Ui=n=>n.products.productsCategories,Nt=n=>n.products.isLoadingProducts,Ni=M.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 32px 16px;
  }
`,zi=M.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-top: 64px;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    margin-top: 132px;
    width: 580px;
  }

  @media (min-width: 1440px) {
    margin-top: 136px;
  }
`,_i=M.p`
  line-height: 1.2857;
  word-wrap: break-word;
  color: ${E.colorInput};

  > span {
    color: ${E.colorOrange};
  }

  @media (min-width: 768px) {
    line-height: 1.5;
    font-weight: 16px;
  }
`,Gi=M.p`
  line-height: 1.2857;
  word-wrap: break-word;
  color: ${E.colorOrange};

  @media (min-width: 768px) {
    line-height: 1.5;
    font-weight: 16px;
  }
`,Yi=({products:n})=>{const t=re(Nt),[r,o]=p.useState(null),[e,a]=p.useState(!1),[u,l]=p.useState(null),i=f=>{a(!0),o(f),l(f)},s=()=>{e&&a(!1),o(null),l(null)},d=re(dn).blood;return m.jsxs(m.Fragment,{children:[t&&m.jsx(Le,{}),!t&&n.length>0&&m.jsx(Ni,{children:n.map(f=>m.jsx(Hi,{product:f,type:f.groupBloodNotAllowed[d],handleOpenModal:i},f._id))}),!t&&n.length<=0&&m.jsxs(zi,{children:[m.jsxs(_i,{children:[m.jsx("span",{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),m.jsx(Gi,{children:"Try changing the search parameters."})]}),r&&m.jsx(Ei,{isOpen:e,onRequestClose:s,children:typeof u=="object"?m.jsx(ji,{closeModallAddProductForm:s,calories:r.calories,productTitle:r.title,productId:r._id,product:u,onClick:i}):m.jsx(Ii,{calories:u,closeModalAddProductSuccess:s})})]})},qi="/PowerPulse/assets/products-bg-b7e77cea.jpg",Xi="/PowerPulse/assets/products-bg@2x-9876be0a.jpg",Ki=M.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }

  @media (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${qi});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${Xi});
  }
`,Zi=M.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;

  @media (min-width: 768px) {
    gap: 32px;
    margin-top: 72px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,Ji=M.div`
  overflow: auto;
  margin-top: 32px;

  @media (min-width: 768px) {
    height: 660px;
    width: 704px;
  }

  @media (min-width: 1440px) {
    height: 487px;
    width: 850px;
    margin-top: 28px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${E.colorOrange1};
    border-radius: 12px;
  }
`,ra=()=>{const n=ke(),t=re(Nt),r=re(Ui),o=re(Wi);return p.useEffect(()=>{(async()=>{try{await n(ie({title:"",category:null,filter:"all"}))}catch{Ae.error("Sorry, something went wrong, please try again",{theme:"dark"})}})()},[n]),p.useEffect(()=>{n(pn())},[n]),m.jsx(Ki,{children:m.jsxs(fn,{children:[m.jsxs(Zi,{children:[m.jsx(hn,{title:"Products Page"}),m.jsx(bi,{categories:r.map(e=>e.title)})]}),t?m.jsx(Le,{}):m.jsx(Ji,{children:m.jsx(Yi,{products:o})})]})})};export{ra as default};
