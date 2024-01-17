import{m as zn,r as v,E as qn,o as Gn,p as Yn,_ as Kn,q as P,h as Qt,s as T,g as y,u as en,j as x,a as ue,t as Xn,O as Zn,v as xt,w as tn,x as Jn,e as Qn,N as eo,Q as nn,y as to,z as Et}from"./index-0d2b2d7c.js";import{p as on,T as no}from"./TitlePage-1a31c703.js";import{e as Ee,a as rn,h as oo,_ as ro,b as ao,c as io,d as uo,g as so,i as lo}from"./warning-fe47a644.js";import"./hoist-non-react-statics.cjs-d7b92067.js";var F=function(e,o){var r=arguments;if(o==null||!zn.call(o,"css"))return v.createElement.apply(void 0,r);var t=r.length,i=new Array(t);i[0]=qn,i[1]=Gn(e,o);for(var u=2;u<t;u++)i[u]=r[u];return v.createElement.apply(null,i)};function ut(){for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return Yn(e)}var co=function(){var e=ut.apply(void 0,arguments),o="animation-"+e.name;return{name:o,styles:"@keyframes "+o+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};const po=Math.min,fo=Math.max,Te=Math.round,Me=Math.floor,Le=n=>({x:n,y:n});function ho(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function an(n){return sn(n)?(n.nodeName||"").toLowerCase():"#document"}function ee(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function un(n){var e;return(e=(sn(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function sn(n){return n instanceof Node||n instanceof ee(n).Node}function Qe(n){return n instanceof Element||n instanceof ee(n).Element}function st(n){return n instanceof HTMLElement||n instanceof ee(n).HTMLElement}function Ct(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof ee(n).ShadowRoot}function ln(n){const{overflow:e,overflowX:o,overflowY:r,display:t}=lt(n);return/auto|scroll|overlay|hidden|clip/.test(e+r+o)&&!["inline","contents"].includes(t)}function mo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function vo(n){return["html","body","#document"].includes(an(n))}function lt(n){return ee(n).getComputedStyle(n)}function go(n){if(an(n)==="html")return n;const e=n.assignedSlot||n.parentNode||Ct(n)&&n.host||un(n);return Ct(e)?e.host:e}function cn(n){const e=go(n);return vo(e)?n.ownerDocument?n.ownerDocument.body:n.body:st(e)&&ln(e)?e:cn(e)}function ke(n,e,o){var r;e===void 0&&(e=[]),o===void 0&&(o=!0);const t=cn(n),i=t===((r=n.ownerDocument)==null?void 0:r.body),u=ee(t);return i?e.concat(u,u.visualViewport||[],ln(t)?t:[],u.frameElement&&o?ke(u.frameElement):[]):e.concat(t,ke(t,[],o))}function bo(n){const e=lt(n);let o=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const t=st(n),i=t?n.offsetWidth:o,u=t?n.offsetHeight:r,s=Te(o)!==i||Te(r)!==u;return s&&(o=i,r=u),{width:o,height:r,$:s}}function ct(n){return Qe(n)?n:n.contextElement}function ze(n){const e=ct(n);if(!st(e))return Le(1);const o=e.getBoundingClientRect(),{width:r,height:t,$:i}=bo(e);let u=(i?Te(o.width):o.width)/r,s=(i?Te(o.height):o.height)/t;return(!u||!Number.isFinite(u))&&(u=1),(!s||!Number.isFinite(s))&&(s=1),{x:u,y:s}}const xo=Le(0);function Eo(n){const e=ee(n);return!mo()||!e.visualViewport?xo:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Co(n,e,o){return e===void 0&&(e=!1),!o||e&&o!==ee(n)?!1:e}function yt(n,e,o,r){e===void 0&&(e=!1),o===void 0&&(o=!1);const t=n.getBoundingClientRect(),i=ct(n);let u=Le(1);e&&(r?Qe(r)&&(u=ze(r)):u=ze(n));const s=Co(i,o,r)?Eo(i):Le(0);let a=(t.left+s.x)/u.x,l=(t.top+s.y)/u.y,c=t.width/u.x,d=t.height/u.y;if(i){const f=ee(i),h=r&&Qe(r)?ee(r):r;let g=f.frameElement;for(;g&&r&&h!==f;){const E=ze(g),m=g.getBoundingClientRect(),b=lt(g),C=m.left+(g.clientLeft+parseFloat(b.paddingLeft))*E.x,O=m.top+(g.clientTop+parseFloat(b.paddingTop))*E.y;a*=E.x,l*=E.y,c*=E.x,d*=E.y,a+=C,l+=O,g=ee(g).frameElement}}return ho({width:c,height:d,x:a,y:l})}function yo(n,e){let o=null,r;const t=un(n);function i(){clearTimeout(r),o&&o.disconnect(),o=null}function u(s,a){s===void 0&&(s=!1),a===void 0&&(a=1),i();const{left:l,top:c,width:d,height:f}=n.getBoundingClientRect();if(s||e(),!d||!f)return;const h=Me(c),g=Me(t.clientWidth-(l+d)),E=Me(t.clientHeight-(c+f)),m=Me(l),C={rootMargin:-h+"px "+-g+"px "+-E+"px "+-m+"px",threshold:fo(0,po(1,a))||1};let O=!0;function A(V){const k=V[0].intersectionRatio;if(k!==a){if(!O)return u();k?u(!1,k):r=setTimeout(()=>{u(!1,1e-7)},100)}O=!1}try{o=new IntersectionObserver(A,{...C,root:t.ownerDocument})}catch{o=new IntersectionObserver(A,C)}o.observe(n)}return u(!0),i}function wo(n,e,o,r){r===void 0&&(r={});const{ancestorScroll:t=!0,ancestorResize:i=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,l=ct(n),c=t||i?[...l?ke(l):[],...ke(e)]:[];c.forEach(b=>{t&&b.addEventListener("scroll",o,{passive:!0}),i&&b.addEventListener("resize",o)});const d=l&&s?yo(l,o):null;let f=-1,h=null;u&&(h=new ResizeObserver(b=>{let[C]=b;C&&C.target===l&&h&&(h.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{h&&h.observe(e)})),o()}),l&&!a&&h.observe(l),h.observe(e));let g,E=a?yt(n):null;a&&m();function m(){const b=yt(n);E&&(b.x!==E.x||b.y!==E.y||b.width!==E.width||b.height!==E.height)&&o(),E=b,g=requestAnimationFrame(m)}return o(),()=>{c.forEach(b=>{t&&b.removeEventListener("scroll",o),i&&b.removeEventListener("resize",o)}),d&&d(),h&&h.disconnect(),h=null,a&&cancelAnimationFrame(g)}}function wt(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),o.push.apply(o,r)}return o}function D(n){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?wt(Object(o),!0).forEach(function(r){Ee(n,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):wt(Object(o)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(o,r))})}return n}function So(n){if(Array.isArray(n))return n}function Oo(n,e){var o=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var r,t,i,u,s=[],a=!0,l=!1;try{if(i=(o=o.call(n)).next,e===0){if(Object(o)!==o)return;a=!1}else for(;!(a=(r=i.call(o)).done)&&(s.push(r.value),s.length!==e);a=!0);}catch(c){l=!0,t=c}finally{try{if(!a&&o.return!=null&&(u=o.return(),Object(u)!==u))return}finally{if(l)throw t}}return s}}function Fo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function se(n,e){return So(n)||Oo(n,e)||rn(n,e)||Fo()}function le(n,e){if(n==null)return{};var o=Kn(n,e),r,t;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var Do=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Mo(n){var e=n.defaultInputValue,o=e===void 0?"":e,r=n.defaultMenuIsOpen,t=r===void 0?!1:r,i=n.defaultValue,u=i===void 0?null:i,s=n.inputValue,a=n.menuIsOpen,l=n.onChange,c=n.onInputChange,d=n.onMenuClose,f=n.onMenuOpen,h=n.value,g=le(n,Do),E=v.useState(s!==void 0?s:o),m=se(E,2),b=m[0],C=m[1],O=v.useState(a!==void 0?a:t),A=se(O,2),V=A[0],k=A[1],_=v.useState(h!==void 0?h:u),M=se(_,2),$=M[0],U=M[1],G=v.useCallback(function(S,N){typeof l=="function"&&l(S,N),U(S)},[l]),z=v.useCallback(function(S,N){var H;typeof c=="function"&&(H=c(S,N)),C(H!==void 0?H:S)},[c]),X=v.useCallback(function(){typeof f=="function"&&f(),k(!0)},[f]),I=v.useCallback(function(){typeof d=="function"&&d(),k(!1)},[d]),w=s!==void 0?s:b,L=a!==void 0?a:V,p=h!==void 0?h:$;return D(D({},g),{},{inputValue:w,menuIsOpen:L,onChange:G,onInputChange:z,onMenuClose:I,onMenuOpen:X,value:p})}function Ao(n){if(Array.isArray(n))return oo(n)}function Io(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Po(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dt(n){return Ao(n)||Io(n)||rn(n)||Po()}function Ro(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var et=v.useLayoutEffect,Vo=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],_e=function(){};function To(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function Lo(n,e){for(var o=arguments.length,r=new Array(o>2?o-2:0),t=2;t<o;t++)r[t-2]=arguments[t];var i=[].concat(r);if(e&&n)for(var u in e)e.hasOwnProperty(u)&&e[u]&&i.push("".concat(To(n,u)));return i.filter(function(s){return s}).map(function(s){return String(s).trim()}).join(" ")}var St=function(e){return Uo(e)?e.filter(Boolean):ro(e)==="object"&&e!==null?[e]:[]},dn=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var o=le(e,Vo);return D({},o)},W=function(e,o,r){var t=e.cx,i=e.getStyles,u=e.getClassNames,s=e.className;return{css:i(o,e),className:t(r??{},u(o,e),s)}};function We(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function ko(n){return We(n)?window.innerHeight:n.clientHeight}function pn(n){return We(n)?window.pageYOffset:n.scrollTop}function $e(n,e){if(We(n)){window.scrollTo(0,e);return}n.scrollTop=e}function _o(n){var e=getComputedStyle(n),o=e.position==="absolute",r=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(o&&e.position==="static")&&r.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function $o(n,e,o,r){return o*((n=n/r-1)*n*n+1)+e}function Ae(n,e){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:_e,t=pn(n),i=e-t,u=10,s=0;function a(){s+=u;var l=$o(s,t,i,o);$e(n,l),s<o?window.requestAnimationFrame(a):r(n)}a()}function Ot(n,e){var o=n.getBoundingClientRect(),r=e.getBoundingClientRect(),t=e.offsetHeight/3;r.bottom+t>o.bottom?$e(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):r.top-t<o.top&&$e(n,Math.max(e.offsetTop-t,0))}function Bo(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Ft(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function No(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var fn=!1,Ho={get passive(){return fn=!0}},Ie=typeof window<"u"?window:{};Ie.addEventListener&&Ie.removeEventListener&&(Ie.addEventListener("p",_e,Ho),Ie.removeEventListener("p",_e,!1));var jo=fn;function Wo(n){return n!=null}function Uo(n){return Array.isArray(n)}function Pe(n,e,o){return n?e:o}var zo=function(e){for(var o=arguments.length,r=new Array(o>1?o-1:0),t=1;t<o;t++)r[t-1]=arguments[t];var i=Object.entries(e).filter(function(u){var s=se(u,1),a=s[0];return!r.includes(a)});return i.reduce(function(u,s){var a=se(s,2),l=a[0],c=a[1];return u[l]=c,u},{})},qo=["children","innerProps"],Go=["children","innerProps"];function Yo(n){var e=n.maxHeight,o=n.menuEl,r=n.minHeight,t=n.placement,i=n.shouldScroll,u=n.isFixedPosition,s=n.controlHeight,a=_o(o),l={placement:"bottom",maxHeight:e};if(!o||!o.offsetParent)return l;var c=a.getBoundingClientRect(),d=c.height,f=o.getBoundingClientRect(),h=f.bottom,g=f.height,E=f.top,m=o.offsetParent.getBoundingClientRect(),b=m.top,C=u?window.innerHeight:ko(a),O=pn(a),A=parseInt(getComputedStyle(o).marginBottom,10),V=parseInt(getComputedStyle(o).marginTop,10),k=b-V,_=C-E,M=k+O,$=d-O-E,U=h-C+O+A,G=O+E-V,z=160;switch(t){case"auto":case"bottom":if(_>=g)return{placement:"bottom",maxHeight:e};if($>=g&&!u)return i&&Ae(a,U,z),{placement:"bottom",maxHeight:e};if(!u&&$>=r||u&&_>=r){i&&Ae(a,U,z);var X=u?_-A:$-A;return{placement:"bottom",maxHeight:X}}if(t==="auto"||u){var I=e,w=u?k:M;return w>=r&&(I=Math.min(w-A-s,e)),{placement:"top",maxHeight:I}}if(t==="bottom")return i&&$e(a,U),{placement:"bottom",maxHeight:e};break;case"top":if(k>=g)return{placement:"top",maxHeight:e};if(M>=g&&!u)return i&&Ae(a,G,z),{placement:"top",maxHeight:e};if(!u&&M>=r||u&&k>=r){var L=e;return(!u&&M>=r||u&&k>=r)&&(L=u?k-V:M-V),i&&Ae(a,G,z),{placement:"top",maxHeight:L}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return l}function Ko(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var hn=function(e){return e==="auto"?"bottom":e},Xo=function(e,o){var r,t=e.placement,i=e.theme,u=i.borderRadius,s=i.spacing,a=i.colors;return D((r={label:"menu"},Ee(r,Ko(t),"100%"),Ee(r,"position","absolute"),Ee(r,"width","100%"),Ee(r,"zIndex",1),r),o?{}:{backgroundColor:a.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:s.menuGutter,marginTop:s.menuGutter})},mn=v.createContext(null),Zo=function(e){var o=e.children,r=e.minMenuHeight,t=e.maxMenuHeight,i=e.menuPlacement,u=e.menuPosition,s=e.menuShouldScrollIntoView,a=e.theme,l=v.useContext(mn)||{},c=l.setPortalPlacement,d=v.useRef(null),f=v.useState(t),h=se(f,2),g=h[0],E=h[1],m=v.useState(null),b=se(m,2),C=b[0],O=b[1],A=a.spacing.controlHeight;return et(function(){var V=d.current;if(V){var k=u==="fixed",_=s&&!k,M=Yo({maxHeight:t,menuEl:V,minHeight:r,placement:i,shouldScroll:_,isFixedPosition:k,controlHeight:A});E(M.maxHeight),O(M.placement),c==null||c(M.placement)}},[t,i,u,s,r,c,A]),o({ref:d,placerProps:D(D({},e),{},{placement:C||hn(i),maxHeight:g})})},Jo=function(e){var o=e.children,r=e.innerRef,t=e.innerProps;return F("div",P({},W(e,"menu",{menu:!0}),{ref:r},t),o)},Qo=Jo,er=function(e,o){var r=e.maxHeight,t=e.theme.spacing.baseUnit;return D({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},o?{}:{paddingBottom:t,paddingTop:t})},tr=function(e){var o=e.children,r=e.innerProps,t=e.innerRef,i=e.isMulti;return F("div",P({},W(e,"menuList",{"menu-list":!0,"menu-list--is-multi":i}),{ref:t},r),o)},vn=function(e,o){var r=e.theme,t=r.spacing.baseUnit,i=r.colors;return D({textAlign:"center"},o?{}:{color:i.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},nr=vn,or=vn,rr=function(e){var o=e.children,r=o===void 0?"No options":o,t=e.innerProps,i=le(e,qo);return F("div",P({},W(D(D({},i),{},{children:r,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),r)},ar=function(e){var o=e.children,r=o===void 0?"Loading...":o,t=e.innerProps,i=le(e,Go);return F("div",P({},W(D(D({},i),{},{children:r,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),r)},ir=function(e){var o=e.rect,r=e.offset,t=e.position;return{left:o.left,position:t,top:r,width:o.width,zIndex:1}},ur=function(e){var o=e.appendTo,r=e.children,t=e.controlElement,i=e.innerProps,u=e.menuPlacement,s=e.menuPosition,a=v.useRef(null),l=v.useRef(null),c=v.useState(hn(u)),d=se(c,2),f=d[0],h=d[1],g=v.useMemo(function(){return{setPortalPlacement:h}},[]),E=v.useState(null),m=se(E,2),b=m[0],C=m[1],O=v.useCallback(function(){if(t){var _=Bo(t),M=s==="fixed"?0:window.pageYOffset,$=_[f]+M;($!==(b==null?void 0:b.offset)||_.left!==(b==null?void 0:b.rect.left)||_.width!==(b==null?void 0:b.rect.width))&&C({offset:$,rect:_})}},[t,s,f,b==null?void 0:b.offset,b==null?void 0:b.rect.left,b==null?void 0:b.rect.width]);et(function(){O()},[O]);var A=v.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),t&&a.current&&(l.current=wo(t,a.current,O,{elementResize:"ResizeObserver"in window}))},[t,O]);et(function(){A()},[A]);var V=v.useCallback(function(_){a.current=_,A()},[A]);if(!o&&s!=="fixed"||!b)return null;var k=F("div",P({ref:V},W(D(D({},e),{},{offset:b.offset,position:s,rect:b.rect}),"menuPortal",{"menu-portal":!0}),i),r);return F(mn.Provider,{value:g},o?Qt.createPortal(k,o):k)},sr=function(e){var o=e.isDisabled,r=e.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:o?"none":void 0,position:"relative"}},lr=function(e){var o=e.children,r=e.innerProps,t=e.isDisabled,i=e.isRtl;return F("div",P({},W(e,"container",{"--is-disabled":t,"--is-rtl":i}),r),o)},cr=function(e,o){var r=e.theme.spacing,t=e.isMulti,i=e.hasValue,u=e.selectProps.controlShouldRenderValue;return D({alignItems:"center",display:t&&i&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},o?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},dr=function(e){var o=e.children,r=e.innerProps,t=e.isMulti,i=e.hasValue;return F("div",P({},W(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":i}),r),o)},pr=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},fr=function(e){var o=e.children,r=e.innerProps;return F("div",P({},W(e,"indicatorsContainer",{indicators:!0}),r),o)},Dt,hr=["size"],mr=["innerProps","isRtl","size"],vr={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},gn=function(e){var o=e.size,r=le(e,hr);return F("svg",P({height:o,width:o,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:vr},r))},pt=function(e){return F(gn,P({size:20},e),F("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},bn=function(e){return F(gn,P({size:20},e),F("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},xn=function(e,o){var r=e.isFocused,t=e.theme,i=t.spacing.baseUnit,u=t.colors;return D({label:"indicatorContainer",display:"flex",transition:"color 150ms"},o?{}:{color:r?u.neutral60:u.neutral20,padding:i*2,":hover":{color:r?u.neutral80:u.neutral40}})},gr=xn,br=function(e){var o=e.children,r=e.innerProps;return F("div",P({},W(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),o||F(bn,null))},xr=xn,Er=function(e){var o=e.children,r=e.innerProps;return F("div",P({},W(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),o||F(pt,null))},Cr=function(e,o){var r=e.isDisabled,t=e.theme,i=t.spacing.baseUnit,u=t.colors;return D({label:"indicatorSeparator",alignSelf:"stretch",width:1},o?{}:{backgroundColor:r?u.neutral10:u.neutral20,marginBottom:i*2,marginTop:i*2})},yr=function(e){var o=e.innerProps;return F("span",P({},o,W(e,"indicatorSeparator",{"indicator-separator":!0})))},wr=co(Dt||(Dt=Ro([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Sr=function(e,o){var r=e.isFocused,t=e.size,i=e.theme,u=i.colors,s=i.spacing.baseUnit;return D({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},o?{}:{color:r?u.neutral60:u.neutral20,padding:s*2})},qe=function(e){var o=e.delay,r=e.offset;return F("span",{css:ut({animation:"".concat(wr," 1s ease-in-out ").concat(o,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Or=function(e){var o=e.innerProps,r=e.isRtl,t=e.size,i=t===void 0?4:t,u=le(e,mr);return F("div",P({},W(D(D({},u),{},{innerProps:o,isRtl:r,size:i}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),o),F(qe,{delay:0,offset:r}),F(qe,{delay:160,offset:!0}),F(qe,{delay:320,offset:!r}))},Fr=function(e,o){var r=e.isDisabled,t=e.isFocused,i=e.theme,u=i.colors,s=i.borderRadius,a=i.spacing;return D({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:a.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},o?{}:{backgroundColor:r?u.neutral5:u.neutral0,borderColor:r?u.neutral10:t?u.primary:u.neutral20,borderRadius:s,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:t?u.primary:u.neutral30}})},Dr=function(e){var o=e.children,r=e.isDisabled,t=e.isFocused,i=e.innerRef,u=e.innerProps,s=e.menuIsOpen;return F("div",P({ref:i},W(e,"control",{control:!0,"control--is-disabled":r,"control--is-focused":t,"control--menu-is-open":s}),u,{"aria-disabled":r||void 0}),o)},Mr=Dr,Ar=["data"],Ir=function(e,o){var r=e.theme.spacing;return o?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Pr=function(e){var o=e.children,r=e.cx,t=e.getStyles,i=e.getClassNames,u=e.Heading,s=e.headingProps,a=e.innerProps,l=e.label,c=e.theme,d=e.selectProps;return F("div",P({},W(e,"group",{group:!0}),a),F(u,P({},s,{selectProps:d,theme:c,getStyles:t,getClassNames:i,cx:r}),l),F("div",null,o))},Rr=function(e,o){var r=e.theme,t=r.colors,i=r.spacing;return D({label:"group",cursor:"default",display:"block"},o?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:i.baseUnit*3,paddingRight:i.baseUnit*3,textTransform:"uppercase"})},Vr=function(e){var o=dn(e);o.data;var r=le(o,Ar);return F("div",P({},W(e,"groupHeading",{"group-heading":!0}),r))},Tr=Pr,Lr=["innerRef","isDisabled","isHidden","inputClassName"],kr=function(e,o){var r=e.isDisabled,t=e.value,i=e.theme,u=i.spacing,s=i.colors;return D(D({visibility:r?"hidden":"visible",transform:t?"translateZ(0)":""},_r),o?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:s.neutral80})},En={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},_r={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":D({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},En)},$r=function(e){return D({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},En)},Br=function(e){var o=e.cx,r=e.value,t=dn(e),i=t.innerRef,u=t.isDisabled,s=t.isHidden,a=t.inputClassName,l=le(t,Lr);return F("div",P({},W(e,"input",{"input-container":!0}),{"data-value":r||""}),F("input",P({className:o({input:!0},a),ref:i,style:$r(s),disabled:u},l)))},Nr=Br,Hr=function(e,o){var r=e.theme,t=r.spacing,i=r.borderRadius,u=r.colors;return D({label:"multiValue",display:"flex",minWidth:0},o?{}:{backgroundColor:u.neutral10,borderRadius:i/2,margin:t.baseUnit/2})},jr=function(e,o){var r=e.theme,t=r.borderRadius,i=r.colors,u=e.cropWithEllipsis;return D({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},o?{}:{borderRadius:t/2,color:i.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Wr=function(e,o){var r=e.theme,t=r.spacing,i=r.borderRadius,u=r.colors,s=e.isFocused;return D({alignItems:"center",display:"flex"},o?{}:{borderRadius:i/2,backgroundColor:s?u.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},Cn=function(e){var o=e.children,r=e.innerProps;return F("div",r,o)},Ur=Cn,zr=Cn;function qr(n){var e=n.children,o=n.innerProps;return F("div",P({role:"button"},o),e||F(pt,{size:14}))}var Gr=function(e){var o=e.children,r=e.components,t=e.data,i=e.innerProps,u=e.isDisabled,s=e.removeProps,a=e.selectProps,l=r.Container,c=r.Label,d=r.Remove;return F(l,{data:t,innerProps:D(D({},W(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),i),selectProps:a},F(c,{data:t,innerProps:D({},W(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:a},o),F(d,{data:t,innerProps:D(D({},W(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(o||"option")},s),selectProps:a}))},Yr=Gr,Kr=function(e,o){var r=e.isDisabled,t=e.isFocused,i=e.isSelected,u=e.theme,s=u.spacing,a=u.colors;return D({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},o?{}:{backgroundColor:i?a.primary:t?a.primary25:"transparent",color:r?a.neutral20:i?a.neutral0:"inherit",padding:"".concat(s.baseUnit*2,"px ").concat(s.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:i?a.primary:a.primary50}})},Xr=function(e){var o=e.children,r=e.isDisabled,t=e.isFocused,i=e.isSelected,u=e.innerRef,s=e.innerProps;return F("div",P({},W(e,"option",{option:!0,"option--is-disabled":r,"option--is-focused":t,"option--is-selected":i}),{ref:u,"aria-disabled":r},s),o)},Zr=Xr,Jr=function(e,o){var r=e.theme,t=r.spacing,i=r.colors;return D({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},o?{}:{color:i.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},Qr=function(e){var o=e.children,r=e.innerProps;return F("div",P({},W(e,"placeholder",{placeholder:!0}),r),o)},ea=Qr,ta=function(e,o){var r=e.isDisabled,t=e.theme,i=t.spacing,u=t.colors;return D({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o?{}:{color:r?u.neutral40:u.neutral80,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},na=function(e){var o=e.children,r=e.isDisabled,t=e.innerProps;return F("div",P({},W(e,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),t),o)},oa=na,ra={ClearIndicator:Er,Control:Mr,DropdownIndicator:br,DownChevron:bn,CrossIcon:pt,Group:Tr,GroupHeading:Vr,IndicatorsContainer:fr,IndicatorSeparator:yr,Input:Nr,LoadingIndicator:Or,Menu:Qo,MenuList:tr,MenuPortal:ur,LoadingMessage:ar,NoOptionsMessage:rr,MultiValue:Yr,MultiValueContainer:Ur,MultiValueLabel:zr,MultiValueRemove:qr,Option:Zr,Placeholder:ea,SelectContainer:lr,SingleValue:oa,ValueContainer:dr},aa=function(e){return D(D({},ra),e.components)},Mt=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function ia(n,e){return!!(n===e||Mt(n)&&Mt(e))}function ua(n,e){if(n.length!==e.length)return!1;for(var o=0;o<n.length;o++)if(!ia(n[o],e[o]))return!1;return!0}function sa(n,e){e===void 0&&(e=ua);var o=null;function r(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];if(o&&o.lastThis===this&&e(t,o.lastArgs))return o.lastResult;var u=n.apply(this,t);return o={lastResult:u,lastArgs:t,lastThis:this},u}return r.clear=function(){o=null},r}var la={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},ca=function(e){return F("span",P({css:la},e))},At=ca,da={guidance:function(e){var o=e.isSearchable,r=e.isMulti,t=e.tabSelectsValue,i=e.context,u=e.isInitialFocus;switch(i){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(t?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(e["aria-label"]||"Select"," is focused ").concat(o?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var o=e.action,r=e.label,t=r===void 0?"":r,i=e.labels,u=e.isDisabled;switch(o){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(i.length>1?"s":""," ").concat(i.join(","),", selected.");case"select-option":return u?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var o=e.context,r=e.focused,t=e.options,i=e.label,u=i===void 0?"":i,s=e.selectValue,a=e.isDisabled,l=e.isSelected,c=e.isAppleDevice,d=function(E,m){return E&&E.length?"".concat(E.indexOf(m)+1," of ").concat(E.length):""};if(o==="value"&&s)return"value ".concat(u," focused, ").concat(d(s,r),".");if(o==="menu"&&c){var f=a?" disabled":"",h="".concat(l?" selected":"").concat(f);return"".concat(u).concat(h,", ").concat(d(t,r),".")}return""},onFilter:function(e){var o=e.inputValue,r=e.resultsMessage;return"".concat(r).concat(o?" for search term "+o:"",".")}},pa=function(e){var o=e.ariaSelection,r=e.focusedOption,t=e.focusedValue,i=e.focusableOptions,u=e.isFocused,s=e.selectValue,a=e.selectProps,l=e.id,c=e.isAppleDevice,d=a.ariaLiveMessages,f=a.getOptionLabel,h=a.inputValue,g=a.isMulti,E=a.isOptionDisabled,m=a.isSearchable,b=a.menuIsOpen,C=a.options,O=a.screenReaderStatus,A=a.tabSelectsValue,V=a.isLoading,k=a["aria-label"],_=a["aria-live"],M=v.useMemo(function(){return D(D({},da),d||{})},[d]),$=v.useMemo(function(){var w="";if(o&&M.onChange){var L=o.option,p=o.options,S=o.removedValue,N=o.removedValues,H=o.value,j=function(ie){return Array.isArray(ie)?null:ie},B=S||L||j(H),q=B?f(B):"",K=p||N||void 0,re=K?K.map(f):[],Z=D({isDisabled:B&&E(B,s),label:q,labels:re},o);w=M.onChange(Z)}return w},[o,M,E,s,f]),U=v.useMemo(function(){var w="",L=r||t,p=!!(r&&s&&s.includes(r));if(L&&M.onFocus){var S={focused:L,label:f(L),isDisabled:E(L,s),isSelected:p,options:i,context:L===r?"menu":"value",selectValue:s,isAppleDevice:c};w=M.onFocus(S)}return w},[r,t,f,E,M,i,s,c]),G=v.useMemo(function(){var w="";if(b&&C.length&&!V&&M.onFilter){var L=O({count:i.length});w=M.onFilter({inputValue:h,resultsMessage:L})}return w},[i,h,b,M,C,O,V]),z=(o==null?void 0:o.action)==="initial-input-focus",X=v.useMemo(function(){var w="";if(M.guidance){var L=t?"value":b?"menu":"input";w=M.guidance({"aria-label":k,context:L,isDisabled:r&&E(r,s),isMulti:g,isSearchable:m,tabSelectsValue:A,isInitialFocus:z})}return w},[k,r,t,g,E,m,b,M,s,A,z]),I=F(v.Fragment,null,F("span",{id:"aria-selection"},$),F("span",{id:"aria-focused"},U),F("span",{id:"aria-results"},G),F("span",{id:"aria-guidance"},X));return F(v.Fragment,null,F(At,{id:l},z&&I),F(At,{"aria-live":_,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!z&&I))},fa=pa,tt=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],ha=new RegExp("["+tt.map(function(n){return n.letters}).join("")+"]","g"),yn={};for(var Ge=0;Ge<tt.length;Ge++)for(var Ye=tt[Ge],Ke=0;Ke<Ye.letters.length;Ke++)yn[Ye.letters[Ke]]=Ye.base;var wn=function(e){return e.replace(ha,function(o){return yn[o]})},ma=sa(wn),It=function(e){return e.replace(/^\s+|\s+$/g,"")},va=function(e){return"".concat(e.label," ").concat(e.value)},ga=function(e){return function(o,r){if(o.data.__isNew__)return!0;var t=D({ignoreCase:!0,ignoreAccents:!0,stringify:va,trim:!0,matchFrom:"any"},e),i=t.ignoreCase,u=t.ignoreAccents,s=t.stringify,a=t.trim,l=t.matchFrom,c=a?It(r):r,d=a?It(s(o)):s(o);return i&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=ma(c),d=wn(d)),l==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},ba=["innerRef"];function xa(n){var e=n.innerRef,o=le(n,ba),r=zo(o,"onExited","in","enter","exit","appear");return F("input",P({ref:e},r,{css:ut({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Ea=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function Ca(n){var e=n.isEnabled,o=n.onBottomArrive,r=n.onBottomLeave,t=n.onTopArrive,i=n.onTopLeave,u=v.useRef(!1),s=v.useRef(!1),a=v.useRef(0),l=v.useRef(null),c=v.useCallback(function(m,b){if(l.current!==null){var C=l.current,O=C.scrollTop,A=C.scrollHeight,V=C.clientHeight,k=l.current,_=b>0,M=A-V-O,$=!1;M>b&&u.current&&(r&&r(m),u.current=!1),_&&s.current&&(i&&i(m),s.current=!1),_&&b>M?(o&&!u.current&&o(m),k.scrollTop=A,$=!0,u.current=!0):!_&&-b>O&&(t&&!s.current&&t(m),k.scrollTop=0,$=!0,s.current=!0),$&&Ea(m)}},[o,r,t,i]),d=v.useCallback(function(m){c(m,m.deltaY)},[c]),f=v.useCallback(function(m){a.current=m.changedTouches[0].clientY},[]),h=v.useCallback(function(m){var b=a.current-m.changedTouches[0].clientY;c(m,b)},[c]),g=v.useCallback(function(m){if(m){var b=jo?{passive:!1}:!1;m.addEventListener("wheel",d,b),m.addEventListener("touchstart",f,b),m.addEventListener("touchmove",h,b)}},[h,f,d]),E=v.useCallback(function(m){m&&(m.removeEventListener("wheel",d,!1),m.removeEventListener("touchstart",f,!1),m.removeEventListener("touchmove",h,!1))},[h,f,d]);return v.useEffect(function(){if(e){var m=l.current;return g(m),function(){E(m)}}},[e,g,E]),function(m){l.current=m}}var Pt=["boxSizing","height","overflow","paddingRight","position"],Rt={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Vt(n){n.preventDefault()}function Tt(n){n.stopPropagation()}function Lt(){var n=this.scrollTop,e=this.scrollHeight,o=n+this.offsetHeight;n===0?this.scrollTop=1:o===e&&(this.scrollTop=n-1)}function kt(){return"ontouchstart"in window||navigator.maxTouchPoints}var _t=!!(typeof window<"u"&&window.document&&window.document.createElement),xe=0,he={capture:!1,passive:!1};function ya(n){var e=n.isEnabled,o=n.accountForScrollbars,r=o===void 0?!0:o,t=v.useRef({}),i=v.useRef(null),u=v.useCallback(function(a){if(_t){var l=document.body,c=l&&l.style;if(r&&Pt.forEach(function(g){var E=c&&c[g];t.current[g]=E}),r&&xe<1){var d=parseInt(t.current.paddingRight,10)||0,f=document.body?document.body.clientWidth:0,h=window.innerWidth-f+d||0;Object.keys(Rt).forEach(function(g){var E=Rt[g];c&&(c[g]=E)}),c&&(c.paddingRight="".concat(h,"px"))}l&&kt()&&(l.addEventListener("touchmove",Vt,he),a&&(a.addEventListener("touchstart",Lt,he),a.addEventListener("touchmove",Tt,he))),xe+=1}},[r]),s=v.useCallback(function(a){if(_t){var l=document.body,c=l&&l.style;xe=Math.max(xe-1,0),r&&xe<1&&Pt.forEach(function(d){var f=t.current[d];c&&(c[d]=f)}),l&&kt()&&(l.removeEventListener("touchmove",Vt,he),a&&(a.removeEventListener("touchstart",Lt,he),a.removeEventListener("touchmove",Tt,he)))}},[r]);return v.useEffect(function(){if(e){var a=i.current;return u(a),function(){s(a)}}},[e,u,s]),function(a){i.current=a}}var wa=function(e){var o=e.target;return o.ownerDocument.activeElement&&o.ownerDocument.activeElement.blur()},Sa={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Oa(n){var e=n.children,o=n.lockEnabled,r=n.captureEnabled,t=r===void 0?!0:r,i=n.onBottomArrive,u=n.onBottomLeave,s=n.onTopArrive,a=n.onTopLeave,l=Ca({isEnabled:t,onBottomArrive:i,onBottomLeave:u,onTopArrive:s,onTopLeave:a}),c=ya({isEnabled:o}),d=function(h){l(h),c(h)};return F(v.Fragment,null,o&&F("div",{onClick:wa,css:Sa}),e(d))}var Fa={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Da=function(e){var o=e.name,r=e.onFocus;return F("input",{required:!0,name:o,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:Fa,value:"",onChange:function(){}})},Ma=Da;function ft(n){var e;return typeof window<"u"&&window.navigator!=null?n.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Aa(){return ft(/^iPhone/i)}function Sn(){return ft(/^Mac/i)}function Ia(){return ft(/^iPad/i)||Sn()&&navigator.maxTouchPoints>1}function Pa(){return Aa()||Ia()}function Ra(){return Sn()||Pa()}var Va=function(e){return e.label},Ta=function(e){return e.label},La=function(e){return e.value},ka=function(e){return!!e.isDisabled},_a={clearIndicator:xr,container:sr,control:Fr,dropdownIndicator:gr,group:Ir,groupHeading:Rr,indicatorsContainer:pr,indicatorSeparator:Cr,input:kr,loadingIndicator:Sr,loadingMessage:or,menu:Xo,menuList:er,menuPortal:ir,multiValue:Hr,multiValueLabel:jr,multiValueRemove:Wr,noOptionsMessage:nr,option:Kr,placeholder:Jr,singleValue:ta,valueContainer:cr},$a={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Ba=4,On=4,Na=38,Ha=On*2,ja={baseUnit:On,controlHeight:Na,menuGutter:Ha},Xe={borderRadius:Ba,colors:$a,spacing:ja},Wa={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ft(),captureMenuScroll:!Ft(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:ga(),formatGroupLabel:Va,getOptionLabel:Ta,getOptionValue:La,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:ka,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!No(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var o=e.count;return"".concat(o," result").concat(o!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function $t(n,e,o,r){var t=Mn(n,e,o),i=An(n,e,o),u=Dn(n,e),s=Be(n,e);return{type:"option",data:e,isDisabled:t,isSelected:i,label:u,value:s,index:r}}function Ve(n,e){return n.options.map(function(o,r){if("options"in o){var t=o.options.map(function(u,s){return $t(n,u,e,s)}).filter(function(u){return Nt(n,u)});return t.length>0?{type:"group",data:o,options:t,index:r}:void 0}var i=$t(n,o,e,r);return Nt(n,i)?i:void 0}).filter(Wo)}function Fn(n){return n.reduce(function(e,o){return o.type==="group"?e.push.apply(e,dt(o.options.map(function(r){return r.data}))):e.push(o.data),e},[])}function Bt(n,e){return n.reduce(function(o,r){return r.type==="group"?o.push.apply(o,dt(r.options.map(function(t){return{data:t.data,id:"".concat(e,"-").concat(r.index,"-").concat(t.index)}}))):o.push({data:r.data,id:"".concat(e,"-").concat(r.index)}),o},[])}function Ua(n,e){return Fn(Ve(n,e))}function Nt(n,e){var o=n.inputValue,r=o===void 0?"":o,t=e.data,i=e.isSelected,u=e.label,s=e.value;return(!Pn(n)||!i)&&In(n,{label:u,value:s,data:t},r)}function za(n,e){var o=n.focusedValue,r=n.selectValue,t=r.indexOf(o);if(t>-1){var i=e.indexOf(o);if(i>-1)return o;if(t<e.length)return e[t]}return null}function qa(n,e){var o=n.focusedOption;return o&&e.indexOf(o)>-1?o:e[0]}var Ze=function(e,o){var r,t=(r=e.find(function(i){return i.data===o}))===null||r===void 0?void 0:r.id;return t||null},Dn=function(e,o){return e.getOptionLabel(o)},Be=function(e,o){return e.getOptionValue(o)};function Mn(n,e,o){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,o):!1}function An(n,e,o){if(o.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,o);var r=Be(n,e);return o.some(function(t){return Be(n,t)===r})}function In(n,e,o){return n.filterOption?n.filterOption(e,o):!0}var Pn=function(e){var o=e.hideSelectedOptions,r=e.isMulti;return o===void 0?r:o},Ga=1,Rn=function(n){ao(o,n);var e=io(o);function o(r){var t;if(uo(this,o),t=e.call(this,r),t.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.isAppleDevice=Ra(),t.controlRef=null,t.getControlRef=function(a){t.controlRef=a},t.focusedOptionRef=null,t.getFocusedOptionRef=function(a){t.focusedOptionRef=a},t.menuListRef=null,t.getMenuListRef=function(a){t.menuListRef=a},t.inputRef=null,t.getInputRef=function(a){t.inputRef=a},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(a,l){var c=t.props,d=c.onChange,f=c.name;l.name=f,t.ariaOnChange(a,l),d(a,l)},t.setValue=function(a,l,c){var d=t.props,f=d.closeMenuOnSelect,h=d.isMulti,g=d.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:g}),f&&(t.setState({inputIsHiddenAfterUpdate:!h}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(a,{action:l,option:c})},t.selectOption=function(a){var l=t.props,c=l.blurInputOnSelect,d=l.isMulti,f=l.name,h=t.state.selectValue,g=d&&t.isOptionSelected(a,h),E=t.isOptionDisabled(a,h);if(g){var m=t.getOptionValue(a);t.setValue(h.filter(function(b){return t.getOptionValue(b)!==m}),"deselect-option",a)}else if(!E)d?t.setValue([].concat(dt(h),[a]),"select-option",a):t.setValue(a,"select-option");else{t.ariaOnChange(a,{action:"select-option",option:a,name:f});return}c&&t.blurInput()},t.removeValue=function(a){var l=t.props.isMulti,c=t.state.selectValue,d=t.getOptionValue(a),f=c.filter(function(g){return t.getOptionValue(g)!==d}),h=Pe(l,f,f[0]||null);t.onChange(h,{action:"remove-value",removedValue:a}),t.focusInput()},t.clearValue=function(){var a=t.state.selectValue;t.onChange(Pe(t.props.isMulti,[],null),{action:"clear",removedValues:a})},t.popValue=function(){var a=t.props.isMulti,l=t.state.selectValue,c=l[l.length-1],d=l.slice(0,l.length-1),f=Pe(a,d,d[0]||null);t.onChange(f,{action:"pop-value",removedValue:c})},t.getFocusedOptionId=function(a){return Ze(t.state.focusableOptionsWithIds,a)},t.getFocusableOptionsWithIds=function(){return Bt(Ve(t.props,t.state.selectValue),t.getElementId("option"))},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return Lo.apply(void 0,[t.props.classNamePrefix].concat(l))},t.getOptionLabel=function(a){return Dn(t.props,a)},t.getOptionValue=function(a){return Be(t.props,a)},t.getStyles=function(a,l){var c=t.props.unstyled,d=_a[a](l,c);d.boxSizing="border-box";var f=t.props.styles[a];return f?f(d,l):d},t.getClassNames=function(a,l){var c,d;return(c=(d=t.props.classNames)[a])===null||c===void 0?void 0:c.call(d,l)},t.getElementId=function(a){return"".concat(t.state.instancePrefix,"-").concat(a)},t.getComponents=function(){return aa(t.props)},t.buildCategorizedOptions=function(){return Ve(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return Fn(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(a,l){t.setState({ariaSelection:D({value:a},l)})},t.onMenuMouseDown=function(a){a.button===0&&(a.stopPropagation(),a.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(a){t.blockOptionHover=!1},t.onControlMouseDown=function(a){if(!a.defaultPrevented){var l=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&t.onMenuClose():l&&t.openMenu("first"):(l&&(t.openAfterFocus=!0),t.focusInput()),a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.preventDefault()}},t.onDropdownIndicatorMouseDown=function(a){if(!(a&&a.type==="mousedown"&&a.button!==0)&&!t.props.isDisabled){var l=t.props,c=l.isMulti,d=l.menuIsOpen;t.focusInput(),d?(t.setState({inputIsHiddenAfterUpdate:!c}),t.onMenuClose()):t.openMenu("first"),a.preventDefault()}},t.onClearIndicatorMouseDown=function(a){a&&a.type==="mousedown"&&a.button!==0||(t.clearValue(),a.preventDefault(),t.openAfterFocus=!1,a.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(a){typeof t.props.closeMenuOnScroll=="boolean"?a.target instanceof HTMLElement&&We(a.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(a)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(a){var l=a.touches,c=l&&l.item(0);c&&(t.initialTouchX=c.clientX,t.initialTouchY=c.clientY,t.userIsDragging=!1)},t.onTouchMove=function(a){var l=a.touches,c=l&&l.item(0);if(c){var d=Math.abs(c.clientX-t.initialTouchX),f=Math.abs(c.clientY-t.initialTouchY),h=5;t.userIsDragging=d>h||f>h}},t.onTouchEnd=function(a){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(a.target)&&t.menuListRef&&!t.menuListRef.contains(a.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(a){t.userIsDragging||t.onControlMouseDown(a)},t.onClearIndicatorTouchEnd=function(a){t.userIsDragging||t.onClearIndicatorMouseDown(a)},t.onDropdownIndicatorTouchEnd=function(a){t.userIsDragging||t.onDropdownIndicatorMouseDown(a)},t.handleInputChange=function(a){var l=t.props.inputValue,c=a.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(c,{action:"input-change",prevInputValue:l}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(a){t.props.onFocus&&t.props.onFocus(a),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(a){var l=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(a),t.onInputChange("",{action:"input-blur",prevInputValue:l}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(a){if(!(t.blockOptionHover||t.state.focusedOption===a)){var l=t.getFocusableOptions(),c=l.indexOf(a);t.setState({focusedOption:a,focusedOptionId:c>-1?t.getFocusedOptionId(a):null})}},t.shouldHideSelectedOptions=function(){return Pn(t.props)},t.onValueInputFocus=function(a){a.preventDefault(),a.stopPropagation(),t.focus()},t.onKeyDown=function(a){var l=t.props,c=l.isMulti,d=l.backspaceRemovesValue,f=l.escapeClearsValue,h=l.inputValue,g=l.isClearable,E=l.isDisabled,m=l.menuIsOpen,b=l.onKeyDown,C=l.tabSelectsValue,O=l.openMenuOnFocus,A=t.state,V=A.focusedOption,k=A.focusedValue,_=A.selectValue;if(!E&&!(typeof b=="function"&&(b(a),a.defaultPrevented))){switch(t.blockOptionHover=!0,a.key){case"ArrowLeft":if(!c||h)return;t.focusValue("previous");break;case"ArrowRight":if(!c||h)return;t.focusValue("next");break;case"Delete":case"Backspace":if(h)return;if(k)t.removeValue(k);else{if(!d)return;c?t.popValue():g&&t.clearValue()}break;case"Tab":if(t.isComposing||a.shiftKey||!m||!C||!V||O&&t.isOptionSelected(V,_))return;t.selectOption(V);break;case"Enter":if(a.keyCode===229)break;if(m){if(!V||t.isComposing)return;t.selectOption(V);break}return;case"Escape":m?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:h}),t.onMenuClose()):g&&f&&t.clearValue();break;case" ":if(h)return;if(!m){t.openMenu("first");break}if(!V)return;t.selectOption(V);break;case"ArrowUp":m?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":m?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!m)return;t.focusOption("pageup");break;case"PageDown":if(!m)return;t.focusOption("pagedown");break;case"Home":if(!m)return;t.focusOption("first");break;case"End":if(!m)return;t.focusOption("last");break;default:return}a.preventDefault()}},t.state.instancePrefix="react-select-"+(t.props.instanceId||++Ga),t.state.selectValue=St(r.value),r.menuIsOpen&&t.state.selectValue.length){var i=t.getFocusableOptionsWithIds(),u=t.buildFocusableOptions(),s=u.indexOf(t.state.selectValue[0]);t.state.focusableOptionsWithIds=i,t.state.focusedOption=u[s],t.state.focusedOptionId=Ze(i,u[s])}return t}return so(o,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Ot(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var i=this.props,u=i.isDisabled,s=i.menuIsOpen,a=this.state.isFocused;(a&&!u&&t.isDisabled||a&&s&&!t.menuIsOpen)&&this.focusInput(),a&&u&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!a&&!u&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Ot(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,i){this.props.onInputChange(t,i)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var i=this,u=this.state,s=u.selectValue,a=u.isFocused,l=this.buildFocusableOptions(),c=t==="first"?0:l.length-1;if(!this.props.isMulti){var d=l.indexOf(s[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(a&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[c],focusedOptionId:this.getFocusedOptionId(l[c])},function(){return i.onMenuOpen()})}},{key:"focusValue",value:function(t){var i=this.state,u=i.selectValue,s=i.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var a=u.indexOf(s);s||(a=-1);var l=u.length-1,c=-1;if(u.length){switch(t){case"previous":a===0?c=0:a===-1?c=l:c=a-1;break;case"next":a>-1&&a<l&&(c=a+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",i=this.props.pageSize,u=this.state.focusedOption,s=this.getFocusableOptions();if(s.length){var a=0,l=s.indexOf(u);u||(l=-1),t==="up"?a=l>0?l-1:s.length-1:t==="down"?a=(l+1)%s.length:t==="pageup"?(a=l-i,a<0&&(a=0)):t==="pagedown"?(a=l+i,a>s.length-1&&(a=s.length-1)):t==="last"&&(a=s.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:s[a],focusedValue:null,focusedOptionId:this.getFocusedOptionId(s[a])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Xe):D(D({},Xe),this.props.theme):Xe}},{key:"getCommonProps",value:function(){var t=this.clearValue,i=this.cx,u=this.getStyles,s=this.getClassNames,a=this.getValue,l=this.selectOption,c=this.setValue,d=this.props,f=d.isMulti,h=d.isRtl,g=d.options,E=this.hasValue();return{clearValue:t,cx:i,getStyles:u,getClassNames:s,getValue:a,hasValue:E,isMulti:f,isRtl:h,options:g,selectOption:l,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,i=t.isClearable,u=t.isMulti;return i===void 0?u:i}},{key:"isOptionDisabled",value:function(t,i){return Mn(this.props,t,i)}},{key:"isOptionSelected",value:function(t,i){return An(this.props,t,i)}},{key:"filterOption",value:function(t,i){return In(this.props,t,i)}},{key:"formatOptionLabel",value:function(t,i){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,s=this.state.selectValue;return this.props.formatOptionLabel(t,{context:i,inputValue:u,selectValue:s})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,i=t.isDisabled,u=t.isSearchable,s=t.inputId,a=t.inputValue,l=t.tabIndex,c=t.form,d=t.menuIsOpen,f=t.required,h=this.getComponents(),g=h.Input,E=this.state,m=E.inputIsHidden,b=E.ariaSelection,C=this.commonProps,O=s||this.getElementId("input"),A=D(D(D({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":f,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(b==null?void 0:b.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?v.createElement(g,P({},C,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:O,innerRef:this.getInputRef,isDisabled:i,isHidden:m,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:c,type:"text",value:a},A)):v.createElement(xa,P({id:O,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:_e,onFocus:this.onInputFocus,disabled:i,tabIndex:l,inputMode:"none",form:c,value:""},A))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,i=this.getComponents(),u=i.MultiValue,s=i.MultiValueContainer,a=i.MultiValueLabel,l=i.MultiValueRemove,c=i.SingleValue,d=i.Placeholder,f=this.commonProps,h=this.props,g=h.controlShouldRenderValue,E=h.isDisabled,m=h.isMulti,b=h.inputValue,C=h.placeholder,O=this.state,A=O.selectValue,V=O.focusedValue,k=O.isFocused;if(!this.hasValue()||!g)return b?null:v.createElement(d,P({},f,{key:"placeholder",isDisabled:E,isFocused:k,innerProps:{id:this.getElementId("placeholder")}}),C);if(m)return A.map(function(M,$){var U=M===V,G="".concat(t.getOptionLabel(M),"-").concat(t.getOptionValue(M));return v.createElement(u,P({},f,{components:{Container:s,Label:a,Remove:l},isFocused:U,isDisabled:E,key:G,index:$,removeProps:{onClick:function(){return t.removeValue(M)},onTouchEnd:function(){return t.removeValue(M)},onMouseDown:function(X){X.preventDefault()}},data:M}),t.formatOptionLabel(M,"value"))});if(b)return null;var _=A[0];return v.createElement(c,P({},f,{data:_,isDisabled:E}),this.formatOptionLabel(_,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),i=t.ClearIndicator,u=this.commonProps,s=this.props,a=s.isDisabled,l=s.isLoading,c=this.state.isFocused;if(!this.isClearable()||!i||a||!this.hasValue()||l)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return v.createElement(i,P({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),i=t.LoadingIndicator,u=this.commonProps,s=this.props,a=s.isDisabled,l=s.isLoading,c=this.state.isFocused;if(!i||!l)return null;var d={"aria-hidden":"true"};return v.createElement(i,P({},u,{innerProps:d,isDisabled:a,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),i=t.DropdownIndicator,u=t.IndicatorSeparator;if(!i||!u)return null;var s=this.commonProps,a=this.props.isDisabled,l=this.state.isFocused;return v.createElement(u,P({},s,{isDisabled:a,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),i=t.DropdownIndicator;if(!i)return null;var u=this.commonProps,s=this.props.isDisabled,a=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return v.createElement(i,P({},u,{innerProps:l,isDisabled:s,isFocused:a}))}},{key:"renderMenu",value:function(){var t=this,i=this.getComponents(),u=i.Group,s=i.GroupHeading,a=i.Menu,l=i.MenuList,c=i.MenuPortal,d=i.LoadingMessage,f=i.NoOptionsMessage,h=i.Option,g=this.commonProps,E=this.state.focusedOption,m=this.props,b=m.captureMenuScroll,C=m.inputValue,O=m.isLoading,A=m.loadingMessage,V=m.minMenuHeight,k=m.maxMenuHeight,_=m.menuIsOpen,M=m.menuPlacement,$=m.menuPosition,U=m.menuPortalTarget,G=m.menuShouldBlockScroll,z=m.menuShouldScrollIntoView,X=m.noOptionsMessage,I=m.onMenuScrollToTop,w=m.onMenuScrollToBottom;if(!_)return null;var L=function(q,K){var re=q.type,Z=q.data,ae=q.isDisabled,ie=q.isSelected,De=q.label,jn=q.value,vt=E===Z,gt=ae?void 0:function(){return t.onOptionHover(Z)},Wn=ae?void 0:function(){return t.selectOption(Z)},bt="".concat(t.getElementId("option"),"-").concat(K),Un={id:bt,onClick:Wn,onMouseMove:gt,onMouseOver:gt,tabIndex:-1,role:"option","aria-selected":t.isAppleDevice?void 0:ie};return v.createElement(h,P({},g,{innerProps:Un,data:Z,isDisabled:ae,isSelected:ie,key:bt,label:De,type:re,value:jn,isFocused:vt,innerRef:vt?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(q.data,"menu"))},p;if(this.hasOptions())p=this.getCategorizedOptions().map(function(B){if(B.type==="group"){var q=B.data,K=B.options,re=B.index,Z="".concat(t.getElementId("group"),"-").concat(re),ae="".concat(Z,"-heading");return v.createElement(u,P({},g,{key:Z,data:q,options:K,Heading:s,headingProps:{id:ae,data:B.data},label:t.formatGroupLabel(B.data)}),B.options.map(function(ie){return L(ie,"".concat(re,"-").concat(ie.index))}))}else if(B.type==="option")return L(B,"".concat(B.index))});else if(O){var S=A({inputValue:C});if(S===null)return null;p=v.createElement(d,g,S)}else{var N=X({inputValue:C});if(N===null)return null;p=v.createElement(f,g,N)}var H={minMenuHeight:V,maxMenuHeight:k,menuPlacement:M,menuPosition:$,menuShouldScrollIntoView:z},j=v.createElement(Zo,P({},g,H),function(B){var q=B.ref,K=B.placerProps,re=K.placement,Z=K.maxHeight;return v.createElement(a,P({},g,H,{innerRef:q,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove},isLoading:O,placement:re}),v.createElement(Oa,{captureEnabled:b,onTopArrive:I,onBottomArrive:w,lockEnabled:G},function(ae){return v.createElement(l,P({},g,{innerRef:function(De){t.getMenuListRef(De),ae(De)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:t.getElementId("listbox")},isLoading:O,maxHeight:Z,focusedOption:E}),p)}))});return U||$==="fixed"?v.createElement(c,P({},g,{appendTo:U,controlElement:this.controlRef,menuPlacement:M,menuPosition:$}),j):j}},{key:"renderFormField",value:function(){var t=this,i=this.props,u=i.delimiter,s=i.isDisabled,a=i.isMulti,l=i.name,c=i.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!s)return v.createElement(Ma,{name:l,onFocus:this.onValueInputFocus});if(!(!l||s))if(a)if(u){var f=d.map(function(E){return t.getOptionValue(E)}).join(u);return v.createElement("input",{name:l,type:"hidden",value:f})}else{var h=d.length>0?d.map(function(E,m){return v.createElement("input",{key:"i-".concat(m),name:l,type:"hidden",value:t.getOptionValue(E)})}):v.createElement("input",{name:l,type:"hidden",value:""});return v.createElement("div",null,h)}else{var g=d[0]?this.getOptionValue(d[0]):"";return v.createElement("input",{name:l,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,i=this.state,u=i.ariaSelection,s=i.focusedOption,a=i.focusedValue,l=i.isFocused,c=i.selectValue,d=this.getFocusableOptions();return v.createElement(fa,P({},t,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:s,focusedValue:a,isFocused:l,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var t=this.getComponents(),i=t.Control,u=t.IndicatorsContainer,s=t.SelectContainer,a=t.ValueContainer,l=this.props,c=l.className,d=l.id,f=l.isDisabled,h=l.menuIsOpen,g=this.state.isFocused,E=this.commonProps=this.getCommonProps();return v.createElement(s,P({},E,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:f,isFocused:g}),this.renderLiveRegion(),v.createElement(i,P({},E,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:f,isFocused:g,menuIsOpen:h}),v.createElement(a,P({},E,{isDisabled:f}),this.renderPlaceholderOrValue(),this.renderInput()),v.createElement(u,P({},E,{isDisabled:f}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,i){var u=i.prevProps,s=i.clearFocusValueOnUpdate,a=i.inputIsHiddenAfterUpdate,l=i.ariaSelection,c=i.isFocused,d=i.prevWasFocused,f=i.instancePrefix,h=t.options,g=t.value,E=t.menuIsOpen,m=t.inputValue,b=t.isMulti,C=St(g),O={};if(u&&(g!==u.value||h!==u.options||E!==u.menuIsOpen||m!==u.inputValue)){var A=E?Ua(t,C):[],V=E?Bt(Ve(t,C),"".concat(f,"-option")):[],k=s?za(i,C):null,_=qa(i,A),M=Ze(V,_);O={selectValue:C,focusedOption:_,focusedOptionId:M,focusableOptionsWithIds:V,focusedValue:k,clearFocusValueOnUpdate:!1}}var $=a!=null&&t!==u?{inputIsHidden:a,inputIsHiddenAfterUpdate:void 0}:{},U=l,G=c&&d;return c&&!G&&(U={value:Pe(b,C,C[0]||null),options:C,action:"initial-input-focus"},G=!d),(l==null?void 0:l.action)==="initial-input-focus"&&(U=null),D(D(D({},O),$),{},{prevProps:t,ariaSelection:U,prevWasFocused:G})}}]),o}(v.Component);Rn.defaultProps=Wa;var Ya=v.forwardRef(function(n,e){var o=Mo(n);return v.createElement(Rn,P({ref:e},o))}),Ht=Ya;let jt=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((e,o)=>(o&=63,o<36?e+=o.toString(36):o<62?e+=(o-26).toString(36).toUpperCase():o>62?e+="-":e+="_",e),"");const Ka=T.form`
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
`,Xa=T.div`
  position: relative;
`,Za=T.input`
  width: 100%;
  padding: 14px;
  height: 46px;
  border-radius: 12px;
  border: 1px solid ${y.colorInput};
  background: transparent;
  color: ${y.colorWhite};
  font-size: 14px;
  line-height: 1.42857;

  ::placeholder {
    color: ${y.colorWhite};
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
    border: 1px solid ${y.colorOrange};
  }

  @media (min-width: 768px) {
    width: 236px;
    height: 52px;
    font-size: 16px;
    line-height: 1.5;
  }
`,Ja=T.div`
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
  }
`,Qa=T.svg`
  stroke: ${y.colorWhite};
`,ei=T.svg`
  stroke: ${y.colorOrange};
`,ti=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,ni={singleValue:n=>({...n,color:`${y.colorWhite}`}),control:(n,{isSelected:e})=>({...n,display:"flex",color:e?`${y.colorBeige}`:`${y.colorWhite}`,backgroundColor:"transparent",width:"146px",borderRadius:"12px",padding:"14px",lineHeight:"1.2857",fontSize:"14px",fontWeight:"400",outline:"none",border:`1px solid ${y.colorInput}`,boxShadow:"none",cursor:"pointer",wordWrap:"break-word",":hover":{border:`1px solid ${y.colorOrange}`},":active":{border:`1px solid ${y.colorOrange}`},":focus":{outline:"none",border:`1px solid ${y.colorOrange}`},"@media (min-width: 768px)":{fontSize:"16px",lineHeight:"1.5",width:"192px",height:"52px"}}),option:(n,{isHover:e,isDisabled:o,isFocused:r,isSelected:t})=>({...n,color:t?`${y.colorOrange1}`:r?`${y.colorBeige}`:e?`${y.colorBeige}`:`${y.colorWhite}`,fontSize:"14px",fontWeight:"400",lineHeight:"1.2857",cursor:"pointer",backgroundColor:o?"none":t?`${y.colorInput}`:"transparent",":active":{...n[":active"],backgroundColor:t?`${y.colorInput}`:"none"}}),menu:n=>({...n,backgroundColor:"#1C1C1C",padding:"14px",borderRadius:"12px",border:"none"}),menuList:n=>({...n,boxSizing:"content-box","&::-webkit-scrollbar":{width:"6px",position:"relative"},"&::-webkit-scrollbar-thumb":{borderRadius:"12px",background:"rgba(239, 237, 232, 0.1)"},"&::-webkit-scrollbar-track":{background:"transparent"}}),indicatorSeparator:()=>({display:"none"}),valueContainer:n=>({...n,padding:"0px",margin:"0px"}),clearIndicator:n=>({...n,padding:0,color:`${y.colorOrange}`,cursor:"pointer"}),dropdownIndicator:(n,e)=>({...n,padding:0,color:`${y.colorWhite}`,transition:"all .3s ease",transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),placeholder:n=>({...n,color:`${y.colorWhite}`})},oi={singleValue:n=>({...n,color:`${y.colorWhite}`}),control:(n,{isSelected:e})=>({...n,display:"flex",color:e?`${y.colorBeige}`:`${y.colorWhite}`,backgroundColor:"transparent",width:"173px",borderRadius:"12px",padding:"14px",lineHeight:"1.2857",fontSize:"14px",fontWeight:"400",outline:"none",border:`1px solid ${y.colorInput}`,boxShadow:"none",cursor:"pointer",wordWrap:"break-word",":hover":{border:`1px solid ${y.colorOrange}`},":active":{border:`1px solid ${y.colorOrange}`},":focus":{outline:"none",border:`1px solid ${y.colorOrange}`},"@media (min-width: 768px)":{fontSize:"16px",lineHeight:"1.5",width:"204px",height:"52px"}}),option:(n,{isHover:e,isDisabled:o,isFocused:r,isSelected:t})=>({...n,color:t?`${y.colorOrange1}`:r?`${y.colorBeige}`:e?`${y.colorBeige}`:`${y.colorWhite}`,fontSize:"14px",fontWeight:"400",lineHeight:"1.2857",cursor:"pointer",backgroundColor:o?"none":t?`${y.colorInput}`:"transparent",":active":{...n[":active"],backgroundColor:t?`${y.colorInput}`:"transparent"}}),menu:n=>({...n,backgroundColor:"#1C1C1C",padding:"14px",borderRadius:"12px",border:"none"}),menuList:n=>({...n,boxSizing:"content-box","&::-webkit-scrollbar":{width:"6px",position:"relative"},"&::-webkit-scrollbar-thumb":{borderRadius:"12px",background:"rgba(239, 237, 232, 0.1)"},"&::-webkit-scrollbar-track":{background:"transparent"}}),indicatorSeparator:()=>({display:"none"}),valueContainer:n=>({...n,padding:"0px",margin:"0px"}),clearIndicator:n=>({...n,padding:0,color:`${y.colorOrange}`,cursor:"pointer"}),dropdownIndicator:(n,e)=>({...n,padding:0,color:`${y.colorWhite}`,transition:"all .3s ease",transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),placeholder:n=>({...n,color:`${y.colorWhite}`})},ri=({categories:n})=>{const e=en(),[o,r]=v.useState(!1),[t,i]=v.useState(""),[u,s]=v.useState(null),[a,l]=v.useState(null),c=n.map(C=>C[0].toUpperCase()+C.slice(1).toLowerCase()),d=C=>[...C.map(O=>({value:O,label:O}))],f=[{value:"null",label:"All"},{value:"true",label:"Recommended "},{value:"false",label:"Not recommended"}],h=C=>{C&&C.preventDefault()},g=C=>{const O=C.target.value;r(O.length>0),i(O.trim())},E=()=>{r(!1),i("");const C={title:"",category:u||null,groupBloodNotAllowed:a||null};console.log(C),e(xt(C))},m=C=>{const O=C?C.value:null;s(O);const A={title:t||"",category:O,groupBloodNotAllowed:a||null};console.log(A),e(tn(A))},b=C=>{const O=C?C.value:null;l(O);const A={title:t||"",category:u||null,groupBloodNotAllowed:O};console.log(A),e(xt(A))};return x.jsxs(x.Fragment,{children:[x.jsxs(Ka,{onSubmit:h,children:[x.jsxs(Xa,{children:[x.jsx(Za,{type:"text",name:"title",placeholder:"Search",value:t,onChange:g}),x.jsxs(Ja,{children:[o&&x.jsx("button",{type:"button",onClick:E,children:x.jsx(ei,{children:x.jsx("use",{href:ue+"#icon-x"})})}),x.jsx("button",{type:"submit",children:x.jsx(Qa,{children:x.jsx("use",{href:ue+"#icon-search"})})})]})]}),x.jsxs(ti,{children:[x.jsx(Ht,{id:jt(),options:d(c),value:d(c).find(C=>C.value===u),isSearchable:!1,isMulti:!1,isClearable:!0,onChange:m,placeholder:"Categories",styles:ni}),x.jsx(Ht,{id:jt(),options:f,value:f.find(C=>C.value===a),isSearchable:!1,isMulti:!1,isClearable:!0,onChange:b,placeholder:"All",styles:oi})]})]}),x.jsx(v.Suspense,{fallback:x.jsx(Xn,{}),children:x.jsx(Zn,{})})]})},ai=T.li`
  width: 335px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: rgba(239, 237, 232, 0.05);
  border-radius: 12px;
  border: 1px rgba(239, 237, 232, 0.2) solid;

  @media (min-width: 1440px) {
    width: 405px;
  }

  @media (max-width: 335px) {
    width: 100%;
  }
`,ii=T.div`
  position: absolute;
  padding: 5px 7.5px;
  background: rgba(239, 237, 232, 0.05);
  border-radius: 4px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  word-wrap: break-word;
`,Wt=T.svg`
  width: 14px;
  height: 14px;
`,Je=T.p`
  > span {
    color: rgba(239, 237, 232, 0.4);
  }

  display: flex;
  gap: 4px;
  color: ${y.colorWhite};
  font-size: 12px;
  line-height: 1.5;
  word-wrap: break-word;
  white-space: nowrap;
`,ui=T.p`
  > span {
    color: rgba(239, 237, 232, 0.4);
  }

  display: flex;
  gap: 4px;
  color: ${y.colorWhite};
  font-size: 12px;
  line-height: 1.5;
  word-wrap: break-word;
  white-space: nowrap;

  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }
`,si=T.h2`
  color: ${y.colorWhite};
  font-size: 20px;
  line-height: 1.2;
  word-wrap: break-word;
  white-space: nowrap;
  overflow: auto;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }
`,li=T.button`
  display: flex;
  align-items: center;
  color: ${y.colorOrange};
  gap: 8px;
  width: 49px;
  height: 18px;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;

  font-size: 14px;
  line-height: 1.2857;
  word-wrap: break-word;

  @media (min-width: 768px) {
    width: 53px;
    font-size: 16px;
    line-height: 1.5;
  }
`,ci=T.div`
  display: flex;
  gap: 16px;
  margin-top: 41px;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 335px) {
    flex-wrap: wrap;
  }
`,di=T.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
  align-items: center;

  @media (max-width: 335px) {
    flex-wrap: wrap;
  }
`,pi=({product:n,type:e,title:o,calories:r,category:t,weight:i,handleOpenModal:u})=>{const s=d=>[...d.map(f=>f[0].toUpperCase()+f.slice(1).toLowerCase())],a=s([o])[0],l=s([t])[0];let c;return e?c="Recommended":c="Not recommended",x.jsxs(ai,{children:[x.jsx(ii,{children:"DIET"}),x.jsxs("div",{style:{display:"flex",gap:"16px",alignSelf:"flex-end",flexWrap:"wrap"},children:[x.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[x.jsx(Wt,{children:e?x.jsx("use",{href:ue+"#icon-Ellipse-82",style:{fill:y.colorSecondaryGreen,stroke:y.colorSecondaryGreen}}):x.jsx("use",{href:ue+"#icon-Ellipse-82",style:{fill:y.colorSecondaryRed,stroke:y.colorSecondaryRed}})}),x.jsx(Je,{children:c})]}),x.jsxs(li,{onClick:()=>u(n),children:["Add",x.jsx(Wt,{style:{width:"16px",height:"16px"},children:x.jsx("use",{href:ue+"#icon-arrow",style:{stroke:y.colorOrange}})})]})]}),x.jsxs(ci,{children:[x.jsx("svg",{style:{flexShrink:0,width:"24px",height:"24px"},children:x.jsx("use",{href:ue+"#icon-running-stick-figure-svgrepo-com-1"})}),x.jsx(si,{children:a})]}),x.jsxs(di,{children:[x.jsxs(Je,{children:[x.jsx("span",{children:"Calories:"}),r]}),x.jsxs(ui,{children:[x.jsx("span",{children:"Category:"}),l]}),x.jsxs(Je,{children:[x.jsx("span",{children:"Weight:"}),i]})]})]})};var nt={exports:{}},fe={},ot={exports:{}},ne={},rt={exports:{}};(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",r="contents",t=/input|select|textarea|button|object|iframe/;function i(d,f){return f.getPropertyValue("overflow")!=="visible"||d.scrollWidth<=0&&d.scrollHeight<=0}function u(d){var f=d.offsetWidth<=0&&d.offsetHeight<=0;if(f&&!d.innerHTML)return!0;try{var h=window.getComputedStyle(d),g=h.getPropertyValue("display");return f?g!==r&&i(d,h):g===o}catch{return console.warn("Failed to inspect element style"),!1}}function s(d){for(var f=d,h=d.getRootNode&&d.getRootNode();f&&f!==document.body;){if(h&&f===h&&(f=h.host.parentNode),u(f))return!1;f=f.parentNode}return!0}function a(d,f){var h=d.nodeName.toLowerCase(),g=t.test(h)&&!d.disabled||h==="a"&&d.href||f;return g&&s(d)}function l(d){var f=d.getAttribute("tabindex");f===null&&(f=void 0);var h=isNaN(f);return(h||f>=0)&&a(d,!h)}function c(d){var f=[].slice.call(d.querySelectorAll("*"),0).reduce(function(h,g){return h.concat(g.shadowRoot?c(g.shadowRoot):[g])},[]);return f.filter(l)}n.exports=e.default})(rt,rt.exports);var Vn=rt.exports;Object.defineProperty(ne,"__esModule",{value:!0});ne.resetState=vi;ne.log=gi;ne.handleBlur=we;ne.handleFocus=Se;ne.markForFocusLater=bi;ne.returnFocus=xi;ne.popWithoutFocus=Ei;ne.setupScopedFocus=Ci;ne.teardownScopedFocus=yi;var fi=Vn,hi=mi(fi);function mi(n){return n&&n.__esModule?n:{default:n}}var ve=[],me=null,at=!1;function vi(){ve=[]}function gi(){}function we(){at=!0}function Se(){if(at){if(at=!1,!me)return;setTimeout(function(){if(!me.contains(document.activeElement)){var n=(0,hi.default)(me)[0]||me;n.focus()}},0)}}function bi(){ve.push(document.activeElement)}function xi(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{ve.length!==0&&(e=ve.pop(),e.focus({preventScroll:n}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function Ei(){ve.length>0&&ve.pop()}function Ci(n){me=n,window.addEventListener?(window.addEventListener("blur",we,!1),document.addEventListener("focus",Se,!0)):(window.attachEvent("onBlur",we),document.attachEvent("onFocus",Se))}function yi(){me=null,window.addEventListener?(window.removeEventListener("blur",we),document.removeEventListener("focus",Se)):(window.detachEvent("onBlur",we),document.detachEvent("onFocus",Se))}var it={exports:{}};(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var o=Vn,r=t(o);function t(s){return s&&s.__esModule?s:{default:s}}function i(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return s.activeElement.shadowRoot?i(s.activeElement.shadowRoot):s.activeElement}function u(s,a){var l=(0,r.default)(s);if(!l.length){a.preventDefault();return}var c=void 0,d=a.shiftKey,f=l[0],h=l[l.length-1],g=i();if(s===g){if(!d)return;c=h}if(h===g&&!d&&(c=f),f===g&&d&&(c=h),c){a.preventDefault(),c.focus();return}var E=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),m=E!=null&&E[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(m){var b=l.indexOf(g);if(b>-1&&(b+=d?-1:1),c=l[b],typeof c>"u"){a.preventDefault(),c=d?h:f,c.focus();return}a.preventDefault(),c.focus()}}n.exports=e.default})(it,it.exports);var wi=it.exports,oe={},te={},Tn={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(n){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};n.exports?n.exports=o:window.ExecutionEnvironment=o})()})(Tn);var Si=Tn.exports;Object.defineProperty(te,"__esModule",{value:!0});te.canUseDOM=te.SafeNodeList=te.SafeHTMLCollection=void 0;var Oi=Si,Fi=Di(Oi);function Di(n){return n&&n.__esModule?n:{default:n}}var Ue=Fi.default,Mi=Ue.canUseDOM?window.HTMLElement:{};te.SafeHTMLCollection=Ue.canUseDOM?window.HTMLCollection:{};te.SafeNodeList=Ue.canUseDOM?window.NodeList:{};te.canUseDOM=Ue.canUseDOM;te.default=Mi;Object.defineProperty(oe,"__esModule",{value:!0});oe.resetState=Vi;oe.log=Ti;oe.assertNodeList=Ln;oe.setElement=Li;oe.validateElement=ht;oe.hide=ki;oe.show=_i;oe.documentNotReadyOrSSRTesting=$i;var Ai=lo,Ii=Ri(Ai),Pi=te;function Ri(n){return n&&n.__esModule?n:{default:n}}var J=null;function Vi(){J&&(J.removeAttribute?J.removeAttribute("aria-hidden"):J.length!=null?J.forEach(function(n){return n.removeAttribute("aria-hidden")}):document.querySelectorAll(J).forEach(function(n){return n.removeAttribute("aria-hidden")})),J=null}function Ti(){}function Ln(n,e){if(!n||!n.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function Li(n){var e=n;if(typeof e=="string"&&Pi.canUseDOM){var o=document.querySelectorAll(e);Ln(o,e),e=o}return J=e||J,J}function ht(n){var e=n||J;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Ii.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function ki(n){var e=!0,o=!1,r=void 0;try{for(var t=ht(n)[Symbol.iterator](),i;!(e=(i=t.next()).done);e=!0){var u=i.value;u.setAttribute("aria-hidden","true")}}catch(s){o=!0,r=s}finally{try{!e&&t.return&&t.return()}finally{if(o)throw r}}}function _i(n){var e=!0,o=!1,r=void 0;try{for(var t=ht(n)[Symbol.iterator](),i;!(e=(i=t.next()).done);e=!0){var u=i.value;u.removeAttribute("aria-hidden")}}catch(s){o=!0,r=s}finally{try{!e&&t.return&&t.return()}finally{if(o)throw r}}}function $i(){J=null}var ge={};Object.defineProperty(ge,"__esModule",{value:!0});ge.resetState=Bi;ge.log=Ni;var Ce={},ye={};function Ut(n,e){n.classList.remove(e)}function Bi(){var n=document.getElementsByTagName("html")[0];for(var e in Ce)Ut(n,Ce[e]);var o=document.body;for(var r in ye)Ut(o,ye[r]);Ce={},ye={}}function Ni(){}var Hi=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},ji=function(e,o){return e[o]&&(e[o]-=1),o},Wi=function(e,o,r){r.forEach(function(t){Hi(o,t),e.add(t)})},Ui=function(e,o,r){r.forEach(function(t){ji(o,t),o[t]===0&&e.remove(t)})};ge.add=function(e,o){return Wi(e.classList,e.nodeName.toLowerCase()=="html"?Ce:ye,o.split(" "))};ge.remove=function(e,o){return Ui(e.classList,e.nodeName.toLowerCase()=="html"?Ce:ye,o.split(" "))};var be={};Object.defineProperty(be,"__esModule",{value:!0});be.log=qi;be.resetState=Gi;function zi(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var kn=function n(){var e=this;zi(this,n),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var r=e.openInstances.indexOf(o);r!==-1&&(e.openInstances.splice(r,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(r){return r(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},Ne=new kn;function qi(){console.log("portalOpenInstances ----------"),console.log(Ne.openInstances.length),Ne.openInstances.forEach(function(n){return console.log(n)}),console.log("end portalOpenInstances ----------")}function Gi(){Ne=new kn}be.default=Ne;var mt={};Object.defineProperty(mt,"__esModule",{value:!0});mt.resetState=Zi;mt.log=Ji;var Yi=be,Ki=Xi(Yi);function Xi(n){return n&&n.__esModule?n:{default:n}}var Y=void 0,Q=void 0,pe=[];function Zi(){for(var n=[Y,Q],e=0;e<n.length;e++){var o=n[e];o&&o.parentNode&&o.parentNode.removeChild(o)}Y=Q=null,pe=[]}function Ji(){console.log("bodyTrap ----------"),console.log(pe.length);for(var n=[Y,Q],e=0;e<n.length;e++){var o=n[e],r=o||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function zt(){pe.length!==0&&pe[pe.length-1].focusContent()}function Qi(n,e){!Y&&!Q&&(Y=document.createElement("div"),Y.setAttribute("data-react-modal-body-trap",""),Y.style.position="absolute",Y.style.opacity="0",Y.setAttribute("tabindex","0"),Y.addEventListener("focus",zt),Q=Y.cloneNode(),Q.addEventListener("focus",zt)),pe=e,pe.length>0?(document.body.firstChild!==Y&&document.body.insertBefore(Y,document.body.firstChild),document.body.lastChild!==Q&&document.body.appendChild(Q)):(Y.parentElement&&Y.parentElement.removeChild(Y),Q.parentElement&&Q.parentElement.removeChild(Q))}Ki.default.subscribe(Qi);(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(I){for(var w=1;w<arguments.length;w++){var L=arguments[w];for(var p in L)Object.prototype.hasOwnProperty.call(L,p)&&(I[p]=L[p])}return I},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(I){return typeof I}:function(I){return I&&typeof Symbol=="function"&&I.constructor===Symbol&&I!==Symbol.prototype?"symbol":typeof I},t=function(){function I(w,L){for(var p=0;p<L.length;p++){var S=L[p];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(w,S.key,S)}}return function(w,L,p){return L&&I(w.prototype,L),p&&I(w,p),w}}(),i=v,u=on,s=V(u),a=ne,l=A(a),c=wi,d=V(c),f=oe,h=A(f),g=ge,E=A(g),m=te,b=V(m),C=be,O=V(C);function A(I){if(I&&I.__esModule)return I;var w={};if(I!=null)for(var L in I)Object.prototype.hasOwnProperty.call(I,L)&&(w[L]=I[L]);return w.default=I,w}function V(I){return I&&I.__esModule?I:{default:I}}function k(I,w){if(!(I instanceof w))throw new TypeError("Cannot call a class as a function")}function _(I,w){if(!I)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w&&(typeof w=="object"||typeof w=="function")?w:I}function M(I,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof w);I.prototype=Object.create(w&&w.prototype,{constructor:{value:I,enumerable:!1,writable:!0,configurable:!0}}),w&&(Object.setPrototypeOf?Object.setPrototypeOf(I,w):I.__proto__=w)}var $={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},U=function(w){return w.code==="Tab"||w.keyCode===9},G=function(w){return w.code==="Escape"||w.keyCode===27},z=0,X=function(I){M(w,I);function w(L){k(this,w);var p=_(this,(w.__proto__||Object.getPrototypeOf(w)).call(this,L));return p.setOverlayRef=function(S){p.overlay=S,p.props.overlayRef&&p.props.overlayRef(S)},p.setContentRef=function(S){p.content=S,p.props.contentRef&&p.props.contentRef(S)},p.afterClose=function(){var S=p.props,N=S.appElement,H=S.ariaHideApp,j=S.htmlOpenClassName,B=S.bodyOpenClassName,q=S.parentSelector,K=q&&q().ownerDocument||document;B&&E.remove(K.body,B),j&&E.remove(K.getElementsByTagName("html")[0],j),H&&z>0&&(z-=1,z===0&&h.show(N)),p.props.shouldFocusAfterRender&&(p.props.shouldReturnFocusAfterClose?(l.returnFocus(p.props.preventScroll),l.teardownScopedFocus()):l.popWithoutFocus()),p.props.onAfterClose&&p.props.onAfterClose(),O.default.deregister(p)},p.open=function(){p.beforeOpen(),p.state.afterOpen&&p.state.beforeClose?(clearTimeout(p.closeTimer),p.setState({beforeClose:!1})):(p.props.shouldFocusAfterRender&&(l.setupScopedFocus(p.node),l.markForFocusLater()),p.setState({isOpen:!0},function(){p.openAnimationFrame=requestAnimationFrame(function(){p.setState({afterOpen:!0}),p.props.isOpen&&p.props.onAfterOpen&&p.props.onAfterOpen({overlayEl:p.overlay,contentEl:p.content})})}))},p.close=function(){p.props.closeTimeoutMS>0?p.closeWithTimeout():p.closeWithoutTimeout()},p.focusContent=function(){return p.content&&!p.contentHasFocus()&&p.content.focus({preventScroll:!0})},p.closeWithTimeout=function(){var S=Date.now()+p.props.closeTimeoutMS;p.setState({beforeClose:!0,closesAt:S},function(){p.closeTimer=setTimeout(p.closeWithoutTimeout,p.state.closesAt-Date.now())})},p.closeWithoutTimeout=function(){p.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},p.afterClose)},p.handleKeyDown=function(S){U(S)&&(0,d.default)(p.content,S),p.props.shouldCloseOnEsc&&G(S)&&(S.stopPropagation(),p.requestClose(S))},p.handleOverlayOnClick=function(S){p.shouldClose===null&&(p.shouldClose=!0),p.shouldClose&&p.props.shouldCloseOnOverlayClick&&(p.ownerHandlesClose()?p.requestClose(S):p.focusContent()),p.shouldClose=null},p.handleContentOnMouseUp=function(){p.shouldClose=!1},p.handleOverlayOnMouseDown=function(S){!p.props.shouldCloseOnOverlayClick&&S.target==p.overlay&&S.preventDefault()},p.handleContentOnClick=function(){p.shouldClose=!1},p.handleContentOnMouseDown=function(){p.shouldClose=!1},p.requestClose=function(S){return p.ownerHandlesClose()&&p.props.onRequestClose(S)},p.ownerHandlesClose=function(){return p.props.onRequestClose},p.shouldBeClosed=function(){return!p.state.isOpen&&!p.state.beforeClose},p.contentHasFocus=function(){return document.activeElement===p.content||p.content.contains(document.activeElement)},p.buildClassName=function(S,N){var H=(typeof N>"u"?"undefined":r(N))==="object"?N:{base:$[S],afterOpen:$[S]+"--after-open",beforeClose:$[S]+"--before-close"},j=H.base;return p.state.afterOpen&&(j=j+" "+H.afterOpen),p.state.beforeClose&&(j=j+" "+H.beforeClose),typeof N=="string"&&N?j+" "+N:j},p.attributesFromObject=function(S,N){return Object.keys(N).reduce(function(H,j){return H[S+"-"+j]=N[j],H},{})},p.state={afterOpen:!1,beforeClose:!1},p.shouldClose=null,p.moveFromContentToOverlay=null,p}return t(w,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(p,S){this.props.isOpen&&!p.isOpen?this.open():!this.props.isOpen&&p.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!S.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var p=this.props,S=p.appElement,N=p.ariaHideApp,H=p.htmlOpenClassName,j=p.bodyOpenClassName,B=p.parentSelector,q=B&&B().ownerDocument||document;j&&E.add(q.body,j),H&&E.add(q.getElementsByTagName("html")[0],H),N&&(z+=1,h.hide(S)),O.default.register(this)}},{key:"render",value:function(){var p=this.props,S=p.id,N=p.className,H=p.overlayClassName,j=p.defaultStyles,B=p.children,q=N?{}:j.content,K=H?{}:j.overlay;if(this.shouldBeClosed())return null;var re={ref:this.setOverlayRef,className:this.buildClassName("overlay",H),style:o({},K,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Z=o({id:S,ref:this.setContentRef,style:o({},q,this.props.style.content),className:this.buildClassName("content",N),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),ae=this.props.contentElement(Z,B);return this.props.overlayElement(re,ae)}}]),w}(i.Component);X.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},X.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),parentSelector:s.default.func,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(b.default),s.default.instanceOf(m.SafeHTMLCollection),s.default.instanceOf(m.SafeNodeList),s.default.arrayOf(s.default.instanceOf(b.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},e.default=X,n.exports=e.default})(ot,ot.exports);var eu=ot.exports;function _n(){var n=this.constructor.getDerivedStateFromProps(this.props,this.state);n!=null&&this.setState(n)}function $n(n){function e(o){var r=this.constructor.getDerivedStateFromProps(n,o);return r??null}this.setState(e.bind(this))}function Bn(n,e){try{var o=this.props,r=this.state;this.props=n,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,r)}finally{this.props=o,this.state=r}}_n.__suppressDeprecationWarning=!0;$n.__suppressDeprecationWarning=!0;Bn.__suppressDeprecationWarning=!0;function tu(n){var e=n.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof n.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return n;var o=null,r=null,t=null;if(typeof e.componentWillMount=="function"?o="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?t="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(t="UNSAFE_componentWillUpdate"),o!==null||r!==null||t!==null){var i=n.displayName||n.name,u=typeof n.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+i+" uses "+u+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(r!==null?`
  `+r:"")+(t!==null?`
  `+t:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof n.getDerivedStateFromProps=="function"&&(e.componentWillMount=_n,e.componentWillReceiveProps=$n),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=Bn;var s=e.componentDidUpdate;e.componentDidUpdate=function(l,c,d){var f=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:d;s.call(this,l,c,f)}}return n}const nu=Object.freeze(Object.defineProperty({__proto__:null,polyfill:tu},Symbol.toStringTag,{value:"Module"})),ou=Jn(nu);Object.defineProperty(fe,"__esModule",{value:!0});fe.bodyOpenClassName=fe.portalClassName=void 0;var qt=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n[r]=o[r])}return n},ru=function(){function n(e,o){for(var r=0;r<o.length;r++){var t=o[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(e,o,r){return o&&n(e.prototype,o),r&&n(e,r),e}}(),Nn=v,He=Oe(Nn),au=Qt,je=Oe(au),iu=on,R=Oe(iu),uu=eu,Gt=Oe(uu),su=oe,lu=du(su),ce=te,Yt=Oe(ce),cu=ou;function du(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e.default=n,e}function Oe(n){return n&&n.__esModule?n:{default:n}}function pu(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Kt(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n}function fu(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}var hu=fe.portalClassName="ReactModalPortal",mu=fe.bodyOpenClassName="ReactModal__Body--open",de=ce.canUseDOM&&je.default.createPortal!==void 0,Xt=function(e){return document.createElement(e)},Zt=function(){return de?je.default.createPortal:je.default.unstable_renderSubtreeIntoContainer};function Re(n){return n()}var Fe=function(n){fu(e,n);function e(){var o,r,t,i;pu(this,e);for(var u=arguments.length,s=Array(u),a=0;a<u;a++)s[a]=arguments[a];return i=(r=(t=Kt(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(s))),t),t.removePortal=function(){!de&&je.default.unmountComponentAtNode(t.node);var l=Re(t.props.parentSelector);l&&l.contains(t.node)?l.removeChild(t.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},t.portalRef=function(l){t.portal=l},t.renderPortal=function(l){var c=Zt(),d=c(t,He.default.createElement(Gt.default,qt({defaultStyles:e.defaultStyles},l)),t.node);t.portalRef(d)},r),Kt(t,i)}return ru(e,[{key:"componentDidMount",value:function(){if(ce.canUseDOM){de||(this.node=Xt("div")),this.node.className=this.props.portalClassName;var r=Re(this.props.parentSelector);r.appendChild(this.node),!de&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var t=Re(r.parentSelector),i=Re(this.props.parentSelector);return{prevParent:t,nextParent:i}}},{key:"componentDidUpdate",value:function(r,t,i){if(ce.canUseDOM){var u=this.props,s=u.isOpen,a=u.portalClassName;r.portalClassName!==a&&(this.node.className=a);var l=i.prevParent,c=i.nextParent;c!==l&&(l.removeChild(this.node),c.appendChild(this.node)),!(!r.isOpen&&!s)&&!de&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!ce.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,t=Date.now(),i=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||t+this.props.closeTimeoutMS);i?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,i-t)):this.removePortal()}}},{key:"render",value:function(){if(!ce.canUseDOM||!de)return null;!this.node&&de&&(this.node=Xt("div"));var r=Zt();return r(He.default.createElement(Gt.default,qt({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){lu.setElement(r)}}]),e}(Nn.Component);Fe.propTypes={isOpen:R.default.bool.isRequired,style:R.default.shape({content:R.default.object,overlay:R.default.object}),portalClassName:R.default.string,bodyOpenClassName:R.default.string,htmlOpenClassName:R.default.string,className:R.default.oneOfType([R.default.string,R.default.shape({base:R.default.string.isRequired,afterOpen:R.default.string.isRequired,beforeClose:R.default.string.isRequired})]),overlayClassName:R.default.oneOfType([R.default.string,R.default.shape({base:R.default.string.isRequired,afterOpen:R.default.string.isRequired,beforeClose:R.default.string.isRequired})]),appElement:R.default.oneOfType([R.default.instanceOf(Yt.default),R.default.instanceOf(ce.SafeHTMLCollection),R.default.instanceOf(ce.SafeNodeList),R.default.arrayOf(R.default.instanceOf(Yt.default))]),onAfterOpen:R.default.func,onRequestClose:R.default.func,closeTimeoutMS:R.default.number,ariaHideApp:R.default.bool,shouldFocusAfterRender:R.default.bool,shouldCloseOnOverlayClick:R.default.bool,shouldReturnFocusAfterClose:R.default.bool,preventScroll:R.default.bool,parentSelector:R.default.func,aria:R.default.object,data:R.default.object,role:R.default.string,contentLabel:R.default.string,shouldCloseOnEsc:R.default.bool,overlayRef:R.default.func,contentRef:R.default.func,id:R.default.string,overlayElement:R.default.func,contentElement:R.default.func};Fe.defaultProps={isOpen:!1,portalClassName:hu,bodyOpenClassName:mu,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return He.default.createElement("div",e,o)},contentElement:function(e,o){return He.default.createElement("div",e,o)}};Fe.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,cu.polyfill)(Fe);fe.default=Fe;(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var o=fe,r=t(o);function t(i){return i&&i.__esModule?i:{default:i}}e.default=r.default,n.exports=e.default})(nt,nt.exports);var vu=nt.exports;const gu=Qn(vu),bu=T.button`
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
    stroke: ${y.colorWhite};
  }
`,Hn=({isOpen:n,onRequestClose:e,children:o})=>{const[r,t]=v.useState(n);v.useEffect(()=>(r?document.body.style.overflow="hidden":document.body.style.overflow="visible",()=>{document.body.style.overflow="visible"}),[r]);const i=()=>{t(!1),e&&e()},u={overlay:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(18, 20, 23, 0.50)",zIndex:1e3,overflow:"auto"},content:{maxWidth:"fit-content",maxHeight:"fit-content",margin:"auto",overflow:"auto",inset:0,border:"none",background:"none",padding:0}};return x.jsxs(gu,{isOpen:r,onRequestClose:i,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,ariaHideApp:!1,style:u,children:[x.jsx(bu,{type:"button",onClick:i,children:x.jsx("svg",{children:x.jsx("use",{href:ue+"#icon-x"})})}),o]})},xu=T.form`
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
`,Eu=T.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,Cu=T.h4`
  padding: 8px 14px;
  height: 34px;
  width: 100%;
  align-self: flex-start;
  color: ${y.colorInput};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2857;
  word-wrap: break-word;
  border-radius: 12px;
  border: 1px #e6533c solid;

  @media (min-width: 768px) {
    width: 216px;
    height: 40px;
    font-size: 16px;
    line-height: 1.5;
  }
`,yu=T.div`
  position: relative;
  height: 34px;

  @media (min-width: 768px) {
    width: 155px;
    height: 40px;
  }
`,wu=T.input`
  width: 100%;
  padding: 8px 14px;
  height: 100%;
  border-radius: 12px;
  border: 1px solid ${y.colorOrange};
  background: transparent;
  color: ${y.colorWhite};
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
`,Su=T.label`
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
`,Ou=T.p`
  display: flex;
  color: ${y.colorSecondaryRed};
  font-size: 12px;
  margin: 0;
  line-height: 1.5;
  position: absolute;
  /* top: 36px; */
  /* left: 0; */
  word-wrap: break-word;

  > svg {
    width: 16px;
    height: 16px;
    fill: ${y.colorSecondaryRed};
  }

  /* @media (min-width: 768px) {
    top: 50px;
    left: 0;
  } */
`,Jt=T.p`
  color: ${y.colorWhite};
  line-height: 1.5;
  font-size: 12px;
  word-wrap: break-word;
  margin-top: 16px;

  > span {
    color: rgba(239, 237, 232, 0.4);
  }
`,Fu=T.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 24px;

  > button {
    cursor: pointer;
    display: block;
    border-radius: 12px;
    color: ${y.colorWhite};
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
`,Du=T.button`
  max-width: 151px;
  background-color: ${y.colorOrange};
  border: transparent;
  padding: 12px 32px;
`,Mu=T.button`
  max-width: 121px;
  background-color: transparent;
  border: 1px rgba(239, 237, 232, 0.3) solid;
  padding: 12px 34px;

  @media (min-width: 768px) {
    width: 142px;
  }
`,Au="/PowerPulse/assets/avocado-46dd5bc9.png",Iu=T.div`
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
`,Pu=T.div`
  margin: 0 auto 3px;
  width: 123px;
  height: 97px;
  background: url(${Au});

  @media (min-width: 768px) {
    margin-bottom: 19px;
  }
`,Ru=T.h4`
  margin: 0 auto 16px;
  color: ${y.colorWhite};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
  word-wrap: break-word;
`,Vu=T.p`
  color: ${y.colorOrange};
  line-height: 1.2857;
  word-wrap: break-word;
  > span {
    color: rgba(239, 237, 232, 0.3);
  }
`,Tu=T.button`
  cursor: pointer;
  display: block;
  margin: 32px auto 16px;
  width: 157px;
  height: 42px;
  background-color: ${y.colorOrange};
  border-radius: 12px;
  color: ${y.colorWhite};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.125;
  word-wrap: break-word;
  outline: none;
  border: transparent;

  @media (min-width: 768px) {
    height: 52px;
  }
`,Lu=T(eo)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${y.colorInput};
  line-height: 1.2357;
  word-wrap: break-word;

  > svg {
    stroke: ${y.colorInput};
    width: 16px;
    height: 16px;
  }
`,ku=(n,e)=>x.jsxs(Iu,{children:[x.jsx(Pu,{}),x.jsx(Ru,{children:"Well done"}),x.jsxs(Vu,{children:[x.jsx("span",{children:"Calories: "}),n]}),x.jsx(Tu,{type:"button",onClick:e,children:"Next product"}),x.jsxs(Lu,{to:"/diary",children:["To the diary",x.jsx("svg",{children:x.jsx("use",{href:ue+"#icon-arrow"})})]})]}),_u=({closeModallAddProduct:n,productTitle:e,calories:o,productId:r})=>{const[t,i]=v.useState({product:"",date:"",amount:"",calories:""}),[u,s]=v.useState(""),[a,l]=v.useState(""),[c,d]=v.useState(!1),[f,h]=v.useState(!1),[g,E]=v.useState(!1);function m(){E(!0)}const b=()=>{g&&E(!1)},C=new Date,O=`${C.getDate()}.${C.getMonth()+1}.${C.getFullYear()}`,A=e[0].toUpperCase()+e.slice(1).toLowerCase(),V=_=>{if(_.preventDefault(),(0>=t.amount||3e3<=t.amount)&&t.amount)l("Entering value must be at range 1g to 3000g"),d(!0),s(o);else if(Object.keys(t).length<0||t.amount==="")l("Enter amount*"),d(!0);else{l(""),d(!1),h(!0);try{console.log(t),n(),E(!0),m()}catch(M){nn.error("Network error:",M)}}},k=_=>{const M=parseFloat(_.target.value),$=parseFloat(o);if(!isNaN(M)&&!isNaN($)){const U=Math.round(M*$/100);s(U),i({product:r,date:O,amount:M,calories:U}),l(""),d(!1)}else s(o),i({product:"",date:"",amount:"",calories:""})};return x.jsxs(x.Fragment,{children:[x.jsxs(xu,{onSubmit:V,noValidate:!0,children:[x.jsxs(Eu,{children:[x.jsx(Cu,{children:A}),x.jsxs(yu,{children:[x.jsx(Su,{htmlFor:"calories",children:"grams"}),x.jsx(wu,{type:"number",name:"calories",placeholder:"100",autoComplete:"off",required:!0,step:"1",min:"1",max:"3000",onChange:k}),c&&x.jsxs(Ou,{children:[x.jsx("svg",{children:x.jsx("use",{href:ue+"#icon-checkbox-circle-fill"})}),a]})]})]}),u?x.jsxs(Jt,{children:[x.jsx("span",{children:"Calories: "}),u]}):x.jsxs(Jt,{children:[x.jsx("span",{children:"Calories: "}),o]}),x.jsxs(Fu,{children:[x.jsx(Du,{type:"submit",children:"Add to diary"}),x.jsx(Mu,{type:"button",onClick:()=>{n()},children:"Cancel"})]})]}),f&&x.jsx(Hn,{isOpen:g,onRequestClose:b,children:x.jsx(ku,{onClose:b,calories:u})})]})},$u=T.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 32px 16px;
  }
`,Bu=T.div`
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
`,Nu=T.p`
  line-height: 1.2857;
  word-wrap: break-word;
  color: ${y.colorInput};

  > span {
    color: ${y.colorOrange};
  }

  @media (min-width: 768px) {
    line-height: 1.5;
    font-weight: 16px;
  }
`,Hu=T.p`
  line-height: 1.2857;
  word-wrap: break-word;
  color: ${y.colorOrange};

  @media (min-width: 768px) {
    line-height: 1.5;
    font-weight: 16px;
  }
`,ju=({products:n})=>{const[e,o]=v.useState(null),[r,t]=v.useState(!1),i=a=>{t(!0),o(a)},u=()=>{r&&t(!1),o(null)},s=1;return x.jsxs(x.Fragment,{children:[n.length>0?x.jsx($u,{children:n.map(a=>x.jsx(pi,{product:a,type:a.groupBloodNotAllowed[s],category:a.category,title:a.title,calories:a.calories,weight:a.weight,handleOpenModal:i},a._id.$oid))}):x.jsxs(Bu,{children:[x.jsxs(Nu,{children:[x.jsx("span",{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),x.jsx(Hu,{children:"Try changing the search parameters."})]}),e&&x.jsx(Hn,{isOpen:r,onRequestClose:u,children:x.jsx(_u,{closeModallAddProduct:u,calories:e.calories,productTitle:e.title,productId:e._id.$oid})})]})},Wu="/PowerPulse/assets/products-bg-b7e77cea.jpg",Uu="/PowerPulse/assets/products-bg@2x-9876be0a.jpg",zu=T.div`
  padding: 40px 0 80px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
    padding: 72px 0 48px;
    gap: 32px;
  }

  @media (min-width: 1440px) {
    padding: 72px 0 81px;
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${Wu});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
    /* background-size: 428px 716px; */
  }

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${Uu});
  }
`,qu=T.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
    gap: 32px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,Gu=T.div`
  @media (min-width: 768px) {
    height: 660px;
    width: 704px;
    overflow: auto;
  }

  @media (min-width: 1440px) {
    height: 487px;
    width: 850px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${y.colorOrange1};
    border-radius: 12px;
  }
`,Yu=n=>n.products.productsArray,Ku=n=>n.products.productsCategories,es=()=>{const n=en();v.useEffect(()=>{(async()=>{try{await n(tn({title:"",category:null,groupBloodNotAllowed:null}))}catch(t){nn.error("Error fetching data:",t),console.error("Error fetching data:",t)}})()},[n]),v.useEffect(()=>{n(to())},[n]);const e=Et(Ku),o=Et(Yu);return x.jsxs(zu,{children:[x.jsxs(qu,{children:[x.jsx(no,{title:"Products Page"}),x.jsx(ri,{categories:e.map(r=>r.title)})]}),x.jsx(Gu,{children:x.jsx(ju,{products:o})})]})};export{es as default};
