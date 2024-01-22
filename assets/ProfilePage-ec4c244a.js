var Vr=Object.defineProperty;var zr=(e,t,r)=>t in e?Vr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var it=(e,t,r)=>(zr(e,typeof t!="symbol"?t+"":t,r),r);import{s as x,g as p,u as Kt,c as qr,j as o,a as Ne,L as Zr,d as Br,e as Jr,n as ne,r as Se,Q as Qr,f as Xr,h as Kr,C as ea}from"./index-4b8f2d22.js";import{s as ta,e as ra}from"./react-datepicker-cssmodules-2ba081ec.js";import{F as aa,E as ia,c as na,a as Ce,b as we,d as sa,e as oa}from"./index.esm-77522c6e.js";import"./defineProperty-e9c6d679.js";import"./hoist-non-react-statics.cjs-8e921dcb.js";const la=x.div`
  margin-top: 40px;
  margin-bottom: 64px;

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
  }
`,da=x.div`
  position: relative;
  display: inline-block;
  width: 90px;
  height: 90px;
  background-color: var(----background-color-avatar, rgba(48, 48, 48, 0.3));
  border-radius: 100%;
  margin-top: 40px;
  border: 1px solid var(--orange, #e6533c);

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
    display: flex;
    margin: 0 auto;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 320px) {
    display: flex;
    margin: 0 auto;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    margin: 0 auto;
    margin-bottom: 32px;
  }
`,ua=x.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  @media (min-width: 834px) {
    width: 219px;
  }
`;x.img`
  border-radius: 50%;
  background-color: rgba(48, 48, 48, 0.3);
  border: 1px solid #e6533c;
  width: 90px;
  height: 90px;
  object-fit: cover;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 31px;
`;const ha=x.div`
  display: flex;
  align-items: center;
  align-content: center;
`,ca=x.input`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
`,fa=x.label`
  cursor: pointer;
  position: absolute;
  top: 47%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`,ma=x.svg`
  width: 24px;
  height: 24px;

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,pa=x.img`
  border-radius: 100%;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`,ya=x.div`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 8px;
`,xa=x.h2`
  color: #efede8;

  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`,ga=x.p`
  color: rgba(239, 237, 232, 0.5);

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,_a=x.div`
  display: flex;
  gap: 14px;
  margin: 0 auto;
`,Et=x.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 320px) {
    width: 157px;
    height: 96px;
    border-radius: 12px;
    background-color: #e6533c;
    padding: 14px;
    gap: 15px;
  }

  @media screen and (min-width: 375px) {
    width: 157px;
    gap: 15px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 214px;
    height: 108px;
  }

  @media screen and (min-width: 1440px) {
    top: 65%;
    right: 5%;
    width: 214px;
    height: 108px;
    margin-top: 0;
    margin-left: 0;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
`,nt=x.svg`
  @media screen and (min-width: 320px) {
    width: 12px;
    height: 12px;
    fill: ${p.colorWhite};
  }

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,st=x.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p.colorBeige};
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,ve=x.div`
  display: flex;
  align-items: baseline;
  gap: 11px;
`,Ht=x.p`
  color: ${p.colorWhite};
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -1px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    line-height: 32px;
  }

  @media screen and (min-width: 1440px) {
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
  }
