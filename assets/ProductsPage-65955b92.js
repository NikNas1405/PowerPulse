import{w as Gn,r as v,E as Kn,x as Xn,y as Zn,_ as Jn,z as P,q as tn,s as _,g as y,u as lt,j as b,a as ie,p as ct,O as Qn,A as Ee,B as eo,f as to,N as no,D as oo,Q as nn,e as Ce,i as ro,F as ao,C as io}from"./index-5e009931.js";import{T as uo}from"./TitlePage-d1177218.js";import{e as ye,a as on,h as so,_ as lo,b as co,c as po,d as fo,g as ho,i as mo}from"./warning-dc180499.js";import"./hoist-non-react-statics.cjs-eb492985.js";import{W as vo,T as go,P as bo}from"./ProductsPage.styled-2806ef3e.js";var O=function(e,o){var r=arguments;if(o==null||!Gn.call(o,"css"))return v.createElement.apply(void 0,r);var t=r.length,i=new Array(t);i[0]=Kn,i[1]=Xn(e,o);for(var u=2;u<t;u++)i[u]=r[u];return v.createElement.apply(null,i)};function dt(){for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return Zn(e)}var xo=function(){var e=dt.apply(void 0,arguments),o="animation-"+e.name;return{name:o,styles:"@keyframes "+o+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},rn={exports:{}},Eo="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",yo=Eo,Co=yo;function an(){}function un(){}un.resetWarningCache=an;var So=function(){function n(r,t,i,u,s,a){if(a!==Co){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}n.isRequired=n;function e(){return n}var o={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:un,resetWarningCache:an};return o.PropTypes=o,o};rn.exports=So();var sn=rn.exports;const wo=Math.min,Oo=Math.max,ke=Math.round,Pe=Math.floor,_e=n=>({x:n,y:n});function Fo(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function ln(n){return dn(n)?(n.nodeName||"").toLowerCase():"#document"}function ee(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function cn(n){var e;return(e=(dn(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function dn(n){return n instanceof Node||n instanceof ee(n).Node}function tt(n){return n instanceof Element||n instanceof ee(n).Element}function pt(n){return n instanceof HTMLElement||n instanceof ee(n).HTMLElement}function St(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof ee(n).ShadowRoot}function pn(n){const{overflow:e,overflowX:o,overflowY:r,display:t}=ft(n);return/auto|scroll|overlay|hidden|clip/.test(e+r+o)&&!["inline","contents"].includes(t)}function Do(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Mo(n){return["html","body","#document"].includes(ln(n))}function ft(n){return ee(n).getComputedStyle(n)}function Ao(n){if(ln(n)==="html")return n;const e=n.assignedSlot||n.parentNode||St(n)&&n.host||cn(n);return St(e)?e.host:e}function fn(n){const e=Ao(n);return Mo(e)?n.ownerDocument?n.ownerDocument.body:n.body:pt(e)&&pn(e)?e:fn(e)}function $e(n,e,o){var r;e===void 0&&(e=[]),o===void 0&&(o=!0);const t=fn(n),i=t===((r=n.ownerDocument)==null?void 0:r.body),u=ee(t);return i?e.concat(u,u.visualViewport||[],pn(t)?t:[],u.frameElement&&o?$e(u.frameElement):[]):e.concat(t,$e(t,[],o))}function Po(n){const e=ft(n);let o=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const t=pt(n),i=t?n.offsetWidth:o,u=t?n.offsetHeight:r,s=ke(o)!==i||ke(r)!==u;return s&&(o=i,r=u),{width:o,height:r,$:s}}function ht(n){return tt(n)?n:n.contextElement}function Ye(n){const e=ht(n);if(!pt(e))return _e(1);const o=e.getBoundingClientRect(),{width:r,height:t,$:i}=Po(e);let u=(i?ke(o.width):o.width)/r,s=(i?ke(o.height):o.height)/t;return(!u||!Number.isFinite(u))&&(u=1),(!s||!Number.isFinite(s))&&(s=1),{x:u,y:s}}const Io=_e(0);function Ro(n){const e=ee(n);return!Do()||!e.visualViewport?Io:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function To(n,e,o){return e===void 0&&(e=!1),!o||e&&o!==ee(n)?!1:e}function wt(n,e,o,r){e===void 0&&(e=!1),o===void 0&&(o=!1);const t=n.getBoundingClientRect(),i=ht(n);let u=_e(1);e&&(r?tt(r)&&(u=Ye(r)):u=Ye(n));const s=To(i,o,r)?Ro(i):_e(0);let a=(t.left+s.x)/u.x,l=(t.top+s.y)/u.y,c=t.width/u.x,d=t.height/u.y;if(i){const f=ee(i),h=r&&tt(r)?ee(r):r;let g=f.frameElement;for(;g&&r&&h!==f;){const E=Ye(g),m=g.getBoundingClientRect(),x=ft(g),R=m.left+(g.clientLeft+parseFloat(x.paddingLeft))*E.x,I=m.top+(g.clientTop+parseFloat(x.paddingTop))*E.y;a*=E.x,l*=E.y,c*=E.x,d*=E.y,a+=R,l+=I,g=ee(g).frameElement}}return Fo({width:c,height:d,x:a,y:l})}function Vo(n,e){let o=null,r;const t=cn(n);function i(){clearTimeout(r),o&&o.disconnect(),o=null}function u(s,a){s===void 0&&(s=!1),a===void 0&&(a=1),i();const{left:l,top:c,width:d,height:f}=n.getBoundingClientRect();if(s||e(),!d||!f)return;const h=Pe(c),g=Pe(t.clientWidth-(l+d)),E=Pe(t.clientHeight-(c+f)),m=Pe(l),R={rootMargin:-h+"px "+-g+"px "+-E+"px "+-m+"px",threshold:Oo(0,wo(1,a))||1};let I=!0;function T(L){const C=L[0].intersectionRatio;if(C!==a){if(!I)return u();C?u(!1,C):r=setTimeout(()=>{u(!1,1e-7)},100)}I=!1}try{o=new IntersectionObserver(T,{...R,root:t.ownerDocument})}catch{o=new IntersectionObserver(T,R)}o.observe(n)}return u(!0),i}function Lo(n,e,o,r){r===void 0&&(r={});const{ancestorScroll:t=!0,ancestorResize:i=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,l=ht(n),c=t||i?[...l?$e(l):[],...$e(e)]:[];c.forEach(x=>{t&&x.addEventListener("scroll",o,{passive:!0}),i&&x.addEventListener("resize",o)});const d=l&&s?Vo(l,o):null;let f=-1,h=null;u&&(h=new ResizeObserver(x=>{let[R]=x;R&&R.target===l&&h&&(h.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{h&&h.observe(e)})),o()}),l&&!a&&h.observe(l),h.observe(e));let g,E=a?wt(n):null;a&&m();function m(){const x=wt(n);E&&(x.x!==E.x||x.y!==E.y||x.width!==E.width||x.height!==E.height)&&o(),E=x,g=requestAnimationFrame(m)}return o(),()=>{c.forEach(x=>{t&&x.removeEventListener("scroll",o),i&&x.removeEventListener("resize",o)}),d&&d(),h&&h.disconnect(),h=null,a&&cancelAnimationFrame(g)}}function Ot(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),o.push.apply(o,r)}return o}function D(n){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?Ot(Object(o),!0).forEach(function(r){ye(n,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):Ot(Object(o)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(o,r))})}return n}function ko(n){if(Array.isArray(n))return n}function _o(n,e){var o=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var r,t,i,u,s=[],a=!0,l=!1;try{if(i=(o=o.call(n)).next,e===0){if(Object(o)!==o)return;a=!1}else for(;!(a=(r=i.call(o)).done)&&(s.push(r.value),s.length!==e);a=!0);}catch(c){l=!0,t=c}finally{try{if(!a&&o.return!=null&&(u=o.return(),Object(u)!==u))return}finally{if(l)throw t}}return s}}function $o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function se(n,e){return ko(n)||_o(n,e)||on(n,e)||$o()}function le(n,e){if(n==null)return{};var o=Jn(n,e),r,t;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var Bo=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function No(n){var e=n.defaultInputValue,o=e===void 0?"":e,r=n.defaultMenuIsOpen,t=r===void 0?!1:r,i=n.defaultValue,u=i===void 0?null:i,s=n.inputValue,a=n.menuIsOpen,l=n.onChange,c=n.onInputChange,d=n.onMenuClose,f=n.onMenuOpen,h=n.value,g=le(n,Bo),E=v.useState(s!==void 0?s:o),m=se(E,2),x=m[0],R=m[1],I=v.useState(a!==void 0?a:t),T=se(I,2),L=T[0],C=T[1],F=v.useState(h!==void 0?h:u),M=se(F,2),$=M[0],q=M[1],Y=v.useCallback(function(w,N){typeof l=="function"&&l(w,N),q(w)},[l]),U=v.useCallback(function(w,N){var H;typeof c=="function"&&(H=c(w,N)),R(H!==void 0?H:w)},[c]),X=v.useCallback(function(){typeof f=="function"&&f(),C(!0)},[f]),A=v.useCallback(function(){typeof d=="function"&&d(),C(!1)},[d]),S=s!==void 0?s:x,k=a!==void 0?a:L,p=h!==void 0?h:$;return D(D({},g),{},{inputValue:S,menuIsOpen:k,onChange:Y,onInputChange:U,onMenuClose:A,onMenuOpen:X,value:p})}function Ho(n){if(Array.isArray(n))return so(n)}function jo(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Wo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mt(n){return Ho(n)||jo(n)||on(n)||Wo()}function Uo(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var nt=v.useLayoutEffect,zo=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Be=function(){};function qo(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function Yo(n,e){for(var o=arguments.length,r=new Array(o>2?o-2:0),t=2;t<o;t++)r[t-2]=arguments[t];var i=[].concat(r);if(e&&n)for(var u in e)e.hasOwnProperty(u)&&e[u]&&i.push("".concat(qo(n,u)));return i.filter(function(s){return s}).map(function(s){return String(s).trim()}).join(" ")}var Ft=function(e){return nr(e)?e.filter(Boolean):lo(e)==="object"&&e!==null?[e]:[]},hn=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var o=le(e,zo);return D({},o)},W=function(e,o,r){var t=e.cx,i=e.getStyles,u=e.getClassNames,s=e.className;return{css:i(o,e),className:t(r??{},u(o,e),s)}};function ze(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Go(n){return ze(n)?window.innerHeight:n.clientHeight}function mn(n){return ze(n)?window.pageYOffset:n.scrollTop}function Ne(n,e){if(ze(n)){window.scrollTo(0,e);return}n.scrollTop=e}function Ko(n){var e=getComputedStyle(n),o=e.position==="absolute",r=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(o&&e.position==="static")&&r.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function Xo(n,e,o,r){return o*((n=n/r-1)*n*n+1)+e}function Ie(n,e){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Be,t=mn(n),i=e-t,u=10,s=0;function a(){s+=u;var l=Xo(s,t,i,o);Ne(n,l),s<o?window.requestAnimationFrame(a):r(n)}a()}function Dt(n,e){var o=n.getBoundingClientRect(),r=e.getBoundingClientRect(),t=e.offsetHeight/3;r.bottom+t>o.bottom?Ne(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):r.top-t<o.top&&Ne(n,Math.max(e.offsetTop-t,0))}function Zo(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Mt(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Jo(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var vn=!1,Qo={get passive(){return vn=!0}},Re=typeof window<"u"?window:{};Re.addEventListener&&Re.removeEventListener&&(Re.addEventListener("p",Be,Qo),Re.removeEventListener("p",Be,!1));var er=vn;function tr(n){return n!=null}function nr(n){return Array.isArray(n)}function Te(n,e,o){return n?e:o}var or=function(e){for(var o=arguments.length,r=new Array(o>1?o-1:0),t=1;t<o;t++)r[t-1]=arguments[t];var i=Object.entries(e).filter(function(u){var s=se(u,1),a=s[0];return!r.includes(a)});return i.reduce(function(u,s){var a=se(s,2),l=a[0],c=a[1];return u[l]=c,u},{})},rr=["children","innerProps"],ar=["children","innerProps"];function ir(n){var e=n.maxHeight,o=n.menuEl,r=n.minHeight,t=n.placement,i=n.shouldScroll,u=n.isFixedPosition,s=n.controlHeight,a=Ko(o),l={placement:"bottom",maxHeight:e};if(!o||!o.offsetParent)return l;var c=a.getBoundingClientRect(),d=c.height,f=o.getBoundingClientRect(),h=f.bottom,g=f.height,E=f.top,m=o.offsetParent.getBoundingClientRect(),x=m.top,R=u?window.innerHeight:Go(a),I=mn(a),T=parseInt(getComputedStyle(o).marginBottom,10),L=parseInt(getComputedStyle(o).marginTop,10),C=x-L,F=R-E,M=C+I,$=d-I-E,q=h-R+I+T,Y=I+E-L,U=160;switch(t){case"auto":case"bottom":if(F>=g)return{placement:"bottom",maxHeight:e};if($>=g&&!u)return i&&Ie(a,q,U),{placement:"bottom",maxHeight:e};if(!u&&$>=r||u&&F>=r){i&&Ie(a,q,U);var X=u?F-T:$-T;return{placement:"bottom",maxHeight:X}}if(t==="auto"||u){var A=e,S=u?C:M;return S>=r&&(A=Math.min(S-T-s,e)),{placement:"top",maxHeight:A}}if(t==="bottom")return i&&Ne(a,q),{placement:"bottom",maxHeight:e};break;case"top":if(C>=g)return{placement:"top",maxHeight:e};if(M>=g&&!u)return i&&Ie(a,Y,U),{placement:"top",maxHeight:e};if(!u&&M>=r||u&&C>=r){var k=e;return(!u&&M>=r||u&&C>=r)&&(k=u?C-L:M-L),i&&Ie(a,Y,U),{placement:"top",maxHeight:k}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return l}function ur(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var gn=function(e){return e==="auto"?"bottom":e},sr=function(e,o){var r,t=e.placement,i=e.theme,u=i.borderRadius,s=i.spacing,a=i.colors;return D((r={label:"menu"},ye(r,ur(t),"100%"),ye(r,"position","absolute"),ye(r,"width","100%"),ye(r,"zIndex",1),r),o?{}:{backgroundColor:a.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:s.menuGutter,marginTop:s.menuGutter})},bn=v.createContext(null),lr=function(e){var o=e.children,r=e.minMenuHeight,t=e.maxMenuHeight,i=e.menuPlacement,u=e.menuPosition,s=e.menuShouldScrollIntoView,a=e.theme,l=v.useContext(bn)||{},c=l.setPortalPlacement,d=v.useRef(null),f=v.useState(t),h=se(f,2),g=h[0],E=h[1],m=v.useState(null),x=se(m,2),R=x[0],I=x[1],T=a.spacing.controlHeight;return nt(function(){var L=d.current;if(L){var C=u==="fixed",F=s&&!C,M=ir({maxHeight:t,menuEl:L,minHeight:r,placement:i,shouldScroll:F,isFixedPosition:C,controlHeight:T});E(M.maxHeight),I(M.placement),c==null||c(M.placement)}},[t,i,u,s,r,c,T]),o({ref:d,placerProps:D(D({},e),{},{placement:R||gn(i),maxHeight:g})})},cr=function(e){var o=e.children,r=e.innerRef,t=e.innerProps;return O("div",P({},W(e,"menu",{menu:!0}),{ref:r},t),o)},dr=cr,pr=function(e,o){var r=e.maxHeight,t=e.theme.spacing.baseUnit;return D({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},o?{}:{paddingBottom:t,paddingTop:t})},fr=function(e){var o=e.children,r=e.innerProps,t=e.innerRef,i=e.isMulti;return O("div",P({},W(e,"menuList",{"menu-list":!0,"menu-list--is-multi":i}),{ref:t},r),o)},xn=function(e,o){var r=e.theme,t=r.spacing.baseUnit,i=r.colors;return D({textAlign:"center"},o?{}:{color:i.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},hr=xn,mr=xn,vr=function(e){var o=e.children,r=o===void 0?"No options":o,t=e.innerProps,i=le(e,rr);return O("div",P({},W(D(D({},i),{},{children:r,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),r)},gr=function(e){var o=e.children,r=o===void 0?"Loading...":o,t=e.innerProps,i=le(e,ar);return O("div",P({},W(D(D({},i),{},{children:r,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),r)},br=function(e){var o=e.rect,r=e.offset,t=e.position;return{left:o.left,position:t,top:r,width:o.width,zIndex:1}},xr=function(e){var o=e.appendTo,r=e.children,t=e.controlElement,i=e.innerProps,u=e.menuPlacement,s=e.menuPosition,a=v.useRef(null),l=v.useRef(null),c=v.useState(gn(u)),d=se(c,2),f=d[0],h=d[1],g=v.useMemo(function(){return{setPortalPlacement:h}},[]),E=v.useState(null),m=se(E,2),x=m[0],R=m[1],I=v.useCallback(function(){if(t){var F=Zo(t),M=s==="fixed"?0:window.pageYOffset,$=F[f]+M;($!==(x==null?void 0:x.offset)||F.left!==(x==null?void 0:x.rect.left)||F.width!==(x==null?void 0:x.rect.width))&&R({offset:$,rect:F})}},[t,s,f,x==null?void 0:x.offset,x==null?void 0:x.rect.left,x==null?void 0:x.rect.width]);nt(function(){I()},[I]);var T=v.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),t&&a.current&&(l.current=Lo(t,a.current,I,{elementResize:"ResizeObserver"in window}))},[t,I]);nt(function(){T()},[T]);var L=v.useCallback(function(F){a.current=F,T()},[T]);if(!o&&s!=="fixed"||!x)return null;var C=O("div",P({ref:L},W(D(D({},e),{},{offset:x.offset,position:s,rect:x.rect}),"menuPortal",{"menu-portal":!0}),i),r);return O(bn.Provider,{value:g},o?tn.createPortal(C,o):C)},Er=function(e){var o=e.isDisabled,r=e.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:o?"none":void 0,position:"relative"}},yr=function(e){var o=e.children,r=e.innerProps,t=e.isDisabled,i=e.isRtl;return O("div",P({},W(e,"container",{"--is-disabled":t,"--is-rtl":i}),r),o)},Cr=function(e,o){var r=e.theme.spacing,t=e.isMulti,i=e.hasValue,u=e.selectProps.controlShouldRenderValue;return D({alignItems:"center",display:t&&i&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},o?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},Sr=function(e){var o=e.children,r=e.innerProps,t=e.isMulti,i=e.hasValue;return O("div",P({},W(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":i}),r),o)},wr=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Or=function(e){var o=e.children,r=e.innerProps;return O("div",P({},W(e,"indicatorsContainer",{indicators:!0}),r),o)},At,Fr=["size"],Dr=["innerProps","isRtl","size"],Mr={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},En=function(e){var o=e.size,r=le(e,Fr);return O("svg",P({height:o,width:o,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Mr},r))},vt=function(e){return O(En,P({size:20},e),O("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},yn=function(e){return O(En,P({size:20},e),O("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Cn=function(e,o){var r=e.isFocused,t=e.theme,i=t.spacing.baseUnit,u=t.colors;return D({label:"indicatorContainer",display:"flex",transition:"color 150ms"},o?{}:{color:r?u.neutral60:u.neutral20,padding:i*2,":hover":{color:r?u.neutral80:u.neutral40}})},Ar=Cn,Pr=function(e){var o=e.children,r=e.innerProps;return O("div",P({},W(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),o||O(yn,null))},Ir=Cn,Rr=function(e){var o=e.children,r=e.innerProps;return O("div",P({},W(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),o||O(vt,null))},Tr=function(e,o){var r=e.isDisabled,t=e.theme,i=t.spacing.baseUnit,u=t.colors;return D({label:"indicatorSeparator",alignSelf:"stretch",width:1},o?{}:{backgroundColor:r?u.neutral10:u.neutral20,marginBottom:i*2,marginTop:i*2})},Vr=function(e){var o=e.innerProps;return O("span",P({},o,W(e,"indicatorSeparator",{"indicator-separator":!0})))},Lr=xo(At||(At=Uo([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),kr=function(e,o){var r=e.isFocused,t=e.size,i=e.theme,u=i.colors,s=i.spacing.baseUnit;return D({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},o?{}:{color:r?u.neutral60:u.neutral20,padding:s*2})},Ge=function(e){var o=e.delay,r=e.offset;return O("span",{css:dt({animation:"".concat(Lr," 1s ease-in-out ").concat(o,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},_r=function(e){var o=e.innerProps,r=e.isRtl,t=e.size,i=t===void 0?4:t,u=le(e,Dr);return O("div",P({},W(D(D({},u),{},{innerProps:o,isRtl:r,size:i}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),o),O(Ge,{delay:0,offset:r}),O(Ge,{delay:160,offset:!0}),O(Ge,{delay:320,offset:!r}))},$r=function(e,o){var r=e.isDisabled,t=e.isFocused,i=e.theme,u=i.colors,s=i.borderRadius,a=i.spacing;return D({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:a.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},o?{}:{backgroundColor:r?u.neutral5:u.neutral0,borderColor:r?u.neutral10:t?u.primary:u.neutral20,borderRadius:s,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:t?u.primary:u.neutral30}})},Br=function(e){var o=e.children,r=e.isDisabled,t=e.isFocused,i=e.innerRef,u=e.innerProps,s=e.menuIsOpen;return O("div",P({ref:i},W(e,"control",{control:!0,"control--is-disabled":r,"control--is-focused":t,"control--menu-is-open":s}),u,{"aria-disabled":r||void 0}),o)},Nr=Br,Hr=["data"],jr=function(e,o){var r=e.theme.spacing;return o?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Wr=function(e){var o=e.children,r=e.cx,t=e.getStyles,i=e.getClassNames,u=e.Heading,s=e.headingProps,a=e.innerProps,l=e.label,c=e.theme,d=e.selectProps;return O("div",P({},W(e,"group",{group:!0}),a),O(u,P({},s,{selectProps:d,theme:c,getStyles:t,getClassNames:i,cx:r}),l),O("div",null,o))},Ur=function(e,o){var r=e.theme,t=r.colors,i=r.spacing;return D({label:"group",cursor:"default",display:"block"},o?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:i.baseUnit*3,paddingRight:i.baseUnit*3,textTransform:"uppercase"})},zr=function(e){var o=hn(e);o.data;var r=le(o,Hr);return O("div",P({},W(e,"groupHeading",{"group-heading":!0}),r))},qr=Wr,Yr=["innerRef","isDisabled","isHidden","inputClassName"],Gr=function(e,o){var r=e.isDisabled,t=e.value,i=e.theme,u=i.spacing,s=i.colors;return D(D({visibility:r?"hidden":"visible",transform:t?"translateZ(0)":""},Kr),o?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:s.neutral80})},Sn={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Kr={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":D({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Sn)},Xr=function(e){return D({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Sn)},Zr=function(e){var o=e.cx,r=e.value,t=hn(e),i=t.innerRef,u=t.isDisabled,s=t.isHidden,a=t.inputClassName,l=le(t,Yr);return O("div",P({},W(e,"input",{"input-container":!0}),{"data-value":r||""}),O("input",P({className:o({input:!0},a),ref:i,style:Xr(s),disabled:u},l)))},Jr=Zr,Qr=function(e,o){var r=e.theme,t=r.spacing,i=r.borderRadius,u=r.colors;return D({label:"multiValue",display:"flex",minWidth:0},o?{}:{backgroundColor:u.neutral10,borderRadius:i/2,margin:t.baseUnit/2})},ea=function(e,o){var r=e.theme,t=r.borderRadius,i=r.colors,u=e.cropWithEllipsis;return D({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},o?{}:{borderRadius:t/2,color:i.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},ta=function(e,o){var r=e.theme,t=r.spacing,i=r.borderRadius,u=r.colors,s=e.isFocused;return D({alignItems:"center",display:"flex"},o?{}:{borderRadius:i/2,backgroundColor:s?u.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},wn=function(e){var o=e.children,r=e.innerProps;return O("div",r,o)},na=wn,oa=wn;function ra(n){var e=n.children,o=n.innerProps;return O("div",P({role:"button"},o),e||O(vt,{size:14}))}var aa=function(e){var o=e.children,r=e.components,t=e.data,i=e.innerProps,u=e.isDisabled,s=e.removeProps,a=e.selectProps,l=r.Container,c=r.Label,d=r.Remove;return O(l,{data:t,innerProps:D(D({},W(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),i),selectProps:a},O(c,{data:t,innerProps:D({},W(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:a},o),O(d,{data:t,innerProps:D(D({},W(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(o||"option")},s),selectProps:a}))},ia=aa,ua=function(e,o){var r=e.isDisabled,t=e.isFocused,i=e.isSelected,u=e.theme,s=u.spacing,a=u.colors;return D({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},o?{}:{backgroundColor:i?a.primary:t?a.primary25:"transparent",color:r?a.neutral20:i?a.neutral0:"inherit",padding:"".concat(s.baseUnit*2,"px ").concat(s.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:i?a.primary:a.primary50}})},sa=function(e){var o=e.children,r=e.isDisabled,t=e.isFocused,i=e.isSelected,u=e.innerRef,s=e.innerProps;return O("div",P({},W(e,"option",{option:!0,"option--is-disabled":r,"option--is-focused":t,"option--is-selected":i}),{ref:u,"aria-disabled":r},s),o)},la=sa,ca=function(e,o){var r=e.theme,t=r.spacing,i=r.colors;return D({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},o?{}:{color:i.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},da=function(e){var o=e.children,r=e.innerProps;return O("div",P({},W(e,"placeholder",{placeholder:!0}),r),o)},pa=da,fa=function(e,o){var r=e.isDisabled,t=e.theme,i=t.spacing,u=t.colors;return D({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o?{}:{color:r?u.neutral40:u.neutral80,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},ha=function(e){var o=e.children,r=e.isDisabled,t=e.innerProps;return O("div",P({},W(e,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),t),o)},ma=ha,va={ClearIndicator:Rr,Control:Nr,DropdownIndicator:Pr,DownChevron:yn,CrossIcon:vt,Group:qr,GroupHeading:zr,IndicatorsContainer:Or,IndicatorSeparator:Vr,Input:Jr,LoadingIndicator:_r,Menu:dr,MenuList:fr,MenuPortal:xr,LoadingMessage:gr,NoOptionsMessage:vr,MultiValue:ia,MultiValueContainer:na,MultiValueLabel:oa,MultiValueRemove:ra,Option:la,Placeholder:pa,SelectContainer:yr,SingleValue:ma,ValueContainer:Sr},ga=function(e){return D(D({},va),e.components)},Pt=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function ba(n,e){return!!(n===e||Pt(n)&&Pt(e))}function xa(n,e){if(n.length!==e.length)return!1;for(var o=0;o<n.length;o++)if(!ba(n[o],e[o]))return!1;return!0}function Ea(n,e){e===void 0&&(e=xa);var o=null;function r(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];if(o&&o.lastThis===this&&e(t,o.lastArgs))return o.lastResult;var u=n.apply(this,t);return o={lastResult:u,lastArgs:t,lastThis:this},u}return r.clear=function(){o=null},r}var ya={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Ca=function(e){return O("span",P({css:ya},e))},It=Ca,Sa={guidance:function(e){var o=e.isSearchable,r=e.isMulti,t=e.tabSelectsValue,i=e.context,u=e.isInitialFocus;switch(i){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(t?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(e["aria-label"]||"Select"," is focused ").concat(o?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var o=e.action,r=e.label,t=r===void 0?"":r,i=e.labels,u=e.isDisabled;switch(o){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(i.length>1?"s":""," ").concat(i.join(","),", selected.");case"select-option":return u?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var o=e.context,r=e.focused,t=e.options,i=e.label,u=i===void 0?"":i,s=e.selectValue,a=e.isDisabled,l=e.isSelected,c=e.isAppleDevice,d=function(E,m){return E&&E.length?"".concat(E.indexOf(m)+1," of ").concat(E.length):""};if(o==="value"&&s)return"value ".concat(u," focused, ").concat(d(s,r),".");if(o==="menu"&&c){var f=a?" disabled":"",h="".concat(l?" selected":"").concat(f);return"".concat(u).concat(h,", ").concat(d(t,r),".")}return""},onFilter:function(e){var o=e.inputValue,r=e.resultsMessage;return"".concat(r).concat(o?" for search term "+o:"",".")}},wa=function(e){var o=e.ariaSelection,r=e.focusedOption,t=e.focusedValue,i=e.focusableOptions,u=e.isFocused,s=e.selectValue,a=e.selectProps,l=e.id,c=e.isAppleDevice,d=a.ariaLiveMessages,f=a.getOptionLabel,h=a.inputValue,g=a.isMulti,E=a.isOptionDisabled,m=a.isSearchable,x=a.menuIsOpen,R=a.options,I=a.screenReaderStatus,T=a.tabSelectsValue,L=a.isLoading,C=a["aria-label"],F=a["aria-live"],M=v.useMemo(function(){return D(D({},Sa),d||{})},[d]),$=v.useMemo(function(){var S="";if(o&&M.onChange){var k=o.option,p=o.options,w=o.removedValue,N=o.removedValues,H=o.value,j=function(ue){return Array.isArray(ue)?null:ue},B=w||k||j(H),z=B?f(B):"",K=p||N||void 0,re=K?K.map(f):[],Z=D({isDisabled:B&&E(B,s),label:z,labels:re},o);S=M.onChange(Z)}return S},[o,M,E,s,f]),q=v.useMemo(function(){var S="",k=r||t,p=!!(r&&s&&s.includes(r));if(k&&M.onFocus){var w={focused:k,label:f(k),isDisabled:E(k,s),isSelected:p,options:i,context:k===r?"menu":"value",selectValue:s,isAppleDevice:c};S=M.onFocus(w)}return S},[r,t,f,E,M,i,s,c]),Y=v.useMemo(function(){var S="";if(x&&R.length&&!L&&M.onFilter){var k=I({count:i.length});S=M.onFilter({inputValue:h,resultsMessage:k})}return S},[i,h,x,M,R,I,L]),U=(o==null?void 0:o.action)==="initial-input-focus",X=v.useMemo(function(){var S="";if(M.guidance){var k=t?"value":x?"menu":"input";S=M.guidance({"aria-label":C,context:k,isDisabled:r&&E(r,s),isMulti:g,isSearchable:m,tabSelectsValue:T,isInitialFocus:U})}return S},[C,r,t,g,E,m,x,M,s,T,U]),A=O(v.Fragment,null,O("span",{id:"aria-selection"},$),O("span",{id:"aria-focused"},q),O("span",{id:"aria-results"},Y),O("span",{id:"aria-guidance"},X));return O(v.Fragment,null,O(It,{id:l},U&&A),O(It,{"aria-live":F,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!U&&A))},Oa=wa,ot=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Fa=new RegExp("["+ot.map(function(n){return n.letters}).join("")+"]","g"),On={};for(var Ke=0;Ke<ot.length;Ke++)for(var Xe=ot[Ke],Ze=0;Ze<Xe.letters.length;Ze++)On[Xe.letters[Ze]]=Xe.base;var Fn=function(e){return e.replace(Fa,function(o){return On[o]})},Da=Ea(Fn),Rt=function(e){return e.replace(/^\s+|\s+$/g,"")},Ma=function(e){return"".concat(e.label," ").concat(e.value)},Aa=function(e){return function(o,r){if(o.data.__isNew__)return!0;var t=D({ignoreCase:!0,ignoreAccents:!0,stringify:Ma,trim:!0,matchFrom:"any"},e),i=t.ignoreCase,u=t.ignoreAccents,s=t.stringify,a=t.trim,l=t.matchFrom,c=a?Rt(r):r,d=a?Rt(s(o)):s(o);return i&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=Da(c),d=Fn(d)),l==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Pa=["innerRef"];function Ia(n){var e=n.innerRef,o=le(n,Pa),r=or(o,"onExited","in","enter","exit","appear");return O("input",P({ref:e},r,{css:dt({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Ra=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function Ta(n){var e=n.isEnabled,o=n.onBottomArrive,r=n.onBottomLeave,t=n.onTopArrive,i=n.onTopLeave,u=v.useRef(!1),s=v.useRef(!1),a=v.useRef(0),l=v.useRef(null),c=v.useCallback(function(m,x){if(l.current!==null){var R=l.current,I=R.scrollTop,T=R.scrollHeight,L=R.clientHeight,C=l.current,F=x>0,M=T-L-I,$=!1;M>x&&u.current&&(r&&r(m),u.current=!1),F&&s.current&&(i&&i(m),s.current=!1),F&&x>M?(o&&!u.current&&o(m),C.scrollTop=T,$=!0,u.current=!0):!F&&-x>I&&(t&&!s.current&&t(m),C.scrollTop=0,$=!0,s.current=!0),$&&Ra(m)}},[o,r,t,i]),d=v.useCallback(function(m){c(m,m.deltaY)},[c]),f=v.useCallback(function(m){a.current=m.changedTouches[0].clientY},[]),h=v.useCallback(function(m){var x=a.current-m.changedTouches[0].clientY;c(m,x)},[c]),g=v.useCallback(function(m){if(m){var x=er?{passive:!1}:!1;m.addEventListener("wheel",d,x),m.addEventListener("touchstart",f,x),m.addEventListener("touchmove",h,x)}},[h,f,d]),E=v.useCallback(function(m){m&&(m.removeEventListener("wheel",d,!1),m.removeEventListener("touchstart",f,!1),m.removeEventListener("touchmove",h,!1))},[h,f,d]);return v.useEffect(function(){if(e){var m=l.current;return g(m),function(){E(m)}}},[e,g,E]),function(m){l.current=m}}var Tt=["boxSizing","height","overflow","paddingRight","position"],Vt={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Lt(n){n.preventDefault()}function kt(n){n.stopPropagation()}function _t(){var n=this.scrollTop,e=this.scrollHeight,o=n+this.offsetHeight;n===0?this.scrollTop=1:o===e&&(this.scrollTop=n-1)}function $t(){return"ontouchstart"in window||navigator.maxTouchPoints}var Bt=!!(typeof window<"u"&&window.document&&window.document.createElement),xe=0,he={capture:!1,passive:!1};function Va(n){var e=n.isEnabled,o=n.accountForScrollbars,r=o===void 0?!0:o,t=v.useRef({}),i=v.useRef(null),u=v.useCallback(function(a){if(Bt){var l=document.body,c=l&&l.style;if(r&&Tt.forEach(function(g){var E=c&&c[g];t.current[g]=E}),r&&xe<1){var d=parseInt(t.current.paddingRight,10)||0,f=document.body?document.body.clientWidth:0,h=window.innerWidth-f+d||0;Object.keys(Vt).forEach(function(g){var E=Vt[g];c&&(c[g]=E)}),c&&(c.paddingRight="".concat(h,"px"))}l&&$t()&&(l.addEventListener("touchmove",Lt,he),a&&(a.addEventListener("touchstart",_t,he),a.addEventListener("touchmove",kt,he))),xe+=1}},[r]),s=v.useCallback(function(a){if(Bt){var l=document.body,c=l&&l.style;xe=Math.max(xe-1,0),r&&xe<1&&Tt.forEach(function(d){var f=t.current[d];c&&(c[d]=f)}),l&&$t()&&(l.removeEventListener("touchmove",Lt,he),a&&(a.removeEventListener("touchstart",_t,he),a.removeEventListener("touchmove",kt,he)))}},[r]);return v.useEffect(function(){if(e){var a=i.current;return u(a),function(){s(a)}}},[e,u,s]),function(a){i.current=a}}var La=function(e){var o=e.target;return o.ownerDocument.activeElement&&o.ownerDocument.activeElement.blur()},ka={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function _a(n){var e=n.children,o=n.lockEnabled,r=n.captureEnabled,t=r===void 0?!0:r,i=n.onBottomArrive,u=n.onBottomLeave,s=n.onTopArrive,a=n.onTopLeave,l=Ta({isEnabled:t,onBottomArrive:i,onBottomLeave:u,onTopArrive:s,onTopLeave:a}),c=Va({isEnabled:o}),d=function(h){l(h),c(h)};return O(v.Fragment,null,o&&O("div",{onClick:La,css:ka}),e(d))}var $a={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Ba=function(e){var o=e.name,r=e.onFocus;return O("input",{required:!0,name:o,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:$a,value:"",onChange:function(){}})},Na=Ba;function gt(n){var e;return typeof window<"u"&&window.navigator!=null?n.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Ha(){return gt(/^iPhone/i)}function Dn(){return gt(/^Mac/i)}function ja(){return gt(/^iPad/i)||Dn()&&navigator.maxTouchPoints>1}function Wa(){return Ha()||ja()}function Ua(){return Dn()||Wa()}var za=function(e){return e.label},qa=function(e){return e.label},Ya=function(e){return e.value},Ga=function(e){return!!e.isDisabled},Ka={clearIndicator:Ir,container:Er,control:$r,dropdownIndicator:Ar,group:jr,groupHeading:Ur,indicatorsContainer:wr,indicatorSeparator:Tr,input:Gr,loadingIndicator:kr,loadingMessage:mr,menu:sr,menuList:pr,menuPortal:br,multiValue:Qr,multiValueLabel:ea,multiValueRemove:ta,noOptionsMessage:hr,option:ua,placeholder:ca,singleValue:fa,valueContainer:Cr},Xa={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Za=4,Mn=4,Ja=38,Qa=Mn*2,ei={baseUnit:Mn,controlHeight:Ja,menuGutter:Qa},Je={borderRadius:Za,colors:Xa,spacing:ei},ti={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Mt(),captureMenuScroll:!Mt(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Aa(),formatGroupLabel:za,getOptionLabel:qa,getOptionValue:Ya,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Ga,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Jo(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var o=e.count;return"".concat(o," result").concat(o!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Nt(n,e,o,r){var t=In(n,e,o),i=Rn(n,e,o),u=Pn(n,e),s=He(n,e);return{type:"option",data:e,isDisabled:t,isSelected:i,label:u,value:s,index:r}}function Le(n,e){return n.options.map(function(o,r){if("options"in o){var t=o.options.map(function(u,s){return Nt(n,u,e,s)}).filter(function(u){return jt(n,u)});return t.length>0?{type:"group",data:o,options:t,index:r}:void 0}var i=Nt(n,o,e,r);return jt(n,i)?i:void 0}).filter(tr)}function An(n){return n.reduce(function(e,o){return o.type==="group"?e.push.apply(e,mt(o.options.map(function(r){return r.data}))):e.push(o.data),e},[])}function Ht(n,e){return n.reduce(function(o,r){return r.type==="group"?o.push.apply(o,mt(r.options.map(function(t){return{data:t.data,id:"".concat(e,"-").concat(r.index,"-").concat(t.index)}}))):o.push({data:r.data,id:"".concat(e,"-").concat(r.index)}),o},[])}function ni(n,e){return An(Le(n,e))}function jt(n,e){var o=n.inputValue,r=o===void 0?"":o,t=e.data,i=e.isSelected,u=e.label,s=e.value;return(!Vn(n)||!i)&&Tn(n,{label:u,value:s,data:t},r)}function oi(n,e){var o=n.focusedValue,r=n.selectValue,t=r.indexOf(o);if(t>-1){var i=e.indexOf(o);if(i>-1)return o;if(t<e.length)return e[t]}return null}function ri(n,e){var o=n.focusedOption;return o&&e.indexOf(o)>-1?o:e[0]}var Qe=function(e,o){var r,t=(r=e.find(function(i){return i.data===o}))===null||r===void 0?void 0:r.id;return t||null},Pn=function(e,o){return e.getOptionLabel(o)},He=function(e,o){return e.getOptionValue(o)};function In(n,e,o){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,o):!1}function Rn(n,e,o){if(o.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,o);var r=He(n,e);return o.some(function(t){return He(n,t)===r})}function Tn(n,e,o){return n.filterOption?n.filterOption(e,o):!0}var Vn=function(e){var o=e.hideSelectedOptions,r=e.isMulti;return o===void 0?r:o},ai=1,Ln=function(n){co(o,n);var e=po(o);function o(r){var t;if(fo(this,o),t=e.call(this,r),t.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.isAppleDevice=Ua(),t.controlRef=null,t.getControlRef=function(a){t.controlRef=a},t.focusedOptionRef=null,t.getFocusedOptionRef=function(a){t.focusedOptionRef=a},t.menuListRef=null,t.getMenuListRef=function(a){t.menuListRef=a},t.inputRef=null,t.getInputRef=function(a){t.inputRef=a},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(a,l){var c=t.props,d=c.onChange,f=c.name;l.name=f,t.ariaOnChange(a,l),d(a,l)},t.setValue=function(a,l,c){var d=t.props,f=d.closeMenuOnSelect,h=d.isMulti,g=d.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:g}),f&&(t.setState({inputIsHiddenAfterUpdate:!h}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(a,{action:l,option:c})},t.selectOption=function(a){var l=t.props,c=l.blurInputOnSelect,d=l.isMulti,f=l.name,h=t.state.selectValue,g=d&&t.isOptionSelected(a,h),E=t.isOptionDisabled(a,h);if(g){var m=t.getOptionValue(a);t.setValue(h.filter(function(x){return t.getOptionValue(x)!==m}),"deselect-option",a)}else if(!E)d?t.setValue([].concat(mt(h),[a]),"select-option",a):t.setValue(a,"select-option");else{t.ariaOnChange(a,{action:"select-option",option:a,name:f});return}c&&t.blurInput()},t.removeValue=function(a){var l=t.props.isMulti,c=t.state.selectValue,d=t.getOptionValue(a),f=c.filter(function(g){return t.getOptionValue(g)!==d}),h=Te(l,f,f[0]||null);t.onChange(h,{action:"remove-value",removedValue:a}),t.focusInput()},t.clearValue=function(){var a=t.state.selectValue;t.onChange(Te(t.props.isMulti,[],null),{action:"clear",removedValues:a})},t.popValue=function(){var a=t.props.isMulti,l=t.state.selectValue,c=l[l.length-1],d=l.slice(0,l.length-1),f=Te(a,d,d[0]||null);t.onChange(f,{action:"pop-value",removedValue:c})},t.getFocusedOptionId=function(a){return Qe(t.state.focusableOptionsWithIds,a)},t.getFocusableOptionsWithIds=function(){return Ht(Le(t.props,t.state.selectValue),t.getElementId("option"))},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return Yo.apply(void 0,[t.props.classNamePrefix].concat(l))},t.getOptionLabel=function(a){return Pn(t.props,a)},t.getOptionValue=function(a){return He(t.props,a)},t.getStyles=function(a,l){var c=t.props.unstyled,d=Ka[a](l,c);d.boxSizing="border-box";var f=t.props.styles[a];return f?f(d,l):d},t.getClassNames=function(a,l){var c,d;return(c=(d=t.props.classNames)[a])===null||c===void 0?void 0:c.call(d,l)},t.getElementId=function(a){return"".concat(t.state.instancePrefix,"-").concat(a)},t.getComponents=function(){return ga(t.props)},t.buildCategorizedOptions=function(){return Le(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return An(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(a,l){t.setState({ariaSelection:D({value:a},l)})},t.onMenuMouseDown=function(a){a.button===0&&(a.stopPropagation(),a.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(a){t.blockOptionHover=!1},t.onControlMouseDown=function(a){if(!a.defaultPrevented){var l=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&t.onMenuClose():l&&t.openMenu("first"):(l&&(t.openAfterFocus=!0),t.focusInput()),a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.preventDefault()}},t.onDropdownIndicatorMouseDown=function(a){if(!(a&&a.type==="mousedown"&&a.button!==0)&&!t.props.isDisabled){var l=t.props,c=l.isMulti,d=l.menuIsOpen;t.focusInput(),d?(t.setState({inputIsHiddenAfterUpdate:!c}),t.onMenuClose()):t.openMenu("first"),a.preventDefault()}},t.onClearIndicatorMouseDown=function(a){a&&a.type==="mousedown"&&a.button!==0||(t.clearValue(),a.preventDefault(),t.openAfterFocus=!1,a.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(a){typeof t.props.closeMenuOnScroll=="boolean"?a.target instanceof HTMLElement&&ze(a.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(a)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(a){var l=a.touches,c=l&&l.item(0);c&&(t.initialTouchX=c.clientX,t.initialTouchY=c.clientY,t.userIsDragging=!1)},t.onTouchMove=function(a){var l=a.touches,c=l&&l.item(0);if(c){var d=Math.abs(c.clientX-t.initialTouchX),f=Math.abs(c.clientY-t.initialTouchY),h=5;t.userIsDragging=d>h||f>h}},t.onTouchEnd=function(a){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(a.target)&&t.menuListRef&&!t.menuListRef.contains(a.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(a){t.userIsDragging||t.onControlMouseDown(a)},t.onClearIndicatorTouchEnd=function(a){t.userIsDragging||t.onClearIndicatorMouseDown(a)},t.onDropdownIndicatorTouchEnd=function(a){t.userIsDragging||t.onDropdownIndicatorMouseDown(a)},t.handleInputChange=function(a){var l=t.props.inputValue,c=a.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(c,{action:"input-change",prevInputValue:l}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(a){t.props.onFocus&&t.props.onFocus(a),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(a){var l=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(a),t.onInputChange("",{action:"input-blur",prevInputValue:l}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(a){if(!(t.blockOptionHover||t.state.focusedOption===a)){var l=t.getFocusableOptions(),c=l.indexOf(a);t.setState({focusedOption:a,focusedOptionId:c>-1?t.getFocusedOptionId(a):null})}},t.shouldHideSelectedOptions=function(){return Vn(t.props)},t.onValueInputFocus=function(a){a.preventDefault(),a.stopPropagation(),t.focus()},t.onKeyDown=function(a){var l=t.props,c=l.isMulti,d=l.backspaceRemovesValue,f=l.escapeClearsValue,h=l.inputValue,g=l.isClearable,E=l.isDisabled,m=l.menuIsOpen,x=l.onKeyDown,R=l.tabSelectsValue,I=l.openMenuOnFocus,T=t.state,L=T.focusedOption,C=T.focusedValue,F=T.selectValue;if(!E&&!(typeof x=="function"&&(x(a),a.defaultPrevented))){switch(t.blockOptionHover=!0,a.key){case"ArrowLeft":if(!c||h)return;t.focusValue("previous");break;case"ArrowRight":if(!c||h)return;t.focusValue("next");break;case"Delete":case"Backspace":if(h)return;if(C)t.removeValue(C);else{if(!d)return;c?t.popValue():g&&t.clearValue()}break;case"Tab":if(t.isComposing||a.shiftKey||!m||!R||!L||I&&t.isOptionSelected(L,F))return;t.selectOption(L);break;case"Enter":if(a.keyCode===229)break;if(m){if(!L||t.isComposing)return;t.selectOption(L);break}return;case"Escape":m?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:h}),t.onMenuClose()):g&&f&&t.clearValue();break;case" ":if(h)return;if(!m){t.openMenu("first");break}if(!L)return;t.selectOption(L);break;case"ArrowUp":m?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":m?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!m)return;t.focusOption("pageup");break;case"PageDown":if(!m)return;t.focusOption("pagedown");break;case"Home":if(!m)return;t.focusOption("first");break;case"End":if(!m)return;t.focusOption("last");break;default:return}a.preventDefault()}},t.state.instancePrefix="react-select-"+(t.props.instanceId||++ai),t.state.selectValue=Ft(r.value),r.menuIsOpen&&t.state.selectValue.length){var i=t.getFocusableOptionsWithIds(),u=t.buildFocusableOptions(),s=u.indexOf(t.state.selectValue[0]);t.state.focusableOptionsWithIds=i,t.state.focusedOption=u[s],t.state.focusedOptionId=Qe(i,u[s])}return t}return ho(o,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Dt(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var i=this.props,u=i.isDisabled,s=i.menuIsOpen,a=this.state.isFocused;(a&&!u&&t.isDisabled||a&&s&&!t.menuIsOpen)&&this.focusInput(),a&&u&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!a&&!u&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Dt(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,i){this.props.onInputChange(t,i)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var i=this,u=this.state,s=u.selectValue,a=u.isFocused,l=this.buildFocusableOptions(),c=t==="first"?0:l.length-1;if(!this.props.isMulti){var d=l.indexOf(s[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(a&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[c],focusedOptionId:this.getFocusedOptionId(l[c])},function(){return i.onMenuOpen()})}},{key:"focusValue",value:function(t){var i=this.state,u=i.selectValue,s=i.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var a=u.indexOf(s);s||(a=-1);var l=u.length-1,c=-1;if(u.length){switch(t){case"previous":a===0?c=0:a===-1?c=l:c=a-1;break;case"next":a>-1&&a<l&&(c=a+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",i=this.props.pageSize,u=this.state.focusedOption,s=this.getFocusableOptions();if(s.length){var a=0,l=s.indexOf(u);u||(l=-1),t==="up"?a=l>0?l-1:s.length-1:t==="down"?a=(l+1)%s.length:t==="pageup"?(a=l-i,a<0&&(a=0)):t==="pagedown"?(a=l+i,a>s.length-1&&(a=s.length-1)):t==="last"&&(a=s.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:s[a],focusedValue:null,focusedOptionId:this.getFocusedOptionId(s[a])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Je):D(D({},Je),this.props.theme):Je}},{key:"getCommonProps",value:function(){var t=this.clearValue,i=this.cx,u=this.getStyles,s=this.getClassNames,a=this.getValue,l=this.selectOption,c=this.setValue,d=this.props,f=d.isMulti,h=d.isRtl,g=d.options,E=this.hasValue();return{clearValue:t,cx:i,getStyles:u,getClassNames:s,getValue:a,hasValue:E,isMulti:f,isRtl:h,options:g,selectOption:l,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,i=t.isClearable,u=t.isMulti;return i===void 0?u:i}},{key:"isOptionDisabled",value:function(t,i){return In(this.props,t,i)}},{key:"isOptionSelected",value:function(t,i){return Rn(this.props,t,i)}},{key:"filterOption",value:function(t,i){return Tn(this.props,t,i)}},{key:"formatOptionLabel",value:function(t,i){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,s=this.state.selectValue;return this.props.formatOptionLabel(t,{context:i,inputValue:u,selectValue:s})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,i=t.isDisabled,u=t.isSearchable,s=t.inputId,a=t.inputValue,l=t.tabIndex,c=t.form,d=t.menuIsOpen,f=t.required,h=this.getComponents(),g=h.Input,E=this.state,m=E.inputIsHidden,x=E.ariaSelection,R=this.commonProps,I=s||this.getElementId("input"),T=D(D(D({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":f,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(x==null?void 0:x.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?v.createElement(g,P({},R,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:I,innerRef:this.getInputRef,isDisabled:i,isHidden:m,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:c,type:"text",value:a},T)):v.createElement(Ia,P({id:I,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Be,onFocus:this.onInputFocus,disabled:i,tabIndex:l,inputMode:"none",form:c,value:""},T))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,i=this.getComponents(),u=i.MultiValue,s=i.MultiValueContainer,a=i.MultiValueLabel,l=i.MultiValueRemove,c=i.SingleValue,d=i.Placeholder,f=this.commonProps,h=this.props,g=h.controlShouldRenderValue,E=h.isDisabled,m=h.isMulti,x=h.inputValue,R=h.placeholder,I=this.state,T=I.selectValue,L=I.focusedValue,C=I.isFocused;if(!this.hasValue()||!g)return x?null:v.createElement(d,P({},f,{key:"placeholder",isDisabled:E,isFocused:C,innerProps:{id:this.getElementId("placeholder")}}),R);if(m)return T.map(function(M,$){var q=M===L,Y="".concat(t.getOptionLabel(M),"-").concat(t.getOptionValue(M));return v.createElement(u,P({},f,{components:{Container:s,Label:a,Remove:l},isFocused:q,isDisabled:E,key:Y,index:$,removeProps:{onClick:function(){return t.removeValue(M)},onTouchEnd:function(){return t.removeValue(M)},onMouseDown:function(X){X.preventDefault()}},data:M}),t.formatOptionLabel(M,"value"))});if(x)return null;var F=T[0];return v.createElement(c,P({},f,{data:F,isDisabled:E}),this.formatOptionLabel(F,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),i=t.ClearIndicator,u=this.commonProps,s=this.props,a=s.isDisabled,l=s.isLoading,c=this.state.isFocused;if(!this.isClearable()||!i||a||!this.hasValue()||l)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return v.createElement(i,P({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),i=t.LoadingIndicator,u=this.commonProps,s=this.props,a=s.isDisabled,l=s.isLoading,c=this.state.isFocused;if(!i||!l)return null;var d={"aria-hidden":"true"};return v.createElement(i,P({},u,{innerProps:d,isDisabled:a,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),i=t.DropdownIndicator,u=t.IndicatorSeparator;if(!i||!u)return null;var s=this.commonProps,a=this.props.isDisabled,l=this.state.isFocused;return v.createElement(u,P({},s,{isDisabled:a,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),i=t.DropdownIndicator;if(!i)return null;var u=this.commonProps,s=this.props.isDisabled,a=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return v.createElement(i,P({},u,{innerProps:l,isDisabled:s,isFocused:a}))}},{key:"renderMenu",value:function(){var t=this,i=this.getComponents(),u=i.Group,s=i.GroupHeading,a=i.Menu,l=i.MenuList,c=i.MenuPortal,d=i.LoadingMessage,f=i.NoOptionsMessage,h=i.Option,g=this.commonProps,E=this.state.focusedOption,m=this.props,x=m.captureMenuScroll,R=m.inputValue,I=m.isLoading,T=m.loadingMessage,L=m.minMenuHeight,C=m.maxMenuHeight,F=m.menuIsOpen,M=m.menuPlacement,$=m.menuPosition,q=m.menuPortalTarget,Y=m.menuShouldBlockScroll,U=m.menuShouldScrollIntoView,X=m.noOptionsMessage,A=m.onMenuScrollToTop,S=m.onMenuScrollToBottom;if(!F)return null;var k=function(z,K){var re=z.type,Z=z.data,ae=z.isDisabled,ue=z.isSelected,Ae=z.label,zn=z.value,Et=E===Z,yt=ae?void 0:function(){return t.onOptionHover(Z)},qn=ae?void 0:function(){return t.selectOption(Z)},Ct="".concat(t.getElementId("option"),"-").concat(K),Yn={id:Ct,onClick:qn,onMouseMove:yt,onMouseOver:yt,tabIndex:-1,role:"option","aria-selected":t.isAppleDevice?void 0:ue};return v.createElement(h,P({},g,{innerProps:Yn,data:Z,isDisabled:ae,isSelected:ue,key:Ct,label:Ae,type:re,value:zn,isFocused:Et,innerRef:Et?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(z.data,"menu"))},p;if(this.hasOptions())p=this.getCategorizedOptions().map(function(B){if(B.type==="group"){var z=B.data,K=B.options,re=B.index,Z="".concat(t.getElementId("group"),"-").concat(re),ae="".concat(Z,"-heading");return v.createElement(u,P({},g,{key:Z,data:z,options:K,Heading:s,headingProps:{id:ae,data:B.data},label:t.formatGroupLabel(B.data)}),B.options.map(function(ue){return k(ue,"".concat(re,"-").concat(ue.index))}))}else if(B.type==="option")return k(B,"".concat(B.index))});else if(I){var w=T({inputValue:R});if(w===null)return null;p=v.createElement(d,g,w)}else{var N=X({inputValue:R});if(N===null)return null;p=v.createElement(f,g,N)}var H={minMenuHeight:L,maxMenuHeight:C,menuPlacement:M,menuPosition:$,menuShouldScrollIntoView:U},j=v.createElement(lr,P({},g,H),function(B){var z=B.ref,K=B.placerProps,re=K.placement,Z=K.maxHeight;return v.createElement(a,P({},g,H,{innerRef:z,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove},isLoading:I,placement:re}),v.createElement(_a,{captureEnabled:x,onTopArrive:A,onBottomArrive:S,lockEnabled:Y},function(ae){return v.createElement(l,P({},g,{innerRef:function(Ae){t.getMenuListRef(Ae),ae(Ae)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:t.getElementId("listbox")},isLoading:I,maxHeight:Z,focusedOption:E}),p)}))});return q||$==="fixed"?v.createElement(c,P({},g,{appendTo:q,controlElement:this.controlRef,menuPlacement:M,menuPosition:$}),j):j}},{key:"renderFormField",value:function(){var t=this,i=this.props,u=i.delimiter,s=i.isDisabled,a=i.isMulti,l=i.name,c=i.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!s)return v.createElement(Na,{name:l,onFocus:this.onValueInputFocus});if(!(!l||s))if(a)if(u){var f=d.map(function(E){return t.getOptionValue(E)}).join(u);return v.createElement("input",{name:l,type:"hidden",value:f})}else{var h=d.length>0?d.map(function(E,m){return v.createElement("input",{key:"i-".concat(m),name:l,type:"hidden",value:t.getOptionValue(E)})}):v.createElement("input",{name:l,type:"hidden",value:""});return v.createElement("div",null,h)}else{var g=d[0]?this.getOptionValue(d[0]):"";return v.createElement("input",{name:l,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,i=this.state,u=i.ariaSelection,s=i.focusedOption,a=i.focusedValue,l=i.isFocused,c=i.selectValue,d=this.getFocusableOptions();return v.createElement(Oa,P({},t,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:s,focusedValue:a,isFocused:l,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var t=this.getComponents(),i=t.Control,u=t.IndicatorsContainer,s=t.SelectContainer,a=t.ValueContainer,l=this.props,c=l.className,d=l.id,f=l.isDisabled,h=l.menuIsOpen,g=this.state.isFocused,E=this.commonProps=this.getCommonProps();return v.createElement(s,P({},E,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:f,isFocused:g}),this.renderLiveRegion(),v.createElement(i,P({},E,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:f,isFocused:g,menuIsOpen:h}),v.createElement(a,P({},E,{isDisabled:f}),this.renderPlaceholderOrValue(),this.renderInput()),v.createElement(u,P({},E,{isDisabled:f}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,i){var u=i.prevProps,s=i.clearFocusValueOnUpdate,a=i.inputIsHiddenAfterUpdate,l=i.ariaSelection,c=i.isFocused,d=i.prevWasFocused,f=i.instancePrefix,h=t.options,g=t.value,E=t.menuIsOpen,m=t.inputValue,x=t.isMulti,R=Ft(g),I={};if(u&&(g!==u.value||h!==u.options||E!==u.menuIsOpen||m!==u.inputValue)){var T=E?ni(t,R):[],L=E?Ht(Le(t,R),"".concat(f,"-option")):[],C=s?oi(i,R):null,F=ri(i,T),M=Qe(L,F);I={selectValue:R,focusedOption:F,focusedOptionId:M,focusableOptionsWithIds:L,focusedValue:C,clearFocusValueOnUpdate:!1}}var $=a!=null&&t!==u?{inputIsHidden:a,inputIsHiddenAfterUpdate:void 0}:{},q=l,Y=c&&d;return c&&!Y&&(q={value:Te(x,R,R[0]||null),options:R,action:"initial-input-focus"},Y=!d),(l==null?void 0:l.action)==="initial-input-focus"&&(q=null),D(D(D({},I),$),{},{prevProps:t,ariaSelection:q,prevWasFocused:Y})}}]),o}(v.Component);Ln.defaultProps=ti;var ii=v.forwardRef(function(n,e){var o=No(n);return v.createElement(Ln,P({ref:e},o))}),Wt=ii;let Ut=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((e,o)=>(o&=63,o<36?e+=o.toString(36):o<62?e+=(o-26).toString(36).toUpperCase():o>62?e+="-":e+="_",e),"");const ui=_.form`
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
`,si=_.div`
  position: relative;
`,li=_.input`
  width: 100%;
  padding: 14px 68px 14px 14px;
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
`,ci=_.div`
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
`,di=_.svg`
  stroke: ${y.colorWhite};
`,pi=_.svg`
  stroke: ${y.colorOrange};
`,fi=_.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,hi={singleValue:n=>({...n,color:`${y.colorWhite}`}),control:(n,{isSelected:e})=>({...n,display:"flex",color:e?`${y.colorBeige}`:`${y.colorWhite}`,backgroundColor:"transparent",width:"146px",borderRadius:"12px",padding:"14px",lineHeight:"1.2857",fontSize:"14px",fontWeight:"400",outline:"none",border:`1px solid ${y.colorInput}`,boxShadow:"none",cursor:"pointer",wordWrap:"break-word",":hover":{border:`1px solid ${y.colorOrange}`},":active":{border:`1px solid ${y.colorOrange}`},":focus":{outline:"none",border:`1px solid ${y.colorOrange}`},"@media (min-width: 768px)":{fontSize:"16px",lineHeight:"1.5",width:"192px",height:"52px"},"@media (max-width: 375px)":{width:"88vw"}}),option:(n,{isHover:e,isDisabled:o,isFocused:r,isSelected:t})=>({...n,color:t?`${y.colorOrange1}`:r?`${y.colorBeige}`:e?`${y.colorBeige}`:`${y.colorWhite}`,fontSize:"14px",fontWeight:"400",lineHeight:"1.2857",cursor:"pointer",backgroundColor:o?"none":t?`${y.colorInput}`:"transparent",":active":{...n[":active"],backgroundColor:t?`${y.colorInput}`:"none"}}),menu:n=>({...n,backgroundColor:"#1C1C1C",padding:"14px",borderRadius:"12px",border:"none"}),menuList:n=>({...n,boxSizing:"content-box","&::-webkit-scrollbar":{width:"6px",position:"relative"},"&::-webkit-scrollbar-thumb":{borderRadius:"12px",background:"rgba(239, 237, 232, 0.1)"},"&::-webkit-scrollbar-track":{background:"transparent"}}),indicatorSeparator:()=>({display:"none"}),valueContainer:n=>({...n,padding:"0px",margin:"0px"}),clearIndicator:n=>({...n,padding:0,color:`${y.colorOrange}`,cursor:"pointer"}),dropdownIndicator:(n,e)=>({...n,padding:0,color:`${y.colorWhite}`,transition:"all .3s ease",transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),placeholder:n=>({...n,color:`${y.colorWhite}`})},mi={singleValue:n=>({...n,color:`${y.colorWhite}`}),control:(n,{isSelected:e})=>({...n,display:"flex",color:e?`${y.colorBeige}`:`${y.colorWhite}`,backgroundColor:"transparent",width:"173px",borderRadius:"12px",padding:"14px",lineHeight:"1.2857",fontSize:"14px",fontWeight:"400",outline:"none",border:`1px solid ${y.colorInput}`,boxShadow:"none",cursor:"pointer",wordWrap:"break-word",":hover":{border:`1px solid ${y.colorOrange}`},":active":{border:`1px solid ${y.colorOrange}`},":focus":{outline:"none",border:`1px solid ${y.colorOrange}`},"@media (min-width: 768px)":{fontSize:"16px",lineHeight:"1.5",width:"204px",height:"52px"},"@media (max-width: 375px)":{width:"88vw"}}),option:(n,{isHover:e,isDisabled:o,isFocused:r,isSelected:t})=>({...n,color:t?`${y.colorOrange1}`:r?`${y.colorBeige}`:e?`${y.colorBeige}`:`${y.colorWhite}`,fontSize:"14px",fontWeight:"400",lineHeight:"1.2857",cursor:"pointer",backgroundColor:o?"none":t?`${y.colorInput}`:"transparent",":active":{...n[":active"],backgroundColor:t?`${y.colorInput}`:"transparent"}}),menu:n=>({...n,backgroundColor:"#1C1C1C",padding:"14px",borderRadius:"12px",border:"none"}),menuList:n=>({...n,boxSizing:"content-box","&::-webkit-scrollbar":{width:"6px",position:"relative"},"&::-webkit-scrollbar-thumb":{borderRadius:"12px",background:"rgba(239, 237, 232, 0.1)"},"&::-webkit-scrollbar-track":{background:"transparent"}}),indicatorSeparator:()=>({display:"none"}),valueContainer:n=>({...n,padding:"0px",margin:"0px"}),clearIndicator:n=>({...n,padding:0,color:`${y.colorOrange}`,cursor:"pointer"}),dropdownIndicator:(n,e)=>({...n,padding:0,color:`${y.colorWhite}`,transition:"all .3s ease",transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),placeholder:n=>({...n,color:`${y.colorWhite}`})},vi=_.p`
  display: flex;
  color: ${y.colorSecondaryRed};
  font-size: 12px;
  margin: 0;
  line-height: 1.5;
  position: absolute;
  word-wrap: break-word;

  > svg {
    width: 16px;
    height: 16px;
    fill: ${y.colorSecondaryRed};
  }
`,gi=({categories:n})=>{const e=lt(),[o,r]=v.useState(!1),[t,i]=v.useState(""),[u,s]=v.useState(!1),[a,l]=v.useState(""),[c,d]=v.useState(null),[f,h]=v.useState(null),g=n.map(C=>C[0].toUpperCase()+C.slice(1).toLowerCase()),E=C=>[...C.map(F=>({value:F,label:F}))],m=[{value:"all",label:"All"},{value:"recommended",label:"Recommended"},{value:"not-recommended",label:"Not recommended"}],x=C=>{C&&C.preventDefault();const F={title:a||"",category:c||null,filter:f||"all"};if(!(a.length<=40))i(`Please enter up to 30 characters, now ${a.length}`),s(!0);else{i(""),s(!1);try{e(Ee(F))}catch($){toast.error("Network error:",$)}}},R=C=>{const F=C.target.value;r(F.length>0),l(F)},I=()=>{r(!1),l(""),e(Ee({title:"",category:c||null,filter:f||"all"}))},T=C=>{const F=C?C.value:null;d(F),e(Ee({title:a||"",category:F,filter:f||"all"}))},L=C=>{const F=C?C.value.toLowerCase():"all";h(F),e(Ee({title:a||"",category:c||null,filter:F}))};return b.jsxs(b.Fragment,{children:[b.jsxs(ui,{onSubmit:x,noValidate:!0,children:[b.jsxs(si,{children:[b.jsx(li,{type:"text",name:"title",placeholder:"Search",value:a,onChange:R}),b.jsxs(ci,{children:[o&&b.jsx("button",{type:"button",onClick:I,children:b.jsx(pi,{children:b.jsx("use",{href:ie+"#icon-x"})})}),b.jsx("button",{type:"submit",children:b.jsx(di,{children:b.jsx("use",{href:ie+"#icon-search"})})})]}),u&&b.jsxs(vi,{children:[b.jsx("svg",{children:b.jsx("use",{href:ie+"#icon-checkbox-circle-fill"})}),t]})]}),b.jsxs(fi,{children:[b.jsx(Wt,{id:Ut(),options:E(g),value:E(g).find(C=>C.value===c),isSearchable:!1,isMulti:!1,isClearable:!0,onChange:T,placeholder:"Categories",styles:hi}),b.jsx(Wt,{id:Ut(),options:m,value:m.find(C=>C.value===f),isSearchable:!1,isMulti:!1,isClearable:!0,onChange:L,placeholder:"All",styles:mi})]})]}),b.jsx(v.Suspense,{fallback:b.jsx(ct,{}),children:b.jsx(Qn,{})})]})};var rt={exports:{}},fe={},at={exports:{}},ne={},it={exports:{}};(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",r="contents",t=/input|select|textarea|button|object|iframe/;function i(d,f){return f.getPropertyValue("overflow")!=="visible"||d.scrollWidth<=0&&d.scrollHeight<=0}function u(d){var f=d.offsetWidth<=0&&d.offsetHeight<=0;if(f&&!d.innerHTML)return!0;try{var h=window.getComputedStyle(d),g=h.getPropertyValue("display");return f?g!==r&&i(d,h):g===o}catch{return console.warn("Failed to inspect element style"),!1}}function s(d){for(var f=d,h=d.getRootNode&&d.getRootNode();f&&f!==document.body;){if(h&&f===h&&(f=h.host.parentNode),u(f))return!1;f=f.parentNode}return!0}function a(d,f){var h=d.nodeName.toLowerCase(),g=t.test(h)&&!d.disabled||h==="a"&&d.href||f;return g&&s(d)}function l(d){var f=d.getAttribute("tabindex");f===null&&(f=void 0);var h=isNaN(f);return(h||f>=0)&&a(d,!h)}function c(d){var f=[].slice.call(d.querySelectorAll("*"),0).reduce(function(h,g){return h.concat(g.shadowRoot?c(g.shadowRoot):[g])},[]);return f.filter(l)}n.exports=e.default})(it,it.exports);var kn=it.exports;Object.defineProperty(ne,"__esModule",{value:!0});ne.resetState=yi;ne.log=Ci;ne.handleBlur=Oe;ne.handleFocus=Fe;ne.markForFocusLater=Si;ne.returnFocus=wi;ne.popWithoutFocus=Oi;ne.setupScopedFocus=Fi;ne.teardownScopedFocus=Di;var bi=kn,xi=Ei(bi);function Ei(n){return n&&n.__esModule?n:{default:n}}var ve=[],me=null,ut=!1;function yi(){ve=[]}function Ci(){}function Oe(){ut=!0}function Fe(){if(ut){if(ut=!1,!me)return;setTimeout(function(){if(!me.contains(document.activeElement)){var n=(0,xi.default)(me)[0]||me;n.focus()}},0)}}function Si(){ve.push(document.activeElement)}function wi(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{ve.length!==0&&(e=ve.pop(),e.focus({preventScroll:n}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function Oi(){ve.length>0&&ve.pop()}function Fi(n){me=n,window.addEventListener?(window.addEventListener("blur",Oe,!1),document.addEventListener("focus",Fe,!0)):(window.attachEvent("onBlur",Oe),document.attachEvent("onFocus",Fe))}function Di(){me=null,window.addEventListener?(window.removeEventListener("blur",Oe),document.removeEventListener("focus",Fe)):(window.detachEvent("onBlur",Oe),document.detachEvent("onFocus",Fe))}var st={exports:{}};(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var o=kn,r=t(o);function t(s){return s&&s.__esModule?s:{default:s}}function i(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return s.activeElement.shadowRoot?i(s.activeElement.shadowRoot):s.activeElement}function u(s,a){var l=(0,r.default)(s);if(!l.length){a.preventDefault();return}var c=void 0,d=a.shiftKey,f=l[0],h=l[l.length-1],g=i();if(s===g){if(!d)return;c=h}if(h===g&&!d&&(c=f),f===g&&d&&(c=h),c){a.preventDefault(),c.focus();return}var E=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),m=E!=null&&E[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(m){var x=l.indexOf(g);if(x>-1&&(x+=d?-1:1),c=l[x],typeof c>"u"){a.preventDefault(),c=d?h:f,c.focus();return}a.preventDefault(),c.focus()}}n.exports=e.default})(st,st.exports);var Mi=st.exports,oe={},te={},_n={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(n){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};n.exports?n.exports=o:window.ExecutionEnvironment=o})()})(_n);var Ai=_n.exports;Object.defineProperty(te,"__esModule",{value:!0});te.canUseDOM=te.SafeNodeList=te.SafeHTMLCollection=void 0;var Pi=Ai,Ii=Ri(Pi);function Ri(n){return n&&n.__esModule?n:{default:n}}var qe=Ii.default,Ti=qe.canUseDOM?window.HTMLElement:{};te.SafeHTMLCollection=qe.canUseDOM?window.HTMLCollection:{};te.SafeNodeList=qe.canUseDOM?window.NodeList:{};te.canUseDOM=qe.canUseDOM;te.default=Ti;Object.defineProperty(oe,"__esModule",{value:!0});oe.resetState=$i;oe.log=Bi;oe.assertNodeList=$n;oe.setElement=Ni;oe.validateElement=bt;oe.hide=Hi;oe.show=ji;oe.documentNotReadyOrSSRTesting=Wi;var Vi=mo,Li=_i(Vi),ki=te;function _i(n){return n&&n.__esModule?n:{default:n}}var J=null;function $i(){J&&(J.removeAttribute?J.removeAttribute("aria-hidden"):J.length!=null?J.forEach(function(n){return n.removeAttribute("aria-hidden")}):document.querySelectorAll(J).forEach(function(n){return n.removeAttribute("aria-hidden")})),J=null}function Bi(){}function $n(n,e){if(!n||!n.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function Ni(n){var e=n;if(typeof e=="string"&&ki.canUseDOM){var o=document.querySelectorAll(e);$n(o,e),e=o}return J=e||J,J}function bt(n){var e=n||J;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Li.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Hi(n){var e=!0,o=!1,r=void 0;try{for(var t=bt(n)[Symbol.iterator](),i;!(e=(i=t.next()).done);e=!0){var u=i.value;u.setAttribute("aria-hidden","true")}}catch(s){o=!0,r=s}finally{try{!e&&t.return&&t.return()}finally{if(o)throw r}}}function ji(n){var e=!0,o=!1,r=void 0;try{for(var t=bt(n)[Symbol.iterator](),i;!(e=(i=t.next()).done);e=!0){var u=i.value;u.removeAttribute("aria-hidden")}}catch(s){o=!0,r=s}finally{try{!e&&t.return&&t.return()}finally{if(o)throw r}}}function Wi(){J=null}var ge={};Object.defineProperty(ge,"__esModule",{value:!0});ge.resetState=Ui;ge.log=zi;var Se={},we={};function zt(n,e){n.classList.remove(e)}function Ui(){var n=document.getElementsByTagName("html")[0];for(var e in Se)zt(n,Se[e]);var o=document.body;for(var r in we)zt(o,we[r]);Se={},we={}}function zi(){}var qi=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},Yi=function(e,o){return e[o]&&(e[o]-=1),o},Gi=function(e,o,r){r.forEach(function(t){qi(o,t),e.add(t)})},Ki=function(e,o,r){r.forEach(function(t){Yi(o,t),o[t]===0&&e.remove(t)})};ge.add=function(e,o){return Gi(e.classList,e.nodeName.toLowerCase()=="html"?Se:we,o.split(" "))};ge.remove=function(e,o){return Ki(e.classList,e.nodeName.toLowerCase()=="html"?Se:we,o.split(" "))};var be={};Object.defineProperty(be,"__esModule",{value:!0});be.log=Zi;be.resetState=Ji;function Xi(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var Bn=function n(){var e=this;Xi(this,n),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var r=e.openInstances.indexOf(o);r!==-1&&(e.openInstances.splice(r,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(r){return r(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},je=new Bn;function Zi(){console.log("portalOpenInstances ----------"),console.log(je.openInstances.length),je.openInstances.forEach(function(n){return console.log(n)}),console.log("end portalOpenInstances ----------")}function Ji(){je=new Bn}be.default=je;var xt={};Object.defineProperty(xt,"__esModule",{value:!0});xt.resetState=nu;xt.log=ou;var Qi=be,eu=tu(Qi);function tu(n){return n&&n.__esModule?n:{default:n}}var G=void 0,Q=void 0,pe=[];function nu(){for(var n=[G,Q],e=0;e<n.length;e++){var o=n[e];o&&o.parentNode&&o.parentNode.removeChild(o)}G=Q=null,pe=[]}function ou(){console.log("bodyTrap ----------"),console.log(pe.length);for(var n=[G,Q],e=0;e<n.length;e++){var o=n[e],r=o||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function qt(){pe.length!==0&&pe[pe.length-1].focusContent()}function ru(n,e){!G&&!Q&&(G=document.createElement("div"),G.setAttribute("data-react-modal-body-trap",""),G.style.position="absolute",G.style.opacity="0",G.setAttribute("tabindex","0"),G.addEventListener("focus",qt),Q=G.cloneNode(),Q.addEventListener("focus",qt)),pe=e,pe.length>0?(document.body.firstChild!==G&&document.body.insertBefore(G,document.body.firstChild),document.body.lastChild!==Q&&document.body.appendChild(Q)):(G.parentElement&&G.parentElement.removeChild(G),Q.parentElement&&Q.parentElement.removeChild(Q))}eu.default.subscribe(ru);(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(A){for(var S=1;S<arguments.length;S++){var k=arguments[S];for(var p in k)Object.prototype.hasOwnProperty.call(k,p)&&(A[p]=k[p])}return A},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},t=function(){function A(S,k){for(var p=0;p<k.length;p++){var w=k[p];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(S,w.key,w)}}return function(S,k,p){return k&&A(S.prototype,k),p&&A(S,p),S}}(),i=v,u=sn,s=L(u),a=ne,l=T(a),c=Mi,d=L(c),f=oe,h=T(f),g=ge,E=T(g),m=te,x=L(m),R=be,I=L(R);function T(A){if(A&&A.__esModule)return A;var S={};if(A!=null)for(var k in A)Object.prototype.hasOwnProperty.call(A,k)&&(S[k]=A[k]);return S.default=A,S}function L(A){return A&&A.__esModule?A:{default:A}}function C(A,S){if(!(A instanceof S))throw new TypeError("Cannot call a class as a function")}function F(A,S){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S&&(typeof S=="object"||typeof S=="function")?S:A}function M(A,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof S);A.prototype=Object.create(S&&S.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),S&&(Object.setPrototypeOf?Object.setPrototypeOf(A,S):A.__proto__=S)}var $={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},q=function(S){return S.code==="Tab"||S.keyCode===9},Y=function(S){return S.code==="Escape"||S.keyCode===27},U=0,X=function(A){M(S,A);function S(k){C(this,S);var p=F(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,k));return p.setOverlayRef=function(w){p.overlay=w,p.props.overlayRef&&p.props.overlayRef(w)},p.setContentRef=function(w){p.content=w,p.props.contentRef&&p.props.contentRef(w)},p.afterClose=function(){var w=p.props,N=w.appElement,H=w.ariaHideApp,j=w.htmlOpenClassName,B=w.bodyOpenClassName,z=w.parentSelector,K=z&&z().ownerDocument||document;B&&E.remove(K.body,B),j&&E.remove(K.getElementsByTagName("html")[0],j),H&&U>0&&(U-=1,U===0&&h.show(N)),p.props.shouldFocusAfterRender&&(p.props.shouldReturnFocusAfterClose?(l.returnFocus(p.props.preventScroll),l.teardownScopedFocus()):l.popWithoutFocus()),p.props.onAfterClose&&p.props.onAfterClose(),I.default.deregister(p)},p.open=function(){p.beforeOpen(),p.state.afterOpen&&p.state.beforeClose?(clearTimeout(p.closeTimer),p.setState({beforeClose:!1})):(p.props.shouldFocusAfterRender&&(l.setupScopedFocus(p.node),l.markForFocusLater()),p.setState({isOpen:!0},function(){p.openAnimationFrame=requestAnimationFrame(function(){p.setState({afterOpen:!0}),p.props.isOpen&&p.props.onAfterOpen&&p.props.onAfterOpen({overlayEl:p.overlay,contentEl:p.content})})}))},p.close=function(){p.props.closeTimeoutMS>0?p.closeWithTimeout():p.closeWithoutTimeout()},p.focusContent=function(){return p.content&&!p.contentHasFocus()&&p.content.focus({preventScroll:!0})},p.closeWithTimeout=function(){var w=Date.now()+p.props.closeTimeoutMS;p.setState({beforeClose:!0,closesAt:w},function(){p.closeTimer=setTimeout(p.closeWithoutTimeout,p.state.closesAt-Date.now())})},p.closeWithoutTimeout=function(){p.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},p.afterClose)},p.handleKeyDown=function(w){q(w)&&(0,d.default)(p.content,w),p.props.shouldCloseOnEsc&&Y(w)&&(w.stopPropagation(),p.requestClose(w))},p.handleOverlayOnClick=function(w){p.shouldClose===null&&(p.shouldClose=!0),p.shouldClose&&p.props.shouldCloseOnOverlayClick&&(p.ownerHandlesClose()?p.requestClose(w):p.focusContent()),p.shouldClose=null},p.handleContentOnMouseUp=function(){p.shouldClose=!1},p.handleOverlayOnMouseDown=function(w){!p.props.shouldCloseOnOverlayClick&&w.target==p.overlay&&w.preventDefault()},p.handleContentOnClick=function(){p.shouldClose=!1},p.handleContentOnMouseDown=function(){p.shouldClose=!1},p.requestClose=function(w){return p.ownerHandlesClose()&&p.props.onRequestClose(w)},p.ownerHandlesClose=function(){return p.props.onRequestClose},p.shouldBeClosed=function(){return!p.state.isOpen&&!p.state.beforeClose},p.contentHasFocus=function(){return document.activeElement===p.content||p.content.contains(document.activeElement)},p.buildClassName=function(w,N){var H=(typeof N>"u"?"undefined":r(N))==="object"?N:{base:$[w],afterOpen:$[w]+"--after-open",beforeClose:$[w]+"--before-close"},j=H.base;return p.state.afterOpen&&(j=j+" "+H.afterOpen),p.state.beforeClose&&(j=j+" "+H.beforeClose),typeof N=="string"&&N?j+" "+N:j},p.attributesFromObject=function(w,N){return Object.keys(N).reduce(function(H,j){return H[w+"-"+j]=N[j],H},{})},p.state={afterOpen:!1,beforeClose:!1},p.shouldClose=null,p.moveFromContentToOverlay=null,p}return t(S,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(p,w){this.props.isOpen&&!p.isOpen?this.open():!this.props.isOpen&&p.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!w.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var p=this.props,w=p.appElement,N=p.ariaHideApp,H=p.htmlOpenClassName,j=p.bodyOpenClassName,B=p.parentSelector,z=B&&B().ownerDocument||document;j&&E.add(z.body,j),H&&E.add(z.getElementsByTagName("html")[0],H),N&&(U+=1,h.hide(w)),I.default.register(this)}},{key:"render",value:function(){var p=this.props,w=p.id,N=p.className,H=p.overlayClassName,j=p.defaultStyles,B=p.children,z=N?{}:j.content,K=H?{}:j.overlay;if(this.shouldBeClosed())return null;var re={ref:this.setOverlayRef,className:this.buildClassName("overlay",H),style:o({},K,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Z=o({id:w,ref:this.setContentRef,style:o({},z,this.props.style.content),className:this.buildClassName("content",N),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),ae=this.props.contentElement(Z,B);return this.props.overlayElement(re,ae)}}]),S}(i.Component);X.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},X.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),parentSelector:s.default.func,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(x.default),s.default.instanceOf(m.SafeHTMLCollection),s.default.instanceOf(m.SafeNodeList),s.default.arrayOf(s.default.instanceOf(x.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},e.default=X,n.exports=e.default})(at,at.exports);var au=at.exports;function Nn(){var n=this.constructor.getDerivedStateFromProps(this.props,this.state);n!=null&&this.setState(n)}function Hn(n){function e(o){var r=this.constructor.getDerivedStateFromProps(n,o);return r??null}this.setState(e.bind(this))}function jn(n,e){try{var o=this.props,r=this.state;this.props=n,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,r)}finally{this.props=o,this.state=r}}Nn.__suppressDeprecationWarning=!0;Hn.__suppressDeprecationWarning=!0;jn.__suppressDeprecationWarning=!0;function iu(n){var e=n.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof n.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return n;var o=null,r=null,t=null;if(typeof e.componentWillMount=="function"?o="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?t="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(t="UNSAFE_componentWillUpdate"),o!==null||r!==null||t!==null){var i=n.displayName||n.name,u=typeof n.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+i+" uses "+u+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(r!==null?`
  `+r:"")+(t!==null?`
  `+t:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof n.getDerivedStateFromProps=="function"&&(e.componentWillMount=Nn,e.componentWillReceiveProps=Hn),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=jn;var s=e.componentDidUpdate;e.componentDidUpdate=function(l,c,d){var f=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:d;s.call(this,l,c,f)}}return n}const uu=Object.freeze(Object.defineProperty({__proto__:null,polyfill:iu},Symbol.toStringTag,{value:"Module"})),su=eo(uu);Object.defineProperty(fe,"__esModule",{value:!0});fe.bodyOpenClassName=fe.portalClassName=void 0;var Yt=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n[r]=o[r])}return n},lu=function(){function n(e,o){for(var r=0;r<o.length;r++){var t=o[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(e,o,r){return o&&n(e.prototype,o),r&&n(e,r),e}}(),Wn=v,We=De(Wn),cu=tn,Ue=De(cu),du=sn,V=De(du),pu=au,Gt=De(pu),fu=oe,hu=vu(fu),ce=te,Kt=De(ce),mu=su;function vu(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e.default=n,e}function De(n){return n&&n.__esModule?n:{default:n}}function gu(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Xt(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n}function bu(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}var xu=fe.portalClassName="ReactModalPortal",Eu=fe.bodyOpenClassName="ReactModal__Body--open",de=ce.canUseDOM&&Ue.default.createPortal!==void 0,Zt=function(e){return document.createElement(e)},Jt=function(){return de?Ue.default.createPortal:Ue.default.unstable_renderSubtreeIntoContainer};function Ve(n){return n()}var Me=function(n){bu(e,n);function e(){var o,r,t,i;gu(this,e);for(var u=arguments.length,s=Array(u),a=0;a<u;a++)s[a]=arguments[a];return i=(r=(t=Xt(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(s))),t),t.removePortal=function(){!de&&Ue.default.unmountComponentAtNode(t.node);var l=Ve(t.props.parentSelector);l&&l.contains(t.node)?l.removeChild(t.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},t.portalRef=function(l){t.portal=l},t.renderPortal=function(l){var c=Jt(),d=c(t,We.default.createElement(Gt.default,Yt({defaultStyles:e.defaultStyles},l)),t.node);t.portalRef(d)},r),Xt(t,i)}return lu(e,[{key:"componentDidMount",value:function(){if(ce.canUseDOM){de||(this.node=Zt("div")),this.node.className=this.props.portalClassName;var r=Ve(this.props.parentSelector);r.appendChild(this.node),!de&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var t=Ve(r.parentSelector),i=Ve(this.props.parentSelector);return{prevParent:t,nextParent:i}}},{key:"componentDidUpdate",value:function(r,t,i){if(ce.canUseDOM){var u=this.props,s=u.isOpen,a=u.portalClassName;r.portalClassName!==a&&(this.node.className=a);var l=i.prevParent,c=i.nextParent;c!==l&&(l.removeChild(this.node),c.appendChild(this.node)),!(!r.isOpen&&!s)&&!de&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!ce.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,t=Date.now(),i=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||t+this.props.closeTimeoutMS);i?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,i-t)):this.removePortal()}}},{key:"render",value:function(){if(!ce.canUseDOM||!de)return null;!this.node&&de&&(this.node=Zt("div"));var r=Jt();return r(We.default.createElement(Gt.default,Yt({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){hu.setElement(r)}}]),e}(Wn.Component);Me.propTypes={isOpen:V.default.bool.isRequired,style:V.default.shape({content:V.default.object,overlay:V.default.object}),portalClassName:V.default.string,bodyOpenClassName:V.default.string,htmlOpenClassName:V.default.string,className:V.default.oneOfType([V.default.string,V.default.shape({base:V.default.string.isRequired,afterOpen:V.default.string.isRequired,beforeClose:V.default.string.isRequired})]),overlayClassName:V.default.oneOfType([V.default.string,V.default.shape({base:V.default.string.isRequired,afterOpen:V.default.string.isRequired,beforeClose:V.default.string.isRequired})]),appElement:V.default.oneOfType([V.default.instanceOf(Kt.default),V.default.instanceOf(ce.SafeHTMLCollection),V.default.instanceOf(ce.SafeNodeList),V.default.arrayOf(V.default.instanceOf(Kt.default))]),onAfterOpen:V.default.func,onRequestClose:V.default.func,closeTimeoutMS:V.default.number,ariaHideApp:V.default.bool,shouldFocusAfterRender:V.default.bool,shouldCloseOnOverlayClick:V.default.bool,shouldReturnFocusAfterClose:V.default.bool,preventScroll:V.default.bool,parentSelector:V.default.func,aria:V.default.object,data:V.default.object,role:V.default.string,contentLabel:V.default.string,shouldCloseOnEsc:V.default.bool,overlayRef:V.default.func,contentRef:V.default.func,id:V.default.string,overlayElement:V.default.func,contentElement:V.default.func};Me.defaultProps={isOpen:!1,portalClassName:xu,bodyOpenClassName:Eu,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return We.default.createElement("div",e,o)},contentElement:function(e,o){return We.default.createElement("div",e,o)}};Me.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,mu.polyfill)(Me);fe.default=Me;(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var o=fe,r=t(o);function t(i){return i&&i.__esModule?i:{default:i}}e.default=r.default,n.exports=e.default})(rt,rt.exports);var yu=rt.exports;const Cu=to(yu),Su=_.button`
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
`,wu=({isOpen:n,onRequestClose:e,children:o})=>{const[r,t]=v.useState(n);v.useEffect(()=>(r?document.body.style.overflow="hidden":document.body.style.overflow="visible",()=>{document.body.style.overflow="visible"}),[r]);const i=()=>{t(!1),e&&e()},u={overlay:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(18, 20, 23, 0.50)",zIndex:1e3,overflow:"auto"},content:{maxWidth:"fit-content",maxHeight:"fit-content",margin:"auto",overflow:"auto",inset:0,border:"none",background:"none",padding:0}};return b.jsxs(Cu,{isOpen:r,onRequestClose:i,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,ariaHideApp:!1,style:u,children:[b.jsx(Su,{type:"button",onClick:i,children:b.jsx("svg",{children:b.jsx("use",{href:ie+"#icon-x"})})}),o]})},Ou="/PowerPulse/assets/avocado-46dd5bc9.png",Fu=_.div`
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
`,Du=_.div`
  margin: 0 auto 3px;
  width: 123px;
  height: 97px;
  background: url(${Ou});

  @media (min-width: 768px) {
    margin-bottom: 19px;
  }
`,Mu=_.h4`
  margin: 0 auto 16px;
  color: ${y.colorWhite};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
  word-wrap: break-word;
`,Au=_.p`
  color: ${y.colorOrange};
  line-height: 1.2857;
  word-wrap: break-word;
  > span {
    color: rgba(239, 237, 232, 0.3);
  }
`,Pu=_.button`
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
`,Iu=_(no)`
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
`,Ru=({calories:n,closeModalAddProductSuccess:e})=>b.jsxs(Fu,{children:[b.jsx(Du,{}),b.jsx(Mu,{children:"Well done"}),b.jsxs(Au,{children:[b.jsx("span",{children:"Calories: "}),n]}),b.jsx(Pu,{type:"button",onClick:e,children:"Next product"}),b.jsxs(Iu,{to:"/diary",onClick:e,children:["To the diary",b.jsx("svg",{children:b.jsx("use",{href:ie+"#icon-arrow"})})]})]}),Tu=_.form`
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
`,Vu=_.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  flex-direction: column;
  

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,Lu=_.h4`
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;


  @media (min-width: 768px) {
    width: 216px;
    height: 40px;
    font-size: 16px;
    line-height: 1.5;
  }
`,ku=_.div`
  position: relative;
  height: 34px;

  @media (min-width: 768px) {
    width: 155px;
    height: 40px;
  }
`,_u=_.input`
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
`,$u=_.label`
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
`,Bu=_.p`
  display: flex;
  color: ${y.colorSecondaryRed};
  font-size: 12px;
  margin: 0;
  line-height: 1.5;
  position: absolute;
  word-wrap: break-word;

  > svg {
    width: 16px;
    height: 16px;
    fill: ${y.colorSecondaryRed};
  }

`,Qt=_.p`
  color: ${y.colorWhite};
  line-height: 1.5;
  font-size: 12px;
  word-wrap: break-word;
  margin-top: 16px;

  > span {
    color: rgba(239, 237, 232, 0.4);
  }
`,Nu=_.div`
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
`,Hu=_.button`
  max-width: 151px;
  background-color: ${y.colorOrange};
  border: transparent;
  padding: 12px 32px;
`,ju=_.button`
  max-width: 121px;
  background-color: transparent;
  border: 1px rgba(239, 237, 232, 0.3) solid;
  padding: 12px 34px;

  @media (min-width: 768px) {
    width: 142px;
  }
`,Wu=({closeModallAddProductForm:n,onClick:e,productTitle:o,calories:r,productId:t})=>{const i=lt(),[u,s]=v.useState({product:"",date:"",amount:"",calories:""}),[a,l]=v.useState(""),[c,d]=v.useState(""),[f,h]=v.useState(!1),g=new Date,E=String(g.getDate()).padStart(2,"0"),m=String(g.getMonth()+1).padStart(2,"0"),x=g.getFullYear(),R=`${E}-${m}-${x}`,I=o[0].toUpperCase()+o.slice(1).toLowerCase(),T=async C=>{if(C.preventDefault(),(0>=u.amount||3e3<=u.amount)&&u.amount)d("Entering value must be at range 1g to 3000g"),h(!0),l(r);else if(Object.keys(u).length<0||u.amount==="")d("Enter amount*"),h(!0);else{d(""),h(!1);try{n(),e(u.calories),await i(oo(u))}catch(F){nn.error("Network error:",F)}}},L=C=>{const F=parseFloat(C.target.value),M=parseFloat(r);if(!isNaN(F)&&!isNaN(M)){const $=Math.round(F*M/100);l($),s({productId:t,date:R,amount:F,calories:$}),d(""),h(!1)}else l(r),s({productId:"",date:"",amount:"",calories:""})};return b.jsxs(Tu,{onSubmit:T,noValidate:!0,children:[b.jsxs(Vu,{children:[b.jsx(Lu,{children:I}),b.jsxs(ku,{children:[b.jsx($u,{htmlFor:"calories",children:"grams"}),b.jsx(_u,{type:"number",name:"calories",placeholder:"100",autoComplete:"off",required:!0,step:"1",min:"1",max:"3000",onChange:L}),f&&b.jsxs(Bu,{children:[b.jsx("svg",{children:b.jsx("use",{href:ie+"#icon-checkbox-circle-fill"})}),c]})]})]}),a?b.jsxs(Qt,{children:[b.jsx("span",{children:"Calories: "}),a]}):b.jsxs(Qt,{children:[b.jsx("span",{children:"Calories: "}),r]}),b.jsxs(Nu,{children:[b.jsx(Hu,{type:"submit",children:"Add to diary"}),b.jsx(ju,{type:"button",onClick:()=>{n()},children:"Cancel"})]})]})},Uu=_.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: rgba(239, 237, 232, 0.05);
  border-radius: 12px;
  border: 1px rgba(239, 237, 232, 0.2) solid;

  @media (min-width: 320px) {
    width: 87vw;
  }

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 1440px) {
    width: 405px;
  }
`,zu=_.div`
  position: absolute;
  padding: 5px 7.5px;
  background: rgba(239, 237, 232, 0.05);
  border-radius: 4px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  word-wrap: break-word;
`,en=_.svg`
  width: 14px;
  height: 14px;
`,et=_.p`
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
`,qu=_.p`
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
`,Yu=_.h2`
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
`,Gu=_.button`
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
`,Ku=_.div`
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
`,Xu=_.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
  align-items: center;
`,Zu=({product:n,type:e,handleOpenModal:o})=>{const r=d=>[...d.map(f=>f[0].toUpperCase()+f.slice(1).toLowerCase())],{title:t,category:i,calories:u,weight:s}=n,a=r([t])[0],l=r([i])[0];let c;return e?c="Recommended":c="Not recommended",b.jsxs(Uu,{children:[b.jsx(zu,{children:"DIET"}),b.jsxs("div",{style:{display:"flex",gap:"16px",alignSelf:"flex-end",flexWrap:"wrap"},children:[b.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[b.jsx(en,{children:e?b.jsx("use",{href:ie+"#icon-Ellipse-82",style:{fill:y.colorSecondaryGreen,stroke:y.colorSecondaryGreen}}):b.jsx("use",{href:ie+"#icon-Ellipse-82",style:{fill:y.colorSecondaryRed,stroke:y.colorSecondaryRed}})}),b.jsx(et,{children:c})]}),b.jsxs(Gu,{onClick:()=>o(n),children:["Add",b.jsx(en,{style:{width:"16px",height:"16px"},children:b.jsx("use",{href:ie+"#icon-arrow",style:{stroke:y.colorOrange}})})]})]}),b.jsxs(Ku,{children:[b.jsx("svg",{style:{flexShrink:0,width:"24px",height:"24px"},children:b.jsx("use",{href:ie+"#icon-running-stick-figure-svgrepo-com-1"})}),b.jsx(Yu,{children:a})]}),b.jsxs(Xu,{children:[b.jsxs(et,{children:[b.jsx("span",{children:"Calories:"}),u]}),b.jsxs(qu,{children:[b.jsx("span",{children:"Category:"}),l]}),b.jsxs(et,{children:[b.jsx("span",{children:"Weight:"}),s]})]})]})},Ju=n=>n.products.productsArray,Qu=n=>n.products.productsCategories,Un=n=>n.products.isLoadingProducts,es=_.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 32px 16px;
  }
`,ts=_.div`
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
`,ns=_.p`
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
`,os=_.p`
  line-height: 1.2857;
  word-wrap: break-word;
  color: ${y.colorOrange};

  @media (min-width: 768px) {
    line-height: 1.5;
    font-weight: 16px;
  }
`,rs=({products:n})=>{const e=Ce(Un),[o,r]=v.useState(null),[t,i]=v.useState(!1),[u,s]=v.useState(null),a=f=>{i(!0),r(f),s(f)},l=()=>{t&&i(!1),r(null),s(null)},d=Ce(ro).blood;return b.jsxs(b.Fragment,{children:[e&&b.jsx(ct,{}),!e&&n.length>0&&b.jsx(es,{children:n.map(f=>b.jsx(Zu,{product:f,type:f.groupBloodNotAllowed[d],handleOpenModal:a},f._id))}),!e&&n.length<=0&&b.jsxs(ts,{children:[b.jsxs(ns,{children:[b.jsx("span",{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),b.jsx(os,{children:"Try changing the search parameters."})]}),o&&b.jsx(wu,{isOpen:t,onRequestClose:l,children:typeof u=="object"?b.jsx(Wu,{closeModallAddProductForm:l,calories:o.calories,productTitle:o.title,productId:o._id,product:u,onClick:a}):b.jsx(Ru,{calories:u,closeModalAddProductSuccess:l})})]})},cs=()=>{const n=lt(),e=Ce(Un),o=Ce(Qu),r=Ce(Ju);return v.useEffect(()=>{(async()=>{try{await n(Ee({title:"",category:null,filter:"all"}))}catch(i){nn.error("Error fetching data:",i),console.error("Error fetching data:",i)}})()},[n]),v.useEffect(()=>{n(ao())},[n]),b.jsx(vo,{children:b.jsxs(io,{children:[b.jsxs(go,{children:[b.jsx(uo,{title:"Products Page"}),b.jsx(gi,{categories:o.map(t=>t.title)})]}),e?b.jsx(ct,{}):b.jsx(bo,{children:b.jsx(rs,{products:r})})]})})};export{cs as default};
