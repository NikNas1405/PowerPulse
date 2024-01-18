var Zr=Object.defineProperty;var Br=(e,t,r)=>t in e?Zr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var nt=(e,t,r)=>(Br(e,typeof t!="symbol"?t+"":t,r),r);import{s as g,g as x,j as o,a as ot,L as Jr,c as _e,d as Ze,Q as oe,n as ie,u as Qr,r as be}from"./index-7e968d56.js";import{e as Xr}from"./StyledDatepicker-4a335bd2.js";import{F as Kr,E as es,c as ts,a as Fe,b as ke,d as rs,e as ss}from"./index.esm-646e09fa.js";import"./warning-e0cb6438.js";import"./hoist-non-react-statics.cjs-430ec91b.js";const as=g.div`
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
`,is=g.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 834px) {
    width: 219px;
  }
`,ns=g.img`
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
`,os=g.div`
  display: flex;
  align-items: center;
  align-content: center;
`,ls=g.input`
  display: none;
`,ds=g.div`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 8px;
`,us=g.h2`
  color: #efede8;

  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`,hs=g.p`
  color: rgba(239, 237, 232, 0.5);

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,cs=g.div`
  display: flex;
  gap: 14px;
  margin: 0 auto;
`,Vt=g.div`
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
`,lt=g.svg`
  @media screen and (min-width: 320px) {
    width: 12px;
    height: 12px;
    fill: ${x.colorWhite};
  }

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,dt=g.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${x.colorBeige};
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,Se=g.div`
  display: flex;
  align-items: baseline;
  gap: 11px;
`,zt=g.p`
  color: ${x.colorWhite};
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
`,ut=g.span`
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
`,fs=g.div`
  margin: 0 auto;
  margin-top: 40px;
  color: rgba(239, 237, 232, 0.3);

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;g.div`
  margin-right: 96px;

  @media screen and (min-width: 768px) {
    margin-right: 410px;
  }
`;const ms=g.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;
`,ys=g.p`
  @media screen and (min-width: 768px) {
    width: 330px;
  }

  @media screen and (min-width: 1440px) {
    width: 330px;
  }