`,ot=x.span`
  color: rgba(239, 237, 232, 0.65);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;

  @media screen and (min-width: 768px) {
    line-height: 18px;
  }

  @media screen and (min-width: 1440px) {
    color: rgba(239, 237, 232, 0.8);
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`,wa=x.div`
  margin: 0 auto;
  margin-top: 40px;
  color: rgba(239, 237, 232, 0.3);

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;x.div`
  margin-right: 96px;

  @media screen and (min-width: 768px) {
    margin-right: 410px;
  }
`;const va=x.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;
`,ka=x.p`
  @media screen and (min-width: 768px) {
    width: 330px;
  }

  @media screen and (min-width: 1440px) {
    width: 330px;
  }
`,ba=({profile:e,refreshUserData:t})=>{const r=Kt(),a=qr(ta),i=a.caloriesIntake,n=s=>{try{const d=r(Br(s.target.files[0]));e.avatarURL=URL.createObjectURL(s.target.files[0]),t(e)}catch(d){console.error("error ava update:",d)}return s.target.value};return o.jsxs(la,{children:[o.jsxs(da,{children:[o.jsx(ua,{children:o.jsx(ha,{children:o.jsx(ca,{type:"file",accept:"image/*",id:"file-input",src:e.avatarURL,alt:"User Avatar",onChange:s=>{n(s)},onClick:s=>{s.target.value=null}})})}),o.jsx(fa,{htmlFor:"file-input",children:o.jsx(ma,{children:o.jsx("use",{href:Ne+"#icon-check-mark-1"})})}),o.jsx("div",{children:o.jsx(pa,{src:e.avatarURL,alt:"User Avatar"})})]}),o.jsxs(ya,{children:[o.jsx(xa,{children:e.name}),o.jsx(ga,{children:"User"})]}),o.jsxs(_a,{children:[o.jsxs(Et,{children:[o.jsxs(ve,{children:[o.jsx(st,{children:o.jsx(nt,{children:o.jsx("use",{href:`${Ne}#icon-fluent_food-24-filled`})})}),o.jsx(ot,{children:" Daily calorie intake"})]}),o.jsx(ve,{children:o.jsx(Ht,{children:i!==void 0?a.caloriesIntake:0})})]}),o.jsxs(Et,{children:[o.jsxs(ve,{children:[o.jsx(st,{children:o.jsx(nt,{children:o.jsx("use",{href:`${Ne}#icon-dumbbell`})})}),o.jsx(ot,{children:" Daily physical activity"})]}),o.jsxs(ve,{children:[o.jsx(Ht,{children:"110"}),o.jsx(ot,{children:"min"})]})]})]}),o.jsx(wa,{children:o.jsxs(ve,{children:[o.jsx(st,{children:o.jsx(nt,{children:o.jsx("use",{href:`${Ne}#exclamation-mark`})})}),o.jsx(ka,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})}),o.jsx(va,{children:o.jsx(Zr,{})})]})};//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var er;function u(){return er.apply(null,arguments)}function Sa(e){er=e}function A(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function de(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function v(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function wt(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(v(e,t))return!1;return!0}function j(e){return e===void 0}function ee(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function We(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function tr(e,t){var r=[],a,i=e.length;for(a=0;a<i;++a)r.push(t(e[a],a));return r}function ae(e,t){for(var r in t)v(t,r)&&(e[r]=t[r]);return v(t,"toString")&&(e.toString=t.toString),v(t,"valueOf")&&(e.valueOf=t.valueOf),e}function V(e,t,r,a){return Sr(e,t,r,a,!0).utc()}function Da(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function y(e){return e._pf==null&&(e._pf=Da()),e._pf}var ft;Array.prototype.some?ft=Array.prototype.some:ft=function(e){var t=Object(this),r=t.length>>>0,a;for(a=0;a<r;a++)if(a in t&&e.call(this,t[a],a,t))return!0;return!1};function vt(e){var t=null,r=!1,a=e._d&&!isNaN(e._d.getTime());if(a&&(t=y(e),r=ft.call(t.parsedDateParts,function(i){return i!=null}),a=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&r),e._strict&&(a=a&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=a;else return a;return e._isValid}function qe(e){var t=V(NaN);return e!=null?ae(y(t),e):y(t).userInvalidated=!0,t}var Gt=u.momentProperties=[],lt=!1;function kt(e,t){var r,a,i,n=Gt.length;if(j(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),j(t._i)||(e._i=t._i),j(t._f)||(e._f=t._f),j(t._l)||(e._l=t._l),j(t._strict)||(e._strict=t._strict),j(t._tzm)||(e._tzm=t._tzm),j(t._isUTC)||(e._isUTC=t._isUTC),j(t._offset)||(e._offset=t._offset),j(t._pf)||(e._pf=y(t)),j(t._locale)||(e._locale=t._locale),n>0)for(r=0;r<n;r++)a=Gt[r],i=t[a],j(i)||(e[a]=i);return e}function Re(e){kt(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),lt===!1&&(lt=!0,u.updateOffset(this),lt=!1)}function I(e){return e instanceof Re||e!=null&&e._isAMomentObject!=null}function rr(e){u.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function C(e,t){var r=!0;return ae(function(){if(u.deprecationHandler!=null&&u.deprecationHandler(null,e),r){var a=[],i,n,s,d=arguments.length;for(n=0;n<d;n++){if(i="",typeof arguments[n]=="object"){i+=`
[`+n+"] ";for(s in arguments[0])v(arguments[0],s)&&(i+=s+": "+arguments[0][s]+", ");i=i.slice(0,-2)}else i=arguments[n];a.push(i)}rr(e+`
Arguments: `+Array.prototype.slice.call(a).join("")+`
`+new Error().stack),r=!1}return t.apply(this,arguments)},t)}var Vt={};function ar(e,t){u.deprecationHandler!=null&&u.deprecationHandler(e,t),Vt[e]||(rr(t),Vt[e]=!0)}u.suppressDeprecationWarnings=!1;u.deprecationHandler=null;function z(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Ma(e){var t,r;for(r in e)v(e,r)&&(t=e[r],z(t)?this[r]=t:this["_"+r]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function mt(e,t){var r=ae({},e),a;for(a in t)v(t,a)&&(de(e[a])&&de(t[a])?(r[a]={},ae(r[a],e[a]),ae(r[a],t[a])):t[a]!=null?r[a]=t[a]:delete r[a]);for(a in e)v(e,a)&&!v(t,a)&&de(e[a])&&(r[a]=ae({},r[a]));return r}function bt(e){e!=null&&this.set(e)}var pt;Object.keys?pt=Object.keys:pt=function(e){var t,r=[];for(t in e)v(e,t)&&r.push(t);return r};var Ya={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Oa(e,t,r){var a=this._calendar[e]||this._calendar.sameElse;return z(a)?a.call(t,r):a}function G(e,t,r){var a=""+Math.abs(e),i=t-a.length,n=e>=0;return(n?r?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+a}var St=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Fe=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,dt={},me={};function f(e,t,r,a){var i=a;typeof a=="string"&&(i=function(){return this[a]()}),e&&(me[e]=i),t&&(me[t[0]]=function(){return G(i.apply(this,arguments),t[1],t[2])}),r&&(me[r]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function Ta(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Wa(e){var t=e.match(St),r,a;for(r=0,a=t.length;r<a;r++)me[t[r]]?t[r]=me[t[r]]:t[r]=Ta(t[r]);return function(i){var n="",s;for(s=0;s<a;s++)n+=z(t[s])?t[s].call(i,e):t[s];return n}}function Ae(e,t){return e.isValid()?(t=ir(t,e.localeData()),dt[t]=dt[t]||Wa(t),dt[t](e)):e.localeData().invalidDate()}function ir(e,t){var r=5;function a(i){return t.longDateFormat(i)||i}for(Fe.lastIndex=0;r>=0&&Fe.test(e);)e=e.replace(Fe,a),Fe.lastIndex=0,r-=1;return e}var Ra={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function ja(e){var t=this._longDateFormat[e],r=this._longDateFormat[e.toUpperCase()];return t||!r?t:(this._longDateFormat[e]=r.match(St).map(function(a){return a==="MMMM"||a==="MM"||a==="DD"||a==="dddd"?a.slice(1):a}).join(""),this._longDateFormat[e])}var Pa="Invalid date";function Na(){return this._invalidDate}var Ca="%d",Fa=/\d{1,2}/;function Ua(e){return this._ordinal.replace("%d",e)}var La={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Aa(e,t,r,a){var i=this._relativeTime[r];return z(i)?i(e,t,r,a):i.replace(/%d/i,e)}function Ia(e,t){var r=this._relativeTime[e>0?"future":"past"];return z(r)?r(t):r.replace(/%s/i,t)}var zt={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function F(e){return typeof e=="string"?zt[e]||zt[e.toLowerCase()]:void 0}function Dt(e){var t={},r,a;for(a in e)v(e,a)&&(r=F(a),r&&(t[r]=e[a]));return t}var $a={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Ea(e){var t=[],r;for(r in e)v(e,r)&&t.push({unit:r,priority:$a[r]});return t.sort(function(a,i){return a.priority-i.priority}),t}var nr=/\d/,P=/\d\d/,sr=/\d{3}/,Mt=/\d{4}/,Ze=/[+-]?\d{6}/,D=/\d\d?/,or=/\d\d\d\d?/,lr=/\d\d\d\d\d\d?/,Be=/\d{1,3}/,Yt=/\d{1,4}/,Je=/[+-]?\d{1,6}/,xe=/\d+/,Qe=/[+-]?\d+/,Ha=/Z|[+-]\d\d:?\d\d/gi,Xe=/Z|[+-]\d\d(?::?\d\d)?/gi,Ga=/[+-]?\d+(\.\d{1,3})?/,je=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,ge=/^[1-9]\d?/,Ot=/^([1-9]\d|\d)/,Ee;Ee={};function h(e,t,r){Ee[e]=z(t)?t:function(a,i){return a&&r?r:t}}function Va(e,t){return v(Ee,e)?Ee[e](t._strict,t._locale):new RegExp(za(e))}function za(e){return X(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,r,a,i,n){return r||a||i||n}))}function X(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function N(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function _(e){var t=+e,r=0;return t!==0&&isFinite(t)&&(r=N(t)),r}var yt={};function b(e,t){var r,a=t,i;for(typeof e=="string"&&(e=[e]),ee(t)&&(a=function(n,s){s[t]=_(n)}),i=e.length,r=0;r<i;r++)yt[e[r]]=a}function Pe(e,t){b(e,function(r,a,i,n){i._w=i._w||{},t(r,i._w,i,n)})}function qa(e,t,r){t!=null&&v(yt,e)&&yt[e](t,r._a,r,e)}function Ke(e){return e%4===0&&e%100!==0||e%400===0}var W=0,J=1,H=2,O=3,L=4,Q=5,le=6,Za=7,Ba=8;f("Y",0,0,function(){var e=this.year();return e<=9999?G(e,4):"+"+e});f(0,["YY",2],0,function(){return this.year()%100});f(0,["YYYY",4],0,"year");f(0,["YYYYY",5],0,"year");f(0,["YYYYYY",6,!0],0,"year");h("Y",Qe);h("YY",D,P);h("YYYY",Yt,Mt);h("YYYYY",Je,Ze);h("YYYYYY",Je,Ze);b(["YYYYY","YYYYYY"],W);b("YYYY",function(e,t){t[W]=e.length===2?u.parseTwoDigitYear(e):_(e)});b("YY",function(e,t){t[W]=u.parseTwoDigitYear(e)});b("Y",function(e,t){t[W]=parseInt(e,10)});function De(e){return Ke(e)?366:365}u.parseTwoDigitYear=function(e){return _(e)+(_(e)>68?1900:2e3)};var dr=_e("FullYear",!0);function Ja(){return Ke(this.year())}function _e(e,t){return function(r){return r!=null?(ur(this,e,r),u.updateOffset(this,t),this):Me(this,e)}}function Me(e,t){if(!e.isValid())return NaN;var r=e._d,a=e._isUTC;switch(t){case"Milliseconds":return a?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return a?r.getUTCSeconds():r.getSeconds();case"Minutes":return a?r.getUTCMinutes():r.getMinutes();case"Hours":return a?r.getUTCHours():r.getHours();case"Date":return a?r.getUTCDate():r.getDate();case"Day":return a?r.getUTCDay():r.getDay();case"Month":return a?r.getUTCMonth():r.getMonth();case"FullYear":return a?r.getUTCFullYear():r.getFullYear();default:return NaN}}function ur(e,t,r){var a,i,n,s,d;if(!(!e.isValid()||isNaN(r))){switch(a=e._d,i=e._isUTC,t){case"Milliseconds":return void(i?a.setUTCMilliseconds(r):a.setMilliseconds(r));case"Seconds":return void(i?a.setUTCSeconds(r):a.setSeconds(r));case"Minutes":return void(i?a.setUTCMinutes(r):a.setMinutes(r));case"Hours":return void(i?a.setUTCHours(r):a.setHours(r));case"Date":return void(i?a.setUTCDate(r):a.setDate(r));case"FullYear":break;default:return}n=r,s=e.month(),d=e.date(),d=d===29&&s===1&&!Ke(n)?28:d,i?a.setUTCFullYear(n,s,d):a.setFullYear(n,s,d)}}function Qa(e){return e=F(e),z(this[e])?this[e]():this}function Xa(e,t){if(typeof e=="object"){e=Dt(e);var r=Ea(e),a,i=r.length;for(a=0;a<i;a++)this[r[a].unit](e[r[a].unit])}else if(e=F(e),z(this[e]))return this[e](t);return this}function Ka(e,t){return(e%t+t)%t}var Y;Array.prototype.indexOf?Y=Array.prototype.indexOf:Y=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function Tt(e,t){if(isNaN(e)||isNaN(t))return NaN;var r=Ka(t,12);return e+=(t-r)/12,r===1?Ke(e)?29:28:31-r%7%2}f("M",["MM",2],"Mo",function(){return this.month()+1});f("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});f("MMMM",0,0,function(e){return this.localeData().months(this,e)});h("M",D,ge);h("MM",D,P);h("MMM",function(e,t){return t.monthsShortRegex(e)});h("MMMM",function(e,t){return t.monthsRegex(e)});b(["M","MM"],function(e,t){t[J]=_(e)-1});b(["MMM","MMMM"],function(e,t,r,a){var i=r._locale.monthsParse(e,a,r._strict);i!=null?t[J]=i:y(r).invalidMonth=e});var ei="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),hr="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),cr=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,ti=je,ri=je;function ai(e,t){return e?A(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||cr).test(t)?"format":"standalone"][e.month()]:A(this._months)?this._months:this._months.standalone}function ii(e,t){return e?A(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[cr.test(t)?"format":"standalone"][e.month()]:A(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function ni(e,t,r){var a,i,n,s=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],a=0;a<12;++a)n=V([2e3,a]),this._shortMonthsParse[a]=this.monthsShort(n,"").toLocaleLowerCase(),this._longMonthsParse[a]=this.months(n,"").toLocaleLowerCase();return r?t==="MMM"?(i=Y.call(this._shortMonthsParse,s),i!==-1?i:null):(i=Y.call(this._longMonthsParse,s),i!==-1?i:null):t==="MMM"?(i=Y.call(this._shortMonthsParse,s),i!==-1?i:(i=Y.call(this._longMonthsParse,s),i!==-1?i:null)):(i=Y.call(this._longMonthsParse,s),i!==-1?i:(i=Y.call(this._shortMonthsParse,s),i!==-1?i:null))}function si(e,t,r){var a,i,n;if(this._monthsParseExact)return ni.call(this,e,t,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),a=0;a<12;a++){if(i=V([2e3,a]),r&&!this._longMonthsParse[a]&&(this._longMonthsParse[a]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[a]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),!r&&!this._monthsParse[a]&&(n="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[a]=new RegExp(n.replace(".",""),"i")),r&&t==="MMMM"&&this._longMonthsParse[a].test(e))return a;if(r&&t==="MMM"&&this._shortMonthsParse[a].test(e))return a;if(!r&&this._monthsParse[a].test(e))return a}}function fr(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=_(t);else if(t=e.localeData().monthsParse(t),!ee(t))return e}var r=t,a=e.date();return a=a<29?a:Math.min(a,Tt(e.year(),r)),e._isUTC?e._d.setUTCMonth(r,a):e._d.setMonth(r,a),e}function mr(e){return e!=null?(fr(this,e),u.updateOffset(this,!0),this):Me(this,"Month")}function oi(){return Tt(this.year(),this.month())}function li(e){return this._monthsParseExact?(v(this,"_monthsRegex")||pr.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(v(this,"_monthsShortRegex")||(this._monthsShortRegex=ti),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function di(e){return this._monthsParseExact?(v(this,"_monthsRegex")||pr.call(this),e?this._monthsStrictRegex:this._monthsRegex):(v(this,"_monthsRegex")||(this._monthsRegex=ri),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function pr(){function e(m,g){return g.length-m.length}var t=[],r=[],a=[],i,n,s,d;for(i=0;i<12;i++)n=V([2e3,i]),s=X(this.monthsShort(n,"")),d=X(this.months(n,"")),t.push(s),r.push(d),a.push(d),a.push(s);t.sort(e),r.sort(e),a.sort(e),this._monthsRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function ui(e,t,r,a,i,n,s){var d;return e<100&&e>=0?(d=new Date(e+400,t,r,a,i,n,s),isFinite(d.getFullYear())&&d.setFullYear(e)):d=new Date(e,t,r,a,i,n,s),d}function Ye(e){var t,r;return e<100&&e>=0?(r=Array.prototype.slice.call(arguments),r[0]=e+400,t=new Date(Date.UTC.apply(null,r)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function He(e,t,r){var a=7+t-r,i=(7+Ye(e,0,a).getUTCDay()-t)%7;return-i+a-1}function yr(e,t,r,a,i){var n=(7+r-a)%7,s=He(e,a,i),d=1+7*(t-1)+n+s,m,g;return d<=0?(m=e-1,g=De(m)+d):d>De(e)?(m=e+1,g=d-De(e)):(m=e,g=d),{year:m,dayOfYear:g}}function Oe(e,t,r){var a=He(e.year(),t,r),i=Math.floor((e.dayOfYear()-a-1)/7)+1,n,s;return i<1?(s=e.year()-1,n=i+K(s,t,r)):i>K(e.year(),t,r)?(n=i-K(e.year(),t,r),s=e.year()+1):(s=e.year(),n=i),{week:n,year:s}}function K(e,t,r){var a=He(e,t,r),i=He(e+1,t,r);return(De(e)-a+i)/7}f("w",["ww",2],"wo","week");f("W",["WW",2],"Wo","isoWeek");h("w",D,ge);h("ww",D,P);h("W",D,ge);h("WW",D,P);Pe(["w","ww","W","WW"],function(e,t,r,a){t[a.substr(0,1)]=_(e)});function hi(e){return Oe(e,this._week.dow,this._week.doy).week}var ci={dow:0,doy:6};function fi(){return this._week.dow}function mi(){return this._week.doy}function pi(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function yi(e){var t=Oe(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}f("d",0,"do","day");f("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});f("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});f("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});f("e",0,0,"weekday");f("E",0,0,"isoWeekday");h("d",D);h("e",D);h("E",D);h("dd",function(e,t){return t.weekdaysMinRegex(e)});h("ddd",function(e,t){return t.weekdaysShortRegex(e)});h("dddd",function(e,t){return t.weekdaysRegex(e)});Pe(["dd","ddd","dddd"],function(e,t,r,a){var i=r._locale.weekdaysParse(e,a,r._strict);i!=null?t.d=i:y(r).invalidWeekday=e});Pe(["d","e","E"],function(e,t,r,a){t[a]=_(e)});function xi(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function gi(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Wt(e,t){return e.slice(t,7).concat(e.slice(0,t))}var _i="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),xr="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),wi="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),vi=je,ki=je,bi=je;function Si(e,t){var r=A(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?Wt(r,this._week.dow):e?r[e.day()]:r}function Di(e){return e===!0?Wt(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Mi(e){return e===!0?Wt(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Yi(e,t,r){var a,i,n,s=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],a=0;a<7;++a)n=V([2e3,1]).day(a),this._minWeekdaysParse[a]=this.weekdaysMin(n,"").toLocaleLowerCase(),this._shortWeekdaysParse[a]=this.weekdaysShort(n,"").toLocaleLowerCase(),this._weekdaysParse[a]=this.weekdays(n,"").toLocaleLowerCase();return r?t==="dddd"?(i=Y.call(this._weekdaysParse,s),i!==-1?i:null):t==="ddd"?(i=Y.call(this._shortWeekdaysParse,s),i!==-1?i:null):(i=Y.call(this._minWeekdaysParse,s),i!==-1?i:null):t==="dddd"?(i=Y.call(this._weekdaysParse,s),i!==-1||(i=Y.call(this._shortWeekdaysParse,s),i!==-1)?i:(i=Y.call(this._minWeekdaysParse,s),i!==-1?i:null)):t==="ddd"?(i=Y.call(this._shortWeekdaysParse,s),i!==-1||(i=Y.call(this._weekdaysParse,s),i!==-1)?i:(i=Y.call(this._minWeekdaysParse,s),i!==-1?i:null)):(i=Y.call(this._minWeekdaysParse,s),i!==-1||(i=Y.call(this._weekdaysParse,s),i!==-1)?i:(i=Y.call(this._shortWeekdaysParse,s),i!==-1?i:null))}function Oi(e,t,r){var a,i,n;if(this._weekdaysParseExact)return Yi.call(this,e,t,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),a=0;a<7;a++){if(i=V([2e3,1]).day(a),r&&!this._fullWeekdaysParse[a]&&(this._fullWeekdaysParse[a]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[a]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[a]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[a]||(n="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[a]=new RegExp(n.replace(".",""),"i")),r&&t==="dddd"&&this._fullWeekdaysParse[a].test(e))return a;if(r&&t==="ddd"&&this._shortWeekdaysParse[a].test(e))return a;if(r&&t==="dd"&&this._minWeekdaysParse[a].test(e))return a;if(!r&&this._weekdaysParse[a].test(e))return a}}function Ti(e){if(!this.isValid())return e!=null?this:NaN;var t=Me(this,"Day");return e!=null?(e=xi(e,this.localeData()),this.add(e-t,"d")):t}function Wi(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function Ri(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=gi(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function ji(e){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||Rt.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(v(this,"_weekdaysRegex")||(this._weekdaysRegex=vi),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Pi(e){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||Rt.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(v(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ki),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Ni(e){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||Rt.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(v(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=bi),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Rt(){function e(T,c){return c.length-T.length}var t=[],r=[],a=[],i=[],n,s,d,m,g;for(n=0;n<7;n++)s=V([2e3,1]).day(n),d=X(this.weekdaysMin(s,"")),m=X(this.weekdaysShort(s,"")),g=X(this.weekdays(s,"")),t.push(d),r.push(m),a.push(g),i.push(d),i.push(m),i.push(g);t.sort(e),r.sort(e),a.sort(e),i.sort(e),this._weekdaysRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function jt(){return this.hours()%12||12}function Ci(){return this.hours()||24}f("H",["HH",2],0,"hour");f("h",["hh",2],0,jt);f("k",["kk",2],0,Ci);f("hmm",0,0,function(){return""+jt.apply(this)+G(this.minutes(),2)});f("hmmss",0,0,function(){return""+jt.apply(this)+G(this.minutes(),2)+G(this.seconds(),2)});f("Hmm",0,0,function(){return""+this.hours()+G(this.minutes(),2)});f("Hmmss",0,0,function(){return""+this.hours()+G(this.minutes(),2)+G(this.seconds(),2)});function gr(e,t){f(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}gr("a",!0);gr("A",!1);function _r(e,t){return t._meridiemParse}h("a",_r);h("A",_r);h("H",D,Ot);h("h",D,ge);h("k",D,ge);h("HH",D,P);h("hh",D,P);h("kk",D,P);h("hmm",or);h("hmmss",lr);h("Hmm",or);h("Hmmss",lr);b(["H","HH"],O);b(["k","kk"],function(e,t,r){var a=_(e);t[O]=a===24?0:a});b(["a","A"],function(e,t,r){r._isPm=r._locale.isPM(e),r._meridiem=e});b(["h","hh"],function(e,t,r){t[O]=_(e),y(r).bigHour=!0});b("hmm",function(e,t,r){var a=e.length-2;t[O]=_(e.substr(0,a)),t[L]=_(e.substr(a)),y(r).bigHour=!0});b("hmmss",function(e,t,r){var a=e.length-4,i=e.length-2;t[O]=_(e.substr(0,a)),t[L]=_(e.substr(a,2)),t[Q]=_(e.substr(i)),y(r).bigHour=!0});b("Hmm",function(e,t,r){var a=e.length-2;t[O]=_(e.substr(0,a)),t[L]=_(e.substr(a))});b("Hmmss",function(e,t,r){var a=e.length-4,i=e.length-2;t[O]=_(e.substr(0,a)),t[L]=_(e.substr(a,2)),t[Q]=_(e.substr(i))});function Fi(e){return(e+"").toLowerCase().charAt(0)==="p"}var Ui=/[ap]\.?m?\.?/i,Li=_e("Hours",!0);function Ai(e,t,r){return e>11?r?"pm":"PM":r?"am":"AM"}var wr={calendar:Ya,longDateFormat:Ra,invalidDate:Pa,ordinal:Ca,dayOfMonthOrdinalParse:Fa,relativeTime:La,months:ei,monthsShort:hr,week:ci,weekdays:_i,weekdaysMin:wi,weekdaysShort:xr,meridiemParse:Ui},M={},ke={},Te;function Ii(e,t){var r,a=Math.min(e.length,t.length);for(r=0;r<a;r+=1)if(e[r]!==t[r])return r;return a}function qt(e){return e&&e.toLowerCase().replace("_","-")}function $i(e){for(var t=0,r,a,i,n;t<e.length;){for(n=qt(e[t]).split("-"),r=n.length,a=qt(e[t+1]),a=a?a.split("-"):null;r>0;){if(i=et(n.slice(0,r).join("-")),i)return i;if(a&&a.length>=r&&Ii(n,a)>=r-1)break;r--}t++}return Te}function Ei(e){return!!(e&&e.match("^[^/\\\\]*$"))}function et(e){var t=null,r;if(M[e]===void 0&&typeof module<"u"&&module&&module.exports&&Ei(e))try{t=Te._abbr,r=require,r("./locale/"+e),se(t)}catch{M[e]=null}return M[e]}function se(e,t){var r;return e&&(j(t)?r=te(e):r=Pt(e,t),r?Te=r:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Te._abbr}function Pt(e,t){if(t!==null){var r,a=wr;if(t.abbr=e,M[e]!=null)ar("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),a=M[e]._config;else if(t.parentLocale!=null)if(M[t.parentLocale]!=null)a=M[t.parentLocale]._config;else if(r=et(t.parentLocale),r!=null)a=r._config;else return ke[t.parentLocale]||(ke[t.parentLocale]=[]),ke[t.parentLocale].push({name:e,config:t}),null;return M[e]=new bt(mt(a,t)),ke[e]&&ke[e].forEach(function(i){Pt(i.name,i.config)}),se(e),M[e]}else return delete M[e],null}function Hi(e,t){if(t!=null){var r,a,i=wr;M[e]!=null&&M[e].parentLocale!=null?M[e].set(mt(M[e]._config,t)):(a=et(e),a!=null&&(i=a._config),t=mt(i,t),a==null&&(t.abbr=e),r=new bt(t),r.parentLocale=M[e],M[e]=r),se(e)}else M[e]!=null&&(M[e].parentLocale!=null?(M[e]=M[e].parentLocale,e===se()&&se(e)):M[e]!=null&&delete M[e]);return M[e]}function te(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Te;if(!A(e)){if(t=et(e),t)return t;e=[e]}return $i(e)}function Gi(){return pt(M)}function Nt(e){var t,r=e._a;return r&&y(e).overflow===-2&&(t=r[J]<0||r[J]>11?J:r[H]<1||r[H]>Tt(r[W],r[J])?H:r[O]<0||r[O]>24||r[O]===24&&(r[L]!==0||r[Q]!==0||r[le]!==0)?O:r[L]<0||r[L]>59?L:r[Q]<0||r[Q]>59?Q:r[le]<0||r[le]>999?le:-1,y(e)._overflowDayOfYear&&(t<W||t>H)&&(t=H),y(e)._overflowWeeks&&t===-1&&(t=Za),y(e)._overflowWeekday&&t===-1&&(t=Ba),y(e).overflow=t),e}var Vi=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,zi=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,qi=/Z|[+-]\d\d(?::?\d\d)?/,Ue=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],ut=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Zi=/^\/?Date\((-?\d+)/i,Bi=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Ji={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function vr(e){var t,r,a=e._i,i=Vi.exec(a)||zi.exec(a),n,s,d,m,g=Ue.length,T=ut.length;if(i){for(y(e).iso=!0,t=0,r=g;t<r;t++)if(Ue[t][1].exec(i[1])){s=Ue[t][0],n=Ue[t][2]!==!1;break}if(s==null){e._isValid=!1;return}if(i[3]){for(t=0,r=T;t<r;t++)if(ut[t][1].exec(i[3])){d=(i[2]||" ")+ut[t][0];break}if(d==null){e._isValid=!1;return}}if(!n&&d!=null){e._isValid=!1;return}if(i[4])if(qi.exec(i[4]))m="Z";else{e._isValid=!1;return}e._f=s+(d||"")+(m||""),Ft(e)}else e._isValid=!1}function Qi(e,t,r,a,i,n){var s=[Xi(e),hr.indexOf(t),parseInt(r,10),parseInt(a,10),parseInt(i,10)];return n&&s.push(parseInt(n,10)),s}function Xi(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function Ki(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function en(e,t,r){if(e){var a=xr.indexOf(e),i=new Date(t[0],t[1],t[2]).getDay();if(a!==i)return y(r).weekdayMismatch=!0,r._isValid=!1,!1}return!0}function tn(e,t,r){if(e)return Ji[e];if(t)return 0;var a=parseInt(r,10),i=a%100,n=(a-i)/100;return n*60+i}function kr(e){var t=Bi.exec(Ki(e._i)),r;if(t){if(r=Qi(t[4],t[3],t[2],t[5],t[6],t[7]),!en(t[1],r,e))return;e._a=r,e._tzm=tn(t[8],t[9],t[10]),e._d=Ye.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),y(e).rfc2822=!0}else e._isValid=!1}function rn(e){var t=Zi.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(vr(e),e._isValid===!1)delete e._isValid;else return;if(kr(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:u.createFromInputFallback(e)}u.createFromInputFallback=C("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function ce(e,t,r){return e??t??r}function an(e){var t=new Date(u.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Ct(e){var t,r,a=[],i,n,s;if(!e._d){for(i=an(e),e._w&&e._a[H]==null&&e._a[J]==null&&nn(e),e._dayOfYear!=null&&(s=ce(e._a[W],i[W]),(e._dayOfYear>De(s)||e._dayOfYear===0)&&(y(e)._overflowDayOfYear=!0),r=Ye(s,0,e._dayOfYear),e._a[J]=r.getUTCMonth(),e._a[H]=r.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=a[t]=i[t];for(;t<7;t++)e._a[t]=a[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[O]===24&&e._a[L]===0&&e._a[Q]===0&&e._a[le]===0&&(e._nextDay=!0,e._a[O]=0),e._d=(e._useUTC?Ye:ui).apply(null,a),n=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[O]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==n&&(y(e).weekdayMismatch=!0)}}function nn(e){var t,r,a,i,n,s,d,m,g;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(n=1,s=4,r=ce(t.GG,e._a[W],Oe(S(),1,4).year),a=ce(t.W,1),i=ce(t.E,1),(i<1||i>7)&&(m=!0)):(n=e._locale._week.dow,s=e._locale._week.doy,g=Oe(S(),n,s),r=ce(t.gg,e._a[W],g.year),a=ce(t.w,g.week),t.d!=null?(i=t.d,(i<0||i>6)&&(m=!0)):t.e!=null?(i=t.e+n,(t.e<0||t.e>6)&&(m=!0)):i=n),a<1||a>K(r,n,s)?y(e)._overflowWeeks=!0:m!=null?y(e)._overflowWeekday=!0:(d=yr(r,a,i,n,s),e._a[W]=d.year,e._dayOfYear=d.dayOfYear)}u.ISO_8601=function(){};u.RFC_2822=function(){};function Ft(e){if(e._f===u.ISO_8601){vr(e);return}if(e._f===u.RFC_2822){kr(e);return}e._a=[],y(e).empty=!0;var t=""+e._i,r,a,i,n,s,d=t.length,m=0,g,T;for(i=ir(e._f,e._locale).match(St)||[],T=i.length,r=0;r<T;r++)n=i[r],a=(t.match(Va(n,e))||[])[0],a&&(s=t.substr(0,t.indexOf(a)),s.length>0&&y(e).unusedInput.push(s),t=t.slice(t.indexOf(a)+a.length),m+=a.length),me[n]?(a?y(e).empty=!1:y(e).unusedTokens.push(n),qa(n,a,e)):e._strict&&!a&&y(e).unusedTokens.push(n);y(e).charsLeftOver=d-m,t.length>0&&y(e).unusedInput.push(t),e._a[O]<=12&&y(e).bigHour===!0&&e._a[O]>0&&(y(e).bigHour=void 0),y(e).parsedDateParts=e._a.slice(0),y(e).meridiem=e._meridiem,e._a[O]=sn(e._locale,e._a[O],e._meridiem),g=y(e).era,g!==null&&(e._a[W]=e._locale.erasConvertYear(g,e._a[W])),Ct(e),Nt(e)}function sn(e,t,r){var a;return r==null?t:e.meridiemHour!=null?e.meridiemHour(t,r):(e.isPM!=null&&(a=e.isPM(r),a&&t<12&&(t+=12),!a&&t===12&&(t=0)),t)}function on(e){var t,r,a,i,n,s,d=!1,m=e._f.length;if(m===0){y(e).invalidFormat=!0,e._d=new Date(NaN);return}for(i=0;i<m;i++)n=0,s=!1,t=kt({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[i],Ft(t),vt(t)&&(s=!0),n+=y(t).charsLeftOver,n+=y(t).unusedTokens.length*10,y(t).score=n,d?n<a&&(a=n,r=t):(a==null||n<a||s)&&(a=n,r=t,s&&(d=!0));ae(e,r||t)}function ln(e){if(!e._d){var t=Dt(e._i),r=t.day===void 0?t.date:t.day;e._a=tr([t.year,t.month,r,t.hour,t.minute,t.second,t.millisecond],function(a){return a&&parseInt(a,10)}),Ct(e)}}function dn(e){var t=new Re(Nt(br(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function br(e){var t=e._i,r=e._f;return e._locale=e._locale||te(e._l),t===null||r===void 0&&t===""?qe({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),I(t)?new Re(Nt(t)):(We(t)?e._d=t:A(r)?on(e):r?Ft(e):un(e),vt(e)||(e._d=null),e))}function un(e){var t=e._i;j(t)?e._d=new Date(u.now()):We(t)?e._d=new Date(t.valueOf()):typeof t=="string"?rn(e):A(t)?(e._a=tr(t.slice(0),function(r){return parseInt(r,10)}),Ct(e)):de(t)?ln(e):ee(t)?e._d=new Date(t):u.createFromInputFallback(e)}function Sr(e,t,r,a,i){var n={};return(t===!0||t===!1)&&(a=t,t=void 0),(r===!0||r===!1)&&(a=r,r=void 0),(de(e)&&wt(e)||A(e)&&e.length===0)&&(e=void 0),n._isAMomentObject=!0,n._useUTC=n._isUTC=i,n._l=r,n._i=e,n._f=t,n._strict=a,dn(n)}function S(e,t,r,a){return Sr(e,t,r,a,!1)}var hn=C("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=S.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:qe()}),cn=C("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=S.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:qe()});function Dr(e,t){var r,a;if(t.length===1&&A(t[0])&&(t=t[0]),!t.length)return S();for(r=t[0],a=1;a<t.length;++a)(!t[a].isValid()||t[a][e](r))&&(r=t[a]);return r}function fn(){var e=[].slice.call(arguments,0);return Dr("isBefore",e)}function mn(){var e=[].slice.call(arguments,0);return Dr("isAfter",e)}var pn=function(){return Date.now?Date.now():+new Date},be=["year","quarter","month","week","day","hour","minute","second","millisecond"];function yn(e){var t,r=!1,a,i=be.length;for(t in e)if(v(e,t)&&!(Y.call(be,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(a=0;a<i;++a)if(e[be[a]]){if(r)return!1;parseFloat(e[be[a]])!==_(e[be[a]])&&(r=!0)}return!0}function xn(){return this._isValid}function gn(){return $(NaN)}function tt(e){var t=Dt(e),r=t.year||0,a=t.quarter||0,i=t.month||0,n=t.week||t.isoWeek||0,s=t.day||0,d=t.hour||0,m=t.minute||0,g=t.second||0,T=t.millisecond||0;this._isValid=yn(t),this._milliseconds=+T+g*1e3+m*6e4+d*1e3*60*60,this._days=+s+n*7,this._months=+i+a*3+r*12,this._data={},this._locale=te(),this._bubble()}function Ie(e){return e instanceof tt}function xt(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function _n(e,t,r){var a=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),n=0,s;for(s=0;s<a;s++)(r&&e[s]!==t[s]||!r&&_(e[s])!==_(t[s]))&&n++;return n+i}function Mr(e,t){f(e,0,0,function(){var r=this.utcOffset(),a="+";return r<0&&(r=-r,a="-"),a+G(~~(r/60),2)+t+G(~~r%60,2)})}Mr("Z",":");Mr("ZZ","");h("Z",Xe);h("ZZ",Xe);b(["Z","ZZ"],function(e,t,r){r._useUTC=!0,r._tzm=Ut(Xe,e)});var wn=/([\+\-]|\d\d)/gi;function Ut(e,t){var r=(t||"").match(e),a,i,n;return r===null?null:(a=r[r.length-1]||[],i=(a+"").match(wn)||["-",0,0],n=+(i[1]*60)+_(i[2]),n===0?0:i[0]==="+"?n:-n)}function Lt(e,t){var r,a;return t._isUTC?(r=t.clone(),a=(I(e)||We(e)?e.valueOf():S(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+a),u.updateOffset(r,!1),r):S(e).local()}function gt(e){return-Math.round(e._d.getTimezoneOffset())}u.updateOffset=function(){};function vn(e,t,r){var a=this._offset||0,i;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Ut(Xe,e),e===null)return this}else Math.abs(e)<16&&!r&&(e=e*60);return!this._isUTC&&t&&(i=gt(this)),this._offset=e,this._isUTC=!0,i!=null&&this.add(i,"m"),a!==e&&(!t||this._changeInProgress?Tr(this,$(e-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,u.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?a:gt(this)}function kn(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function bn(e){return this.utcOffset(0,e)}function Sn(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(gt(this),"m")),this}function Dn(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Ut(Ha,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Mn(e){return this.isValid()?(e=e?S(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Yn(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function On(){if(!j(this._isDSTShifted))return this._isDSTShifted;var e={},t;return kt(e,this),e=br(e),e._a?(t=e._isUTC?V(e._a):S(e._a),this._isDSTShifted=this.isValid()&&_n(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Tn(){return this.isValid()?!this._isUTC:!1}function Wn(){return this.isValid()?this._isUTC:!1}function Yr(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Rn=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,jn=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function $(e,t){var r=e,a=null,i,n,s;return Ie(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:ee(e)||!isNaN(+e)?(r={},t?r[t]=+e:r.milliseconds=+e):(a=Rn.exec(e))?(i=a[1]==="-"?-1:1,r={y:0,d:_(a[H])*i,h:_(a[O])*i,m:_(a[L])*i,s:_(a[Q])*i,ms:_(xt(a[le]*1e3))*i}):(a=jn.exec(e))?(i=a[1]==="-"?-1:1,r={y:oe(a[2],i),M:oe(a[3],i),w:oe(a[4],i),d:oe(a[5],i),h:oe(a[6],i),m:oe(a[7],i),s:oe(a[8],i)}):r==null?r={}:typeof r=="object"&&("from"in r||"to"in r)&&(s=Pn(S(r.from),S(r.to)),r={},r.ms=s.milliseconds,r.M=s.months),n=new tt(r),Ie(e)&&v(e,"_locale")&&(n._locale=e._locale),Ie(e)&&v(e,"_isValid")&&(n._isValid=e._isValid),n}$.fn=tt.prototype;$.invalid=gn;function oe(e,t){var r=e&&parseFloat(e.replace(",","."));return(isNaN(r)?0:r)*t}function Zt(e,t){var r={};return r.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(r.months,"M").isAfter(t)&&--r.months,r.milliseconds=+t-+e.clone().add(r.months,"M"),r}function Pn(e,t){var r;return e.isValid()&&t.isValid()?(t=Lt(t,e),e.isBefore(t)?r=Zt(e,t):(r=Zt(t,e),r.milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function Or(e,t){return function(r,a){var i,n;return a!==null&&!isNaN(+a)&&(ar(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=r,r=a,a=n),i=$(r,a),Tr(this,i,e),this}}function Tr(e,t,r,a){var i=t._milliseconds,n=xt(t._days),s=xt(t._months);e.isValid()&&(a=a??!0,s&&fr(e,Me(e,"Month")+s*r),n&&ur(e,"Date",Me(e,"Date")+n*r),i&&e._d.setTime(e._d.valueOf()+i*r),a&&u.updateOffset(e,n||s))}var Nn=Or(1,"add"),Cn=Or(-1,"subtract");function Wr(e){return typeof e=="string"||e instanceof String}function Fn(e){return I(e)||We(e)||Wr(e)||ee(e)||Ln(e)||Un(e)||e===null||e===void 0}function Un(e){var t=de(e)&&!wt(e),r=!1,a=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],i,n,s=a.length;for(i=0;i<s;i+=1)n=a[i],r=r||v(e,n);return t&&r}function Ln(e){var t=A(e),r=!1;return t&&(r=e.filter(function(a){return!ee(a)&&Wr(e)}).length===0),t&&r}function An(e){var t=de(e)&&!wt(e),r=!1,a=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i,n;for(i=0;i<a.length;i+=1)n=a[i],r=r||v(e,n);return t&&r}function In(e,t){var r=e.diff(t,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function $n(e,t){arguments.length===1&&(arguments[0]?Fn(arguments[0])?(e=arguments[0],t=void 0):An(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var r=e||S(),a=Lt(r,this).startOf("day"),i=u.calendarFormat(this,a)||"sameElse",n=t&&(z(t[i])?t[i].call(this,r):t[i]);return this.format(n||this.localeData().calendar(i,this,S(r)))}function En(){return new Re(this)}function Hn(e,t){var r=I(e)?e:S(e);return this.isValid()&&r.isValid()?(t=F(t)||"millisecond",t==="millisecond"?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(t).valueOf()):!1}function Gn(e,t){var r=I(e)?e:S(e);return this.isValid()&&r.isValid()?(t=F(t)||"millisecond",t==="millisecond"?this.valueOf()<r.valueOf():this.clone().endOf(t).valueOf()<r.valueOf()):!1}function Vn(e,t,r,a){var i=I(e)?e:S(e),n=I(t)?t:S(t);return this.isValid()&&i.isValid()&&n.isValid()?(a=a||"()",(a[0]==="("?this.isAfter(i,r):!this.isBefore(i,r))&&(a[1]===")"?this.isBefore(n,r):!this.isAfter(n,r))):!1}function zn(e,t){var r=I(e)?e:S(e),a;return this.isValid()&&r.isValid()?(t=F(t)||"millisecond",t==="millisecond"?this.valueOf()===r.valueOf():(a=r.valueOf(),this.clone().startOf(t).valueOf()<=a&&a<=this.clone().endOf(t).valueOf())):!1}function qn(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function Zn(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function Bn(e,t,r){var a,i,n;if(!this.isValid())return NaN;if(a=Lt(e,this),!a.isValid())return NaN;switch(i=(a.utcOffset()-this.utcOffset())*6e4,t=F(t),t){case"year":n=$e(this,a)/12;break;case"month":n=$e(this,a);break;case"quarter":n=$e(this,a)/3;break;case"second":n=(this-a)/1e3;break;case"minute":n=(this-a)/6e4;break;case"hour":n=(this-a)/36e5;break;case"day":n=(this-a-i)/864e5;break;case"week":n=(this-a-i)/6048e5;break;default:n=this-a}return r?n:N(n)}function $e(e,t){if(e.date()<t.date())return-$e(t,e);var r=(t.year()-e.year())*12+(t.month()-e.month()),a=e.clone().add(r,"months"),i,n;return t-a<0?(i=e.clone().add(r-1,"months"),n=(t-a)/(a-i)):(i=e.clone().add(r+1,"months"),n=(t-a)/(i-a)),-(r+n)||0}u.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";u.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Jn(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Qn(e){if(!this.isValid())return null;var t=e!==!0,r=t?this.clone().utc():this;return r.year()<0||r.year()>9999?Ae(r,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):z(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Ae(r,"Z")):Ae(r,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Xn(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",r,a,i,n;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),r="["+e+'("]',a=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",n=t+'[")]',this.format(r+a+i+n)}function Kn(e){e||(e=this.isUtc()?u.defaultFormatUtc:u.defaultFormat);var t=Ae(this,e);return this.localeData().postformat(t)}function es(e,t){return this.isValid()&&(I(e)&&e.isValid()||S(e).isValid())?$({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function ts(e){return this.from(S(),e)}function rs(e,t){return this.isValid()&&(I(e)&&e.isValid()||S(e).isValid())?$({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function as(e){return this.to(S(),e)}function Rr(e){var t;return e===void 0?this._locale._abbr:(t=te(e),t!=null&&(this._locale=t),this)}var jr=C("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Pr(){return this._locale}var Ge=1e3,pe=60*Ge,Ve=60*pe,Nr=(365*400+97)*24*Ve;function ye(e,t){return(e%t+t)%t}function Cr(e,t,r){return e<100&&e>=0?new Date(e+400,t,r)-Nr:new Date(e,t,r).valueOf()}function Fr(e,t,r){return e<100&&e>=0?Date.UTC(e+400,t,r)-Nr:Date.UTC(e,t,r)}function is(e){var t,r;if(e=F(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?Fr:Cr,e){case"year":t=r(this.year(),0,1);break;case"quarter":t=r(this.year(),this.month()-this.month()%3,1);break;case"month":t=r(this.year(),this.month(),1);break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=r(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=ye(t+(this._isUTC?0:this.utcOffset()*pe),Ve);break;case"minute":t=this._d.valueOf(),t-=ye(t,pe);break;case"second":t=this._d.valueOf(),t-=ye(t,Ge);break}return this._d.setTime(t),u.updateOffset(this,!0),this}function ns(e){var t,r;if(e=F(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?Fr:Cr,e){case"year":t=r(this.year()+1,0,1)-1;break;case"quarter":t=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=r(this.year(),this.month()+1,1)-1;break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Ve-ye(t+(this._isUTC?0:this.utcOffset()*pe),Ve)-1;break;case"minute":t=this._d.valueOf(),t+=pe-ye(t,pe)-1;break;case"second":t=this._d.valueOf(),t+=Ge-ye(t,Ge)-1;break}return this._d.setTime(t),u.updateOffset(this,!0),this}function ss(){return this._d.valueOf()-(this._offset||0)*6e4}function os(){return Math.floor(this.valueOf()/1e3)}function ls(){return new Date(this.valueOf())}function ds(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function us(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function hs(){return this.isValid()?this.toISOString():null}function cs(){return vt(this)}function fs(){return ae({},y(this))}function ms(){return y(this).overflow}function ps(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}f("N",0,0,"eraAbbr");f("NN",0,0,"eraAbbr");f("NNN",0,0,"eraAbbr");f("NNNN",0,0,"eraName");f("NNNNN",0,0,"eraNarrow");f("y",["y",1],"yo","eraYear");f("y",["yy",2],0,"eraYear");f("y",["yyy",3],0,"eraYear");f("y",["yyyy",4],0,"eraYear");h("N",At);h("NN",At);h("NNN",At);h("NNNN",Ms);h("NNNNN",Ys);b(["N","NN","NNN","NNNN","NNNNN"],function(e,t,r,a){var i=r._locale.erasParse(e,a,r._strict);i?y(r).era=i:y(r).invalidEra=e});h("y",xe);h("yy",xe);h("yyy",xe);h("yyyy",xe);h("yo",Os);b(["y","yy","yyy","yyyy"],W);b(["yo"],function(e,t,r,a){var i;r._locale._eraYearOrdinalRegex&&(i=e.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?t[W]=r._locale.eraYearOrdinalParse(e,i):t[W]=parseInt(e,10)});function ys(e,t){var r,a,i,n=this._eras||te("en")._eras;for(r=0,a=n.length;r<a;++r){switch(typeof n[r].since){case"string":i=u(n[r].since).startOf("day"),n[r].since=i.valueOf();break}switch(typeof n[r].until){case"undefined":n[r].until=1/0;break;case"string":i=u(n[r].until).startOf("day").valueOf(),n[r].until=i.valueOf();break}}return n}function xs(e,t,r){var a,i,n=this.eras(),s,d,m;for(e=e.toUpperCase(),a=0,i=n.length;a<i;++a)if(s=n[a].name.toUpperCase(),d=n[a].abbr.toUpperCase(),m=n[a].narrow.toUpperCase(),r)switch(t){case"N":case"NN":case"NNN":if(d===e)return n[a];break;case"NNNN":if(s===e)return n[a];break;case"NNNNN":if(m===e)return n[a];break}else if([s,d,m].indexOf(e)>=0)return n[a]}function gs(e,t){var r=e.since<=e.until?1:-1;return t===void 0?u(e.since).year():u(e.since).year()+(t-e.offset)*r}function _s(){var e,t,r,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),a[e].since<=r&&r<=a[e].until||a[e].until<=r&&r<=a[e].since)return a[e].name;return""}function ws(){var e,t,r,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),a[e].since<=r&&r<=a[e].until||a[e].until<=r&&r<=a[e].since)return a[e].narrow;return""}function vs(){var e,t,r,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),a[e].since<=r&&r<=a[e].until||a[e].until<=r&&r<=a[e].since)return a[e].abbr;return""}function ks(){var e,t,r,a,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(r=i[e].since<=i[e].until?1:-1,a=this.clone().startOf("day").valueOf(),i[e].since<=a&&a<=i[e].until||i[e].until<=a&&a<=i[e].since)return(this.year()-u(i[e].since).year())*r+i[e].offset;return this.year()}function bs(e){return v(this,"_erasNameRegex")||It.call(this),e?this._erasNameRegex:this._erasRegex}function Ss(e){return v(this,"_erasAbbrRegex")||It.call(this),e?this._erasAbbrRegex:this._erasRegex}function Ds(e){return v(this,"_erasNarrowRegex")||It.call(this),e?this._erasNarrowRegex:this._erasRegex}function At(e,t){return t.erasAbbrRegex(e)}function Ms(e,t){return t.erasNameRegex(e)}function Ys(e,t){return t.erasNarrowRegex(e)}function Os(e,t){return t._eraYearOrdinalRegex||xe}function It(){var e=[],t=[],r=[],a=[],i,n,s,d,m,g=this.eras();for(i=0,n=g.length;i<n;++i)s=X(g[i].name),d=X(g[i].abbr),m=X(g[i].narrow),t.push(s),e.push(d),r.push(m),a.push(s),a.push(d),a.push(m);this._erasRegex=new RegExp("^("+a.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}f(0,["gg",2],0,function(){return this.weekYear()%100});f(0,["GG",2],0,function(){return this.isoWeekYear()%100});function rt(e,t){f(0,[e,e.length],0,t)}rt("gggg","weekYear");rt("ggggg","weekYear");rt("GGGG","isoWeekYear");rt("GGGGG","isoWeekYear");h("G",Qe);h("g",Qe);h("GG",D,P);h("gg",D,P);h("GGGG",Yt,Mt);h("gggg",Yt,Mt);h("GGGGG",Je,Ze);h("ggggg",Je,Ze);Pe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,r,a){t[a.substr(0,2)]=_(e)});Pe(["gg","GG"],function(e,t,r,a){t[a]=u.parseTwoDigitYear(e)});function Ts(e){return Ur.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Ws(e){return Ur.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Rs(){return K(this.year(),1,4)}function js(){return K(this.isoWeekYear(),1,4)}function Ps(){var e=this.localeData()._week;return K(this.year(),e.dow,e.doy)}function Ns(){var e=this.localeData()._week;return K(this.weekYear(),e.dow,e.doy)}function Ur(e,t,r,a,i){var n;return e==null?Oe(this,a,i).year:(n=K(e,a,i),t>n&&(t=n),Cs.call(this,e,t,r,a,i))}function Cs(e,t,r,a,i){var n=yr(e,t,r,a,i),s=Ye(n.year,0,n.dayOfYear);return this.year(s.getUTCFullYear()),this.month(s.getUTCMonth()),this.date(s.getUTCDate()),this}f("Q",0,"Qo","quarter");h("Q",nr);b("Q",function(e,t){t[J]=(_(e)-1)*3});function Fs(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}f("D",["DD",2],"Do","date");h("D",D,ge);h("DD",D,P);h("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});b(["D","DD"],H);b("Do",function(e,t){t[H]=_(e.match(D)[0])});var Lr=_e("Date",!0);f("DDD",["DDDD",3],"DDDo","dayOfYear");h("DDD",Be);h("DDDD",sr);b(["DDD","DDDD"],function(e,t,r){r._dayOfYear=_(e)});function Us(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}f("m",["mm",2],0,"minute");h("m",D,Ot);h("mm",D,P);b(["m","mm"],L);var Ls=_e("Minutes",!1);f("s",["ss",2],0,"second");h("s",D,Ot);h("ss",D,P);b(["s","ss"],Q);var As=_e("Seconds",!1);f("S",0,0,function(){return~~(this.millisecond()/100)});f(0,["SS",2],0,function(){return~~(this.millisecond()/10)});f(0,["SSS",3],0,"millisecond");f(0,["SSSS",4],0,function(){return this.millisecond()*10});f(0,["SSSSS",5],0,function(){return this.millisecond()*100});f(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});f(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});f(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});f(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});h("S",Be,nr);h("SS",Be,P);h("SSS",Be,sr);var ie,Ar;for(ie="SSSS";ie.length<=9;ie+="S")h(ie,xe);function Is(e,t){t[le]=_(("0."+e)*1e3)}for(ie="S";ie.length<=9;ie+="S")b(ie,Is);Ar=_e("Milliseconds",!1);f("z",0,0,"zoneAbbr");f("zz",0,0,"zoneName");function $s(){return this._isUTC?"UTC":""}function Es(){return this._isUTC?"Coordinated Universal Time":""}var l=Re.prototype;l.add=Nn;l.calendar=$n;l.clone=En;l.diff=Bn;l.endOf=ns;l.format=Kn;l.from=es;l.fromNow=ts;l.to=rs;l.toNow=as;l.get=Qa;l.invalidAt=ms;l.isAfter=Hn;l.isBefore=Gn;l.isBetween=Vn;l.isSame=zn;l.isSameOrAfter=qn;l.isSameOrBefore=Zn;l.isValid=cs;l.lang=jr;l.locale=Rr;l.localeData=Pr;l.max=cn;l.min=hn;l.parsingFlags=fs;l.set=Xa;l.startOf=is;l.subtract=Cn;l.toArray=ds;l.toObject=us;l.toDate=ls;l.toISOString=Qn;l.inspect=Xn;typeof Symbol<"u"&&Symbol.for!=null&&(l[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});l.toJSON=hs;l.toString=Jn;l.unix=os;l.valueOf=ss;l.creationData=ps;l.eraName=_s;l.eraNarrow=ws;l.eraAbbr=vs;l.eraYear=ks;l.year=dr;l.isLeapYear=Ja;l.weekYear=Ts;l.isoWeekYear=Ws;l.quarter=l.quarters=Fs;l.month=mr;l.daysInMonth=oi;l.week=l.weeks=pi;l.isoWeek=l.isoWeeks=yi;l.weeksInYear=Ps;l.weeksInWeekYear=Ns;l.isoWeeksInYear=Rs;l.isoWeeksInISOWeekYear=js;l.date=Lr;l.day=l.days=Ti;l.weekday=Wi;l.isoWeekday=Ri;l.dayOfYear=Us;l.hour=l.hours=Li;l.minute=l.minutes=Ls;l.second=l.seconds=As;l.millisecond=l.milliseconds=Ar;l.utcOffset=vn;l.utc=bn;l.local=Sn;l.parseZone=Dn;l.hasAlignedHourOffset=Mn;l.isDST=Yn;l.isLocal=Tn;l.isUtcOffset=Wn;l.isUtc=Yr;l.isUTC=Yr;l.zoneAbbr=$s;l.zoneName=Es;l.dates=C("dates accessor is deprecated. Use date instead.",Lr);l.months=C("months accessor is deprecated. Use month instead",mr);l.years=C("years accessor is deprecated. Use year instead",dr);l.zone=C("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",kn);l.isDSTShifted=C("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",On);function Hs(e){return S(e*1e3)}function Gs(){return S.apply(null,arguments).parseZone()}function Ir(e){return e}var k=bt.prototype;k.calendar=Oa;k.longDateFormat=ja;k.invalidDate=Na;k.ordinal=Ua;k.preparse=Ir;k.postformat=Ir;k.relativeTime=Aa;k.pastFuture=Ia;k.set=Ma;k.eras=ys;k.erasParse=xs;k.erasConvertYear=gs;k.erasAbbrRegex=Ss;k.erasNameRegex=bs;k.erasNarrowRegex=Ds;k.months=ai;k.monthsShort=ii;k.monthsParse=si;k.monthsRegex=di;k.monthsShortRegex=li;k.week=hi;k.firstDayOfYear=mi;k.firstDayOfWeek=fi;k.weekdays=Si;k.weekdaysMin=Mi;k.weekdaysShort=Di;k.weekdaysParse=Oi;k.weekdaysRegex=ji;k.weekdaysShortRegex=Pi;k.weekdaysMinRegex=Ni;k.isPM=Fi;k.meridiem=Ai;function ze(e,t,r,a){var i=te(),n=V().set(a,t);return i[r](n,e)}function $r(e,t,r){if(ee(e)&&(t=e,e=void 0),e=e||"",t!=null)return ze(e,t,r,"month");var a,i=[];for(a=0;a<12;a++)i[a]=ze(e,a,r,"month");return i}function $t(e,t,r,a){typeof e=="boolean"?(ee(t)&&(r=t,t=void 0),t=t||""):(t=e,r=t,e=!1,ee(t)&&(r=t,t=void 0),t=t||"");var i=te(),n=e?i._week.dow:0,s,d=[];if(r!=null)return ze(t,(r+n)%7,a,"day");for(s=0;s<7;s++)d[s]=ze(t,(s+n)%7,a,"day");return d}function Vs(e,t){return $r(e,t,"months")}function zs(e,t){return $r(e,t,"monthsShort")}function qs(e,t,r){return $t(e,t,r,"weekdays")}function Zs(e,t,r){return $t(e,t,r,"weekdaysShort")}function Bs(e,t,r){return $t(e,t,r,"weekdaysMin")}se("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,r=_(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+r}});u.lang=C("moment.lang is deprecated. Use moment.locale instead.",se);u.langData=C("moment.langData is deprecated. Use moment.localeData instead.",te);var q=Math.abs;function Js(){var e=this._data;return this._milliseconds=q(this._milliseconds),this._days=q(this._days),this._months=q(this._months),e.milliseconds=q(e.milliseconds),e.seconds=q(e.seconds),e.minutes=q(e.minutes),e.hours=q(e.hours),e.months=q(e.months),e.years=q(e.years),this}function Er(e,t,r,a){var i=$(t,r);return e._milliseconds+=a*i._milliseconds,e._days+=a*i._days,e._months+=a*i._months,e._bubble()}function Qs(e,t){return Er(this,e,t,1)}function Xs(e,t){return Er(this,e,t,-1)}function Bt(e){return e<0?Math.floor(e):Math.ceil(e)}function Ks(){var e=this._milliseconds,t=this._days,r=this._months,a=this._data,i,n,s,d,m;return e>=0&&t>=0&&r>=0||e<=0&&t<=0&&r<=0||(e+=Bt(_t(r)+t)*864e5,t=0,r=0),a.milliseconds=e%1e3,i=N(e/1e3),a.seconds=i%60,n=N(i/60),a.minutes=n%60,s=N(n/60),a.hours=s%24,t+=N(s/24),m=N(Hr(t)),r+=m,t-=Bt(_t(m)),d=N(r/12),r%=12,a.days=t,a.months=r,a.years=d,this}function Hr(e){return e*4800/146097}function _t(e){return e*146097/4800}function eo(e){if(!this.isValid())return NaN;var t,r,a=this._milliseconds;if(e=F(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+a/864e5,r=this._months+Hr(t),e){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(t=this._days+Math.round(_t(this._months)),e){case"week":return t/7+a/6048e5;case"day":return t+a/864e5;case"hour":return t*24+a/36e5;case"minute":return t*1440+a/6e4;case"second":return t*86400+a/1e3;case"millisecond":return Math.floor(t*864e5)+a;default:throw new Error("Unknown unit "+e)}}function re(e){return function(){return this.as(e)}}var Gr=re("ms"),to=re("s"),ro=re("m"),ao=re("h"),io=re("d"),no=re("w"),so=re("M"),oo=re("Q"),lo=re("y"),uo=Gr;function ho(){return $(this)}function co(e){return e=F(e),this.isValid()?this[e+"s"]():NaN}function ue(e){return function(){return this.isValid()?this._data[e]:NaN}}var fo=ue("milliseconds"),mo=ue("seconds"),po=ue("minutes"),yo=ue("hours"),xo=ue("days"),go=ue("months"),_o=ue("years");function wo(){return N(this.days()/7)}var B=Math.round,fe={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function vo(e,t,r,a,i){return i.relativeTime(t||1,!!r,e,a)}function ko(e,t,r,a){var i=$(e).abs(),n=B(i.as("s")),s=B(i.as("m")),d=B(i.as("h")),m=B(i.as("d")),g=B(i.as("M")),T=B(i.as("w")),c=B(i.as("y")),R=n<=r.ss&&["s",n]||n<r.s&&["ss",n]||s<=1&&["m"]||s<r.m&&["mm",s]||d<=1&&["h"]||d<r.h&&["hh",d]||m<=1&&["d"]||m<r.d&&["dd",m];return r.w!=null&&(R=R||T<=1&&["w"]||T<r.w&&["ww",T]),R=R||g<=1&&["M"]||g<r.M&&["MM",g]||c<=1&&["y"]||["yy",c],R[2]=t,R[3]=+e>0,R[4]=a,vo.apply(null,R)}function bo(e){return e===void 0?B:typeof e=="function"?(B=e,!0):!1}function So(e,t){return fe[e]===void 0?!1:t===void 0?fe[e]:(fe[e]=t,e==="s"&&(fe.ss=t-1),!0)}function Do(e,t){if(!this.isValid())return this.localeData().invalidDate();var r=!1,a=fe,i,n;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(r=e),typeof t=="object"&&(a=Object.assign({},fe,t),t.s!=null&&t.ss==null&&(a.ss=t.s-1)),i=this.localeData(),n=ko(this,!r,a,i),r&&(n=i.pastFuture(+this,n)),i.postformat(n)}var ht=Math.abs;function he(e){return(e>0)-(e<0)||+e}function at(){if(!this.isValid())return this.localeData().invalidDate();var e=ht(this._milliseconds)/1e3,t=ht(this._days),r=ht(this._months),a,i,n,s,d=this.asSeconds(),m,g,T,c;return d?(a=N(e/60),i=N(a/60),e%=60,a%=60,n=N(r/12),r%=12,s=e?e.toFixed(3).replace(/\.?0+$/,""):"",m=d<0?"-":"",g=he(this._months)!==he(d)?"-":"",T=he(this._days)!==he(d)?"-":"",c=he(this._milliseconds)!==he(d)?"-":"",m+"P"+(n?g+n+"Y":"")+(r?g+r+"M":"")+(t?T+t+"D":"")+(i||a||e?"T":"")+(i?c+i+"H":"")+(a?c+a+"M":"")+(e?c+s+"S":"")):"P0D"}var w=tt.prototype;w.isValid=xn;w.abs=Js;w.add=Qs;w.subtract=Xs;w.as=eo;w.asMilliseconds=Gr;w.asSeconds=to;w.asMinutes=ro;w.asHours=ao;w.asDays=io;w.asWeeks=no;w.asMonths=so;w.asQuarters=oo;w.asYears=lo;w.valueOf=uo;w._bubble=Ks;w.clone=ho;w.get=co;w.milliseconds=fo;w.seconds=mo;w.minutes=po;w.hours=yo;w.days=xo;w.weeks=wo;w.months=go;w.years=_o;w.humanize=Do;w.toISOString=at;w.toString=at;w.toJSON=at;w.locale=Rr;w.localeData=Pr;w.toIsoString=C("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",at);w.lang=jr;f("X",0,0,"unix");f("x",0,0,"valueOf");h("x",Qe);h("X",Ga);b("X",function(e,t,r){r._d=new Date(parseFloat(e)*1e3)});b("x",function(e,t,r){r._d=new Date(_(e))});//! moment.js
u.version="2.30.1";Sa(S);u.fn=l;u.min=fn;u.max=mn;u.now=pn;u.utc=V;u.unix=Hs;u.months=Vs;u.isDate=We;u.locale=se;u.invalid=qe;u.duration=$;u.isMoment=I;u.weekdays=qs;u.parseZone=Gs;u.localeData=te;u.isDuration=Ie;u.monthsShort=zs;u.weekdaysMin=Bs;u.defineLocale=Pt;u.updateLocale=Hi;u.locales=Gi;u.weekdaysShort=Zs;u.normalizeUnits=F;u.relativeTimeRounding=bo;u.relativeTimeThreshold=So;u.calendarFormat=In;u.prototype=l;u.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const Mo=Jr`
  .react-datepicker__wrapper {
    position: absolute;
    
  }
 
  .react-datepicker {
    position: relative;
    left: -40%;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 9px 18px;
    background-color: ${p.colorOrange1};
    font-family: 'Roboto';
    border-radius: 8px;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;

  }
   .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .react-datepicker__header {
    position: relative;
    background-color:  ${p.colorOrange1};
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    color: ${p.colorWhite};
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
    text-align: center;
    position: relative;
    
  }
  .react-datepicker__day-name {
    margin: 0;
    padding: 8px 8px;
    color: rgba(239, 237, 232, 0.50);
    font-family: 'RobotoMedium';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  }
  span.react-datepicker__navigation-icon {
    margin-top: 24px;
    display: none;
  }
  .react-datepicker__aria-live {
    display: none;
  }
  button.react-datepicker__navigation {
    background-color: ${p.colorOrange1};
    position: absolute;
    transform: rotate(45deg);
    border: 2px solid ${p.colorWhite};
  }
  .react-datepicker__navigation--previous {
    left: 12px;
    width: 10px;
    height: 10px;
    top: 18px;
  }
  .react-datepicker__navigation--next {
    right: 12px;
    width: 10px;
    height: 10px;
    top: 14px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: ${p.colorWhite};

  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${p.colorWhite};
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: ${p.colorWhite};
    font-family: 'Roboto';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.28px;
    text-align: center;
  }
  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color: ${p.colorBlack};
    color: ${p.colorWhite};
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: ${p.colorWhite};
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: ${p.colorWhite};
    color:#3e85f3;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:${p.colorWhite};
    color:#3e85f3;
  }
  .react-datepicker__day--weekend {
    opacity: 50%;
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
   display: none;
  }
`,Yo=x.div`
  display: flex;
`,Jt=x.label`
  position: relative;
  border-radius: 12px;
  border: transparent;
  outline: transparent;
  /* width: 364px; */

  color: rgba(239, 237, 232, 0.6);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  flex-direction: column;

  /* @media screen and (min-width: 768px) {
    width: 317px;
  } */

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
`,Oo=x.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
  }
`,To=x.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,Qt=x.input`
  @media screen and (min-width: 320px) {
    width: 300px;
    color: white;
    color: rgba(239, 237, 232, 0.6);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    background-color: transparent;
    outline: none;
    padding: 14px;
    border-radius: 12px;

    ${({haserror:e,isValidationCompleted:t,...r})=>ne`
      border: 1px solid
        ${e?`${p.colorSecondaryRed}`:t?`${p.colorSecondaryGreen}`:`${p.colorInput}`};
    `}
  }

  @media screen and (min-width: 375px) {
    color: white;
    width: 335px;
    ${({haserror:e,isValidationCompleted:t,...r})=>ne`
      border: 1px solid
        ${e?`${p.colorSecondaryRed}`:t?`${p.colorSecondaryGreen}`:`${p.colorInput}`};
    `}
  }

  @media screen and (min-width: 768px) {
    width: 341px;
  }

  @media screen and (min-width: 1440px) {
    color: white;
    padding: 14px;
    font-size: 16px;
    line-height: 24px;
    transition: border-color 0.3s;
    width: 341px;

    ${({haserror:e,isValidationCompleted:t})=>ne`
      border: 1px solid
        ${e?`${p.colorSecondaryRed}`:t?`${p.colorSecondaryGreen}`:`${p.colorInput}`};

      &:hover,
      &:focus {
        ${!t&&`
        border: 1px solid ${p.colorOrange};
      `}
      }
    `}
  }
`,Wo=x.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (min-width: 320px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 375px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,Le=x.label`
  border-radius: 12px;
  border: transparent;
  outline: transparent;
  width: 161px;
  max-width: 364px;
  text-align: left;

  color: rgba(239, 237, 232, 0.6);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,ct=x.input`
  @media screen and (min-width: 320px) {
    width: 161px;
    color: white;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    background-color: transparent;
    outline: none;
    padding: 14px;
    border-radius: 12px;
    margin-top: 4px;

    &[type='number'] {
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
      }

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -moz-appearance: textfield;
      }
    }

    ${({haserror:e,isValidationCompleted:t,...r})=>ne`
      border: 1px solid
        ${e?`${p.colorSecondaryRed}`:t?`${p.colorSecondaryGreen}`:`${p.colorInput}`};
    `}
  }

  @media screen and (min-width: 375px) {
    color: white;
    width: 161px;
    ${({haserror:e,isValidationCompleted:t,...r})=>ne`
      border: 1px solid
        ${e?`${p.colorSecondaryRed}`:t?`${p.colorSecondaryGreen}`:`${p.colorInput}`};
    `}
  }

  @media screen and (min-width: 768px) {
    color: white;
    width: 168px;
  }

  @media screen and (min-width: 1440px) {
    color: white;
    padding: 14px;
    font-size: 16px;
    line-height: 24px;
    transition: border-color 0.3s;
    width: 168px;

    ${({haserror:e,isValidationCompleted:t})=>ne`
      border: 1px solid
        ${e?`${p.colorSecondaryRed}`:t?`${p.colorSecondaryGreen}`:`${p.colorInput}`};

      &:hover,
      &:focus {
        ${!t&&`
        border: 1px solid ${p.colorOrange};
      `}
      }
    `}
  }
