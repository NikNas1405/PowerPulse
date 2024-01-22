var Vr=Object.defineProperty;var zr=(e,t,r)=>t in e?Vr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var st=(e,t,r)=>(zr(e,typeof t!="symbol"?t+"":t,r),r);import{s as p,g as _,u as Kt,c as qr,j as o,a as Ne,L as Zr,d as Br,n as ae,r as be,Q as Jr,e as Qr,f as Xr,C as Kr}from"./index-a9ae01b3.js";import{s as ei,e as ti}from"./StyledDatepicker.styled-622fcf31.js";import{F as ri,E as ii,c as si,a as Ce,b as we,d as ai,e as ni}from"./index.esm-c0b9a2c3.js";import"./defineProperty-b2cc9829.js";import"./hoist-non-react-statics.cjs-9274af75.js";const oi=p.div`
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
`,li=p.div`
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
`,di=p.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  @media (min-width: 834px) {
    width: 219px;
  }
`;p.img`
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
`;const ui=p.div`
  display: flex;
  align-items: center;
  align-content: center;
`,hi=p.input`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
`,ci=p.label`
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
`,fi=p.svg`
  width: 24px;
  height: 24px;

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,mi=p.img`
  border-radius: 100%;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`,yi=p.div`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 8px;
`,pi=p.h2`
  color: #efede8;

  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`,xi=p.p`
  color: rgba(239, 237, 232, 0.5);

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,gi=p.div`
  display: flex;
  gap: 14px;
  margin: 0 auto;
`,Ht=p.div`
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
`,at=p.svg`
  @media screen and (min-width: 320px) {
    width: 12px;
    height: 12px;
    fill: ${_.colorWhite};
  }

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,nt=p.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${_.colorBeige};
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,ve=p.div`
  display: flex;
  align-items: baseline;
  gap: 11px;
`,$t=p.p`
  color: ${_.colorWhite};
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
`,ot=p.span`
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
`,_i=p.div`
  margin: 0 auto;
  margin-top: 40px;
  color: rgba(239, 237, 232, 0.3);

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;p.div`
  margin-right: 96px;

  @media screen and (min-width: 768px) {
    margin-right: 410px;
  }
