var Br=Object.defineProperty;var Jr=(e,t,r)=>t in e?Br(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var st=(e,t,r)=>(Jr(e,typeof t!="symbol"?t+"":t,r),r);import{s as y,g as h,u as ar,i as Qr,j as o,a as Ye,L as Xr,k as Kr,m as ea,n as oe,F as ta,E as ra,c as aa,d as Ue,o as be,r as me,p as ia,q as na,t as sa,Q as Vt,v as oa,C as la}from"./index-21011534.js";import{e as da}from"./react-datepicker-cssmodules-9f810ea3.js";import"./defineProperty-fbb90c7b.js";const ua=y.div`
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
`,ca=y.div`
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
`,ha=y.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  @media (min-width: 834px) {
    width: 219px;
  }
`;y.img`
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
`;const fa=y.div`
  display: flex;
  align-items: center;
  align-content: center;
`,ma=y.input`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
`,pa=y.label`
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
`,ya=y.svg`
  width: 24px;
  height: 24px;
  transition: stroke 0.3s ease;

  &:hover,
  &:focus {
    stroke: ${h.colorOrange1};
  }

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,ga=y.img`
  border-radius: 100%;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`,xa=y.div`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 8px;
`,_a=y.h2`
  color: #efede8;

  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`,wa=y.p`
  color: rgba(239, 237, 232, 0.5);

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,va=y.div`
  display: flex;
  gap: 14px;
  margin: 0 auto;
`,zt=y.div`
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
`,ot=y.svg`
  @media screen and (min-width: 320px) {
    width: 12px;
    height: 12px;
    fill: ${h.colorWhite};
  }

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,lt=y.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${h.colorBeige};
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,Se=y.div`
  display: flex;
  align-items: baseline;
  gap: 11px;
`,qt=y.p`
  color: ${h.colorWhite};
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
`,dt=y.span`
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
`,ka=y.div`
  margin: 0 auto;
  margin-top: 40px;
  color: rgba(239, 237, 232, 0.3);

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;y.div`
  margin-right: 96px;

  @media screen and (min-width: 768px) {
    margin-right: 410px;
  }
`;const ba=y.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;
`,Sa=y.p`
  @media screen and (min-width: 768px) {
    width: 330px;
  }

  @media screen and (min-width: 1440px) {
    width: 330px;
  }
`,Da=({profile:e,refreshUserData:t})=>{const r=ar(),{bmr:a}=Qr(),i=n=>{try{const s=r(Kr(n.target.files[0]));e.avatarURL=URL.createObjectURL(n.target.files[0]),t(e)}catch(s){console.error("error ava update:",s)}return n.target.value};return o.jsxs(ua,{children:[o.jsxs(ca,{children:[o.jsx(ha,{children:o.jsx(fa,{children:o.jsx(ma,{type:"file",accept:"image/*",id:"file-input",src:e.avatarURL,alt:"User Avatar",onChange:n=>{i(n)},onClick:n=>{n.target.value=null}})})}),o.jsx(pa,{htmlFor:"file-input",children:o.jsx(ya,{children:o.jsx("use",{href:Ye+"#icon-check-mark-1"})})}),o.jsx("div",{children:o.jsx(ga,{src:e.avatarURL,alt:"User Avatar"})})]}),o.jsxs(xa,{children:[o.jsx(_a,{children:e.name}),o.jsx(wa,{children:"User"})]}),o.jsxs(va,{children:[o.jsxs(zt,{children:[o.jsxs(Se,{children:[o.jsx(lt,{children:o.jsx(ot,{children:o.jsx("use",{href:`${Ye}#icon-fluent_food-24-filled`})})}),o.jsx(dt,{children:" Daily calorie intake"})]}),o.jsx(Se,{children:o.jsx(qt,{children:a&&a!==null&&a!==0?a:2200})})]}),o.jsxs(zt,{children:[o.jsxs(Se,{children:[o.jsx(lt,{children:o.jsx(ot,{children:o.jsx("use",{href:`${Ye}#icon-dumbbell`})})}),o.jsx(dt,{children:" Daily physical activity"})]}),o.jsxs(Se,{children:[o.jsx(qt,{children:"110"}),o.jsx(dt,{children:"min"})]})]})]}),o.jsx(ka,{children:o.jsxs(Se,{children:[o.jsx(lt,{children:o.jsx(ot,{children:o.jsx("use",{href:`${Ye}#exclamation-mark`})})}),o.jsx(Sa,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})}),o.jsx(ba,{children:o.jsx(Xr,{})})]})};//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var ir;function d(){return ir.apply(null,arguments)}function Ma(e){ir=e}function I(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function ce(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function v(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function kt(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(v(e,t))return!1;return!0}function j(e){return e===void 0}function re(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function Pe(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function nr(e,t){var r=[],a,i=e.length;for(a=0;a<i;++a)r.push(t(e[a],a));return r}function ne(e,t){for(var r in t)v(t,r)&&(e[r]=t[r]);return v(t,"toString")&&(e.toString=t.toString),v(t,"valueOf")&&(e.valueOf=t.valueOf),e}function q(e,t,r,a){return Or(e,t,r,a,!0).utc()}function Ya(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function g(e){return e._pf==null&&(e._pf=Ya()),e._pf}var pt;Array.prototype.some?pt=Array.prototype.some:pt=function(e){var t=Object(this),r=t.length>>>0,a;for(a=0;a<r;a++)if(a in t&&e.call(this,t[a],a,t))return!0;return!1};function bt(e){var t=null,r=!1,a=e._d&&!isNaN(e._d.getTime());if(a&&(t=g(e),r=pt.call(t.parsedDateParts,function(i){return i!=null}),a=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&r),e._strict&&(a=a&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=a;else return a;return e._isValid}function Be(e){var t=q(NaN);return e!=null?ne(g(t),e):g(t).userInvalidated=!0,t}var Zt=d.momentProperties=[],ut=!1;function St(e,t){var r,a,i,n=Zt.length;if(j(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),j(t._i)||(e._i=t._i),j(t._f)||(e._f=t._f),j(t._l)||(e._l=t._l),j(t._strict)||(e._strict=t._strict),j(t._tzm)||(e._tzm=t._tzm),j(t._isUTC)||(e._isUTC=t._isUTC),j(t._offset)||(e._offset=t._offset),j(t._pf)||(e._pf=g(t)),j(t._locale)||(e._locale=t._locale),n>0)for(r=0;r<n;r++)a=Zt[r],i=t[a],j(i)||(e[a]=i);return e}function Ne(e){St(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),ut===!1&&(ut=!0,d.updateOffset(this),ut=!1)}function $(e){return e instanceof Ne||e!=null&&e._isAMomentObject!=null}function sr(e){d.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function C(e,t){var r=!0;return ne(function(){if(d.deprecationHandler!=null&&d.deprecationHandler(null,e),r){var a=[],i,n,s,u=arguments.length;for(n=0;n<u;n++){if(i="",typeof arguments[n]=="object"){i+=`
[`+n+"] ";for(s in arguments[0])v(arguments[0],s)&&(i+=s+": "+arguments[0][s]+", ");i=i.slice(0,-2)}else i=arguments[n];a.push(i)}sr(e+`
Arguments: `+Array.prototype.slice.call(a).join("")+`
`+new Error().stack),r=!1}return t.apply(this,arguments)},t)}var Bt={};function or(e,t){d.deprecationHandler!=null&&d.deprecationHandler(e,t),Bt[e]||(sr(t),Bt[e]=!0)}d.suppressDeprecationWarnings=!1;d.deprecationHandler=null;function Z(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Oa(e){var t,r;for(r in e)v(e,r)&&(t=e[r],Z(t)?this[r]=t:this["_"+r]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function yt(e,t){var r=ne({},e),a;for(a in t)v(t,a)&&(ce(e[a])&&ce(t[a])?(r[a]={},ne(r[a],e[a]),ne(r[a],t[a])):t[a]!=null?r[a]=t[a]:delete r[a]);for(a in e)v(e,a)&&!v(t,a)&&ce(e[a])&&(r[a]=ne({},r[a]));return r}function Dt(e){e!=null&&this.set(e)}var gt;Object.keys?gt=Object.keys:gt=function(e){var t,r=[];for(t in e)v(e,t)&&r.push(t);return r};var Ta={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Wa(e,t,r){var a=this._calendar[e]||this._calendar.sameElse;return Z(a)?a.call(t,r):a}function z(e,t,r){var a=""+Math.abs(e),i=t-a.length,n=e>=0;return(n?r?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+a}var Mt=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Le=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ct={},ge={};function f(e,t,r,a){var i=a;typeof a=="string"&&(i=function(){return this[a]()}),e&&(ge[e]=i),t&&(ge[t[0]]=function(){return z(i.apply(this,arguments),t[1],t[2])}),r&&(ge[r]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function Ra(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function ja(e){var t=e.match(Mt),r,a;for(r=0,a=t.length;r<a;r++)ge[t[r]]?t[r]=ge[t[r]]:t[r]=Ra(t[r]);return function(i){var n="",s;for(s=0;s<a;s++)n+=Z(t[s])?t[s].call(i,e):t[s];return n}}function $e(e,t){return e.isValid()?(t=lr(t,e.localeData()),ct[t]=ct[t]||ja(t),ct[t](e)):e.localeData().invalidDate()}function lr(e,t){var r=5;function a(i){return t.longDateFormat(i)||i}for(Le.lastIndex=0;r>=0&&Le.test(e);)e=e.replace(Le,a),Le.lastIndex=0,r-=1;return e}var Pa={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Na(e){var t=this._longDateFormat[e],r=this._longDateFormat[e.toUpperCase()];return t||!r?t:(this._longDateFormat[e]=r.match(Mt).map(function(a){return a==="MMMM"||a==="MM"||a==="DD"||a==="dddd"?a.slice(1):a}).join(""),this._longDateFormat[e])}var Ca="Invalid date";function Fa(){return this._invalidDate}var Ua="%d",La=/\d{1,2}/;function Aa(e){return this._ordinal.replace("%d",e)}var Ia={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function $a(e,t,r,a){var i=this._relativeTime[r];return Z(i)?i(e,t,r,a):i.replace(/%d/i,e)}function Ea(e,t){var r=this._relativeTime[e>0?"future":"past"];return Z(r)?r(t):r.replace(/%s/i,t)}var Jt={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function F(e){return typeof e=="string"?Jt[e]||Jt[e.toLowerCase()]:void 0}function Yt(e){var t={},r,a;for(a in e)v(e,a)&&(r=F(a),r&&(t[r]=e[a]));return t}var Ha={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Ga(e){var t=[],r;for(r in e)v(e,r)&&t.push({unit:r,priority:Ha[r]});return t.sort(function(a,i){return a.priority-i.priority}),t}var dr=/\d/,P=/\d\d/,ur=/\d{3}/,Ot=/\d{4}/,Je=/[+-]?\d{6}/,D=/\d\d?/,cr=/\d\d\d\d?/,hr=/\d\d\d\d\d\d?/,Qe=/\d{1,3}/,Tt=/\d{1,4}/,Xe=/[+-]?\d{1,6}/,we=/\d+/,Ke=/[+-]?\d+/,Va=/Z|[+-]\d\d:?\d\d/gi,et=/Z|[+-]\d\d(?::?\d\d)?/gi,za=/[+-]?\d+(\.\d{1,3})?/,Ce=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,ve=/^[1-9]\d?/,Wt=/^([1-9]\d|\d)/,Ge;Ge={};function c(e,t,r){Ge[e]=Z(t)?t:function(a,i){return a&&r?r:t}}function qa(e,t){return v(Ge,e)?Ge[e](t._strict,t._locale):new RegExp(Za(e))}function Za(e){return ee(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,r,a,i,n){return r||a||i||n}))}function ee(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function N(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function _(e){var t=+e,r=0;return t!==0&&isFinite(t)&&(r=N(t)),r}var xt={};function b(e,t){var r,a=t,i;for(typeof e=="string"&&(e=[e]),re(t)&&(a=function(n,s){s[t]=_(n)}),i=e.length,r=0;r<i;r++)xt[e[r]]=a}function Fe(e,t){b(e,function(r,a,i,n){i._w=i._w||{},t(r,i._w,i,n)})}function Ba(e,t,r){t!=null&&v(xt,e)&&xt[e](t,r._a,r,e)}function tt(e){return e%4===0&&e%100!==0||e%400===0}var W=0,X=1,V=2,O=3,A=4,K=5,ue=6,Ja=7,Qa=8;f("Y",0,0,function(){var e=this.year();return e<=9999?z(e,4):"+"+e});f(0,["YY",2],0,function(){return this.year()%100});f(0,["YYYY",4],0,"year");f(0,["YYYYY",5],0,"year");f(0,["YYYYYY",6,!0],0,"year");c("Y",Ke);c("YY",D,P);c("YYYY",Tt,Ot);c("YYYYY",Xe,Je);c("YYYYYY",Xe,Je);b(["YYYYY","YYYYYY"],W);b("YYYY",function(e,t){t[W]=e.length===2?d.parseTwoDigitYear(e):_(e)});b("YY",function(e,t){t[W]=d.parseTwoDigitYear(e)});b("Y",function(e,t){t[W]=parseInt(e,10)});function Oe(e){return tt(e)?366:365}d.parseTwoDigitYear=function(e){return _(e)+(_(e)>68?1900:2e3)};var fr=ke("FullYear",!0);function Xa(){return tt(this.year())}function ke(e,t){return function(r){return r!=null?(mr(this,e,r),d.updateOffset(this,t),this):Te(this,e)}}function Te(e,t){if(!e.isValid())return NaN;var r=e._d,a=e._isUTC;switch(t){case"Milliseconds":return a?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return a?r.getUTCSeconds():r.getSeconds();case"Minutes":return a?r.getUTCMinutes():r.getMinutes();case"Hours":return a?r.getUTCHours():r.getHours();case"Date":return a?r.getUTCDate():r.getDate();case"Day":return a?r.getUTCDay():r.getDay();case"Month":return a?r.getUTCMonth():r.getMonth();case"FullYear":return a?r.getUTCFullYear():r.getFullYear();default:return NaN}}function mr(e,t,r){var a,i,n,s,u;if(!(!e.isValid()||isNaN(r))){switch(a=e._d,i=e._isUTC,t){case"Milliseconds":return void(i?a.setUTCMilliseconds(r):a.setMilliseconds(r));case"Seconds":return void(i?a.setUTCSeconds(r):a.setSeconds(r));case"Minutes":return void(i?a.setUTCMinutes(r):a.setMinutes(r));case"Hours":return void(i?a.setUTCHours(r):a.setHours(r));case"Date":return void(i?a.setUTCDate(r):a.setDate(r));case"FullYear":break;default:return}n=r,s=e.month(),u=e.date(),u=u===29&&s===1&&!tt(n)?28:u,i?a.setUTCFullYear(n,s,u):a.setFullYear(n,s,u)}}function Ka(e){return e=F(e),Z(this[e])?this[e]():this}function ei(e,t){if(typeof e=="object"){e=Yt(e);var r=Ga(e),a,i=r.length;for(a=0;a<i;a++)this[r[a].unit](e[r[a].unit])}else if(e=F(e),Z(this[e]))return this[e](t);return this}function ti(e,t){return(e%t+t)%t}var Y;Array.prototype.indexOf?Y=Array.prototype.indexOf:Y=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function Rt(e,t){if(isNaN(e)||isNaN(t))return NaN;var r=ti(t,12);return e+=(t-r)/12,r===1?tt(e)?29:28:31-r%7%2}f("M",["MM",2],"Mo",function(){return this.month()+1});f("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});f("MMMM",0,0,function(e){return this.localeData().months(this,e)});c("M",D,ve);c("MM",D,P);c("MMM",function(e,t){return t.monthsShortRegex(e)});c("MMMM",function(e,t){return t.monthsRegex(e)});b(["M","MM"],function(e,t){t[X]=_(e)-1});b(["MMM","MMMM"],function(e,t,r,a){var i=r._locale.monthsParse(e,a,r._strict);i!=null?t[X]=i:g(r).invalidMonth=e});var ri="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),pr="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),yr=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,ai=Ce,ii=Ce;function ni(e,t){return e?I(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||yr).test(t)?"format":"standalone"][e.month()]:I(this._months)?this._months:this._months.standalone}function si(e,t){return e?I(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[yr.test(t)?"format":"standalone"][e.month()]:I(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function oi(e,t,r){var a,i,n,s=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],a=0;a<12;++a)n=q([2e3,a]),this._shortMonthsParse[a]=this.monthsShort(n,"").toLocaleLowerCase(),this._longMonthsParse[a]=this.months(n,"").toLocaleLowerCase();return r?t==="MMM"?(i=Y.call(this._shortMonthsParse,s),i!==-1?i:null):(i=Y.call(this._longMonthsParse,s),i!==-1?i:null):t==="MMM"?(i=Y.call(this._shortMonthsParse,s),i!==-1?i:(i=Y.call(this._longMonthsParse,s),i!==-1?i:null)):(i=Y.call(this._longMonthsParse,s),i!==-1?i:(i=Y.call(this._shortMonthsParse,s),i!==-1?i:null))}function li(e,t,r){var a,i,n;if(this._monthsParseExact)return oi.call(this,e,t,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),a=0;a<12;a++){if(i=q([2e3,a]),r&&!this._longMonthsParse[a]&&(this._longMonthsParse[a]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[a]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),!r&&!this._monthsParse[a]&&(n="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[a]=new RegExp(n.replace(".",""),"i")),r&&t==="MMMM"&&this._longMonthsParse[a].test(e))return a;if(r&&t==="MMM"&&this._shortMonthsParse[a].test(e))return a;if(!r&&this._monthsParse[a].test(e))return a}}function gr(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=_(t);else if(t=e.localeData().monthsParse(t),!re(t))return e}var r=t,a=e.date();return a=a<29?a:Math.min(a,Rt(e.year(),r)),e._isUTC?e._d.setUTCMonth(r,a):e._d.setMonth(r,a),e}function xr(e){return e!=null?(gr(this,e),d.updateOffset(this,!0),this):Te(this,"Month")}function di(){return Rt(this.year(),this.month())}function ui(e){return this._monthsParseExact?(v(this,"_monthsRegex")||_r.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(v(this,"_monthsShortRegex")||(this._monthsShortRegex=ai),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function ci(e){return this._monthsParseExact?(v(this,"_monthsRegex")||_r.call(this),e?this._monthsStrictRegex:this._monthsRegex):(v(this,"_monthsRegex")||(this._monthsRegex=ii),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function _r(){function e(p,x){return x.length-p.length}var t=[],r=[],a=[],i,n,s,u;for(i=0;i<12;i++)n=q([2e3,i]),s=ee(this.monthsShort(n,"")),u=ee(this.months(n,"")),t.push(s),r.push(u),a.push(u),a.push(s);t.sort(e),r.sort(e),a.sort(e),this._monthsRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function hi(e,t,r,a,i,n,s){var u;return e<100&&e>=0?(u=new Date(e+400,t,r,a,i,n,s),isFinite(u.getFullYear())&&u.setFullYear(e)):u=new Date(e,t,r,a,i,n,s),u}function We(e){var t,r;return e<100&&e>=0?(r=Array.prototype.slice.call(arguments),r[0]=e+400,t=new Date(Date.UTC.apply(null,r)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Ve(e,t,r){var a=7+t-r,i=(7+We(e,0,a).getUTCDay()-t)%7;return-i+a-1}function wr(e,t,r,a,i){var n=(7+r-a)%7,s=Ve(e,a,i),u=1+7*(t-1)+n+s,p,x;return u<=0?(p=e-1,x=Oe(p)+u):u>Oe(e)?(p=e+1,x=u-Oe(e)):(p=e,x=u),{year:p,dayOfYear:x}}function Re(e,t,r){var a=Ve(e.year(),t,r),i=Math.floor((e.dayOfYear()-a-1)/7)+1,n,s;return i<1?(s=e.year()-1,n=i+te(s,t,r)):i>te(e.year(),t,r)?(n=i-te(e.year(),t,r),s=e.year()+1):(s=e.year(),n=i),{week:n,year:s}}function te(e,t,r){var a=Ve(e,t,r),i=Ve(e+1,t,r);return(Oe(e)-a+i)/7}f("w",["ww",2],"wo","week");f("W",["WW",2],"Wo","isoWeek");c("w",D,ve);c("ww",D,P);c("W",D,ve);c("WW",D,P);Fe(["w","ww","W","WW"],function(e,t,r,a){t[a.substr(0,1)]=_(e)});function fi(e){return Re(e,this._week.dow,this._week.doy).week}var mi={dow:0,doy:6};function pi(){return this._week.dow}function yi(){return this._week.doy}function gi(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function xi(e){var t=Re(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}f("d",0,"do","day");f("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});f("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});f("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});f("e",0,0,"weekday");f("E",0,0,"isoWeekday");c("d",D);c("e",D);c("E",D);c("dd",function(e,t){return t.weekdaysMinRegex(e)});c("ddd",function(e,t){return t.weekdaysShortRegex(e)});c("dddd",function(e,t){return t.weekdaysRegex(e)});Fe(["dd","ddd","dddd"],function(e,t,r,a){var i=r._locale.weekdaysParse(e,a,r._strict);i!=null?t.d=i:g(r).invalidWeekday=e});Fe(["d","e","E"],function(e,t,r,a){t[a]=_(e)});function _i(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function wi(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function jt(e,t){return e.slice(t,7).concat(e.slice(0,t))}var vi="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),vr="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),ki="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),bi=Ce,Si=Ce,Di=Ce;function Mi(e,t){var r=I(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?jt(r,this._week.dow):e?r[e.day()]:r}function Yi(e){return e===!0?jt(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Oi(e){return e===!0?jt(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Ti(e,t,r){var a,i,n,s=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],a=0;a<7;++a)n=q([2e3,1]).day(a),this._minWeekdaysParse[a]=this.weekdaysMin(n,"").toLocaleLowerCase(),this._shortWeekdaysParse[a]=this.weekdaysShort(n,"").toLocaleLowerCase(),this._weekdaysParse[a]=this.weekdays(n,"").toLocaleLowerCase();return r?t==="dddd"?(i=Y.call(this._weekdaysParse,s),i!==-1?i:null):t==="ddd"?(i=Y.call(this._shortWeekdaysParse,s),i!==-1?i:null):(i=Y.call(this._minWeekdaysParse,s),i!==-1?i:null):t==="dddd"?(i=Y.call(this._weekdaysParse,s),i!==-1||(i=Y.call(this._shortWeekdaysParse,s),i!==-1)?i:(i=Y.call(this._minWeekdaysParse,s),i!==-1?i:null)):t==="ddd"?(i=Y.call(this._shortWeekdaysParse,s),i!==-1||(i=Y.call(this._weekdaysParse,s),i!==-1)?i:(i=Y.call(this._minWeekdaysParse,s),i!==-1?i:null)):(i=Y.call(this._minWeekdaysParse,s),i!==-1||(i=Y.call(this._weekdaysParse,s),i!==-1)?i:(i=Y.call(this._shortWeekdaysParse,s),i!==-1?i:null))}function Wi(e,t,r){var a,i,n;if(this._weekdaysParseExact)return Ti.call(this,e,t,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),a=0;a<7;a++){if(i=q([2e3,1]).day(a),r&&!this._fullWeekdaysParse[a]&&(this._fullWeekdaysParse[a]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[a]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[a]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[a]||(n="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[a]=new RegExp(n.replace(".",""),"i")),r&&t==="dddd"&&this._fullWeekdaysParse[a].test(e))return a;if(r&&t==="ddd"&&this._shortWeekdaysParse[a].test(e))return a;if(r&&t==="dd"&&this._minWeekdaysParse[a].test(e))return a;if(!r&&this._weekdaysParse[a].test(e))return a}}function Ri(e){if(!this.isValid())return e!=null?this:NaN;var t=Te(this,"Day");return e!=null?(e=_i(e,this.localeData()),this.add(e-t,"d")):t}function ji(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function Pi(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=wi(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function Ni(e){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||Pt.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(v(this,"_weekdaysRegex")||(this._weekdaysRegex=bi),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Ci(e){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||Pt.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(v(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Si),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Fi(e){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||Pt.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(v(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Di),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Pt(){function e(T,U){return U.length-T.length}var t=[],r=[],a=[],i=[],n,s,u,p,x;for(n=0;n<7;n++)s=q([2e3,1]).day(n),u=ee(this.weekdaysMin(s,"")),p=ee(this.weekdaysShort(s,"")),x=ee(this.weekdays(s,"")),t.push(u),r.push(p),a.push(x),i.push(u),i.push(p),i.push(x);t.sort(e),r.sort(e),a.sort(e),i.sort(e),this._weekdaysRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function Nt(){return this.hours()%12||12}function Ui(){return this.hours()||24}f("H",["HH",2],0,"hour");f("h",["hh",2],0,Nt);f("k",["kk",2],0,Ui);f("hmm",0,0,function(){return""+Nt.apply(this)+z(this.minutes(),2)});f("hmmss",0,0,function(){return""+Nt.apply(this)+z(this.minutes(),2)+z(this.seconds(),2)});f("Hmm",0,0,function(){return""+this.hours()+z(this.minutes(),2)});f("Hmmss",0,0,function(){return""+this.hours()+z(this.minutes(),2)+z(this.seconds(),2)});function kr(e,t){f(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}kr("a",!0);kr("A",!1);function br(e,t){return t._meridiemParse}c("a",br);c("A",br);c("H",D,Wt);c("h",D,ve);c("k",D,ve);c("HH",D,P);c("hh",D,P);c("kk",D,P);c("hmm",cr);c("hmmss",hr);c("Hmm",cr);c("Hmmss",hr);b(["H","HH"],O);b(["k","kk"],function(e,t,r){var a=_(e);t[O]=a===24?0:a});b(["a","A"],function(e,t,r){r._isPm=r._locale.isPM(e),r._meridiem=e});b(["h","hh"],function(e,t,r){t[O]=_(e),g(r).bigHour=!0});b("hmm",function(e,t,r){var a=e.length-2;t[O]=_(e.substr(0,a)),t[A]=_(e.substr(a)),g(r).bigHour=!0});b("hmmss",function(e,t,r){var a=e.length-4,i=e.length-2;t[O]=_(e.substr(0,a)),t[A]=_(e.substr(a,2)),t[K]=_(e.substr(i)),g(r).bigHour=!0});b("Hmm",function(e,t,r){var a=e.length-2;t[O]=_(e.substr(0,a)),t[A]=_(e.substr(a))});b("Hmmss",function(e,t,r){var a=e.length-4,i=e.length-2;t[O]=_(e.substr(0,a)),t[A]=_(e.substr(a,2)),t[K]=_(e.substr(i))});function Li(e){return(e+"").toLowerCase().charAt(0)==="p"}var Ai=/[ap]\.?m?\.?/i,Ii=ke("Hours",!0);function $i(e,t,r){return e>11?r?"pm":"PM":r?"am":"AM"}var Sr={calendar:Ta,longDateFormat:Pa,invalidDate:Ca,ordinal:Ua,dayOfMonthOrdinalParse:La,relativeTime:Ia,months:ri,monthsShort:pr,week:mi,weekdays:vi,weekdaysMin:ki,weekdaysShort:vr,meridiemParse:Ai},M={},De={},je;function Ei(e,t){var r,a=Math.min(e.length,t.length);for(r=0;r<a;r+=1)if(e[r]!==t[r])return r;return a}function Qt(e){return e&&e.toLowerCase().replace("_","-")}function Hi(e){for(var t=0,r,a,i,n;t<e.length;){for(n=Qt(e[t]).split("-"),r=n.length,a=Qt(e[t+1]),a=a?a.split("-"):null;r>0;){if(i=rt(n.slice(0,r).join("-")),i)return i;if(a&&a.length>=r&&Ei(n,a)>=r-1)break;r--}t++}return je}function Gi(e){return!!(e&&e.match("^[^/\\\\]*$"))}function rt(e){var t=null,r;if(M[e]===void 0&&typeof module<"u"&&module&&module.exports&&Gi(e))try{t=je._abbr,r=require,r("./locale/"+e),le(t)}catch{M[e]=null}return M[e]}function le(e,t){var r;return e&&(j(t)?r=ae(e):r=Ct(e,t),r?je=r:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),je._abbr}function Ct(e,t){if(t!==null){var r,a=Sr;if(t.abbr=e,M[e]!=null)or("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),a=M[e]._config;else if(t.parentLocale!=null)if(M[t.parentLocale]!=null)a=M[t.parentLocale]._config;else if(r=rt(t.parentLocale),r!=null)a=r._config;else return De[t.parentLocale]||(De[t.parentLocale]=[]),De[t.parentLocale].push({name:e,config:t}),null;return M[e]=new Dt(yt(a,t)),De[e]&&De[e].forEach(function(i){Ct(i.name,i.config)}),le(e),M[e]}else return delete M[e],null}function Vi(e,t){if(t!=null){var r,a,i=Sr;M[e]!=null&&M[e].parentLocale!=null?M[e].set(yt(M[e]._config,t)):(a=rt(e),a!=null&&(i=a._config),t=yt(i,t),a==null&&(t.abbr=e),r=new Dt(t),r.parentLocale=M[e],M[e]=r),le(e)}else M[e]!=null&&(M[e].parentLocale!=null?(M[e]=M[e].parentLocale,e===le()&&le(e)):M[e]!=null&&delete M[e]);return M[e]}function ae(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return je;if(!I(e)){if(t=rt(e),t)return t;e=[e]}return Hi(e)}function zi(){return gt(M)}function Ft(e){var t,r=e._a;return r&&g(e).overflow===-2&&(t=r[X]<0||r[X]>11?X:r[V]<1||r[V]>Rt(r[W],r[X])?V:r[O]<0||r[O]>24||r[O]===24&&(r[A]!==0||r[K]!==0||r[ue]!==0)?O:r[A]<0||r[A]>59?A:r[K]<0||r[K]>59?K:r[ue]<0||r[ue]>999?ue:-1,g(e)._overflowDayOfYear&&(t<W||t>V)&&(t=V),g(e)._overflowWeeks&&t===-1&&(t=Ja),g(e)._overflowWeekday&&t===-1&&(t=Qa),g(e).overflow=t),e}var qi=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Zi=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Bi=/Z|[+-]\d\d(?::?\d\d)?/,Ae=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],ht=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ji=/^\/?Date\((-?\d+)/i,Qi=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Xi={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Dr(e){var t,r,a=e._i,i=qi.exec(a)||Zi.exec(a),n,s,u,p,x=Ae.length,T=ht.length;if(i){for(g(e).iso=!0,t=0,r=x;t<r;t++)if(Ae[t][1].exec(i[1])){s=Ae[t][0],n=Ae[t][2]!==!1;break}if(s==null){e._isValid=!1;return}if(i[3]){for(t=0,r=T;t<r;t++)if(ht[t][1].exec(i[3])){u=(i[2]||" ")+ht[t][0];break}if(u==null){e._isValid=!1;return}}if(!n&&u!=null){e._isValid=!1;return}if(i[4])if(Bi.exec(i[4]))p="Z";else{e._isValid=!1;return}e._f=s+(u||"")+(p||""),Lt(e)}else e._isValid=!1}function Ki(e,t,r,a,i,n){var s=[en(e),pr.indexOf(t),parseInt(r,10),parseInt(a,10),parseInt(i,10)];return n&&s.push(parseInt(n,10)),s}function en(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function tn(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function rn(e,t,r){if(e){var a=vr.indexOf(e),i=new Date(t[0],t[1],t[2]).getDay();if(a!==i)return g(r).weekdayMismatch=!0,r._isValid=!1,!1}return!0}function an(e,t,r){if(e)return Xi[e];if(t)return 0;var a=parseInt(r,10),i=a%100,n=(a-i)/100;return n*60+i}function Mr(e){var t=Qi.exec(tn(e._i)),r;if(t){if(r=Ki(t[4],t[3],t[2],t[5],t[6],t[7]),!rn(t[1],r,e))return;e._a=r,e._tzm=an(t[8],t[9],t[10]),e._d=We.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),g(e).rfc2822=!0}else e._isValid=!1}function nn(e){var t=Ji.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(Dr(e),e._isValid===!1)delete e._isValid;else return;if(Mr(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:d.createFromInputFallback(e)}d.createFromInputFallback=C("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function pe(e,t,r){return e??t??r}function sn(e){var t=new Date(d.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Ut(e){var t,r,a=[],i,n,s;if(!e._d){for(i=sn(e),e._w&&e._a[V]==null&&e._a[X]==null&&on(e),e._dayOfYear!=null&&(s=pe(e._a[W],i[W]),(e._dayOfYear>Oe(s)||e._dayOfYear===0)&&(g(e)._overflowDayOfYear=!0),r=We(s,0,e._dayOfYear),e._a[X]=r.getUTCMonth(),e._a[V]=r.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=a[t]=i[t];for(;t<7;t++)e._a[t]=a[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[O]===24&&e._a[A]===0&&e._a[K]===0&&e._a[ue]===0&&(e._nextDay=!0,e._a[O]=0),e._d=(e._useUTC?We:hi).apply(null,a),n=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[O]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==n&&(g(e).weekdayMismatch=!0)}}function on(e){var t,r,a,i,n,s,u,p,x;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(n=1,s=4,r=pe(t.GG,e._a[W],Re(S(),1,4).year),a=pe(t.W,1),i=pe(t.E,1),(i<1||i>7)&&(p=!0)):(n=e._locale._week.dow,s=e._locale._week.doy,x=Re(S(),n,s),r=pe(t.gg,e._a[W],x.year),a=pe(t.w,x.week),t.d!=null?(i=t.d,(i<0||i>6)&&(p=!0)):t.e!=null?(i=t.e+n,(t.e<0||t.e>6)&&(p=!0)):i=n),a<1||a>te(r,n,s)?g(e)._overflowWeeks=!0:p!=null?g(e)._overflowWeekday=!0:(u=wr(r,a,i,n,s),e._a[W]=u.year,e._dayOfYear=u.dayOfYear)}d.ISO_8601=function(){};d.RFC_2822=function(){};function Lt(e){if(e._f===d.ISO_8601){Dr(e);return}if(e._f===d.RFC_2822){Mr(e);return}e._a=[],g(e).empty=!0;var t=""+e._i,r,a,i,n,s,u=t.length,p=0,x,T;for(i=lr(e._f,e._locale).match(Mt)||[],T=i.length,r=0;r<T;r++)n=i[r],a=(t.match(qa(n,e))||[])[0],a&&(s=t.substr(0,t.indexOf(a)),s.length>0&&g(e).unusedInput.push(s),t=t.slice(t.indexOf(a)+a.length),p+=a.length),ge[n]?(a?g(e).empty=!1:g(e).unusedTokens.push(n),Ba(n,a,e)):e._strict&&!a&&g(e).unusedTokens.push(n);g(e).charsLeftOver=u-p,t.length>0&&g(e).unusedInput.push(t),e._a[O]<=12&&g(e).bigHour===!0&&e._a[O]>0&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[O]=ln(e._locale,e._a[O],e._meridiem),x=g(e).era,x!==null&&(e._a[W]=e._locale.erasConvertYear(x,e._a[W])),Ut(e),Ft(e)}function ln(e,t,r){var a;return r==null?t:e.meridiemHour!=null?e.meridiemHour(t,r):(e.isPM!=null&&(a=e.isPM(r),a&&t<12&&(t+=12),!a&&t===12&&(t=0)),t)}function dn(e){var t,r,a,i,n,s,u=!1,p=e._f.length;if(p===0){g(e).invalidFormat=!0,e._d=new Date(NaN);return}for(i=0;i<p;i++)n=0,s=!1,t=St({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[i],Lt(t),bt(t)&&(s=!0),n+=g(t).charsLeftOver,n+=g(t).unusedTokens.length*10,g(t).score=n,u?n<a&&(a=n,r=t):(a==null||n<a||s)&&(a=n,r=t,s&&(u=!0));ne(e,r||t)}function un(e){if(!e._d){var t=Yt(e._i),r=t.day===void 0?t.date:t.day;e._a=nr([t.year,t.month,r,t.hour,t.minute,t.second,t.millisecond],function(a){return a&&parseInt(a,10)}),Ut(e)}}function cn(e){var t=new Ne(Ft(Yr(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Yr(e){var t=e._i,r=e._f;return e._locale=e._locale||ae(e._l),t===null||r===void 0&&t===""?Be({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),$(t)?new Ne(Ft(t)):(Pe(t)?e._d=t:I(r)?dn(e):r?Lt(e):hn(e),bt(e)||(e._d=null),e))}function hn(e){var t=e._i;j(t)?e._d=new Date(d.now()):Pe(t)?e._d=new Date(t.valueOf()):typeof t=="string"?nn(e):I(t)?(e._a=nr(t.slice(0),function(r){return parseInt(r,10)}),Ut(e)):ce(t)?un(e):re(t)?e._d=new Date(t):d.createFromInputFallback(e)}function Or(e,t,r,a,i){var n={};return(t===!0||t===!1)&&(a=t,t=void 0),(r===!0||r===!1)&&(a=r,r=void 0),(ce(e)&&kt(e)||I(e)&&e.length===0)&&(e=void 0),n._isAMomentObject=!0,n._useUTC=n._isUTC=i,n._l=r,n._i=e,n._f=t,n._strict=a,cn(n)}function S(e,t,r,a){return Or(e,t,r,a,!1)}var fn=C("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=S.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Be()}),mn=C("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=S.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Be()});function Tr(e,t){var r,a;if(t.length===1&&I(t[0])&&(t=t[0]),!t.length)return S();for(r=t[0],a=1;a<t.length;++a)(!t[a].isValid()||t[a][e](r))&&(r=t[a]);return r}function pn(){var e=[].slice.call(arguments,0);return Tr("isBefore",e)}function yn(){var e=[].slice.call(arguments,0);return Tr("isAfter",e)}var gn=function(){return Date.now?Date.now():+new Date},Me=["year","quarter","month","week","day","hour","minute","second","millisecond"];function xn(e){var t,r=!1,a,i=Me.length;for(t in e)if(v(e,t)&&!(Y.call(Me,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(a=0;a<i;++a)if(e[Me[a]]){if(r)return!1;parseFloat(e[Me[a]])!==_(e[Me[a]])&&(r=!0)}return!0}function _n(){return this._isValid}function wn(){return E(NaN)}function at(e){var t=Yt(e),r=t.year||0,a=t.quarter||0,i=t.month||0,n=t.week||t.isoWeek||0,s=t.day||0,u=t.hour||0,p=t.minute||0,x=t.second||0,T=t.millisecond||0;this._isValid=xn(t),this._milliseconds=+T+x*1e3+p*6e4+u*1e3*60*60,this._days=+s+n*7,this._months=+i+a*3+r*12,this._data={},this._locale=ae(),this._bubble()}function Ee(e){return e instanceof at}function _t(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function vn(e,t,r){var a=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),n=0,s;for(s=0;s<a;s++)(r&&e[s]!==t[s]||!r&&_(e[s])!==_(t[s]))&&n++;return n+i}function Wr(e,t){f(e,0,0,function(){var r=this.utcOffset(),a="+";return r<0&&(r=-r,a="-"),a+z(~~(r/60),2)+t+z(~~r%60,2)})}Wr("Z",":");Wr("ZZ","");c("Z",et);c("ZZ",et);b(["Z","ZZ"],function(e,t,r){r._useUTC=!0,r._tzm=At(et,e)});var kn=/([\+\-]|\d\d)/gi;function At(e,t){var r=(t||"").match(e),a,i,n;return r===null?null:(a=r[r.length-1]||[],i=(a+"").match(kn)||["-",0,0],n=+(i[1]*60)+_(i[2]),n===0?0:i[0]==="+"?n:-n)}function It(e,t){var r,a;return t._isUTC?(r=t.clone(),a=($(e)||Pe(e)?e.valueOf():S(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+a),d.updateOffset(r,!1),r):S(e).local()}function wt(e){return-Math.round(e._d.getTimezoneOffset())}d.updateOffset=function(){};function bn(e,t,r){var a=this._offset||0,i;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=At(et,e),e===null)return this}else Math.abs(e)<16&&!r&&(e=e*60);return!this._isUTC&&t&&(i=wt(this)),this._offset=e,this._isUTC=!0,i!=null&&this.add(i,"m"),a!==e&&(!t||this._changeInProgress?Pr(this,E(e-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,d.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?a:wt(this)}function Sn(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function Dn(e){return this.utcOffset(0,e)}function Mn(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(wt(this),"m")),this}function Yn(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=At(Va,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function On(e){return this.isValid()?(e=e?S(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Tn(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Wn(){if(!j(this._isDSTShifted))return this._isDSTShifted;var e={},t;return St(e,this),e=Yr(e),e._a?(t=e._isUTC?q(e._a):S(e._a),this._isDSTShifted=this.isValid()&&vn(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Rn(){return this.isValid()?!this._isUTC:!1}function jn(){return this.isValid()?this._isUTC:!1}function Rr(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Pn=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Nn=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function E(e,t){var r=e,a=null,i,n,s;return Ee(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:re(e)||!isNaN(+e)?(r={},t?r[t]=+e:r.milliseconds=+e):(a=Pn.exec(e))?(i=a[1]==="-"?-1:1,r={y:0,d:_(a[V])*i,h:_(a[O])*i,m:_(a[A])*i,s:_(a[K])*i,ms:_(_t(a[ue]*1e3))*i}):(a=Nn.exec(e))?(i=a[1]==="-"?-1:1,r={y:de(a[2],i),M:de(a[3],i),w:de(a[4],i),d:de(a[5],i),h:de(a[6],i),m:de(a[7],i),s:de(a[8],i)}):r==null?r={}:typeof r=="object"&&("from"in r||"to"in r)&&(s=Cn(S(r.from),S(r.to)),r={},r.ms=s.milliseconds,r.M=s.months),n=new at(r),Ee(e)&&v(e,"_locale")&&(n._locale=e._locale),Ee(e)&&v(e,"_isValid")&&(n._isValid=e._isValid),n}E.fn=at.prototype;E.invalid=wn;function de(e,t){var r=e&&parseFloat(e.replace(",","."));return(isNaN(r)?0:r)*t}function Xt(e,t){var r={};return r.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(r.months,"M").isAfter(t)&&--r.months,r.milliseconds=+t-+e.clone().add(r.months,"M"),r}function Cn(e,t){var r;return e.isValid()&&t.isValid()?(t=It(t,e),e.isBefore(t)?r=Xt(e,t):(r=Xt(t,e),r.milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function jr(e,t){return function(r,a){var i,n;return a!==null&&!isNaN(+a)&&(or(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=r,r=a,a=n),i=E(r,a),Pr(this,i,e),this}}function Pr(e,t,r,a){var i=t._milliseconds,n=_t(t._days),s=_t(t._months);e.isValid()&&(a=a??!0,s&&gr(e,Te(e,"Month")+s*r),n&&mr(e,"Date",Te(e,"Date")+n*r),i&&e._d.setTime(e._d.valueOf()+i*r),a&&d.updateOffset(e,n||s))}var Fn=jr(1,"add"),Un=jr(-1,"subtract");function Nr(e){return typeof e=="string"||e instanceof String}function Ln(e){return $(e)||Pe(e)||Nr(e)||re(e)||In(e)||An(e)||e===null||e===void 0}function An(e){var t=ce(e)&&!kt(e),r=!1,a=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],i,n,s=a.length;for(i=0;i<s;i+=1)n=a[i],r=r||v(e,n);return t&&r}function In(e){var t=I(e),r=!1;return t&&(r=e.filter(function(a){return!re(a)&&Nr(e)}).length===0),t&&r}function $n(e){var t=ce(e)&&!kt(e),r=!1,a=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i,n;for(i=0;i<a.length;i+=1)n=a[i],r=r||v(e,n);return t&&r}function En(e,t){var r=e.diff(t,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function Hn(e,t){arguments.length===1&&(arguments[0]?Ln(arguments[0])?(e=arguments[0],t=void 0):$n(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var r=e||S(),a=It(r,this).startOf("day"),i=d.calendarFormat(this,a)||"sameElse",n=t&&(Z(t[i])?t[i].call(this,r):t[i]);return this.format(n||this.localeData().calendar(i,this,S(r)))}function Gn(){return new Ne(this)}function Vn(e,t){var r=$(e)?e:S(e);return this.isValid()&&r.isValid()?(t=F(t)||"millisecond",t==="millisecond"?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(t).valueOf()):!1}function zn(e,t){var r=$(e)?e:S(e);return this.isValid()&&r.isValid()?(t=F(t)||"millisecond",t==="millisecond"?this.valueOf()<r.valueOf():this.clone().endOf(t).valueOf()<r.valueOf()):!1}function qn(e,t,r,a){var i=$(e)?e:S(e),n=$(t)?t:S(t);return this.isValid()&&i.isValid()&&n.isValid()?(a=a||"()",(a[0]==="("?this.isAfter(i,r):!this.isBefore(i,r))&&(a[1]===")"?this.isBefore(n,r):!this.isAfter(n,r))):!1}function Zn(e,t){var r=$(e)?e:S(e),a;return this.isValid()&&r.isValid()?(t=F(t)||"millisecond",t==="millisecond"?this.valueOf()===r.valueOf():(a=r.valueOf(),this.clone().startOf(t).valueOf()<=a&&a<=this.clone().endOf(t).valueOf())):!1}function Bn(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function Jn(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function Qn(e,t,r){var a,i,n;if(!this.isValid())return NaN;if(a=It(e,this),!a.isValid())return NaN;switch(i=(a.utcOffset()-this.utcOffset())*6e4,t=F(t),t){case"year":n=He(this,a)/12;break;case"month":n=He(this,a);break;case"quarter":n=He(this,a)/3;break;case"second":n=(this-a)/1e3;break;case"minute":n=(this-a)/6e4;break;case"hour":n=(this-a)/36e5;break;case"day":n=(this-a-i)/864e5;break;case"week":n=(this-a-i)/6048e5;break;default:n=this-a}return r?n:N(n)}function He(e,t){if(e.date()<t.date())return-He(t,e);var r=(t.year()-e.year())*12+(t.month()-e.month()),a=e.clone().add(r,"months"),i,n;return t-a<0?(i=e.clone().add(r-1,"months"),n=(t-a)/(a-i)):(i=e.clone().add(r+1,"months"),n=(t-a)/(i-a)),-(r+n)||0}d.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";d.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Xn(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Kn(e){if(!this.isValid())return null;var t=e!==!0,r=t?this.clone().utc():this;return r.year()<0||r.year()>9999?$e(r,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Z(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",$e(r,"Z")):$e(r,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function es(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",r,a,i,n;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),r="["+e+'("]',a=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",n=t+'[")]',this.format(r+a+i+n)}function ts(e){e||(e=this.isUtc()?d.defaultFormatUtc:d.defaultFormat);var t=$e(this,e);return this.localeData().postformat(t)}function rs(e,t){return this.isValid()&&($(e)&&e.isValid()||S(e).isValid())?E({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function as(e){return this.from(S(),e)}function is(e,t){return this.isValid()&&($(e)&&e.isValid()||S(e).isValid())?E({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function ns(e){return this.to(S(),e)}function Cr(e){var t;return e===void 0?this._locale._abbr:(t=ae(e),t!=null&&(this._locale=t),this)}var Fr=C("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Ur(){return this._locale}var ze=1e3,xe=60*ze,qe=60*xe,Lr=(365*400+97)*24*qe;function _e(e,t){return(e%t+t)%t}function Ar(e,t,r){return e<100&&e>=0?new Date(e+400,t,r)-Lr:new Date(e,t,r).valueOf()}function Ir(e,t,r){return e<100&&e>=0?Date.UTC(e+400,t,r)-Lr:Date.UTC(e,t,r)}function ss(e){var t,r;if(e=F(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?Ir:Ar,e){case"year":t=r(this.year(),0,1);break;case"quarter":t=r(this.year(),this.month()-this.month()%3,1);break;case"month":t=r(this.year(),this.month(),1);break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=r(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=_e(t+(this._isUTC?0:this.utcOffset()*xe),qe);break;case"minute":t=this._d.valueOf(),t-=_e(t,xe);break;case"second":t=this._d.valueOf(),t-=_e(t,ze);break}return this._d.setTime(t),d.updateOffset(this,!0),this}function os(e){var t,r;if(e=F(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?Ir:Ar,e){case"year":t=r(this.year()+1,0,1)-1;break;case"quarter":t=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=r(this.year(),this.month()+1,1)-1;break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=qe-_e(t+(this._isUTC?0:this.utcOffset()*xe),qe)-1;break;case"minute":t=this._d.valueOf(),t+=xe-_e(t,xe)-1;break;case"second":t=this._d.valueOf(),t+=ze-_e(t,ze)-1;break}return this._d.setTime(t),d.updateOffset(this,!0),this}function ls(){return this._d.valueOf()-(this._offset||0)*6e4}function ds(){return Math.floor(this.valueOf()/1e3)}function us(){return new Date(this.valueOf())}function cs(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function hs(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function fs(){return this.isValid()?this.toISOString():null}function ms(){return bt(this)}function ps(){return ne({},g(this))}function ys(){return g(this).overflow}function gs(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}f("N",0,0,"eraAbbr");f("NN",0,0,"eraAbbr");f("NNN",0,0,"eraAbbr");f("NNNN",0,0,"eraName");f("NNNNN",0,0,"eraNarrow");f("y",["y",1],"yo","eraYear");f("y",["yy",2],0,"eraYear");f("y",["yyy",3],0,"eraYear");f("y",["yyyy",4],0,"eraYear");c("N",$t);c("NN",$t);c("NNN",$t);c("NNNN",Os);c("NNNNN",Ts);b(["N","NN","NNN","NNNN","NNNNN"],function(e,t,r,a){var i=r._locale.erasParse(e,a,r._strict);i?g(r).era=i:g(r).invalidEra=e});c("y",we);c("yy",we);c("yyy",we);c("yyyy",we);c("yo",Ws);b(["y","yy","yyy","yyyy"],W);b(["yo"],function(e,t,r,a){var i;r._locale._eraYearOrdinalRegex&&(i=e.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?t[W]=r._locale.eraYearOrdinalParse(e,i):t[W]=parseInt(e,10)});function xs(e,t){var r,a,i,n=this._eras||ae("en")._eras;for(r=0,a=n.length;r<a;++r){switch(typeof n[r].since){case"string":i=d(n[r].since).startOf("day"),n[r].since=i.valueOf();break}switch(typeof n[r].until){case"undefined":n[r].until=1/0;break;case"string":i=d(n[r].until).startOf("day").valueOf(),n[r].until=i.valueOf();break}}return n}function _s(e,t,r){var a,i,n=this.eras(),s,u,p;for(e=e.toUpperCase(),a=0,i=n.length;a<i;++a)if(s=n[a].name.toUpperCase(),u=n[a].abbr.toUpperCase(),p=n[a].narrow.toUpperCase(),r)switch(t){case"N":case"NN":case"NNN":if(u===e)return n[a];break;case"NNNN":if(s===e)return n[a];break;case"NNNNN":if(p===e)return n[a];break}else if([s,u,p].indexOf(e)>=0)return n[a]}function ws(e,t){var r=e.since<=e.until?1:-1;return t===void 0?d(e.since).year():d(e.since).year()+(t-e.offset)*r}function vs(){var e,t,r,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),a[e].since<=r&&r<=a[e].until||a[e].until<=r&&r<=a[e].since)return a[e].name;return""}function ks(){var e,t,r,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),a[e].since<=r&&r<=a[e].until||a[e].until<=r&&r<=a[e].since)return a[e].narrow;return""}function bs(){var e,t,r,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),a[e].since<=r&&r<=a[e].until||a[e].until<=r&&r<=a[e].since)return a[e].abbr;return""}function Ss(){var e,t,r,a,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(r=i[e].since<=i[e].until?1:-1,a=this.clone().startOf("day").valueOf(),i[e].since<=a&&a<=i[e].until||i[e].until<=a&&a<=i[e].since)return(this.year()-d(i[e].since).year())*r+i[e].offset;return this.year()}function Ds(e){return v(this,"_erasNameRegex")||Et.call(this),e?this._erasNameRegex:this._erasRegex}function Ms(e){return v(this,"_erasAbbrRegex")||Et.call(this),e?this._erasAbbrRegex:this._erasRegex}function Ys(e){return v(this,"_erasNarrowRegex")||Et.call(this),e?this._erasNarrowRegex:this._erasRegex}function $t(e,t){return t.erasAbbrRegex(e)}function Os(e,t){return t.erasNameRegex(e)}function Ts(e,t){return t.erasNarrowRegex(e)}function Ws(e,t){return t._eraYearOrdinalRegex||we}function Et(){var e=[],t=[],r=[],a=[],i,n,s,u,p,x=this.eras();for(i=0,n=x.length;i<n;++i)s=ee(x[i].name),u=ee(x[i].abbr),p=ee(x[i].narrow),t.push(s),e.push(u),r.push(p),a.push(s),a.push(u),a.push(p);this._erasRegex=new RegExp("^("+a.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}f(0,["gg",2],0,function(){return this.weekYear()%100});f(0,["GG",2],0,function(){return this.isoWeekYear()%100});function it(e,t){f(0,[e,e.length],0,t)}it("gggg","weekYear");it("ggggg","weekYear");it("GGGG","isoWeekYear");it("GGGGG","isoWeekYear");c("G",Ke);c("g",Ke);c("GG",D,P);c("gg",D,P);c("GGGG",Tt,Ot);c("gggg",Tt,Ot);c("GGGGG",Xe,Je);c("ggggg",Xe,Je);Fe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,r,a){t[a.substr(0,2)]=_(e)});Fe(["gg","GG"],function(e,t,r,a){t[a]=d.parseTwoDigitYear(e)});function Rs(e){return $r.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function js(e){return $r.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Ps(){return te(this.year(),1,4)}function Ns(){return te(this.isoWeekYear(),1,4)}function Cs(){var e=this.localeData()._week;return te(this.year(),e.dow,e.doy)}function Fs(){var e=this.localeData()._week;return te(this.weekYear(),e.dow,e.doy)}function $r(e,t,r,a,i){var n;return e==null?Re(this,a,i).year:(n=te(e,a,i),t>n&&(t=n),Us.call(this,e,t,r,a,i))}function Us(e,t,r,a,i){var n=wr(e,t,r,a,i),s=We(n.year,0,n.dayOfYear);return this.year(s.getUTCFullYear()),this.month(s.getUTCMonth()),this.date(s.getUTCDate()),this}f("Q",0,"Qo","quarter");c("Q",dr);b("Q",function(e,t){t[X]=(_(e)-1)*3});function Ls(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}f("D",["DD",2],"Do","date");c("D",D,ve);c("DD",D,P);c("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});b(["D","DD"],V);b("Do",function(e,t){t[V]=_(e.match(D)[0])});var Er=ke("Date",!0);f("DDD",["DDDD",3],"DDDo","dayOfYear");c("DDD",Qe);c("DDDD",ur);b(["DDD","DDDD"],function(e,t,r){r._dayOfYear=_(e)});function As(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}f("m",["mm",2],0,"minute");c("m",D,Wt);c("mm",D,P);b(["m","mm"],A);var Is=ke("Minutes",!1);f("s",["ss",2],0,"second");c("s",D,Wt);c("ss",D,P);b(["s","ss"],K);var $s=ke("Seconds",!1);f("S",0,0,function(){return~~(this.millisecond()/100)});f(0,["SS",2],0,function(){return~~(this.millisecond()/10)});f(0,["SSS",3],0,"millisecond");f(0,["SSSS",4],0,function(){return this.millisecond()*10});f(0,["SSSSS",5],0,function(){return this.millisecond()*100});f(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});f(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});f(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});f(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});c("S",Qe,dr);c("SS",Qe,P);c("SSS",Qe,ur);var se,Hr;for(se="SSSS";se.length<=9;se+="S")c(se,we);function Es(e,t){t[ue]=_(("0."+e)*1e3)}for(se="S";se.length<=9;se+="S")b(se,Es);Hr=ke("Milliseconds",!1);f("z",0,0,"zoneAbbr");f("zz",0,0,"zoneName");function Hs(){return this._isUTC?"UTC":""}function Gs(){return this._isUTC?"Coordinated Universal Time":""}var l=Ne.prototype;l.add=Fn;l.calendar=Hn;l.clone=Gn;l.diff=Qn;l.endOf=os;l.format=ts;l.from=rs;l.fromNow=as;l.to=is;l.toNow=ns;l.get=Ka;l.invalidAt=ys;l.isAfter=Vn;l.isBefore=zn;l.isBetween=qn;l.isSame=Zn;l.isSameOrAfter=Bn;l.isSameOrBefore=Jn;l.isValid=ms;l.lang=Fr;l.locale=Cr;l.localeData=Ur;l.max=mn;l.min=fn;l.parsingFlags=ps;l.set=ei;l.startOf=ss;l.subtract=Un;l.toArray=cs;l.toObject=hs;l.toDate=us;l.toISOString=Kn;l.inspect=es;typeof Symbol<"u"&&Symbol.for!=null&&(l[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});l.toJSON=fs;l.toString=Xn;l.unix=ds;l.valueOf=ls;l.creationData=gs;l.eraName=vs;l.eraNarrow=ks;l.eraAbbr=bs;l.eraYear=Ss;l.year=fr;l.isLeapYear=Xa;l.weekYear=Rs;l.isoWeekYear=js;l.quarter=l.quarters=Ls;l.month=xr;l.daysInMonth=di;l.week=l.weeks=gi;l.isoWeek=l.isoWeeks=xi;l.weeksInYear=Cs;l.weeksInWeekYear=Fs;l.isoWeeksInYear=Ps;l.isoWeeksInISOWeekYear=Ns;l.date=Er;l.day=l.days=Ri;l.weekday=ji;l.isoWeekday=Pi;l.dayOfYear=As;l.hour=l.hours=Ii;l.minute=l.minutes=Is;l.second=l.seconds=$s;l.millisecond=l.milliseconds=Hr;l.utcOffset=bn;l.utc=Dn;l.local=Mn;l.parseZone=Yn;l.hasAlignedHourOffset=On;l.isDST=Tn;l.isLocal=Rn;l.isUtcOffset=jn;l.isUtc=Rr;l.isUTC=Rr;l.zoneAbbr=Hs;l.zoneName=Gs;l.dates=C("dates accessor is deprecated. Use date instead.",Er);l.months=C("months accessor is deprecated. Use month instead",xr);l.years=C("years accessor is deprecated. Use year instead",fr);l.zone=C("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Sn);l.isDSTShifted=C("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Wn);function Vs(e){return S(e*1e3)}function zs(){return S.apply(null,arguments).parseZone()}function Gr(e){return e}var k=Dt.prototype;k.calendar=Wa;k.longDateFormat=Na;k.invalidDate=Fa;k.ordinal=Aa;k.preparse=Gr;k.postformat=Gr;k.relativeTime=$a;k.pastFuture=Ea;k.set=Oa;k.eras=xs;k.erasParse=_s;k.erasConvertYear=ws;k.erasAbbrRegex=Ms;k.erasNameRegex=Ds;k.erasNarrowRegex=Ys;k.months=ni;k.monthsShort=si;k.monthsParse=li;k.monthsRegex=ci;k.monthsShortRegex=ui;k.week=fi;k.firstDayOfYear=yi;k.firstDayOfWeek=pi;k.weekdays=Mi;k.weekdaysMin=Oi;k.weekdaysShort=Yi;k.weekdaysParse=Wi;k.weekdaysRegex=Ni;k.weekdaysShortRegex=Ci;k.weekdaysMinRegex=Fi;k.isPM=Li;k.meridiem=$i;function Ze(e,t,r,a){var i=ae(),n=q().set(a,t);return i[r](n,e)}function Vr(e,t,r){if(re(e)&&(t=e,e=void 0),e=e||"",t!=null)return Ze(e,t,r,"month");var a,i=[];for(a=0;a<12;a++)i[a]=Ze(e,a,r,"month");return i}function Ht(e,t,r,a){typeof e=="boolean"?(re(t)&&(r=t,t=void 0),t=t||""):(t=e,r=t,e=!1,re(t)&&(r=t,t=void 0),t=t||"");var i=ae(),n=e?i._week.dow:0,s,u=[];if(r!=null)return Ze(t,(r+n)%7,a,"day");for(s=0;s<7;s++)u[s]=Ze(t,(s+n)%7,a,"day");return u}function qs(e,t){return Vr(e,t,"months")}function Zs(e,t){return Vr(e,t,"monthsShort")}function Bs(e,t,r){return Ht(e,t,r,"weekdays")}function Js(e,t,r){return Ht(e,t,r,"weekdaysShort")}function Qs(e,t,r){return Ht(e,t,r,"weekdaysMin")}le("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,r=_(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+r}});d.lang=C("moment.lang is deprecated. Use moment.locale instead.",le);d.langData=C("moment.langData is deprecated. Use moment.localeData instead.",ae);var B=Math.abs;function Xs(){var e=this._data;return this._milliseconds=B(this._milliseconds),this._days=B(this._days),this._months=B(this._months),e.milliseconds=B(e.milliseconds),e.seconds=B(e.seconds),e.minutes=B(e.minutes),e.hours=B(e.hours),e.months=B(e.months),e.years=B(e.years),this}function zr(e,t,r,a){var i=E(t,r);return e._milliseconds+=a*i._milliseconds,e._days+=a*i._days,e._months+=a*i._months,e._bubble()}function Ks(e,t){return zr(this,e,t,1)}function eo(e,t){return zr(this,e,t,-1)}function Kt(e){return e<0?Math.floor(e):Math.ceil(e)}function to(){var e=this._milliseconds,t=this._days,r=this._months,a=this._data,i,n,s,u,p;return e>=0&&t>=0&&r>=0||e<=0&&t<=0&&r<=0||(e+=Kt(vt(r)+t)*864e5,t=0,r=0),a.milliseconds=e%1e3,i=N(e/1e3),a.seconds=i%60,n=N(i/60),a.minutes=n%60,s=N(n/60),a.hours=s%24,t+=N(s/24),p=N(qr(t)),r+=p,t-=Kt(vt(p)),u=N(r/12),r%=12,a.days=t,a.months=r,a.years=u,this}function qr(e){return e*4800/146097}function vt(e){return e*146097/4800}function ro(e){if(!this.isValid())return NaN;var t,r,a=this._milliseconds;if(e=F(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+a/864e5,r=this._months+qr(t),e){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(t=this._days+Math.round(vt(this._months)),e){case"week":return t/7+a/6048e5;case"day":return t+a/864e5;case"hour":return t*24+a/36e5;case"minute":return t*1440+a/6e4;case"second":return t*86400+a/1e3;case"millisecond":return Math.floor(t*864e5)+a;default:throw new Error("Unknown unit "+e)}}function ie(e){return function(){return this.as(e)}}var Zr=ie("ms"),ao=ie("s"),io=ie("m"),no=ie("h"),so=ie("d"),oo=ie("w"),lo=ie("M"),uo=ie("Q"),co=ie("y"),ho=Zr;function fo(){return E(this)}function mo(e){return e=F(e),this.isValid()?this[e+"s"]():NaN}function he(e){return function(){return this.isValid()?this._data[e]:NaN}}var po=he("milliseconds"),yo=he("seconds"),go=he("minutes"),xo=he("hours"),_o=he("days"),wo=he("months"),vo=he("years");function ko(){return N(this.days()/7)}var Q=Math.round,ye={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function bo(e,t,r,a,i){return i.relativeTime(t||1,!!r,e,a)}function So(e,t,r,a){var i=E(e).abs(),n=Q(i.as("s")),s=Q(i.as("m")),u=Q(i.as("h")),p=Q(i.as("d")),x=Q(i.as("M")),T=Q(i.as("w")),U=Q(i.as("y")),H=n<=r.ss&&["s",n]||n<r.s&&["ss",n]||s<=1&&["m"]||s<r.m&&["mm",s]||u<=1&&["h"]||u<r.h&&["hh",u]||p<=1&&["d"]||p<r.d&&["dd",p];return r.w!=null&&(H=H||T<=1&&["w"]||T<r.w&&["ww",T]),H=H||x<=1&&["M"]||x<r.M&&["MM",x]||U<=1&&["y"]||["yy",U],H[2]=t,H[3]=+e>0,H[4]=a,bo.apply(null,H)}function Do(e){return e===void 0?Q:typeof e=="function"?(Q=e,!0):!1}function Mo(e,t){return ye[e]===void 0?!1:t===void 0?ye[e]:(ye[e]=t,e==="s"&&(ye.ss=t-1),!0)}function Yo(e,t){if(!this.isValid())return this.localeData().invalidDate();var r=!1,a=ye,i,n;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(r=e),typeof t=="object"&&(a=Object.assign({},ye,t),t.s!=null&&t.ss==null&&(a.ss=t.s-1)),i=this.localeData(),n=So(this,!r,a,i),r&&(n=i.pastFuture(+this,n)),i.postformat(n)}var ft=Math.abs;function fe(e){return(e>0)-(e<0)||+e}function nt(){if(!this.isValid())return this.localeData().invalidDate();var e=ft(this._milliseconds)/1e3,t=ft(this._days),r=ft(this._months),a,i,n,s,u=this.asSeconds(),p,x,T,U;return u?(a=N(e/60),i=N(a/60),e%=60,a%=60,n=N(r/12),r%=12,s=e?e.toFixed(3).replace(/\.?0+$/,""):"",p=u<0?"-":"",x=fe(this._months)!==fe(u)?"-":"",T=fe(this._days)!==fe(u)?"-":"",U=fe(this._milliseconds)!==fe(u)?"-":"",p+"P"+(n?x+n+"Y":"")+(r?x+r+"M":"")+(t?T+t+"D":"")+(i||a||e?"T":"")+(i?U+i+"H":"")+(a?U+a+"M":"")+(e?U+s+"S":"")):"P0D"}var w=at.prototype;w.isValid=_n;w.abs=Xs;w.add=Ks;w.subtract=eo;w.as=ro;w.asMilliseconds=Zr;w.asSeconds=ao;w.asMinutes=io;w.asHours=no;w.asDays=so;w.asWeeks=oo;w.asMonths=lo;w.asQuarters=uo;w.asYears=co;w.valueOf=ho;w._bubble=to;w.clone=fo;w.get=mo;w.milliseconds=po;w.seconds=yo;w.minutes=go;w.hours=xo;w.days=_o;w.weeks=ko;w.months=wo;w.years=vo;w.humanize=Yo;w.toISOString=nt;w.toString=nt;w.toJSON=nt;w.locale=Cr;w.localeData=Ur;w.toIsoString=C("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",nt);w.lang=Fr;f("X",0,0,"unix");f("x",0,0,"valueOf");c("x",Ke);c("X",za);b("X",function(e,t,r){r._d=new Date(parseFloat(e)*1e3)});b("x",function(e,t,r){r._d=new Date(_(e))});//! moment.js
d.version="2.30.1";Ma(S);d.fn=l;d.min=pn;d.max=yn;d.now=gn;d.utc=q;d.unix=Vs;d.months=qs;d.isDate=Pe;d.locale=le;d.invalid=Be;d.duration=E;d.isMoment=$;d.weekdays=Bs;d.parseZone=zs;d.localeData=ae;d.isDuration=Ee;d.monthsShort=Zs;d.weekdaysMin=Qs;d.defineLocale=Ct;d.updateLocale=Vi;d.locales=zi;d.weekdaysShort=Js;d.normalizeUnits=F;d.relativeTimeRounding=Do;d.relativeTimeThreshold=Mo;d.calendarFormat=En;d.prototype=l;d.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const Oo=ea`
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
    background-color: ${h.colorOrange1};
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
    background-color:  ${h.colorOrange1};
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
    color: ${h.colorWhite};
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
    background-color: ${h.colorOrange1};
    position: absolute;
    transform: rotate(45deg);
    border: 2px solid ${h.colorWhite};
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
    border-color: ${h.colorWhite};

  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${h.colorWhite};
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
    color: ${h.colorWhite};
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
    background-color: ${h.colorBlack};
    color: ${h.colorWhite};
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: ${h.colorWhite};
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: ${h.colorWhite};
    color:#3e85f3;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:${h.colorWhite};
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
  .react-datepicker__header__dropdown--select{
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    gap: 10px;    
  }

   .react-datepicker__month-select,
.react-datepicker__year-select {
  -webkit-appearance: none; 
  -moz-appearance: none; 
  appearance: none; 
  background-color: ${h.colorOrange1};
  border: 1px solid ${h.colorBeige};
  border-radius: 2px;
  color: ${h.colorWhite};
  outline: none;

  & > option {
    color: ${h.colorBlack};
    background-color: ${h.colorWhite};
  }
}
`,To=y.div`
  display: flex;
`,er=y.label`
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
`,Wo=y.div`
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
`,Ro=y.div`
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
`,tr=y.input`
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

    ${({haserror:e,isValidationCompleted:t,...r})=>oe`
      border: 1px solid
        ${e?`${h.colorSecondaryRed}`:t?`${h.colorSecondaryGreen}`:`${h.colorInput}`};
    `}
  }

  @media screen and (min-width: 375px) {
    color: white;
    width: 335px;
    ${({haserror:e,isValidationCompleted:t,...r})=>oe`
      border: 1px solid
        ${e?`${h.colorSecondaryRed}`:t?`${h.colorSecondaryGreen}`:`${h.colorInput}`};
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

    ${({haserror:e,isValidationCompleted:t})=>oe`
      border: 1px solid
        ${e?`${h.colorSecondaryRed}`:t?`${h.colorSecondaryGreen}`:`${h.colorInput}`};

      &:hover,
      &:focus {
        ${!t&&`
        border: 1px solid ${h.colorOrange};
      `}
      }
    `}
  }
`,jo=y.div`
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
`,Ie=y.label`
  border-radius: 12px;
  border: transparent;
  outline: transparent;
  width: 161px;
  max-width: 364px;
  text-align: left;
  position: relative;

  color: rgba(239, 237, 232, 0.6);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,mt=y.input`
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

    ${({haserror:e,isValidationCompleted:t,...r})=>oe`
      border: 1px solid
        ${e?`${h.colorSecondaryRed}`:t?`${h.colorSecondaryGreen}`:`${h.colorInput}`};
    `}
  }

  @media screen and (min-width: 375px) {
    color: white;
    width: 161px;
    ${({haserror:e,isValidationCompleted:t,...r})=>oe`
      border: 1px solid
        ${e?`${h.colorSecondaryRed}`:t?`${h.colorSecondaryGreen}`:`${h.colorInput}`};
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

    ${({haserror:e,isValidationCompleted:t})=>oe`
      border: 1px solid
        ${e?`${h.colorSecondaryRed}`:t?`${h.colorSecondaryGreen}`:`${h.colorInput}`};

      &:hover,
      &:focus {
        ${!t&&`
        border: 1px solid ${h.colorOrange};
      `}
      }
    `}
  }
`,Po=y(da)`
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

  ${({haserror:e,isValidationCompleted:t,...r})=>oe`
    border: 1px solid
      ${e?`${h.colorSecondaryRed}`:t?`${h.colorSecondaryGreen}`:`${h.colorInput}`};
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

    ${({haserror:e,isValidationCompleted:t})=>oe`
      border: 1px solid
        ${e?`${h.colorSecondaryRed}`:t?`${h.colorSecondaryGreen}`:`${h.colorInput}`};

      &:hover,
      &:focus {
        ${!t&&`
        border: 1px solid ${h.colorOrange};
      `}
      }
    `}
  }
`,rr=y.div`
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
`,No=y.div`
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
`,G=y.label`
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
`,L=y(ta)`
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
      ${h.colorOrange},
      transparent 50%
    );
    border: 0.11em solid ${h.colorOrange};
  }
`,Co=y.svg`
  stroke: rgba(239, 237, 232, 1);
  width: 18px;
  height: 18px;
  position: absolute;
  top: 35px;
  right: 13px;
  cursor: pointer;
  transition: stroke 0.3s ease;

  &:hover,
  &:focus {
    stroke: ${h.colorOrange1};
  }

  @media (min-width: 768px) {
    top: 36px;
    right: -10px;
  }

  @media (min-width: 1440px) {
    top: 40px;
    right: 15px;

    &:hover {
      stroke: ${h.colorOrange1};
    }
  }
`,J=y(ra)`
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
`,Fo=y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    width: 438px;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (min-width: 1440px) {
    text-align: left;
    flex-direction: row;
  }
`,Uo=y.button`
  @media screen and (min-width: 320px) {
    position: sticky;
    display: flex;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 140px;
    border-radius: 12px;
    background-color: ${h.colorOrange};
    color: ${h.colorWhite};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    outline: none;
    border: transparent;
    margin-top: 28px;
    margin-bottom: 12px;
    transition: background-color 0.3s ease;

    &:hover,
    &:focus {
      background-color: ${h.colorOrange1};
    }

    &:disabled {
      background-color: ${h.colorInput};
    }
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    margin-top: 64px;
    &:disabled {
      background-color: ${h.colorInput};
    }
  }

  @media screen and (min-width: 1440px) {
    display: inline-flex;
    padding: 16px 60px;
    font-size: 20px;
    line-height: 24px;
    width: 192px;

    &:hover,
    &:focus {
      background-color: ${h.colorOrange1};
    }
    &:disabled {
      background-color: ${h.colorInput};
    }
  }
`;d().format("YYYY-MM-DD");const Lo=aa().shape({name:Ue().min(2,"Too Short!").required("Name is required"),email:Ue().email("Invalid email address").required("Email is required"),height:be().label("Height").min(150,"Height must be a number greater than or equal to 150").required("Height is required"),currentWeight:be().label("Current Weight").min(35,"Current Weight must be a number greater than or equal to 35").required("Current Weight is required"),desiredWeight:be().label("Desired Weight").min(35,"Desired Weight must be a number greater than or equal to 35").required("Desired Weight is required"),blood:be().label("Blood Type").oneOf([1,2,3,4,"1","2","3","4"],"Invalid Blood Type").required("Blood Type is required"),sex:Ue().label("Gender").oneOf(["male","female"],"Invalid Gender").required("Gender is required"),levelActivity:be().label("Level of Activity").oneOf([1,2,3,4,5,"1","2","3","4","5"],"Invalid Level of Activity").required("Level of Activity is required"),birthday:Ue().label("Date of Birth").typeError("Invalid Date!")}),Ao=({profile:e,refreshUserData:t})=>{const r=ar(),[a,i]=me.useState(e),[n,s]=me.useState(null),[u,p]=me.useState(!1),[x,T]=me.useState(e.birthday?d(e.birthday).format("DD.MM.YYYY"):"");me.useEffect(()=>{(async()=>{try{const R=await r(sa());R.payload.birthday===void 0&&(R.payload.birthday=""),i(R.payload),t(R.payload),T(R.payload.birthday?d(R.payload.birthday).format("DD.MM.YYYY"):"")}catch(R){console.error("Error fetching user data:",R)}})()},[]);const U=async(m,R)=>{m.birthday===x&&(m.birthday=a.birthday,R.setFieldValue("birthday",x));try{const Gt=d(m.birthday,"DD.MM.YYYY");if(d().diff(Gt,"years")<18){Vt.error("You must be at least 18 years old.",{theme:"dark"}),p(!1);return}const Ho=await r(oa(m));p(!0)}catch{Vt.error("Sorry, something went wrong, please try again",{theme:"dark"})}},H=`12/31/${new Date().getFullYear()}`;return o.jsx(To,{children:o.jsx(ia,{initialValues:{...a,birthday:x},enableReinitialize:!0,validationSchema:Lo,onSubmit:U,children:m=>o.jsxs(na,{children:[o.jsxs(Wo,{children:[o.jsxs(Ro,{children:[o.jsxs(er,{children:["Name",o.jsx(tr,{name:"name",placeholder:"Mike",type:"text",onChange:m.handleChange,value:m.values.name}),o.jsx(J,{name:"name",component:"div"})]}),o.jsxs(er,{children:["Email",o.jsx(tr,{name:"email",placeholder:"jane@acme.com",type:"email",onChange:m.handleChange,value:m.values.email}),o.jsx(J,{name:"email",component:"div"})]})]}),o.jsxs(jo,{children:[o.jsxs(Ie,{children:["Height",o.jsx(mt,{name:"height",placeholder:"0",type:"number",onChange:m.handleChange,value:m.values.height}),o.jsx(J,{name:"height",component:"div"})]}),o.jsxs(Ie,{children:["Current Weight",o.jsx(mt,{name:"currentWeight",placeholder:"0",type:"number",onChange:m.handleChange,value:m.values.currentWeight}),o.jsx(J,{name:"currentWeight",component:"div"})]}),o.jsxs(Ie,{children:["Desired Weight",o.jsx(mt,{name:"desiredWeight",placeholder:"0",type:"number",onChange:m.handleChange,value:m.values.desiredWeight}),o.jsx(J,{name:"desiredWeight",component:"div"})]}),o.jsxs(Ie,{children:["Date of birth",o.jsx(Po,{selected:n,onChange:R=>{m.handleChange,s(R),m.setFieldValue("birthday",R),m.setFieldTouched("birthday",!0)},dateFormat:"dd.MM.yyyy",placeholderText:"00.00.00",name:"birthday",value:m.values.birthday,showMonthDropdown:!0,showYearDropdown:!0,maxDate:new Date(H),dropdownMode:"select",calendarStartDay:1,formatWeekDay:R=>R.substr(0,1)}),o.jsx(Co,{children:o.jsx("use",{href:`${Ye}#icon-calendar`})}),o.jsx(J,{name:"birthday",component:"div"}),o.jsx(Oo,{})]})]}),o.jsxs(rr,{children:[o.jsxs("div",{role:"group","aria-labelledby":"bloodLevel",children:[o.jsx(J,{name:"blood",component:"div"}),o.jsxs(No,{children:["Blood",o.jsxs(G,{children:[o.jsx(L,{type:"radio",name:"blood",value:"1",onChange:m.handleChange,checked:m.values.blood==="1"||m.values.blood===1}),"1"]}),o.jsxs(G,{children:[o.jsx(L,{type:"radio",name:"blood",value:"2",onChange:m.handleChange,checked:m.values.blood==="2"||m.values.blood===2}),"2"]}),o.jsxs(G,{children:[o.jsx(L,{type:"radio",name:"blood",value:"3",onChange:m.handleChange,checked:m.values.blood==="3"||m.values.blood===3}),"3"]}),o.jsxs(G,{children:[o.jsx(L,{type:"radio",name:"blood",value:"4",onChange:m.handleChange,checked:m.values.blood==="4"||m.values.blood===4}),"4"]})]})]}),o.jsxs("div",{role:"group","aria-labelledby":"genderType",children:[o.jsx(J,{name:"sex",component:"div"}),o.jsxs(G,{children:[o.jsx(L,{type:"radio",name:"sex",value:"male",checked:m.values.sex==="male"}),"Male",o.jsx(L,{type:"radio",name:"sex",value:"female",checked:m.values.sex==="female"}),"Female"]})]})]}),o.jsxs(rr,{role:"group","aria-labelledby":"activityGroup",children:[o.jsx(J,{name:"levelActivity",component:"div"}),o.jsxs(Fo,{children:[o.jsxs(G,{children:[o.jsx(L,{type:"radio",name:"levelActivity",value:"1",required:!0,onChange:m.handleChange,checked:m.values.levelActivity==="1"||m.values.levelActivity===1}),"Sedentary lifestyle (little or no physical activity)"]}),o.jsxs(G,{children:[o.jsx(L,{type:"radio",name:"levelActivity",value:"2",required:!0,onChange:m.handleChange,checked:m.values.levelActivity==="2"||m.values.levelActivity===2}),"Light activity (light excercises/sports 1-3 days per week)"]}),o.jsxs(G,{children:[o.jsx(L,{type:"radio",name:"levelActivity",value:"3",required:!0,onChange:m.handleChange,checked:m.values.levelActivity==="3"||m.values.levelActivity===3}),"Moderately active (moderate excercises/sports 2-5 days per week)"," "]}),o.jsxs(G,{children:[o.jsx(L,{type:"radio",name:"levelActivity",value:"4",required:!0,onChange:m.handleChange,checked:m.values.levelActivity==="4"||m.values.levelActivity===4}),"Very active (intence excercises/sports 6-7 days per week)"]}),o.jsxs(G,{children:[o.jsx(L,{type:"radio",name:"levelActivity",value:"5",required:!0,onChange:m.handleChange,checked:m.values.levelActivity==="5"||m.values.levelActivity===5}),"Extremely active (very strenous exercises/sports and physical work)"]})]})]})]}),o.jsx(Uo,{type:"submit",disabled:u||!m.dirty,children:"Save"})]})})})},Io=y.div`
  padding-top: 72px;
`,$o=y.div`
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
`;class Zo extends me.Component{constructor(){super(...arguments);st(this,"state",{profile:{name:"Jane",email:"",height:0,currentWeight:0,desiredWeight:0,blood:"1",sex:"female",levelActivity:"1",avatarURL:"",birthday:""}});st(this,"refreshProfileState",r=>{this.setState({profile:r})})}render(){return o.jsx(la,{children:o.jsxs(Io,{children:[o.jsx("h1",{children:"Profile Settings"}),o.jsxs($o,{children:[o.jsx(Ao,{profile:this.state.profile,refreshUserData:this.refreshProfileState}),o.jsx(Da,{profile:this.state.profile,refreshUserData:this.refreshProfileState})]})]})})}}export{Zo as ProfilePage,Zo as default};
