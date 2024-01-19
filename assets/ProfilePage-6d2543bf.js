var Zr=Object.defineProperty;var Br=(e,t,r)=>t in e?Zr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ot=(e,t,r)=>(Br(e,typeof t!="symbol"?t+"":t,r),r);import{s as p,g as _,j as o,a as Fe,L as Jr,c as xe,d as Be,Q as oe,n as ie,u as Qr,r as Me}from"./index-d3cf589c.js";import{F as Xr,E as Kr,c as ea,a as Ue,b as ke,d as ta,e as ra}from"./index.esm-ec9e9644.js";import{e as aa}from"./StyledDatepicker-103c2b13.js";import"./hoist-non-react-statics.cjs-9c69a634.js";import"./warning-38b9fa9e.js";const sa=p.div`
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
`,ia=p.div`
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
`,na=p.div`
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
`;const oa=p.div`
  display: flex;
  align-items: center;
  align-content: center;
`,la=p.input`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
`,da=p.label`
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
`,ua=p.svg`
  width: 24px;
  height: 24px;

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,ha=p.img`
  border-radius: 100%;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`,ca=p.div`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 8px;
`,fa=p.h2`
  color: #efede8;

  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`,ma=p.p`
  color: rgba(239, 237, 232, 0.5);

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,ya=p.div`
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
`,lt=p.svg`
  @media screen and (min-width: 320px) {
    width: 12px;
    height: 12px;
    fill: ${_.colorWhite};
  }

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,dt=p.div`
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
`,Se=p.div`
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
`,ut=p.span`
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
`,pa=p.div`
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
`;const ga=p.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;
`,xa=p.p`
  @media screen and (min-width: 768px) {
    width: 330px;
  }

  @media screen and (min-width: 1440px) {
    width: 330px;
  }
`,_a=({profile:e})=>o.jsxs(sa,{children:[o.jsxs(ia,{children:[o.jsx(na,{children:o.jsx(oa,{children:o.jsx(la,{type:"file",accept:"image/*",id:"file-input"})})}),o.jsx(da,{htmlFor:"file-input",children:o.jsx(ua,{children:o.jsx("use",{href:Fe+"#icon-check-mark-1"})})}),o.jsx("div",{children:o.jsx(ha,{src:e.avatarURL,alt:"User Avatar"})})]}),o.jsxs(ca,{children:[o.jsx(fa,{children:e.name}),o.jsx(ma,{children:"User"})]}),o.jsxs(ya,{children:[o.jsxs(Vt,{children:[o.jsxs(Se,{children:[o.jsx(dt,{children:o.jsx(lt,{children:o.jsx("use",{href:`${Fe}#icon-fluent_food-24-filled`})})}),o.jsx(ut,{children:" Daily calorie intake"})]}),o.jsx(Se,{children:o.jsx(zt,{children:"0"})})]}),o.jsxs(Vt,{children:[o.jsxs(Se,{children:[o.jsx(dt,{children:o.jsx(lt,{children:o.jsx("use",{href:`${Fe}#icon-dumbbell`})})}),o.jsx(ut,{children:" Daily physical activity"})]}),o.jsxs(Se,{children:[o.jsx(zt,{children:"0"}),o.jsx(ut,{children:"min"})]})]})]}),o.jsx(pa,{children:o.jsxs(Se,{children:[o.jsx(dt,{children:o.jsx(lt,{children:o.jsx("use",{href:`${Fe}#exclamation-mark`})})}),o.jsx(xa,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})}),o.jsx(ga,{children:o.jsx(Jr,{})})]});//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var rr;function d(){return rr.apply(null,arguments)}function wa(e){rr=e}function A(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function ue(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function v(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function St(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(v(e,t))return!1;return!0}function j(e){return e===void 0}function ee(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function je(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function ar(e,t){var r=[],a,s=e.length;for(a=0;a<s;++a)r.push(t(e[a],a));return r}function ae(e,t){for(var r in t)v(t,r)&&(e[r]=t[r]);return v(t,"toString")&&(e.toString=t.toString),v(t,"valueOf")&&(e.valueOf=t.valueOf),e}function V(e,t,r,a){return Mr(e,t,r,a,!0).utc()}function va(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function y(e){return e._pf==null&&(e._pf=va()),e._pf}var pt;Array.prototype.some?pt=Array.prototype.some:pt=function(e){var t=Object(this),r=t.length>>>0,a;for(a=0;a<r;a++)if(a in t&&e.call(this,t[a],a,t))return!0;return!1};function bt(e){var t=null,r=!1,a=e._d&&!isNaN(e._d.getTime());if(a&&(t=y(e),r=pt.call(t.parsedDateParts,function(s){return s!=null}),a=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&r),e._strict&&(a=a&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=a;else return a;return e._isValid}function Je(e){var t=V(NaN);return e!=null?ae(y(t),e):y(t).userInvalidated=!0,t}var qt=d.momentProperties=[],ht=!1;function Dt(e,t){var r,a,s,i=qt.length;if(j(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),j(t._i)||(e._i=t._i),j(t._f)||(e._f=t._f),j(t._l)||(e._l=t._l),j(t._strict)||(e._strict=t._strict),j(t._tzm)||(e._tzm=t._tzm),j(t._isUTC)||(e._isUTC=t._isUTC),j(t._offset)||(e._offset=t._offset),j(t._pf)||(e._pf=y(t)),j(t._locale)||(e._locale=t._locale),i>0)for(r=0;r<i;r++)a=qt[r],s=t[a],j(s)||(e[a]=s);return e}function Ne(e){Dt(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),ht===!1&&(ht=!0,d.updateOffset(this),ht=!1)}function I(e){return e instanceof Ne||e!=null&&e._isAMomentObject!=null}function sr(e){d.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function C(e,t){var r=!0;return ae(function(){if(d.deprecationHandler!=null&&d.deprecationHandler(null,e),r){var a=[],s,i,n,u=arguments.length;for(i=0;i<u;i++){if(s="",typeof arguments[i]=="object"){s+=`
[`+i+"] ";for(n in arguments[0])v(arguments[0],n)&&(s+=n+": "+arguments[0][n]+", ");s=s.slice(0,-2)}else s=arguments[i];a.push(s)}sr(e+`
Arguments: `+Array.prototype.slice.call(a).join("")+`
`+new Error().stack),r=!1}return t.apply(this,arguments)},t)}var Zt={};function ir(e,t){d.deprecationHandler!=null&&d.deprecationHandler(e,t),Zt[e]||(sr(t),Zt[e]=!0)}d.suppressDeprecationWarnings=!1;d.deprecationHandler=null;function z(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function ka(e){var t,r;for(r in e)v(e,r)&&(t=e[r],z(t)?this[r]=t:this["_"+r]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function gt(e,t){var r=ae({},e),a;for(a in t)v(t,a)&&(ue(e[a])&&ue(t[a])?(r[a]={},ae(r[a],e[a]),ae(r[a],t[a])):t[a]!=null?r[a]=t[a]:delete r[a]);for(a in e)v(e,a)&&!v(t,a)&&ue(e[a])&&(r[a]=ae({},r[a]));return r}function Mt(e){e!=null&&this.set(e)}var xt;Object.keys?xt=Object.keys:xt=function(e){var t,r=[];for(t in e)v(e,t)&&r.push(t);return r};var Sa={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function ba(e,t,r){var a=this._calendar[e]||this._calendar.sameElse;return z(a)?a.call(t,r):a}function G(e,t,r){var a=""+Math.abs(e),s=t-a.length,i=e>=0;return(i?r?"+":"":"-")+Math.pow(10,Math.max(0,s)).toString().substr(1)+a}var Yt=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Le=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ct={},ye={};function f(e,t,r,a){var s=a;typeof a=="string"&&(s=function(){return this[a]()}),e&&(ye[e]=s),t&&(ye[t[0]]=function(){return G(s.apply(this,arguments),t[1],t[2])}),r&&(ye[r]=function(){return this.localeData().ordinal(s.apply(this,arguments),e)})}function Da(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Ma(e){var t=e.match(Yt),r,a;for(r=0,a=t.length;r<a;r++)ye[t[r]]?t[r]=ye[t[r]]:t[r]=Da(t[r]);return function(s){var i="",n;for(n=0;n<a;n++)i+=z(t[n])?t[n].call(s,e):t[n];return i}}function Ee(e,t){return e.isValid()?(t=nr(t,e.localeData()),ct[t]=ct[t]||Ma(t),ct[t](e)):e.localeData().invalidDate()}function nr(e,t){var r=5;function a(s){return t.longDateFormat(s)||s}for(Le.lastIndex=0;r>=0&&Le.test(e);)e=e.replace(Le,a),Le.lastIndex=0,r-=1;return e}var Ya={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Oa(e){var t=this._longDateFormat[e],r=this._longDateFormat[e.toUpperCase()];return t||!r?t:(this._longDateFormat[e]=r.match(Yt).map(function(a){return a==="MMMM"||a==="MM"||a==="DD"||a==="dddd"?a.slice(1):a}).join(""),this._longDateFormat[e])}var Ta="Invalid date";function Wa(){return this._invalidDate}var Ra="%d",ja=/\d{1,2}/;function Na(e){return this._ordinal.replace("%d",e)}var Pa={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Ca(e,t,r,a){var s=this._relativeTime[r];return z(s)?s(e,t,r,a):s.replace(/%d/i,e)}function Fa(e,t){var r=this._relativeTime[e>0?"future":"past"];return z(r)?r(t):r.replace(/%s/i,t)}var Bt={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function F(e){return typeof e=="string"?Bt[e]||Bt[e.toLowerCase()]:void 0}function Ot(e){var t={},r,a;for(a in e)v(e,a)&&(r=F(a),r&&(t[r]=e[a]));return t}var Ua={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function La(e){var t=[],r;for(r in e)v(e,r)&&t.push({unit:r,priority:Ua[r]});return t.sort(function(a,s){return a.priority-s.priority}),t}var or=/\d/,N=/\d\d/,lr=/\d{3}/,Tt=/\d{4}/,Qe=/[+-]?\d{6}/,D=/\d\d?/,dr=/\d\d\d\d?/,ur=/\d\d\d\d\d\d?/,Xe=/\d{1,3}/,Wt=/\d{1,4}/,Ke=/[+-]?\d{1,6}/,_e=/\d+/,et=/[+-]?\d+/,Aa=/Z|[+-]\d\d:?\d\d/gi,tt=/Z|[+-]\d\d(?::?\d\d)?/gi,Ia=/[+-]?\d+(\.\d{1,3})?/,Pe=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,we=/^[1-9]\d?/,Rt=/^([1-9]\d|\d)/,Ge;Ge={};function h(e,t,r){Ge[e]=z(t)?t:function(a,s){return a&&r?r:t}}function Ea(e,t){return v(Ge,e)?Ge[e](t._strict,t._locale):new RegExp(Ha(e))}function Ha(e){return X(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,r,a,s,i){return r||a||s||i}))}function X(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function P(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function x(e){var t=+e,r=0;return t!==0&&isFinite(t)&&(r=P(t)),r}var _t={};function S(e,t){var r,a=t,s;for(typeof e=="string"&&(e=[e]),ee(t)&&(a=function(i,n){n[t]=x(i)}),s=e.length,r=0;r<s;r++)_t[e[r]]=a}function Ce(e,t){S(e,function(r,a,s,i){s._w=s._w||{},t(r,s._w,s,i)})}function $a(e,t,r){t!=null&&v(_t,e)&&_t[e](t,r._a,r,e)}function rt(e){return e%4===0&&e%100!==0||e%400===0}var W=0,J=1,$=2,O=3,L=4,Q=5,de=6,Ga=7,Va=8;f("Y",0,0,function(){var e=this.year();return e<=9999?G(e,4):"+"+e});f(0,["YY",2],0,function(){return this.year()%100});f(0,["YYYY",4],0,"year");f(0,["YYYYY",5],0,"year");f(0,["YYYYYY",6,!0],0,"year");h("Y",et);h("YY",D,N);h("YYYY",Wt,Tt);h("YYYYY",Ke,Qe);h("YYYYYY",Ke,Qe);S(["YYYYY","YYYYYY"],W);S("YYYY",function(e,t){t[W]=e.length===2?d.parseTwoDigitYear(e):x(e)});S("YY",function(e,t){t[W]=d.parseTwoDigitYear(e)});S("Y",function(e,t){t[W]=parseInt(e,10)});function Ye(e){return rt(e)?366:365}d.parseTwoDigitYear=function(e){return x(e)+(x(e)>68?1900:2e3)};var hr=ve("FullYear",!0);function za(){return rt(this.year())}function ve(e,t){return function(r){return r!=null?(cr(this,e,r),d.updateOffset(this,t),this):Oe(this,e)}}function Oe(e,t){if(!e.isValid())return NaN;var r=e._d,a=e._isUTC;switch(t){case"Milliseconds":return a?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return a?r.getUTCSeconds():r.getSeconds();case"Minutes":return a?r.getUTCMinutes():r.getMinutes();case"Hours":return a?r.getUTCHours():r.getHours();case"Date":return a?r.getUTCDate():r.getDate();case"Day":return a?r.getUTCDay():r.getDay();case"Month":return a?r.getUTCMonth():r.getMonth();case"FullYear":return a?r.getUTCFullYear():r.getFullYear();default:return NaN}}function cr(e,t,r){var a,s,i,n,u;if(!(!e.isValid()||isNaN(r))){switch(a=e._d,s=e._isUTC,t){case"Milliseconds":return void(s?a.setUTCMilliseconds(r):a.setMilliseconds(r));case"Seconds":return void(s?a.setUTCSeconds(r):a.setSeconds(r));case"Minutes":return void(s?a.setUTCMinutes(r):a.setMinutes(r));case"Hours":return void(s?a.setUTCHours(r):a.setHours(r));case"Date":return void(s?a.setUTCDate(r):a.setDate(r));case"FullYear":break;default:return}i=r,n=e.month(),u=e.date(),u=u===29&&n===1&&!rt(i)?28:u,s?a.setUTCFullYear(i,n,u):a.setFullYear(i,n,u)}}function qa(e){return e=F(e),z(this[e])?this[e]():this}function Za(e,t){if(typeof e=="object"){e=Ot(e);var r=La(e),a,s=r.length;for(a=0;a<s;a++)this[r[a].unit](e[r[a].unit])}else if(e=F(e),z(this[e]))return this[e](t);return this}function Ba(e,t){return(e%t+t)%t}var Y;Array.prototype.indexOf?Y=Array.prototype.indexOf:Y=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function jt(e,t){if(isNaN(e)||isNaN(t))return NaN;var r=Ba(t,12);return e+=(t-r)/12,r===1?rt(e)?29:28:31-r%7%2}f("M",["MM",2],"Mo",function(){return this.month()+1});f("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});f("MMMM",0,0,function(e){return this.localeData().months(this,e)});h("M",D,we);h("MM",D,N);h("MMM",function(e,t){return t.monthsShortRegex(e)});h("MMMM",function(e,t){return t.monthsRegex(e)});S(["M","MM"],function(e,t){t[J]=x(e)-1});S(["MMM","MMMM"],function(e,t,r,a){var s=r._locale.monthsParse(e,a,r._strict);s!=null?t[J]=s:y(r).invalidMonth=e});var Ja="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),fr="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),mr=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Qa=Pe,Xa=Pe;function Ka(e,t){return e?A(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||mr).test(t)?"format":"standalone"][e.month()]:A(this._months)?this._months:this._months.standalone}function es(e,t){return e?A(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[mr.test(t)?"format":"standalone"][e.month()]:A(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function ts(e,t,r){var a,s,i,n=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],a=0;a<12;++a)i=V([2e3,a]),this._shortMonthsParse[a]=this.monthsShort(i,"").toLocaleLowerCase(),this._longMonthsParse[a]=this.months(i,"").toLocaleLowerCase();return r?t==="MMM"?(s=Y.call(this._shortMonthsParse,n),s!==-1?s:null):(s=Y.call(this._longMonthsParse,n),s!==-1?s:null):t==="MMM"?(s=Y.call(this._shortMonthsParse,n),s!==-1?s:(s=Y.call(this._longMonthsParse,n),s!==-1?s:null)):(s=Y.call(this._longMonthsParse,n),s!==-1?s:(s=Y.call(this._shortMonthsParse,n),s!==-1?s:null))}function rs(e,t,r){var a,s,i;if(this._monthsParseExact)return ts.call(this,e,t,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),a=0;a<12;a++){if(s=V([2e3,a]),r&&!this._longMonthsParse[a]&&(this._longMonthsParse[a]=new RegExp("^"+this.months(s,"").replace(".","")+"$","i"),this._shortMonthsParse[a]=new RegExp("^"+this.monthsShort(s,"").replace(".","")+"$","i")),!r&&!this._monthsParse[a]&&(i="^"+this.months(s,"")+"|^"+this.monthsShort(s,""),this._monthsParse[a]=new RegExp(i.replace(".",""),"i")),r&&t==="MMMM"&&this._longMonthsParse[a].test(e))return a;if(r&&t==="MMM"&&this._shortMonthsParse[a].test(e))return a;if(!r&&this._monthsParse[a].test(e))return a}}function yr(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=x(t);else if(t=e.localeData().monthsParse(t),!ee(t))return e}var r=t,a=e.date();return a=a<29?a:Math.min(a,jt(e.year(),r)),e._isUTC?e._d.setUTCMonth(r,a):e._d.setMonth(r,a),e}function pr(e){return e!=null?(yr(this,e),d.updateOffset(this,!0),this):Oe(this,"Month")}function as(){return jt(this.year(),this.month())}function ss(e){return this._monthsParseExact?(v(this,"_monthsRegex")||gr.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(v(this,"_monthsShortRegex")||(this._monthsShortRegex=Qa),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function is(e){return this._monthsParseExact?(v(this,"_monthsRegex")||gr.call(this),e?this._monthsStrictRegex:this._monthsRegex):(v(this,"_monthsRegex")||(this._monthsRegex=Xa),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function gr(){function e(m,g){return g.length-m.length}var t=[],r=[],a=[],s,i,n,u;for(s=0;s<12;s++)i=V([2e3,s]),n=X(this.monthsShort(i,"")),u=X(this.months(i,"")),t.push(n),r.push(u),a.push(u),a.push(n);t.sort(e),r.sort(e),a.sort(e),this._monthsRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function ns(e,t,r,a,s,i,n){var u;return e<100&&e>=0?(u=new Date(e+400,t,r,a,s,i,n),isFinite(u.getFullYear())&&u.setFullYear(e)):u=new Date(e,t,r,a,s,i,n),u}function Te(e){var t,r;return e<100&&e>=0?(r=Array.prototype.slice.call(arguments),r[0]=e+400,t=new Date(Date.UTC.apply(null,r)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Ve(e,t,r){var a=7+t-r,s=(7+Te(e,0,a).getUTCDay()-t)%7;return-s+a-1}function xr(e,t,r,a,s){var i=(7+r-a)%7,n=Ve(e,a,s),u=1+7*(t-1)+i+n,m,g;return u<=0?(m=e-1,g=Ye(m)+u):u>Ye(e)?(m=e+1,g=u-Ye(e)):(m=e,g=u),{year:m,dayOfYear:g}}function We(e,t,r){var a=Ve(e.year(),t,r),s=Math.floor((e.dayOfYear()-a-1)/7)+1,i,n;return s<1?(n=e.year()-1,i=s+K(n,t,r)):s>K(e.year(),t,r)?(i=s-K(e.year(),t,r),n=e.year()+1):(n=e.year(),i=s),{week:i,year:n}}function K(e,t,r){var a=Ve(e,t,r),s=Ve(e+1,t,r);return(Ye(e)-a+s)/7}f("w",["ww",2],"wo","week");f("W",["WW",2],"Wo","isoWeek");h("w",D,we);h("ww",D,N);h("W",D,we);h("WW",D,N);Ce(["w","ww","W","WW"],function(e,t,r,a){t[a.substr(0,1)]=x(e)});function os(e){return We(e,this._week.dow,this._week.doy).week}var ls={dow:0,doy:6};function ds(){return this._week.dow}function us(){return this._week.doy}function hs(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function cs(e){var t=We(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}f("d",0,"do","day");f("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});f("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});f("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});f("e",0,0,"weekday");f("E",0,0,"isoWeekday");h("d",D);h("e",D);h("E",D);h("dd",function(e,t){return t.weekdaysMinRegex(e)});h("ddd",function(e,t){return t.weekdaysShortRegex(e)});h("dddd",function(e,t){return t.weekdaysRegex(e)});Ce(["dd","ddd","dddd"],function(e,t,r,a){var s=r._locale.weekdaysParse(e,a,r._strict);s!=null?t.d=s:y(r).invalidWeekday=e});Ce(["d","e","E"],function(e,t,r,a){t[a]=x(e)});function fs(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function ms(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Nt(e,t){return e.slice(t,7).concat(e.slice(0,t))}var ys="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),_r="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),ps="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),gs=Pe,xs=Pe,_s=Pe;function ws(e,t){var r=A(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?Nt(r,this._week.dow):e?r[e.day()]:r}function vs(e){return e===!0?Nt(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function ks(e){return e===!0?Nt(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Ss(e,t,r){var a,s,i,n=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],a=0;a<7;++a)i=V([2e3,1]).day(a),this._minWeekdaysParse[a]=this.weekdaysMin(i,"").toLocaleLowerCase(),this._shortWeekdaysParse[a]=this.weekdaysShort(i,"").toLocaleLowerCase(),this._weekdaysParse[a]=this.weekdays(i,"").toLocaleLowerCase();return r?t==="dddd"?(s=Y.call(this._weekdaysParse,n),s!==-1?s:null):t==="ddd"?(s=Y.call(this._shortWeekdaysParse,n),s!==-1?s:null):(s=Y.call(this._minWeekdaysParse,n),s!==-1?s:null):t==="dddd"?(s=Y.call(this._weekdaysParse,n),s!==-1||(s=Y.call(this._shortWeekdaysParse,n),s!==-1)?s:(s=Y.call(this._minWeekdaysParse,n),s!==-1?s:null)):t==="ddd"?(s=Y.call(this._shortWeekdaysParse,n),s!==-1||(s=Y.call(this._weekdaysParse,n),s!==-1)?s:(s=Y.call(this._minWeekdaysParse,n),s!==-1?s:null)):(s=Y.call(this._minWeekdaysParse,n),s!==-1||(s=Y.call(this._weekdaysParse,n),s!==-1)?s:(s=Y.call(this._shortWeekdaysParse,n),s!==-1?s:null))}function bs(e,t,r){var a,s,i;if(this._weekdaysParseExact)return Ss.call(this,e,t,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),a=0;a<7;a++){if(s=V([2e3,1]).day(a),r&&!this._fullWeekdaysParse[a]&&(this._fullWeekdaysParse[a]=new RegExp("^"+this.weekdays(s,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[a]=new RegExp("^"+this.weekdaysShort(s,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[a]=new RegExp("^"+this.weekdaysMin(s,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[a]||(i="^"+this.weekdays(s,"")+"|^"+this.weekdaysShort(s,"")+"|^"+this.weekdaysMin(s,""),this._weekdaysParse[a]=new RegExp(i.replace(".",""),"i")),r&&t==="dddd"&&this._fullWeekdaysParse[a].test(e))return a;if(r&&t==="ddd"&&this._shortWeekdaysParse[a].test(e))return a;if(r&&t==="dd"&&this._minWeekdaysParse[a].test(e))return a;if(!r&&this._weekdaysParse[a].test(e))return a}}function Ds(e){if(!this.isValid())return e!=null?this:NaN;var t=Oe(this,"Day");return e!=null?(e=fs(e,this.localeData()),this.add(e-t,"d")):t}function Ms(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function Ys(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=ms(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function Os(e){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||Pt.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(v(this,"_weekdaysRegex")||(this._weekdaysRegex=gs),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Ts(e){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||Pt.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(v(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=xs),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Ws(e){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||Pt.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(v(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=_s),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Pt(){function e(T,c){return c.length-T.length}var t=[],r=[],a=[],s=[],i,n,u,m,g;for(i=0;i<7;i++)n=V([2e3,1]).day(i),u=X(this.weekdaysMin(n,"")),m=X(this.weekdaysShort(n,"")),g=X(this.weekdays(n,"")),t.push(u),r.push(m),a.push(g),s.push(u),s.push(m),s.push(g);t.sort(e),r.sort(e),a.sort(e),s.sort(e),this._weekdaysRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function Ct(){return this.hours()%12||12}function Rs(){return this.hours()||24}f("H",["HH",2],0,"hour");f("h",["hh",2],0,Ct);f("k",["kk",2],0,Rs);f("hmm",0,0,function(){return""+Ct.apply(this)+G(this.minutes(),2)});f("hmmss",0,0,function(){return""+Ct.apply(this)+G(this.minutes(),2)+G(this.seconds(),2)});f("Hmm",0,0,function(){return""+this.hours()+G(this.minutes(),2)});f("Hmmss",0,0,function(){return""+this.hours()+G(this.minutes(),2)+G(this.seconds(),2)});function wr(e,t){f(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}wr("a",!0);wr("A",!1);function vr(e,t){return t._meridiemParse}h("a",vr);h("A",vr);h("H",D,Rt);h("h",D,we);h("k",D,we);h("HH",D,N);h("hh",D,N);h("kk",D,N);h("hmm",dr);h("hmmss",ur);h("Hmm",dr);h("Hmmss",ur);S(["H","HH"],O);S(["k","kk"],function(e,t,r){var a=x(e);t[O]=a===24?0:a});S(["a","A"],function(e,t,r){r._isPm=r._locale.isPM(e),r._meridiem=e});S(["h","hh"],function(e,t,r){t[O]=x(e),y(r).bigHour=!0});S("hmm",function(e,t,r){var a=e.length-2;t[O]=x(e.substr(0,a)),t[L]=x(e.substr(a)),y(r).bigHour=!0});S("hmmss",function(e,t,r){var a=e.length-4,s=e.length-2;t[O]=x(e.substr(0,a)),t[L]=x(e.substr(a,2)),t[Q]=x(e.substr(s)),y(r).bigHour=!0});S("Hmm",function(e,t,r){var a=e.length-2;t[O]=x(e.substr(0,a)),t[L]=x(e.substr(a))});S("Hmmss",function(e,t,r){var a=e.length-4,s=e.length-2;t[O]=x(e.substr(0,a)),t[L]=x(e.substr(a,2)),t[Q]=x(e.substr(s))});function js(e){return(e+"").toLowerCase().charAt(0)==="p"}var Ns=/[ap]\.?m?\.?/i,Ps=ve("Hours",!0);function Cs(e,t,r){return e>11?r?"pm":"PM":r?"am":"AM"}var kr={calendar:Sa,longDateFormat:Ya,invalidDate:Ta,ordinal:Ra,dayOfMonthOrdinalParse:ja,relativeTime:Pa,months:Ja,monthsShort:fr,week:ls,weekdays:ys,weekdaysMin:ps,weekdaysShort:_r,meridiemParse:Ns},M={},be={},Re;function Fs(e,t){var r,a=Math.min(e.length,t.length);for(r=0;r<a;r+=1)if(e[r]!==t[r])return r;return a}function Jt(e){return e&&e.toLowerCase().replace("_","-")}function Us(e){for(var t=0,r,a,s,i;t<e.length;){for(i=Jt(e[t]).split("-"),r=i.length,a=Jt(e[t+1]),a=a?a.split("-"):null;r>0;){if(s=at(i.slice(0,r).join("-")),s)return s;if(a&&a.length>=r&&Fs(i,a)>=r-1)break;r--}t++}return Re}function Ls(e){return!!(e&&e.match("^[^/\\\\]*$"))}function at(e){var t=null,r;if(M[e]===void 0&&typeof module<"u"&&module&&module.exports&&Ls(e))try{t=Re._abbr,r=require,r("./locale/"+e),ne(t)}catch{M[e]=null}return M[e]}function ne(e,t){var r;return e&&(j(t)?r=te(e):r=Ft(e,t),r?Re=r:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Re._abbr}function Ft(e,t){if(t!==null){var r,a=kr;if(t.abbr=e,M[e]!=null)ir("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),a=M[e]._config;else if(t.parentLocale!=null)if(M[t.parentLocale]!=null)a=M[t.parentLocale]._config;else if(r=at(t.parentLocale),r!=null)a=r._config;else return be[t.parentLocale]||(be[t.parentLocale]=[]),be[t.parentLocale].push({name:e,config:t}),null;return M[e]=new Mt(gt(a,t)),be[e]&&be[e].forEach(function(s){Ft(s.name,s.config)}),ne(e),M[e]}else return delete M[e],null}function As(e,t){if(t!=null){var r,a,s=kr;M[e]!=null&&M[e].parentLocale!=null?M[e].set(gt(M[e]._config,t)):(a=at(e),a!=null&&(s=a._config),t=gt(s,t),a==null&&(t.abbr=e),r=new Mt(t),r.parentLocale=M[e],M[e]=r),ne(e)}else M[e]!=null&&(M[e].parentLocale!=null?(M[e]=M[e].parentLocale,e===ne()&&ne(e)):M[e]!=null&&delete M[e]);return M[e]}function te(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Re;if(!A(e)){if(t=at(e),t)return t;e=[e]}return Us(e)}function Is(){return xt(M)}function Ut(e){var t,r=e._a;return r&&y(e).overflow===-2&&(t=r[J]<0||r[J]>11?J:r[$]<1||r[$]>jt(r[W],r[J])?$:r[O]<0||r[O]>24||r[O]===24&&(r[L]!==0||r[Q]!==0||r[de]!==0)?O:r[L]<0||r[L]>59?L:r[Q]<0||r[Q]>59?Q:r[de]<0||r[de]>999?de:-1,y(e)._overflowDayOfYear&&(t<W||t>$)&&(t=$),y(e)._overflowWeeks&&t===-1&&(t=Ga),y(e)._overflowWeekday&&t===-1&&(t=Va),y(e).overflow=t),e}var Es=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Hs=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,$s=/Z|[+-]\d\d(?::?\d\d)?/,Ae=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],ft=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Gs=/^\/?Date\((-?\d+)/i,Vs=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,zs={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Sr(e){var t,r,a=e._i,s=Es.exec(a)||Hs.exec(a),i,n,u,m,g=Ae.length,T=ft.length;if(s){for(y(e).iso=!0,t=0,r=g;t<r;t++)if(Ae[t][1].exec(s[1])){n=Ae[t][0],i=Ae[t][2]!==!1;break}if(n==null){e._isValid=!1;return}if(s[3]){for(t=0,r=T;t<r;t++)if(ft[t][1].exec(s[3])){u=(s[2]||" ")+ft[t][0];break}if(u==null){e._isValid=!1;return}}if(!i&&u!=null){e._isValid=!1;return}if(s[4])if($s.exec(s[4]))m="Z";else{e._isValid=!1;return}e._f=n+(u||"")+(m||""),At(e)}else e._isValid=!1}function qs(e,t,r,a,s,i){var n=[Zs(e),fr.indexOf(t),parseInt(r,10),parseInt(a,10),parseInt(s,10)];return i&&n.push(parseInt(i,10)),n}function Zs(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function Bs(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Js(e,t,r){if(e){var a=_r.indexOf(e),s=new Date(t[0],t[1],t[2]).getDay();if(a!==s)return y(r).weekdayMismatch=!0,r._isValid=!1,!1}return!0}function Qs(e,t,r){if(e)return zs[e];if(t)return 0;var a=parseInt(r,10),s=a%100,i=(a-s)/100;return i*60+s}function br(e){var t=Vs.exec(Bs(e._i)),r;if(t){if(r=qs(t[4],t[3],t[2],t[5],t[6],t[7]),!Js(t[1],r,e))return;e._a=r,e._tzm=Qs(t[8],t[9],t[10]),e._d=Te.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),y(e).rfc2822=!0}else e._isValid=!1}function Xs(e){var t=Gs.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(Sr(e),e._isValid===!1)delete e._isValid;else return;if(br(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:d.createFromInputFallback(e)}d.createFromInputFallback=C("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function fe(e,t,r){return e??t??r}function Ks(e){var t=new Date(d.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Lt(e){var t,r,a=[],s,i,n;if(!e._d){for(s=Ks(e),e._w&&e._a[$]==null&&e._a[J]==null&&ei(e),e._dayOfYear!=null&&(n=fe(e._a[W],s[W]),(e._dayOfYear>Ye(n)||e._dayOfYear===0)&&(y(e)._overflowDayOfYear=!0),r=Te(n,0,e._dayOfYear),e._a[J]=r.getUTCMonth(),e._a[$]=r.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=a[t]=s[t];for(;t<7;t++)e._a[t]=a[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[O]===24&&e._a[L]===0&&e._a[Q]===0&&e._a[de]===0&&(e._nextDay=!0,e._a[O]=0),e._d=(e._useUTC?Te:ns).apply(null,a),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[O]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==i&&(y(e).weekdayMismatch=!0)}}function ei(e){var t,r,a,s,i,n,u,m,g;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(i=1,n=4,r=fe(t.GG,e._a[W],We(b(),1,4).year),a=fe(t.W,1),s=fe(t.E,1),(s<1||s>7)&&(m=!0)):(i=e._locale._week.dow,n=e._locale._week.doy,g=We(b(),i,n),r=fe(t.gg,e._a[W],g.year),a=fe(t.w,g.week),t.d!=null?(s=t.d,(s<0||s>6)&&(m=!0)):t.e!=null?(s=t.e+i,(t.e<0||t.e>6)&&(m=!0)):s=i),a<1||a>K(r,i,n)?y(e)._overflowWeeks=!0:m!=null?y(e)._overflowWeekday=!0:(u=xr(r,a,s,i,n),e._a[W]=u.year,e._dayOfYear=u.dayOfYear)}d.ISO_8601=function(){};d.RFC_2822=function(){};function At(e){if(e._f===d.ISO_8601){Sr(e);return}if(e._f===d.RFC_2822){br(e);return}e._a=[],y(e).empty=!0;var t=""+e._i,r,a,s,i,n,u=t.length,m=0,g,T;for(s=nr(e._f,e._locale).match(Yt)||[],T=s.length,r=0;r<T;r++)i=s[r],a=(t.match(Ea(i,e))||[])[0],a&&(n=t.substr(0,t.indexOf(a)),n.length>0&&y(e).unusedInput.push(n),t=t.slice(t.indexOf(a)+a.length),m+=a.length),ye[i]?(a?y(e).empty=!1:y(e).unusedTokens.push(i),$a(i,a,e)):e._strict&&!a&&y(e).unusedTokens.push(i);y(e).charsLeftOver=u-m,t.length>0&&y(e).unusedInput.push(t),e._a[O]<=12&&y(e).bigHour===!0&&e._a[O]>0&&(y(e).bigHour=void 0),y(e).parsedDateParts=e._a.slice(0),y(e).meridiem=e._meridiem,e._a[O]=ti(e._locale,e._a[O],e._meridiem),g=y(e).era,g!==null&&(e._a[W]=e._locale.erasConvertYear(g,e._a[W])),Lt(e),Ut(e)}function ti(e,t,r){var a;return r==null?t:e.meridiemHour!=null?e.meridiemHour(t,r):(e.isPM!=null&&(a=e.isPM(r),a&&t<12&&(t+=12),!a&&t===12&&(t=0)),t)}function ri(e){var t,r,a,s,i,n,u=!1,m=e._f.length;if(m===0){y(e).invalidFormat=!0,e._d=new Date(NaN);return}for(s=0;s<m;s++)i=0,n=!1,t=Dt({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[s],At(t),bt(t)&&(n=!0),i+=y(t).charsLeftOver,i+=y(t).unusedTokens.length*10,y(t).score=i,u?i<a&&(a=i,r=t):(a==null||i<a||n)&&(a=i,r=t,n&&(u=!0));ae(e,r||t)}function ai(e){if(!e._d){var t=Ot(e._i),r=t.day===void 0?t.date:t.day;e._a=ar([t.year,t.month,r,t.hour,t.minute,t.second,t.millisecond],function(a){return a&&parseInt(a,10)}),Lt(e)}}function si(e){var t=new Ne(Ut(Dr(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Dr(e){var t=e._i,r=e._f;return e._locale=e._locale||te(e._l),t===null||r===void 0&&t===""?Je({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),I(t)?new Ne(Ut(t)):(je(t)?e._d=t:A(r)?ri(e):r?At(e):ii(e),bt(e)||(e._d=null),e))}function ii(e){var t=e._i;j(t)?e._d=new Date(d.now()):je(t)?e._d=new Date(t.valueOf()):typeof t=="string"?Xs(e):A(t)?(e._a=ar(t.slice(0),function(r){return parseInt(r,10)}),Lt(e)):ue(t)?ai(e):ee(t)?e._d=new Date(t):d.createFromInputFallback(e)}function Mr(e,t,r,a,s){var i={};return(t===!0||t===!1)&&(a=t,t=void 0),(r===!0||r===!1)&&(a=r,r=void 0),(ue(e)&&St(e)||A(e)&&e.length===0)&&(e=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=s,i._l=r,i._i=e,i._f=t,i._strict=a,si(i)}function b(e,t,r,a){return Mr(e,t,r,a,!1)}var ni=C("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=b.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Je()}),oi=C("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=b.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Je()});function Yr(e,t){var r,a;if(t.length===1&&A(t[0])&&(t=t[0]),!t.length)return b();for(r=t[0],a=1;a<t.length;++a)(!t[a].isValid()||t[a][e](r))&&(r=t[a]);return r}function li(){var e=[].slice.call(arguments,0);return Yr("isBefore",e)}function di(){var e=[].slice.call(arguments,0);return Yr("isAfter",e)}var ui=function(){return Date.now?Date.now():+new Date},De=["year","quarter","month","week","day","hour","minute","second","millisecond"];function hi(e){var t,r=!1,a,s=De.length;for(t in e)if(v(e,t)&&!(Y.call(De,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(a=0;a<s;++a)if(e[De[a]]){if(r)return!1;parseFloat(e[De[a]])!==x(e[De[a]])&&(r=!0)}return!0}function ci(){return this._isValid}function fi(){return E(NaN)}function st(e){var t=Ot(e),r=t.year||0,a=t.quarter||0,s=t.month||0,i=t.week||t.isoWeek||0,n=t.day||0,u=t.hour||0,m=t.minute||0,g=t.second||0,T=t.millisecond||0;this._isValid=hi(t),this._milliseconds=+T+g*1e3+m*6e4+u*1e3*60*60,this._days=+n+i*7,this._months=+s+a*3+r*12,this._data={},this._locale=te(),this._bubble()}function He(e){return e instanceof st}function wt(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function mi(e,t,r){var a=Math.min(e.length,t.length),s=Math.abs(e.length-t.length),i=0,n;for(n=0;n<a;n++)(r&&e[n]!==t[n]||!r&&x(e[n])!==x(t[n]))&&i++;return i+s}function Or(e,t){f(e,0,0,function(){var r=this.utcOffset(),a="+";return r<0&&(r=-r,a="-"),a+G(~~(r/60),2)+t+G(~~r%60,2)})}Or("Z",":");Or("ZZ","");h("Z",tt);h("ZZ",tt);S(["Z","ZZ"],function(e,t,r){r._useUTC=!0,r._tzm=It(tt,e)});var yi=/([\+\-]|\d\d)/gi;function It(e,t){var r=(t||"").match(e),a,s,i;return r===null?null:(a=r[r.length-1]||[],s=(a+"").match(yi)||["-",0,0],i=+(s[1]*60)+x(s[2]),i===0?0:s[0]==="+"?i:-i)}function Et(e,t){var r,a;return t._isUTC?(r=t.clone(),a=(I(e)||je(e)?e.valueOf():b(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+a),d.updateOffset(r,!1),r):b(e).local()}function vt(e){return-Math.round(e._d.getTimezoneOffset())}d.updateOffset=function(){};function pi(e,t,r){var a=this._offset||0,s;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=It(tt,e),e===null)return this}else Math.abs(e)<16&&!r&&(e=e*60);return!this._isUTC&&t&&(s=vt(this)),this._offset=e,this._isUTC=!0,s!=null&&this.add(s,"m"),a!==e&&(!t||this._changeInProgress?Rr(this,E(e-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,d.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?a:vt(this)}function gi(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function xi(e){return this.utcOffset(0,e)}function _i(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(vt(this),"m")),this}function wi(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=It(Aa,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function vi(e){return this.isValid()?(e=e?b(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function ki(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Si(){if(!j(this._isDSTShifted))return this._isDSTShifted;var e={},t;return Dt(e,this),e=Dr(e),e._a?(t=e._isUTC?V(e._a):b(e._a),this._isDSTShifted=this.isValid()&&mi(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function bi(){return this.isValid()?!this._isUTC:!1}function Di(){return this.isValid()?this._isUTC:!1}function Tr(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Mi=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Yi=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function E(e,t){var r=e,a=null,s,i,n;return He(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:ee(e)||!isNaN(+e)?(r={},t?r[t]=+e:r.milliseconds=+e):(a=Mi.exec(e))?(s=a[1]==="-"?-1:1,r={y:0,d:x(a[$])*s,h:x(a[O])*s,m:x(a[L])*s,s:x(a[Q])*s,ms:x(wt(a[de]*1e3))*s}):(a=Yi.exec(e))?(s=a[1]==="-"?-1:1,r={y:le(a[2],s),M:le(a[3],s),w:le(a[4],s),d:le(a[5],s),h:le(a[6],s),m:le(a[7],s),s:le(a[8],s)}):r==null?r={}:typeof r=="object"&&("from"in r||"to"in r)&&(n=Oi(b(r.from),b(r.to)),r={},r.ms=n.milliseconds,r.M=n.months),i=new st(r),He(e)&&v(e,"_locale")&&(i._locale=e._locale),He(e)&&v(e,"_isValid")&&(i._isValid=e._isValid),i}E.fn=st.prototype;E.invalid=fi;function le(e,t){var r=e&&parseFloat(e.replace(",","."));return(isNaN(r)?0:r)*t}function Qt(e,t){var r={};return r.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(r.months,"M").isAfter(t)&&--r.months,r.milliseconds=+t-+e.clone().add(r.months,"M"),r}function Oi(e,t){var r;return e.isValid()&&t.isValid()?(t=Et(t,e),e.isBefore(t)?r=Qt(e,t):(r=Qt(t,e),r.milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function Wr(e,t){return function(r,a){var s,i;return a!==null&&!isNaN(+a)&&(ir(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=r,r=a,a=i),s=E(r,a),Rr(this,s,e),this}}function Rr(e,t,r,a){var s=t._milliseconds,i=wt(t._days),n=wt(t._months);e.isValid()&&(a=a??!0,n&&yr(e,Oe(e,"Month")+n*r),i&&cr(e,"Date",Oe(e,"Date")+i*r),s&&e._d.setTime(e._d.valueOf()+s*r),a&&d.updateOffset(e,i||n))}var Ti=Wr(1,"add"),Wi=Wr(-1,"subtract");function jr(e){return typeof e=="string"||e instanceof String}function Ri(e){return I(e)||je(e)||jr(e)||ee(e)||Ni(e)||ji(e)||e===null||e===void 0}function ji(e){var t=ue(e)&&!St(e),r=!1,a=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],s,i,n=a.length;for(s=0;s<n;s+=1)i=a[s],r=r||v(e,i);return t&&r}function Ni(e){var t=A(e),r=!1;return t&&(r=e.filter(function(a){return!ee(a)&&jr(e)}).length===0),t&&r}function Pi(e){var t=ue(e)&&!St(e),r=!1,a=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],s,i;for(s=0;s<a.length;s+=1)i=a[s],r=r||v(e,i);return t&&r}function Ci(e,t){var r=e.diff(t,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function Fi(e,t){arguments.length===1&&(arguments[0]?Ri(arguments[0])?(e=arguments[0],t=void 0):Pi(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var r=e||b(),a=Et(r,this).startOf("day"),s=d.calendarFormat(this,a)||"sameElse",i=t&&(z(t[s])?t[s].call(this,r):t[s]);return this.format(i||this.localeData().calendar(s,this,b(r)))}function Ui(){return new Ne(this)}function Li(e,t){var r=I(e)?e:b(e);return this.isValid()&&r.isValid()?(t=F(t)||"millisecond",t==="millisecond"?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(t).valueOf()):!1}function Ai(e,t){var r=I(e)?e:b(e);return this.isValid()&&r.isValid()?(t=F(t)||"millisecond",t==="millisecond"?this.valueOf()<r.valueOf():this.clone().endOf(t).valueOf()<r.valueOf()):!1}function Ii(e,t,r,a){var s=I(e)?e:b(e),i=I(t)?t:b(t);return this.isValid()&&s.isValid()&&i.isValid()?(a=a||"()",(a[0]==="("?this.isAfter(s,r):!this.isBefore(s,r))&&(a[1]===")"?this.isBefore(i,r):!this.isAfter(i,r))):!1}function Ei(e,t){var r=I(e)?e:b(e),a;return this.isValid()&&r.isValid()?(t=F(t)||"millisecond",t==="millisecond"?this.valueOf()===r.valueOf():(a=r.valueOf(),this.clone().startOf(t).valueOf()<=a&&a<=this.clone().endOf(t).valueOf())):!1}function Hi(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function $i(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function Gi(e,t,r){var a,s,i;if(!this.isValid())return NaN;if(a=Et(e,this),!a.isValid())return NaN;switch(s=(a.utcOffset()-this.utcOffset())*6e4,t=F(t),t){case"year":i=$e(this,a)/12;break;case"month":i=$e(this,a);break;case"quarter":i=$e(this,a)/3;break;case"second":i=(this-a)/1e3;break;case"minute":i=(this-a)/6e4;break;case"hour":i=(this-a)/36e5;break;case"day":i=(this-a-s)/864e5;break;case"week":i=(this-a-s)/6048e5;break;default:i=this-a}return r?i:P(i)}function $e(e,t){if(e.date()<t.date())return-$e(t,e);var r=(t.year()-e.year())*12+(t.month()-e.month()),a=e.clone().add(r,"months"),s,i;return t-a<0?(s=e.clone().add(r-1,"months"),i=(t-a)/(a-s)):(s=e.clone().add(r+1,"months"),i=(t-a)/(s-a)),-(r+i)||0}d.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";d.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Vi(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function zi(e){if(!this.isValid())return null;var t=e!==!0,r=t?this.clone().utc():this;return r.year()<0||r.year()>9999?Ee(r,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):z(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Ee(r,"Z")):Ee(r,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function qi(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",r,a,s,i;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),r="["+e+'("]',a=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",s="-MM-DD[T]HH:mm:ss.SSS",i=t+'[")]',this.format(r+a+s+i)}function Zi(e){e||(e=this.isUtc()?d.defaultFormatUtc:d.defaultFormat);var t=Ee(this,e);return this.localeData().postformat(t)}function Bi(e,t){return this.isValid()&&(I(e)&&e.isValid()||b(e).isValid())?E({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Ji(e){return this.from(b(),e)}function Qi(e,t){return this.isValid()&&(I(e)&&e.isValid()||b(e).isValid())?E({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Xi(e){return this.to(b(),e)}function Nr(e){var t;return e===void 0?this._locale._abbr:(t=te(e),t!=null&&(this._locale=t),this)}var Pr=C("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Cr(){return this._locale}var ze=1e3,pe=60*ze,qe=60*pe,Fr=(365*400+97)*24*qe;function ge(e,t){return(e%t+t)%t}function Ur(e,t,r){return e<100&&e>=0?new Date(e+400,t,r)-Fr:new Date(e,t,r).valueOf()}function Lr(e,t,r){return e<100&&e>=0?Date.UTC(e+400,t,r)-Fr:Date.UTC(e,t,r)}function Ki(e){var t,r;if(e=F(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?Lr:Ur,e){case"year":t=r(this.year(),0,1);break;case"quarter":t=r(this.year(),this.month()-this.month()%3,1);break;case"month":t=r(this.year(),this.month(),1);break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=r(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=ge(t+(this._isUTC?0:this.utcOffset()*pe),qe);break;case"minute":t=this._d.valueOf(),t-=ge(t,pe);break;case"second":t=this._d.valueOf(),t-=ge(t,ze);break}return this._d.setTime(t),d.updateOffset(this,!0),this}function en(e){var t,r;if(e=F(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?Lr:Ur,e){case"year":t=r(this.year()+1,0,1)-1;break;case"quarter":t=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=r(this.year(),this.month()+1,1)-1;break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=qe-ge(t+(this._isUTC?0:this.utcOffset()*pe),qe)-1;break;case"minute":t=this._d.valueOf(),t+=pe-ge(t,pe)-1;break;case"second":t=this._d.valueOf(),t+=ze-ge(t,ze)-1;break}return this._d.setTime(t),d.updateOffset(this,!0),this}function tn(){return this._d.valueOf()-(this._offset||0)*6e4}function rn(){return Math.floor(this.valueOf()/1e3)}function an(){return new Date(this.valueOf())}function sn(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function nn(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function on(){return this.isValid()?this.toISOString():null}function ln(){return bt(this)}function dn(){return ae({},y(this))}function un(){return y(this).overflow}function hn(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}f("N",0,0,"eraAbbr");f("NN",0,0,"eraAbbr");f("NNN",0,0,"eraAbbr");f("NNNN",0,0,"eraName");f("NNNNN",0,0,"eraNarrow");f("y",["y",1],"yo","eraYear");f("y",["yy",2],0,"eraYear");f("y",["yyy",3],0,"eraYear");f("y",["yyyy",4],0,"eraYear");h("N",Ht);h("NN",Ht);h("NNN",Ht);h("NNNN",kn);h("NNNNN",Sn);S(["N","NN","NNN","NNNN","NNNNN"],function(e,t,r,a){var s=r._locale.erasParse(e,a,r._strict);s?y(r).era=s:y(r).invalidEra=e});h("y",_e);h("yy",_e);h("yyy",_e);h("yyyy",_e);h("yo",bn);S(["y","yy","yyy","yyyy"],W);S(["yo"],function(e,t,r,a){var s;r._locale._eraYearOrdinalRegex&&(s=e.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?t[W]=r._locale.eraYearOrdinalParse(e,s):t[W]=parseInt(e,10)});function cn(e,t){var r,a,s,i=this._eras||te("en")._eras;for(r=0,a=i.length;r<a;++r){switch(typeof i[r].since){case"string":s=d(i[r].since).startOf("day"),i[r].since=s.valueOf();break}switch(typeof i[r].until){case"undefined":i[r].until=1/0;break;case"string":s=d(i[r].until).startOf("day").valueOf(),i[r].until=s.valueOf();break}}return i}function fn(e,t,r){var a,s,i=this.eras(),n,u,m;for(e=e.toUpperCase(),a=0,s=i.length;a<s;++a)if(n=i[a].name.toUpperCase(),u=i[a].abbr.toUpperCase(),m=i[a].narrow.toUpperCase(),r)switch(t){case"N":case"NN":case"NNN":if(u===e)return i[a];break;case"NNNN":if(n===e)return i[a];break;case"NNNNN":if(m===e)return i[a];break}else if([n,u,m].indexOf(e)>=0)return i[a]}function mn(e,t){var r=e.since<=e.until?1:-1;return t===void 0?d(e.since).year():d(e.since).year()+(t-e.offset)*r}function yn(){var e,t,r,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),a[e].since<=r&&r<=a[e].until||a[e].until<=r&&r<=a[e].since)return a[e].name;return""}function pn(){var e,t,r,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),a[e].since<=r&&r<=a[e].until||a[e].until<=r&&r<=a[e].since)return a[e].narrow;return""}function gn(){var e,t,r,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),a[e].since<=r&&r<=a[e].until||a[e].until<=r&&r<=a[e].since)return a[e].abbr;return""}function xn(){var e,t,r,a,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e)if(r=s[e].since<=s[e].until?1:-1,a=this.clone().startOf("day").valueOf(),s[e].since<=a&&a<=s[e].until||s[e].until<=a&&a<=s[e].since)return(this.year()-d(s[e].since).year())*r+s[e].offset;return this.year()}function _n(e){return v(this,"_erasNameRegex")||$t.call(this),e?this._erasNameRegex:this._erasRegex}function wn(e){return v(this,"_erasAbbrRegex")||$t.call(this),e?this._erasAbbrRegex:this._erasRegex}function vn(e){return v(this,"_erasNarrowRegex")||$t.call(this),e?this._erasNarrowRegex:this._erasRegex}function Ht(e,t){return t.erasAbbrRegex(e)}function kn(e,t){return t.erasNameRegex(e)}function Sn(e,t){return t.erasNarrowRegex(e)}function bn(e,t){return t._eraYearOrdinalRegex||_e}function $t(){var e=[],t=[],r=[],a=[],s,i,n,u,m,g=this.eras();for(s=0,i=g.length;s<i;++s)n=X(g[s].name),u=X(g[s].abbr),m=X(g[s].narrow),t.push(n),e.push(u),r.push(m),a.push(n),a.push(u),a.push(m);this._erasRegex=new RegExp("^("+a.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}f(0,["gg",2],0,function(){return this.weekYear()%100});f(0,["GG",2],0,function(){return this.isoWeekYear()%100});function it(e,t){f(0,[e,e.length],0,t)}it("gggg","weekYear");it("ggggg","weekYear");it("GGGG","isoWeekYear");it("GGGGG","isoWeekYear");h("G",et);h("g",et);h("GG",D,N);h("gg",D,N);h("GGGG",Wt,Tt);h("gggg",Wt,Tt);h("GGGGG",Ke,Qe);h("ggggg",Ke,Qe);Ce(["gggg","ggggg","GGGG","GGGGG"],function(e,t,r,a){t[a.substr(0,2)]=x(e)});Ce(["gg","GG"],function(e,t,r,a){t[a]=d.parseTwoDigitYear(e)});function Dn(e){return Ar.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Mn(e){return Ar.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Yn(){return K(this.year(),1,4)}function On(){return K(this.isoWeekYear(),1,4)}function Tn(){var e=this.localeData()._week;return K(this.year(),e.dow,e.doy)}function Wn(){var e=this.localeData()._week;return K(this.weekYear(),e.dow,e.doy)}function Ar(e,t,r,a,s){var i;return e==null?We(this,a,s).year:(i=K(e,a,s),t>i&&(t=i),Rn.call(this,e,t,r,a,s))}function Rn(e,t,r,a,s){var i=xr(e,t,r,a,s),n=Te(i.year,0,i.dayOfYear);return this.year(n.getUTCFullYear()),this.month(n.getUTCMonth()),this.date(n.getUTCDate()),this}f("Q",0,"Qo","quarter");h("Q",or);S("Q",function(e,t){t[J]=(x(e)-1)*3});function jn(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}f("D",["DD",2],"Do","date");h("D",D,we);h("DD",D,N);h("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});S(["D","DD"],$);S("Do",function(e,t){t[$]=x(e.match(D)[0])});var Ir=ve("Date",!0);f("DDD",["DDDD",3],"DDDo","dayOfYear");h("DDD",Xe);h("DDDD",lr);S(["DDD","DDDD"],function(e,t,r){r._dayOfYear=x(e)});function Nn(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}f("m",["mm",2],0,"minute");h("m",D,Rt);h("mm",D,N);S(["m","mm"],L);var Pn=ve("Minutes",!1);f("s",["ss",2],0,"second");h("s",D,Rt);h("ss",D,N);S(["s","ss"],Q);var Cn=ve("Seconds",!1);f("S",0,0,function(){return~~(this.millisecond()/100)});f(0,["SS",2],0,function(){return~~(this.millisecond()/10)});f(0,["SSS",3],0,"millisecond");f(0,["SSSS",4],0,function(){return this.millisecond()*10});f(0,["SSSSS",5],0,function(){return this.millisecond()*100});f(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});f(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});f(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});f(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});h("S",Xe,or);h("SS",Xe,N);h("SSS",Xe,lr);var se,Er;for(se="SSSS";se.length<=9;se+="S")h(se,_e);function Fn(e,t){t[de]=x(("0."+e)*1e3)}for(se="S";se.length<=9;se+="S")S(se,Fn);Er=ve("Milliseconds",!1);f("z",0,0,"zoneAbbr");f("zz",0,0,"zoneName");function Un(){return this._isUTC?"UTC":""}function Ln(){return this._isUTC?"Coordinated Universal Time":""}var l=Ne.prototype;l.add=Ti;l.calendar=Fi;l.clone=Ui;l.diff=Gi;l.endOf=en;l.format=Zi;l.from=Bi;l.fromNow=Ji;l.to=Qi;l.toNow=Xi;l.get=qa;l.invalidAt=un;l.isAfter=Li;l.isBefore=Ai;l.isBetween=Ii;l.isSame=Ei;l.isSameOrAfter=Hi;l.isSameOrBefore=$i;l.isValid=ln;l.lang=Pr;l.locale=Nr;l.localeData=Cr;l.max=oi;l.min=ni;l.parsingFlags=dn;l.set=Za;l.startOf=Ki;l.subtract=Wi;l.toArray=sn;l.toObject=nn;l.toDate=an;l.toISOString=zi;l.inspect=qi;typeof Symbol<"u"&&Symbol.for!=null&&(l[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});l.toJSON=on;l.toString=Vi;l.unix=rn;l.valueOf=tn;l.creationData=hn;l.eraName=yn;l.eraNarrow=pn;l.eraAbbr=gn;l.eraYear=xn;l.year=hr;l.isLeapYear=za;l.weekYear=Dn;l.isoWeekYear=Mn;l.quarter=l.quarters=jn;l.month=pr;l.daysInMonth=as;l.week=l.weeks=hs;l.isoWeek=l.isoWeeks=cs;l.weeksInYear=Tn;l.weeksInWeekYear=Wn;l.isoWeeksInYear=Yn;l.isoWeeksInISOWeekYear=On;l.date=Ir;l.day=l.days=Ds;l.weekday=Ms;l.isoWeekday=Ys;l.dayOfYear=Nn;l.hour=l.hours=Ps;l.minute=l.minutes=Pn;l.second=l.seconds=Cn;l.millisecond=l.milliseconds=Er;l.utcOffset=pi;l.utc=xi;l.local=_i;l.parseZone=wi;l.hasAlignedHourOffset=vi;l.isDST=ki;l.isLocal=bi;l.isUtcOffset=Di;l.isUtc=Tr;l.isUTC=Tr;l.zoneAbbr=Un;l.zoneName=Ln;l.dates=C("dates accessor is deprecated. Use date instead.",Ir);l.months=C("months accessor is deprecated. Use month instead",pr);l.years=C("years accessor is deprecated. Use year instead",hr);l.zone=C("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",gi);l.isDSTShifted=C("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Si);function An(e){return b(e*1e3)}function In(){return b.apply(null,arguments).parseZone()}function Hr(e){return e}var k=Mt.prototype;k.calendar=ba;k.longDateFormat=Oa;k.invalidDate=Wa;k.ordinal=Na;k.preparse=Hr;k.postformat=Hr;k.relativeTime=Ca;k.pastFuture=Fa;k.set=ka;k.eras=cn;k.erasParse=fn;k.erasConvertYear=mn;k.erasAbbrRegex=wn;k.erasNameRegex=_n;k.erasNarrowRegex=vn;k.months=Ka;k.monthsShort=es;k.monthsParse=rs;k.monthsRegex=is;k.monthsShortRegex=ss;k.week=os;k.firstDayOfYear=us;k.firstDayOfWeek=ds;k.weekdays=ws;k.weekdaysMin=ks;k.weekdaysShort=vs;k.weekdaysParse=bs;k.weekdaysRegex=Os;k.weekdaysShortRegex=Ts;k.weekdaysMinRegex=Ws;k.isPM=js;k.meridiem=Cs;function Ze(e,t,r,a){var s=te(),i=V().set(a,t);return s[r](i,e)}function $r(e,t,r){if(ee(e)&&(t=e,e=void 0),e=e||"",t!=null)return Ze(e,t,r,"month");var a,s=[];for(a=0;a<12;a++)s[a]=Ze(e,a,r,"month");return s}function Gt(e,t,r,a){typeof e=="boolean"?(ee(t)&&(r=t,t=void 0),t=t||""):(t=e,r=t,e=!1,ee(t)&&(r=t,t=void 0),t=t||"");var s=te(),i=e?s._week.dow:0,n,u=[];if(r!=null)return Ze(t,(r+i)%7,a,"day");for(n=0;n<7;n++)u[n]=Ze(t,(n+i)%7,a,"day");return u}function En(e,t){return $r(e,t,"months")}function Hn(e,t){return $r(e,t,"monthsShort")}function $n(e,t,r){return Gt(e,t,r,"weekdays")}function Gn(e,t,r){return Gt(e,t,r,"weekdaysShort")}function Vn(e,t,r){return Gt(e,t,r,"weekdaysMin")}ne("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,r=x(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+r}});d.lang=C("moment.lang is deprecated. Use moment.locale instead.",ne);d.langData=C("moment.langData is deprecated. Use moment.localeData instead.",te);var q=Math.abs;function zn(){var e=this._data;return this._milliseconds=q(this._milliseconds),this._days=q(this._days),this._months=q(this._months),e.milliseconds=q(e.milliseconds),e.seconds=q(e.seconds),e.minutes=q(e.minutes),e.hours=q(e.hours),e.months=q(e.months),e.years=q(e.years),this}function Gr(e,t,r,a){var s=E(t,r);return e._milliseconds+=a*s._milliseconds,e._days+=a*s._days,e._months+=a*s._months,e._bubble()}function qn(e,t){return Gr(this,e,t,1)}function Zn(e,t){return Gr(this,e,t,-1)}function Xt(e){return e<0?Math.floor(e):Math.ceil(e)}function Bn(){var e=this._milliseconds,t=this._days,r=this._months,a=this._data,s,i,n,u,m;return e>=0&&t>=0&&r>=0||e<=0&&t<=0&&r<=0||(e+=Xt(kt(r)+t)*864e5,t=0,r=0),a.milliseconds=e%1e3,s=P(e/1e3),a.seconds=s%60,i=P(s/60),a.minutes=i%60,n=P(i/60),a.hours=n%24,t+=P(n/24),m=P(Vr(t)),r+=m,t-=Xt(kt(m)),u=P(r/12),r%=12,a.days=t,a.months=r,a.years=u,this}function Vr(e){return e*4800/146097}function kt(e){return e*146097/4800}function Jn(e){if(!this.isValid())return NaN;var t,r,a=this._milliseconds;if(e=F(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+a/864e5,r=this._months+Vr(t),e){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(t=this._days+Math.round(kt(this._months)),e){case"week":return t/7+a/6048e5;case"day":return t+a/864e5;case"hour":return t*24+a/36e5;case"minute":return t*1440+a/6e4;case"second":return t*86400+a/1e3;case"millisecond":return Math.floor(t*864e5)+a;default:throw new Error("Unknown unit "+e)}}function re(e){return function(){return this.as(e)}}var zr=re("ms"),Qn=re("s"),Xn=re("m"),Kn=re("h"),eo=re("d"),to=re("w"),ro=re("M"),ao=re("Q"),so=re("y"),io=zr;function no(){return E(this)}function oo(e){return e=F(e),this.isValid()?this[e+"s"]():NaN}function he(e){return function(){return this.isValid()?this._data[e]:NaN}}var lo=he("milliseconds"),uo=he("seconds"),ho=he("minutes"),co=he("hours"),fo=he("days"),mo=he("months"),yo=he("years");function po(){return P(this.days()/7)}var B=Math.round,me={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function go(e,t,r,a,s){return s.relativeTime(t||1,!!r,e,a)}function xo(e,t,r,a){var s=E(e).abs(),i=B(s.as("s")),n=B(s.as("m")),u=B(s.as("h")),m=B(s.as("d")),g=B(s.as("M")),T=B(s.as("w")),c=B(s.as("y")),R=i<=r.ss&&["s",i]||i<r.s&&["ss",i]||n<=1&&["m"]||n<r.m&&["mm",n]||u<=1&&["h"]||u<r.h&&["hh",u]||m<=1&&["d"]||m<r.d&&["dd",m];return r.w!=null&&(R=R||T<=1&&["w"]||T<r.w&&["ww",T]),R=R||g<=1&&["M"]||g<r.M&&["MM",g]||c<=1&&["y"]||["yy",c],R[2]=t,R[3]=+e>0,R[4]=a,go.apply(null,R)}function _o(e){return e===void 0?B:typeof e=="function"?(B=e,!0):!1}function wo(e,t){return me[e]===void 0?!1:t===void 0?me[e]:(me[e]=t,e==="s"&&(me.ss=t-1),!0)}function vo(e,t){if(!this.isValid())return this.localeData().invalidDate();var r=!1,a=me,s,i;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(r=e),typeof t=="object"&&(a=Object.assign({},me,t),t.s!=null&&t.ss==null&&(a.ss=t.s-1)),s=this.localeData(),i=xo(this,!r,a,s),r&&(i=s.pastFuture(+this,i)),s.postformat(i)}var mt=Math.abs;function ce(e){return(e>0)-(e<0)||+e}function nt(){if(!this.isValid())return this.localeData().invalidDate();var e=mt(this._milliseconds)/1e3,t=mt(this._days),r=mt(this._months),a,s,i,n,u=this.asSeconds(),m,g,T,c;return u?(a=P(e/60),s=P(a/60),e%=60,a%=60,i=P(r/12),r%=12,n=e?e.toFixed(3).replace(/\.?0+$/,""):"",m=u<0?"-":"",g=ce(this._months)!==ce(u)?"-":"",T=ce(this._days)!==ce(u)?"-":"",c=ce(this._milliseconds)!==ce(u)?"-":"",m+"P"+(i?g+i+"Y":"")+(r?g+r+"M":"")+(t?T+t+"D":"")+(s||a||e?"T":"")+(s?c+s+"H":"")+(a?c+a+"M":"")+(e?c+n+"S":"")):"P0D"}var w=st.prototype;w.isValid=ci;w.abs=zn;w.add=qn;w.subtract=Zn;w.as=Jn;w.asMilliseconds=zr;w.asSeconds=Qn;w.asMinutes=Xn;w.asHours=Kn;w.asDays=eo;w.asWeeks=to;w.asMonths=ro;w.asQuarters=ao;w.asYears=so;w.valueOf=io;w._bubble=Bn;w.clone=no;w.get=oo;w.milliseconds=lo;w.seconds=uo;w.minutes=ho;w.hours=co;w.days=fo;w.weeks=po;w.months=mo;w.years=yo;w.humanize=vo;w.toISOString=nt;w.toString=nt;w.toJSON=nt;w.locale=Nr;w.localeData=Cr;w.toIsoString=C("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",nt);w.lang=Pr;f("X",0,0,"unix");f("x",0,0,"valueOf");h("x",et);h("X",Ia);S("X",function(e,t,r){r._d=new Date(parseFloat(e)*1e3)});S("x",function(e,t,r){r._d=new Date(x(e))});//! moment.js
d.version="2.30.1";wa(b);d.fn=l;d.min=li;d.max=di;d.now=ui;d.utc=V;d.unix=An;d.months=En;d.isDate=je;d.locale=ne;d.invalid=Je;d.duration=E;d.isMoment=I;d.weekdays=$n;d.parseZone=In;d.localeData=te;d.isDuration=He;d.monthsShort=Hn;d.weekdaysMin=Vn;d.defineLocale=Ft;d.updateLocale=As;d.locales=Is;d.weekdaysShort=Gn;d.normalizeUnits=F;d.relativeTimeRounding=_o;d.relativeTimeThreshold=wo;d.calendarFormat=Ci;d.prototype=l;d.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};xe.defaults.baseURL="https://powerpulserver.onrender.com/api";const qr=e=>{xe.defaults.headers.common.Authorization=`Bearer ${e}`},ko=Be("getCurrentUser",async(e,t)=>{try{const a=t.getState().auth.token;if(a===null)return oe.info("Unable to get user"),t.rejectWithValue("Token not available");qr(a);const s=await xe.get("/auth/current");return console.log(s.data.user),s.data.user}catch(r){return oe.error(r.message),t.rejectWithValue(r.message)}}),So=Be("updateUser",async(e,t)=>{try{const a=t.getState().auth.token;return a===null?(oe.info("Unable to get user"),t.rejectWithValue("Token not available")):(qr(a),delete e.avatarURL,delete e.userParams,(await xe.patch("/auth/params",e)).data.user)}catch(r){return oe.error(r.message),t.rejectWithValue(r.message)}});Be("auth/avatar",async(e,t)=>{try{const r=new FormData;r.append("avatar",e);const a=await xe.patch("/*****",r,{headers:{"content-type":"multipart/form-data"}});return oe.success("Avatar updated"),a.data}catch(r){return oe.error(r.message),t.rejectWithValue(r.message)}});Be("auth/addUserData",async(e,t)=>{try{const r=await xe.patch("/****",e);return oe.success("Your profile updated"),r.data}catch(r){return oe.error(r.message),t.rejectWithValue(r.message)}});const bo=p.div`
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
`,Do=p.div`
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
`,Yo=p.div`
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
`,yt=p.input`
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
`,Oo=p(aa)`
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
`,To=p.div`
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
`,U=p(Xr)`
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
`,Z=p(Kr)`
  color: red;
`,Wo=p.div`
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
`,Ro=p.button`
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
`;d().format("YYYY-MM-DD");const jo=ea().shape({name:Ue().min(2,"Too Short!").required("Name is required"),email:Ue().email("Invalid email address").required("Email is required"),height:ke().label("Height").min(150,"Height must be a number greater than or equal to 150").required("Height is required"),currentWeight:ke().label("Current Weight").min(35,"Current Weight must be a number greater than or equal to 35").required("Current Weight is required"),desiredWeight:ke().label("Desired Weight").min(35,"Desired Weight must be a number greater than or equal to 35").required("Desired Weight is required"),blood:ke().label("Blood Type").oneOf([1,2,3,4,"1","2","3","4"],"Invalid Blood Type").required("Blood Type is required"),sex:Ue().label("Gender").oneOf(["male","female"],"Invalid Gender").required("Gender is required"),levelActivity:ke().label("Level of Activity").oneOf([1,2,3,4,5,"1","2","3","4","5"],"Invalid Level of Activity").required("Level of Activity is required"),birthday:Ue().label("Date of Birth").typeError("Invalid Date!")}),No=({profile:e,refreshUserData:t})=>{const r=Qr(),[a,s]=Me.useState(e),[i,n]=Me.useState(null),[u,m]=Me.useState(!1),g=async()=>{try{const c=await r(ko());c.payload.birthday===void 0&&(c.payload.birthday=""),s(c.payload),t(c.payload)}catch(c){console.error("Error fetching user data:",c)}};Me.useEffect(()=>{g()},[]);const T=c=>{m(!0),console.log(c);try{const R=r(So(c));console.log(R)}catch(R){console.error("Error fetching user data:",R)}return setTimeout(()=>{m(!1)},3e3),!1};return o.jsx(bo,{children:o.jsx(ta,{initialValues:a,enableReinitialize:!0,validationSchema:jo,onSubmit:T,children:c=>o.jsxs(ra,{children:[o.jsxs(Do,{children:[o.jsxs(Mo,{children:[o.jsxs(Kt,{children:["Name",o.jsx(er,{name:"name",placeholder:"Mike",type:"text",onChange:c.handleChange,value:c.values.name}),o.jsx(Z,{name:"name",component:"div"})]}),o.jsxs(Kt,{children:["Email",o.jsx(er,{name:"email",placeholder:"jane@acme.com",type:"email",onChange:c.handleChange,value:c.values.email}),o.jsx(Z,{name:"email",component:"div"})]})]}),o.jsxs(Yo,{children:[o.jsxs(Ie,{children:["Height",o.jsx(yt,{name:"height",placeholder:"0",type:"number",onChange:c.handleChange,value:c.values.height}),o.jsx(Z,{name:"height",component:"div"})]}),o.jsxs(Ie,{children:["Current Weight",o.jsx(yt,{name:"currentWeight",placeholder:"0",type:"number",onChange:c.handleChange,value:c.values.currentWeight}),o.jsx(Z,{name:"currentWeight",component:"div"})]}),o.jsxs(Ie,{children:["Desired Weight",o.jsx(yt,{name:"desiredWeight",placeholder:"0",type:"number",onChange:c.handleChange,value:c.values.desiredWeight}),o.jsx(Z,{name:"desiredWeight",component:"div"})]}),o.jsxs(Ie,{children:["Date of birth",o.jsx(Oo,{selected:i,onChange:R=>{n(R),c.handleChange,c.values.birthday=R,c.setFieldTouched},dateFormat:"MM.dd.yyyy",placeholderText:"00.00.00",name:"birthday",value:c.values.birthday}),o.jsx(Z,{name:"birthday",component:"div"})]})]}),o.jsxs(tr,{children:[o.jsxs("div",{role:"group","aria-labelledby":"bloodLevel",children:[o.jsx(Z,{name:"blood",component:"div"}),o.jsxs(To,{children:["Blood",o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"blood",value:"1",onChange:c.handleChange,checked:c.values.blood==="1"||c.values.blood===1}),"1"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"blood",value:"2",onChange:c.handleChange,checked:c.values.blood==="2"||c.values.blood===2}),"2"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"blood",value:"3",onChange:c.handleChange,checked:c.values.blood==="3"||c.values.blood===3}),"3"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"blood",value:"4",onChange:c.handleChange,checked:c.values.blood==="4"||c.values.blood===4}),"4"]})]})]}),o.jsxs("div",{role:"group","aria-labelledby":"genderType",children:[o.jsx(Z,{name:"sex",component:"div"}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"sex",value:"male",checked:c.values.sex==="male"}),"Male",o.jsx(U,{type:"radio",name:"sex",value:"female",checked:c.values.sex==="female"}),"Female"]})]})]}),o.jsxs(tr,{role:"group","aria-labelledby":"activityGroup",children:[o.jsx(Z,{name:"levelActivity",component:"div"}),o.jsxs(Wo,{children:[o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"1",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="1"||c.values.levelActivity===1}),"Sedentary lifestyle (little or no physical activity)"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"2",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="2"||c.values.levelActivity===2}),"Light activity (light excercises/sports 1-3 days per week)"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"3",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="3"||c.values.levelActivity===3}),"Moderately active (moderate excercises/sports 2-5 days per week)"," "]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"4",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="4"||c.values.levelActivity===4}),"Very active (intence excercises/sports 6-7 days per week)"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"5",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="5"||c.values.levelActivity===5}),"Extremely active (very strenous exercises/sports and physical work)"]})]})]})]}),o.jsx(Ro,{type:"submit",children:"Save"}),u&&o.jsx("span",{className:"success-msg",children:"Settings updated successfully"})]})})})},Po=p.div`
  padding-top: 72px;
`,Co=p.div`
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
`;class Ho extends Me.Component{constructor(){super(...arguments);ot(this,"state",{profile:{name:"Jane",email:"",height:0,currentWeight:0,desiredWeight:0,blood:"1",sex:"female",levelActivity:"1",avatarURL:"",birthday:""}});ot(this,"refreshProfileState",r=>{this.setState({profile:r})})}render(){return o.jsxs(Po,{children:[o.jsx("h1",{children:"Profile Settings"}),o.jsxs(Co,{children:[o.jsx(No,{profile:this.state.profile,refreshUserData:this.refreshProfileState}),o.jsx(_a,{profile:this.state.profile,refreshUserData:this.refreshProfileState})]})]})}}export{Ho as ProfilePage,Ho as default};
