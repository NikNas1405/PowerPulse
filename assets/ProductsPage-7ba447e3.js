import{m as jn,r as g,E as Wn,o as Un,p as zn,_ as qn,q as A,h as Qt,s as L,g as C,u as st,j as E,a as ue,t as Gn,e as Yn,v as Kn,Q as en,N as Xn,w as Qe,x as Zn,y as Jn,z as Qn}from"./index-544910e3.js";import{p as tn,T as eo}from"./TitlePage-3d633d61.js";import{e as Ee,a as nn,h as to,_ as no,b as oo,c as ro,d as ao,g as io,i as uo}from"./warning-f53f1489.js";import"./hoist-non-react-statics.cjs-bcd1459d.js";var O=function(e,o){var r=arguments;if(o==null||!jn.call(o,"css"))return g.createElement.apply(void 0,r);var t=r.length,i=new Array(t);i[0]=Wn,i[1]=Un(e,o);for(var u=2;u<t;u++)i[u]=r[u];return g.createElement.apply(null,i)};function lt(){for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return zn(e)}var so=function(){var e=lt.apply(void 0,arguments),o="animation-"+e.name;return{name:o,styles:"@keyframes "+o+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};const lo=Math.min,co=Math.max,Le=Math.round,Me=Math.floor,Te=n=>({x:n,y:n});function po(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function on(n){return an(n)?(n.nodeName||"").toLowerCase():"#document"}function ee(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function rn(n){var e;return(e=(an(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function an(n){return n instanceof Node||n instanceof ee(n).Node}function et(n){return n instanceof Element||n instanceof ee(n).Element}function ct(n){return n instanceof HTMLElement||n instanceof ee(n).HTMLElement}function Ct(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof ee(n).ShadowRoot}function un(n){const{overflow:e,overflowX:o,overflowY:r,display:t}=dt(n);return/auto|scroll|overlay|hidden|clip/.test(e+r+o)&&!["inline","contents"].includes(t)}function fo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ho(n){return["html","body","#document"].includes(on(n))}function dt(n){return ee(n).getComputedStyle(n)}function mo(n){if(on(n)==="html")return n;const e=n.assignedSlot||n.parentNode||Ct(n)&&n.host||rn(n);return Ct(e)?e.host:e}function sn(n){const e=mo(n);return ho(e)?n.ownerDocument?n.ownerDocument.body:n.body:ct(e)&&un(e)?e:sn(e)}function ke(n,e,o){var r;e===void 0&&(e=[]),o===void 0&&(o=!0);const t=sn(n),i=t===((r=n.ownerDocument)==null?void 0:r.body),u=ee(t);return i?e.concat(u,u.visualViewport||[],un(t)?t:[],u.frameElement&&o?ke(u.frameElement):[]):e.concat(t,ke(t,[],o))}function vo(n){const e=dt(n);let o=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const t=ct(n),i=t?n.offsetWidth:o,u=t?n.offsetHeight:r,s=Le(o)!==i||Le(r)!==u;return s&&(o=i,r=u),{width:o,height:r,$:s}}function pt(n){return et(n)?n:n.contextElement}function ze(n){const e=pt(n);if(!ct(e))return Te(1);const o=e.getBoundingClientRect(),{width:r,height:t,$:i}=vo(e);let u=(i?Le(o.width):o.width)/r,s=(i?Le(o.height):o.height)/t;return(!u||!Number.isFinite(u))&&(u=1),(!s||!Number.isFinite(s))&&(s=1),{x:u,y:s}}const go=Te(0);function bo(n){const e=ee(n);return!fo()||!e.visualViewport?go:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function xo(n,e,o){return e===void 0&&(e=!1),!o||e&&o!==ee(n)?!1:e}function yt(n,e,o,r){e===void 0&&(e=!1),o===void 0&&(o=!1);const t=n.getBoundingClientRect(),i=pt(n);let u=Te(1);e&&(r?et(r)&&(u=ze(r)):u=ze(n));const s=xo(i,o,r)?bo(i):Te(0);let a=(t.left+s.x)/u.x,l=(t.top+s.y)/u.y,c=t.width/u.x,d=t.height/u.y;if(i){const f=ee(i),m=r&&et(r)?ee(r):r;let b=f.frameElement;for(;b&&r&&m!==f;){const x=ze(b),v=b.getBoundingClientRect(),h=dt(b),S=v.left+(b.clientLeft+parseFloat(h.paddingLeft))*x.x,I=v.top+(b.clientTop+parseFloat(h.paddingTop))*x.y;a*=x.x,l*=x.y,c*=x.x,d*=x.y,a+=S,l+=I,b=ee(b).frameElement}}return po({width:c,height:d,x:a,y:l})}function Eo(n,e){let o=null,r;const t=rn(n);function i(){clearTimeout(r),o&&o.disconnect(),o=null}function u(s,a){s===void 0&&(s=!1),a===void 0&&(a=1),i();const{left:l,top:c,width:d,height:f}=n.getBoundingClientRect();if(s||e(),!d||!f)return;const m=Me(c),b=Me(t.clientWidth-(l+d)),x=Me(t.clientHeight-(c+f)),v=Me(l),S={rootMargin:-m+"px "+-b+"px "+-x+"px "+-v+"px",threshold:co(0,lo(1,a))||1};let I=!0;function P(V){const T=V[0].intersectionRatio;if(T!==a){if(!I)return u();T?u(!1,T):r=setTimeout(()=>{u(!1,1e-7)},100)}I=!1}try{o=new IntersectionObserver(P,{...S,root:t.ownerDocument})}catch{o=new IntersectionObserver(P,S)}o.observe(n)}return u(!0),i}function Co(n,e,o,r){r===void 0&&(r={});const{ancestorScroll:t=!0,ancestorResize:i=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,l=pt(n),c=t||i?[...l?ke(l):[],...ke(e)]:[];c.forEach(h=>{t&&h.addEventListener("scroll",o,{passive:!0}),i&&h.addEventListener("resize",o)});const d=l&&s?Eo(l,o):null;let f=-1,m=null;u&&(m=new ResizeObserver(h=>{let[S]=h;S&&S.target===l&&m&&(m.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{m&&m.observe(e)})),o()}),l&&!a&&m.observe(l),m.observe(e));let b,x=a?yt(n):null;a&&v();function v(){const h=yt(n);x&&(h.x!==x.x||h.y!==x.y||h.width!==x.width||h.height!==x.height)&&o(),x=h,b=requestAnimationFrame(v)}return o(),()=>{c.forEach(h=>{t&&h.removeEventListener("scroll",o),i&&h.removeEventListener("resize",o)}),d&&d(),m&&m.disconnect(),m=null,a&&cancelAnimationFrame(b)}}function wt(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),o.push.apply(o,r)}return o}function F(n){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?wt(Object(o),!0).forEach(function(r){Ee(n,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):wt(Object(o)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(o,r))})}return n}function yo(n){if(Array.isArray(n))return n}function wo(n,e){var o=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var r,t,i,u,s=[],a=!0,l=!1;try{if(i=(o=o.call(n)).next,e===0){if(Object(o)!==o)return;a=!1}else for(;!(a=(r=i.call(o)).done)&&(s.push(r.value),s.length!==e);a=!0);}catch(c){l=!0,t=c}finally{try{if(!a&&o.return!=null&&(u=o.return(),Object(u)!==u))return}finally{if(l)throw t}}return s}}function So(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function se(n,e){return yo(n)||wo(n,e)||nn(n,e)||So()}function le(n,e){if(n==null)return{};var o=qn(n,e),r,t;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var Oo=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Fo(n){var e=n.defaultInputValue,o=e===void 0?"":e,r=n.defaultMenuIsOpen,t=r===void 0?!1:r,i=n.defaultValue,u=i===void 0?null:i,s=n.inputValue,a=n.menuIsOpen,l=n.onChange,c=n.onInputChange,d=n.onMenuClose,f=n.onMenuOpen,m=n.value,b=le(n,Oo),x=g.useState(s!==void 0?s:o),v=se(x,2),h=v[0],S=v[1],I=g.useState(a!==void 0?a:t),P=se(I,2),V=P[0],T=P[1],_=g.useState(m!==void 0?m:u),M=se(_,2),$=M[0],q=M[1],G=g.useCallback(function(w,N){typeof l=="function"&&l(w,N),q(w)},[l]),U=g.useCallback(function(w,N){var H;typeof c=="function"&&(H=c(w,N)),S(H!==void 0?H:w)},[c]),X=g.useCallback(function(){typeof f=="function"&&f(),T(!0)},[f]),D=g.useCallback(function(){typeof d=="function"&&d(),T(!1)},[d]),y=s!==void 0?s:h,k=a!==void 0?a:V,p=m!==void 0?m:$;return F(F({},b),{},{inputValue:y,menuIsOpen:k,onChange:G,onInputChange:U,onMenuClose:D,onMenuOpen:X,value:p})}function Do(n){if(Array.isArray(n))return to(n)}function Mo(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Ao(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ft(n){return Do(n)||Mo(n)||nn(n)||Ao()}function Io(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var tt=g.useLayoutEffect,Po=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],_e=function(){};function Ro(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function Vo(n,e){for(var o=arguments.length,r=new Array(o>2?o-2:0),t=2;t<o;t++)r[t-2]=arguments[t];var i=[].concat(r);if(e&&n)for(var u in e)e.hasOwnProperty(u)&&e[u]&&i.push("".concat(Ro(n,u)));return i.filter(function(s){return s}).map(function(s){return String(s).trim()}).join(" ")}var St=function(e){return jo(e)?e.filter(Boolean):no(e)==="object"&&e!==null?[e]:[]},ln=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var o=le(e,Po);return F({},o)},W=function(e,o,r){var t=e.cx,i=e.getStyles,u=e.getClassNames,s=e.className;return{css:i(o,e),className:t(r??{},u(o,e),s)}};function We(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Lo(n){return We(n)?window.innerHeight:n.clientHeight}function cn(n){return We(n)?window.pageYOffset:n.scrollTop}function $e(n,e){if(We(n)){window.scrollTo(0,e);return}n.scrollTop=e}function To(n){var e=getComputedStyle(n),o=e.position==="absolute",r=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(o&&e.position==="static")&&r.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function ko(n,e,o,r){return o*((n=n/r-1)*n*n+1)+e}function Ae(n,e){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:_e,t=cn(n),i=e-t,u=10,s=0;function a(){s+=u;var l=ko(s,t,i,o);$e(n,l),s<o?window.requestAnimationFrame(a):r(n)}a()}function Ot(n,e){var o=n.getBoundingClientRect(),r=e.getBoundingClientRect(),t=e.offsetHeight/3;r.bottom+t>o.bottom?$e(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):r.top-t<o.top&&$e(n,Math.max(e.offsetTop-t,0))}function _o(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Ft(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function $o(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var dn=!1,Bo={get passive(){return dn=!0}},Ie=typeof window<"u"?window:{};Ie.addEventListener&&Ie.removeEventListener&&(Ie.addEventListener("p",_e,Bo),Ie.removeEventListener("p",_e,!1));var No=dn;function Ho(n){return n!=null}function jo(n){return Array.isArray(n)}function Pe(n,e,o){return n?e:o}var Wo=function(e){for(var o=arguments.length,r=new Array(o>1?o-1:0),t=1;t<o;t++)r[t-1]=arguments[t];var i=Object.entries(e).filter(function(u){var s=se(u,1),a=s[0];return!r.includes(a)});return i.reduce(function(u,s){var a=se(s,2),l=a[0],c=a[1];return u[l]=c,u},{})},Uo=["children","innerProps"],zo=["children","innerProps"];function qo(n){var e=n.maxHeight,o=n.menuEl,r=n.minHeight,t=n.placement,i=n.shouldScroll,u=n.isFixedPosition,s=n.controlHeight,a=To(o),l={placement:"bottom",maxHeight:e};if(!o||!o.offsetParent)return l;var c=a.getBoundingClientRect(),d=c.height,f=o.getBoundingClientRect(),m=f.bottom,b=f.height,x=f.top,v=o.offsetParent.getBoundingClientRect(),h=v.top,S=u?window.innerHeight:Lo(a),I=cn(a),P=parseInt(getComputedStyle(o).marginBottom,10),V=parseInt(getComputedStyle(o).marginTop,10),T=h-V,_=S-x,M=T+I,$=d-I-x,q=m-S+I+P,G=I+x-V,U=160;switch(t){case"auto":case"bottom":if(_>=b)return{placement:"bottom",maxHeight:e};if($>=b&&!u)return i&&Ae(a,q,U),{placement:"bottom",maxHeight:e};if(!u&&$>=r||u&&_>=r){i&&Ae(a,q,U);var X=u?_-P:$-P;return{placement:"bottom",maxHeight:X}}if(t==="auto"||u){var D=e,y=u?T:M;return y>=r&&(D=Math.min(y-P-s,e)),{placement:"top",maxHeight:D}}if(t==="bottom")return i&&$e(a,q),{placement:"bottom",maxHeight:e};break;case"top":if(T>=b)return{placement:"top",maxHeight:e};if(M>=b&&!u)return i&&Ae(a,G,U),{placement:"top",maxHeight:e};if(!u&&M>=r||u&&T>=r){var k=e;return(!u&&M>=r||u&&T>=r)&&(k=u?T-V:M-V),i&&Ae(a,G,U),{placement:"top",maxHeight:k}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return l}function Go(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var pn=function(e){return e==="auto"?"bottom":e},Yo=function(e,o){var r,t=e.placement,i=e.theme,u=i.borderRadius,s=i.spacing,a=i.colors;return F((r={label:"menu"},Ee(r,Go(t),"100%"),Ee(r,"position","absolute"),Ee(r,"width","100%"),Ee(r,"zIndex",1),r),o?{}:{backgroundColor:a.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:s.menuGutter,marginTop:s.menuGutter})},fn=g.createContext(null),Ko=function(e){var o=e.children,r=e.minMenuHeight,t=e.maxMenuHeight,i=e.menuPlacement,u=e.menuPosition,s=e.menuShouldScrollIntoView,a=e.theme,l=g.useContext(fn)||{},c=l.setPortalPlacement,d=g.useRef(null),f=g.useState(t),m=se(f,2),b=m[0],x=m[1],v=g.useState(null),h=se(v,2),S=h[0],I=h[1],P=a.spacing.controlHeight;return tt(function(){var V=d.current;if(V){var T=u==="fixed",_=s&&!T,M=qo({maxHeight:t,menuEl:V,minHeight:r,placement:i,shouldScroll:_,isFixedPosition:T,controlHeight:P});x(M.maxHeight),I(M.placement),c==null||c(M.placement)}},[t,i,u,s,r,c,P]),o({ref:d,placerProps:F(F({},e),{},{placement:S||pn(i),maxHeight:b})})},Xo=function(e){var o=e.children,r=e.innerRef,t=e.innerProps;return O("div",A({},W(e,"menu",{menu:!0}),{ref:r},t),o)},Zo=Xo,Jo=function(e,o){var r=e.maxHeight,t=e.theme.spacing.baseUnit;return F({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},o?{}:{paddingBottom:t,paddingTop:t})},Qo=function(e){var o=e.children,r=e.innerProps,t=e.innerRef,i=e.isMulti;return O("div",A({},W(e,"menuList",{"menu-list":!0,"menu-list--is-multi":i}),{ref:t},r),o)},hn=function(e,o){var r=e.theme,t=r.spacing.baseUnit,i=r.colors;return F({textAlign:"center"},o?{}:{color:i.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},er=hn,tr=hn,nr=function(e){var o=e.children,r=o===void 0?"No options":o,t=e.innerProps,i=le(e,Uo);return O("div",A({},W(F(F({},i),{},{children:r,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),r)},or=function(e){var o=e.children,r=o===void 0?"Loading...":o,t=e.innerProps,i=le(e,zo);return O("div",A({},W(F(F({},i),{},{children:r,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),r)},rr=function(e){var o=e.rect,r=e.offset,t=e.position;return{left:o.left,position:t,top:r,width:o.width,zIndex:1}},ar=function(e){var o=e.appendTo,r=e.children,t=e.controlElement,i=e.innerProps,u=e.menuPlacement,s=e.menuPosition,a=g.useRef(null),l=g.useRef(null),c=g.useState(pn(u)),d=se(c,2),f=d[0],m=d[1],b=g.useMemo(function(){return{setPortalPlacement:m}},[]),x=g.useState(null),v=se(x,2),h=v[0],S=v[1],I=g.useCallback(function(){if(t){var _=_o(t),M=s==="fixed"?0:window.pageYOffset,$=_[f]+M;($!==(h==null?void 0:h.offset)||_.left!==(h==null?void 0:h.rect.left)||_.width!==(h==null?void 0:h.rect.width))&&S({offset:$,rect:_})}},[t,s,f,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);tt(function(){I()},[I]);var P=g.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),t&&a.current&&(l.current=Co(t,a.current,I,{elementResize:"ResizeObserver"in window}))},[t,I]);tt(function(){P()},[P]);var V=g.useCallback(function(_){a.current=_,P()},[P]);if(!o&&s!=="fixed"||!h)return null;var T=O("div",A({ref:V},W(F(F({},e),{},{offset:h.offset,position:s,rect:h.rect}),"menuPortal",{"menu-portal":!0}),i),r);return O(fn.Provider,{value:b},o?Qt.createPortal(T,o):T)},ir=function(e){var o=e.isDisabled,r=e.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:o?"none":void 0,position:"relative"}},ur=function(e){var o=e.children,r=e.innerProps,t=e.isDisabled,i=e.isRtl;return O("div",A({},W(e,"container",{"--is-disabled":t,"--is-rtl":i}),r),o)},sr=function(e,o){var r=e.theme.spacing,t=e.isMulti,i=e.hasValue,u=e.selectProps.controlShouldRenderValue;return F({alignItems:"center",display:t&&i&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},o?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},lr=function(e){var o=e.children,r=e.innerProps,t=e.isMulti,i=e.hasValue;return O("div",A({},W(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":i}),r),o)},cr=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},dr=function(e){var o=e.children,r=e.innerProps;return O("div",A({},W(e,"indicatorsContainer",{indicators:!0}),r),o)},Dt,pr=["size"],fr=["innerProps","isRtl","size"],hr={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},mn=function(e){var o=e.size,r=le(e,pr);return O("svg",A({height:o,width:o,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:hr},r))},ht=function(e){return O(mn,A({size:20},e),O("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},vn=function(e){return O(mn,A({size:20},e),O("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},gn=function(e,o){var r=e.isFocused,t=e.theme,i=t.spacing.baseUnit,u=t.colors;return F({label:"indicatorContainer",display:"flex",transition:"color 150ms"},o?{}:{color:r?u.neutral60:u.neutral20,padding:i*2,":hover":{color:r?u.neutral80:u.neutral40}})},mr=gn,vr=function(e){var o=e.children,r=e.innerProps;return O("div",A({},W(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),o||O(vn,null))},gr=gn,br=function(e){var o=e.children,r=e.innerProps;return O("div",A({},W(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),o||O(ht,null))},xr=function(e,o){var r=e.isDisabled,t=e.theme,i=t.spacing.baseUnit,u=t.colors;return F({label:"indicatorSeparator",alignSelf:"stretch",width:1},o?{}:{backgroundColor:r?u.neutral10:u.neutral20,marginBottom:i*2,marginTop:i*2})},Er=function(e){var o=e.innerProps;return O("span",A({},o,W(e,"indicatorSeparator",{"indicator-separator":!0})))},Cr=so(Dt||(Dt=Io([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),yr=function(e,o){var r=e.isFocused,t=e.size,i=e.theme,u=i.colors,s=i.spacing.baseUnit;return F({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},o?{}:{color:r?u.neutral60:u.neutral20,padding:s*2})},qe=function(e){var o=e.delay,r=e.offset;return O("span",{css:lt({animation:"".concat(Cr," 1s ease-in-out ").concat(o,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},wr=function(e){var o=e.innerProps,r=e.isRtl,t=e.size,i=t===void 0?4:t,u=le(e,fr);return O("div",A({},W(F(F({},u),{},{innerProps:o,isRtl:r,size:i}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),o),O(qe,{delay:0,offset:r}),O(qe,{delay:160,offset:!0}),O(qe,{delay:320,offset:!r}))},Sr=function(e,o){var r=e.isDisabled,t=e.isFocused,i=e.theme,u=i.colors,s=i.borderRadius,a=i.spacing;return F({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:a.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},o?{}:{backgroundColor:r?u.neutral5:u.neutral0,borderColor:r?u.neutral10:t?u.primary:u.neutral20,borderRadius:s,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:t?u.primary:u.neutral30}})},Or=function(e){var o=e.children,r=e.isDisabled,t=e.isFocused,i=e.innerRef,u=e.innerProps,s=e.menuIsOpen;return O("div",A({ref:i},W(e,"control",{control:!0,"control--is-disabled":r,"control--is-focused":t,"control--menu-is-open":s}),u,{"aria-disabled":r||void 0}),o)},Fr=Or,Dr=["data"],Mr=function(e,o){var r=e.theme.spacing;return o?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Ar=function(e){var o=e.children,r=e.cx,t=e.getStyles,i=e.getClassNames,u=e.Heading,s=e.headingProps,a=e.innerProps,l=e.label,c=e.theme,d=e.selectProps;return O("div",A({},W(e,"group",{group:!0}),a),O(u,A({},s,{selectProps:d,theme:c,getStyles:t,getClassNames:i,cx:r}),l),O("div",null,o))},Ir=function(e,o){var r=e.theme,t=r.colors,i=r.spacing;return F({label:"group",cursor:"default",display:"block"},o?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:i.baseUnit*3,paddingRight:i.baseUnit*3,textTransform:"uppercase"})},Pr=function(e){var o=ln(e);o.data;var r=le(o,Dr);return O("div",A({},W(e,"groupHeading",{"group-heading":!0}),r))},Rr=Ar,Vr=["innerRef","isDisabled","isHidden","inputClassName"],Lr=function(e,o){var r=e.isDisabled,t=e.value,i=e.theme,u=i.spacing,s=i.colors;return F(F({visibility:r?"hidden":"visible",transform:t?"translateZ(0)":""},Tr),o?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:s.neutral80})},bn={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Tr={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":F({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},bn)},kr=function(e){return F({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},bn)},_r=function(e){var o=e.cx,r=e.value,t=ln(e),i=t.innerRef,u=t.isDisabled,s=t.isHidden,a=t.inputClassName,l=le(t,Vr);return O("div",A({},W(e,"input",{"input-container":!0}),{"data-value":r||""}),O("input",A({className:o({input:!0},a),ref:i,style:kr(s),disabled:u},l)))},$r=_r,Br=function(e,o){var r=e.theme,t=r.spacing,i=r.borderRadius,u=r.colors;return F({label:"multiValue",display:"flex",minWidth:0},o?{}:{backgroundColor:u.neutral10,borderRadius:i/2,margin:t.baseUnit/2})},Nr=function(e,o){var r=e.theme,t=r.borderRadius,i=r.colors,u=e.cropWithEllipsis;return F({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},o?{}:{borderRadius:t/2,color:i.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Hr=function(e,o){var r=e.theme,t=r.spacing,i=r.borderRadius,u=r.colors,s=e.isFocused;return F({alignItems:"center",display:"flex"},o?{}:{borderRadius:i/2,backgroundColor:s?u.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},xn=function(e){var o=e.children,r=e.innerProps;return O("div",r,o)},jr=xn,Wr=xn;function Ur(n){var e=n.children,o=n.innerProps;return O("div",A({role:"button"},o),e||O(ht,{size:14}))}var zr=function(e){var o=e.children,r=e.components,t=e.data,i=e.innerProps,u=e.isDisabled,s=e.removeProps,a=e.selectProps,l=r.Container,c=r.Label,d=r.Remove;return O(l,{data:t,innerProps:F(F({},W(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),i),selectProps:a},O(c,{data:t,innerProps:F({},W(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:a},o),O(d,{data:t,innerProps:F(F({},W(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(o||"option")},s),selectProps:a}))},qr=zr,Gr=function(e,o){var r=e.isDisabled,t=e.isFocused,i=e.isSelected,u=e.theme,s=u.spacing,a=u.colors;return F({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},o?{}:{backgroundColor:i?a.primary:t?a.primary25:"transparent",color:r?a.neutral20:i?a.neutral0:"inherit",padding:"".concat(s.baseUnit*2,"px ").concat(s.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:i?a.primary:a.primary50}})},Yr=function(e){var o=e.children,r=e.isDisabled,t=e.isFocused,i=e.isSelected,u=e.innerRef,s=e.innerProps;return O("div",A({},W(e,"option",{option:!0,"option--is-disabled":r,"option--is-focused":t,"option--is-selected":i}),{ref:u,"aria-disabled":r},s),o)},Kr=Yr,Xr=function(e,o){var r=e.theme,t=r.spacing,i=r.colors;return F({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},o?{}:{color:i.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},Zr=function(e){var o=e.children,r=e.innerProps;return O("div",A({},W(e,"placeholder",{placeholder:!0}),r),o)},Jr=Zr,Qr=function(e,o){var r=e.isDisabled,t=e.theme,i=t.spacing,u=t.colors;return F({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o?{}:{color:r?u.neutral40:u.neutral80,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},ea=function(e){var o=e.children,r=e.isDisabled,t=e.innerProps;return O("div",A({},W(e,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),t),o)},ta=ea,na={ClearIndicator:br,Control:Fr,DropdownIndicator:vr,DownChevron:vn,CrossIcon:ht,Group:Rr,GroupHeading:Pr,IndicatorsContainer:dr,IndicatorSeparator:Er,Input:$r,LoadingIndicator:wr,Menu:Zo,MenuList:Qo,MenuPortal:ar,LoadingMessage:or,NoOptionsMessage:nr,MultiValue:qr,MultiValueContainer:jr,MultiValueLabel:Wr,MultiValueRemove:Ur,Option:Kr,Placeholder:Jr,SelectContainer:ur,SingleValue:ta,ValueContainer:lr},oa=function(e){return F(F({},na),e.components)},Mt=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function ra(n,e){return!!(n===e||Mt(n)&&Mt(e))}function aa(n,e){if(n.length!==e.length)return!1;for(var o=0;o<n.length;o++)if(!ra(n[o],e[o]))return!1;return!0}function ia(n,e){e===void 0&&(e=aa);var o=null;function r(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];if(o&&o.lastThis===this&&e(t,o.lastArgs))return o.lastResult;var u=n.apply(this,t);return o={lastResult:u,lastArgs:t,lastThis:this},u}return r.clear=function(){o=null},r}var ua={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},sa=function(e){return O("span",A({css:ua},e))},At=sa,la={guidance:function(e){var o=e.isSearchable,r=e.isMulti,t=e.tabSelectsValue,i=e.context,u=e.isInitialFocus;switch(i){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(t?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(e["aria-label"]||"Select"," is focused ").concat(o?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var o=e.action,r=e.label,t=r===void 0?"":r,i=e.labels,u=e.isDisabled;switch(o){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(i.length>1?"s":""," ").concat(i.join(","),", selected.");case"select-option":return u?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var o=e.context,r=e.focused,t=e.options,i=e.label,u=i===void 0?"":i,s=e.selectValue,a=e.isDisabled,l=e.isSelected,c=e.isAppleDevice,d=function(x,v){return x&&x.length?"".concat(x.indexOf(v)+1," of ").concat(x.length):""};if(o==="value"&&s)return"value ".concat(u," focused, ").concat(d(s,r),".");if(o==="menu"&&c){var f=a?" disabled":"",m="".concat(l?" selected":"").concat(f);return"".concat(u).concat(m,", ").concat(d(t,r),".")}return""},onFilter:function(e){var o=e.inputValue,r=e.resultsMessage;return"".concat(r).concat(o?" for search term "+o:"",".")}},ca=function(e){var o=e.ariaSelection,r=e.focusedOption,t=e.focusedValue,i=e.focusableOptions,u=e.isFocused,s=e.selectValue,a=e.selectProps,l=e.id,c=e.isAppleDevice,d=a.ariaLiveMessages,f=a.getOptionLabel,m=a.inputValue,b=a.isMulti,x=a.isOptionDisabled,v=a.isSearchable,h=a.menuIsOpen,S=a.options,I=a.screenReaderStatus,P=a.tabSelectsValue,V=a.isLoading,T=a["aria-label"],_=a["aria-live"],M=g.useMemo(function(){return F(F({},la),d||{})},[d]),$=g.useMemo(function(){var y="";if(o&&M.onChange){var k=o.option,p=o.options,w=o.removedValue,N=o.removedValues,H=o.value,j=function(ie){return Array.isArray(ie)?null:ie},B=w||k||j(H),z=B?f(B):"",K=p||N||void 0,re=K?K.map(f):[],Z=F({isDisabled:B&&x(B,s),label:z,labels:re},o);y=M.onChange(Z)}return y},[o,M,x,s,f]),q=g.useMemo(function(){var y="",k=r||t,p=!!(r&&s&&s.includes(r));if(k&&M.onFocus){var w={focused:k,label:f(k),isDisabled:x(k,s),isSelected:p,options:i,context:k===r?"menu":"value",selectValue:s,isAppleDevice:c};y=M.onFocus(w)}return y},[r,t,f,x,M,i,s,c]),G=g.useMemo(function(){var y="";if(h&&S.length&&!V&&M.onFilter){var k=I({count:i.length});y=M.onFilter({inputValue:m,resultsMessage:k})}return y},[i,m,h,M,S,I,V]),U=(o==null?void 0:o.action)==="initial-input-focus",X=g.useMemo(function(){var y="";if(M.guidance){var k=t?"value":h?"menu":"input";y=M.guidance({"aria-label":T,context:k,isDisabled:r&&x(r,s),isMulti:b,isSearchable:v,tabSelectsValue:P,isInitialFocus:U})}return y},[T,r,t,b,x,v,h,M,s,P,U]),D=O(g.Fragment,null,O("span",{id:"aria-selection"},$),O("span",{id:"aria-focused"},q),O("span",{id:"aria-results"},G),O("span",{id:"aria-guidance"},X));return O(g.Fragment,null,O(At,{id:l},U&&D),O(At,{"aria-live":_,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!U&&D))},da=ca,nt=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],pa=new RegExp("["+nt.map(function(n){return n.letters}).join("")+"]","g"),En={};for(var Ge=0;Ge<nt.length;Ge++)for(var Ye=nt[Ge],Ke=0;Ke<Ye.letters.length;Ke++)En[Ye.letters[Ke]]=Ye.base;var Cn=function(e){return e.replace(pa,function(o){return En[o]})},fa=ia(Cn),It=function(e){return e.replace(/^\s+|\s+$/g,"")},ha=function(e){return"".concat(e.label," ").concat(e.value)},ma=function(e){return function(o,r){if(o.data.__isNew__)return!0;var t=F({ignoreCase:!0,ignoreAccents:!0,stringify:ha,trim:!0,matchFrom:"any"},e),i=t.ignoreCase,u=t.ignoreAccents,s=t.stringify,a=t.trim,l=t.matchFrom,c=a?It(r):r,d=a?It(s(o)):s(o);return i&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=fa(c),d=Cn(d)),l==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},va=["innerRef"];function ga(n){var e=n.innerRef,o=le(n,va),r=Wo(o,"onExited","in","enter","exit","appear");return O("input",A({ref:e},r,{css:lt({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var ba=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function xa(n){var e=n.isEnabled,o=n.onBottomArrive,r=n.onBottomLeave,t=n.onTopArrive,i=n.onTopLeave,u=g.useRef(!1),s=g.useRef(!1),a=g.useRef(0),l=g.useRef(null),c=g.useCallback(function(v,h){if(l.current!==null){var S=l.current,I=S.scrollTop,P=S.scrollHeight,V=S.clientHeight,T=l.current,_=h>0,M=P-V-I,$=!1;M>h&&u.current&&(r&&r(v),u.current=!1),_&&s.current&&(i&&i(v),s.current=!1),_&&h>M?(o&&!u.current&&o(v),T.scrollTop=P,$=!0,u.current=!0):!_&&-h>I&&(t&&!s.current&&t(v),T.scrollTop=0,$=!0,s.current=!0),$&&ba(v)}},[o,r,t,i]),d=g.useCallback(function(v){c(v,v.deltaY)},[c]),f=g.useCallback(function(v){a.current=v.changedTouches[0].clientY},[]),m=g.useCallback(function(v){var h=a.current-v.changedTouches[0].clientY;c(v,h)},[c]),b=g.useCallback(function(v){if(v){var h=No?{passive:!1}:!1;v.addEventListener("wheel",d,h),v.addEventListener("touchstart",f,h),v.addEventListener("touchmove",m,h)}},[m,f,d]),x=g.useCallback(function(v){v&&(v.removeEventListener("wheel",d,!1),v.removeEventListener("touchstart",f,!1),v.removeEventListener("touchmove",m,!1))},[m,f,d]);return g.useEffect(function(){if(e){var v=l.current;return b(v),function(){x(v)}}},[e,b,x]),function(v){l.current=v}}var Pt=["boxSizing","height","overflow","paddingRight","position"],Rt={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Vt(n){n.preventDefault()}function Lt(n){n.stopPropagation()}function Tt(){var n=this.scrollTop,e=this.scrollHeight,o=n+this.offsetHeight;n===0?this.scrollTop=1:o===e&&(this.scrollTop=n-1)}function kt(){return"ontouchstart"in window||navigator.maxTouchPoints}var _t=!!(typeof window<"u"&&window.document&&window.document.createElement),xe=0,he={capture:!1,passive:!1};function Ea(n){var e=n.isEnabled,o=n.accountForScrollbars,r=o===void 0?!0:o,t=g.useRef({}),i=g.useRef(null),u=g.useCallback(function(a){if(_t){var l=document.body,c=l&&l.style;if(r&&Pt.forEach(function(b){var x=c&&c[b];t.current[b]=x}),r&&xe<1){var d=parseInt(t.current.paddingRight,10)||0,f=document.body?document.body.clientWidth:0,m=window.innerWidth-f+d||0;Object.keys(Rt).forEach(function(b){var x=Rt[b];c&&(c[b]=x)}),c&&(c.paddingRight="".concat(m,"px"))}l&&kt()&&(l.addEventListener("touchmove",Vt,he),a&&(a.addEventListener("touchstart",Tt,he),a.addEventListener("touchmove",Lt,he))),xe+=1}},[r]),s=g.useCallback(function(a){if(_t){var l=document.body,c=l&&l.style;xe=Math.max(xe-1,0),r&&xe<1&&Pt.forEach(function(d){var f=t.current[d];c&&(c[d]=f)}),l&&kt()&&(l.removeEventListener("touchmove",Vt,he),a&&(a.removeEventListener("touchstart",Tt,he),a.removeEventListener("touchmove",Lt,he)))}},[r]);return g.useEffect(function(){if(e){var a=i.current;return u(a),function(){s(a)}}},[e,u,s]),function(a){i.current=a}}var Ca=function(e){var o=e.target;return o.ownerDocument.activeElement&&o.ownerDocument.activeElement.blur()},ya={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function wa(n){var e=n.children,o=n.lockEnabled,r=n.captureEnabled,t=r===void 0?!0:r,i=n.onBottomArrive,u=n.onBottomLeave,s=n.onTopArrive,a=n.onTopLeave,l=xa({isEnabled:t,onBottomArrive:i,onBottomLeave:u,onTopArrive:s,onTopLeave:a}),c=Ea({isEnabled:o}),d=function(m){l(m),c(m)};return O(g.Fragment,null,o&&O("div",{onClick:Ca,css:ya}),e(d))}var Sa={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Oa=function(e){var o=e.name,r=e.onFocus;return O("input",{required:!0,name:o,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:Sa,value:"",onChange:function(){}})},Fa=Oa;function mt(n){var e;return typeof window<"u"&&window.navigator!=null?n.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Da(){return mt(/^iPhone/i)}function yn(){return mt(/^Mac/i)}function Ma(){return mt(/^iPad/i)||yn()&&navigator.maxTouchPoints>1}function Aa(){return Da()||Ma()}function Ia(){return yn()||Aa()}var Pa=function(e){return e.label},Ra=function(e){return e.label},Va=function(e){return e.value},La=function(e){return!!e.isDisabled},Ta={clearIndicator:gr,container:ir,control:Sr,dropdownIndicator:mr,group:Mr,groupHeading:Ir,indicatorsContainer:cr,indicatorSeparator:xr,input:Lr,loadingIndicator:yr,loadingMessage:tr,menu:Yo,menuList:Jo,menuPortal:rr,multiValue:Br,multiValueLabel:Nr,multiValueRemove:Hr,noOptionsMessage:er,option:Gr,placeholder:Xr,singleValue:Qr,valueContainer:sr},ka={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},_a=4,wn=4,$a=38,Ba=wn*2,Na={baseUnit:wn,controlHeight:$a,menuGutter:Ba},Xe={borderRadius:_a,colors:ka,spacing:Na},Ha={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ft(),captureMenuScroll:!Ft(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:ma(),formatGroupLabel:Pa,getOptionLabel:Ra,getOptionValue:Va,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:La,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!$o(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var o=e.count;return"".concat(o," result").concat(o!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function $t(n,e,o,r){var t=Fn(n,e,o),i=Dn(n,e,o),u=On(n,e),s=Be(n,e);return{type:"option",data:e,isDisabled:t,isSelected:i,label:u,value:s,index:r}}function Ve(n,e){return n.options.map(function(o,r){if("options"in o){var t=o.options.map(function(u,s){return $t(n,u,e,s)}).filter(function(u){return Nt(n,u)});return t.length>0?{type:"group",data:o,options:t,index:r}:void 0}var i=$t(n,o,e,r);return Nt(n,i)?i:void 0}).filter(Ho)}function Sn(n){return n.reduce(function(e,o){return o.type==="group"?e.push.apply(e,ft(o.options.map(function(r){return r.data}))):e.push(o.data),e},[])}function Bt(n,e){return n.reduce(function(o,r){return r.type==="group"?o.push.apply(o,ft(r.options.map(function(t){return{data:t.data,id:"".concat(e,"-").concat(r.index,"-").concat(t.index)}}))):o.push({data:r.data,id:"".concat(e,"-").concat(r.index)}),o},[])}function ja(n,e){return Sn(Ve(n,e))}function Nt(n,e){var o=n.inputValue,r=o===void 0?"":o,t=e.data,i=e.isSelected,u=e.label,s=e.value;return(!An(n)||!i)&&Mn(n,{label:u,value:s,data:t},r)}function Wa(n,e){var o=n.focusedValue,r=n.selectValue,t=r.indexOf(o);if(t>-1){var i=e.indexOf(o);if(i>-1)return o;if(t<e.length)return e[t]}return null}function Ua(n,e){var o=n.focusedOption;return o&&e.indexOf(o)>-1?o:e[0]}var Ze=function(e,o){var r,t=(r=e.find(function(i){return i.data===o}))===null||r===void 0?void 0:r.id;return t||null},On=function(e,o){return e.getOptionLabel(o)},Be=function(e,o){return e.getOptionValue(o)};function Fn(n,e,o){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,o):!1}function Dn(n,e,o){if(o.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,o);var r=Be(n,e);return o.some(function(t){return Be(n,t)===r})}function Mn(n,e,o){return n.filterOption?n.filterOption(e,o):!0}var An=function(e){var o=e.hideSelectedOptions,r=e.isMulti;return o===void 0?r:o},za=1,In=function(n){oo(o,n);var e=ro(o);function o(r){var t;if(ao(this,o),t=e.call(this,r),t.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.isAppleDevice=Ia(),t.controlRef=null,t.getControlRef=function(a){t.controlRef=a},t.focusedOptionRef=null,t.getFocusedOptionRef=function(a){t.focusedOptionRef=a},t.menuListRef=null,t.getMenuListRef=function(a){t.menuListRef=a},t.inputRef=null,t.getInputRef=function(a){t.inputRef=a},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(a,l){var c=t.props,d=c.onChange,f=c.name;l.name=f,t.ariaOnChange(a,l),d(a,l)},t.setValue=function(a,l,c){var d=t.props,f=d.closeMenuOnSelect,m=d.isMulti,b=d.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:b}),f&&(t.setState({inputIsHiddenAfterUpdate:!m}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(a,{action:l,option:c})},t.selectOption=function(a){var l=t.props,c=l.blurInputOnSelect,d=l.isMulti,f=l.name,m=t.state.selectValue,b=d&&t.isOptionSelected(a,m),x=t.isOptionDisabled(a,m);if(b){var v=t.getOptionValue(a);t.setValue(m.filter(function(h){return t.getOptionValue(h)!==v}),"deselect-option",a)}else if(!x)d?t.setValue([].concat(ft(m),[a]),"select-option",a):t.setValue(a,"select-option");else{t.ariaOnChange(a,{action:"select-option",option:a,name:f});return}c&&t.blurInput()},t.removeValue=function(a){var l=t.props.isMulti,c=t.state.selectValue,d=t.getOptionValue(a),f=c.filter(function(b){return t.getOptionValue(b)!==d}),m=Pe(l,f,f[0]||null);t.onChange(m,{action:"remove-value",removedValue:a}),t.focusInput()},t.clearValue=function(){var a=t.state.selectValue;t.onChange(Pe(t.props.isMulti,[],null),{action:"clear",removedValues:a})},t.popValue=function(){var a=t.props.isMulti,l=t.state.selectValue,c=l[l.length-1],d=l.slice(0,l.length-1),f=Pe(a,d,d[0]||null);t.onChange(f,{action:"pop-value",removedValue:c})},t.getFocusedOptionId=function(a){return Ze(t.state.focusableOptionsWithIds,a)},t.getFocusableOptionsWithIds=function(){return Bt(Ve(t.props,t.state.selectValue),t.getElementId("option"))},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return Vo.apply(void 0,[t.props.classNamePrefix].concat(l))},t.getOptionLabel=function(a){return On(t.props,a)},t.getOptionValue=function(a){return Be(t.props,a)},t.getStyles=function(a,l){var c=t.props.unstyled,d=Ta[a](l,c);d.boxSizing="border-box";var f=t.props.styles[a];return f?f(d,l):d},t.getClassNames=function(a,l){var c,d;return(c=(d=t.props.classNames)[a])===null||c===void 0?void 0:c.call(d,l)},t.getElementId=function(a){return"".concat(t.state.instancePrefix,"-").concat(a)},t.getComponents=function(){return oa(t.props)},t.buildCategorizedOptions=function(){return Ve(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return Sn(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(a,l){t.setState({ariaSelection:F({value:a},l)})},t.onMenuMouseDown=function(a){a.button===0&&(a.stopPropagation(),a.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(a){t.blockOptionHover=!1},t.onControlMouseDown=function(a){if(!a.defaultPrevented){var l=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&t.onMenuClose():l&&t.openMenu("first"):(l&&(t.openAfterFocus=!0),t.focusInput()),a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.preventDefault()}},t.onDropdownIndicatorMouseDown=function(a){if(!(a&&a.type==="mousedown"&&a.button!==0)&&!t.props.isDisabled){var l=t.props,c=l.isMulti,d=l.menuIsOpen;t.focusInput(),d?(t.setState({inputIsHiddenAfterUpdate:!c}),t.onMenuClose()):t.openMenu("first"),a.preventDefault()}},t.onClearIndicatorMouseDown=function(a){a&&a.type==="mousedown"&&a.button!==0||(t.clearValue(),a.preventDefault(),t.openAfterFocus=!1,a.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(a){typeof t.props.closeMenuOnScroll=="boolean"?a.target instanceof HTMLElement&&We(a.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(a)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(a){var l=a.touches,c=l&&l.item(0);c&&(t.initialTouchX=c.clientX,t.initialTouchY=c.clientY,t.userIsDragging=!1)},t.onTouchMove=function(a){var l=a.touches,c=l&&l.item(0);if(c){var d=Math.abs(c.clientX-t.initialTouchX),f=Math.abs(c.clientY-t.initialTouchY),m=5;t.userIsDragging=d>m||f>m}},t.onTouchEnd=function(a){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(a.target)&&t.menuListRef&&!t.menuListRef.contains(a.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(a){t.userIsDragging||t.onControlMouseDown(a)},t.onClearIndicatorTouchEnd=function(a){t.userIsDragging||t.onClearIndicatorMouseDown(a)},t.onDropdownIndicatorTouchEnd=function(a){t.userIsDragging||t.onDropdownIndicatorMouseDown(a)},t.handleInputChange=function(a){var l=t.props.inputValue,c=a.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(c,{action:"input-change",prevInputValue:l}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(a){t.props.onFocus&&t.props.onFocus(a),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(a){var l=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(a),t.onInputChange("",{action:"input-blur",prevInputValue:l}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(a){if(!(t.blockOptionHover||t.state.focusedOption===a)){var l=t.getFocusableOptions(),c=l.indexOf(a);t.setState({focusedOption:a,focusedOptionId:c>-1?t.getFocusedOptionId(a):null})}},t.shouldHideSelectedOptions=function(){return An(t.props)},t.onValueInputFocus=function(a){a.preventDefault(),a.stopPropagation(),t.focus()},t.onKeyDown=function(a){var l=t.props,c=l.isMulti,d=l.backspaceRemovesValue,f=l.escapeClearsValue,m=l.inputValue,b=l.isClearable,x=l.isDisabled,v=l.menuIsOpen,h=l.onKeyDown,S=l.tabSelectsValue,I=l.openMenuOnFocus,P=t.state,V=P.focusedOption,T=P.focusedValue,_=P.selectValue;if(!x&&!(typeof h=="function"&&(h(a),a.defaultPrevented))){switch(t.blockOptionHover=!0,a.key){case"ArrowLeft":if(!c||m)return;t.focusValue("previous");break;case"ArrowRight":if(!c||m)return;t.focusValue("next");break;case"Delete":case"Backspace":if(m)return;if(T)t.removeValue(T);else{if(!d)return;c?t.popValue():b&&t.clearValue()}break;case"Tab":if(t.isComposing||a.shiftKey||!v||!S||!V||I&&t.isOptionSelected(V,_))return;t.selectOption(V);break;case"Enter":if(a.keyCode===229)break;if(v){if(!V||t.isComposing)return;t.selectOption(V);break}return;case"Escape":v?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:m}),t.onMenuClose()):b&&f&&t.clearValue();break;case" ":if(m)return;if(!v){t.openMenu("first");break}if(!V)return;t.selectOption(V);break;case"ArrowUp":v?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":v?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!v)return;t.focusOption("pageup");break;case"PageDown":if(!v)return;t.focusOption("pagedown");break;case"Home":if(!v)return;t.focusOption("first");break;case"End":if(!v)return;t.focusOption("last");break;default:return}a.preventDefault()}},t.state.instancePrefix="react-select-"+(t.props.instanceId||++za),t.state.selectValue=St(r.value),r.menuIsOpen&&t.state.selectValue.length){var i=t.getFocusableOptionsWithIds(),u=t.buildFocusableOptions(),s=u.indexOf(t.state.selectValue[0]);t.state.focusableOptionsWithIds=i,t.state.focusedOption=u[s],t.state.focusedOptionId=Ze(i,u[s])}return t}return io(o,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Ot(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var i=this.props,u=i.isDisabled,s=i.menuIsOpen,a=this.state.isFocused;(a&&!u&&t.isDisabled||a&&s&&!t.menuIsOpen)&&this.focusInput(),a&&u&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!a&&!u&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Ot(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,i){this.props.onInputChange(t,i)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var i=this,u=this.state,s=u.selectValue,a=u.isFocused,l=this.buildFocusableOptions(),c=t==="first"?0:l.length-1;if(!this.props.isMulti){var d=l.indexOf(s[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(a&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[c],focusedOptionId:this.getFocusedOptionId(l[c])},function(){return i.onMenuOpen()})}},{key:"focusValue",value:function(t){var i=this.state,u=i.selectValue,s=i.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var a=u.indexOf(s);s||(a=-1);var l=u.length-1,c=-1;if(u.length){switch(t){case"previous":a===0?c=0:a===-1?c=l:c=a-1;break;case"next":a>-1&&a<l&&(c=a+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",i=this.props.pageSize,u=this.state.focusedOption,s=this.getFocusableOptions();if(s.length){var a=0,l=s.indexOf(u);u||(l=-1),t==="up"?a=l>0?l-1:s.length-1:t==="down"?a=(l+1)%s.length:t==="pageup"?(a=l-i,a<0&&(a=0)):t==="pagedown"?(a=l+i,a>s.length-1&&(a=s.length-1)):t==="last"&&(a=s.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:s[a],focusedValue:null,focusedOptionId:this.getFocusedOptionId(s[a])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Xe):F(F({},Xe),this.props.theme):Xe}},{key:"getCommonProps",value:function(){var t=this.clearValue,i=this.cx,u=this.getStyles,s=this.getClassNames,a=this.getValue,l=this.selectOption,c=this.setValue,d=this.props,f=d.isMulti,m=d.isRtl,b=d.options,x=this.hasValue();return{clearValue:t,cx:i,getStyles:u,getClassNames:s,getValue:a,hasValue:x,isMulti:f,isRtl:m,options:b,selectOption:l,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,i=t.isClearable,u=t.isMulti;return i===void 0?u:i}},{key:"isOptionDisabled",value:function(t,i){return Fn(this.props,t,i)}},{key:"isOptionSelected",value:function(t,i){return Dn(this.props,t,i)}},{key:"filterOption",value:function(t,i){return Mn(this.props,t,i)}},{key:"formatOptionLabel",value:function(t,i){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,s=this.state.selectValue;return this.props.formatOptionLabel(t,{context:i,inputValue:u,selectValue:s})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,i=t.isDisabled,u=t.isSearchable,s=t.inputId,a=t.inputValue,l=t.tabIndex,c=t.form,d=t.menuIsOpen,f=t.required,m=this.getComponents(),b=m.Input,x=this.state,v=x.inputIsHidden,h=x.ariaSelection,S=this.commonProps,I=s||this.getElementId("input"),P=F(F(F({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":f,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?g.createElement(b,A({},S,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:I,innerRef:this.getInputRef,isDisabled:i,isHidden:v,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:c,type:"text",value:a},P)):g.createElement(ga,A({id:I,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:_e,onFocus:this.onInputFocus,disabled:i,tabIndex:l,inputMode:"none",form:c,value:""},P))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,i=this.getComponents(),u=i.MultiValue,s=i.MultiValueContainer,a=i.MultiValueLabel,l=i.MultiValueRemove,c=i.SingleValue,d=i.Placeholder,f=this.commonProps,m=this.props,b=m.controlShouldRenderValue,x=m.isDisabled,v=m.isMulti,h=m.inputValue,S=m.placeholder,I=this.state,P=I.selectValue,V=I.focusedValue,T=I.isFocused;if(!this.hasValue()||!b)return h?null:g.createElement(d,A({},f,{key:"placeholder",isDisabled:x,isFocused:T,innerProps:{id:this.getElementId("placeholder")}}),S);if(v)return P.map(function(M,$){var q=M===V,G="".concat(t.getOptionLabel(M),"-").concat(t.getOptionValue(M));return g.createElement(u,A({},f,{components:{Container:s,Label:a,Remove:l},isFocused:q,isDisabled:x,key:G,index:$,removeProps:{onClick:function(){return t.removeValue(M)},onTouchEnd:function(){return t.removeValue(M)},onMouseDown:function(X){X.preventDefault()}},data:M}),t.formatOptionLabel(M,"value"))});if(h)return null;var _=P[0];return g.createElement(c,A({},f,{data:_,isDisabled:x}),this.formatOptionLabel(_,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),i=t.ClearIndicator,u=this.commonProps,s=this.props,a=s.isDisabled,l=s.isLoading,c=this.state.isFocused;if(!this.isClearable()||!i||a||!this.hasValue()||l)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return g.createElement(i,A({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),i=t.LoadingIndicator,u=this.commonProps,s=this.props,a=s.isDisabled,l=s.isLoading,c=this.state.isFocused;if(!i||!l)return null;var d={"aria-hidden":"true"};return g.createElement(i,A({},u,{innerProps:d,isDisabled:a,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),i=t.DropdownIndicator,u=t.IndicatorSeparator;if(!i||!u)return null;var s=this.commonProps,a=this.props.isDisabled,l=this.state.isFocused;return g.createElement(u,A({},s,{isDisabled:a,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),i=t.DropdownIndicator;if(!i)return null;var u=this.commonProps,s=this.props.isDisabled,a=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return g.createElement(i,A({},u,{innerProps:l,isDisabled:s,isFocused:a}))}},{key:"renderMenu",value:function(){var t=this,i=this.getComponents(),u=i.Group,s=i.GroupHeading,a=i.Menu,l=i.MenuList,c=i.MenuPortal,d=i.LoadingMessage,f=i.NoOptionsMessage,m=i.Option,b=this.commonProps,x=this.state.focusedOption,v=this.props,h=v.captureMenuScroll,S=v.inputValue,I=v.isLoading,P=v.loadingMessage,V=v.minMenuHeight,T=v.maxMenuHeight,_=v.menuIsOpen,M=v.menuPlacement,$=v.menuPosition,q=v.menuPortalTarget,G=v.menuShouldBlockScroll,U=v.menuShouldScrollIntoView,X=v.noOptionsMessage,D=v.onMenuScrollToTop,y=v.onMenuScrollToBottom;if(!_)return null;var k=function(z,K){var re=z.type,Z=z.data,ae=z.isDisabled,ie=z.isSelected,De=z.label,Bn=z.value,bt=x===Z,xt=ae?void 0:function(){return t.onOptionHover(Z)},Nn=ae?void 0:function(){return t.selectOption(Z)},Et="".concat(t.getElementId("option"),"-").concat(K),Hn={id:Et,onClick:Nn,onMouseMove:xt,onMouseOver:xt,tabIndex:-1,role:"option","aria-selected":t.isAppleDevice?void 0:ie};return g.createElement(m,A({},b,{innerProps:Hn,data:Z,isDisabled:ae,isSelected:ie,key:Et,label:De,type:re,value:Bn,isFocused:bt,innerRef:bt?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(z.data,"menu"))},p;if(this.hasOptions())p=this.getCategorizedOptions().map(function(B){if(B.type==="group"){var z=B.data,K=B.options,re=B.index,Z="".concat(t.getElementId("group"),"-").concat(re),ae="".concat(Z,"-heading");return g.createElement(u,A({},b,{key:Z,data:z,options:K,Heading:s,headingProps:{id:ae,data:B.data},label:t.formatGroupLabel(B.data)}),B.options.map(function(ie){return k(ie,"".concat(re,"-").concat(ie.index))}))}else if(B.type==="option")return k(B,"".concat(B.index))});else if(I){var w=P({inputValue:S});if(w===null)return null;p=g.createElement(d,b,w)}else{var N=X({inputValue:S});if(N===null)return null;p=g.createElement(f,b,N)}var H={minMenuHeight:V,maxMenuHeight:T,menuPlacement:M,menuPosition:$,menuShouldScrollIntoView:U},j=g.createElement(Ko,A({},b,H),function(B){var z=B.ref,K=B.placerProps,re=K.placement,Z=K.maxHeight;return g.createElement(a,A({},b,H,{innerRef:z,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove},isLoading:I,placement:re}),g.createElement(wa,{captureEnabled:h,onTopArrive:D,onBottomArrive:y,lockEnabled:G},function(ae){return g.createElement(l,A({},b,{innerRef:function(De){t.getMenuListRef(De),ae(De)},innerProps:{role:"listbox","aria-multiselectable":b.isMulti,id:t.getElementId("listbox")},isLoading:I,maxHeight:Z,focusedOption:x}),p)}))});return q||$==="fixed"?g.createElement(c,A({},b,{appendTo:q,controlElement:this.controlRef,menuPlacement:M,menuPosition:$}),j):j}},{key:"renderFormField",value:function(){var t=this,i=this.props,u=i.delimiter,s=i.isDisabled,a=i.isMulti,l=i.name,c=i.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!s)return g.createElement(Fa,{name:l,onFocus:this.onValueInputFocus});if(!(!l||s))if(a)if(u){var f=d.map(function(x){return t.getOptionValue(x)}).join(u);return g.createElement("input",{name:l,type:"hidden",value:f})}else{var m=d.length>0?d.map(function(x,v){return g.createElement("input",{key:"i-".concat(v),name:l,type:"hidden",value:t.getOptionValue(x)})}):g.createElement("input",{name:l,type:"hidden",value:""});return g.createElement("div",null,m)}else{var b=d[0]?this.getOptionValue(d[0]):"";return g.createElement("input",{name:l,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,i=this.state,u=i.ariaSelection,s=i.focusedOption,a=i.focusedValue,l=i.isFocused,c=i.selectValue,d=this.getFocusableOptions();return g.createElement(da,A({},t,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:s,focusedValue:a,isFocused:l,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var t=this.getComponents(),i=t.Control,u=t.IndicatorsContainer,s=t.SelectContainer,a=t.ValueContainer,l=this.props,c=l.className,d=l.id,f=l.isDisabled,m=l.menuIsOpen,b=this.state.isFocused,x=this.commonProps=this.getCommonProps();return g.createElement(s,A({},x,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:f,isFocused:b}),this.renderLiveRegion(),g.createElement(i,A({},x,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:f,isFocused:b,menuIsOpen:m}),g.createElement(a,A({},x,{isDisabled:f}),this.renderPlaceholderOrValue(),this.renderInput()),g.createElement(u,A({},x,{isDisabled:f}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,i){var u=i.prevProps,s=i.clearFocusValueOnUpdate,a=i.inputIsHiddenAfterUpdate,l=i.ariaSelection,c=i.isFocused,d=i.prevWasFocused,f=i.instancePrefix,m=t.options,b=t.value,x=t.menuIsOpen,v=t.inputValue,h=t.isMulti,S=St(b),I={};if(u&&(b!==u.value||m!==u.options||x!==u.menuIsOpen||v!==u.inputValue)){var P=x?ja(t,S):[],V=x?Bt(Ve(t,S),"".concat(f,"-option")):[],T=s?Wa(i,S):null,_=Ua(i,P),M=Ze(V,_);I={selectValue:S,focusedOption:_,focusedOptionId:M,focusableOptionsWithIds:V,focusedValue:T,clearFocusValueOnUpdate:!1}}var $=a!=null&&t!==u?{inputIsHidden:a,inputIsHiddenAfterUpdate:void 0}:{},q=l,G=c&&d;return c&&!G&&(q={value:Pe(h,S,S[0]||null),options:S,action:"initial-input-focus"},G=!d),(l==null?void 0:l.action)==="initial-input-focus"&&(q=null),F(F(F({},I),$),{},{prevProps:t,ariaSelection:q,prevWasFocused:G})}}]),o}(g.Component);In.defaultProps=Ha;var qa=g.forwardRef(function(n,e){var o=Fo(n);return g.createElement(In,A({ref:e},o))}),Ht=qa;let jt=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((e,o)=>(o&=63,o<36?e+=o.toString(36):o<62?e+=(o-26).toString(36).toUpperCase():o>62?e+="-":e+="_",e),"");const Ga=L.form`
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
`,Ya=L.div`
  position: relative;
`,Ka=L.input`
  width: 100%;
  padding: 14px;
  height: 46px;
  border-radius: 12px;
  border: 1px solid ${C.colorInput};
  background: transparent;
  color: ${C.colorWhite};
  font-size: 14px;
  line-height: 1.42857;

  ::placeholder {
    color: ${C.colorWhite};
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
    border: 1px solid ${C.colorOrange};
  }

  @media (min-width: 768px) {
    width: 236px;
    height: 52px;
    font-size: 16px;
    line-height: 1.5;
  }
`,Xa=L.div`
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
`,Za=L.svg`
  stroke: ${C.colorWhite};
`,Ja=L.svg`
  stroke: ${C.colorOrange};
`,Qa=L.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,ei={singleValue:n=>({...n,color:`${C.colorWhite}`}),control:(n,{isSelected:e})=>({...n,display:"flex",color:e?`${C.colorBeige}`:`${C.colorWhite}`,backgroundColor:"transparent",width:"146px",borderRadius:"12px",padding:"14px",lineHeight:"1.2857",fontSize:"14px",fontWeight:"400",outline:"none",border:`1px solid ${C.colorInput}`,boxShadow:"none",cursor:"pointer",wordWrap:"break-word",":hover":{border:`1px solid ${C.colorOrange}`},":active":{border:`1px solid ${C.colorOrange}`},":focus":{outline:"none",border:`1px solid ${C.colorOrange}`},"@media (min-width: 768px)":{fontSize:"16px",lineHeight:"1.5",width:"192px",height:"52px"}}),option:(n,{isHover:e,isDisabled:o,isFocused:r,isSelected:t})=>({...n,color:t?`${C.colorOrange1}`:r?`${C.colorBeige}`:e?`${C.colorBeige}`:`${C.colorWhite}`,fontSize:"14px",fontWeight:"400",lineHeight:"1.2857",cursor:"pointer",backgroundColor:o?"none":t?`${C.colorInput}`:"transparent",":active":{...n[":active"],backgroundColor:t?`${C.colorInput}`:"none"}}),menu:n=>({...n,backgroundColor:"#1C1C1C",padding:"14px",borderRadius:"12px",border:"none"}),menuList:n=>({...n,boxSizing:"content-box","&::-webkit-scrollbar":{width:"6px",position:"relative"},"&::-webkit-scrollbar-thumb":{borderRadius:"12px",background:"rgba(239, 237, 232, 0.1)"},"&::-webkit-scrollbar-track":{background:"transparent"}}),indicatorSeparator:()=>({display:"none"}),valueContainer:n=>({...n,padding:"0px",margin:"0px"}),clearIndicator:n=>({...n,padding:0,color:`${C.colorOrange}`,cursor:"pointer"}),dropdownIndicator:(n,e)=>({...n,padding:0,color:`${C.colorWhite}`,transition:"all .3s ease",transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),placeholder:n=>({...n,color:`${C.colorWhite}`})},ti={singleValue:n=>({...n,color:`${C.colorWhite}`}),control:(n,{isSelected:e})=>({...n,display:"flex",color:e?`${C.colorBeige}`:`${C.colorWhite}`,backgroundColor:"transparent",width:"173px",borderRadius:"12px",padding:"14px",lineHeight:"1.2857",fontSize:"14px",fontWeight:"400",outline:"none",border:`1px solid ${C.colorInput}`,boxShadow:"none",cursor:"pointer",wordWrap:"break-word",":hover":{border:`1px solid ${C.colorOrange}`},":active":{border:`1px solid ${C.colorOrange}`},":focus":{outline:"none",border:`1px solid ${C.colorOrange}`},"@media (min-width: 768px)":{fontSize:"16px",lineHeight:"1.5",width:"204px",height:"52px"}}),option:(n,{isHover:e,isDisabled:o,isFocused:r,isSelected:t})=>({...n,color:t?`${C.colorOrange1}`:r?`${C.colorBeige}`:e?`${C.colorBeige}`:`${C.colorWhite}`,fontSize:"14px",fontWeight:"400",lineHeight:"1.2857",cursor:"pointer",backgroundColor:o?"none":t?`${C.colorInput}`:"transparent",":active":{...n[":active"],backgroundColor:t?`${C.colorInput}`:"transparent"}}),menu:n=>({...n,backgroundColor:"#1C1C1C",padding:"14px",borderRadius:"12px",border:"none"}),menuList:n=>({...n,boxSizing:"content-box","&::-webkit-scrollbar":{width:"6px",position:"relative"},"&::-webkit-scrollbar-thumb":{borderRadius:"12px",background:"rgba(239, 237, 232, 0.1)"},"&::-webkit-scrollbar-track":{background:"transparent"}}),indicatorSeparator:()=>({display:"none"}),valueContainer:n=>({...n,padding:"0px",margin:"0px"}),clearIndicator:n=>({...n,padding:0,color:`${C.colorOrange}`,cursor:"pointer"}),dropdownIndicator:(n,e)=>({...n,padding:0,color:`${C.colorWhite}`,transition:"all .3s ease",transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),placeholder:n=>({...n,color:`${C.colorWhite}`})},ni=({categories:n})=>{st();const[e,o]=g.useState(!1),[r,t]=g.useState(""),[i,u]=g.useState(null),[s,a]=g.useState(null),l=n.map(h=>h[0].toUpperCase()+h.slice(1).toLowerCase()),c=h=>[...h.map(S=>({value:S,label:S}))],d=[{value:"null",label:"All"},{value:"true",label:"Recommended "},{value:"false",label:"Not recommended"}],f=h=>{h&&h.preventDefault(),console.log({title:r||"",category:i||null,groupBloodNotAllowed:s||null})},m=h=>{const S=h.target.value;o(S.length>0),t(S.trim())},b=()=>{o(!1),t(""),console.log({title:"",category:i||null,groupBloodNotAllowed:s||null})},x=h=>{const S=h?h.value:null;u(S),console.log({title:r||"",category:S,groupBloodNotAllowed:s||null})},v=h=>{const S=h?h.value:null;a(S),console.log({title:r||"",category:i||null,groupBloodNotAllowed:S})};return E.jsx(E.Fragment,{children:E.jsxs(Ga,{onSubmit:f,children:[E.jsxs(Ya,{children:[E.jsx(Ka,{type:"text",name:"title",placeholder:"Search",value:r,onChange:m}),E.jsxs(Xa,{children:[e&&E.jsx("button",{type:"button",onClick:b,children:E.jsx(Ja,{children:E.jsx("use",{href:ue+"#icon-x"})})}),E.jsx("button",{type:"submit",children:E.jsx(Za,{children:E.jsx("use",{href:ue+"#icon-search"})})})]})]}),E.jsxs(Qa,{children:[E.jsx(Ht,{id:jt(),options:c(l),value:c(l).find(h=>h.value===i),isSearchable:!1,isMulti:!1,isClearable:!0,onChange:x,placeholder:"Categories",styles:ei}),E.jsx(Ht,{id:jt(),options:d,value:d.find(h=>h.value===s),isSearchable:!1,isMulti:!1,isClearable:!0,onChange:v,placeholder:"All",styles:ti})]})]})})},oi=n=>n.products.productsArray,ri=n=>n.products.productsCategories,ai=n=>n.products.isLoading,ii=L.li`
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
`,ui=L.div`
  position: absolute;
  padding: 5px 7.5px;
  background: rgba(239, 237, 232, 0.05);
  border-radius: 4px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  word-wrap: break-word;
`,Wt=L.svg`
  width: 14px;
  height: 14px;
`,Je=L.p`
  > span {
    color: rgba(239, 237, 232, 0.4);
  }

  display: flex;
  gap: 4px;
  color: ${C.colorWhite};
  font-size: 12px;
  line-height: 1.5;
  word-wrap: break-word;
  white-space: nowrap;
`,si=L.p`
  > span {
    color: rgba(239, 237, 232, 0.4);
  }

  display: flex;
  gap: 4px;
  color: ${C.colorWhite};
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
`,li=L.h2`
  color: ${C.colorWhite};
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
`,ci=L.button`
  display: flex;
  align-items: center;
  color: ${C.colorOrange};
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
`,di=L.div`
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
`,pi=L.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
  align-items: center;

  @media (max-width: 335px) {
    flex-wrap: wrap;
  }
`,fi=({product:n,type:e,handleOpenModal:o})=>{const r=d=>[...d.map(f=>f[0].toUpperCase()+f.slice(1).toLowerCase())],{title:t,category:i,calories:u,weight:s}=n,a=r([t])[0],l=r([i])[0];let c;return e?c="Recommended":c="Not recommended",E.jsxs(ii,{children:[E.jsx(ui,{children:"DIET"}),E.jsxs("div",{style:{display:"flex",gap:"16px",alignSelf:"flex-end",flexWrap:"wrap"},children:[E.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[E.jsx(Wt,{children:e?E.jsx("use",{href:ue+"#icon-Ellipse-82",style:{fill:C.colorSecondaryGreen,stroke:C.colorSecondaryGreen}}):E.jsx("use",{href:ue+"#icon-Ellipse-82",style:{fill:C.colorSecondaryRed,stroke:C.colorSecondaryRed}})}),E.jsx(Je,{children:c})]}),E.jsxs(ci,{onClick:()=>o(n),children:["Add",E.jsx(Wt,{style:{width:"16px",height:"16px"},children:E.jsx("use",{href:ue+"#icon-arrow",style:{stroke:C.colorOrange}})})]})]}),E.jsxs(di,{children:[E.jsx("svg",{style:{flexShrink:0,width:"24px",height:"24px"},children:E.jsx("use",{href:ue+"#icon-running-stick-figure-svgrepo-com-1"})}),E.jsx(li,{children:a})]}),E.jsxs(pi,{children:[E.jsxs(Je,{children:[E.jsx("span",{children:"Calories:"}),u]}),E.jsxs(si,{children:[E.jsx("span",{children:"Category:"}),l]}),E.jsxs(Je,{children:[E.jsx("span",{children:"Weight:"}),s]})]})]})};var ot={exports:{}},fe={},rt={exports:{}},ne={},at={exports:{}};(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",r="contents",t=/input|select|textarea|button|object|iframe/;function i(d,f){return f.getPropertyValue("overflow")!=="visible"||d.scrollWidth<=0&&d.scrollHeight<=0}function u(d){var f=d.offsetWidth<=0&&d.offsetHeight<=0;if(f&&!d.innerHTML)return!0;try{var m=window.getComputedStyle(d),b=m.getPropertyValue("display");return f?b!==r&&i(d,m):b===o}catch{return console.warn("Failed to inspect element style"),!1}}function s(d){for(var f=d,m=d.getRootNode&&d.getRootNode();f&&f!==document.body;){if(m&&f===m&&(f=m.host.parentNode),u(f))return!1;f=f.parentNode}return!0}function a(d,f){var m=d.nodeName.toLowerCase(),b=t.test(m)&&!d.disabled||m==="a"&&d.href||f;return b&&s(d)}function l(d){var f=d.getAttribute("tabindex");f===null&&(f=void 0);var m=isNaN(f);return(m||f>=0)&&a(d,!m)}function c(d){var f=[].slice.call(d.querySelectorAll("*"),0).reduce(function(m,b){return m.concat(b.shadowRoot?c(b.shadowRoot):[b])},[]);return f.filter(l)}n.exports=e.default})(at,at.exports);var Pn=at.exports;Object.defineProperty(ne,"__esModule",{value:!0});ne.resetState=gi;ne.log=bi;ne.handleBlur=we;ne.handleFocus=Se;ne.markForFocusLater=xi;ne.returnFocus=Ei;ne.popWithoutFocus=Ci;ne.setupScopedFocus=yi;ne.teardownScopedFocus=wi;var hi=Pn,mi=vi(hi);function vi(n){return n&&n.__esModule?n:{default:n}}var ve=[],me=null,it=!1;function gi(){ve=[]}function bi(){}function we(){it=!0}function Se(){if(it){if(it=!1,!me)return;setTimeout(function(){if(!me.contains(document.activeElement)){var n=(0,mi.default)(me)[0]||me;n.focus()}},0)}}function xi(){ve.push(document.activeElement)}function Ei(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{ve.length!==0&&(e=ve.pop(),e.focus({preventScroll:n}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function Ci(){ve.length>0&&ve.pop()}function yi(n){me=n,window.addEventListener?(window.addEventListener("blur",we,!1),document.addEventListener("focus",Se,!0)):(window.attachEvent("onBlur",we),document.attachEvent("onFocus",Se))}function wi(){me=null,window.addEventListener?(window.removeEventListener("blur",we),document.removeEventListener("focus",Se)):(window.detachEvent("onBlur",we),document.detachEvent("onFocus",Se))}var ut={exports:{}};(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var o=Pn,r=t(o);function t(s){return s&&s.__esModule?s:{default:s}}function i(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return s.activeElement.shadowRoot?i(s.activeElement.shadowRoot):s.activeElement}function u(s,a){var l=(0,r.default)(s);if(!l.length){a.preventDefault();return}var c=void 0,d=a.shiftKey,f=l[0],m=l[l.length-1],b=i();if(s===b){if(!d)return;c=m}if(m===b&&!d&&(c=f),f===b&&d&&(c=m),c){a.preventDefault(),c.focus();return}var x=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),v=x!=null&&x[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(v){var h=l.indexOf(b);if(h>-1&&(h+=d?-1:1),c=l[h],typeof c>"u"){a.preventDefault(),c=d?m:f,c.focus();return}a.preventDefault(),c.focus()}}n.exports=e.default})(ut,ut.exports);var Si=ut.exports,oe={},te={},Rn={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(n){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};n.exports?n.exports=o:window.ExecutionEnvironment=o})()})(Rn);var Oi=Rn.exports;Object.defineProperty(te,"__esModule",{value:!0});te.canUseDOM=te.SafeNodeList=te.SafeHTMLCollection=void 0;var Fi=Oi,Di=Mi(Fi);function Mi(n){return n&&n.__esModule?n:{default:n}}var Ue=Di.default,Ai=Ue.canUseDOM?window.HTMLElement:{};te.SafeHTMLCollection=Ue.canUseDOM?window.HTMLCollection:{};te.SafeNodeList=Ue.canUseDOM?window.NodeList:{};te.canUseDOM=Ue.canUseDOM;te.default=Ai;Object.defineProperty(oe,"__esModule",{value:!0});oe.resetState=Li;oe.log=Ti;oe.assertNodeList=Vn;oe.setElement=ki;oe.validateElement=vt;oe.hide=_i;oe.show=$i;oe.documentNotReadyOrSSRTesting=Bi;var Ii=uo,Pi=Vi(Ii),Ri=te;function Vi(n){return n&&n.__esModule?n:{default:n}}var J=null;function Li(){J&&(J.removeAttribute?J.removeAttribute("aria-hidden"):J.length!=null?J.forEach(function(n){return n.removeAttribute("aria-hidden")}):document.querySelectorAll(J).forEach(function(n){return n.removeAttribute("aria-hidden")})),J=null}function Ti(){}function Vn(n,e){if(!n||!n.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function ki(n){var e=n;if(typeof e=="string"&&Ri.canUseDOM){var o=document.querySelectorAll(e);Vn(o,e),e=o}return J=e||J,J}function vt(n){var e=n||J;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Pi.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function _i(n){var e=!0,o=!1,r=void 0;try{for(var t=vt(n)[Symbol.iterator](),i;!(e=(i=t.next()).done);e=!0){var u=i.value;u.setAttribute("aria-hidden","true")}}catch(s){o=!0,r=s}finally{try{!e&&t.return&&t.return()}finally{if(o)throw r}}}function $i(n){var e=!0,o=!1,r=void 0;try{for(var t=vt(n)[Symbol.iterator](),i;!(e=(i=t.next()).done);e=!0){var u=i.value;u.removeAttribute("aria-hidden")}}catch(s){o=!0,r=s}finally{try{!e&&t.return&&t.return()}finally{if(o)throw r}}}function Bi(){J=null}var ge={};Object.defineProperty(ge,"__esModule",{value:!0});ge.resetState=Ni;ge.log=Hi;var Ce={},ye={};function Ut(n,e){n.classList.remove(e)}function Ni(){var n=document.getElementsByTagName("html")[0];for(var e in Ce)Ut(n,Ce[e]);var o=document.body;for(var r in ye)Ut(o,ye[r]);Ce={},ye={}}function Hi(){}var ji=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},Wi=function(e,o){return e[o]&&(e[o]-=1),o},Ui=function(e,o,r){r.forEach(function(t){ji(o,t),e.add(t)})},zi=function(e,o,r){r.forEach(function(t){Wi(o,t),o[t]===0&&e.remove(t)})};ge.add=function(e,o){return Ui(e.classList,e.nodeName.toLowerCase()=="html"?Ce:ye,o.split(" "))};ge.remove=function(e,o){return zi(e.classList,e.nodeName.toLowerCase()=="html"?Ce:ye,o.split(" "))};var be={};Object.defineProperty(be,"__esModule",{value:!0});be.log=Gi;be.resetState=Yi;function qi(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var Ln=function n(){var e=this;qi(this,n),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var r=e.openInstances.indexOf(o);r!==-1&&(e.openInstances.splice(r,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(r){return r(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},Ne=new Ln;function Gi(){console.log("portalOpenInstances ----------"),console.log(Ne.openInstances.length),Ne.openInstances.forEach(function(n){return console.log(n)}),console.log("end portalOpenInstances ----------")}function Yi(){Ne=new Ln}be.default=Ne;var gt={};Object.defineProperty(gt,"__esModule",{value:!0});gt.resetState=Ji;gt.log=Qi;var Ki=be,Xi=Zi(Ki);function Zi(n){return n&&n.__esModule?n:{default:n}}var Y=void 0,Q=void 0,pe=[];function Ji(){for(var n=[Y,Q],e=0;e<n.length;e++){var o=n[e];o&&o.parentNode&&o.parentNode.removeChild(o)}Y=Q=null,pe=[]}function Qi(){console.log("bodyTrap ----------"),console.log(pe.length);for(var n=[Y,Q],e=0;e<n.length;e++){var o=n[e],r=o||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function zt(){pe.length!==0&&pe[pe.length-1].focusContent()}function eu(n,e){!Y&&!Q&&(Y=document.createElement("div"),Y.setAttribute("data-react-modal-body-trap",""),Y.style.position="absolute",Y.style.opacity="0",Y.setAttribute("tabindex","0"),Y.addEventListener("focus",zt),Q=Y.cloneNode(),Q.addEventListener("focus",zt)),pe=e,pe.length>0?(document.body.firstChild!==Y&&document.body.insertBefore(Y,document.body.firstChild),document.body.lastChild!==Q&&document.body.appendChild(Q)):(Y.parentElement&&Y.parentElement.removeChild(Y),Q.parentElement&&Q.parentElement.removeChild(Q))}Xi.default.subscribe(eu);(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(D){for(var y=1;y<arguments.length;y++){var k=arguments[y];for(var p in k)Object.prototype.hasOwnProperty.call(k,p)&&(D[p]=k[p])}return D},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},t=function(){function D(y,k){for(var p=0;p<k.length;p++){var w=k[p];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(y,w.key,w)}}return function(y,k,p){return k&&D(y.prototype,k),p&&D(y,p),y}}(),i=g,u=tn,s=V(u),a=ne,l=P(a),c=Si,d=V(c),f=oe,m=P(f),b=ge,x=P(b),v=te,h=V(v),S=be,I=V(S);function P(D){if(D&&D.__esModule)return D;var y={};if(D!=null)for(var k in D)Object.prototype.hasOwnProperty.call(D,k)&&(y[k]=D[k]);return y.default=D,y}function V(D){return D&&D.__esModule?D:{default:D}}function T(D,y){if(!(D instanceof y))throw new TypeError("Cannot call a class as a function")}function _(D,y){if(!D)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y&&(typeof y=="object"||typeof y=="function")?y:D}function M(D,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof y);D.prototype=Object.create(y&&y.prototype,{constructor:{value:D,enumerable:!1,writable:!0,configurable:!0}}),y&&(Object.setPrototypeOf?Object.setPrototypeOf(D,y):D.__proto__=y)}var $={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},q=function(y){return y.code==="Tab"||y.keyCode===9},G=function(y){return y.code==="Escape"||y.keyCode===27},U=0,X=function(D){M(y,D);function y(k){T(this,y);var p=_(this,(y.__proto__||Object.getPrototypeOf(y)).call(this,k));return p.setOverlayRef=function(w){p.overlay=w,p.props.overlayRef&&p.props.overlayRef(w)},p.setContentRef=function(w){p.content=w,p.props.contentRef&&p.props.contentRef(w)},p.afterClose=function(){var w=p.props,N=w.appElement,H=w.ariaHideApp,j=w.htmlOpenClassName,B=w.bodyOpenClassName,z=w.parentSelector,K=z&&z().ownerDocument||document;B&&x.remove(K.body,B),j&&x.remove(K.getElementsByTagName("html")[0],j),H&&U>0&&(U-=1,U===0&&m.show(N)),p.props.shouldFocusAfterRender&&(p.props.shouldReturnFocusAfterClose?(l.returnFocus(p.props.preventScroll),l.teardownScopedFocus()):l.popWithoutFocus()),p.props.onAfterClose&&p.props.onAfterClose(),I.default.deregister(p)},p.open=function(){p.beforeOpen(),p.state.afterOpen&&p.state.beforeClose?(clearTimeout(p.closeTimer),p.setState({beforeClose:!1})):(p.props.shouldFocusAfterRender&&(l.setupScopedFocus(p.node),l.markForFocusLater()),p.setState({isOpen:!0},function(){p.openAnimationFrame=requestAnimationFrame(function(){p.setState({afterOpen:!0}),p.props.isOpen&&p.props.onAfterOpen&&p.props.onAfterOpen({overlayEl:p.overlay,contentEl:p.content})})}))},p.close=function(){p.props.closeTimeoutMS>0?p.closeWithTimeout():p.closeWithoutTimeout()},p.focusContent=function(){return p.content&&!p.contentHasFocus()&&p.content.focus({preventScroll:!0})},p.closeWithTimeout=function(){var w=Date.now()+p.props.closeTimeoutMS;p.setState({beforeClose:!0,closesAt:w},function(){p.closeTimer=setTimeout(p.closeWithoutTimeout,p.state.closesAt-Date.now())})},p.closeWithoutTimeout=function(){p.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},p.afterClose)},p.handleKeyDown=function(w){q(w)&&(0,d.default)(p.content,w),p.props.shouldCloseOnEsc&&G(w)&&(w.stopPropagation(),p.requestClose(w))},p.handleOverlayOnClick=function(w){p.shouldClose===null&&(p.shouldClose=!0),p.shouldClose&&p.props.shouldCloseOnOverlayClick&&(p.ownerHandlesClose()?p.requestClose(w):p.focusContent()),p.shouldClose=null},p.handleContentOnMouseUp=function(){p.shouldClose=!1},p.handleOverlayOnMouseDown=function(w){!p.props.shouldCloseOnOverlayClick&&w.target==p.overlay&&w.preventDefault()},p.handleContentOnClick=function(){p.shouldClose=!1},p.handleContentOnMouseDown=function(){p.shouldClose=!1},p.requestClose=function(w){return p.ownerHandlesClose()&&p.props.onRequestClose(w)},p.ownerHandlesClose=function(){return p.props.onRequestClose},p.shouldBeClosed=function(){return!p.state.isOpen&&!p.state.beforeClose},p.contentHasFocus=function(){return document.activeElement===p.content||p.content.contains(document.activeElement)},p.buildClassName=function(w,N){var H=(typeof N>"u"?"undefined":r(N))==="object"?N:{base:$[w],afterOpen:$[w]+"--after-open",beforeClose:$[w]+"--before-close"},j=H.base;return p.state.afterOpen&&(j=j+" "+H.afterOpen),p.state.beforeClose&&(j=j+" "+H.beforeClose),typeof N=="string"&&N?j+" "+N:j},p.attributesFromObject=function(w,N){return Object.keys(N).reduce(function(H,j){return H[w+"-"+j]=N[j],H},{})},p.state={afterOpen:!1,beforeClose:!1},p.shouldClose=null,p.moveFromContentToOverlay=null,p}return t(y,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(p,w){this.props.isOpen&&!p.isOpen?this.open():!this.props.isOpen&&p.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!w.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var p=this.props,w=p.appElement,N=p.ariaHideApp,H=p.htmlOpenClassName,j=p.bodyOpenClassName,B=p.parentSelector,z=B&&B().ownerDocument||document;j&&x.add(z.body,j),H&&x.add(z.getElementsByTagName("html")[0],H),N&&(U+=1,m.hide(w)),I.default.register(this)}},{key:"render",value:function(){var p=this.props,w=p.id,N=p.className,H=p.overlayClassName,j=p.defaultStyles,B=p.children,z=N?{}:j.content,K=H?{}:j.overlay;if(this.shouldBeClosed())return null;var re={ref:this.setOverlayRef,className:this.buildClassName("overlay",H),style:o({},K,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Z=o({id:w,ref:this.setContentRef,style:o({},z,this.props.style.content),className:this.buildClassName("content",N),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),ae=this.props.contentElement(Z,B);return this.props.overlayElement(re,ae)}}]),y}(i.Component);X.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},X.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),parentSelector:s.default.func,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(h.default),s.default.instanceOf(v.SafeHTMLCollection),s.default.instanceOf(v.SafeNodeList),s.default.arrayOf(s.default.instanceOf(h.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},e.default=X,n.exports=e.default})(rt,rt.exports);var tu=rt.exports;function Tn(){var n=this.constructor.getDerivedStateFromProps(this.props,this.state);n!=null&&this.setState(n)}function kn(n){function e(o){var r=this.constructor.getDerivedStateFromProps(n,o);return r??null}this.setState(e.bind(this))}function _n(n,e){try{var o=this.props,r=this.state;this.props=n,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,r)}finally{this.props=o,this.state=r}}Tn.__suppressDeprecationWarning=!0;kn.__suppressDeprecationWarning=!0;_n.__suppressDeprecationWarning=!0;function nu(n){var e=n.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof n.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return n;var o=null,r=null,t=null;if(typeof e.componentWillMount=="function"?o="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?t="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(t="UNSAFE_componentWillUpdate"),o!==null||r!==null||t!==null){var i=n.displayName||n.name,u=typeof n.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+i+" uses "+u+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(r!==null?`
  `+r:"")+(t!==null?`
  `+t:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof n.getDerivedStateFromProps=="function"&&(e.componentWillMount=Tn,e.componentWillReceiveProps=kn),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=_n;var s=e.componentDidUpdate;e.componentDidUpdate=function(l,c,d){var f=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:d;s.call(this,l,c,f)}}return n}const ou=Object.freeze(Object.defineProperty({__proto__:null,polyfill:nu},Symbol.toStringTag,{value:"Module"})),ru=Gn(ou);Object.defineProperty(fe,"__esModule",{value:!0});fe.bodyOpenClassName=fe.portalClassName=void 0;var qt=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n[r]=o[r])}return n},au=function(){function n(e,o){for(var r=0;r<o.length;r++){var t=o[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(e,o,r){return o&&n(e.prototype,o),r&&n(e,r),e}}(),$n=g,He=Oe($n),iu=Qt,je=Oe(iu),uu=tn,R=Oe(uu),su=tu,Gt=Oe(su),lu=oe,cu=pu(lu),ce=te,Yt=Oe(ce),du=ru;function pu(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e.default=n,e}function Oe(n){return n&&n.__esModule?n:{default:n}}function fu(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Kt(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n}function hu(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}var mu=fe.portalClassName="ReactModalPortal",vu=fe.bodyOpenClassName="ReactModal__Body--open",de=ce.canUseDOM&&je.default.createPortal!==void 0,Xt=function(e){return document.createElement(e)},Zt=function(){return de?je.default.createPortal:je.default.unstable_renderSubtreeIntoContainer};function Re(n){return n()}var Fe=function(n){hu(e,n);function e(){var o,r,t,i;fu(this,e);for(var u=arguments.length,s=Array(u),a=0;a<u;a++)s[a]=arguments[a];return i=(r=(t=Kt(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(s))),t),t.removePortal=function(){!de&&je.default.unmountComponentAtNode(t.node);var l=Re(t.props.parentSelector);l&&l.contains(t.node)?l.removeChild(t.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},t.portalRef=function(l){t.portal=l},t.renderPortal=function(l){var c=Zt(),d=c(t,He.default.createElement(Gt.default,qt({defaultStyles:e.defaultStyles},l)),t.node);t.portalRef(d)},r),Kt(t,i)}return au(e,[{key:"componentDidMount",value:function(){if(ce.canUseDOM){de||(this.node=Xt("div")),this.node.className=this.props.portalClassName;var r=Re(this.props.parentSelector);r.appendChild(this.node),!de&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var t=Re(r.parentSelector),i=Re(this.props.parentSelector);return{prevParent:t,nextParent:i}}},{key:"componentDidUpdate",value:function(r,t,i){if(ce.canUseDOM){var u=this.props,s=u.isOpen,a=u.portalClassName;r.portalClassName!==a&&(this.node.className=a);var l=i.prevParent,c=i.nextParent;c!==l&&(l.removeChild(this.node),c.appendChild(this.node)),!(!r.isOpen&&!s)&&!de&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!ce.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,t=Date.now(),i=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||t+this.props.closeTimeoutMS);i?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,i-t)):this.removePortal()}}},{key:"render",value:function(){if(!ce.canUseDOM||!de)return null;!this.node&&de&&(this.node=Xt("div"));var r=Zt();return r(He.default.createElement(Gt.default,qt({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){cu.setElement(r)}}]),e}($n.Component);Fe.propTypes={isOpen:R.default.bool.isRequired,style:R.default.shape({content:R.default.object,overlay:R.default.object}),portalClassName:R.default.string,bodyOpenClassName:R.default.string,htmlOpenClassName:R.default.string,className:R.default.oneOfType([R.default.string,R.default.shape({base:R.default.string.isRequired,afterOpen:R.default.string.isRequired,beforeClose:R.default.string.isRequired})]),overlayClassName:R.default.oneOfType([R.default.string,R.default.shape({base:R.default.string.isRequired,afterOpen:R.default.string.isRequired,beforeClose:R.default.string.isRequired})]),appElement:R.default.oneOfType([R.default.instanceOf(Yt.default),R.default.instanceOf(ce.SafeHTMLCollection),R.default.instanceOf(ce.SafeNodeList),R.default.arrayOf(R.default.instanceOf(Yt.default))]),onAfterOpen:R.default.func,onRequestClose:R.default.func,closeTimeoutMS:R.default.number,ariaHideApp:R.default.bool,shouldFocusAfterRender:R.default.bool,shouldCloseOnOverlayClick:R.default.bool,shouldReturnFocusAfterClose:R.default.bool,preventScroll:R.default.bool,parentSelector:R.default.func,aria:R.default.object,data:R.default.object,role:R.default.string,contentLabel:R.default.string,shouldCloseOnEsc:R.default.bool,overlayRef:R.default.func,contentRef:R.default.func,id:R.default.string,overlayElement:R.default.func,contentElement:R.default.func};Fe.defaultProps={isOpen:!1,portalClassName:mu,bodyOpenClassName:vu,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return He.default.createElement("div",e,o)},contentElement:function(e,o){return He.default.createElement("div",e,o)}};Fe.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,du.polyfill)(Fe);fe.default=Fe;(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var o=fe,r=t(o);function t(i){return i&&i.__esModule?i:{default:i}}e.default=r.default,n.exports=e.default})(ot,ot.exports);var gu=ot.exports;const bu=Yn(gu),xu=L.button`
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
    stroke: ${C.colorWhite};
  }
`,Eu=({isOpen:n,onRequestClose:e,children:o})=>{const[r,t]=g.useState(n);g.useEffect(()=>(r?document.body.style.overflow="hidden":document.body.style.overflow="visible",()=>{document.body.style.overflow="visible"}),[r]);const i=()=>{t(!1),e&&e()},u={overlay:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(18, 20, 23, 0.50)",zIndex:1e3,overflow:"auto"},content:{maxWidth:"fit-content",maxHeight:"fit-content",margin:"auto",overflow:"auto",inset:0,border:"none",background:"none",padding:0}};return E.jsxs(bu,{isOpen:r,onRequestClose:i,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,ariaHideApp:!1,style:u,children:[E.jsx(xu,{type:"button",onClick:i,children:E.jsx("svg",{children:E.jsx("use",{href:ue+"#icon-x"})})}),o]})},Cu=L.form`
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
`,yu=L.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,wu=L.h4`
  padding: 8px 14px;
  height: 34px;
  width: 100%;
  align-self: flex-start;
  color: ${C.colorInput};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2857;
  word-wrap: break-word;
  border-radius: 12px;
  border: 1px #e6533c solid;
  white-space: nowrap;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }

  @media (min-width: 768px) {
    width: 216px;
    height: 40px;
    font-size: 16px;
    line-height: 1.5;
  }
`,Su=L.div`
  position: relative;
  height: 34px;

  @media (min-width: 768px) {
    width: 155px;
    height: 40px;
  }
`,Ou=L.input`
  width: 100%;
  padding: 8px 14px;
  height: 100%;
  border-radius: 12px;
  border: 1px solid ${C.colorOrange};
  background: transparent;
  color: ${C.colorWhite};
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
`,Fu=L.label`
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
`,Du=L.p`
  display: flex;
  color: ${C.colorSecondaryRed};
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
    fill: ${C.colorSecondaryRed};
  }

  /* @media (min-width: 768px) {
    top: 50px;
    left: 0;
  } */
`,Jt=L.p`
  color: ${C.colorWhite};
  line-height: 1.5;
  font-size: 12px;
  word-wrap: break-word;
  margin-top: 16px;

  > span {
    color: rgba(239, 237, 232, 0.4);
  }
`,Mu=L.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 24px;

  > button {
    cursor: pointer;
    display: block;
    border-radius: 12px;
    color: ${C.colorWhite};
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
`,Au=L.button`
  max-width: 151px;
  background-color: ${C.colorOrange};
  border: transparent;
  padding: 12px 32px;
`,Iu=L.button`
  max-width: 121px;
  background-color: transparent;
  border: 1px rgba(239, 237, 232, 0.3) solid;
  padding: 12px 34px;

  @media (min-width: 768px) {
    width: 142px;
  }
`,Pu=({closeModallAddProductForm:n,onClick:e,productTitle:o,calories:r,productId:t})=>{const i=st(),[u,s]=g.useState({product:"",date:"",amount:"",calories:""}),[a,l]=g.useState(""),[c,d]=g.useState(""),[f,m]=g.useState(!1),b=new Date,x=String(b.getDate()).padStart(2,"0"),v=String(b.getMonth()+1).padStart(2,"0"),h=b.getFullYear(),S=`${x}-${v}-${h}`,I=o[0].toUpperCase()+o.slice(1).toLowerCase(),P=T=>{if(T.preventDefault(),(0>=u.amount||3e3<=u.amount)&&u.amount)d("Entering value must be at range 1g to 3000g"),m(!0),l(r);else if(Object.keys(u).length<0||u.amount==="")d("Enter amount*"),m(!0);else{d(""),m(!1);try{n(),e(u.calories),i(Kn(u))}catch(_){en.error("Network error:",_)}}},V=T=>{const _=parseFloat(T.target.value),M=parseFloat(r);if(!isNaN(_)&&!isNaN(M)){const $=Math.round(_*M/100);l($),s({productId:t,date:S,amount:_,calories:$}),d(""),m(!1)}else l(r),s({productId:"",date:"",amount:"",calories:""})};return E.jsxs(Cu,{onSubmit:P,noValidate:!0,children:[E.jsxs(yu,{children:[E.jsx(wu,{children:I}),E.jsxs(Su,{children:[E.jsx(Fu,{htmlFor:"calories",children:"grams"}),E.jsx(Ou,{type:"number",name:"calories",placeholder:"100",autoComplete:"off",required:!0,step:"1",min:"1",max:"3000",onChange:V}),f&&E.jsxs(Du,{children:[E.jsx("svg",{children:E.jsx("use",{href:ue+"#icon-checkbox-circle-fill"})}),c]})]})]}),a?E.jsxs(Jt,{children:[E.jsx("span",{children:"Calories: "}),a]}):E.jsxs(Jt,{children:[E.jsx("span",{children:"Calories: "}),r]}),E.jsxs(Mu,{children:[E.jsx(Au,{type:"submit",children:"Add to diary"}),E.jsx(Iu,{type:"button",onClick:()=>{n()},children:"Cancel"})]})]})},Ru=L.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 32px 16px;
  }
`,Vu=L.div`
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
`,Lu=L.p`
  line-height: 1.2857;
  word-wrap: break-word;
  color: ${C.colorInput};

  > span {
    color: ${C.colorOrange};
  }

  @media (min-width: 768px) {
    line-height: 1.5;
    font-weight: 16px;
  }
`,Tu=L.p`
  line-height: 1.2857;
  word-wrap: break-word;
  color: ${C.colorOrange};

  @media (min-width: 768px) {
    line-height: 1.5;
    font-weight: 16px;
  }
`,ku="/PowerPulse/assets/avocado-46dd5bc9.png",_u=L.div`
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
`,$u=L.div`
  margin: 0 auto 3px;
  width: 123px;
  height: 97px;
  background: url(${ku});

  @media (min-width: 768px) {
    margin-bottom: 19px;
  }
`,Bu=L.h4`
  margin: 0 auto 16px;
  color: ${C.colorWhite};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
  word-wrap: break-word;
`,Nu=L.p`
  color: ${C.colorOrange};
  line-height: 1.2857;
  word-wrap: break-word;
  > span {
    color: rgba(239, 237, 232, 0.3);
  }
`,Hu=L.button`
  cursor: pointer;
  display: block;
  margin: 32px auto 16px;
  width: 157px;
  height: 42px;
  background-color: ${C.colorOrange};
  border-radius: 12px;
  color: ${C.colorWhite};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.125;
  word-wrap: break-word;
  outline: none;
  border: transparent;

  @media (min-width: 768px) {
    height: 52px;
  }
`,ju=L(Xn)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${C.colorInput};
  line-height: 1.2357;
  word-wrap: break-word;

  > svg {
    stroke: ${C.colorInput};
    width: 16px;
    height: 16px;
  }
`,Wu=({calories:n,closeModallAddProductSuccess:e})=>E.jsxs(_u,{children:[E.jsx($u,{}),E.jsx(Bu,{children:"Well done"}),E.jsxs(Nu,{children:[E.jsx("span",{children:"Calories: "}),n]}),E.jsx(Hu,{type:"button",onClick:e,children:"Next product"}),E.jsxs(ju,{to:"/diary",onClick:e,children:["To the diary",E.jsx("svg",{children:E.jsx("use",{href:ue+"#icon-arrow"})})]})]}),Uu=({products:n})=>{const e=Qe(ai),[o,r]=g.useState(null),[t,i]=g.useState(!1),[u,s]=g.useState(null),a=d=>{i(!0),r(d),s(d)},l=()=>{t&&i(!1),r(null),s(null)},c=1;return E.jsxs(E.Fragment,{children:[e&&E.jsx(Zn,{}),!e&&n.length>0&&E.jsx(Ru,{children:n.map(d=>E.jsx(fi,{product:d,type:d.groupBloodNotAllowed[c],handleOpenModal:a}))}),!e&&n.length<=0&&E.jsxs(Vu,{children:[E.jsxs(Lu,{children:[E.jsx("span",{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),E.jsx(Tu,{children:"Try changing the search parameters."})]}),o&&E.jsx(Eu,{isOpen:t,onRequestClose:l,children:typeof u=="object"?E.jsx(Pu,{closeModallAddProductForm:l,calories:o.calories,productTitle:o.title,productId:o._id,product:u,onClick:a}):E.jsx(Wu,{calories:u,closeModallAddProductSuccess:l})})]})},zu="/PowerPulse/assets/products-bg-b7e77cea.jpg",qu="/PowerPulse/assets/products-bg@2x-9876be0a.jpg",Gu=L.div`
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
      url(${zu});
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
      url(${qu});
  }
`,Yu=L.div`
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
`,Ku=L.div`
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
    background-color: ${C.colorOrange1};
    border-radius: 12px;
  }
`,es=()=>{const n=st(),e=Qe(ri),o=Qe(oi);return g.useEffect(()=>{(async()=>{try{await n(Qn({title:"",category:null,groupBloodNotAllowed:null}))}catch(t){en.error("Error fetching data:",t),console.error("Error fetching data:",t)}})()},[n]),g.useEffect(()=>{n(Jn())},[n]),E.jsxs(Gu,{children:[E.jsxs(Yu,{children:[E.jsx(eo,{title:"Products Page"}),E.jsx(ni,{categories:e.map(r=>r.title)})]}),E.jsx(Ku,{children:E.jsx(Uu,{products:o})})]})};export{es as default};