`,Ro=x(ra)`
  width: 161px;
  color: white;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  background-color: transparent;
  outline: none;
  padding: 14px;
  border-radius: 12px;
  margin-top: 4px;

  ${({haserror:e,isValidationCompleted:t,...r})=>ne`
    border: 1px solid
      ${e?`${p.colorSecondaryRed}`:t?`${p.colorSecondaryGreen}`:`${p.colorInput}`};
  `}

  @media screen and (min-width: 768px) {
    color: white;
    width: 187px;
  }

  @media screen and (min-width: 1440px) {
    color: white;
    width: 160px;
    padding: 14px;
    font-size: 16px;
    line-height: 24px;
    transition: border-color 0.3s;

    ${({haserror:e,isValidationCompleted:t})=>ne`
      border: 1px solid
        ${e?`${p.colorSecondaryRed}`:t?`${p.colorSecondaryGreen}`:`${p.colorInput}`};

      &:hover,
      &:focus {
        ${!t&&`
        border: 1px solid ${p.colorOrange};
      `}
      }
    `}
  }
`,Xt=x.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  gap: 21px;
  @media (min-width: 834px) {
    /* width: 438px;
    margin: 24px auto 0 auto; */
  }
  @media (min-width: 1440px) {
    /* width: none;
    margin: 24px 0 0 0;
    gap: 8px; */
  }
`,jo=x.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  @media (min-width: 834px) {
    /* width: 438px; */
    flex-direction: row;
    /* justify-content: space-between; */
    flex-wrap: wrap;
  }

  @media (min-width: 1440px) {
    text-align: left;
    flex-direction: row;
  }
