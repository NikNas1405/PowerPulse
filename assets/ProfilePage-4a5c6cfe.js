var Br=Object.defineProperty;var Jr=(e,t,r)=>t in e?Br(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var nt=(e,t,r)=>(Jr(e,typeof t!="symbol"?t+"":t,r),r);import{c as Re,d as kt,Q as ue,s as p,g as _,u as rr,e as Qr,j as o,a as Fe,L as Xr,n as ie,r as De,C as Kr}from"./index-7c9d2b51.js";import{s as ea,e as ta}from"./StyledDatepicker.styled-865899e2.js";import{F as ra,E as aa,c as sa,a as Ue,b as ve,d as ia,e as na}from"./index.esm-64fd01ae.js";import"./warning-f39301a1.js";import"./hoist-non-react-statics.cjs-f0453e1a.js";Re.defaults.baseURL="https://powerpulserver.onrender.com/api";const ar=e=>{Re.defaults.headers.common.Authorization=`Bearer ${e}`},oa=kt("getCurrentUser",async(e,t)=>{try{const a=t.getState().auth.token;if(a===null)return ue.info("Unable to get user"),t.rejectWithValue("Token not available");ar(a);const s=await Re.get("/auth/current");return console.log(s.data.user),s.data.user}catch(r){return ue.error(r.message),t.rejectWithValue(r.message)}}),la=kt("updateUser",async(e,t)=>{try{const a=t.getState().auth.token;return a===null?(ue.info("Unable to get user"),t.rejectWithValue("Token not available")):(ar(a),delete e.avatarURL,delete e.userParams,delete e.createdAt,(await Re.patch("/auth/params",e)).data.user)}catch(r){return ue.error(r.message),t.rejectWithValue(r.message)}}),da=kt("auth/avatar",async(e,t)=>{try{const r=new FormData;r.append("avatar",e);const a=await Re.patch("/auth/avatar",r,{headers:{"content-type":"multipart/form-data"}});return ue.success("Avatar updated"),a.data}catch(r){return ue.error(r.message),t.rejectWithValue(r.message)}}),ua=p.div`
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
`,ha=p.div`
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
`,ca=p.div`
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
`;const fa=p.div`
  display: flex;
  align-items: center;
  align-content: center;
`,ma=p.input`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
`,ya=p.label`
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
`,pa=p.svg`
  width: 24px;
  height: 24px;

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,ga=p.img`
  border-radius: 100%;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`,xa=p.div`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 8px;
`,_a=p.h2`
  color: #efede8;

  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`,wa=p.p`
  color: rgba(239, 237, 232, 0.5);

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,va=p.div`
  display: flex;
  gap: 14px;
  margin: 0 auto;
`,Vt=p.div`
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
`,ot=p.svg`
  @media screen and (min-width: 320px) {
    width: 12px;
    height: 12px;
    fill: ${_.colorWhite};
  }

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,lt=p.div`
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
`,ke=p.div`
  display: flex;
  align-items: baseline;
  gap: 11px;
`,zt=p.p`
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
`,dt=p.span`
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
`,ka=p.div`
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
`;const Sa=p.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;
`,ba=p.p`
  @media screen and (min-width: 768px) {
    width: 330px;
  }

  @media screen and (min-width: 1440px) {
    width: 330px;
  }
`,Da=({profile:e,refreshUserData:t})=>{const r=rr(),a=Qr(ea),s=i=>{try{const n=r(da(i.target.files[0]));e.avatarURL=URL.createObjectURL(i.target.files[0]),t(e)}catch(n){console.error("error ava update:",n)}return i.target.value};return o.jsxs(ua,{children:[o.jsxs(ha,{children:[o.jsx(ca,{children:o.jsx(fa,{children:o.jsx(ma,{type:"file",accept:"image/*",id:"file-input",src:e.avatarURL,alt:"User Avatar",onChange:i=>{s(i)},onClick:i=>{i.target.value=null}})})}),o.jsx(ya,{htmlFor:"file-input",children:o.jsx(pa,{children:o.jsx("use",{href:Fe+"#icon-check-mark-1"})})}),o.jsx("div",{children:o.jsx(ga,{src:e.avatarURL,alt:"User Avatar"})})]}),o.jsxs(xa,{children:[o.jsx(_a,{children:e.name}),o.jsx(wa,{children:"User"})]}),o.jsxs(va,{children:[o.jsxs(Vt,{children:[o.jsxs(ke,{children:[o.jsx(lt,{children:o.jsx(ot,{children:o.jsx("use",{href:`${Fe}#icon-fluent_food-24-filled`})})}),o.jsx(dt,{children:" Daily calorie intake"})]}),o.jsx(ke,{children:o.jsx(zt,{children:a?a.caloriesIntake:0})})]}),o.jsxs(Vt,{children:[o.jsxs(ke,{children:[o.jsx(lt,{children:o.jsx(ot,{children:o.jsx("use",{href:`${Fe}#icon-dumbbell`})})}),o.jsx(dt,{children:" Daily physical activity"})]}),o.jsxs(ke,{children:[o.jsx(zt,{children:"110"}),o.jsx(dt,{children:"min"})]})]})]}),o.jsx(ka,{children:o.jsxs(ke,{children:[o.jsx(lt,{children:o.jsx(ot,{children:o.jsx("use",{href:`${Fe}#exclamation-mark`})})}),o.jsx(ba,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})}),o.jsx(Sa,{children:o.jsx(Xr,{})})]})};//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var sr;function d(){return sr.apply(null,arguments)}function Ma(e){sr=e}function A(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function de(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function v(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function St(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(v(e,t))return!1;return!0}function j(e){return e===void 0}function ee(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function je(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function ir(e,t){var r=[],a,s=e.length;for(a=0;a<s;++a)r.push(t(e[a],a));return r}function ae(e,t){for(var r in t)v(t,r)&&(e[r]=t[r]);return v(t,"toString")&&(e.toString=t.toString),v(t,"valueOf")&&(e.valueOf=t.valueOf),e}function V(e,t,r,a){return Or(e,t,r,a,!0).utc()}function Ya(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function y(e){return e._pf==null&&(e._pf=Ya()),e._pf}var yt;Array.prototype.some?yt=Array.prototype.some:yt=function(e){var t=Object(this),r=t.length>>>0,a;for(a=0;a<r;a++)if(a in t&&e.call(this,t[a],a,t))return!0;return!1};function bt(e){var t=null,r=!1,a=e._d&&!isNaN(e._d.getTime());if(a&&(t=y(e),r=yt.call(t.parsedDateParts,function(s){return s!=null}),a=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&r),e._strict&&(a=a&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=a;else return a;return e._isValid}function Be(e){var t=V(NaN);return e!=null?ae(y(t),e):y(t).userInvalidated=!0,t}var qt=d.momentProperties=[],ut=!1;function Dt(e,t){var r,a,s,i=qt.length;if(j(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),j(t._i)||(e._i=t._i),j(t._f)||(e._f=t._f),j(t._l)||(e._l=t._l),j(t._strict)||(e._strict=t._strict),j(t._tzm)||(e._tzm=t._tzm),j(t._isUTC)||(e._isUTC=t._isUTC),j(t._offset)||(e._offset=t._offset),j(t._pf)||(e._pf=y(t)),j(t._locale)||(e._locale=t._locale),i>0)for(r=0;r<i;r++)a=qt[r],s=t[a],j(s)||(e[a]=s);return e}function Pe(e){Dt(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),ut===!1&&(ut=!0,d.updateOffset(this),ut=!1)}function I(e){return e instanceof Pe||e!=null&&e._isAMomentObject!=null}function nr(e){d.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function C(e,t){var r=!0;return ae(function(){if(d.deprecationHandler!=null&&d.deprecationHandler(null,e),r){var a=[],s,i,n,u=arguments.length;for(i=0;i<u;i++){if(s="",typeof arguments[i]=="object"){s+=`
[`+i+"] ";for(n in arguments[0])v(arguments[0],n)&&(s+=n+": "+arguments[0][n]+", ");s=s.slice(0,-2)}else s=arguments[i];a.push(s)}nr(e+`
Arguments: `+Array.prototype.slice.call(a).join("")+`
`+new Error().stack),r=!1}return t.apply(this,arguments)},t)}var Zt={};function or(e,t){d.deprecationHandler!=null&&d.deprecationHandler(e,t),Zt[e]||(nr(t),Zt[e]=!0)}d.suppressDeprecationWarnings=!1;d.deprecationHandler=null;function z(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Oa(e){var t,r;for(r in e)v(e,r)&&(t=e[r],z(t)?this[r]=t:this["_"+r]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function pt(e,t){var r=ae({},e),a;for(a in t)v(t,a)&&(de(e[a])&&de(t[a])?(r[a]={},ae(r[a],e[a]),ae(r[a],t[a])):t[a]!=null?r[a]=t[a]:delete r[a]);for(a in e)v(e,a)&&!v(t,a)&&de(e[a])&&(r[a]=ae({},r[a]));return r}function Mt(e){e!=null&&this.set(e)}var gt;Object.keys?gt=Object.keys:gt=function(e){var t,r=[];for(t in e)v(e,t)&&r.push(t);return r};var Ta={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Wa(e,t,r){var a=this._calendar[e]||this._calendar.sameElse;return z(a)?a.call(t,r):a}function G(e,t,r){var a=""+Math.abs(e),s=t-a.length,i=e>=0;return(i?r?"+":"":"-")+Math.pow(10,Math.max(0,s)).toString().substr(1)+a}var Yt=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Le=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ht={},ye={};function f(e,t,r,a){var s=a;typeof a=="string"&&(s=function(){return this[a]()}),e&&(ye[e]=s),t&&(ye[t[0]]=function(){return G(s.apply(this,arguments),t[1],t[2])}),r&&(ye[r]=function(){return this.localeData().ordinal(s.apply(this,arguments),e)})}function Ra(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function ja(e){var t=e.match(Yt),r,a;for(r=0,a=t.length;r<a;r++)ye[t[r]]?t[r]=ye[t[r]]:t[r]=Ra(t[r]);return function(s){var i="",n;for(n=0;n<a;n++)i+=z(t[n])?t[n].call(s,e):t[n];return i}}function Ee(e,t){return e.isValid()?(t=lr(t,e.localeData()),ht[t]=ht[t]||ja(t),ht[t](e)):e.localeData().invalidDate()}function lr(e,t){var r=5;function a(s){return t.longDateFormat(s)||s}for(Le.lastIndex=0;r>=0&&Le.test(e);)e=e.replace(Le,a),Le.lastIndex=0,r-=1;return e}var Pa={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Na(e){var t=this._longDateFormat[e],r=this._longDateFormat[e.toUpperCase()];return t||!r?t:(this._longDateFormat[e]=r.match(Yt).map(function(a){return a==="MMMM"||a==="MM"||a==="DD"||a==="dddd"?a.slice(1):a}).join(""),this._longDateFormat[e])}var Ca="Invalid date";function Fa(){return this._invalidDate}var Ua="%d",La=/\d{1,2}/;function Aa(e){return this._ordinal.replace("%d",e)}var Ia={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Ea(e,t,r,a){var s=this._relativeTime[r];return z(s)?s(e,t,r,a):s.replace(/%d/i,e)}function Ha(e,t){var r=this._relativeTime[e>0?"future":"past"];return z(r)?r(t):r.replace(/%s/i,t)}var Bt={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function F(e){return typeof e=="string"?Bt[e]||Bt[e.toLowerCase()]:void 0}function Ot(e){var t={},r,a;for(a in e)v(e,a)&&(r=F(a),r&&(t[r]=e[a]));return t}var $a={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Ga(e){var t=[],r;for(r in e)v(e,r)&&t.push({unit:r,priority:$a[r]});return t.sort(function(a,s){return a.priority-s.priority}),t}var dr=/\d/,P=/\d\d/,ur=/\d{3}/,Tt=/\d{4}/,Je=/[+-]?\d{6}/,D=/\d\d?/,hr=/\d\d\d\d?/,cr=/\d\d\d\d\d\d?/,Qe=/\d{1,3}/,Wt=/\d{1,4}/,Xe=/[+-]?\d{1,6}/,xe=/\d+/,Ke=/[+-]?\d+/,Va=/Z|[+-]\d\d:?\d\d/gi,et=/Z|[+-]\d\d(?::?\d\d)?/gi,za=/[+-]?\d+(\.\d{1,3})?/,Ne=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,_e=/^[1-9]\d?/,Rt=/^([1-9]\d|\d)/,Ge;Ge={};function h(e,t,r){Ge[e]=z(t)?t:function(a,s){return a&&r?r:t}}function qa(e,t){return v(Ge,e)?Ge[e](t._strict,t._locale):new RegExp(Za(e))}function Za(e){return X(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,r,a,s,i){return r||a||s||i}))}function X(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function N(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function x(e){var t=+e,r=0;return t!==0&&isFinite(t)&&(r=N(t)),r}var xt={};function S(e,t){var r,a=t,s;for(typeof e=="string"&&(e=[e]),ee(t)&&(a=function(i,n){n[t]=x(i)}),s=e.length,r=0;r<s;r++)xt[e[r]]=a}function Ce(e,t){S(e,function(r,a,s,i){s._w=s._w||{},t(r,s._w,s,i)})}function Ba(e,t,r){t!=null&&v(xt,e)&&xt[e](t,r._a,r,e)}function tt(e){return e%4===0&&e%100!==0||e%400===0}var W=0,J=1,$=2,O=3,L=4,Q=5,le=6,Ja=7,Qa=8;f("Y",0,0,function(){var e=this.year();return e<=9999?G(e,4):"+"+e});f(0,["YY",2],0,function(){return this.year()%100});f(0,["YYYY",4],0,"year");f(0,["YYYYY",5],0,"year");f(0,["YYYYYY",6,!0],0,"year");h("Y",Ke);h("YY",D,P);h("YYYY",Wt,Tt);h("YYYYY",Xe,Je);h("YYYYYY",Xe,Je);S(["YYYYY","YYYYYY"],W);S("YYYY",function(e,t){t[W]=e.length===2?d.parseTwoDigitYear(e):x(e)});S("YY",function(e,t){t[W]=d.parseTwoDigitYear(e)});S("Y",function(e,t){t[W]=parseInt(e,10)});function Me(e){return tt(e)?366:365}d.parseTwoDigitYear=function(e){return x(e)+(x(e)>68?1900:2e3)};var fr=we("FullYear",!0);function Xa(){return tt(this.year())}function we(e,t){return function(r){return r!=null?(mr(this,e,r),d.updateOffset(this,t),this):Ye(this,e)}}function Ye(e,t){if(!e.isValid())return NaN;var r=e._d,a=e._isUTC;switch(t){case"Milliseconds":return a?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return a?r.getUTCSeconds():r.getSeconds();case"Minutes":return a?r.getUTCMinutes():r.getMinutes();case"Hours":return a?r.getUTCHours():r.getHours();case"Date":return a?r.getUTCDate():r.getDate();case"Day":return a?r.getUTCDay():r.getDay();case"Month":return a?r.getUTCMonth():r.getMonth();case"FullYear":return a?r.getUTCFullYear():r.getFullYear();default:return NaN}}function mr(e,t,r){var a,s,i,n,u;if(!(!e.isValid()||isNaN(r))){switch(a=e._d,s=e._isUTC,t){case"Milliseconds":return void(s?a.setUTCMilliseconds(r):a.setMilliseconds(r));case"Seconds":return void(s?a.setUTCSeconds(r):a.setSeconds(r));case"Minutes":return void(s?a.setUTCMinutes(r):a.setMinutes(r));case"Hours":return void(s?a.setUTCHours(r):a.setHours(r));case"Date":return void(s?a.setUTCDate(r):a.setDate(r));case"FullYear":break;default:return}i=r,n=e.month(),u=e.date(),u=u===29&&n===1&&!tt(i)?28:u,s?a.setUTCFullYear(i,n,u):a.setFullYear(i,n,u)}}function Ka(e){return e=F(e),z(this[e])?this[e]():this}function es(e,t){if(typeof e=="object"){e=Ot(e);var r=Ga(e),a,s=r.length;for(a=0;a<s;a++)this[r[a].unit](e[r[a].unit])}else if(e=F(e),z(this[e]))return this[e](t);return this}function ts(e,t){return(e%t+t)%t}var Y;Array.prototype.indexOf?Y=Array.prototype.indexOf:Y=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function jt(e,t){if(isNaN(e)||isNaN(t))return NaN;var r=ts(t,12);return e+=(t-r)/12,r===1?tt(e)?29:28:31-r%7%2}f("M",["MM",2],"Mo",function(){return this.month()+1});f("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});f("MMMM",0,0,function(e){return this.localeData().months(this,e)});h("M",D,_e);h("MM",D,P);h("MMM",function(e,t){return t.monthsShortRegex(e)});h("MMMM",function(e,t){return t.monthsRegex(e)});S(["M","MM"],function(e,t){t[J]=x(e)-1});S(["MMM","MMMM"],function(e,t,r,a){var s=r._locale.monthsParse(e,a,r._strict);s!=null?t[J]=s:y(r).invalidMonth=e});var rs="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),yr="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),pr=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,as=Ne,ss=Ne;function is(e,t){return e?A(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||pr).test(t)?"format":"standalone"][e.month()]:A(this._months)?this._months:this._months.standalone}function ns(e,t){return e?A(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[pr.test(t)?"format":"standalone"][e.month()]:A(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function os(e,t,r){var a,s,i,n=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],a=0;a<12;++a)i=V([2e3,a]),this._shortMonthsParse[a]=this.monthsShort(i,"").toLocaleLowerCase(),this._longMonthsParse[a]=this.months(i,"").toLocaleLowerCase();return r?t==="MMM"?(s=Y.call(this._shortMonthsParse,n),s!==-1?s:null):(s=Y.call(this._longMonthsParse,n),s!==-1?s:null):t==="MMM"?(s=Y.call(this._shortMonthsParse,n),s!==-1?s:(s=Y.call(this._longMonthsParse,n),s!==-1?s:null)):(s=Y.call(this._longMonthsParse,n),s!==-1?s:(s=Y.call(this._shortMonthsParse,n),s!==-1?s:null))}function ls(e,t,r){var a,s,i;if(this._monthsParseExact)return os.call(this,e,t,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),a=0;a<12;a++){if(s=V([2e3,a]),r&&!this._longMonthsParse[a]&&(this._longMonthsParse[a]=new RegExp("^"+this.months(s,"").replace(".","")+"$","i"),this._shortMonthsParse[a]=new RegExp("^"+this.monthsShort(s,"").replace(".","")+"$","i")),!r&&!this._monthsParse[a]&&(i="^"+this.months(s,"")+"|^"+this.monthsShort(s,""),this._monthsParse[a]=new RegExp(i.replace(".",""),"i")),r&&t==="MMMM"&&this._longMonthsParse[a].test(e))return a;if(r&&t==="MMM"&&this._shortMonthsParse[a].test(e))return a;if(!r&&this._monthsParse[a].test(e))return a}}function gr(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=x(t);else if(t=e.localeData().monthsParse(t),!ee(t))return e}var r=t,a=e.date();return a=a<29?a:Math.min(a,jt(e.year(),r)),e._isUTC?e._d.setUTCMonth(r,a):e._d.setMonth(r,a),e}function xr(e){return e!=null?(gr(this,e),d.updateOffset(this,!0),this):Ye(this,"Month")}function ds(){return jt(this.year(),this.month())}function us(e){return this._monthsParseExact?(v(this,"_monthsRegex")||_r.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(v(this,"_monthsShortRegex")||(this._monthsShortRegex=as),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function hs(e){return this._monthsParseExact?(v(this,"_monthsRegex")||_r.call(this),e?this._monthsStrictRegex:this._monthsRegex):(v(this,"_monthsRegex")||(this._monthsRegex=ss),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function _r(){function e(m,g){return g.length-m.length}var t=[],r=[],a=[],s,i,n,u;for(s=0;s<12;s++)i=V([2e3,s]),n=X(this.monthsShort(i,"")),u=X(this.months(i,"")),t.push(n),r.push(u),a.push(u),a.push(n);t.sort(e),r.sort(e),a.sort(e),this._monthsRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function cs(e,t,r,a,s,i,n){var u;return e<100&&e>=0?(u=new Date(e+400,t,r,a,s,i,n),isFinite(u.getFullYear())&&u.setFullYear(e)):u=new Date(e,t,r,a,s,i,n),u}function Oe(e){var t,r;return e<100&&e>=0?(r=Array.prototype.slice.call(arguments),r[0]=e+400,t=new Date(Date.UTC.apply(null,r)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Ve(e,t,r){var a=7+t-r,s=(7+Oe(e,0,a).getUTCDay()-t)%7;return-s+a-1}function wr(e,t,r,a,s){var i=(7+r-a)%7,n=Ve(e,a,s),u=1+7*(t-1)+i+n,m,g;return u<=0?(m=e-1,g=Me(m)+u):u>Me(e)?(m=e+1,g=u-Me(e)):(m=e,g=u),{year:m,dayOfYear:g}}function Te(e,t,r){var a=Ve(e.year(),t,r),s=Math.floor((e.dayOfYear()-a-1)/7)+1,i,n;return s<1?(n=e.year()-1,i=s+K(n,t,r)):s>K(e.year(),t,r)?(i=s-K(e.year(),t,r),n=e.year()+1):(n=e.year(),i=s),{week:i,year:n}}function K(e,t,r){var a=Ve(e,t,r),s=Ve(e+1,t,r);return(Me(e)-a+s)/7}f("w",["ww",2],"wo","week");f("W",["WW",2],"Wo","isoWeek");h("w",D,_e);h("ww",D,P);h("W",D,_e);h("WW",D,P);Ce(["w","ww","W","WW"],function(e,t,r,a){t[a.substr(0,1)]=x(e)});function fs(e){return Te(e,this._week.dow,this._week.doy).week}var ms={dow:0,doy:6};function ys(){return this._week.dow}function ps(){return this._week.doy}function gs(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function xs(e){var t=Te(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}f("d",0,"do","day");f("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});f("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});f("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});f("e",0,0,"weekday");f("E",0,0,"isoWeekday");h("d",D);h("e",D);h("E",D);h("dd",function(e,t){return t.weekdaysMinRegex(e)});h("ddd",function(e,t){return t.weekdaysShortRegex(e)});h("dddd",function(e,t){return t.weekdaysRegex(e)});Ce(["dd","ddd","dddd"],function(e,t,r,a){var s=r._locale.weekdaysParse(e,a,r._strict);s!=null?t.d=s:y(r).invalidWeekday=e});Ce(["d","e","E"],function(e,t,r,a){t[a]=x(e)});function _s(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function ws(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Pt(e,t){return e.slice(t,7).concat(e.slice(0,t))}var vs="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),vr="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),ks="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Ss=Ne,bs=Ne,Ds=Ne;function Ms(e,t){var r=A(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?Pt(r,this._week.dow):e?r[e.day()]:r}function Ys(e){return e===!0?Pt(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Os(e){return e===!0?Pt(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Ts(e,t,r){var a,s,i,n=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],a=0;a<7;++a)i=V([2e3,1]).day(a),this._minWeekdaysParse[a]=this.weekdaysMin(i,"").toLocaleLowerCase(),this._shortWeekdaysParse[a]=this.weekdaysShort(i,"").toLocaleLowerCase(),this._weekdaysParse[a]=this.weekdays(i,"").toLocaleLowerCase();return r?t==="dddd"?(s=Y.call(this._weekdaysParse,n),s!==-1?s:null):t==="ddd"?(s=Y.call(this._shortWeekdaysParse,n),s!==-1?s:null):(s=Y.call(this._minWeekdaysParse,n),s!==-1?s:null):t==="dddd"?(s=Y.call(this._weekdaysParse,n),s!==-1||(s=Y.call(this._shortWeekdaysParse,n),s!==-1)?s:(s=Y.call(this._minWeekdaysParse,n),s!==-1?s:null)):t==="ddd"?(s=Y.call(this._shortWeekdaysParse,n),s!==-1||(s=Y.call(this._weekdaysParse,n),s!==-1)?s:(s=Y.call(this._minWeekdaysParse,n),s!==-1?s:null)):(s=Y.call(this._minWeekdaysParse,n),s!==-1||(s=Y.call(this._weekdaysParse,n),s!==-1)?s:(s=Y.call(this._shortWeekdaysParse,n),s!==-1?s:null))}function Ws(e,t,r){var a,s,i;if(this._weekdaysParseExact)return Ts.call(this,e,t,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),a=0;a<7;a++){if(s=V([2e3,1]).day(a),r&&!this._fullWeekdaysParse[a]&&(this._fullWeekdaysParse[a]=new RegExp("^"+this.weekdays(s,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[a]=new RegExp("^"+this.weekdaysShort(s,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[a]=new RegExp("^"+this.weekdaysMin(s,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[a]||(i="^"+this.weekdays(s,"")+"|^"+this.weekdaysShort(s,"")+"|^"+this.weekdaysMin(s,""),this._weekdaysParse[a]=new RegExp(i.replace(".",""),"i")),r&&t==="dddd"&&this._fullWeekdaysParse[a].test(e))return a;if(r&&t==="ddd"&&this._shortWeekdaysParse[a].test(e))return a;if(r&&t==="dd"&&this._minWeekdaysParse[a].test(e))return a;if(!r&&this._weekdaysParse[a].test(e))return a}}function Rs(e){if(!this.isValid())return e!=null?this:NaN;var t=Ye(this,"Day");return e!=null?(e=_s(e,this.localeData()),this.add(e-t,"d")):t}function js(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function Ps(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=ws(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function Ns(e){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||Nt.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(v(this,"_weekdaysRegex")||(this._weekdaysRegex=Ss),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Cs(e){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||Nt.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(v(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=bs),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Fs(e){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||Nt.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(v(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ds),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Nt(){function e(T,c){return c.length-T.length}var t=[],r=[],a=[],s=[],i,n,u,m,g;for(i=0;i<7;i++)n=V([2e3,1]).day(i),u=X(this.weekdaysMin(n,"")),m=X(this.weekdaysShort(n,"")),g=X(this.weekdays(n,"")),t.push(u),r.push(m),a.push(g),s.push(u),s.push(m),s.push(g);t.sort(e),r.sort(e),a.sort(e),s.sort(e),this._weekdaysRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function Ct(){return this.hours()%12||12}function Us(){return this.hours()||24}f("H",["HH",2],0,"hour");f("h",["hh",2],0,Ct);f("k",["kk",2],0,Us);f("hmm",0,0,function(){return""+Ct.apply(this)+G(this.minutes(),2)});f("hmmss",0,0,function(){return""+Ct.apply(this)+G(this.minutes(),2)+G(this.seconds(),2)});f("Hmm",0,0,function(){return""+this.hours()+G(this.minutes(),2)});f("Hmmss",0,0,function(){return""+this.hours()+G(this.minutes(),2)+G(this.seconds(),2)});function kr(e,t){f(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}kr("a",!0);kr("A",!1);function Sr(e,t){return t._meridiemParse}h("a",Sr);h("A",Sr);h("H",D,Rt);h("h",D,_e);h("k",D,_e);h("HH",D,P);h("hh",D,P);h("kk",D,P);h("hmm",hr);h("hmmss",cr);h("Hmm",hr);h("Hmmss",cr);S(["H","HH"],O);S(["k","kk"],function(e,t,r){var a=x(e);t[O]=a===24?0:a});S(["a","A"],function(e,t,r){r._isPm=r._locale.isPM(e),r._meridiem=e});S(["h","hh"],function(e,t,r){t[O]=x(e),y(r).bigHour=!0});S("hmm",function(e,t,r){var a=e.length-2;t[O]=x(e.substr(0,a)),t[L]=x(e.substr(a)),y(r).bigHour=!0});S("hmmss",function(e,t,r){var a=e.length-4,s=e.length-2;t[O]=x(e.substr(0,a)),t[L]=x(e.substr(a,2)),t[Q]=x(e.substr(s)),y(r).bigHour=!0});S("Hmm",function(e,t,r){var a=e.length-2;t[O]=x(e.substr(0,a)),t[L]=x(e.substr(a))});S("Hmmss",function(e,t,r){var a=e.length-4,s=e.length-2;t[O]=x(e.substr(0,a)),t[L]=x(e.substr(a,2)),t[Q]=x(e.substr(s))});function Ls(e){return(e+"").toLowerCase().charAt(0)==="p"}var As=/[ap]\.?m?\.?/i,Is=we("Hours",!0);function Es(e,t,r){return e>11?r?"pm":"PM":r?"am":"AM"}var br={calendar:Ta,longDateFormat:Pa,invalidDate:Ca,ordinal:Ua,dayOfMonthOrdinalParse:La,relativeTime:Ia,months:rs,monthsShort:yr,week:ms,weekdays:vs,weekdaysMin:ks,weekdaysShort:vr,meridiemParse:As},M={},Se={},We;function Hs(e,t){var r,a=Math.min(e.length,t.length);for(r=0;r<a;r+=1)if(e[r]!==t[r])return r;return a}function Jt(e){return e&&e.toLowerCase().replace("_","-")}function $s(e){for(var t=0,r,a,s,i;t<e.length;){for(i=Jt(e[t]).split("-"),r=i.length,a=Jt(e[t+1]),a=a?a.split("-"):null;r>0;){if(s=rt(i.slice(0,r).join("-")),s)return s;if(a&&a.length>=r&&Hs(i,a)>=r-1)break;r--}t++}return We}function Gs(e){return!!(e&&e.match("^[^/\\\\]*$"))}function rt(e){var t=null,r;if(M[e]===void 0&&typeof module<"u"&&module&&module.exports&&Gs(e))try{t=We._abbr,r=require,r("./locale/"+e),ne(t)}catch{M[e]=null}return M[e]}function ne(e,t){var r;return e&&(j(t)?r=te(e):r=Ft(e,t),r?We=r:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),We._abbr}function Ft(e,t){if(t!==null){var r,a=br;if(t.abbr=e,M[e]!=null)or("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),a=M[e]._config;else if(t.parentLocale!=null)if(M[t.parentLocale]!=null)a=M[t.parentLocale]._config;else if(r=rt(t.parentLocale),r!=null)a=r._config;else return Se[t.parentLocale]||(Se[t.parentLocale]=[]),Se[t.parentLocale].push({name:e,config:t}),null;return M[e]=new Mt(pt(a,t)),Se[e]&&Se[e].forEach(function(s){Ft(s.name,s.config)}),ne(e),M[e]}else return delete M[e],null}function Vs(e,t){if(t!=null){var r,a,s=br;M[e]!=null&&M[e].parentLocale!=null?M[e].set(pt(M[e]._config,t)):(a=rt(e),a!=null&&(s=a._config),t=pt(s,t),a==null&&(t.abbr=e),r=new Mt(t),r.parentLocale=M[e],M[e]=r),ne(e)}else M[e]!=null&&(M[e].parentLocale!=null?(M[e]=M[e].parentLocale,e===ne()&&ne(e)):M[e]!=null&&delete M[e]);return M[e]}function te(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return We;if(!A(e)){if(t=rt(e),t)return t;e=[e]}return $s(e)}function zs(){return gt(M)}function Ut(e){var t,r=e._a;return r&&y(e).overflow===-2&&(t=r[J]<0||r[J]>11?J:r[$]<1||r[$]>jt(r[W],r[J])?$:r[O]<0||r[O]>24||r[O]===24&&(r[L]!==0||r[Q]!==0||r[le]!==0)?O:r[L]<0||r[L]>59?L:r[Q]<0||r[Q]>59?Q:r[le]<0||r[le]>999?le:-1,y(e)._overflowDayOfYear&&(t<W||t>$)&&(t=$),y(e)._overflowWeeks&&t===-1&&(t=Ja),y(e)._overflowWeekday&&t===-1&&(t=Qa),y(e).overflow=t),e}var qs=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Zs=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Bs=/Z|[+-]\d\d(?::?\d\d)?/,Ae=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],ct=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Js=/^\/?Date\((-?\d+)/i,Qs=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Xs={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Dr(e){var t,r,a=e._i,s=qs.exec(a)||Zs.exec(a),i,n,u,m,g=Ae.length,T=ct.length;if(s){for(y(e).iso=!0,t=0,r=g;t<r;t++)if(Ae[t][1].exec(s[1])){n=Ae[t][0],i=Ae[t][2]!==!1;break}if(n==null){e._isValid=!1;return}if(s[3]){for(t=0,r=T;t<r;t++)if(ct[t][1].exec(s[3])){u=(s[2]||" ")+ct[t][0];break}if(u==null){e._isValid=!1;return}}if(!i&&u!=null){e._isValid=!1;return}if(s[4])if(Bs.exec(s[4]))m="Z";else{e._isValid=!1;return}e._f=n+(u||"")+(m||""),At(e)}else e._isValid=!1}function Ks(e,t,r,a,s,i){var n=[ei(e),yr.indexOf(t),parseInt(r,10),parseInt(a,10),parseInt(s,10)];return i&&n.push(parseInt(i,10)),n}function ei(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function ti(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function ri(e,t,r){if(e){var a=vr.indexOf(e),s=new Date(t[0],t[1],t[2]).getDay();if(a!==s)return y(r).weekdayMismatch=!0,r._isValid=!1,!1}return!0}function ai(e,t,r){if(e)return Xs[e];if(t)return 0;var a=parseInt(r,10),s=a%100,i=(a-s)/100;return i*60+s}function Mr(e){var t=Qs.exec(ti(e._i)),r;if(t){if(r=Ks(t[4],t[3],t[2],t[5],t[6],t[7]),!ri(t[1],r,e))return;e._a=r,e._tzm=ai(t[8],t[9],t[10]),e._d=Oe.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),y(e).rfc2822=!0}else e._isValid=!1}function si(e){var t=Js.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(Dr(e),e._isValid===!1)delete e._isValid;else return;if(Mr(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:d.createFromInputFallback(e)}d.createFromInputFallback=C("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function fe(e,t,r){return e??t??r}function ii(e){var t=new Date(d.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Lt(e){var t,r,a=[],s,i,n;if(!e._d){for(s=ii(e),e._w&&e._a[$]==null&&e._a[J]==null&&ni(e),e._dayOfYear!=null&&(n=fe(e._a[W],s[W]),(e._dayOfYear>Me(n)||e._dayOfYear===0)&&(y(e)._overflowDayOfYear=!0),r=Oe(n,0,e._dayOfYear),e._a[J]=r.getUTCMonth(),e._a[$]=r.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=a[t]=s[t];for(;t<7;t++)e._a[t]=a[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[O]===24&&e._a[L]===0&&e._a[Q]===0&&e._a[le]===0&&(e._nextDay=!0,e._a[O]=0),e._d=(e._useUTC?Oe:cs).apply(null,a),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[O]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==i&&(y(e).weekdayMismatch=!0)}}function ni(e){var t,r,a,s,i,n,u,m,g;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(i=1,n=4,r=fe(t.GG,e._a[W],Te(b(),1,4).year),a=fe(t.W,1),s=fe(t.E,1),(s<1||s>7)&&(m=!0)):(i=e._locale._week.dow,n=e._locale._week.doy,g=Te(b(),i,n),r=fe(t.gg,e._a[W],g.year),a=fe(t.w,g.week),t.d!=null?(s=t.d,(s<0||s>6)&&(m=!0)):t.e!=null?(s=t.e+i,(t.e<0||t.e>6)&&(m=!0)):s=i),a<1||a>K(r,i,n)?y(e)._overflowWeeks=!0:m!=null?y(e)._overflowWeekday=!0:(u=wr(r,a,s,i,n),e._a[W]=u.year,e._dayOfYear=u.dayOfYear)}d.ISO_8601=function(){};d.RFC_2822=function(){};function At(e){if(e._f===d.ISO_8601){Dr(e);return}if(e._f===d.RFC_2822){Mr(e);return}e._a=[],y(e).empty=!0;var t=""+e._i,r,a,s,i,n,u=t.length,m=0,g,T;for(s=lr(e._f,e._locale).match(Yt)||[],T=s.length,r=0;r<T;r++)i=s[r],a=(t.match(qa(i,e))||[])[0],a&&(n=t.substr(0,t.indexOf(a)),n.length>0&&y(e).unusedInput.push(n),t=t.slice(t.indexOf(a)+a.length),m+=a.length),ye[i]?(a?y(e).empty=!1:y(e).unusedTokens.push(i),Ba(i,a,e)):e._strict&&!a&&y(e).unusedTokens.push(i);y(e).charsLeftOver=u-m,t.length>0&&y(e).unusedInput.push(t),e._a[O]<=12&&y(e).bigHour===!0&&e._a[O]>0&&(y(e).bigHour=void 0),y(e).parsedDateParts=e._a.slice(0),y(e).meridiem=e._meridiem,e._a[O]=oi(e._locale,e._a[O],e._meridiem),g=y(e).era,g!==null&&(e._a[W]=e._locale.erasConvertYear(g,e._a[W])),Lt(e),Ut(e)}function oi(e,t,r){var a;return r==null?t:e.meridiemHour!=null?e.meridiemHour(t,r):(e.isPM!=null&&(a=e.isPM(r),a&&t<12&&(t+=12),!a&&t===12&&(t=0)),t)}function li(e){var t,r,a,s,i,n,u=!1,m=e._f.length;if(m===0){y(e).invalidFormat=!0,e._d=new Date(NaN);return}for(s=0;s<m;s++)i=0,n=!1,t=Dt({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[s],At(t),bt(t)&&(n=!0),i+=y(t).charsLeftOver,i+=y(t).unusedTokens.length*10,y(t).score=i,u?i<a&&(a=i,r=t):(a==null||i<a||n)&&(a=i,r=t,n&&(u=!0));ae(e,r||t)}function di(e){if(!e._d){var t=Ot(e._i),r=t.day===void 0?t.date:t.day;e._a=ir([t.year,t.month,r,t.hour,t.minute,t.second,t.millisecond],function(a){return a&&parseInt(a,10)}),Lt(e)}}function ui(e){var t=new Pe(Ut(Yr(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Yr(e){var t=e._i,r=e._f;return e._locale=e._locale||te(e._l),t===null||r===void 0&&t===""?Be({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),I(t)?new Pe(Ut(t)):(je(t)?e._d=t:A(r)?li(e):r?At(e):hi(e),bt(e)||(e._d=null),e))}function hi(e){var t=e._i;j(t)?e._d=new Date(d.now()):je(t)?e._d=new Date(t.valueOf()):typeof t=="string"?si(e):A(t)?(e._a=ir(t.slice(0),function(r){return parseInt(r,10)}),Lt(e)):de(t)?di(e):ee(t)?e._d=new Date(t):d.createFromInputFallback(e)}function Or(e,t,r,a,s){var i={};return(t===!0||t===!1)&&(a=t,t=void 0),(r===!0||r===!1)&&(a=r,r=void 0),(de(e)&&St(e)||A(e)&&e.length===0)&&(e=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=s,i._l=r,i._i=e,i._f=t,i._strict=a,ui(i)}function b(e,t,r,a){return Or(e,t,r,a,!1)}var ci=C("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=b.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Be()}),fi=C("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=b.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Be()});function Tr(e,t){var r,a;if(t.length===1&&A(t[0])&&(t=t[0]),!t.length)return b();for(r=t[0],a=1;a<t.length;++a)(!t[a].isValid()||t[a][e](r))&&(r=t[a]);return r}function mi(){var e=[].slice.call(arguments,0);return Tr("isBefore",e)}function yi(){var e=[].slice.call(arguments,0);return Tr("isAfter",e)}var pi=function(){return Date.now?Date.now():+new Date},be=["year","quarter","month","week","day","hour","minute","second","millisecond"];function gi(e){var t,r=!1,a,s=be.length;for(t in e)if(v(e,t)&&!(Y.call(be,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(a=0;a<s;++a)if(e[be[a]]){if(r)return!1;parseFloat(e[be[a]])!==x(e[be[a]])&&(r=!0)}return!0}function xi(){return this._isValid}function _i(){return E(NaN)}function at(e){var t=Ot(e),r=t.year||0,a=t.quarter||0,s=t.month||0,i=t.week||t.isoWeek||0,n=t.day||0,u=t.hour||0,m=t.minute||0,g=t.second||0,T=t.millisecond||0;this._isValid=gi(t),this._milliseconds=+T+g*1e3+m*6e4+u*1e3*60*60,this._days=+n+i*7,this._months=+s+a*3+r*12,this._data={},this._locale=te(),this._bubble()}function He(e){return e instanceof at}function _t(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function wi(e,t,r){var a=Math.min(e.length,t.length),s=Math.abs(e.length-t.length),i=0,n;for(n=0;n<a;n++)(r&&e[n]!==t[n]||!r&&x(e[n])!==x(t[n]))&&i++;return i+s}function Wr(e,t){f(e,0,0,function(){var r=this.utcOffset(),a="+";return r<0&&(r=-r,a="-"),a+G(~~(r/60),2)+t+G(~~r%60,2)})}Wr("Z",":");Wr("ZZ","");h("Z",et);h("ZZ",et);S(["Z","ZZ"],function(e,t,r){r._useUTC=!0,r._tzm=It(et,e)});var vi=/([\+\-]|\d\d)/gi;function It(e,t){var r=(t||"").match(e),a,s,i;return r===null?null:(a=r[r.length-1]||[],s=(a+"").match(vi)||["-",0,0],i=+(s[1]*60)+x(s[2]),i===0?0:s[0]==="+"?i:-i)}function Et(e,t){var r,a;return t._isUTC?(r=t.clone(),a=(I(e)||je(e)?e.valueOf():b(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+a),d.updateOffset(r,!1),r):b(e).local()}function wt(e){return-Math.round(e._d.getTimezoneOffset())}d.updateOffset=function(){};function ki(e,t,r){var a=this._offset||0,s;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=It(et,e),e===null)return this}else Math.abs(e)<16&&!r&&(e=e*60);return!this._isUTC&&t&&(s=wt(this)),this._offset=e,this._isUTC=!0,s!=null&&this.add(s,"m"),a!==e&&(!t||this._changeInProgress?Pr(this,E(e-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,d.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?a:wt(this)}function Si(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function bi(e){return this.utcOffset(0,e)}function Di(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(wt(this),"m")),this}function Mi(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=It(Va,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Yi(e){return this.isValid()?(e=e?b(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Oi(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ti(){if(!j(this._isDSTShifted))return this._isDSTShifted;var e={},t;return Dt(e,this),e=Yr(e),e._a?(t=e._isUTC?V(e._a):b(e._a),this._isDSTShifted=this.isValid()&&wi(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Wi(){return this.isValid()?!this._isUTC:!1}function Ri(){return this.isValid()?this._isUTC:!1}function Rr(){return this.isValid()?this._isUTC&&this._offset===0:!1}var ji=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Pi=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function E(e,t){var r=e,a=null,s,i,n;return He(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:ee(e)||!isNaN(+e)?(r={},t?r[t]=+e:r.milliseconds=+e):(a=ji.exec(e))?(s=a[1]==="-"?-1:1,r={y:0,d:x(a[$])*s,h:x(a[O])*s,m:x(a[L])*s,s:x(a[Q])*s,ms:x(_t(a[le]*1e3))*s}):(a=Pi.exec(e))?(s=a[1]==="-"?-1:1,r={y:oe(a[2],s),M:oe(a[3],s),w:oe(a[4],s),d:oe(a[5],s),h:oe(a[6],s),m:oe(a[7],s),s:oe(a[8],s)}):r==null?r={}:typeof r=="object"&&("from"in r||"to"in r)&&(n=Ni(b(r.from),b(r.to)),r={},r.ms=n.milliseconds,r.M=n.months),i=new at(r),He(e)&&v(e,"_locale")&&(i._locale=e._locale),He(e)&&v(e,"_isValid")&&(i._isValid=e._isValid),i}E.fn=at.prototype;E.invalid=_i;function oe(e,t){var r=e&&parseFloat(e.replace(",","."));return(isNaN(r)?0:r)*t}function Qt(e,t){var r={};return r.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(r.months,"M").isAfter(t)&&--r.months,r.milliseconds=+t-+e.clone().add(r.months,"M"),r}function Ni(e,t){var r;return e.isValid()&&t.isValid()?(t=Et(t,e),e.isBefore(t)?r=Qt(e,t):(r=Qt(t,e),r.milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function jr(e,t){return function(r,a){var s,i;return a!==null&&!isNaN(+a)&&(or(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=r,r=a,a=i),s=E(r,a),Pr(this,s,e),this}}function Pr(e,t,r,a){var s=t._milliseconds,i=_t(t._days),n=_t(t._months);e.isValid()&&(a=a??!0,n&&gr(e,Ye(e,"Month")+n*r),i&&mr(e,"Date",Ye(e,"Date")+i*r),s&&e._d.setTime(e._d.valueOf()+s*r),a&&d.updateOffset(e,i||n))}var Ci=jr(1,"add"),Fi=jr(-1,"subtract");function Nr(e){return typeof e=="string"||e instanceof String}function Ui(e){return I(e)||je(e)||Nr(e)||ee(e)||Ai(e)||Li(e)||e===null||e===void 0}function Li(e){var t=de(e)&&!St(e),r=!1,a=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],s,i,n=a.length;for(s=0;s<n;s+=1)i=a[s],r=r||v(e,i);return t&&r}function Ai(e){var t=A(e),r=!1;return t&&(r=e.filter(function(a){return!ee(a)&&Nr(e)}).length===0),t&&r}function Ii(e){var t=de(e)&&!St(e),r=!1,a=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],s,i;for(s=0;s<a.length;s+=1)i=a[s],r=r||v(e,i);return t&&r}function Ei(e,t){var r=e.diff(t,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function Hi(e,t){arguments.length===1&&(arguments[0]?Ui(arguments[0])?(e=arguments[0],t=void 0):Ii(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var r=e||b(),a=Et(r,this).startOf("day"),s=d.calendarFormat(this,a)||"sameElse",i=t&&(z(t[s])?t[s].call(this,r):t[s]);return this.format(i||this.localeData().calendar(s,this,b(r)))}function $i(){return new Pe(this)}function Gi(e,t){var r=I(e)?e:b(e);return this.isValid()&&r.isValid()?(t=F(t)||"millisecond",t==="millisecond"?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(t).valueOf()):!1}function Vi(e,t){var r=I(e)?e:b(e);return this.isValid()&&r.isValid()?(t=F(t)||"millisecond",t==="millisecond"?this.valueOf()<r.valueOf():this.clone().endOf(t).valueOf()<r.valueOf()):!1}function zi(e,t,r,a){var s=I(e)?e:b(e),i=I(t)?t:b(t);return this.isValid()&&s.isValid()&&i.isValid()?(a=a||"()",(a[0]==="("?this.isAfter(s,r):!this.isBefore(s,r))&&(a[1]===")"?this.isBefore(i,r):!this.isAfter(i,r))):!1}function qi(e,t){var r=I(e)?e:b(e),a;return this.isValid()&&r.isValid()?(t=F(t)||"millisecond",t==="millisecond"?this.valueOf()===r.valueOf():(a=r.valueOf(),this.clone().startOf(t).valueOf()<=a&&a<=this.clone().endOf(t).valueOf())):!1}function Zi(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function Bi(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function Ji(e,t,r){var a,s,i;if(!this.isValid())return NaN;if(a=Et(e,this),!a.isValid())return NaN;switch(s=(a.utcOffset()-this.utcOffset())*6e4,t=F(t),t){case"year":i=$e(this,a)/12;break;case"month":i=$e(this,a);break;case"quarter":i=$e(this,a)/3;break;case"second":i=(this-a)/1e3;break;case"minute":i=(this-a)/6e4;break;case"hour":i=(this-a)/36e5;break;case"day":i=(this-a-s)/864e5;break;case"week":i=(this-a-s)/6048e5;break;default:i=this-a}return r?i:N(i)}function $e(e,t){if(e.date()<t.date())return-$e(t,e);var r=(t.year()-e.year())*12+(t.month()-e.month()),a=e.clone().add(r,"months"),s,i;return t-a<0?(s=e.clone().add(r-1,"months"),i=(t-a)/(a-s)):(s=e.clone().add(r+1,"months"),i=(t-a)/(s-a)),-(r+i)||0}d.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";d.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Qi(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Xi(e){if(!this.isValid())return null;var t=e!==!0,r=t?this.clone().utc():this;return r.year()<0||r.year()>9999?Ee(r,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):z(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Ee(r,"Z")):Ee(r,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Ki(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",r,a,s,i;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),r="["+e+'("]',a=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",s="-MM-DD[T]HH:mm:ss.SSS",i=t+'[")]',this.format(r+a+s+i)}function en(e){e||(e=this.isUtc()?d.defaultFormatUtc:d.defaultFormat);var t=Ee(this,e);return this.localeData().postformat(t)}function tn(e,t){return this.isValid()&&(I(e)&&e.isValid()||b(e).isValid())?E({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function rn(e){return this.from(b(),e)}function an(e,t){return this.isValid()&&(I(e)&&e.isValid()||b(e).isValid())?E({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function sn(e){return this.to(b(),e)}function Cr(e){var t;return e===void 0?this._locale._abbr:(t=te(e),t!=null&&(this._locale=t),this)}var Fr=C("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Ur(){return this._locale}var ze=1e3,pe=60*ze,qe=60*pe,Lr=(365*400+97)*24*qe;function ge(e,t){return(e%t+t)%t}function Ar(e,t,r){return e<100&&e>=0?new Date(e+400,t,r)-Lr:new Date(e,t,r).valueOf()}function Ir(e,t,r){return e<100&&e>=0?Date.UTC(e+400,t,r)-Lr:Date.UTC(e,t,r)}function nn(e){var t,r;if(e=F(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?Ir:Ar,e){case"year":t=r(this.year(),0,1);break;case"quarter":t=r(this.year(),this.month()-this.month()%3,1);break;case"month":t=r(this.year(),this.month(),1);break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=r(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=ge(t+(this._isUTC?0:this.utcOffset()*pe),qe);break;case"minute":t=this._d.valueOf(),t-=ge(t,pe);break;case"second":t=this._d.valueOf(),t-=ge(t,ze);break}return this._d.setTime(t),d.updateOffset(this,!0),this}function on(e){var t,r;if(e=F(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?Ir:Ar,e){case"year":t=r(this.year()+1,0,1)-1;break;case"quarter":t=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=r(this.year(),this.month()+1,1)-1;break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=qe-ge(t+(this._isUTC?0:this.utcOffset()*pe),qe)-1;break;case"minute":t=this._d.valueOf(),t+=pe-ge(t,pe)-1;break;case"second":t=this._d.valueOf(),t+=ze-ge(t,ze)-1;break}return this._d.setTime(t),d.updateOffset(this,!0),this}function ln(){return this._d.valueOf()-(this._offset||0)*6e4}function dn(){return Math.floor(this.valueOf()/1e3)}function un(){return new Date(this.valueOf())}function hn(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function cn(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function fn(){return this.isValid()?this.toISOString():null}function mn(){return bt(this)}function yn(){return ae({},y(this))}function pn(){return y(this).overflow}function gn(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}f("N",0,0,"eraAbbr");f("NN",0,0,"eraAbbr");f("NNN",0,0,"eraAbbr");f("NNNN",0,0,"eraName");f("NNNNN",0,0,"eraNarrow");f("y",["y",1],"yo","eraYear");f("y",["yy",2],0,"eraYear");f("y",["yyy",3],0,"eraYear");f("y",["yyyy",4],0,"eraYear");h("N",Ht);h("NN",Ht);h("NNN",Ht);h("NNNN",On);h("NNNNN",Tn);S(["N","NN","NNN","NNNN","NNNNN"],function(e,t,r,a){var s=r._locale.erasParse(e,a,r._strict);s?y(r).era=s:y(r).invalidEra=e});h("y",xe);h("yy",xe);h("yyy",xe);h("yyyy",xe);h("yo",Wn);S(["y","yy","yyy","yyyy"],W);S(["yo"],function(e,t,r,a){var s;r._locale._eraYearOrdinalRegex&&(s=e.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?t[W]=r._locale.eraYearOrdinalParse(e,s):t[W]=parseInt(e,10)});function xn(e,t){var r,a,s,i=this._eras||te("en")._eras;for(r=0,a=i.length;r<a;++r){switch(typeof i[r].since){case"string":s=d(i[r].since).startOf("day"),i[r].since=s.valueOf();break}switch(typeof i[r].until){case"undefined":i[r].until=1/0;break;case"string":s=d(i[r].until).startOf("day").valueOf(),i[r].until=s.valueOf();break}}return i}function _n(e,t,r){var a,s,i=this.eras(),n,u,m;for(e=e.toUpperCase(),a=0,s=i.length;a<s;++a)if(n=i[a].name.toUpperCase(),u=i[a].abbr.toUpperCase(),m=i[a].narrow.toUpperCase(),r)switch(t){case"N":case"NN":case"NNN":if(u===e)return i[a];break;case"NNNN":if(n===e)return i[a];break;case"NNNNN":if(m===e)return i[a];break}else if([n,u,m].indexOf(e)>=0)return i[a]}function wn(e,t){var r=e.since<=e.until?1:-1;return t===void 0?d(e.since).year():d(e.since).year()+(t-e.offset)*r}function vn(){var e,t,r,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),a[e].since<=r&&r<=a[e].until||a[e].until<=r&&r<=a[e].since)return a[e].name;return""}function kn(){var e,t,r,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),a[e].since<=r&&r<=a[e].until||a[e].until<=r&&r<=a[e].since)return a[e].narrow;return""}function Sn(){var e,t,r,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),a[e].since<=r&&r<=a[e].until||a[e].until<=r&&r<=a[e].since)return a[e].abbr;return""}function bn(){var e,t,r,a,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e)if(r=s[e].since<=s[e].until?1:-1,a=this.clone().startOf("day").valueOf(),s[e].since<=a&&a<=s[e].until||s[e].until<=a&&a<=s[e].since)return(this.year()-d(s[e].since).year())*r+s[e].offset;return this.year()}function Dn(e){return v(this,"_erasNameRegex")||$t.call(this),e?this._erasNameRegex:this._erasRegex}function Mn(e){return v(this,"_erasAbbrRegex")||$t.call(this),e?this._erasAbbrRegex:this._erasRegex}function Yn(e){return v(this,"_erasNarrowRegex")||$t.call(this),e?this._erasNarrowRegex:this._erasRegex}function Ht(e,t){return t.erasAbbrRegex(e)}function On(e,t){return t.erasNameRegex(e)}function Tn(e,t){return t.erasNarrowRegex(e)}function Wn(e,t){return t._eraYearOrdinalRegex||xe}function $t(){var e=[],t=[],r=[],a=[],s,i,n,u,m,g=this.eras();for(s=0,i=g.length;s<i;++s)n=X(g[s].name),u=X(g[s].abbr),m=X(g[s].narrow),t.push(n),e.push(u),r.push(m),a.push(n),a.push(u),a.push(m);this._erasRegex=new RegExp("^("+a.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}f(0,["gg",2],0,function(){return this.weekYear()%100});f(0,["GG",2],0,function(){return this.isoWeekYear()%100});function st(e,t){f(0,[e,e.length],0,t)}st("gggg","weekYear");st("ggggg","weekYear");st("GGGG","isoWeekYear");st("GGGGG","isoWeekYear");h("G",Ke);h("g",Ke);h("GG",D,P);h("gg",D,P);h("GGGG",Wt,Tt);h("gggg",Wt,Tt);h("GGGGG",Xe,Je);h("ggggg",Xe,Je);Ce(["gggg","ggggg","GGGG","GGGGG"],function(e,t,r,a){t[a.substr(0,2)]=x(e)});Ce(["gg","GG"],function(e,t,r,a){t[a]=d.parseTwoDigitYear(e)});function Rn(e){return Er.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function jn(e){return Er.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Pn(){return K(this.year(),1,4)}function Nn(){return K(this.isoWeekYear(),1,4)}function Cn(){var e=this.localeData()._week;return K(this.year(),e.dow,e.doy)}function Fn(){var e=this.localeData()._week;return K(this.weekYear(),e.dow,e.doy)}function Er(e,t,r,a,s){var i;return e==null?Te(this,a,s).year:(i=K(e,a,s),t>i&&(t=i),Un.call(this,e,t,r,a,s))}function Un(e,t,r,a,s){var i=wr(e,t,r,a,s),n=Oe(i.year,0,i.dayOfYear);return this.year(n.getUTCFullYear()),this.month(n.getUTCMonth()),this.date(n.getUTCDate()),this}f("Q",0,"Qo","quarter");h("Q",dr);S("Q",function(e,t){t[J]=(x(e)-1)*3});function Ln(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}f("D",["DD",2],"Do","date");h("D",D,_e);h("DD",D,P);h("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});S(["D","DD"],$);S("Do",function(e,t){t[$]=x(e.match(D)[0])});var Hr=we("Date",!0);f("DDD",["DDDD",3],"DDDo","dayOfYear");h("DDD",Qe);h("DDDD",ur);S(["DDD","DDDD"],function(e,t,r){r._dayOfYear=x(e)});function An(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}f("m",["mm",2],0,"minute");h("m",D,Rt);h("mm",D,P);S(["m","mm"],L);var In=we("Minutes",!1);f("s",["ss",2],0,"second");h("s",D,Rt);h("ss",D,P);S(["s","ss"],Q);var En=we("Seconds",!1);f("S",0,0,function(){return~~(this.millisecond()/100)});f(0,["SS",2],0,function(){return~~(this.millisecond()/10)});f(0,["SSS",3],0,"millisecond");f(0,["SSSS",4],0,function(){return this.millisecond()*10});f(0,["SSSSS",5],0,function(){return this.millisecond()*100});f(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});f(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});f(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});f(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});h("S",Qe,dr);h("SS",Qe,P);h("SSS",Qe,ur);var se,$r;for(se="SSSS";se.length<=9;se+="S")h(se,xe);function Hn(e,t){t[le]=x(("0."+e)*1e3)}for(se="S";se.length<=9;se+="S")S(se,Hn);$r=we("Milliseconds",!1);f("z",0,0,"zoneAbbr");f("zz",0,0,"zoneName");function $n(){return this._isUTC?"UTC":""}function Gn(){return this._isUTC?"Coordinated Universal Time":""}var l=Pe.prototype;l.add=Ci;l.calendar=Hi;l.clone=$i;l.diff=Ji;l.endOf=on;l.format=en;l.from=tn;l.fromNow=rn;l.to=an;l.toNow=sn;l.get=Ka;l.invalidAt=pn;l.isAfter=Gi;l.isBefore=Vi;l.isBetween=zi;l.isSame=qi;l.isSameOrAfter=Zi;l.isSameOrBefore=Bi;l.isValid=mn;l.lang=Fr;l.locale=Cr;l.localeData=Ur;l.max=fi;l.min=ci;l.parsingFlags=yn;l.set=es;l.startOf=nn;l.subtract=Fi;l.toArray=hn;l.toObject=cn;l.toDate=un;l.toISOString=Xi;l.inspect=Ki;typeof Symbol<"u"&&Symbol.for!=null&&(l[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});l.toJSON=fn;l.toString=Qi;l.unix=dn;l.valueOf=ln;l.creationData=gn;l.eraName=vn;l.eraNarrow=kn;l.eraAbbr=Sn;l.eraYear=bn;l.year=fr;l.isLeapYear=Xa;l.weekYear=Rn;l.isoWeekYear=jn;l.quarter=l.quarters=Ln;l.month=xr;l.daysInMonth=ds;l.week=l.weeks=gs;l.isoWeek=l.isoWeeks=xs;l.weeksInYear=Cn;l.weeksInWeekYear=Fn;l.isoWeeksInYear=Pn;l.isoWeeksInISOWeekYear=Nn;l.date=Hr;l.day=l.days=Rs;l.weekday=js;l.isoWeekday=Ps;l.dayOfYear=An;l.hour=l.hours=Is;l.minute=l.minutes=In;l.second=l.seconds=En;l.millisecond=l.milliseconds=$r;l.utcOffset=ki;l.utc=bi;l.local=Di;l.parseZone=Mi;l.hasAlignedHourOffset=Yi;l.isDST=Oi;l.isLocal=Wi;l.isUtcOffset=Ri;l.isUtc=Rr;l.isUTC=Rr;l.zoneAbbr=$n;l.zoneName=Gn;l.dates=C("dates accessor is deprecated. Use date instead.",Hr);l.months=C("months accessor is deprecated. Use month instead",xr);l.years=C("years accessor is deprecated. Use year instead",fr);l.zone=C("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Si);l.isDSTShifted=C("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ti);function Vn(e){return b(e*1e3)}function zn(){return b.apply(null,arguments).parseZone()}function Gr(e){return e}var k=Mt.prototype;k.calendar=Wa;k.longDateFormat=Na;k.invalidDate=Fa;k.ordinal=Aa;k.preparse=Gr;k.postformat=Gr;k.relativeTime=Ea;k.pastFuture=Ha;k.set=Oa;k.eras=xn;k.erasParse=_n;k.erasConvertYear=wn;k.erasAbbrRegex=Mn;k.erasNameRegex=Dn;k.erasNarrowRegex=Yn;k.months=is;k.monthsShort=ns;k.monthsParse=ls;k.monthsRegex=hs;k.monthsShortRegex=us;k.week=fs;k.firstDayOfYear=ps;k.firstDayOfWeek=ys;k.weekdays=Ms;k.weekdaysMin=Os;k.weekdaysShort=Ys;k.weekdaysParse=Ws;k.weekdaysRegex=Ns;k.weekdaysShortRegex=Cs;k.weekdaysMinRegex=Fs;k.isPM=Ls;k.meridiem=Es;function Ze(e,t,r,a){var s=te(),i=V().set(a,t);return s[r](i,e)}function Vr(e,t,r){if(ee(e)&&(t=e,e=void 0),e=e||"",t!=null)return Ze(e,t,r,"month");var a,s=[];for(a=0;a<12;a++)s[a]=Ze(e,a,r,"month");return s}function Gt(e,t,r,a){typeof e=="boolean"?(ee(t)&&(r=t,t=void 0),t=t||""):(t=e,r=t,e=!1,ee(t)&&(r=t,t=void 0),t=t||"");var s=te(),i=e?s._week.dow:0,n,u=[];if(r!=null)return Ze(t,(r+i)%7,a,"day");for(n=0;n<7;n++)u[n]=Ze(t,(n+i)%7,a,"day");return u}function qn(e,t){return Vr(e,t,"months")}function Zn(e,t){return Vr(e,t,"monthsShort")}function Bn(e,t,r){return Gt(e,t,r,"weekdays")}function Jn(e,t,r){return Gt(e,t,r,"weekdaysShort")}function Qn(e,t,r){return Gt(e,t,r,"weekdaysMin")}ne("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,r=x(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+r}});d.lang=C("moment.lang is deprecated. Use moment.locale instead.",ne);d.langData=C("moment.langData is deprecated. Use moment.localeData instead.",te);var q=Math.abs;function Xn(){var e=this._data;return this._milliseconds=q(this._milliseconds),this._days=q(this._days),this._months=q(this._months),e.milliseconds=q(e.milliseconds),e.seconds=q(e.seconds),e.minutes=q(e.minutes),e.hours=q(e.hours),e.months=q(e.months),e.years=q(e.years),this}function zr(e,t,r,a){var s=E(t,r);return e._milliseconds+=a*s._milliseconds,e._days+=a*s._days,e._months+=a*s._months,e._bubble()}function Kn(e,t){return zr(this,e,t,1)}function eo(e,t){return zr(this,e,t,-1)}function Xt(e){return e<0?Math.floor(e):Math.ceil(e)}function to(){var e=this._milliseconds,t=this._days,r=this._months,a=this._data,s,i,n,u,m;return e>=0&&t>=0&&r>=0||e<=0&&t<=0&&r<=0||(e+=Xt(vt(r)+t)*864e5,t=0,r=0),a.milliseconds=e%1e3,s=N(e/1e3),a.seconds=s%60,i=N(s/60),a.minutes=i%60,n=N(i/60),a.hours=n%24,t+=N(n/24),m=N(qr(t)),r+=m,t-=Xt(vt(m)),u=N(r/12),r%=12,a.days=t,a.months=r,a.years=u,this}function qr(e){return e*4800/146097}function vt(e){return e*146097/4800}function ro(e){if(!this.isValid())return NaN;var t,r,a=this._milliseconds;if(e=F(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+a/864e5,r=this._months+qr(t),e){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(t=this._days+Math.round(vt(this._months)),e){case"week":return t/7+a/6048e5;case"day":return t+a/864e5;case"hour":return t*24+a/36e5;case"minute":return t*1440+a/6e4;case"second":return t*86400+a/1e3;case"millisecond":return Math.floor(t*864e5)+a;default:throw new Error("Unknown unit "+e)}}function re(e){return function(){return this.as(e)}}var Zr=re("ms"),ao=re("s"),so=re("m"),io=re("h"),no=re("d"),oo=re("w"),lo=re("M"),uo=re("Q"),ho=re("y"),co=Zr;function fo(){return E(this)}function mo(e){return e=F(e),this.isValid()?this[e+"s"]():NaN}function he(e){return function(){return this.isValid()?this._data[e]:NaN}}var yo=he("milliseconds"),po=he("seconds"),go=he("minutes"),xo=he("hours"),_o=he("days"),wo=he("months"),vo=he("years");function ko(){return N(this.days()/7)}var B=Math.round,me={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function So(e,t,r,a,s){return s.relativeTime(t||1,!!r,e,a)}function bo(e,t,r,a){var s=E(e).abs(),i=B(s.as("s")),n=B(s.as("m")),u=B(s.as("h")),m=B(s.as("d")),g=B(s.as("M")),T=B(s.as("w")),c=B(s.as("y")),R=i<=r.ss&&["s",i]||i<r.s&&["ss",i]||n<=1&&["m"]||n<r.m&&["mm",n]||u<=1&&["h"]||u<r.h&&["hh",u]||m<=1&&["d"]||m<r.d&&["dd",m];return r.w!=null&&(R=R||T<=1&&["w"]||T<r.w&&["ww",T]),R=R||g<=1&&["M"]||g<r.M&&["MM",g]||c<=1&&["y"]||["yy",c],R[2]=t,R[3]=+e>0,R[4]=a,So.apply(null,R)}function Do(e){return e===void 0?B:typeof e=="function"?(B=e,!0):!1}function Mo(e,t){return me[e]===void 0?!1:t===void 0?me[e]:(me[e]=t,e==="s"&&(me.ss=t-1),!0)}function Yo(e,t){if(!this.isValid())return this.localeData().invalidDate();var r=!1,a=me,s,i;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(r=e),typeof t=="object"&&(a=Object.assign({},me,t),t.s!=null&&t.ss==null&&(a.ss=t.s-1)),s=this.localeData(),i=bo(this,!r,a,s),r&&(i=s.pastFuture(+this,i)),s.postformat(i)}var ft=Math.abs;function ce(e){return(e>0)-(e<0)||+e}function it(){if(!this.isValid())return this.localeData().invalidDate();var e=ft(this._milliseconds)/1e3,t=ft(this._days),r=ft(this._months),a,s,i,n,u=this.asSeconds(),m,g,T,c;return u?(a=N(e/60),s=N(a/60),e%=60,a%=60,i=N(r/12),r%=12,n=e?e.toFixed(3).replace(/\.?0+$/,""):"",m=u<0?"-":"",g=ce(this._months)!==ce(u)?"-":"",T=ce(this._days)!==ce(u)?"-":"",c=ce(this._milliseconds)!==ce(u)?"-":"",m+"P"+(i?g+i+"Y":"")+(r?g+r+"M":"")+(t?T+t+"D":"")+(s||a||e?"T":"")+(s?c+s+"H":"")+(a?c+a+"M":"")+(e?c+n+"S":"")):"P0D"}var w=at.prototype;w.isValid=xi;w.abs=Xn;w.add=Kn;w.subtract=eo;w.as=ro;w.asMilliseconds=Zr;w.asSeconds=ao;w.asMinutes=so;w.asHours=io;w.asDays=no;w.asWeeks=oo;w.asMonths=lo;w.asQuarters=uo;w.asYears=ho;w.valueOf=co;w._bubble=to;w.clone=fo;w.get=mo;w.milliseconds=yo;w.seconds=po;w.minutes=go;w.hours=xo;w.days=_o;w.weeks=ko;w.months=wo;w.years=vo;w.humanize=Yo;w.toISOString=it;w.toString=it;w.toJSON=it;w.locale=Cr;w.localeData=Ur;w.toIsoString=C("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",it);w.lang=Fr;f("X",0,0,"unix");f("x",0,0,"valueOf");h("x",Ke);h("X",za);S("X",function(e,t,r){r._d=new Date(parseFloat(e)*1e3)});S("x",function(e,t,r){r._d=new Date(x(e))});//! moment.js
d.version="2.30.1";Ma(b);d.fn=l;d.min=mi;d.max=yi;d.now=pi;d.utc=V;d.unix=Vn;d.months=qn;d.isDate=je;d.locale=ne;d.invalid=Be;d.duration=E;d.isMoment=I;d.weekdays=Bn;d.parseZone=zn;d.localeData=te;d.isDuration=He;d.monthsShort=Zn;d.weekdaysMin=Qn;d.defineLocale=Ft;d.updateLocale=Vs;d.locales=zs;d.weekdaysShort=Jn;d.normalizeUnits=F;d.relativeTimeRounding=Do;d.relativeTimeThreshold=Mo;d.calendarFormat=Ei;d.prototype=l;d.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const Oo=p.div`
  display: flex;
`,Kt=p.label`
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
`,To=p.div`
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
`,Wo=p.div`
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
`,er=p.input`
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

    ${({haserror:e,isValidationCompleted:t,...r})=>ie`
      border: 1px solid
        ${e?`${_.colorSecondaryRed}`:t?`${_.colorSecondaryGreen}`:`${_.colorInput}`};
    `}
  }

  @media screen and (min-width: 375px) {
    color: white;
    width: 335px;
    ${({haserror:e,isValidationCompleted:t,...r})=>ie`
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

    ${({haserror:e,isValidationCompleted:t})=>ie`
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
`,Ro=p.div`
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
`,Ie=p.label`
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
`,mt=p.input`
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

    ${({haserror:e,isValidationCompleted:t,...r})=>ie`
      border: 1px solid
        ${e?`${_.colorSecondaryRed}`:t?`${_.colorSecondaryGreen}`:`${_.colorInput}`};
    `}
  }

  @media screen and (min-width: 375px) {
    color: white;
    width: 161px;
    ${({haserror:e,isValidationCompleted:t,...r})=>ie`
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

    ${({haserror:e,isValidationCompleted:t})=>ie`
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
`,jo=p(ta)`
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

  ${({haserror:e,isValidationCompleted:t,...r})=>ie`
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

    ${({haserror:e,isValidationCompleted:t})=>ie`
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
`,tr=p.div`
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
`,Po=p.div`
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
`,U=p(ra)`
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
`,Z=p(aa)`
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
`,No=p.div`
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
`,Co=p.button`
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
`;d().format("YYYY-MM-DD");const Fo=sa().shape({name:Ue().min(2,"Too Short!").required("Name is required"),email:Ue().email("Invalid email address").required("Email is required"),height:ve().label("Height").min(150,"Height must be a number greater than or equal to 150").required("Height is required"),currentWeight:ve().label("Current Weight").min(35,"Current Weight must be a number greater than or equal to 35").required("Current Weight is required"),desiredWeight:ve().label("Desired Weight").min(35,"Desired Weight must be a number greater than or equal to 35").required("Desired Weight is required"),blood:ve().label("Blood Type").oneOf([1,2,3,4,"1","2","3","4"],"Invalid Blood Type").required("Blood Type is required"),sex:Ue().label("Gender").oneOf(["male","female"],"Invalid Gender").required("Gender is required"),levelActivity:ve().label("Level of Activity").oneOf([1,2,3,4,5,"1","2","3","4","5"],"Invalid Level of Activity").required("Level of Activity is required"),birthday:Ue().label("Date of Birth").typeError("Invalid Date!")}),Uo=({profile:e,refreshUserData:t})=>{const r=rr(),[a,s]=De.useState(e),[i,n]=De.useState(null),[u,m]=De.useState(!1),g=async()=>{try{const c=await r(oa());c.payload.birthday===void 0&&(c.payload.birthday=""),s(c.payload),t(c.payload)}catch(c){console.error("Error fetching user data:",c)}};De.useEffect(()=>{g()},[]);const T=c=>{m(!0),console.log(c);try{const R=r(la(c));console.log(R)}catch(R){console.error("Error fetching user data:",R)}return setTimeout(()=>{m(!1)},3e3),!1};return o.jsx(Oo,{children:o.jsx(ia,{initialValues:a,enableReinitialize:!0,validationSchema:Fo,onSubmit:T,children:c=>o.jsxs(na,{children:[o.jsxs(To,{children:[o.jsxs(Wo,{children:[o.jsxs(Kt,{children:["Name",o.jsx(er,{name:"name",placeholder:"Mike",type:"text",onChange:c.handleChange,value:c.values.name}),o.jsx(Z,{name:"name",component:"div"})]}),o.jsxs(Kt,{children:["Email",o.jsx(er,{name:"email",placeholder:"jane@acme.com",type:"email",onChange:c.handleChange,value:c.values.email}),o.jsx(Z,{name:"email",component:"div"})]})]}),o.jsxs(Ro,{children:[o.jsxs(Ie,{children:["Height",o.jsx(mt,{name:"height",placeholder:"0",type:"number",onChange:c.handleChange,value:c.values.height}),o.jsx(Z,{name:"height",component:"div"})]}),o.jsxs(Ie,{children:["Current Weight",o.jsx(mt,{name:"currentWeight",placeholder:"0",type:"number",onChange:c.handleChange,value:c.values.currentWeight}),o.jsx(Z,{name:"currentWeight",component:"div"})]}),o.jsxs(Ie,{children:["Desired Weight",o.jsx(mt,{name:"desiredWeight",placeholder:"0",type:"number",onChange:c.handleChange,value:c.values.desiredWeight}),o.jsx(Z,{name:"desiredWeight",component:"div"})]}),o.jsxs(Ie,{children:["Date of birth",o.jsx(jo,{selected:i,onChange:R=>{n(R),c.handleChange,c.values.birthday=R,c.setFieldTouched},dateFormat:"MM.dd.yyyy",placeholderText:"00.00.00",name:"birthday",value:c.values.birthday}),o.jsx(Z,{name:"birthday",component:"div"})]})]}),o.jsxs(tr,{children:[o.jsxs("div",{role:"group","aria-labelledby":"bloodLevel",children:[o.jsx(Z,{name:"blood",component:"div"}),o.jsxs(Po,{children:["Blood",o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"blood",value:"1",onChange:c.handleChange,checked:c.values.blood==="1"||c.values.blood===1}),"1"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"blood",value:"2",onChange:c.handleChange,checked:c.values.blood==="2"||c.values.blood===2}),"2"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"blood",value:"3",onChange:c.handleChange,checked:c.values.blood==="3"||c.values.blood===3}),"3"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"blood",value:"4",onChange:c.handleChange,checked:c.values.blood==="4"||c.values.blood===4}),"4"]})]})]}),o.jsxs("div",{role:"group","aria-labelledby":"genderType",children:[o.jsx(Z,{name:"sex",component:"div"}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"sex",value:"male",checked:c.values.sex==="male"}),"Male",o.jsx(U,{type:"radio",name:"sex",value:"female",checked:c.values.sex==="female"}),"Female"]})]})]}),o.jsxs(tr,{role:"group","aria-labelledby":"activityGroup",children:[o.jsx(Z,{name:"levelActivity",component:"div"}),o.jsxs(No,{children:[o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"1",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="1"||c.values.levelActivity===1}),"Sedentary lifestyle (little or no physical activity)"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"2",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="2"||c.values.levelActivity===2}),"Light activity (light excercises/sports 1-3 days per week)"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"3",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="3"||c.values.levelActivity===3}),"Moderately active (moderate excercises/sports 2-5 days per week)"," "]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"4",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="4"||c.values.levelActivity===4}),"Very active (intence excercises/sports 6-7 days per week)"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"5",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="5"||c.values.levelActivity===5}),"Extremely active (very strenous exercises/sports and physical work)"]})]})]})]}),o.jsx(Co,{type:"submit",children:"Save"}),u&&ue.success("Settings updated successfully")]})})})},Lo=p.div`
  padding-top: 72px;
`,Ao=p.div`
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
`;class zo extends De.Component{constructor(){super(...arguments);nt(this,"state",{profile:{name:"Jane",email:"",height:0,currentWeight:0,desiredWeight:0,blood:"1",sex:"female",levelActivity:"1",avatarURL:"",birthday:""}});nt(this,"refreshProfileState",r=>{this.setState({profile:r})})}render(){return o.jsx(Kr,{children:o.jsxs(Lo,{children:[o.jsx("h1",{children:"Profile Settings"}),o.jsxs(Ao,{children:[o.jsx(Uo,{profile:this.state.profile,refreshUserData:this.refreshProfileState}),o.jsx(Da,{profile:this.state.profile,refreshUserData:this.refreshProfileState})]})]})})}}export{zo as ProfilePage,zo as default};