`,ps=({profile:e})=>o.jsxs(as,{children:[o.jsxs(is,{children:[o.jsx(ns,{src:e.avatarURL,alt:"User Avatar"}),o.jsx(os,{children:o.jsx(ls,{type:"file",accept:"image/*"})})]}),o.jsxs(ds,{children:[o.jsx(us,{children:e.name}),o.jsx(hs,{children:"User"})]}),o.jsxs(cs,{children:[o.jsxs(Vt,{children:[o.jsxs(Se,{children:[o.jsx(dt,{children:o.jsx(lt,{children:o.jsx("use",{href:`${ot}#icon-fluent_food-24-filled`})})}),o.jsx(ut,{children:" Daily calorie intake"})]}),o.jsx(Se,{children:o.jsx(zt,{children:"0"})})]}),o.jsxs(Vt,{children:[o.jsxs(Se,{children:[o.jsx(dt,{children:o.jsx(lt,{children:o.jsx("use",{href:`${ot}#icon-dumbbell`})})}),o.jsx(ut,{children:" Daily physical activity"})]}),o.jsxs(Se,{children:[o.jsx(zt,{children:"0"}),o.jsx(ut,{children:"min"})]})]})]}),o.jsx(fs,{children:o.jsxs(Se,{children:[o.jsx(dt,{children:o.jsx(lt,{children:o.jsx("use",{href:`${ot}#exclamation-mark`})})}),o.jsx(ys,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})}),o.jsx(ms,{children:o.jsx(Jr,{})})]});//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var rr;function d(){return rr.apply(null,arguments)}function gs(e){rr=e}function A(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function ue(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function v(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function St(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(v(e,t))return!1;return!0}function N(e){return e===void 0}function ee(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function Ne(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function sr(e,t){var r=[],s,a=e.length;for(s=0;s<a;++s)r.push(t(e[s],s));return r}function se(e,t){for(var r in t)v(t,r)&&(e[r]=t[r]);return v(t,"toString")&&(e.toString=t.toString),v(t,"valueOf")&&(e.valueOf=t.valueOf),e}function V(e,t,r,s){return br(e,t,r,s,!0).utc()}function _s(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function y(e){return e._pf==null&&(e._pf=_s()),e._pf}var pt;Array.prototype.some?pt=Array.prototype.some:pt=function(e){var t=Object(this),r=t.length>>>0,s;for(s=0;s<r;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};function Dt(e){var t=null,r=!1,s=e._d&&!isNaN(e._d.getTime());if(s&&(t=y(e),r=pt.call(t.parsedDateParts,function(a){return a!=null}),s=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&r),e._strict&&(s=s&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=s;else return s;return e._isValid}function Be(e){var t=V(NaN);return e!=null?se(y(t),e):y(t).userInvalidated=!0,t}var qt=d.momentProperties=[],ht=!1;function Mt(e,t){var r,s,a,i=qt.length;if(N(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),N(t._i)||(e._i=t._i),N(t._f)||(e._f=t._f),N(t._l)||(e._l=t._l),N(t._strict)||(e._strict=t._strict),N(t._tzm)||(e._tzm=t._tzm),N(t._isUTC)||(e._isUTC=t._isUTC),N(t._offset)||(e._offset=t._offset),N(t._pf)||(e._pf=y(t)),N(t._locale)||(e._locale=t._locale),i>0)for(r=0;r<i;r++)s=qt[r],a=t[s],N(a)||(e[s]=a);return e}function Pe(e){Mt(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),ht===!1&&(ht=!0,d.updateOffset(this),ht=!1)}function I(e){return e instanceof Pe||e!=null&&e._isAMomentObject!=null}function ar(e){d.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function C(e,t){var r=!0;return se(function(){if(d.deprecationHandler!=null&&d.deprecationHandler(null,e),r){var s=[],a,i,n,u=arguments.length;for(i=0;i<u;i++){if(a="",typeof arguments[i]=="object"){a+=`
[`+i+"] ";for(n in arguments[0])v(arguments[0],n)&&(a+=n+": "+arguments[0][n]+", ");a=a.slice(0,-2)}else a=arguments[i];s.push(a)}ar(e+`
Arguments: `+Array.prototype.slice.call(s).join("")+`
`+new Error().stack),r=!1}return t.apply(this,arguments)},t)}var Zt={};function ir(e,t){d.deprecationHandler!=null&&d.deprecationHandler(e,t),Zt[e]||(ar(t),Zt[e]=!0)}d.suppressDeprecationWarnings=!1;d.deprecationHandler=null;function z(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function xs(e){var t,r;for(r in e)v(e,r)&&(t=e[r],z(t)?this[r]=t:this["_"+r]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function gt(e,t){var r=se({},e),s;for(s in t)v(t,s)&&(ue(e[s])&&ue(t[s])?(r[s]={},se(r[s],e[s]),se(r[s],t[s])):t[s]!=null?r[s]=t[s]:delete r[s]);for(s in e)v(e,s)&&!v(t,s)&&ue(e[s])&&(r[s]=se({},r[s]));return r}function bt(e){e!=null&&this.set(e)}var _t;Object.keys?_t=Object.keys:_t=function(e){var t,r=[];for(t in e)v(e,t)&&r.push(t);return r};var ws={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function vs(e,t,r){var s=this._calendar[e]||this._calendar.sameElse;return z(s)?s.call(t,r):s}function G(e,t,r){var s=""+Math.abs(e),a=t-s.length,i=e>=0;return(i?r?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+s}var Yt=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Ue=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ct={},ye={};function f(e,t,r,s){var a=s;typeof s=="string"&&(a=function(){return this[s]()}),e&&(ye[e]=a),t&&(ye[t[0]]=function(){return G(a.apply(this,arguments),t[1],t[2])}),r&&(ye[r]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function ks(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Ss(e){var t=e.match(Yt),r,s;for(r=0,s=t.length;r<s;r++)ye[t[r]]?t[r]=ye[t[r]]:t[r]=ks(t[r]);return function(a){var i="",n;for(n=0;n<s;n++)i+=z(t[n])?t[n].call(a,e):t[n];return i}}function Ie(e,t){return e.isValid()?(t=nr(t,e.localeData()),ct[t]=ct[t]||Ss(t),ct[t](e)):e.localeData().invalidDate()}function nr(e,t){var r=5;function s(a){return t.longDateFormat(a)||a}for(Ue.lastIndex=0;r>=0&&Ue.test(e);)e=e.replace(Ue,s),Ue.lastIndex=0,r-=1;return e}var Ds={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Ms(e){var t=this._longDateFormat[e],r=this._longDateFormat[e.toUpperCase()];return t||!r?t:(this._longDateFormat[e]=r.match(Yt).map(function(s){return s==="MMMM"||s==="MM"||s==="DD"||s==="dddd"?s.slice(1):s}).join(""),this._longDateFormat[e])}var bs="Invalid date";function Ys(){return this._invalidDate}var Os="%d",Ts=/\d{1,2}/;function Ws(e){return this._ordinal.replace("%d",e)}var Rs={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Ns(e,t,r,s){var a=this._relativeTime[r];return z(a)?a(e,t,r,s):a.replace(/%d/i,e)}function Ps(e,t){var r=this._relativeTime[e>0?"future":"past"];return z(r)?r(t):r.replace(/%s/i,t)}var Bt={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function F(e){return typeof e=="string"?Bt[e]||Bt[e.toLowerCase()]:void 0}function Ot(e){var t={},r,s;for(s in e)v(e,s)&&(r=F(s),r&&(t[r]=e[s]));return t}var js={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Cs(e){var t=[],r;for(r in e)v(e,r)&&t.push({unit:r,priority:js[r]});return t.sort(function(s,a){return s.priority-a.priority}),t}var or=/\d/,P=/\d\d/,lr=/\d{3}/,Tt=/\d{4}/,Je=/[+-]?\d{6}/,M=/\d\d?/,dr=/\d\d\d\d?/,ur=/\d\d\d\d\d\d?/,Qe=/\d{1,3}/,Wt=/\d{1,4}/,Xe=/[+-]?\d{1,6}/,xe=/\d+/,Ke=/[+-]?\d+/,Fs=/Z|[+-]\d\d:?\d\d/gi,et=/Z|[+-]\d\d(?::?\d\d)?/gi,Us=/[+-]?\d+(\.\d{1,3})?/,je=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,we=/^[1-9]\d?/,Rt=/^([1-9]\d|\d)/,$e;$e={};function h(e,t,r){$e[e]=z(t)?t:function(s,a){return s&&r?r:t}}function Ls(e,t){return v($e,e)?$e[e](t._strict,t._locale):new RegExp(As(e))}function As(e){return X(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,r,s,a,i){return r||s||a||i}))}function X(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function j(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function _(e){var t=+e,r=0;return t!==0&&isFinite(t)&&(r=j(t)),r}var xt={};function S(e,t){var r,s=t,a;for(typeof e=="string"&&(e=[e]),ee(t)&&(s=function(i,n){n[t]=_(i)}),a=e.length,r=0;r<a;r++)xt[e[r]]=s}function Ce(e,t){S(e,function(r,s,a,i){a._w=a._w||{},t(r,a._w,a,i)})}function Is(e,t,r){t!=null&&v(xt,e)&&xt[e](t,r._a,r,e)}function tt(e){return e%4===0&&e%100!==0||e%400===0}var W=0,J=1,$=2,O=3,L=4,Q=5,de=6,Es=7,Hs=8;f("Y",0,0,function(){var e=this.year();return e<=9999?G(e,4):"+"+e});f(0,["YY",2],0,function(){return this.year()%100});f(0,["YYYY",4],0,"year");f(0,["YYYYY",5],0,"year");f(0,["YYYYYY",6,!0],0,"year");h("Y",Ke);h("YY",M,P);h("YYYY",Wt,Tt);h("YYYYY",Xe,Je);h("YYYYYY",Xe,Je);S(["YYYYY","YYYYYY"],W);S("YYYY",function(e,t){t[W]=e.length===2?d.parseTwoDigitYear(e):_(e)});S("YY",function(e,t){t[W]=d.parseTwoDigitYear(e)});S("Y",function(e,t){t[W]=parseInt(e,10)});function Ye(e){return tt(e)?366:365}d.parseTwoDigitYear=function(e){return _(e)+(_(e)>68?1900:2e3)};var hr=ve("FullYear",!0);function $s(){return tt(this.year())}function ve(e,t){return function(r){return r!=null?(cr(this,e,r),d.updateOffset(this,t),this):Oe(this,e)}}function Oe(e,t){if(!e.isValid())return NaN;var r=e._d,s=e._isUTC;switch(t){case"Milliseconds":return s?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return s?r.getUTCSeconds():r.getSeconds();case"Minutes":return s?r.getUTCMinutes():r.getMinutes();case"Hours":return s?r.getUTCHours():r.getHours();case"Date":return s?r.getUTCDate():r.getDate();case"Day":return s?r.getUTCDay():r.getDay();case"Month":return s?r.getUTCMonth():r.getMonth();case"FullYear":return s?r.getUTCFullYear():r.getFullYear();default:return NaN}}function cr(e,t,r){var s,a,i,n,u;if(!(!e.isValid()||isNaN(r))){switch(s=e._d,a=e._isUTC,t){case"Milliseconds":return void(a?s.setUTCMilliseconds(r):s.setMilliseconds(r));case"Seconds":return void(a?s.setUTCSeconds(r):s.setSeconds(r));case"Minutes":return void(a?s.setUTCMinutes(r):s.setMinutes(r));case"Hours":return void(a?s.setUTCHours(r):s.setHours(r));case"Date":return void(a?s.setUTCDate(r):s.setDate(r));case"FullYear":break;default:return}i=r,n=e.month(),u=e.date(),u=u===29&&n===1&&!tt(i)?28:u,a?s.setUTCFullYear(i,n,u):s.setFullYear(i,n,u)}}function Gs(e){return e=F(e),z(this[e])?this[e]():this}function Vs(e,t){if(typeof e=="object"){e=Ot(e);var r=Cs(e),s,a=r.length;for(s=0;s<a;s++)this[r[s].unit](e[r[s].unit])}else if(e=F(e),z(this[e]))return this[e](t);return this}function zs(e,t){return(e%t+t)%t}var Y;Array.prototype.indexOf?Y=Array.prototype.indexOf:Y=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function Nt(e,t){if(isNaN(e)||isNaN(t))return NaN;var r=zs(t,12);return e+=(t-r)/12,r===1?tt(e)?29:28:31-r%7%2}f("M",["MM",2],"Mo",function(){return this.month()+1});f("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});f("MMMM",0,0,function(e){return this.localeData().months(this,e)});h("M",M,we);h("MM",M,P);h("MMM",function(e,t){return t.monthsShortRegex(e)});h("MMMM",function(e,t){return t.monthsRegex(e)});S(["M","MM"],function(e,t){t[J]=_(e)-1});S(["MMM","MMMM"],function(e,t,r,s){var a=r._locale.monthsParse(e,s,r._strict);a!=null?t[J]=a:y(r).invalidMonth=e});var qs="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),fr="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),mr=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Zs=je,Bs=je;function Js(e,t){return e?A(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||mr).test(t)?"format":"standalone"][e.month()]:A(this._months)?this._months:this._months.standalone}function Qs(e,t){return e?A(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[mr.test(t)?"format":"standalone"][e.month()]:A(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function Xs(e,t,r){var s,a,i,n=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)i=V([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(i,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(i,"").toLocaleLowerCase();return r?t==="MMM"?(a=Y.call(this._shortMonthsParse,n),a!==-1?a:null):(a=Y.call(this._longMonthsParse,n),a!==-1?a:null):t==="MMM"?(a=Y.call(this._shortMonthsParse,n),a!==-1?a:(a=Y.call(this._longMonthsParse,n),a!==-1?a:null)):(a=Y.call(this._longMonthsParse,n),a!==-1?a:(a=Y.call(this._shortMonthsParse,n),a!==-1?a:null))}function Ks(e,t,r){var s,a,i;if(this._monthsParseExact)return Xs.call(this,e,t,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(a=V([2e3,s]),r&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!r&&!this._monthsParse[s]&&(i="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[s]=new RegExp(i.replace(".",""),"i")),r&&t==="MMMM"&&this._longMonthsParse[s].test(e))return s;if(r&&t==="MMM"&&this._shortMonthsParse[s].test(e))return s;if(!r&&this._monthsParse[s].test(e))return s}}function yr(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=_(t);else if(t=e.localeData().monthsParse(t),!ee(t))return e}var r=t,s=e.date();return s=s<29?s:Math.min(s,Nt(e.year(),r)),e._isUTC?e._d.setUTCMonth(r,s):e._d.setMonth(r,s),e}function pr(e){return e!=null?(yr(this,e),d.updateOffset(this,!0),this):Oe(this,"Month")}function ea(){return Nt(this.year(),this.month())}function ta(e){return this._monthsParseExact?(v(this,"_monthsRegex")||gr.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(v(this,"_monthsShortRegex")||(this._monthsShortRegex=Zs),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function ra(e){return this._monthsParseExact?(v(this,"_monthsRegex")||gr.call(this),e?this._monthsStrictRegex:this._monthsRegex):(v(this,"_monthsRegex")||(this._monthsRegex=Bs),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function gr(){function e(m,p){return p.length-m.length}var t=[],r=[],s=[],a,i,n,u;for(a=0;a<12;a++)i=V([2e3,a]),n=X(this.monthsShort(i,"")),u=X(this.months(i,"")),t.push(n),r.push(u),s.push(u),s.push(n);t.sort(e),r.sort(e),s.sort(e),this._monthsRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function sa(e,t,r,s,a,i,n){var u;return e<100&&e>=0?(u=new Date(e+400,t,r,s,a,i,n),isFinite(u.getFullYear())&&u.setFullYear(e)):u=new Date(e,t,r,s,a,i,n),u}function Te(e){var t,r;return e<100&&e>=0?(r=Array.prototype.slice.call(arguments),r[0]=e+400,t=new Date(Date.UTC.apply(null,r)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Ge(e,t,r){var s=7+t-r,a=(7+Te(e,0,s).getUTCDay()-t)%7;return-a+s-1}function _r(e,t,r,s,a){var i=(7+r-s)%7,n=Ge(e,s,a),u=1+7*(t-1)+i+n,m,p;return u<=0?(m=e-1,p=Ye(m)+u):u>Ye(e)?(m=e+1,p=u-Ye(e)):(m=e,p=u),{year:m,dayOfYear:p}}function We(e,t,r){var s=Ge(e.year(),t,r),a=Math.floor((e.dayOfYear()-s-1)/7)+1,i,n;return a<1?(n=e.year()-1,i=a+K(n,t,r)):a>K(e.year(),t,r)?(i=a-K(e.year(),t,r),n=e.year()+1):(n=e.year(),i=a),{week:i,year:n}}function K(e,t,r){var s=Ge(e,t,r),a=Ge(e+1,t,r);return(Ye(e)-s+a)/7}f("w",["ww",2],"wo","week");f("W",["WW",2],"Wo","isoWeek");h("w",M,we);h("ww",M,P);h("W",M,we);h("WW",M,P);Ce(["w","ww","W","WW"],function(e,t,r,s){t[s.substr(0,1)]=_(e)});function aa(e){return We(e,this._week.dow,this._week.doy).week}var ia={dow:0,doy:6};function na(){return this._week.dow}function oa(){return this._week.doy}function la(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function da(e){var t=We(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}f("d",0,"do","day");f("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});f("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});f("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});f("e",0,0,"weekday");f("E",0,0,"isoWeekday");h("d",M);h("e",M);h("E",M);h("dd",function(e,t){return t.weekdaysMinRegex(e)});h("ddd",function(e,t){return t.weekdaysShortRegex(e)});h("dddd",function(e,t){return t.weekdaysRegex(e)});Ce(["dd","ddd","dddd"],function(e,t,r,s){var a=r._locale.weekdaysParse(e,s,r._strict);a!=null?t.d=a:y(r).invalidWeekday=e});Ce(["d","e","E"],function(e,t,r,s){t[s]=_(e)});function ua(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function ha(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Pt(e,t){return e.slice(t,7).concat(e.slice(0,t))}var ca="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),xr="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),fa="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ma=je,ya=je,pa=je;function ga(e,t){var r=A(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?Pt(r,this._week.dow):e?r[e.day()]:r}function _a(e){return e===!0?Pt(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function xa(e){return e===!0?Pt(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function wa(e,t,r){var s,a,i,n=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)i=V([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(i,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(i,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(i,"").toLocaleLowerCase();return r?t==="dddd"?(a=Y.call(this._weekdaysParse,n),a!==-1?a:null):t==="ddd"?(a=Y.call(this._shortWeekdaysParse,n),a!==-1?a:null):(a=Y.call(this._minWeekdaysParse,n),a!==-1?a:null):t==="dddd"?(a=Y.call(this._weekdaysParse,n),a!==-1||(a=Y.call(this._shortWeekdaysParse,n),a!==-1)?a:(a=Y.call(this._minWeekdaysParse,n),a!==-1?a:null)):t==="ddd"?(a=Y.call(this._shortWeekdaysParse,n),a!==-1||(a=Y.call(this._weekdaysParse,n),a!==-1)?a:(a=Y.call(this._minWeekdaysParse,n),a!==-1?a:null)):(a=Y.call(this._minWeekdaysParse,n),a!==-1||(a=Y.call(this._weekdaysParse,n),a!==-1)?a:(a=Y.call(this._shortWeekdaysParse,n),a!==-1?a:null))}function va(e,t,r){var s,a,i;if(this._weekdaysParseExact)return wa.call(this,e,t,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(a=V([2e3,1]).day(s),r&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(i="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[s]=new RegExp(i.replace(".",""),"i")),r&&t==="dddd"&&this._fullWeekdaysParse[s].test(e))return s;if(r&&t==="ddd"&&this._shortWeekdaysParse[s].test(e))return s;if(r&&t==="dd"&&this._minWeekdaysParse[s].test(e))return s;if(!r&&this._weekdaysParse[s].test(e))return s}}function ka(e){if(!this.isValid())return e!=null?this:NaN;var t=Oe(this,"Day");return e!=null?(e=ua(e,this.localeData()),this.add(e-t,"d")):t}function Sa(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function Da(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=ha(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function Ma(e){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||jt.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(v(this,"_weekdaysRegex")||(this._weekdaysRegex=ma),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function ba(e){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||jt.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(v(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ya),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Ya(e){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||jt.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(v(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=pa),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function jt(){function e(T,c){return c.length-T.length}var t=[],r=[],s=[],a=[],i,n,u,m,p;for(i=0;i<7;i++)n=V([2e3,1]).day(i),u=X(this.weekdaysMin(n,"")),m=X(this.weekdaysShort(n,"")),p=X(this.weekdays(n,"")),t.push(u),r.push(m),s.push(p),a.push(u),a.push(m),a.push(p);t.sort(e),r.sort(e),s.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function Ct(){return this.hours()%12||12}function Oa(){return this.hours()||24}f("H",["HH",2],0,"hour");f("h",["hh",2],0,Ct);f("k",["kk",2],0,Oa);f("hmm",0,0,function(){return""+Ct.apply(this)+G(this.minutes(),2)});f("hmmss",0,0,function(){return""+Ct.apply(this)+G(this.minutes(),2)+G(this.seconds(),2)});f("Hmm",0,0,function(){return""+this.hours()+G(this.minutes(),2)});f("Hmmss",0,0,function(){return""+this.hours()+G(this.minutes(),2)+G(this.seconds(),2)});function wr(e,t){f(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}wr("a",!0);wr("A",!1);function vr(e,t){return t._meridiemParse}h("a",vr);h("A",vr);h("H",M,Rt);h("h",M,we);h("k",M,we);h("HH",M,P);h("hh",M,P);h("kk",M,P);h("hmm",dr);h("hmmss",ur);h("Hmm",dr);h("Hmmss",ur);S(["H","HH"],O);S(["k","kk"],function(e,t,r){var s=_(e);t[O]=s===24?0:s});S(["a","A"],function(e,t,r){r._isPm=r._locale.isPM(e),r._meridiem=e});S(["h","hh"],function(e,t,r){t[O]=_(e),y(r).bigHour=!0});S("hmm",function(e,t,r){var s=e.length-2;t[O]=_(e.substr(0,s)),t[L]=_(e.substr(s)),y(r).bigHour=!0});S("hmmss",function(e,t,r){var s=e.length-4,a=e.length-2;t[O]=_(e.substr(0,s)),t[L]=_(e.substr(s,2)),t[Q]=_(e.substr(a)),y(r).bigHour=!0});S("Hmm",function(e,t,r){var s=e.length-2;t[O]=_(e.substr(0,s)),t[L]=_(e.substr(s))});S("Hmmss",function(e,t,r){var s=e.length-4,a=e.length-2;t[O]=_(e.substr(0,s)),t[L]=_(e.substr(s,2)),t[Q]=_(e.substr(a))});function Ta(e){return(e+"").toLowerCase().charAt(0)==="p"}var Wa=/[ap]\.?m?\.?/i,Ra=ve("Hours",!0);function Na(e,t,r){return e>11?r?"pm":"PM":r?"am":"AM"}var kr={calendar:ws,longDateFormat:Ds,invalidDate:bs,ordinal:Os,dayOfMonthOrdinalParse:Ts,relativeTime:Rs,months:qs,monthsShort:fr,week:ia,weekdays:ca,weekdaysMin:fa,weekdaysShort:xr,meridiemParse:Wa},b={},De={},Re;function Pa(e,t){var r,s=Math.min(e.length,t.length);for(r=0;r<s;r+=1)if(e[r]!==t[r])return r;return s}function Jt(e){return e&&e.toLowerCase().replace("_","-")}function ja(e){for(var t=0,r,s,a,i;t<e.length;){for(i=Jt(e[t]).split("-"),r=i.length,s=Jt(e[t+1]),s=s?s.split("-"):null;r>0;){if(a=rt(i.slice(0,r).join("-")),a)return a;if(s&&s.length>=r&&Pa(i,s)>=r-1)break;r--}t++}return Re}function Ca(e){return!!(e&&e.match("^[^/\\\\]*$"))}function rt(e){var t=null,r;if(b[e]===void 0&&typeof module<"u"&&module&&module.exports&&Ca(e))try{t=Re._abbr,r=require,r("./locale/"+e),ne(t)}catch{b[e]=null}return b[e]}function ne(e,t){var r;return e&&(N(t)?r=te(e):r=Ft(e,t),r?Re=r:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Re._abbr}function Ft(e,t){if(t!==null){var r,s=kr;if(t.abbr=e,b[e]!=null)ir("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=b[e]._config;else if(t.parentLocale!=null)if(b[t.parentLocale]!=null)s=b[t.parentLocale]._config;else if(r=rt(t.parentLocale),r!=null)s=r._config;else return De[t.parentLocale]||(De[t.parentLocale]=[]),De[t.parentLocale].push({name:e,config:t}),null;return b[e]=new bt(gt(s,t)),De[e]&&De[e].forEach(function(a){Ft(a.name,a.config)}),ne(e),b[e]}else return delete b[e],null}function Fa(e,t){if(t!=null){var r,s,a=kr;b[e]!=null&&b[e].parentLocale!=null?b[e].set(gt(b[e]._config,t)):(s=rt(e),s!=null&&(a=s._config),t=gt(a,t),s==null&&(t.abbr=e),r=new bt(t),r.parentLocale=b[e],b[e]=r),ne(e)}else b[e]!=null&&(b[e].parentLocale!=null?(b[e]=b[e].parentLocale,e===ne()&&ne(e)):b[e]!=null&&delete b[e]);return b[e]}function te(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Re;if(!A(e)){if(t=rt(e),t)return t;e=[e]}return ja(e)}function Ua(){return _t(b)}function Ut(e){var t,r=e._a;return r&&y(e).overflow===-2&&(t=r[J]<0||r[J]>11?J:r[$]<1||r[$]>Nt(r[W],r[J])?$:r[O]<0||r[O]>24||r[O]===24&&(r[L]!==0||r[Q]!==0||r[de]!==0)?O:r[L]<0||r[L]>59?L:r[Q]<0||r[Q]>59?Q:r[de]<0||r[de]>999?de:-1,y(e)._overflowDayOfYear&&(t<W||t>$)&&(t=$),y(e)._overflowWeeks&&t===-1&&(t=Es),y(e)._overflowWeekday&&t===-1&&(t=Hs),y(e).overflow=t),e}var La=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Aa=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ia=/Z|[+-]\d\d(?::?\d\d)?/,Le=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],ft=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ea=/^\/?Date\((-?\d+)/i,Ha=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,$a={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Sr(e){var t,r,s=e._i,a=La.exec(s)||Aa.exec(s),i,n,u,m,p=Le.length,T=ft.length;if(a){for(y(e).iso=!0,t=0,r=p;t<r;t++)if(Le[t][1].exec(a[1])){n=Le[t][0],i=Le[t][2]!==!1;break}if(n==null){e._isValid=!1;return}if(a[3]){for(t=0,r=T;t<r;t++)if(ft[t][1].exec(a[3])){u=(a[2]||" ")+ft[t][0];break}if(u==null){e._isValid=!1;return}}if(!i&&u!=null){e._isValid=!1;return}if(a[4])if(Ia.exec(a[4]))m="Z";else{e._isValid=!1;return}e._f=n+(u||"")+(m||""),At(e)}else e._isValid=!1}function Ga(e,t,r,s,a,i){var n=[Va(e),fr.indexOf(t),parseInt(r,10),parseInt(s,10),parseInt(a,10)];return i&&n.push(parseInt(i,10)),n}function Va(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function za(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function qa(e,t,r){if(e){var s=xr.indexOf(e),a=new Date(t[0],t[1],t[2]).getDay();if(s!==a)return y(r).weekdayMismatch=!0,r._isValid=!1,!1}return!0}function Za(e,t,r){if(e)return $a[e];if(t)return 0;var s=parseInt(r,10),a=s%100,i=(s-a)/100;return i*60+a}function Dr(e){var t=Ha.exec(za(e._i)),r;if(t){if(r=Ga(t[4],t[3],t[2],t[5],t[6],t[7]),!qa(t[1],r,e))return;e._a=r,e._tzm=Za(t[8],t[9],t[10]),e._d=Te.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),y(e).rfc2822=!0}else e._isValid=!1}function Ba(e){var t=Ea.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(Sr(e),e._isValid===!1)delete e._isValid;else return;if(Dr(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:d.createFromInputFallback(e)}d.createFromInputFallback=C("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function fe(e,t,r){return e??t??r}function Ja(e){var t=new Date(d.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Lt(e){var t,r,s=[],a,i,n;if(!e._d){for(a=Ja(e),e._w&&e._a[$]==null&&e._a[J]==null&&Qa(e),e._dayOfYear!=null&&(n=fe(e._a[W],a[W]),(e._dayOfYear>Ye(n)||e._dayOfYear===0)&&(y(e)._overflowDayOfYear=!0),r=Te(n,0,e._dayOfYear),e._a[J]=r.getUTCMonth(),e._a[$]=r.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=s[t]=a[t];for(;t<7;t++)e._a[t]=s[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[O]===24&&e._a[L]===0&&e._a[Q]===0&&e._a[de]===0&&(e._nextDay=!0,e._a[O]=0),e._d=(e._useUTC?Te:sa).apply(null,s),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[O]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==i&&(y(e).weekdayMismatch=!0)}}function Qa(e){var t,r,s,a,i,n,u,m,p;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(i=1,n=4,r=fe(t.GG,e._a[W],We(D(),1,4).year),s=fe(t.W,1),a=fe(t.E,1),(a<1||a>7)&&(m=!0)):(i=e._locale._week.dow,n=e._locale._week.doy,p=We(D(),i,n),r=fe(t.gg,e._a[W],p.year),s=fe(t.w,p.week),t.d!=null?(a=t.d,(a<0||a>6)&&(m=!0)):t.e!=null?(a=t.e+i,(t.e<0||t.e>6)&&(m=!0)):a=i),s<1||s>K(r,i,n)?y(e)._overflowWeeks=!0:m!=null?y(e)._overflowWeekday=!0:(u=_r(r,s,a,i,n),e._a[W]=u.year,e._dayOfYear=u.dayOfYear)}d.ISO_8601=function(){};d.RFC_2822=function(){};function At(e){if(e._f===d.ISO_8601){Sr(e);return}if(e._f===d.RFC_2822){Dr(e);return}e._a=[],y(e).empty=!0;var t=""+e._i,r,s,a,i,n,u=t.length,m=0,p,T;for(a=nr(e._f,e._locale).match(Yt)||[],T=a.length,r=0;r<T;r++)i=a[r],s=(t.match(Ls(i,e))||[])[0],s&&(n=t.substr(0,t.indexOf(s)),n.length>0&&y(e).unusedInput.push(n),t=t.slice(t.indexOf(s)+s.length),m+=s.length),ye[i]?(s?y(e).empty=!1:y(e).unusedTokens.push(i),Is(i,s,e)):e._strict&&!s&&y(e).unusedTokens.push(i);y(e).charsLeftOver=u-m,t.length>0&&y(e).unusedInput.push(t),e._a[O]<=12&&y(e).bigHour===!0&&e._a[O]>0&&(y(e).bigHour=void 0),y(e).parsedDateParts=e._a.slice(0),y(e).meridiem=e._meridiem,e._a[O]=Xa(e._locale,e._a[O],e._meridiem),p=y(e).era,p!==null&&(e._a[W]=e._locale.erasConvertYear(p,e._a[W])),Lt(e),Ut(e)}function Xa(e,t,r){var s;return r==null?t:e.meridiemHour!=null?e.meridiemHour(t,r):(e.isPM!=null&&(s=e.isPM(r),s&&t<12&&(t+=12),!s&&t===12&&(t=0)),t)}function Ka(e){var t,r,s,a,i,n,u=!1,m=e._f.length;if(m===0){y(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<m;a++)i=0,n=!1,t=Mt({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[a],At(t),Dt(t)&&(n=!0),i+=y(t).charsLeftOver,i+=y(t).unusedTokens.length*10,y(t).score=i,u?i<s&&(s=i,r=t):(s==null||i<s||n)&&(s=i,r=t,n&&(u=!0));se(e,r||t)}function ei(e){if(!e._d){var t=Ot(e._i),r=t.day===void 0?t.date:t.day;e._a=sr([t.year,t.month,r,t.hour,t.minute,t.second,t.millisecond],function(s){return s&&parseInt(s,10)}),Lt(e)}}function ti(e){var t=new Pe(Ut(Mr(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Mr(e){var t=e._i,r=e._f;return e._locale=e._locale||te(e._l),t===null||r===void 0&&t===""?Be({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),I(t)?new Pe(Ut(t)):(Ne(t)?e._d=t:A(r)?Ka(e):r?At(e):ri(e),Dt(e)||(e._d=null),e))}function ri(e){var t=e._i;N(t)?e._d=new Date(d.now()):Ne(t)?e._d=new Date(t.valueOf()):typeof t=="string"?Ba(e):A(t)?(e._a=sr(t.slice(0),function(r){return parseInt(r,10)}),Lt(e)):ue(t)?ei(e):ee(t)?e._d=new Date(t):d.createFromInputFallback(e)}function br(e,t,r,s,a){var i={};return(t===!0||t===!1)&&(s=t,t=void 0),(r===!0||r===!1)&&(s=r,r=void 0),(ue(e)&&St(e)||A(e)&&e.length===0)&&(e=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=a,i._l=r,i._i=e,i._f=t,i._strict=s,ti(i)}function D(e,t,r,s){return br(e,t,r,s,!1)}var si=C("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=D.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Be()}),ai=C("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=D.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Be()});function Yr(e,t){var r,s;if(t.length===1&&A(t[0])&&(t=t[0]),!t.length)return D();for(r=t[0],s=1;s<t.length;++s)(!t[s].isValid()||t[s][e](r))&&(r=t[s]);return r}function ii(){var e=[].slice.call(arguments,0);return Yr("isBefore",e)}function ni(){var e=[].slice.call(arguments,0);return Yr("isAfter",e)}var oi=function(){return Date.now?Date.now():+new Date},Me=["year","quarter","month","week","day","hour","minute","second","millisecond"];function li(e){var t,r=!1,s,a=Me.length;for(t in e)if(v(e,t)&&!(Y.call(Me,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(s=0;s<a;++s)if(e[Me[s]]){if(r)return!1;parseFloat(e[Me[s]])!==_(e[Me[s]])&&(r=!0)}return!0}function di(){return this._isValid}function ui(){return E(NaN)}function st(e){var t=Ot(e),r=t.year||0,s=t.quarter||0,a=t.month||0,i=t.week||t.isoWeek||0,n=t.day||0,u=t.hour||0,m=t.minute||0,p=t.second||0,T=t.millisecond||0;this._isValid=li(t),this._milliseconds=+T+p*1e3+m*6e4+u*1e3*60*60,this._days=+n+i*7,this._months=+a+s*3+r*12,this._data={},this._locale=te(),this._bubble()}function Ee(e){return e instanceof st}function wt(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function hi(e,t,r){var s=Math.min(e.length,t.length),a=Math.abs(e.length-t.length),i=0,n;for(n=0;n<s;n++)(r&&e[n]!==t[n]||!r&&_(e[n])!==_(t[n]))&&i++;return i+a}function Or(e,t){f(e,0,0,function(){var r=this.utcOffset(),s="+";return r<0&&(r=-r,s="-"),s+G(~~(r/60),2)+t+G(~~r%60,2)})}Or("Z",":");Or("ZZ","");h("Z",et);h("ZZ",et);S(["Z","ZZ"],function(e,t,r){r._useUTC=!0,r._tzm=It(et,e)});var ci=/([\+\-]|\d\d)/gi;function It(e,t){var r=(t||"").match(e),s,a,i;return r===null?null:(s=r[r.length-1]||[],a=(s+"").match(ci)||["-",0,0],i=+(a[1]*60)+_(a[2]),i===0?0:a[0]==="+"?i:-i)}function Et(e,t){var r,s;return t._isUTC?(r=t.clone(),s=(I(e)||Ne(e)?e.valueOf():D(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+s),d.updateOffset(r,!1),r):D(e).local()}function vt(e){return-Math.round(e._d.getTimezoneOffset())}d.updateOffset=function(){};function fi(e,t,r){var s=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=It(et,e),e===null)return this}else Math.abs(e)<16&&!r&&(e=e*60);return!this._isUTC&&t&&(a=vt(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),s!==e&&(!t||this._changeInProgress?Rr(this,E(e-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,d.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?s:vt(this)}function mi(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function yi(e){return this.utcOffset(0,e)}function pi(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(vt(this),"m")),this}function gi(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=It(Fs,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function _i(e){return this.isValid()?(e=e?D(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function xi(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function wi(){if(!N(this._isDSTShifted))return this._isDSTShifted;var e={},t;return Mt(e,this),e=Mr(e),e._a?(t=e._isUTC?V(e._a):D(e._a),this._isDSTShifted=this.isValid()&&hi(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function vi(){return this.isValid()?!this._isUTC:!1}function ki(){return this.isValid()?this._isUTC:!1}function Tr(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Si=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Di=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function E(e,t){var r=e,s=null,a,i,n;return Ee(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:ee(e)||!isNaN(+e)?(r={},t?r[t]=+e:r.milliseconds=+e):(s=Si.exec(e))?(a=s[1]==="-"?-1:1,r={y:0,d:_(s[$])*a,h:_(s[O])*a,m:_(s[L])*a,s:_(s[Q])*a,ms:_(wt(s[de]*1e3))*a}):(s=Di.exec(e))?(a=s[1]==="-"?-1:1,r={y:le(s[2],a),M:le(s[3],a),w:le(s[4],a),d:le(s[5],a),h:le(s[6],a),m:le(s[7],a),s:le(s[8],a)}):r==null?r={}:typeof r=="object"&&("from"in r||"to"in r)&&(n=Mi(D(r.from),D(r.to)),r={},r.ms=n.milliseconds,r.M=n.months),i=new st(r),Ee(e)&&v(e,"_locale")&&(i._locale=e._locale),Ee(e)&&v(e,"_isValid")&&(i._isValid=e._isValid),i}E.fn=st.prototype;E.invalid=ui;function le(e,t){var r=e&&parseFloat(e.replace(",","."));return(isNaN(r)?0:r)*t}function Qt(e,t){var r={};return r.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(r.months,"M").isAfter(t)&&--r.months,r.milliseconds=+t-+e.clone().add(r.months,"M"),r}function Mi(e,t){var r;return e.isValid()&&t.isValid()?(t=Et(t,e),e.isBefore(t)?r=Qt(e,t):(r=Qt(t,e),r.milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function Wr(e,t){return function(r,s){var a,i;return s!==null&&!isNaN(+s)&&(ir(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=r,r=s,s=i),a=E(r,s),Rr(this,a,e),this}}function Rr(e,t,r,s){var a=t._milliseconds,i=wt(t._days),n=wt(t._months);e.isValid()&&(s=s??!0,n&&yr(e,Oe(e,"Month")+n*r),i&&cr(e,"Date",Oe(e,"Date")+i*r),a&&e._d.setTime(e._d.valueOf()+a*r),s&&d.updateOffset(e,i||n))}var bi=Wr(1,"add"),Yi=Wr(-1,"subtract");function Nr(e){return typeof e=="string"||e instanceof String}function Oi(e){return I(e)||Ne(e)||Nr(e)||ee(e)||Wi(e)||Ti(e)||e===null||e===void 0}function Ti(e){var t=ue(e)&&!St(e),r=!1,s=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,i,n=s.length;for(a=0;a<n;a+=1)i=s[a],r=r||v(e,i);return t&&r}function Wi(e){var t=A(e),r=!1;return t&&(r=e.filter(function(s){return!ee(s)&&Nr(e)}).length===0),t&&r}function Ri(e){var t=ue(e)&&!St(e),r=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,i;for(a=0;a<s.length;a+=1)i=s[a],r=r||v(e,i);return t&&r}function Ni(e,t){var r=e.diff(t,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function Pi(e,t){arguments.length===1&&(arguments[0]?Oi(arguments[0])?(e=arguments[0],t=void 0):Ri(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var r=e||D(),s=Et(r,this).startOf("day"),a=d.calendarFormat(this,s)||"sameElse",i=t&&(z(t[a])?t[a].call(this,r):t[a]);return this.format(i||this.localeData().calendar(a,this,D(r)))}function ji(){return new Pe(this)}function Ci(e,t){var r=I(e)?e:D(e);return this.isValid()&&r.isValid()?(t=F(t)||"millisecond",t==="millisecond"?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(t).valueOf()):!1}function Fi(e,t){var r=I(e)?e:D(e);return this.isValid()&&r.isValid()?(t=F(t)||"millisecond",t==="millisecond"?this.valueOf()<r.valueOf():this.clone().endOf(t).valueOf()<r.valueOf()):!1}function Ui(e,t,r,s){var a=I(e)?e:D(e),i=I(t)?t:D(t);return this.isValid()&&a.isValid()&&i.isValid()?(s=s||"()",(s[0]==="("?this.isAfter(a,r):!this.isBefore(a,r))&&(s[1]===")"?this.isBefore(i,r):!this.isAfter(i,r))):!1}function Li(e,t){var r=I(e)?e:D(e),s;return this.isValid()&&r.isValid()?(t=F(t)||"millisecond",t==="millisecond"?this.valueOf()===r.valueOf():(s=r.valueOf(),this.clone().startOf(t).valueOf()<=s&&s<=this.clone().endOf(t).valueOf())):!1}function Ai(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function Ii(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function Ei(e,t,r){var s,a,i;if(!this.isValid())return NaN;if(s=Et(e,this),!s.isValid())return NaN;switch(a=(s.utcOffset()-this.utcOffset())*6e4,t=F(t),t){case"year":i=He(this,s)/12;break;case"month":i=He(this,s);break;case"quarter":i=He(this,s)/3;break;case"second":i=(this-s)/1e3;break;case"minute":i=(this-s)/6e4;break;case"hour":i=(this-s)/36e5;break;case"day":i=(this-s-a)/864e5;break;case"week":i=(this-s-a)/6048e5;break;default:i=this-s}return r?i:j(i)}function He(e,t){if(e.date()<t.date())return-He(t,e);var r=(t.year()-e.year())*12+(t.month()-e.month()),s=e.clone().add(r,"months"),a,i;return t-s<0?(a=e.clone().add(r-1,"months"),i=(t-s)/(s-a)):(a=e.clone().add(r+1,"months"),i=(t-s)/(a-s)),-(r+i)||0}d.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";d.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Hi(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function $i(e){if(!this.isValid())return null;var t=e!==!0,r=t?this.clone().utc():this;return r.year()<0||r.year()>9999?Ie(r,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):z(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Ie(r,"Z")):Ie(r,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Gi(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",r,s,a,i;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),r="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",i=t+'[")]',this.format(r+s+a+i)}function Vi(e){e||(e=this.isUtc()?d.defaultFormatUtc:d.defaultFormat);var t=Ie(this,e);return this.localeData().postformat(t)}function zi(e,t){return this.isValid()&&(I(e)&&e.isValid()||D(e).isValid())?E({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function qi(e){return this.from(D(),e)}function Zi(e,t){return this.isValid()&&(I(e)&&e.isValid()||D(e).isValid())?E({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Bi(e){return this.to(D(),e)}function Pr(e){var t;return e===void 0?this._locale._abbr:(t=te(e),t!=null&&(this._locale=t),this)}var jr=C("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Cr(){return this._locale}var Ve=1e3,pe=60*Ve,ze=60*pe,Fr=(365*400+97)*24*ze;function ge(e,t){return(e%t+t)%t}function Ur(e,t,r){return e<100&&e>=0?new Date(e+400,t,r)-Fr:new Date(e,t,r).valueOf()}function Lr(e,t,r){return e<100&&e>=0?Date.UTC(e+400,t,r)-Fr:Date.UTC(e,t,r)}function Ji(e){var t,r;if(e=F(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?Lr:Ur,e){case"year":t=r(this.year(),0,1);break;case"quarter":t=r(this.year(),this.month()-this.month()%3,1);break;case"month":t=r(this.year(),this.month(),1);break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=r(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=ge(t+(this._isUTC?0:this.utcOffset()*pe),ze);break;case"minute":t=this._d.valueOf(),t-=ge(t,pe);break;case"second":t=this._d.valueOf(),t-=ge(t,Ve);break}return this._d.setTime(t),d.updateOffset(this,!0),this}function Qi(e){var t,r;if(e=F(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?Lr:Ur,e){case"year":t=r(this.year()+1,0,1)-1;break;case"quarter":t=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=r(this.year(),this.month()+1,1)-1;break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=ze-ge(t+(this._isUTC?0:this.utcOffset()*pe),ze)-1;break;case"minute":t=this._d.valueOf(),t+=pe-ge(t,pe)-1;break;case"second":t=this._d.valueOf(),t+=Ve-ge(t,Ve)-1;break}return this._d.setTime(t),d.updateOffset(this,!0),this}function Xi(){return this._d.valueOf()-(this._offset||0)*6e4}function Ki(){return Math.floor(this.valueOf()/1e3)}function en(){return new Date(this.valueOf())}function tn(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function rn(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function sn(){return this.isValid()?this.toISOString():null}function an(){return Dt(this)}function nn(){return se({},y(this))}function on(){return y(this).overflow}function ln(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}f("N",0,0,"eraAbbr");f("NN",0,0,"eraAbbr");f("NNN",0,0,"eraAbbr");f("NNNN",0,0,"eraName");f("NNNNN",0,0,"eraNarrow");f("y",["y",1],"yo","eraYear");f("y",["yy",2],0,"eraYear");f("y",["yyy",3],0,"eraYear");f("y",["yyyy",4],0,"eraYear");h("N",Ht);h("NN",Ht);h("NNN",Ht);h("NNNN",xn);h("NNNNN",wn);S(["N","NN","NNN","NNNN","NNNNN"],function(e,t,r,s){var a=r._locale.erasParse(e,s,r._strict);a?y(r).era=a:y(r).invalidEra=e});h("y",xe);h("yy",xe);h("yyy",xe);h("yyyy",xe);h("yo",vn);S(["y","yy","yyy","yyyy"],W);S(["yo"],function(e,t,r,s){var a;r._locale._eraYearOrdinalRegex&&(a=e.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?t[W]=r._locale.eraYearOrdinalParse(e,a):t[W]=parseInt(e,10)});function dn(e,t){var r,s,a,i=this._eras||te("en")._eras;for(r=0,s=i.length;r<s;++r){switch(typeof i[r].since){case"string":a=d(i[r].since).startOf("day"),i[r].since=a.valueOf();break}switch(typeof i[r].until){case"undefined":i[r].until=1/0;break;case"string":a=d(i[r].until).startOf("day").valueOf(),i[r].until=a.valueOf();break}}return i}function un(e,t,r){var s,a,i=this.eras(),n,u,m;for(e=e.toUpperCase(),s=0,a=i.length;s<a;++s)if(n=i[s].name.toUpperCase(),u=i[s].abbr.toUpperCase(),m=i[s].narrow.toUpperCase(),r)switch(t){case"N":case"NN":case"NNN":if(u===e)return i[s];break;case"NNNN":if(n===e)return i[s];break;case"NNNNN":if(m===e)return i[s];break}else if([n,u,m].indexOf(e)>=0)return i[s]}function hn(e,t){var r=e.since<=e.until?1:-1;return t===void 0?d(e.since).year():d(e.since).year()+(t-e.offset)*r}function cn(){var e,t,r,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),s[e].since<=r&&r<=s[e].until||s[e].until<=r&&r<=s[e].since)return s[e].name;return""}function fn(){var e,t,r,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),s[e].since<=r&&r<=s[e].until||s[e].until<=r&&r<=s[e].since)return s[e].narrow;return""}function mn(){var e,t,r,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),s[e].since<=r&&r<=s[e].until||s[e].until<=r&&r<=s[e].since)return s[e].abbr;return""}function yn(){var e,t,r,s,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(r=a[e].since<=a[e].until?1:-1,s=this.clone().startOf("day").valueOf(),a[e].since<=s&&s<=a[e].until||a[e].until<=s&&s<=a[e].since)return(this.year()-d(a[e].since).year())*r+a[e].offset;return this.year()}function pn(e){return v(this,"_erasNameRegex")||$t.call(this),e?this._erasNameRegex:this._erasRegex}function gn(e){return v(this,"_erasAbbrRegex")||$t.call(this),e?this._erasAbbrRegex:this._erasRegex}function _n(e){return v(this,"_erasNarrowRegex")||$t.call(this),e?this._erasNarrowRegex:this._erasRegex}function Ht(e,t){return t.erasAbbrRegex(e)}function xn(e,t){return t.erasNameRegex(e)}function wn(e,t){return t.erasNarrowRegex(e)}function vn(e,t){return t._eraYearOrdinalRegex||xe}function $t(){var e=[],t=[],r=[],s=[],a,i,n,u,m,p=this.eras();for(a=0,i=p.length;a<i;++a)n=X(p[a].name),u=X(p[a].abbr),m=X(p[a].narrow),t.push(n),e.push(u),r.push(m),s.push(n),s.push(u),s.push(m);this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}f(0,["gg",2],0,function(){return this.weekYear()%100});f(0,["GG",2],0,function(){return this.isoWeekYear()%100});function at(e,t){f(0,[e,e.length],0,t)}at("gggg","weekYear");at("ggggg","weekYear");at("GGGG","isoWeekYear");at("GGGGG","isoWeekYear");h("G",Ke);h("g",Ke);h("GG",M,P);h("gg",M,P);h("GGGG",Wt,Tt);h("gggg",Wt,Tt);h("GGGGG",Xe,Je);h("ggggg",Xe,Je);Ce(["gggg","ggggg","GGGG","GGGGG"],function(e,t,r,s){t[s.substr(0,2)]=_(e)});Ce(["gg","GG"],function(e,t,r,s){t[s]=d.parseTwoDigitYear(e)});function kn(e){return Ar.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Sn(e){return Ar.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Dn(){return K(this.year(),1,4)}function Mn(){return K(this.isoWeekYear(),1,4)}function bn(){var e=this.localeData()._week;return K(this.year(),e.dow,e.doy)}function Yn(){var e=this.localeData()._week;return K(this.weekYear(),e.dow,e.doy)}function Ar(e,t,r,s,a){var i;return e==null?We(this,s,a).year:(i=K(e,s,a),t>i&&(t=i),On.call(this,e,t,r,s,a))}function On(e,t,r,s,a){var i=_r(e,t,r,s,a),n=Te(i.year,0,i.dayOfYear);return this.year(n.getUTCFullYear()),this.month(n.getUTCMonth()),this.date(n.getUTCDate()),this}f("Q",0,"Qo","quarter");h("Q",or);S("Q",function(e,t){t[J]=(_(e)-1)*3});function Tn(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}f("D",["DD",2],"Do","date");h("D",M,we);h("DD",M,P);h("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});S(["D","DD"],$);S("Do",function(e,t){t[$]=_(e.match(M)[0])});var Ir=ve("Date",!0);f("DDD",["DDDD",3],"DDDo","dayOfYear");h("DDD",Qe);h("DDDD",lr);S(["DDD","DDDD"],function(e,t,r){r._dayOfYear=_(e)});function Wn(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}f("m",["mm",2],0,"minute");h("m",M,Rt);h("mm",M,P);S(["m","mm"],L);var Rn=ve("Minutes",!1);f("s",["ss",2],0,"second");h("s",M,Rt);h("ss",M,P);S(["s","ss"],Q);var Nn=ve("Seconds",!1);f("S",0,0,function(){return~~(this.millisecond()/100)});f(0,["SS",2],0,function(){return~~(this.millisecond()/10)});f(0,["SSS",3],0,"millisecond");f(0,["SSSS",4],0,function(){return this.millisecond()*10});f(0,["SSSSS",5],0,function(){return this.millisecond()*100});f(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});f(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});f(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});f(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});h("S",Qe,or);h("SS",Qe,P);h("SSS",Qe,lr);var ae,Er;for(ae="SSSS";ae.length<=9;ae+="S")h(ae,xe);function Pn(e,t){t[de]=_(("0."+e)*1e3)}for(ae="S";ae.length<=9;ae+="S")S(ae,Pn);Er=ve("Milliseconds",!1);f("z",0,0,"zoneAbbr");f("zz",0,0,"zoneName");function jn(){return this._isUTC?"UTC":""}function Cn(){return this._isUTC?"Coordinated Universal Time":""}var l=Pe.prototype;l.add=bi;l.calendar=Pi;l.clone=ji;l.diff=Ei;l.endOf=Qi;l.format=Vi;l.from=zi;l.fromNow=qi;l.to=Zi;l.toNow=Bi;l.get=Gs;l.invalidAt=on;l.isAfter=Ci;l.isBefore=Fi;l.isBetween=Ui;l.isSame=Li;l.isSameOrAfter=Ai;l.isSameOrBefore=Ii;l.isValid=an;l.lang=jr;l.locale=Pr;l.localeData=Cr;l.max=ai;l.min=si;l.parsingFlags=nn;l.set=Vs;l.startOf=Ji;l.subtract=Yi;l.toArray=tn;l.toObject=rn;l.toDate=en;l.toISOString=$i;l.inspect=Gi;typeof Symbol<"u"&&Symbol.for!=null&&(l[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});l.toJSON=sn;l.toString=Hi;l.unix=Ki;l.valueOf=Xi;l.creationData=ln;l.eraName=cn;l.eraNarrow=fn;l.eraAbbr=mn;l.eraYear=yn;l.year=hr;l.isLeapYear=$s;l.weekYear=kn;l.isoWeekYear=Sn;l.quarter=l.quarters=Tn;l.month=pr;l.daysInMonth=ea;l.week=l.weeks=la;l.isoWeek=l.isoWeeks=da;l.weeksInYear=bn;l.weeksInWeekYear=Yn;l.isoWeeksInYear=Dn;l.isoWeeksInISOWeekYear=Mn;l.date=Ir;l.day=l.days=ka;l.weekday=Sa;l.isoWeekday=Da;l.dayOfYear=Wn;l.hour=l.hours=Ra;l.minute=l.minutes=Rn;l.second=l.seconds=Nn;l.millisecond=l.milliseconds=Er;l.utcOffset=fi;l.utc=yi;l.local=pi;l.parseZone=gi;l.hasAlignedHourOffset=_i;l.isDST=xi;l.isLocal=vi;l.isUtcOffset=ki;l.isUtc=Tr;l.isUTC=Tr;l.zoneAbbr=jn;l.zoneName=Cn;l.dates=C("dates accessor is deprecated. Use date instead.",Ir);l.months=C("months accessor is deprecated. Use month instead",pr);l.years=C("years accessor is deprecated. Use year instead",hr);l.zone=C("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",mi);l.isDSTShifted=C("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",wi);function Fn(e){return D(e*1e3)}function Un(){return D.apply(null,arguments).parseZone()}function Hr(e){return e}var k=bt.prototype;k.calendar=vs;k.longDateFormat=Ms;k.invalidDate=Ys;k.ordinal=Ws;k.preparse=Hr;k.postformat=Hr;k.relativeTime=Ns;k.pastFuture=Ps;k.set=xs;k.eras=dn;k.erasParse=un;k.erasConvertYear=hn;k.erasAbbrRegex=gn;k.erasNameRegex=pn;k.erasNarrowRegex=_n;k.months=Js;k.monthsShort=Qs;k.monthsParse=Ks;k.monthsRegex=ra;k.monthsShortRegex=ta;k.week=aa;k.firstDayOfYear=oa;k.firstDayOfWeek=na;k.weekdays=ga;k.weekdaysMin=xa;k.weekdaysShort=_a;k.weekdaysParse=va;k.weekdaysRegex=Ma;k.weekdaysShortRegex=ba;k.weekdaysMinRegex=Ya;k.isPM=Ta;k.meridiem=Na;function qe(e,t,r,s){var a=te(),i=V().set(s,t);return a[r](i,e)}function $r(e,t,r){if(ee(e)&&(t=e,e=void 0),e=e||"",t!=null)return qe(e,t,r,"month");var s,a=[];for(s=0;s<12;s++)a[s]=qe(e,s,r,"month");return a}function Gt(e,t,r,s){typeof e=="boolean"?(ee(t)&&(r=t,t=void 0),t=t||""):(t=e,r=t,e=!1,ee(t)&&(r=t,t=void 0),t=t||"");var a=te(),i=e?a._week.dow:0,n,u=[];if(r!=null)return qe(t,(r+i)%7,s,"day");for(n=0;n<7;n++)u[n]=qe(t,(n+i)%7,s,"day");return u}function Ln(e,t){return $r(e,t,"months")}function An(e,t){return $r(e,t,"monthsShort")}function In(e,t,r){return Gt(e,t,r,"weekdays")}function En(e,t,r){return Gt(e,t,r,"weekdaysShort")}function Hn(e,t,r){return Gt(e,t,r,"weekdaysMin")}ne("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,r=_(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+r}});d.lang=C("moment.lang is deprecated. Use moment.locale instead.",ne);d.langData=C("moment.langData is deprecated. Use moment.localeData instead.",te);var q=Math.abs;function $n(){var e=this._data;return this._milliseconds=q(this._milliseconds),this._days=q(this._days),this._months=q(this._months),e.milliseconds=q(e.milliseconds),e.seconds=q(e.seconds),e.minutes=q(e.minutes),e.hours=q(e.hours),e.months=q(e.months),e.years=q(e.years),this}function Gr(e,t,r,s){var a=E(t,r);return e._milliseconds+=s*a._milliseconds,e._days+=s*a._days,e._months+=s*a._months,e._bubble()}function Gn(e,t){return Gr(this,e,t,1)}function Vn(e,t){return Gr(this,e,t,-1)}function Xt(e){return e<0?Math.floor(e):Math.ceil(e)}function zn(){var e=this._milliseconds,t=this._days,r=this._months,s=this._data,a,i,n,u,m;return e>=0&&t>=0&&r>=0||e<=0&&t<=0&&r<=0||(e+=Xt(kt(r)+t)*864e5,t=0,r=0),s.milliseconds=e%1e3,a=j(e/1e3),s.seconds=a%60,i=j(a/60),s.minutes=i%60,n=j(i/60),s.hours=n%24,t+=j(n/24),m=j(Vr(t)),r+=m,t-=Xt(kt(m)),u=j(r/12),r%=12,s.days=t,s.months=r,s.years=u,this}function Vr(e){return e*4800/146097}function kt(e){return e*146097/4800}function qn(e){if(!this.isValid())return NaN;var t,r,s=this._milliseconds;if(e=F(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+s/864e5,r=this._months+Vr(t),e){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(t=this._days+Math.round(kt(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return t*24+s/36e5;case"minute":return t*1440+s/6e4;case"second":return t*86400+s/1e3;case"millisecond":return Math.floor(t*864e5)+s;default:throw new Error("Unknown unit "+e)}}function re(e){return function(){return this.as(e)}}var zr=re("ms"),Zn=re("s"),Bn=re("m"),Jn=re("h"),Qn=re("d"),Xn=re("w"),Kn=re("M"),eo=re("Q"),to=re("y"),ro=zr;function so(){return E(this)}function ao(e){return e=F(e),this.isValid()?this[e+"s"]():NaN}function he(e){return function(){return this.isValid()?this._data[e]:NaN}}var io=he("milliseconds"),no=he("seconds"),oo=he("minutes"),lo=he("hours"),uo=he("days"),ho=he("months"),co=he("years");function fo(){return j(this.days()/7)}var B=Math.round,me={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function mo(e,t,r,s,a){return a.relativeTime(t||1,!!r,e,s)}function yo(e,t,r,s){var a=E(e).abs(),i=B(a.as("s")),n=B(a.as("m")),u=B(a.as("h")),m=B(a.as("d")),p=B(a.as("M")),T=B(a.as("w")),c=B(a.as("y")),R=i<=r.ss&&["s",i]||i<r.s&&["ss",i]||n<=1&&["m"]||n<r.m&&["mm",n]||u<=1&&["h"]||u<r.h&&["hh",u]||m<=1&&["d"]||m<r.d&&["dd",m];return r.w!=null&&(R=R||T<=1&&["w"]||T<r.w&&["ww",T]),R=R||p<=1&&["M"]||p<r.M&&["MM",p]||c<=1&&["y"]||["yy",c],R[2]=t,R[3]=+e>0,R[4]=s,mo.apply(null,R)}function po(e){return e===void 0?B:typeof e=="function"?(B=e,!0):!1}function go(e,t){return me[e]===void 0?!1:t===void 0?me[e]:(me[e]=t,e==="s"&&(me.ss=t-1),!0)}function _o(e,t){if(!this.isValid())return this.localeData().invalidDate();var r=!1,s=me,a,i;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(r=e),typeof t=="object"&&(s=Object.assign({},me,t),t.s!=null&&t.ss==null&&(s.ss=t.s-1)),a=this.localeData(),i=yo(this,!r,s,a),r&&(i=a.pastFuture(+this,i)),a.postformat(i)}var mt=Math.abs;function ce(e){return(e>0)-(e<0)||+e}function it(){if(!this.isValid())return this.localeData().invalidDate();var e=mt(this._milliseconds)/1e3,t=mt(this._days),r=mt(this._months),s,a,i,n,u=this.asSeconds(),m,p,T,c;return u?(s=j(e/60),a=j(s/60),e%=60,s%=60,i=j(r/12),r%=12,n=e?e.toFixed(3).replace(/\.?0+$/,""):"",m=u<0?"-":"",p=ce(this._months)!==ce(u)?"-":"",T=ce(this._days)!==ce(u)?"-":"",c=ce(this._milliseconds)!==ce(u)?"-":"",m+"P"+(i?p+i+"Y":"")+(r?p+r+"M":"")+(t?T+t+"D":"")+(a||s||e?"T":"")+(a?c+a+"H":"")+(s?c+s+"M":"")+(e?c+n+"S":"")):"P0D"}var w=st.prototype;w.isValid=di;w.abs=$n;w.add=Gn;w.subtract=Vn;w.as=qn;w.asMilliseconds=zr;w.asSeconds=Zn;w.asMinutes=Bn;w.asHours=Jn;w.asDays=Qn;w.asWeeks=Xn;w.asMonths=Kn;w.asQuarters=eo;w.asYears=to;w.valueOf=ro;w._bubble=zn;w.clone=so;w.get=ao;w.milliseconds=io;w.seconds=no;w.minutes=oo;w.hours=lo;w.days=uo;w.weeks=fo;w.months=ho;w.years=co;w.humanize=_o;w.toISOString=it;w.toString=it;w.toJSON=it;w.locale=Pr;w.localeData=Cr;w.toIsoString=C("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",it);w.lang=jr;f("X",0,0,"unix");f("x",0,0,"valueOf");h("x",Ke);h("X",Us);S("X",function(e,t,r){r._d=new Date(parseFloat(e)*1e3)});S("x",function(e,t,r){r._d=new Date(_(e))});//! moment.js
d.version="2.30.1";gs(D);d.fn=l;d.min=ii;d.max=ni;d.now=oi;d.utc=V;d.unix=Fn;d.months=Ln;d.isDate=Ne;d.locale=ne;d.invalid=Be;d.duration=E;d.isMoment=I;d.weekdays=In;d.parseZone=Un;d.localeData=te;d.isDuration=Ee;d.monthsShort=An;d.weekdaysMin=Hn;d.defineLocale=Ft;d.updateLocale=Fa;d.locales=Ua;d.weekdaysShort=En;d.normalizeUnits=F;d.relativeTimeRounding=po;d.relativeTimeThreshold=go;d.calendarFormat=Ni;d.prototype=l;d.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};_e.defaults.baseURL="https://powerpulserver.onrender.com/api";const qr=e=>{_e.defaults.headers.common.Authorization=`Bearer ${e}`},xo=Ze("getCurrentUser",async(e,t)=>{try{const s=t.getState().auth.token;if(s===null)return oe.info("Unable to get user"),t.rejectWithValue("Token not available");qr(s);const a=await _e.get("/auth/current");return console.log(a.data.user),a.data.user}catch(r){return oe.error(r.message),t.rejectWithValue(r.message)}}),wo=Ze("updateUser",async(e,t)=>{try{const s=t.getState().auth.token;return s===null?(oe.info("Unable to get user"),t.rejectWithValue("Token not available")):(qr(s),delete e.avatarURL,delete e.userParams,(await _e.patch("/auth/params",e)).data.user)}catch(r){return oe.error(r.message),t.rejectWithValue(r.message)}});Ze("auth/avatar",async(e,t)=>{try{const r=new FormData;r.append("avatar",e);const s=await _e.patch("/*****",r,{headers:{"content-type":"multipart/form-data"}});return oe.success("Avatar updated"),s.data}catch(r){return oe.error(r.message),t.rejectWithValue(r.message)}});Ze("auth/addUserData",async(e,t)=>{try{const r=await _e.patch("/****",e);return oe.success("Your profile updated"),r.data}catch(r){return oe.error(r.message),t.rejectWithValue(r.message)}});const vo=g.div`
  display: flex;
`,Kt=g.label`
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
`,ko=g.div`
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
`,So=g.div`
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
`,er=g.input`
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
        ${e?`${x.colorSecondaryRed}`:t?`${x.colorSecondaryGreen}`:`${x.colorInput}`};
    `}
  }

  @media screen and (min-width: 375px) {
    color: white;
    width: 335px;
    ${({haserror:e,isValidationCompleted:t,...r})=>ie`
      border: 1px solid
        ${e?`${x.colorSecondaryRed}`:t?`${x.colorSecondaryGreen}`:`${x.colorInput}`};
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
        ${e?`${x.colorSecondaryRed}`:t?`${x.colorSecondaryGreen}`:`${x.colorInput}`};

      &:hover,
      &:focus {
        ${!t&&`
        border: 1px solid ${x.colorOrange};
      `}
      }
    `}
  }
`,Do=g.div`
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
`,Ae=g.label`
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
`,yt=g.input`
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
        ${e?`${x.colorSecondaryRed}`:t?`${x.colorSecondaryGreen}`:`${x.colorInput}`};
    `}
  }

  @media screen and (min-width: 375px) {
    color: white;
    width: 161px;
    ${({haserror:e,isValidationCompleted:t,...r})=>ie`
      border: 1px solid
        ${e?`${x.colorSecondaryRed}`:t?`${x.colorSecondaryGreen}`:`${x.colorInput}`};
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
        ${e?`${x.colorSecondaryRed}`:t?`${x.colorSecondaryGreen}`:`${x.colorInput}`};

      &:hover,
      &:focus {
        ${!t&&`
        border: 1px solid ${x.colorOrange};
      `}
      }
    `}
  }