`,E=x.label`
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.06em;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  justify-content: flex-start;
  @media (min-width: 834px) {
    letter-spacing: 0.01em;
  }
`,U=x(aa)`
  appearance: none;

  min-width: 12px;
  min-height: 12px;

  font: inherit;
  color: green;
  background-color: black;

  border: 0.11em solid gray;
  border-radius: 50%;

  &:checked {
    background: radial-gradient(
      circle,
      ${p.colorOrange},
      transparent 50%
    );
    border: 0.11em solid ${p.colorOrange};
  }
`,Z=x(ia)`
  color: #d80027;
  position: relative;
  font-size: 12px;

  &::before {
    content: '✖';
    display: inline-block;
    font-size: 12px;
    color: #d80027;
    margin-right: 5px;
  }
`,Po=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 834px) {
    width: 438px;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (min-width: 1440px) {
    text-align: left;
    flex-direction: row;
  }
`,No=x.button`
  @media screen and (min-width: 320px) {
    position: sticky;
    display: flex;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 140px;
    border-radius: 12px;
    background-color: ${p.colorOrange};
    color: ${p.colorWhite};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    outline: none;
    border: transparent;
    margin-top: 28px;
    margin-bottom: 12px;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }

  @media screen and (min-width: 1440px) {
    display: inline-flex;
    padding: 16px 60px;
    font-size: 20px;
    line-height: 24px;
    width: 192px;

    &:hover,
    &:focus {
      background-color: ${p.colorOrange1};
    }
  }
`;u().format("YYYY-MM-DD");const Co=na().shape({name:Ce().min(2,"Too Short!").required("Name is required"),email:Ce().email("Invalid email address").required("Email is required"),height:we().label("Height").min(150,"Height must be a number greater than or equal to 150").required("Height is required"),currentWeight:we().label("Current Weight").min(35,"Current Weight must be a number greater than or equal to 35").required("Current Weight is required"),desiredWeight:we().label("Desired Weight").min(35,"Desired Weight must be a number greater than or equal to 35").required("Desired Weight is required"),blood:we().label("Blood Type").oneOf([1,2,3,4,"1","2","3","4"],"Invalid Blood Type").required("Blood Type is required"),sex:Ce().label("Gender").oneOf(["male","female"],"Invalid Gender").required("Gender is required"),levelActivity:we().label("Level of Activity").oneOf([1,2,3,4,5,"1","2","3","4","5"],"Invalid Level of Activity").required("Level of Activity is required"),birthday:Ce().label("Date of Birth").typeError("Invalid Date!")}),Fo=({profile:e,refreshUserData:t})=>{const r=Kt(),[a,i]=Se.useState(e),[n,s]=Se.useState(null),[d,m]=Se.useState(!1),g=async()=>{try{const c=await r(Xr());console.log(c),c.payload.birthday===void 0&&(c.payload.birthday=""),i(c.payload),t(c.payload)}catch(c){console.error("Error fetching user data:",c)}};Se.useEffect(()=>{g()},[]);const T=c=>{m(!0),console.log(c);try{const R=r(Kr(c));console.log(R)}catch(R){console.error("Error fetching user data:",R)}return setTimeout(()=>{m(!1)},3e3),!1};return o.jsx(Yo,{children:o.jsx(sa,{initialValues:a,enableReinitialize:!0,validationSchema:Co,onSubmit:T,children:c=>o.jsxs(oa,{children:[o.jsxs(Oo,{children:[o.jsxs(To,{children:[o.jsxs(Jt,{children:["Name",o.jsx(Qt,{name:"name",placeholder:"Mike",type:"text",onChange:c.handleChange,value:c.values.name}),o.jsx(Z,{name:"name",component:"div"})]}),o.jsxs(Jt,{children:["Email",o.jsx(Qt,{name:"email",placeholder:"jane@acme.com",type:"email",onChange:c.handleChange,value:c.values.email}),o.jsx(Z,{name:"email",component:"div"})]})]}),o.jsxs(Wo,{children:[o.jsxs(Le,{children:["Height",o.jsx(ct,{name:"height",placeholder:"0",type:"number",onChange:c.handleChange,value:c.values.height}),o.jsx(Z,{name:"height",component:"div"})]}),o.jsxs(Le,{children:["Current Weight",o.jsx(ct,{name:"currentWeight",placeholder:"0",type:"number",onChange:c.handleChange,value:c.values.currentWeight}),o.jsx(Z,{name:"currentWeight",component:"div"})]}),o.jsxs(Le,{children:["Desired Weight",o.jsx(ct,{name:"desiredWeight",placeholder:"0",type:"number",onChange:c.handleChange,value:c.values.desiredWeight}),o.jsx(Z,{name:"desiredWeight",component:"div"})]}),o.jsxs(Le,{children:["Date of birth",o.jsx(Ro,{selected:n,onChange:R=>{s(R),c.handleChange,c.values.birthday=R,c.setFieldTouched},dateFormat:"dd.MM.yyyy",placeholderText:"00.00.00",name:"birthday",value:c.values.birthday}),o.jsx(Z,{name:"birthday",component:"div"}),o.jsx(Mo,{})]})]}),o.jsxs(Xt,{children:[o.jsxs("div",{role:"group","aria-labelledby":"bloodLevel",children:[o.jsx(Z,{name:"blood",component:"div"}),o.jsxs(jo,{children:["Blood",o.jsxs(E,{children:[o.jsx(U,{type:"radio",name:"blood",value:"1",onChange:c.handleChange,checked:c.values.blood==="1"||c.values.blood===1}),"1"]}),o.jsxs(E,{children:[o.jsx(U,{type:"radio",name:"blood",value:"2",onChange:c.handleChange,checked:c.values.blood==="2"||c.values.blood===2}),"2"]}),o.jsxs(E,{children:[o.jsx(U,{type:"radio",name:"blood",value:"3",onChange:c.handleChange,checked:c.values.blood==="3"||c.values.blood===3}),"3"]}),o.jsxs(E,{children:[o.jsx(U,{type:"radio",name:"blood",value:"4",onChange:c.handleChange,checked:c.values.blood==="4"||c.values.blood===4}),"4"]})]})]}),o.jsxs("div",{role:"group","aria-labelledby":"genderType",children:[o.jsx(Z,{name:"sex",component:"div"}),o.jsxs(E,{children:[o.jsx(U,{type:"radio",name:"sex",value:"male",checked:c.values.sex==="male"}),"Male",o.jsx(U,{type:"radio",name:"sex",value:"female",checked:c.values.sex==="female"}),"Female"]})]})]}),o.jsxs(Xt,{role:"group","aria-labelledby":"activityGroup",children:[o.jsx(Z,{name:"levelActivity",component:"div"}),o.jsxs(Po,{children:[o.jsxs(E,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"1",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="1"||c.values.levelActivity===1}),"Sedentary lifestyle (little or no physical activity)"]}),o.jsxs(E,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"2",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="2"||c.values.levelActivity===2}),"Light activity (light excercises/sports 1-3 days per week)"]}),o.jsxs(E,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"3",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="3"||c.values.levelActivity===3}),"Moderately active (moderate excercises/sports 2-5 days per week)"," "]}),o.jsxs(E,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"4",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="4"||c.values.levelActivity===4}),"Very active (intence excercises/sports 6-7 days per week)"]}),o.jsxs(E,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"5",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="5"||c.values.levelActivity===5}),"Extremely active (very strenous exercises/sports and physical work)"]})]})]})]}),o.jsx(No,{type:"submit",children:"Save"}),d&&Qr.success("Settings updated successfully")]})})})},Uo=x.div`
  padding-top: 72px;
`,Lo=x.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 20px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 60%;
    transform: translateX(-50%);
    width: 1px;
    background-color: rgba(239, 237, 232, 0.2);
    display: none; /* Початково приховуємо лінію */
  }

  @media (min-width: 1440px) {
    &:before {
      display: block; /* Показуємо лінію на десктопі */
    }
  }

  @media (max-width: 1439px) {
    flex-direction: column-reverse;
  }
`;class Vo extends Se.Component{constructor(){super(...arguments);it(this,"state",{profile:{name:"Jane",email:"",height:0,currentWeight:0,desiredWeight:0,blood:"1",sex:"female",levelActivity:"1",avatarURL:"",birthday:""}});it(this,"refreshProfileState",r=>{this.setState({profile:r})})}render(){return o.jsx(ea,{children:o.jsxs(Uo,{children:[o.jsx("h1",{children:"Profile Settings"}),o.jsxs(Lo,{children:[o.jsx(Fo,{profile:this.state.profile,refreshUserData:this.refreshProfileState}),o.jsx(ba,{profile:this.state.profile,refreshUserData:this.refreshProfileState})]})]})})}}export{Vo as ProfilePage,Vo as default};