`;const wi=p.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;
`,vi=p.p`
  @media screen and (min-width: 768px) {
    width: 330px;
  }

  @media screen and (min-width: 1440px) {
    width: 330px;
  }
`,ki=({profile:e,refreshUserData:t})=>{const r=Kt(),i=qr(ei),s=i.caloriesIntake,a=n=>{try{const d=r(Br(n.target.files[0]));e.avatarURL=URL.createObjectURL(n.target.files[0]),t(e)}catch(d){console.error("error ava update:",d)}return n.target.value};return o.jsxs(oi,{children:[o.jsxs(li,{children:[o.jsx(di,{children:o.jsx(ui,{children:o.jsx(hi,{type:"file",accept:"image/*",id:"file-input",src:e.avatarURL,alt:"User Avatar",onChange:n=>{a(n)},onClick:n=>{n.target.value=null}})})}),o.jsx(ci,{htmlFor:"file-input",children:o.jsx(fi,{children:o.jsx("use",{href:Ne+"#icon-check-mark-1"})})}),o.jsx("div",{children:o.jsx(mi,{src:e.avatarURL,alt:"User Avatar"})})]}),o.jsxs(yi,{children:[o.jsx(pi,{children:e.name}),o.jsx(xi,{children:"User"})]}),o.jsxs(gi,{children:[o.jsxs(Ht,{children:[o.jsxs(ve,{children:[o.jsx(nt,{children:o.jsx(at,{children:o.jsx("use",{href:`${Ne}#icon-fluent_food-24-filled`})})}),o.jsx(ot,{children:" Daily calorie intake"})]}),o.jsx(ve,{children:o.jsx($t,{children:s!==void 0?i.caloriesIntake:0})})]}),o.jsxs(Ht,{children:[o.jsxs(ve,{children:[o.jsx(nt,{children:o.jsx(at,{children:o.jsx("use",{href:`${Ne}#icon-dumbbell`})})}),o.jsx(ot,{children:" Daily physical activity"})]}),o.jsxs(ve,{children:[o.jsx($t,{children:"110"}),o.jsx(ot,{children:"min"})]})]})]}),o.jsx(_i,{children:o.jsxs(ve,{children:[o.jsx(nt,{children:o.jsx(at,{children:o.jsx("use",{href:`${Ne}#exclamation-mark`})})}),o.jsx(vi,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})}),o.jsx(wi,{children:o.jsx(Zr,{})})]})};//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var er;function u(){return er.apply(null,arguments)}function Si(e){er=e}function A(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function de(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function v(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function wt(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(v(e,t))return!1;return!0}function P(e){return e===void 0}function ee(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function We(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function tr(e,t){var r=[],i,s=e.length;for(i=0;i<s;++i)r.push(t(e[i],i));return r}function ie(e,t){for(var r in t)v(t,r)&&(e[r]=t[r]);return v(t,"toString")&&(e.toString=t.toString),v(t,"valueOf")&&(e.valueOf=t.valueOf),e}function V(e,t,r,i){return br(e,t,r,i,!0).utc()}function bi(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function y(e){return e._pf==null&&(e._pf=bi()),e._pf}var ft;Array.prototype.some?ft=Array.prototype.some:ft=function(e){var t=Object(this),r=t.length>>>0,i;for(i=0;i<r;i++)if(i in t&&e.call(this,t[i],i,t))return!0;return!1};function vt(e){var t=null,r=!1,i=e._d&&!isNaN(e._d.getTime());if(i&&(t=y(e),r=ft.call(t.parsedDateParts,function(s){return s!=null}),i=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&r),e._strict&&(i=i&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=i;else return i;return e._isValid}function qe(e){var t=V(NaN);return e!=null?ie(y(t),e):y(t).userInvalidated=!0,t}var Gt=u.momentProperties=[],lt=!1;function kt(e,t){var r,i,s,a=Gt.length;if(P(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),P(t._i)||(e._i=t._i),P(t._f)||(e._f=t._f),P(t._l)||(e._l=t._l),P(t._strict)||(e._strict=t._strict),P(t._tzm)||(e._tzm=t._tzm),P(t._isUTC)||(e._isUTC=t._isUTC),P(t._offset)||(e._offset=t._offset),P(t._pf)||(e._pf=y(t)),P(t._locale)||(e._locale=t._locale),a>0)for(r=0;r<a;r++)i=Gt[r],s=t[i],P(s)||(e[i]=s);return e}function Re(e){kt(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),lt===!1&&(lt=!0,u.updateOffset(this),lt=!1)}function I(e){return e instanceof Re||e!=null&&e._isAMomentObject!=null}function rr(e){u.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function C(e,t){var r=!0;return ie(function(){if(u.deprecationHandler!=null&&u.deprecationHandler(null,e),r){var i=[],s,a,n,d=arguments.length;for(a=0;a<d;a++){if(s="",typeof arguments[a]=="object"){s+=`
[`+a+"] ";for(n in arguments[0])v(arguments[0],n)&&(s+=n+": "+arguments[0][n]+", ");s=s.slice(0,-2)}else s=arguments[a];i.push(s)}rr(e+`
Arguments: `+Array.prototype.slice.call(i).join("")+`
`+new Error().stack),r=!1}return t.apply(this,arguments)},t)}var Vt={};function ir(e,t){u.deprecationHandler!=null&&u.deprecationHandler(e,t),Vt[e]||(rr(t),Vt[e]=!0)}u.suppressDeprecationWarnings=!1;u.deprecationHandler=null;function z(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Di(e){var t,r;for(r in e)v(e,r)&&(t=e[r],z(t)?this[r]=t:this["_"+r]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function mt(e,t){var r=ie({},e),i;for(i in t)v(t,i)&&(de(e[i])&&de(t[i])?(r[i]={},ie(r[i],e[i]),ie(r[i],t[i])):t[i]!=null?r[i]=t[i]:delete r[i]);for(i in e)v(e,i)&&!v(t,i)&&de(e[i])&&(r[i]=ie({},r[i]));return r}function St(e){e!=null&&this.set(e)}var yt;Object.keys?yt=Object.keys:yt=function(e){var t,r=[];for(t in e)v(e,t)&&r.push(t);return r};var Mi={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Yi(e,t,r){var i=this._calendar[e]||this._calendar.sameElse;return z(i)?i.call(t,r):i}function G(e,t,r){var i=""+Math.abs(e),s=t-i.length,a=e>=0;return(a?r?"+":"":"-")+Math.pow(10,Math.max(0,s)).toString().substr(1)+i}var bt=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Fe=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,dt={},me={};function f(e,t,r,i){var s=i;typeof i=="string"&&(s=function(){return this[i]()}),e&&(me[e]=s),t&&(me[t[0]]=function(){return G(s.apply(this,arguments),t[1],t[2])}),r&&(me[r]=function(){return this.localeData().ordinal(s.apply(this,arguments),e)})}function Oi(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Ti(e){var t=e.match(bt),r,i;for(r=0,i=t.length;r<i;r++)me[t[r]]?t[r]=me[t[r]]:t[r]=Oi(t[r]);return function(s){var a="",n;for(n=0;n<i;n++)a+=z(t[n])?t[n].call(s,e):t[n];return a}}function Ae(e,t){return e.isValid()?(t=sr(t,e.localeData()),dt[t]=dt[t]||Ti(t),dt[t](e)):e.localeData().invalidDate()}function sr(e,t){var r=5;function i(s){return t.longDateFormat(s)||s}for(Fe.lastIndex=0;r>=0&&Fe.test(e);)e=e.replace(Fe,i),Fe.lastIndex=0,r-=1;return e}var Wi={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Ri(e){var t=this._longDateFormat[e],r=this._longDateFormat[e.toUpperCase()];return t||!r?t:(this._longDateFormat[e]=r.match(bt).map(function(i){return i==="MMMM"||i==="MM"||i==="DD"||i==="dddd"?i.slice(1):i}).join(""),this._longDateFormat[e])}var Pi="Invalid date";function ji(){return this._invalidDate}var Ni="%d",Ci=/\d{1,2}/;function Fi(e){return this._ordinal.replace("%d",e)}var Ui={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Li(e,t,r,i){var s=this._relativeTime[r];return z(s)?s(e,t,r,i):s.replace(/%d/i,e)}function Ai(e,t){var r=this._relativeTime[e>0?"future":"past"];return z(r)?r(t):r.replace(/%s/i,t)}var zt={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function F(e){return typeof e=="string"?zt[e]||zt[e.toLowerCase()]:void 0}function Dt(e){var t={},r,i;for(i in e)v(e,i)&&(r=F(i),r&&(t[r]=e[i]));return t}var Ii={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Ei(e){var t=[],r;for(r in e)v(e,r)&&t.push({unit:r,priority:Ii[r]});return t.sort(function(i,s){return i.priority-s.priority}),t}var ar=/\d/,j=/\d\d/,nr=/\d{3}/,Mt=/\d{4}/,Ze=/[+-]?\d{6}/,D=/\d\d?/,or=/\d\d\d\d?/,lr=/\d\d\d\d\d\d?/,Be=/\d{1,3}/,Yt=/\d{1,4}/,Je=/[+-]?\d{1,6}/,xe=/\d+/,Qe=/[+-]?\d+/,Hi=/Z|[+-]\d\d:?\d\d/gi,Xe=/Z|[+-]\d\d(?::?\d\d)?/gi,$i=/[+-]?\d+(\.\d{1,3})?/,Pe=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,ge=/^[1-9]\d?/,Ot=/^([1-9]\d|\d)/,He;He={};function h(e,t,r){He[e]=z(t)?t:function(i,s){return i&&r?r:t}}function Gi(e,t){return v(He,e)?He[e](t._strict,t._locale):new RegExp(Vi(e))}function Vi(e){return X(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,r,i,s,a){return r||i||s||a}))}function X(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function N(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function g(e){var t=+e,r=0;return t!==0&&isFinite(t)&&(r=N(t)),r}var pt={};function S(e,t){var r,i=t,s;for(typeof e=="string"&&(e=[e]),ee(t)&&(i=function(a,n){n[t]=g(a)}),s=e.length,r=0;r<s;r++)pt[e[r]]=i}function je(e,t){S(e,function(r,i,s,a){s._w=s._w||{},t(r,s._w,s,a)})}function zi(e,t,r){t!=null&&v(pt,e)&&pt[e](t,r._a,r,e)}function Ke(e){return e%4===0&&e%100!==0||e%400===0}var W=0,J=1,$=2,O=3,L=4,Q=5,le=6,qi=7,Zi=8;f("Y",0,0,function(){var e=this.year();return e<=9999?G(e,4):"+"+e});f(0,["YY",2],0,function(){return this.year()%100});f(0,["YYYY",4],0,"year");f(0,["YYYYY",5],0,"year");f(0,["YYYYYY",6,!0],0,"year");h("Y",Qe);h("YY",D,j);h("YYYY",Yt,Mt);h("YYYYY",Je,Ze);h("YYYYYY",Je,Ze);S(["YYYYY","YYYYYY"],W);S("YYYY",function(e,t){t[W]=e.length===2?u.parseTwoDigitYear(e):g(e)});S("YY",function(e,t){t[W]=u.parseTwoDigitYear(e)});S("Y",function(e,t){t[W]=parseInt(e,10)});function De(e){return Ke(e)?366:365}u.parseTwoDigitYear=function(e){return g(e)+(g(e)>68?1900:2e3)};var dr=_e("FullYear",!0);function Bi(){return Ke(this.year())}function _e(e,t){return function(r){return r!=null?(ur(this,e,r),u.updateOffset(this,t),this):Me(this,e)}}function Me(e,t){if(!e.isValid())return NaN;var r=e._d,i=e._isUTC;switch(t){case"Milliseconds":return i?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return i?r.getUTCSeconds():r.getSeconds();case"Minutes":return i?r.getUTCMinutes():r.getMinutes();case"Hours":return i?r.getUTCHours():r.getHours();case"Date":return i?r.getUTCDate():r.getDate();case"Day":return i?r.getUTCDay():r.getDay();case"Month":return i?r.getUTCMonth():r.getMonth();case"FullYear":return i?r.getUTCFullYear():r.getFullYear();default:return NaN}}function ur(e,t,r){var i,s,a,n,d;if(!(!e.isValid()||isNaN(r))){switch(i=e._d,s=e._isUTC,t){case"Milliseconds":return void(s?i.setUTCMilliseconds(r):i.setMilliseconds(r));case"Seconds":return void(s?i.setUTCSeconds(r):i.setSeconds(r));case"Minutes":return void(s?i.setUTCMinutes(r):i.setMinutes(r));case"Hours":return void(s?i.setUTCHours(r):i.setHours(r));case"Date":return void(s?i.setUTCDate(r):i.setDate(r));case"FullYear":break;default:return}a=r,n=e.month(),d=e.date(),d=d===29&&n===1&&!Ke(a)?28:d,s?i.setUTCFullYear(a,n,d):i.setFullYear(a,n,d)}}function Ji(e){return e=F(e),z(this[e])?this[e]():this}function Qi(e,t){if(typeof e=="object"){e=Dt(e);var r=Ei(e),i,s=r.length;for(i=0;i<s;i++)this[r[i].unit](e[r[i].unit])}else if(e=F(e),z(this[e]))return this[e](t);return this}function Xi(e,t){return(e%t+t)%t}var Y;Array.prototype.indexOf?Y=Array.prototype.indexOf:Y=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function Tt(e,t){if(isNaN(e)||isNaN(t))return NaN;var r=Xi(t,12);return e+=(t-r)/12,r===1?Ke(e)?29:28:31-r%7%2}f("M",["MM",2],"Mo",function(){return this.month()+1});f("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});f("MMMM",0,0,function(e){return this.localeData().months(this,e)});h("M",D,ge);h("MM",D,j);h("MMM",function(e,t){return t.monthsShortRegex(e)});h("MMMM",function(e,t){return t.monthsRegex(e)});S(["M","MM"],function(e,t){t[J]=g(e)-1});S(["MMM","MMMM"],function(e,t,r,i){var s=r._locale.monthsParse(e,i,r._strict);s!=null?t[J]=s:y(r).invalidMonth=e});var Ki="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),hr="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),cr=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,es=Pe,ts=Pe;function rs(e,t){return e?A(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||cr).test(t)?"format":"standalone"][e.month()]:A(this._months)?this._months:this._months.standalone}function is(e,t){return e?A(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[cr.test(t)?"format":"standalone"][e.month()]:A(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function ss(e,t,r){var i,s,a,n=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;i<12;++i)a=V([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(a,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(a,"").toLocaleLowerCase();return r?t==="MMM"?(s=Y.call(this._shortMonthsParse,n),s!==-1?s:null):(s=Y.call(this._longMonthsParse,n),s!==-1?s:null):t==="MMM"?(s=Y.call(this._shortMonthsParse,n),s!==-1?s:(s=Y.call(this._longMonthsParse,n),s!==-1?s:null)):(s=Y.call(this._longMonthsParse,n),s!==-1?s:(s=Y.call(this._shortMonthsParse,n),s!==-1?s:null))}function as(e,t,r){var i,s,a;if(this._monthsParseExact)return ss.call(this,e,t,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;i<12;i++){if(s=V([2e3,i]),r&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(s,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(s,"").replace(".","")+"$","i")),!r&&!this._monthsParse[i]&&(a="^"+this.months(s,"")+"|^"+this.monthsShort(s,""),this._monthsParse[i]=new RegExp(a.replace(".",""),"i")),r&&t==="MMMM"&&this._longMonthsParse[i].test(e))return i;if(r&&t==="MMM"&&this._shortMonthsParse[i].test(e))return i;if(!r&&this._monthsParse[i].test(e))return i}}function fr(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=g(t);else if(t=e.localeData().monthsParse(t),!ee(t))return e}var r=t,i=e.date();return i=i<29?i:Math.min(i,Tt(e.year(),r)),e._isUTC?e._d.setUTCMonth(r,i):e._d.setMonth(r,i),e}function mr(e){return e!=null?(fr(this,e),u.updateOffset(this,!0),this):Me(this,"Month")}function ns(){return Tt(this.year(),this.month())}function os(e){return this._monthsParseExact?(v(this,"_monthsRegex")||yr.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(v(this,"_monthsShortRegex")||(this._monthsShortRegex=es),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function ls(e){return this._monthsParseExact?(v(this,"_monthsRegex")||yr.call(this),e?this._monthsStrictRegex:this._monthsRegex):(v(this,"_monthsRegex")||(this._monthsRegex=ts),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function yr(){function e(m,x){return x.length-m.length}var t=[],r=[],i=[],s,a,n,d;for(s=0;s<12;s++)a=V([2e3,s]),n=X(this.monthsShort(a,"")),d=X(this.months(a,"")),t.push(n),r.push(d),i.push(d),i.push(n);t.sort(e),r.sort(e),i.sort(e),this._monthsRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function ds(e,t,r,i,s,a,n){var d;return e<100&&e>=0?(d=new Date(e+400,t,r,i,s,a,n),isFinite(d.getFullYear())&&d.setFullYear(e)):d=new Date(e,t,r,i,s,a,n),d}function Ye(e){var t,r;return e<100&&e>=0?(r=Array.prototype.slice.call(arguments),r[0]=e+400,t=new Date(Date.UTC.apply(null,r)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function $e(e,t,r){var i=7+t-r,s=(7+Ye(e,0,i).getUTCDay()-t)%7;return-s+i-1}function pr(e,t,r,i,s){var a=(7+r-i)%7,n=$e(e,i,s),d=1+7*(t-1)+a+n,m,x;return d<=0?(m=e-1,x=De(m)+d):d>De(e)?(m=e+1,x=d-De(e)):(m=e,x=d),{year:m,dayOfYear:x}}function Oe(e,t,r){var i=$e(e.year(),t,r),s=Math.floor((e.dayOfYear()-i-1)/7)+1,a,n;return s<1?(n=e.year()-1,a=s+K(n,t,r)):s>K(e.year(),t,r)?(a=s-K(e.year(),t,r),n=e.year()+1):(n=e.year(),a=s),{week:a,year:n}}function K(e,t,r){var i=$e(e,t,r),s=$e(e+1,t,r);return(De(e)-i+s)/7}f("w",["ww",2],"wo","week");f("W",["WW",2],"Wo","isoWeek");h("w",D,ge);h("ww",D,j);h("W",D,ge);h("WW",D,j);je(["w","ww","W","WW"],function(e,t,r,i){t[i.substr(0,1)]=g(e)});function us(e){return Oe(e,this._week.dow,this._week.doy).week}var hs={dow:0,doy:6};function cs(){return this._week.dow}function fs(){return this._week.doy}function ms(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function ys(e){var t=Oe(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}f("d",0,"do","day");f("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});f("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});f("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});f("e",0,0,"weekday");f("E",0,0,"isoWeekday");h("d",D);h("e",D);h("E",D);h("dd",function(e,t){return t.weekdaysMinRegex(e)});h("ddd",function(e,t){return t.weekdaysShortRegex(e)});h("dddd",function(e,t){return t.weekdaysRegex(e)});je(["dd","ddd","dddd"],function(e,t,r,i){var s=r._locale.weekdaysParse(e,i,r._strict);s!=null?t.d=s:y(r).invalidWeekday=e});je(["d","e","E"],function(e,t,r,i){t[i]=g(e)});function ps(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function xs(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Wt(e,t){return e.slice(t,7).concat(e.slice(0,t))}var gs="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),xr="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),_s="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ws=Pe,vs=Pe,ks=Pe;function Ss(e,t){var r=A(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?Wt(r,this._week.dow):e?r[e.day()]:r}function bs(e){return e===!0?Wt(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Ds(e){return e===!0?Wt(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Ms(e,t,r){var i,s,a,n=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;i<7;++i)a=V([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(a,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(a,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(a,"").toLocaleLowerCase();return r?t==="dddd"?(s=Y.call(this._weekdaysParse,n),s!==-1?s:null):t==="ddd"?(s=Y.call(this._shortWeekdaysParse,n),s!==-1?s:null):(s=Y.call(this._minWeekdaysParse,n),s!==-1?s:null):t==="dddd"?(s=Y.call(this._weekdaysParse,n),s!==-1||(s=Y.call(this._shortWeekdaysParse,n),s!==-1)?s:(s=Y.call(this._minWeekdaysParse,n),s!==-1?s:null)):t==="ddd"?(s=Y.call(this._shortWeekdaysParse,n),s!==-1||(s=Y.call(this._weekdaysParse,n),s!==-1)?s:(s=Y.call(this._minWeekdaysParse,n),s!==-1?s:null)):(s=Y.call(this._minWeekdaysParse,n),s!==-1||(s=Y.call(this._weekdaysParse,n),s!==-1)?s:(s=Y.call(this._shortWeekdaysParse,n),s!==-1?s:null))}function Ys(e,t,r){var i,s,a;if(this._weekdaysParseExact)return Ms.call(this,e,t,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;i<7;i++){if(s=V([2e3,1]).day(i),r&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(s,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(s,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(s,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[i]||(a="^"+this.weekdays(s,"")+"|^"+this.weekdaysShort(s,"")+"|^"+this.weekdaysMin(s,""),this._weekdaysParse[i]=new RegExp(a.replace(".",""),"i")),r&&t==="dddd"&&this._fullWeekdaysParse[i].test(e))return i;if(r&&t==="ddd"&&this._shortWeekdaysParse[i].test(e))return i;if(r&&t==="dd"&&this._minWeekdaysParse[i].test(e))return i;if(!r&&this._weekdaysParse[i].test(e))return i}}function Os(e){if(!this.isValid())return e!=null?this:NaN;var t=Me(this,"Day");return e!=null?(e=ps(e,this.localeData()),this.add(e-t,"d")):t}function Ts(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function Ws(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=xs(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function Rs(e){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||Rt.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(v(this,"_weekdaysRegex")||(this._weekdaysRegex=ws),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Ps(e){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||Rt.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(v(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=vs),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function js(e){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||Rt.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(v(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=ks),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Rt(){function e(T,c){return c.length-T.length}var t=[],r=[],i=[],s=[],a,n,d,m,x;for(a=0;a<7;a++)n=V([2e3,1]).day(a),d=X(this.weekdaysMin(n,"")),m=X(this.weekdaysShort(n,"")),x=X(this.weekdays(n,"")),t.push(d),r.push(m),i.push(x),s.push(d),s.push(m),s.push(x);t.sort(e),r.sort(e),i.sort(e),s.sort(e),this._weekdaysRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function Pt(){return this.hours()%12||12}function Ns(){return this.hours()||24}f("H",["HH",2],0,"hour");f("h",["hh",2],0,Pt);f("k",["kk",2],0,Ns);f("hmm",0,0,function(){return""+Pt.apply(this)+G(this.minutes(),2)});f("hmmss",0,0,function(){return""+Pt.apply(this)+G(this.minutes(),2)+G(this.seconds(),2)});f("Hmm",0,0,function(){return""+this.hours()+G(this.minutes(),2)});f("Hmmss",0,0,function(){return""+this.hours()+G(this.minutes(),2)+G(this.seconds(),2)});function gr(e,t){f(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}gr("a",!0);gr("A",!1);function _r(e,t){return t._meridiemParse}h("a",_r);h("A",_r);h("H",D,Ot);h("h",D,ge);h("k",D,ge);h("HH",D,j);h("hh",D,j);h("kk",D,j);h("hmm",or);h("hmmss",lr);h("Hmm",or);h("Hmmss",lr);S(["H","HH"],O);S(["k","kk"],function(e,t,r){var i=g(e);t[O]=i===24?0:i});S(["a","A"],function(e,t,r){r._isPm=r._locale.isPM(e),r._meridiem=e});S(["h","hh"],function(e,t,r){t[O]=g(e),y(r).bigHour=!0});S("hmm",function(e,t,r){var i=e.length-2;t[O]=g(e.substr(0,i)),t[L]=g(e.substr(i)),y(r).bigHour=!0});S("hmmss",function(e,t,r){var i=e.length-4,s=e.length-2;t[O]=g(e.substr(0,i)),t[L]=g(e.substr(i,2)),t[Q]=g(e.substr(s)),y(r).bigHour=!0});S("Hmm",function(e,t,r){var i=e.length-2;t[O]=g(e.substr(0,i)),t[L]=g(e.substr(i))});S("Hmmss",function(e,t,r){var i=e.length-4,s=e.length-2;t[O]=g(e.substr(0,i)),t[L]=g(e.substr(i,2)),t[Q]=g(e.substr(s))});function Cs(e){return(e+"").toLowerCase().charAt(0)==="p"}var Fs=/[ap]\.?m?\.?/i,Us=_e("Hours",!0);function Ls(e,t,r){return e>11?r?"pm":"PM":r?"am":"AM"}var wr={calendar:Mi,longDateFormat:Wi,invalidDate:Pi,ordinal:Ni,dayOfMonthOrdinalParse:Ci,relativeTime:Ui,months:Ki,monthsShort:hr,week:hs,weekdays:gs,weekdaysMin:_s,weekdaysShort:xr,meridiemParse:Fs},M={},ke={},Te;function As(e,t){var r,i=Math.min(e.length,t.length);for(r=0;r<i;r+=1)if(e[r]!==t[r])return r;return i}function qt(e){return e&&e.toLowerCase().replace("_","-")}function Is(e){for(var t=0,r,i,s,a;t<e.length;){for(a=qt(e[t]).split("-"),r=a.length,i=qt(e[t+1]),i=i?i.split("-"):null;r>0;){if(s=et(a.slice(0,r).join("-")),s)return s;if(i&&i.length>=r&&As(a,i)>=r-1)break;r--}t++}return Te}function Es(e){return!!(e&&e.match("^[^/\\\\]*$"))}function et(e){var t=null,r;if(M[e]===void 0&&typeof module<"u"&&module&&module.exports&&Es(e))try{t=Te._abbr,r=require,r("./locale/"+e),ne(t)}catch{M[e]=null}return M[e]}function ne(e,t){var r;return e&&(P(t)?r=te(e):r=jt(e,t),r?Te=r:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Te._abbr}function jt(e,t){if(t!==null){var r,i=wr;if(t.abbr=e,M[e]!=null)ir("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),i=M[e]._config;else if(t.parentLocale!=null)if(M[t.parentLocale]!=null)i=M[t.parentLocale]._config;else if(r=et(t.parentLocale),r!=null)i=r._config;else return ke[t.parentLocale]||(ke[t.parentLocale]=[]),ke[t.parentLocale].push({name:e,config:t}),null;return M[e]=new St(mt(i,t)),ke[e]&&ke[e].forEach(function(s){jt(s.name,s.config)}),ne(e),M[e]}else return delete M[e],null}function Hs(e,t){if(t!=null){var r,i,s=wr;M[e]!=null&&M[e].parentLocale!=null?M[e].set(mt(M[e]._config,t)):(i=et(e),i!=null&&(s=i._config),t=mt(s,t),i==null&&(t.abbr=e),r=new St(t),r.parentLocale=M[e],M[e]=r),ne(e)}else M[e]!=null&&(M[e].parentLocale!=null?(M[e]=M[e].parentLocale,e===ne()&&ne(e)):M[e]!=null&&delete M[e]);return M[e]}function te(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Te;if(!A(e)){if(t=et(e),t)return t;e=[e]}return Is(e)}function $s(){return yt(M)}function Nt(e){var t,r=e._a;return r&&y(e).overflow===-2&&(t=r[J]<0||r[J]>11?J:r[$]<1||r[$]>Tt(r[W],r[J])?$:r[O]<0||r[O]>24||r[O]===24&&(r[L]!==0||r[Q]!==0||r[le]!==0)?O:r[L]<0||r[L]>59?L:r[Q]<0||r[Q]>59?Q:r[le]<0||r[le]>999?le:-1,y(e)._overflowDayOfYear&&(t<W||t>$)&&(t=$),y(e)._overflowWeeks&&t===-1&&(t=qi),y(e)._overflowWeekday&&t===-1&&(t=Zi),y(e).overflow=t),e}var Gs=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Vs=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,zs=/Z|[+-]\d\d(?::?\d\d)?/,Ue=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],ut=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],qs=/^\/?Date\((-?\d+)/i,Zs=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Bs={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function vr(e){var t,r,i=e._i,s=Gs.exec(i)||Vs.exec(i),a,n,d,m,x=Ue.length,T=ut.length;if(s){for(y(e).iso=!0,t=0,r=x;t<r;t++)if(Ue[t][1].exec(s[1])){n=Ue[t][0],a=Ue[t][2]!==!1;break}if(n==null){e._isValid=!1;return}if(s[3]){for(t=0,r=T;t<r;t++)if(ut[t][1].exec(s[3])){d=(s[2]||" ")+ut[t][0];break}if(d==null){e._isValid=!1;return}}if(!a&&d!=null){e._isValid=!1;return}if(s[4])if(zs.exec(s[4]))m="Z";else{e._isValid=!1;return}e._f=n+(d||"")+(m||""),Ft(e)}else e._isValid=!1}function Js(e,t,r,i,s,a){var n=[Qs(e),hr.indexOf(t),parseInt(r,10),parseInt(i,10),parseInt(s,10)];return a&&n.push(parseInt(a,10)),n}function Qs(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function Xs(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Ks(e,t,r){if(e){var i=xr.indexOf(e),s=new Date(t[0],t[1],t[2]).getDay();if(i!==s)return y(r).weekdayMismatch=!0,r._isValid=!1,!1}return!0}function ea(e,t,r){if(e)return Bs[e];if(t)return 0;var i=parseInt(r,10),s=i%100,a=(i-s)/100;return a*60+s}function kr(e){var t=Zs.exec(Xs(e._i)),r;if(t){if(r=Js(t[4],t[3],t[2],t[5],t[6],t[7]),!Ks(t[1],r,e))return;e._a=r,e._tzm=ea(t[8],t[9],t[10]),e._d=Ye.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),y(e).rfc2822=!0}else e._isValid=!1}function ta(e){var t=qs.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(vr(e),e._isValid===!1)delete e._isValid;else return;if(kr(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:u.createFromInputFallback(e)}u.createFromInputFallback=C("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function ce(e,t,r){return e??t??r}function ra(e){var t=new Date(u.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Ct(e){var t,r,i=[],s,a,n;if(!e._d){for(s=ra(e),e._w&&e._a[$]==null&&e._a[J]==null&&ia(e),e._dayOfYear!=null&&(n=ce(e._a[W],s[W]),(e._dayOfYear>De(n)||e._dayOfYear===0)&&(y(e)._overflowDayOfYear=!0),r=Ye(n,0,e._dayOfYear),e._a[J]=r.getUTCMonth(),e._a[$]=r.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=i[t]=s[t];for(;t<7;t++)e._a[t]=i[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[O]===24&&e._a[L]===0&&e._a[Q]===0&&e._a[le]===0&&(e._nextDay=!0,e._a[O]=0),e._d=(e._useUTC?Ye:ds).apply(null,i),a=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[O]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==a&&(y(e).weekdayMismatch=!0)}}function ia(e){var t,r,i,s,a,n,d,m,x;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(a=1,n=4,r=ce(t.GG,e._a[W],Oe(b(),1,4).year),i=ce(t.W,1),s=ce(t.E,1),(s<1||s>7)&&(m=!0)):(a=e._locale._week.dow,n=e._locale._week.doy,x=Oe(b(),a,n),r=ce(t.gg,e._a[W],x.year),i=ce(t.w,x.week),t.d!=null?(s=t.d,(s<0||s>6)&&(m=!0)):t.e!=null?(s=t.e+a,(t.e<0||t.e>6)&&(m=!0)):s=a),i<1||i>K(r,a,n)?y(e)._overflowWeeks=!0:m!=null?y(e)._overflowWeekday=!0:(d=pr(r,i,s,a,n),e._a[W]=d.year,e._dayOfYear=d.dayOfYear)}u.ISO_8601=function(){};u.RFC_2822=function(){};function Ft(e){if(e._f===u.ISO_8601){vr(e);return}if(e._f===u.RFC_2822){kr(e);return}e._a=[],y(e).empty=!0;var t=""+e._i,r,i,s,a,n,d=t.length,m=0,x,T;for(s=sr(e._f,e._locale).match(bt)||[],T=s.length,r=0;r<T;r++)a=s[r],i=(t.match(Gi(a,e))||[])[0],i&&(n=t.substr(0,t.indexOf(i)),n.length>0&&y(e).unusedInput.push(n),t=t.slice(t.indexOf(i)+i.length),m+=i.length),me[a]?(i?y(e).empty=!1:y(e).unusedTokens.push(a),zi(a,i,e)):e._strict&&!i&&y(e).unusedTokens.push(a);y(e).charsLeftOver=d-m,t.length>0&&y(e).unusedInput.push(t),e._a[O]<=12&&y(e).bigHour===!0&&e._a[O]>0&&(y(e).bigHour=void 0),y(e).parsedDateParts=e._a.slice(0),y(e).meridiem=e._meridiem,e._a[O]=sa(e._locale,e._a[O],e._meridiem),x=y(e).era,x!==null&&(e._a[W]=e._locale.erasConvertYear(x,e._a[W])),Ct(e),Nt(e)}function sa(e,t,r){var i;return r==null?t:e.meridiemHour!=null?e.meridiemHour(t,r):(e.isPM!=null&&(i=e.isPM(r),i&&t<12&&(t+=12),!i&&t===12&&(t=0)),t)}function aa(e){var t,r,i,s,a,n,d=!1,m=e._f.length;if(m===0){y(e).invalidFormat=!0,e._d=new Date(NaN);return}for(s=0;s<m;s++)a=0,n=!1,t=kt({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[s],Ft(t),vt(t)&&(n=!0),a+=y(t).charsLeftOver,a+=y(t).unusedTokens.length*10,y(t).score=a,d?a<i&&(i=a,r=t):(i==null||a<i||n)&&(i=a,r=t,n&&(d=!0));ie(e,r||t)}function na(e){if(!e._d){var t=Dt(e._i),r=t.day===void 0?t.date:t.day;e._a=tr([t.year,t.month,r,t.hour,t.minute,t.second,t.millisecond],function(i){return i&&parseInt(i,10)}),Ct(e)}}function oa(e){var t=new Re(Nt(Sr(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Sr(e){var t=e._i,r=e._f;return e._locale=e._locale||te(e._l),t===null||r===void 0&&t===""?qe({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),I(t)?new Re(Nt(t)):(We(t)?e._d=t:A(r)?aa(e):r?Ft(e):la(e),vt(e)||(e._d=null),e))}function la(e){var t=e._i;P(t)?e._d=new Date(u.now()):We(t)?e._d=new Date(t.valueOf()):typeof t=="string"?ta(e):A(t)?(e._a=tr(t.slice(0),function(r){return parseInt(r,10)}),Ct(e)):de(t)?na(e):ee(t)?e._d=new Date(t):u.createFromInputFallback(e)}function br(e,t,r,i,s){var a={};return(t===!0||t===!1)&&(i=t,t=void 0),(r===!0||r===!1)&&(i=r,r=void 0),(de(e)&&wt(e)||A(e)&&e.length===0)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=s,a._l=r,a._i=e,a._f=t,a._strict=i,oa(a)}function b(e,t,r,i){return br(e,t,r,i,!1)}var da=C("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=b.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:qe()}),ua=C("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=b.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:qe()});function Dr(e,t){var r,i;if(t.length===1&&A(t[0])&&(t=t[0]),!t.length)return b();for(r=t[0],i=1;i<t.length;++i)(!t[i].isValid()||t[i][e](r))&&(r=t[i]);return r}function ha(){var e=[].slice.call(arguments,0);return Dr("isBefore",e)}function ca(){var e=[].slice.call(arguments,0);return Dr("isAfter",e)}var fa=function(){return Date.now?Date.now():+new Date},Se=["year","quarter","month","week","day","hour","minute","second","millisecond"];function ma(e){var t,r=!1,i,s=Se.length;for(t in e)if(v(e,t)&&!(Y.call(Se,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(i=0;i<s;++i)if(e[Se[i]]){if(r)return!1;parseFloat(e[Se[i]])!==g(e[Se[i]])&&(r=!0)}return!0}function ya(){return this._isValid}function pa(){return E(NaN)}function tt(e){var t=Dt(e),r=t.year||0,i=t.quarter||0,s=t.month||0,a=t.week||t.isoWeek||0,n=t.day||0,d=t.hour||0,m=t.minute||0,x=t.second||0,T=t.millisecond||0;this._isValid=ma(t),this._milliseconds=+T+x*1e3+m*6e4+d*1e3*60*60,this._days=+n+a*7,this._months=+s+i*3+r*12,this._data={},this._locale=te(),this._bubble()}function Ie(e){return e instanceof tt}function xt(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function xa(e,t,r){var i=Math.min(e.length,t.length),s=Math.abs(e.length-t.length),a=0,n;for(n=0;n<i;n++)(r&&e[n]!==t[n]||!r&&g(e[n])!==g(t[n]))&&a++;return a+s}function Mr(e,t){f(e,0,0,function(){var r=this.utcOffset(),i="+";return r<0&&(r=-r,i="-"),i+G(~~(r/60),2)+t+G(~~r%60,2)})}Mr("Z",":");Mr("ZZ","");h("Z",Xe);h("ZZ",Xe);S(["Z","ZZ"],function(e,t,r){r._useUTC=!0,r._tzm=Ut(Xe,e)});var ga=/([\+\-]|\d\d)/gi;function Ut(e,t){var r=(t||"").match(e),i,s,a;return r===null?null:(i=r[r.length-1]||[],s=(i+"").match(ga)||["-",0,0],a=+(s[1]*60)+g(s[2]),a===0?0:s[0]==="+"?a:-a)}function Lt(e,t){var r,i;return t._isUTC?(r=t.clone(),i=(I(e)||We(e)?e.valueOf():b(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+i),u.updateOffset(r,!1),r):b(e).local()}function gt(e){return-Math.round(e._d.getTimezoneOffset())}u.updateOffset=function(){};function _a(e,t,r){var i=this._offset||0,s;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Ut(Xe,e),e===null)return this}else Math.abs(e)<16&&!r&&(e=e*60);return!this._isUTC&&t&&(s=gt(this)),this._offset=e,this._isUTC=!0,s!=null&&this.add(s,"m"),i!==e&&(!t||this._changeInProgress?Tr(this,E(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,u.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?i:gt(this)}function wa(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function va(e){return this.utcOffset(0,e)}function ka(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(gt(this),"m")),this}function Sa(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Ut(Hi,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function ba(e){return this.isValid()?(e=e?b(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Da(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ma(){if(!P(this._isDSTShifted))return this._isDSTShifted;var e={},t;return kt(e,this),e=Sr(e),e._a?(t=e._isUTC?V(e._a):b(e._a),this._isDSTShifted=this.isValid()&&xa(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Ya(){return this.isValid()?!this._isUTC:!1}function Oa(){return this.isValid()?this._isUTC:!1}function Yr(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Ta=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Wa=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function E(e,t){var r=e,i=null,s,a,n;return Ie(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:ee(e)||!isNaN(+e)?(r={},t?r[t]=+e:r.milliseconds=+e):(i=Ta.exec(e))?(s=i[1]==="-"?-1:1,r={y:0,d:g(i[$])*s,h:g(i[O])*s,m:g(i[L])*s,s:g(i[Q])*s,ms:g(xt(i[le]*1e3))*s}):(i=Wa.exec(e))?(s=i[1]==="-"?-1:1,r={y:oe(i[2],s),M:oe(i[3],s),w:oe(i[4],s),d:oe(i[5],s),h:oe(i[6],s),m:oe(i[7],s),s:oe(i[8],s)}):r==null?r={}:typeof r=="object"&&("from"in r||"to"in r)&&(n=Ra(b(r.from),b(r.to)),r={},r.ms=n.milliseconds,r.M=n.months),a=new tt(r),Ie(e)&&v(e,"_locale")&&(a._locale=e._locale),Ie(e)&&v(e,"_isValid")&&(a._isValid=e._isValid),a}E.fn=tt.prototype;E.invalid=pa;function oe(e,t){var r=e&&parseFloat(e.replace(",","."));return(isNaN(r)?0:r)*t}function Zt(e,t){var r={};return r.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(r.months,"M").isAfter(t)&&--r.months,r.milliseconds=+t-+e.clone().add(r.months,"M"),r}function Ra(e,t){var r;return e.isValid()&&t.isValid()?(t=Lt(t,e),e.isBefore(t)?r=Zt(e,t):(r=Zt(t,e),r.milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function Or(e,t){return function(r,i){var s,a;return i!==null&&!isNaN(+i)&&(ir(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),a=r,r=i,i=a),s=E(r,i),Tr(this,s,e),this}}function Tr(e,t,r,i){var s=t._milliseconds,a=xt(t._days),n=xt(t._months);e.isValid()&&(i=i??!0,n&&fr(e,Me(e,"Month")+n*r),a&&ur(e,"Date",Me(e,"Date")+a*r),s&&e._d.setTime(e._d.valueOf()+s*r),i&&u.updateOffset(e,a||n))}var Pa=Or(1,"add"),ja=Or(-1,"subtract");function Wr(e){return typeof e=="string"||e instanceof String}function Na(e){return I(e)||We(e)||Wr(e)||ee(e)||Fa(e)||Ca(e)||e===null||e===void 0}function Ca(e){var t=de(e)&&!wt(e),r=!1,i=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],s,a,n=i.length;for(s=0;s<n;s+=1)a=i[s],r=r||v(e,a);return t&&r}function Fa(e){var t=A(e),r=!1;return t&&(r=e.filter(function(i){return!ee(i)&&Wr(e)}).length===0),t&&r}function Ua(e){var t=de(e)&&!wt(e),r=!1,i=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],s,a;for(s=0;s<i.length;s+=1)a=i[s],r=r||v(e,a);return t&&r}function La(e,t){var r=e.diff(t,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function Aa(e,t){arguments.length===1&&(arguments[0]?Na(arguments[0])?(e=arguments[0],t=void 0):Ua(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var r=e||b(),i=Lt(r,this).startOf("day"),s=u.calendarFormat(this,i)||"sameElse",a=t&&(z(t[s])?t[s].call(this,r):t[s]);return this.format(a||this.localeData().calendar(s,this,b(r)))}function Ia(){return new Re(this)}function Ea(e,t){var r=I(e)?e:b(e);return this.isValid()&&r.isValid()?(t=F(t)||"millisecond",t==="millisecond"?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(t).valueOf()):!1}function Ha(e,t){var r=I(e)?e:b(e);return this.isValid()&&r.isValid()?(t=F(t)||"millisecond",t==="millisecond"?this.valueOf()<r.valueOf():this.clone().endOf(t).valueOf()<r.valueOf()):!1}function $a(e,t,r,i){var s=I(e)?e:b(e),a=I(t)?t:b(t);return this.isValid()&&s.isValid()&&a.isValid()?(i=i||"()",(i[0]==="("?this.isAfter(s,r):!this.isBefore(s,r))&&(i[1]===")"?this.isBefore(a,r):!this.isAfter(a,r))):!1}function Ga(e,t){var r=I(e)?e:b(e),i;return this.isValid()&&r.isValid()?(t=F(t)||"millisecond",t==="millisecond"?this.valueOf()===r.valueOf():(i=r.valueOf(),this.clone().startOf(t).valueOf()<=i&&i<=this.clone().endOf(t).valueOf())):!1}function Va(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function za(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function qa(e,t,r){var i,s,a;if(!this.isValid())return NaN;if(i=Lt(e,this),!i.isValid())return NaN;switch(s=(i.utcOffset()-this.utcOffset())*6e4,t=F(t),t){case"year":a=Ee(this,i)/12;break;case"month":a=Ee(this,i);break;case"quarter":a=Ee(this,i)/3;break;case"second":a=(this-i)/1e3;break;case"minute":a=(this-i)/6e4;break;case"hour":a=(this-i)/36e5;break;case"day":a=(this-i-s)/864e5;break;case"week":a=(this-i-s)/6048e5;break;default:a=this-i}return r?a:N(a)}function Ee(e,t){if(e.date()<t.date())return-Ee(t,e);var r=(t.year()-e.year())*12+(t.month()-e.month()),i=e.clone().add(r,"months"),s,a;return t-i<0?(s=e.clone().add(r-1,"months"),a=(t-i)/(i-s)):(s=e.clone().add(r+1,"months"),a=(t-i)/(s-i)),-(r+a)||0}u.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";u.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Za(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Ba(e){if(!this.isValid())return null;var t=e!==!0,r=t?this.clone().utc():this;return r.year()<0||r.year()>9999?Ae(r,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):z(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Ae(r,"Z")):Ae(r,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Ja(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",r,i,s,a;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),r="["+e+'("]',i=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",s="-MM-DD[T]HH:mm:ss.SSS",a=t+'[")]',this.format(r+i+s+a)}function Qa(e){e||(e=this.isUtc()?u.defaultFormatUtc:u.defaultFormat);var t=Ae(this,e);return this.localeData().postformat(t)}function Xa(e,t){return this.isValid()&&(I(e)&&e.isValid()||b(e).isValid())?E({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Ka(e){return this.from(b(),e)}function en(e,t){return this.isValid()&&(I(e)&&e.isValid()||b(e).isValid())?E({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function tn(e){return this.to(b(),e)}function Rr(e){var t;return e===void 0?this._locale._abbr:(t=te(e),t!=null&&(this._locale=t),this)}var Pr=C("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function jr(){return this._locale}var Ge=1e3,ye=60*Ge,Ve=60*ye,Nr=(365*400+97)*24*Ve;function pe(e,t){return(e%t+t)%t}function Cr(e,t,r){return e<100&&e>=0?new Date(e+400,t,r)-Nr:new Date(e,t,r).valueOf()}function Fr(e,t,r){return e<100&&e>=0?Date.UTC(e+400,t,r)-Nr:Date.UTC(e,t,r)}function rn(e){var t,r;if(e=F(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?Fr:Cr,e){case"year":t=r(this.year(),0,1);break;case"quarter":t=r(this.year(),this.month()-this.month()%3,1);break;case"month":t=r(this.year(),this.month(),1);break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=r(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=pe(t+(this._isUTC?0:this.utcOffset()*ye),Ve);break;case"minute":t=this._d.valueOf(),t-=pe(t,ye);break;case"second":t=this._d.valueOf(),t-=pe(t,Ge);break}return this._d.setTime(t),u.updateOffset(this,!0),this}function sn(e){var t,r;if(e=F(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?Fr:Cr,e){case"year":t=r(this.year()+1,0,1)-1;break;case"quarter":t=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=r(this.year(),this.month()+1,1)-1;break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Ve-pe(t+(this._isUTC?0:this.utcOffset()*ye),Ve)-1;break;case"minute":t=this._d.valueOf(),t+=ye-pe(t,ye)-1;break;case"second":t=this._d.valueOf(),t+=Ge-pe(t,Ge)-1;break}return this._d.setTime(t),u.updateOffset(this,!0),this}function an(){return this._d.valueOf()-(this._offset||0)*6e4}function nn(){return Math.floor(this.valueOf()/1e3)}function on(){return new Date(this.valueOf())}function ln(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function dn(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function un(){return this.isValid()?this.toISOString():null}function hn(){return vt(this)}function cn(){return ie({},y(this))}function fn(){return y(this).overflow}function mn(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}f("N",0,0,"eraAbbr");f("NN",0,0,"eraAbbr");f("NNN",0,0,"eraAbbr");f("NNNN",0,0,"eraName");f("NNNNN",0,0,"eraNarrow");f("y",["y",1],"yo","eraYear");f("y",["yy",2],0,"eraYear");f("y",["yyy",3],0,"eraYear");f("y",["yyyy",4],0,"eraYear");h("N",At);h("NN",At);h("NNN",At);h("NNNN",Dn);h("NNNNN",Mn);S(["N","NN","NNN","NNNN","NNNNN"],function(e,t,r,i){var s=r._locale.erasParse(e,i,r._strict);s?y(r).era=s:y(r).invalidEra=e});h("y",xe);h("yy",xe);h("yyy",xe);h("yyyy",xe);h("yo",Yn);S(["y","yy","yyy","yyyy"],W);S(["yo"],function(e,t,r,i){var s;r._locale._eraYearOrdinalRegex&&(s=e.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?t[W]=r._locale.eraYearOrdinalParse(e,s):t[W]=parseInt(e,10)});function yn(e,t){var r,i,s,a=this._eras||te("en")._eras;for(r=0,i=a.length;r<i;++r){switch(typeof a[r].since){case"string":s=u(a[r].since).startOf("day"),a[r].since=s.valueOf();break}switch(typeof a[r].until){case"undefined":a[r].until=1/0;break;case"string":s=u(a[r].until).startOf("day").valueOf(),a[r].until=s.valueOf();break}}return a}function pn(e,t,r){var i,s,a=this.eras(),n,d,m;for(e=e.toUpperCase(),i=0,s=a.length;i<s;++i)if(n=a[i].name.toUpperCase(),d=a[i].abbr.toUpperCase(),m=a[i].narrow.toUpperCase(),r)switch(t){case"N":case"NN":case"NNN":if(d===e)return a[i];break;case"NNNN":if(n===e)return a[i];break;case"NNNNN":if(m===e)return a[i];break}else if([n,d,m].indexOf(e)>=0)return a[i]}function xn(e,t){var r=e.since<=e.until?1:-1;return t===void 0?u(e.since).year():u(e.since).year()+(t-e.offset)*r}function gn(){var e,t,r,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),i[e].since<=r&&r<=i[e].until||i[e].until<=r&&r<=i[e].since)return i[e].name;return""}function _n(){var e,t,r,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),i[e].since<=r&&r<=i[e].until||i[e].until<=r&&r<=i[e].since)return i[e].narrow;return""}function wn(){var e,t,r,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),i[e].since<=r&&r<=i[e].until||i[e].until<=r&&r<=i[e].since)return i[e].abbr;return""}function vn(){var e,t,r,i,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e)if(r=s[e].since<=s[e].until?1:-1,i=this.clone().startOf("day").valueOf(),s[e].since<=i&&i<=s[e].until||s[e].until<=i&&i<=s[e].since)return(this.year()-u(s[e].since).year())*r+s[e].offset;return this.year()}function kn(e){return v(this,"_erasNameRegex")||It.call(this),e?this._erasNameRegex:this._erasRegex}function Sn(e){return v(this,"_erasAbbrRegex")||It.call(this),e?this._erasAbbrRegex:this._erasRegex}function bn(e){return v(this,"_erasNarrowRegex")||It.call(this),e?this._erasNarrowRegex:this._erasRegex}function At(e,t){return t.erasAbbrRegex(e)}function Dn(e,t){return t.erasNameRegex(e)}function Mn(e,t){return t.erasNarrowRegex(e)}function Yn(e,t){return t._eraYearOrdinalRegex||xe}function It(){var e=[],t=[],r=[],i=[],s,a,n,d,m,x=this.eras();for(s=0,a=x.length;s<a;++s)n=X(x[s].name),d=X(x[s].abbr),m=X(x[s].narrow),t.push(n),e.push(d),r.push(m),i.push(n),i.push(d),i.push(m);this._erasRegex=new RegExp("^("+i.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}f(0,["gg",2],0,function(){return this.weekYear()%100});f(0,["GG",2],0,function(){return this.isoWeekYear()%100});function rt(e,t){f(0,[e,e.length],0,t)}rt("gggg","weekYear");rt("ggggg","weekYear");rt("GGGG","isoWeekYear");rt("GGGGG","isoWeekYear");h("G",Qe);h("g",Qe);h("GG",D,j);h("gg",D,j);h("GGGG",Yt,Mt);h("gggg",Yt,Mt);h("GGGGG",Je,Ze);h("ggggg",Je,Ze);je(["gggg","ggggg","GGGG","GGGGG"],function(e,t,r,i){t[i.substr(0,2)]=g(e)});je(["gg","GG"],function(e,t,r,i){t[i]=u.parseTwoDigitYear(e)});function On(e){return Ur.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Tn(e){return Ur.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Wn(){return K(this.year(),1,4)}function Rn(){return K(this.isoWeekYear(),1,4)}function Pn(){var e=this.localeData()._week;return K(this.year(),e.dow,e.doy)}function jn(){var e=this.localeData()._week;return K(this.weekYear(),e.dow,e.doy)}function Ur(e,t,r,i,s){var a;return e==null?Oe(this,i,s).year:(a=K(e,i,s),t>a&&(t=a),Nn.call(this,e,t,r,i,s))}function Nn(e,t,r,i,s){var a=pr(e,t,r,i,s),n=Ye(a.year,0,a.dayOfYear);return this.year(n.getUTCFullYear()),this.month(n.getUTCMonth()),this.date(n.getUTCDate()),this}f("Q",0,"Qo","quarter");h("Q",ar);S("Q",function(e,t){t[J]=(g(e)-1)*3});function Cn(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}f("D",["DD",2],"Do","date");h("D",D,ge);h("DD",D,j);h("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});S(["D","DD"],$);S("Do",function(e,t){t[$]=g(e.match(D)[0])});var Lr=_e("Date",!0);f("DDD",["DDDD",3],"DDDo","dayOfYear");h("DDD",Be);h("DDDD",nr);S(["DDD","DDDD"],function(e,t,r){r._dayOfYear=g(e)});function Fn(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}f("m",["mm",2],0,"minute");h("m",D,Ot);h("mm",D,j);S(["m","mm"],L);var Un=_e("Minutes",!1);f("s",["ss",2],0,"second");h("s",D,Ot);h("ss",D,j);S(["s","ss"],Q);var Ln=_e("Seconds",!1);f("S",0,0,function(){return~~(this.millisecond()/100)});f(0,["SS",2],0,function(){return~~(this.millisecond()/10)});f(0,["SSS",3],0,"millisecond");f(0,["SSSS",4],0,function(){return this.millisecond()*10});f(0,["SSSSS",5],0,function(){return this.millisecond()*100});f(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});f(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});f(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});f(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});h("S",Be,ar);h("SS",Be,j);h("SSS",Be,nr);var se,Ar;for(se="SSSS";se.length<=9;se+="S")h(se,xe);function An(e,t){t[le]=g(("0."+e)*1e3)}for(se="S";se.length<=9;se+="S")S(se,An);Ar=_e("Milliseconds",!1);f("z",0,0,"zoneAbbr");f("zz",0,0,"zoneName");function In(){return this._isUTC?"UTC":""}function En(){return this._isUTC?"Coordinated Universal Time":""}var l=Re.prototype;l.add=Pa;l.calendar=Aa;l.clone=Ia;l.diff=qa;l.endOf=sn;l.format=Qa;l.from=Xa;l.fromNow=Ka;l.to=en;l.toNow=tn;l.get=Ji;l.invalidAt=fn;l.isAfter=Ea;l.isBefore=Ha;l.isBetween=$a;l.isSame=Ga;l.isSameOrAfter=Va;l.isSameOrBefore=za;l.isValid=hn;l.lang=Pr;l.locale=Rr;l.localeData=jr;l.max=ua;l.min=da;l.parsingFlags=cn;l.set=Qi;l.startOf=rn;l.subtract=ja;l.toArray=ln;l.toObject=dn;l.toDate=on;l.toISOString=Ba;l.inspect=Ja;typeof Symbol<"u"&&Symbol.for!=null&&(l[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});l.toJSON=un;l.toString=Za;l.unix=nn;l.valueOf=an;l.creationData=mn;l.eraName=gn;l.eraNarrow=_n;l.eraAbbr=wn;l.eraYear=vn;l.year=dr;l.isLeapYear=Bi;l.weekYear=On;l.isoWeekYear=Tn;l.quarter=l.quarters=Cn;l.month=mr;l.daysInMonth=ns;l.week=l.weeks=ms;l.isoWeek=l.isoWeeks=ys;l.weeksInYear=Pn;l.weeksInWeekYear=jn;l.isoWeeksInYear=Wn;l.isoWeeksInISOWeekYear=Rn;l.date=Lr;l.day=l.days=Os;l.weekday=Ts;l.isoWeekday=Ws;l.dayOfYear=Fn;l.hour=l.hours=Us;l.minute=l.minutes=Un;l.second=l.seconds=Ln;l.millisecond=l.milliseconds=Ar;l.utcOffset=_a;l.utc=va;l.local=ka;l.parseZone=Sa;l.hasAlignedHourOffset=ba;l.isDST=Da;l.isLocal=Ya;l.isUtcOffset=Oa;l.isUtc=Yr;l.isUTC=Yr;l.zoneAbbr=In;l.zoneName=En;l.dates=C("dates accessor is deprecated. Use date instead.",Lr);l.months=C("months accessor is deprecated. Use month instead",mr);l.years=C("years accessor is deprecated. Use year instead",dr);l.zone=C("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",wa);l.isDSTShifted=C("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ma);function Hn(e){return b(e*1e3)}function $n(){return b.apply(null,arguments).parseZone()}function Ir(e){return e}var k=St.prototype;k.calendar=Yi;k.longDateFormat=Ri;k.invalidDate=ji;k.ordinal=Fi;k.preparse=Ir;k.postformat=Ir;k.relativeTime=Li;k.pastFuture=Ai;k.set=Di;k.eras=yn;k.erasParse=pn;k.erasConvertYear=xn;k.erasAbbrRegex=Sn;k.erasNameRegex=kn;k.erasNarrowRegex=bn;k.months=rs;k.monthsShort=is;k.monthsParse=as;k.monthsRegex=ls;k.monthsShortRegex=os;k.week=us;k.firstDayOfYear=fs;k.firstDayOfWeek=cs;k.weekdays=Ss;k.weekdaysMin=Ds;k.weekdaysShort=bs;k.weekdaysParse=Ys;k.weekdaysRegex=Rs;k.weekdaysShortRegex=Ps;k.weekdaysMinRegex=js;k.isPM=Cs;k.meridiem=Ls;function ze(e,t,r,i){var s=te(),a=V().set(i,t);return s[r](a,e)}function Er(e,t,r){if(ee(e)&&(t=e,e=void 0),e=e||"",t!=null)return ze(e,t,r,"month");var i,s=[];for(i=0;i<12;i++)s[i]=ze(e,i,r,"month");return s}function Et(e,t,r,i){typeof e=="boolean"?(ee(t)&&(r=t,t=void 0),t=t||""):(t=e,r=t,e=!1,ee(t)&&(r=t,t=void 0),t=t||"");var s=te(),a=e?s._week.dow:0,n,d=[];if(r!=null)return ze(t,(r+a)%7,i,"day");for(n=0;n<7;n++)d[n]=ze(t,(n+a)%7,i,"day");return d}function Gn(e,t){return Er(e,t,"months")}function Vn(e,t){return Er(e,t,"monthsShort")}function zn(e,t,r){return Et(e,t,r,"weekdays")}function qn(e,t,r){return Et(e,t,r,"weekdaysShort")}function Zn(e,t,r){return Et(e,t,r,"weekdaysMin")}ne("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,r=g(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+r}});u.lang=C("moment.lang is deprecated. Use moment.locale instead.",ne);u.langData=C("moment.langData is deprecated. Use moment.localeData instead.",te);var q=Math.abs;function Bn(){var e=this._data;return this._milliseconds=q(this._milliseconds),this._days=q(this._days),this._months=q(this._months),e.milliseconds=q(e.milliseconds),e.seconds=q(e.seconds),e.minutes=q(e.minutes),e.hours=q(e.hours),e.months=q(e.months),e.years=q(e.years),this}function Hr(e,t,r,i){var s=E(t,r);return e._milliseconds+=i*s._milliseconds,e._days+=i*s._days,e._months+=i*s._months,e._bubble()}function Jn(e,t){return Hr(this,e,t,1)}function Qn(e,t){return Hr(this,e,t,-1)}function Bt(e){return e<0?Math.floor(e):Math.ceil(e)}function Xn(){var e=this._milliseconds,t=this._days,r=this._months,i=this._data,s,a,n,d,m;return e>=0&&t>=0&&r>=0||e<=0&&t<=0&&r<=0||(e+=Bt(_t(r)+t)*864e5,t=0,r=0),i.milliseconds=e%1e3,s=N(e/1e3),i.seconds=s%60,a=N(s/60),i.minutes=a%60,n=N(a/60),i.hours=n%24,t+=N(n/24),m=N($r(t)),r+=m,t-=Bt(_t(m)),d=N(r/12),r%=12,i.days=t,i.months=r,i.years=d,this}function $r(e){return e*4800/146097}function _t(e){return e*146097/4800}function Kn(e){if(!this.isValid())return NaN;var t,r,i=this._milliseconds;if(e=F(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+i/864e5,r=this._months+$r(t),e){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(t=this._days+Math.round(_t(this._months)),e){case"week":return t/7+i/6048e5;case"day":return t+i/864e5;case"hour":return t*24+i/36e5;case"minute":return t*1440+i/6e4;case"second":return t*86400+i/1e3;case"millisecond":return Math.floor(t*864e5)+i;default:throw new Error("Unknown unit "+e)}}function re(e){return function(){return this.as(e)}}var Gr=re("ms"),eo=re("s"),to=re("m"),ro=re("h"),io=re("d"),so=re("w"),ao=re("M"),no=re("Q"),oo=re("y"),lo=Gr;function uo(){return E(this)}function ho(e){return e=F(e),this.isValid()?this[e+"s"]():NaN}function ue(e){return function(){return this.isValid()?this._data[e]:NaN}}var co=ue("milliseconds"),fo=ue("seconds"),mo=ue("minutes"),yo=ue("hours"),po=ue("days"),xo=ue("months"),go=ue("years");function _o(){return N(this.days()/7)}var B=Math.round,fe={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function wo(e,t,r,i,s){return s.relativeTime(t||1,!!r,e,i)}function vo(e,t,r,i){var s=E(e).abs(),a=B(s.as("s")),n=B(s.as("m")),d=B(s.as("h")),m=B(s.as("d")),x=B(s.as("M")),T=B(s.as("w")),c=B(s.as("y")),R=a<=r.ss&&["s",a]||a<r.s&&["ss",a]||n<=1&&["m"]||n<r.m&&["mm",n]||d<=1&&["h"]||d<r.h&&["hh",d]||m<=1&&["d"]||m<r.d&&["dd",m];return r.w!=null&&(R=R||T<=1&&["w"]||T<r.w&&["ww",T]),R=R||x<=1&&["M"]||x<r.M&&["MM",x]||c<=1&&["y"]||["yy",c],R[2]=t,R[3]=+e>0,R[4]=i,wo.apply(null,R)}function ko(e){return e===void 0?B:typeof e=="function"?(B=e,!0):!1}function So(e,t){return fe[e]===void 0?!1:t===void 0?fe[e]:(fe[e]=t,e==="s"&&(fe.ss=t-1),!0)}function bo(e,t){if(!this.isValid())return this.localeData().invalidDate();var r=!1,i=fe,s,a;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(r=e),typeof t=="object"&&(i=Object.assign({},fe,t),t.s!=null&&t.ss==null&&(i.ss=t.s-1)),s=this.localeData(),a=vo(this,!r,i,s),r&&(a=s.pastFuture(+this,a)),s.postformat(a)}var ht=Math.abs;function he(e){return(e>0)-(e<0)||+e}function it(){if(!this.isValid())return this.localeData().invalidDate();var e=ht(this._milliseconds)/1e3,t=ht(this._days),r=ht(this._months),i,s,a,n,d=this.asSeconds(),m,x,T,c;return d?(i=N(e/60),s=N(i/60),e%=60,i%=60,a=N(r/12),r%=12,n=e?e.toFixed(3).replace(/\.?0+$/,""):"",m=d<0?"-":"",x=he(this._months)!==he(d)?"-":"",T=he(this._days)!==he(d)?"-":"",c=he(this._milliseconds)!==he(d)?"-":"",m+"P"+(a?x+a+"Y":"")+(r?x+r+"M":"")+(t?T+t+"D":"")+(s||i||e?"T":"")+(s?c+s+"H":"")+(i?c+i+"M":"")+(e?c+n+"S":"")):"P0D"}var w=tt.prototype;w.isValid=ya;w.abs=Bn;w.add=Jn;w.subtract=Qn;w.as=Kn;w.asMilliseconds=Gr;w.asSeconds=eo;w.asMinutes=to;w.asHours=ro;w.asDays=io;w.asWeeks=so;w.asMonths=ao;w.asQuarters=no;w.asYears=oo;w.valueOf=lo;w._bubble=Xn;w.clone=uo;w.get=ho;w.milliseconds=co;w.seconds=fo;w.minutes=mo;w.hours=yo;w.days=po;w.weeks=_o;w.months=xo;w.years=go;w.humanize=bo;w.toISOString=it;w.toString=it;w.toJSON=it;w.locale=Rr;w.localeData=jr;w.toIsoString=C("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",it);w.lang=Pr;f("X",0,0,"unix");f("x",0,0,"valueOf");h("x",Qe);h("X",$i);S("X",function(e,t,r){r._d=new Date(parseFloat(e)*1e3)});S("x",function(e,t,r){r._d=new Date(g(e))});//! moment.js
u.version="2.30.1";Si(b);u.fn=l;u.min=ha;u.max=ca;u.now=fa;u.utc=V;u.unix=Hn;u.months=Gn;u.isDate=We;u.locale=ne;u.invalid=qe;u.duration=E;u.isMoment=I;u.weekdays=zn;u.parseZone=$n;u.localeData=te;u.isDuration=Ie;u.monthsShort=Vn;u.weekdaysMin=Zn;u.defineLocale=jt;u.updateLocale=Hs;u.locales=$s;u.weekdaysShort=qn;u.normalizeUnits=F;u.relativeTimeRounding=ko;u.relativeTimeThreshold=So;u.calendarFormat=La;u.prototype=l;u.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const Do=p.div`
  display: flex;
`,Jt=p.label`
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
`,Mo=p.div`
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
`,Yo=p.div`
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
`,Qt=p.input`
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

    ${({haserror:e,isValidationCompleted:t,...r})=>ae`
      border: 1px solid
        ${e?`${_.colorSecondaryRed}`:t?`${_.colorSecondaryGreen}`:`${_.colorInput}`};
    `}
  }

  @media screen and (min-width: 375px) {
    color: white;
    width: 335px;
    ${({haserror:e,isValidationCompleted:t,...r})=>ae`
      border: 1px solid
        ${e?`${_.colorSecondaryRed}`:t?`${_.colorSecondaryGreen}`:`${_.colorInput}`};
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

    ${({haserror:e,isValidationCompleted:t})=>ae`
      border: 1px solid
        ${e?`${_.colorSecondaryRed}`:t?`${_.colorSecondaryGreen}`:`${_.colorInput}`};

      &:hover,
      &:focus {
        ${!t&&`
        border: 1px solid ${_.colorOrange};
      `}
      }
    `}
  }
`,Oo=p.div`
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
`,Le=p.label`
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
`,ct=p.input`
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

    ${({haserror:e,isValidationCompleted:t,...r})=>ae`
      border: 1px solid
        ${e?`${_.colorSecondaryRed}`:t?`${_.colorSecondaryGreen}`:`${_.colorInput}`};
    `}
  }

  @media screen and (min-width: 375px) {
    color: white;
    width: 161px;
    ${({haserror:e,isValidationCompleted:t,...r})=>ae`
      border: 1px solid
        ${e?`${_.colorSecondaryRed}`:t?`${_.colorSecondaryGreen}`:`${_.colorInput}`};
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

    ${({haserror:e,isValidationCompleted:t})=>ae`
      border: 1px solid
        ${e?`${_.colorSecondaryRed}`:t?`${_.colorSecondaryGreen}`:`${_.colorInput}`};

      &:hover,
      &:focus {
        ${!t&&`
        border: 1px solid ${_.colorOrange};
      `}
      }
    `}
  }
`,To=p(ti)`
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

  ${({haserror:e,isValidationCompleted:t,...r})=>ae`
    border: 1px solid
      ${e?`${_.colorSecondaryRed}`:t?`${_.colorSecondaryGreen}`:`${_.colorInput}`};
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

    ${({haserror:e,isValidationCompleted:t})=>ae`
      border: 1px solid
        ${e?`${_.colorSecondaryRed}`:t?`${_.colorSecondaryGreen}`:`${_.colorInput}`};

      &:hover,
      &:focus {
        ${!t&&`
        border: 1px solid ${_.colorOrange};
      `}
      }
    `}
  }
`,Xt=p.div`
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
`,Wo=p.div`
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
`,H=p.label`
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
`,U=p(ri)`
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
      ${_.colorOrange},
      transparent 50%
    );
    border: 0.11em solid ${_.colorOrange};
  }
`,Z=p(ii)`
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
`,Ro=p.div`
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
`,Po=p.button`
  @media screen and (min-width: 320px) {
    position: sticky;
    display: flex;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 140px;
    border-radius: 12px;
    background-color: ${_.colorOrange};
    color: ${_.colorWhite};
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
      background-color: ${_.colorOrange1};
    }
  }
`;u().format("YYYY-MM-DD");const jo=si().shape({name:Ce().min(2,"Too Short!").required("Name is required"),email:Ce().email("Invalid email address").required("Email is required"),height:we().label("Height").min(150,"Height must be a number greater than or equal to 150").required("Height is required"),currentWeight:we().label("Current Weight").min(35,"Current Weight must be a number greater than or equal to 35").required("Current Weight is required"),desiredWeight:we().label("Desired Weight").min(35,"Desired Weight must be a number greater than or equal to 35").required("Desired Weight is required"),blood:we().label("Blood Type").oneOf([1,2,3,4,"1","2","3","4"],"Invalid Blood Type").required("Blood Type is required"),sex:Ce().label("Gender").oneOf(["male","female"],"Invalid Gender").required("Gender is required"),levelActivity:we().label("Level of Activity").oneOf([1,2,3,4,5,"1","2","3","4","5"],"Invalid Level of Activity").required("Level of Activity is required"),birthday:Ce().label("Date of Birth").typeError("Invalid Date!")}),No=({profile:e,refreshUserData:t})=>{const r=Kt(),[i,s]=be.useState(e),[a,n]=be.useState(null),[d,m]=be.useState(!1),x=async()=>{try{const c=await r(Qr());c.payload.birthday===void 0&&(c.payload.birthday=""),s(c.payload),t(c.payload)}catch(c){console.error("Error fetching user data:",c)}};be.useEffect(()=>{x()},[]);const T=c=>{m(!0),console.log(c);try{const R=r(Xr(c));console.log(R)}catch(R){console.error("Error fetching user data:",R)}return setTimeout(()=>{m(!1)},3e3),!1};return o.jsx(Do,{children:o.jsx(ai,{initialValues:i,enableReinitialize:!0,validationSchema:jo,onSubmit:T,children:c=>o.jsxs(ni,{children:[o.jsxs(Mo,{children:[o.jsxs(Yo,{children:[o.jsxs(Jt,{children:["Name",o.jsx(Qt,{name:"name",placeholder:"Mike",type:"text",onChange:c.handleChange,value:c.values.name}),o.jsx(Z,{name:"name",component:"div"})]}),o.jsxs(Jt,{children:["Email",o.jsx(Qt,{name:"email",placeholder:"jane@acme.com",type:"email",onChange:c.handleChange,value:c.values.email}),o.jsx(Z,{name:"email",component:"div"})]})]}),o.jsxs(Oo,{children:[o.jsxs(Le,{children:["Height",o.jsx(ct,{name:"height",placeholder:"0",type:"number",onChange:c.handleChange,value:c.values.height}),o.jsx(Z,{name:"height",component:"div"})]}),o.jsxs(Le,{children:["Current Weight",o.jsx(ct,{name:"currentWeight",placeholder:"0",type:"number",onChange:c.handleChange,value:c.values.currentWeight}),o.jsx(Z,{name:"currentWeight",component:"div"})]}),o.jsxs(Le,{children:["Desired Weight",o.jsx(ct,{name:"desiredWeight",placeholder:"0",type:"number",onChange:c.handleChange,value:c.values.desiredWeight}),o.jsx(Z,{name:"desiredWeight",component:"div"})]}),o.jsxs(Le,{children:["Date of birth",o.jsx(To,{selected:a,onChange:R=>{n(R),c.handleChange,c.values.birthday=R,c.setFieldTouched},dateFormat:"MM.dd.yyyy",placeholderText:"00.00.00",name:"birthday",value:c.values.birthday}),o.jsx(Z,{name:"birthday",component:"div"})]})]}),o.jsxs(Xt,{children:[o.jsxs("div",{role:"group","aria-labelledby":"bloodLevel",children:[o.jsx(Z,{name:"blood",component:"div"}),o.jsxs(Wo,{children:["Blood",o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"blood",value:"1",onChange:c.handleChange,checked:c.values.blood==="1"||c.values.blood===1}),"1"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"blood",value:"2",onChange:c.handleChange,checked:c.values.blood==="2"||c.values.blood===2}),"2"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"blood",value:"3",onChange:c.handleChange,checked:c.values.blood==="3"||c.values.blood===3}),"3"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"blood",value:"4",onChange:c.handleChange,checked:c.values.blood==="4"||c.values.blood===4}),"4"]})]})]}),o.jsxs("div",{role:"group","aria-labelledby":"genderType",children:[o.jsx(Z,{name:"sex",component:"div"}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"sex",value:"male",checked:c.values.sex==="male"}),"Male",o.jsx(U,{type:"radio",name:"sex",value:"female",checked:c.values.sex==="female"}),"Female"]})]})]}),o.jsxs(Xt,{role:"group","aria-labelledby":"activityGroup",children:[o.jsx(Z,{name:"levelActivity",component:"div"}),o.jsxs(Ro,{children:[o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"1",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="1"||c.values.levelActivity===1}),"Sedentary lifestyle (little or no physical activity)"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"2",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="2"||c.values.levelActivity===2}),"Light activity (light excercises/sports 1-3 days per week)"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"3",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="3"||c.values.levelActivity===3}),"Moderately active (moderate excercises/sports 2-5 days per week)"," "]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"4",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="4"||c.values.levelActivity===4}),"Very active (intence excercises/sports 6-7 days per week)"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"5",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="5"||c.values.levelActivity===5}),"Extremely active (very strenous exercises/sports and physical work)"]})]})]})]}),o.jsx(Po,{type:"submit",children:"Save"}),d&&Jr.success("Settings updated successfully")]})})})},Co=p.div`
  padding-top: 72px;
`,Fo=p.div`
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
`;class $o extends be.Component{constructor(){super(...arguments);st(this,"state",{profile:{name:"Jane",email:"",height:0,currentWeight:0,desiredWeight:0,blood:"1",sex:"female",levelActivity:"1",avatarURL:"",birthday:""}});st(this,"refreshProfileState",r=>{this.setState({profile:r})})}render(){return o.jsx(Kr,{children:o.jsxs(Co,{children:[o.jsx("h1",{children:"Profile Settings"}),o.jsxs(Fo,{children:[o.jsx(No,{profile:this.state.profile,refreshUserData:this.refreshProfileState}),o.jsx(ki,{profile:this.state.profile,refreshUserData:this.refreshProfileState})]})]})})}}export{$o as ProfilePage,$o as default};