`,Mo=g(Xr)`
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
      ${e?`${x.colorSecondaryRed}`:t?`${x.colorSecondaryGreen}`:`${x.colorInput}`};
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
        ${e?`${x.colorSecondaryRed}`:t?`${x.colorSecondaryGreen}`:`${x.colorInput}`};

      &:hover,
      &:focus {
        ${!t&&`
        border: 1px solid ${x.colorOrange};
      `}
      }
    `}
  }
`,tr=g.div`
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
`,bo=g.div`
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
`,H=g.label`
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
`,U=g(Kr)`
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
      ${x.colorOrange},
      transparent 50%
    );
    border: 0.11em solid ${x.colorOrange};
  }
`,Z=g(es)`
  color: red;
`,Yo=g.div`
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
`,Oo=g.button`
  @media screen and (min-width: 320px) {
    position: sticky;
    display: flex;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 140px;
    border-radius: 12px;
    background-color: ${x.colorOrange};
    color: ${x.colorWhite};
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
      background-color: ${x.colorOrange1};
    }
  }
`;d().format("YYYY-MM-DD");const To=ts().shape({name:Fe().min(2,"Too Short!").required("Name is required"),email:Fe().email("Invalid email address").required("Email is required"),height:ke().label("Height").min(150,"Height must be a number greater than or equal to 150").required("Height is required"),currentWeight:ke().label("Current Weight").min(35,"Current Weight must be a number greater than or equal to 35").required("Current Weight is required"),desiredWeight:ke().label("Desired Weight").min(35,"Desired Weight must be a number greater than or equal to 35").required("Desired Weight is required"),blood:ke().label("Blood Type").oneOf([1,2,3,4,"1","2","3","4"],"Invalid Blood Type").required("Blood Type is required"),sex:Fe().label("Gender").oneOf(["male","female"],"Invalid Gender").required("Gender is required"),levelActivity:ke().label("Level of Activity").oneOf([1,2,3,4,5,"1","2","3","4","5"],"Invalid Level of Activity").required("Level of Activity is required"),birthday:Fe().label("Date of Birth").typeError("Invalid Date!")}),Wo=({profile:e,refreshUserData:t})=>{const r=Qr(),[s,a]=be.useState(e),[i,n]=be.useState(null),[u,m]=be.useState(!1),p=async()=>{try{const c=await r(xo());c.payload.birthday===void 0&&(c.payload.birthday=""),a(c.payload),t(c.payload)}catch(c){console.error("Error fetching user data:",c)}};be.useEffect(()=>{p()},[]);const T=c=>{m(!0),console.log(c);try{const R=r(wo(c));console.log(R)}catch(R){console.error("Error fetching user data:",R)}return setTimeout(()=>{m(!1)},3e3),!1};return o.jsx(vo,{children:o.jsx(rs,{initialValues:s,enableReinitialize:!0,validationSchema:To,onSubmit:T,children:c=>o.jsxs(ss,{children:[o.jsxs(ko,{children:[o.jsxs(So,{children:[o.jsxs(Kt,{children:["Name",o.jsx(er,{name:"name",placeholder:"Mike",type:"text",onChange:c.handleChange,value:c.values.name}),o.jsx(Z,{name:"name",component:"div"})]}),o.jsxs(Kt,{children:["Email",o.jsx(er,{name:"email",placeholder:"jane@acme.com",type:"email",onChange:c.handleChange,value:c.values.email}),o.jsx(Z,{name:"email",component:"div"})]})]}),o.jsxs(Do,{children:[o.jsxs(Ae,{children:["Height",o.jsx(yt,{name:"height",placeholder:"0",type:"number",onChange:c.handleChange,value:c.values.height}),o.jsx(Z,{name:"height",component:"div"})]}),o.jsxs(Ae,{children:["Current Weight",o.jsx(yt,{name:"currentWeight",placeholder:"0",type:"number",onChange:c.handleChange,value:c.values.currentWeight}),o.jsx(Z,{name:"currentWeight",component:"div"})]}),o.jsxs(Ae,{children:["Desired Weight",o.jsx(yt,{name:"desiredWeight",placeholder:"0",type:"number",onChange:c.handleChange,value:c.values.desiredWeight}),o.jsx(Z,{name:"desiredWeight",component:"div"})]}),o.jsxs(Ae,{children:["Date of birth",o.jsx(Mo,{selected:i,onChange:R=>{n(R),c.handleChange,c.values.birthday=R,c.setFieldTouched},dateFormat:"MM.dd.yyyy",placeholderText:"00.00.00",name:"birthday",value:c.values.birthday}),o.jsx(Z,{name:"birthday",component:"div"})]})]}),o.jsxs(tr,{children:[o.jsxs("div",{role:"group","aria-labelledby":"bloodLevel",children:[o.jsx(Z,{name:"blood",component:"div"}),o.jsxs(bo,{children:["Blood",o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"blood",value:"1",onChange:c.handleChange,checked:c.values.blood==="1"||c.values.blood===1}),"1"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"blood",value:"2",onChange:c.handleChange,checked:c.values.blood==="2"||c.values.blood===2}),"2"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"blood",value:"3",onChange:c.handleChange,checked:c.values.blood==="3"||c.values.blood===3}),"3"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"blood",value:"4",onChange:c.handleChange,checked:c.values.blood==="4"||c.values.blood===4}),"4"]})]})]}),o.jsxs("div",{role:"group","aria-labelledby":"genderType",children:[o.jsx(Z,{name:"sex",component:"div"}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"sex",value:"male",checked:c.values.sex==="male"}),"Male",o.jsx(U,{type:"radio",name:"sex",value:"female",checked:c.values.sex==="female"}),"Female"]})]})]}),o.jsxs(tr,{role:"group","aria-labelledby":"activityGroup",children:[o.jsx(Z,{name:"levelActivity",component:"div"}),o.jsxs(Yo,{children:[o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"1",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="1"||c.values.levelActivity===1}),"Sedentary lifestyle (little or no physical activity)"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"2",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="2"||c.values.levelActivity===2}),"Light activity (light excercises/sports 1-3 days per week)"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"3",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="3"||c.values.levelActivity===3}),"Moderately active (moderate excercises/sports 2-5 days per week)"," "]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"4",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="4"||c.values.levelActivity===4}),"Very active (intence excercises/sports 6-7 days per week)"]}),o.jsxs(H,{children:[o.jsx(U,{type:"radio",name:"levelActivity",value:"5",required:!0,onChange:c.handleChange,checked:c.values.levelActivity==="5"||c.values.levelActivity===5}),"Extremely active (very strenous exercises/sports and physical work)"]})]})]})]}),o.jsx(Oo,{type:"submit",children:"Save"}),u&&o.jsx("span",{className:"success-msg",children:"Settings updated successfully"})]})})})},Ro=g.div`
  padding-top: 72px;
`,No=g.div`
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
`;class Ao extends be.Component{constructor(){super(...arguments);nt(this,"state",{profile:{name:"Jane",email:"",height:0,currentWeight:0,desiredWeight:0,blood:"1",sex:"female",levelActivity:"1",avatarURL:"",birthday:""}});nt(this,"refreshProfileState",r=>{this.setState({profile:r})})}render(){return o.jsxs(Ro,{children:[o.jsx("h1",{children:"Profile Settings"}),o.jsxs(No,{children:[o.jsx(Wo,{profile:this.state.profile,refreshUserData:this.refreshProfileState}),o.jsx(ps,{profile:this.state.profile,refreshUserData:this.refreshProfileState})]})]})}}export{Ao as ProfilePage,Ao as default};
