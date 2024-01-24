var Zr=Object.defineProperty;var Br=(e,t,r)=>t in e?Zr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var nt=(e,t,r)=>(Br(e,typeof t!="symbol"?t+"":t,r),r);import{s as y,g as h,u as rr,i as Jr,j as o,a as Me,L as Qr,k as Xr,m as Kr,n as se,F as ea,E as ta,c as ra,d as Fe,o as ke,r as fe,p as aa,q as ia,t as na,Q as Gt,v as sa,C as oa}from"./index-ecd512a5.js";import{e as la}from"./react-datepicker-cssmodules-46042d66.js";import"./defineProperty-35dd059d.js";const da=y.div`
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
`,ua=y.div`
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
`,ca=y.div`
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
`;const ha=y.div`
  display: flex;
  align-items: center;
  align-content: center;
`,fa=y.input`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
`,ma=y.label`
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
`,pa=y.svg`
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
`,ya=y.img`
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
`,ga=y.h2`
  color: #efede8;

  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`,_a=y.p`
  color: rgba(239, 237, 232, 0.5);

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,wa=y.div`
  display: flex;
  gap: 14px;
  margin: 0 auto;
`,Vt=y.div`
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
`,st=y.svg`
  @media screen and (min-width: 320px) {
    width: 12px;
    height: 12px;
    fill: ${h.colorWhite};
  }

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,ot=y.div`
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
`,be=y.div`
  display: flex;
  align-items: baseline;
  gap: 11px;
`,zt=y.p`
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
`,lt=y.span`
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
`,va=y.div`
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
`;const ka=y.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;
`,ba=y.p`
  @media screen and (min-width: 768px) {
    width: 330px;
  }

  @media screen and (min-width: 1440px) {
    width: 330px;
  }
`,Sa=({profile:e,refreshUserData:t})=>{const r=rr(),{bmr:a}=Jr(),i=n=>{try{const s=r(Xr(n.target.files[0]));e.avatarURL=URL.createObjectURL(n.target.files[0]),t(e)}catch(s){console.error("error ava update:",s)}return n.target.value};return o.jsxs(da,{children:[o.jsxs(ua,{children:[o.jsx(ca,{children:o.jsx(ha,{children:o.jsx(fa,{type:"file",accept:"image/*",id:"file-input",src:e.avatarURL,alt:"User Avatar",onChange:n=>{i(n)},onClick:n=>{n.target.value=null}})})}),o.jsx(ma,{htmlFor:"file-input",children:o.jsx(pa,{children:o.jsx("use",{href:Me+"#icon-check-mark-1"})})}),o.jsx("div",{children:o.jsx(ya,{src:e.avatarURL,alt:"User Avatar"})})]}),o.jsxs(xa,{children:[o.jsx(ga,{children:e.name}),o.jsx(_a,{children:"User"})]}),o.jsxs(wa,{children:[o.jsxs(Vt,{children:[o.jsxs(be,{children:[o.jsx(ot,{children:o.jsx(st,{children:o.jsx("use",{href:`${Me}#icon-fluent_food-24-filled`})})}),o.jsx(lt,{children:" Daily calorie intake"})]}),o.jsx(be,{children:o.jsx(zt,{children:a!==null?a:0})})]}),o.jsxs(Vt,{children:[o.jsxs(be,{children:[o.jsx(ot,{children:o.jsx(st,{children:o.jsx("use",{href:`${Me}#icon-dumbbell`})})}),o.jsx(lt,{children:" Daily physical activity"})]}),o.jsxs(be,{children:[o.jsx(zt,{children:"110"}),o.jsx(lt,{children:"min"})]})]})]}),o.jsx(va,{children:o.jsxs(be,{children:[o.jsx(ot,{children:o.jsx(st,{children:o.jsx("use",{href:`${Me}#exclamation-mark`})})}),o.jsx(ba,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})}),o.jsx(ka,{children:o.jsx(Qr,{})})]})};//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var ar;function d(){return ar.apply(null,arguments)}function Da(e){ar=e}function I(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function ue(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function v(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function vt(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(v(e,t))return!1;return!0}function j(e){return e===void 0}function te(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function je(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function ir(e,t){var r=[],a,i=e.length;for(a=0;a<i;++a)r.push(t(e[a],a));return r}function ie(e,t){for(var r in t)v(t,r)&&(e[r]=t[r]);return v(t,"toString")&&(e.toString=t.toString),v(t,"valueOf")&&(e.valueOf=t.valueOf),e}function z(e,t,r,a){return Yr(e,t,r,a,!0).utc()}function Ma(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function x(e){return e._pf==null&&(e._pf=Ma()),e._pf}var mt;Array.prototype.some?mt=Array.prototype.some:mt=function(e){var t=Object(this),r=t.length>>>0,a;for(a=0;a<r;a++)if(a in t&&e.call(this,t[a],a,t))return!0;return!1};function kt(e){var t=null,r=!1,a=e._d&&!isNaN(e._d.getTime());if(a&&(t=x(e),r=mt.call(t.parsedDateParts,function(i){return i!=null}),a=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&r),e._strict&&(a=a&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=a;else return a;return e._isValid}function Ze(e){var t=z(NaN);return e!=null?ie(x(t),e):x(t).userInvalidated=!0,t}var qt=d.momentProperties=[],dt=!1;function bt(e,t){var r,a,i,n=qt.length;if(j(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),j(t._i)||(e._i=t._i),j(t._f)||(e._f=t._f),j(t._l)||(e._l=t._l),j(t._strict)||(e._strict=t._strict),j(t._tzm)||(e._tzm=t._tzm),j(t._isUTC)||(e._isUTC=t._isUTC),j(t._offset)||(e._offset=t._offset),j(t._pf)||(e._pf=x(t)),j(t._locale)||(e._locale=t._locale),n>0)for(r=0;r<n;r++)a=qt[r],i=t[a],j(i)||(e[a]=i);return e}function Pe(e){bt(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),dt===!1&&(dt=!0,d.updateOffset(this),dt=!1)}function $(e){return e instanceof Pe||e!=null&&e._isAMomentObject!=null}function nr(e){d.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function C(e,t){var r=!0;return ie(function(){if(d.deprecationHandler!=null&&d.deprecationHandler(null,e),r){var a=[],i,n,s,u=arguments.length;for(n=0;n<u;n++){if(i="",typeof arguments[n]=="object"){i+=`
[`+n+"] ";for(s in arguments[0])v(arguments[0],s)&&(i+=s+": "+arguments[0][s]+", ");i=i.slice(0,-2)}else i=arguments[n];a.push(i)}nr(e+`
Arguments: `+Array.prototype.slice.call(a).join("")+`
`+new Error().stack),r=!1}return t.apply(this,arguments)},t)}var Zt={};function sr(e,t){d.deprecationHandler!=null&&d.deprecationHandler(e,t),Zt[e]||(nr(t),Zt[e]=!0)}d.suppressDeprecationWarnings=!1;d.deprecationHandler=null;function q(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Ya(e){var t,r;for(r in e)v(e,r)&&(t=e[r],q(t)?this[r]=t:this["_"+r]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function pt(e,t){var r=ie({},e),a;for(a in t)v(t,a)&&(ue(e[a])&&ue(t[a])?(r[a]={},ie(r[a],e[a]),ie(r[a],t[a])):t[a]!=null?r[a]=t[a]:delete r[a]);for(a in e)v(e,a)&&!v(t,a)&&ue(e[a])&&(r[a]=ie({},r[a]));return r}function St(e){e!=null&&this.set(e)}var yt;Object.keys?yt=Object.keys:yt=function(e){var t,r=[];for(t in e)v(e,t)&&r.push(t);return r};var Oa={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Ta(e,t,r){var a=this._calendar[e]||this._calendar.sameElse;return q(a)?a.call(t,r):a}function V(e,t,r){var a=""+Math.abs(e),i=t-a.length,n=e>=0;return(n?r?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+a}var Dt=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Ue=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ut={},ye={};function m(e,t,r,a){var i=a;typeof a=="string"&&(i=function(){return this[a]()}),e&&(ye[e]=i),t&&(ye[t[0]]=function(){return V(i.apply(this,arguments),t[1],t[2])}),r&&(ye[r]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function Wa(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Ra(e){var t=e.match(Dt),r,a;for(r=0,a=t.length;r<a;r++)ye[t[r]]?t[r]=ye[t[r]]:t[r]=Wa(t[r]);return function(i){var n="",s;for(s=0;s<a;s++)n+=q(t[s])?t[s].call(i,e):t[s];return n}}function Ie(e,t){return e.isValid()?(t=or(t,e.localeData()),ut[t]=ut[t]||Ra(t),ut[t](e)):e.localeData().invalidDate()}function or(e,t){var r=5;function a(i){return t.longDateFormat(i)||i}for(Ue.lastIndex=0;r>=0&&Ue.test(e);)e=e.replace(Ue,a),Ue.lastIndex=0,r-=1;return e}var ja={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Pa(e){var t=this._longDateFormat[e],r=this._longDateFormat[e.toUpperCase()];return t||!r?t:(this._longDateFormat[e]=r.match(Dt).map(function(a){return a==="MMMM"||a==="MM"||a==="DD"||a==="dddd"?a.slice(1):a}).join(""),this._longDateFormat[e])}var Na="Invalid date";function Ca(){return this._invalidDate}var Fa="%d",Ua=/\d{1,2}/;function La(e){return this._ordinal.replace("%d",e)}var Aa={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Ia(e,t,r,a){var i=this._relativeTime[r];return q(i)?i(e,t,r,a):i.replace(/%d/i,e)}function $a(e,t){var r=this._relativeTime[e>0?"future":"past"];return q(r)?r(t):r.replace(/%s/i,t)}var Bt={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function F(e){return typeof e=="string"?Bt[e]||Bt[e.toLowerCase()]:void 0}function Mt(e){var t={},r,a;for(a in e)v(e,a)&&(r=F(a),r&&(t[r]=e[a]));return t}var Ea={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Ha(e){var t=[],r;for(r in e)v(e,r)&&t.push({unit:r,priority:Ea[r]});return t.sort(function(a,i){return a.priority-i.priority}),t}var lr=/\d/,P=/\d\d/,dr=/\d{3}/,Yt=/\d{4}/,Be=/[+-]?\d{6}/,D=/\d\d?/,ur=/\d\d\d\d?/,cr=/\d\d\d\d\d\d?/,Je=/\d{1,3}/,Ot=/\d{1,4}/,Qe=/[+-]?\d{1,6}/,_e=/\d+/,Xe=/[+-]?\d+/,Ga=/Z|[+-]\d\d:?\d\d/gi,Ke=/Z|[+-]\d\d(?::?\d\d)?/gi,Va=/[+-]?\d+(\.\d{1,3})?/,Ne=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,we=/^[1-9]\d?/,Tt=/^([1-9]\d|\d)/,He;He={};function c(e,t,r){He[e]=q(t)?t:function(a,i){return a&&r?r:t}}function za(e,t){return v(He,e)?He[e](t._strict,t._locale):new RegExp(qa(e))}function qa(e){return K(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,r,a,i,n){return r||a||i||n}))}function K(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function N(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function _(e){var t=+e,r=0;return t!==0&&isFinite(t)&&(r=N(t)),r}var xt={};function b(e,t){var r,a=t,i;for(typeof e=="string"&&(e=[e]),te(t)&&(a=function(n,s){s[t]=_(n)}),i=e.length,r=0;r<i;r++)xt[e[r]]=a}function Ce(e,t){b(e,function(r,a,i,n){i._w=i._w||{},t(r,i._w,i,n)})}function Za(e,t,r){t!=null&&v(xt,e)&&xt[e](t,r._a,r,e)}function et(e){return e%4===0&&e%100!==0||e%400===0}var W=0,Q=1,G=2,O=3,A=4,X=5,de=6,Ba=7,Ja=8;m("Y",0,0,function(){var e=this.year();return e<=9999?V(e,4):"+"+e});m(0,["YY",2],0,function(){return this.year()%100});m(0,["YYYY",4],0,"year");m(0,["YYYYY",5],0,"year");m(0,["YYYYYY",6,!0],0,"year");c("Y",Xe);c("YY",D,P);c("YYYY",Ot,Yt);c("YYYYY",Qe,Be);c("YYYYYY",Qe,Be);b(["YYYYY","YYYYYY"],W);b("YYYY",function(e,t){t[W]=e.length===2?d.parseTwoDigitYear(e):_(e)});b("YY",function(e,t){t[W]=d.parseTwoDigitYear(e)});b("Y",function(e,t){t[W]=parseInt(e,10)});function Ye(e){return et(e)?366:365}d.parseTwoDigitYear=function(e){return _(e)+(_(e)>68?1900:2e3)};var hr=ve("FullYear",!0);function Qa(){return et(this.year())}function ve(e,t){return function(r){return r!=null?(fr(this,e,r),d.updateOffset(this,t),this):Oe(this,e)}}function Oe(e,t){if(!e.isValid())return NaN;var r=e._d,a=e._isUTC;switch(t){case"Milliseconds":return a?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return a?r.getUTCSeconds():r.getSeconds();case"Minutes":return a?r.getUTCMinutes():r.getMinutes();case"Hours":return a?r.getUTCHours():r.getHours();case"Date":return a?r.getUTCDate():r.getDate();case"Day":return a?r.getUTCDay():r.getDay();case"Month":return a?r.getUTCMonth():r.getMonth();case"FullYear":return a?r.getUTCFullYear():r.getFullYear();default:return NaN}}function fr(e,t,r){var a,i,n,s,u;if(!(!e.isValid()||isNaN(r))){switch(a=e._d,i=e._isUTC,t){case"Milliseconds":return void(i?a.setUTCMilliseconds(r):a.setMilliseconds(r));case"Seconds":return void(i?a.setUTCSeconds(r):a.setSeconds(r));case"Minutes":return void(i?a.setUTCMinutes(r):a.setMinutes(r));case"Hours":return void(i?a.setUTCHours(r):a.setHours(r));case"Date":return void(i?a.setUTCDate(r):a.setDate(r));case"FullYear":break;default:return}n=r,s=e.month(),u=e.date(),u=u===29&&s===1&&!et(n)?28:u,i?a.setUTCFullYear(n,s,u):a.setFullYear(n,s,u)}}function Xa(e){return e=F(e),q(this[e])?this[e]():this}function Ka(e,t){if(typeof e=="object"){e=Mt(e);var r=Ha(e),a,i=r.length;for(a=0;a<i;a++)this[r[a].unit](e[r[a].unit])}else if(e=F(e),q(this[e]))return this[e](t);return this}function ei(e,t){return(e%t+t)%t}var Y;Array.prototype.indexOf?Y=Array.prototype.indexOf:Y=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function Wt(e,t){if(isNaN(e)||isNaN(t))return NaN;var r=ei(t,12);return e+=(t-r)/12,r===1?et(e)?29:28:31-r%7%2}m("M",["MM",2],"Mo",function(){return this.month()+1});m("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});m("MMMM",0,0,function(e){return this.localeData().months(this,e)});c("M",D,we);c("MM",D,P);c("MMM",function(e,t){return t.monthsShortRegex(e)});c("MMMM",function(e,t){return t.monthsRegex(e)});b(["M","MM"],function(e,t){t[Q]=_(e)-1});b(["MMM","MMMM"],function(e,t,r,a){var i=r._locale.monthsParse(e,a,r._strict);i!=null?t[Q]=i:x(r).invalidMonth=e});var ti="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),mr="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),pr=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,ri=Ne,ai=Ne;function ii(e,t){return e?I(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||pr).test(t)?"format":"standalone"][e.month()]:I(this._months)?this._months:this._months.standalone}function ni(e,t){return e?I(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[pr.test(t)?"format":"standalone"][e.month()]:I(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function si(e,t,r){var a,i,n,s=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],a=0;a<12;++a)n=z([2e3,a]),this._shortMonthsParse[a]=this.monthsShort(n,"").toLocaleLowerCase(),this._longMonthsParse[a]=this.months(n,"").toLocaleLowerCase();return r?t==="MMM"?(i=Y.call(this._shortMonthsParse,s),i!==-1?i:null):(i=Y.call(this._longMonthsParse,s),i!==-1?i:null):t==="MMM"?(i=Y.call(this._shortMonthsParse,s),i!==-1?i:(i=Y.call(this._longMonthsParse,s),i!==-1?i:null)):(i=Y.call(this._longMonthsParse,s),i!==-1?i:(i=Y.call(this._shortMonthsParse,s),i!==-1?i:null))}function oi(e,t,r){var a,i,n;if(this._monthsParseExact)return si.call(this,e,t,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),a=0;a<12;a++){if(i=z([2e3,a]),r&&!this._longMonthsParse[a]&&(this._longMonthsParse[a]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[a]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),!r&&!this._monthsParse[a]&&(n="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[a]=new RegExp(n.replace(".",""),"i")),r&&t==="MMMM"&&this._longMonthsParse[a].test(e))return a;if(r&&t==="MMM"&&this._shortMonthsParse[a].test(e))return a;if(!r&&this._monthsParse[a].test(e))return a}}function yr(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=_(t);else if(t=e.localeData().monthsParse(t),!te(t))return e}var r=t,a=e.date();return a=a<29?a:Math.min(a,Wt(e.year(),r)),e._isUTC?e._d.setUTCMonth(r,a):e._d.setMonth(r,a),e}function xr(e){return e!=null?(yr(this,e),d.updateOffset(this,!0),this):Oe(this,"Month")}function li(){return Wt(this.year(),this.month())}function di(e){return this._monthsParseExact?(v(this,"_monthsRegex")||gr.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(v(this,"_monthsShortRegex")||(this._monthsShortRegex=ri),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function ui(e){return this._monthsParseExact?(v(this,"_monthsRegex")||gr.call(this),e?this._monthsStrictRegex:this._monthsRegex):(v(this,"_monthsRegex")||(this._monthsRegex=ai),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function gr(){function e(p,g){return g.length-p.length}var t=[],r=[],a=[],i,n,s,u;for(i=0;i<12;i++)n=z([2e3,i]),s=K(this.monthsShort(n,"")),u=K(this.months(n,"")),t.push(s),r.push(u),a.push(u),a.push(s);t.sort(e),r.sort(e),a.sort(e),this._monthsRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function ci(e,t,r,a,i,n,s){var u;return e<100&&e>=0?(u=new Date(e+400,t,r,a,i,n,s),isFinite(u.getFullYear())&&u.setFullYear(e)):u=new Date(e,t,r,a,i,n,s),u}function Te(e){var t,r;return e<100&&e>=0?(r=Array.prototype.slice.call(arguments),r[0]=e+400,t=new Date(Date.UTC.apply(null,r)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Ge(e,t,r){var a=7+t-r,i=(7+Te(e,0,a).getUTCDay()-t)%7;return-i+a-1}function _r(e,t,r,a,i){var n=(7+r-a)%7,s=Ge(e,a,i),u=1+7*(t-1)+n+s,p,g;return u<=0?(p=e-1,g=Ye(p)+u):u>Ye(e)?(p=e+1,g=u-Ye(e)):(p=e,g=u),{year:p,dayOfYear:g}}function We(e,t,r){var a=Ge(e.year(),t,r),i=Math.floor((e.dayOfYear()-a-1)/7)+1,n,s;return i<1?(s=e.year()-1,n=i+ee(s,t,r)):i>ee(e.year(),t,r)?(n=i-ee(e.year(),t,r),s=e.year()+1):(s=e.year(),n=i),{week:n,year:s}}function ee(e,t,r){var a=Ge(e,t,r),i=Ge(e+1,t,r);return(Ye(e)-a+i)/7}m("w",["ww",2],"wo","week");m("W",["WW",2],"Wo","isoWeek");c("w",D,we);c("ww",D,P);c("W",D,we);c("WW",D,P);Ce(["w","ww","W","WW"],function(e,t,r,a){t[a.substr(0,1)]=_(e)});function hi(e){return We(e,this._week.dow,this._week.doy).week}var fi={dow:0,doy:6};function mi(){return this._week.dow}function pi(){return this._week.doy}function yi(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function xi(e){var t=We(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}m("d",0,"do","day");m("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});m("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});m("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});m("e",0,0,"weekday");m("E",0,0,"isoWeekday");c("d",D);c("e",D);c("E",D);c("dd",function(e,t){return t.weekdaysMinRegex(e)});c("ddd",function(e,t){return t.weekdaysShortRegex(e)});c("dddd",function(e,t){return t.weekdaysRegex(e)});Ce(["dd","ddd","dddd"],function(e,t,r,a){var i=r._locale.weekdaysParse(e,a,r._strict);i!=null?t.d=i:x(r).invalidWeekday=e});Ce(["d","e","E"],function(e,t,r,a){t[a]=_(e)});function gi(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function _i(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Rt(e,t){return e.slice(t,7).concat(e.slice(0,t))}var wi="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),wr="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),vi="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ki=Ne,bi=Ne,Si=Ne;function Di(e,t){var r=I(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?Rt(r,this._week.dow):e?r[e.day()]:r}function Mi(e){return e===!0?Rt(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Yi(e){return e===!0?Rt(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Oi(e,t,r){var a,i,n,s=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],a=0;a<7;++a)n=z([2e3,1]).day(a),this._minWeekdaysParse[a]=this.weekdaysMin(n,"").toLocaleLowerCase(),this._shortWeekdaysParse[a]=this.weekdaysShort(n,"").toLocaleLowerCase(),this._weekdaysParse[a]=this.weekdays(n,"").toLocaleLowerCase();return r?t==="dddd"?(i=Y.call(this._weekdaysParse,s),i!==-1?i:null):t==="ddd"?(i=Y.call(this._shortWeekdaysParse,s),i!==-1?i:null):(i=Y.call(this._minWeekdaysParse,s),i!==-1?i:null):t==="dddd"?(i=Y.call(this._weekdaysParse,s),i!==-1||(i=Y.call(this._shortWeekdaysParse,s),i!==-1)?i:(i=Y.call(this._minWeekdaysParse,s),i!==-1?i:null)):t==="ddd"?(i=Y.call(this._shortWeekdaysParse,s),i!==-1||(i=Y.call(this._weekdaysParse,s),i!==-1)?i:(i=Y.call(this._minWeekdaysParse,s),i!==-1?i:null)):(i=Y.call(this._minWeekdaysParse,s),i!==-1||(i=Y.call(this._weekdaysParse,s),i!==-1)?i:(i=Y.call(this._shortWeekdaysParse,s),i!==-1?i:null))}function Ti(e,t,r){var a,i,n;if(this._weekdaysParseExact)return Oi.call(this,e,t,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),a=0;a<7;a++){if(i=z([2e3,1]).day(a),r&&!this._fullWeekdaysParse[a]&&(this._fullWeekdaysParse[a]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[a]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[a]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[a]||(n="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[a]=new RegExp(n.replace(".",""),"i")),r&&t==="dddd"&&this._fullWeekdaysParse[a].test(e))return a;if(r&&t==="ddd"&&this._shortWeekdaysParse[a].test(e))return a;if(r&&t==="dd"&&this._minWeekdaysParse[a].test(e))return a;if(!r&&this._weekdaysParse[a].test(e))return a}}function Wi(e){if(!this.isValid())return e!=null?this:NaN;var t=Oe(this,"Day");return e!=null?(e=gi(e,this.localeData()),this.add(e-t,"d")):t}function Ri(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function ji(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=_i(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function Pi(e){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||jt.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(v(this,"_weekdaysRegex")||(this._weekdaysRegex=ki),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Ni(e){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||jt.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(v(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=bi),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Ci(e){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||jt.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(v(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Si),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function jt(){function e(T,U){return U.length-T.length}var t=[],r=[],a=[],i=[],n,s,u,p,g;for(n=0;n<7;n++)s=z([2e3,1]).day(n),u=K(this.weekdaysMin(s,"")),p=K(this.weekdaysShort(s,"")),g=K(this.weekdays(s,"")),t.push(u),r.push(p),a.push(g),i.push(u),i.push(p),i.push(g);t.sort(e),r.sort(e),a.sort(e),i.sort(e),this._weekdaysRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function Pt(){return this.hours()%12||12}function Fi(){return this.hours()||24}m("H",["HH",2],0,"hour");m("h",["hh",2],0,Pt);m("k",["kk",2],0,Fi);m("hmm",0,0,function(){return""+Pt.apply(this)+V(this.minutes(),2)});m("hmmss",0,0,function(){return""+Pt.apply(this)+V(this.minutes(),2)+V(this.seconds(),2)});m("Hmm",0,0,function(){return""+this.hours()+V(this.minutes(),2)});m("Hmmss",0,0,function(){return""+this.hours()+V(this.minutes(),2)+V(this.seconds(),2)});function vr(e,t){m(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}vr("a",!0);vr("A",!1);function kr(e,t){return t._meridiemParse}c("a",kr);c("A",kr);c("H",D,Tt);c("h",D,we);c("k",D,we);c("HH",D,P);c("hh",D,P);c("kk",D,P);c("hmm",ur);c("hmmss",cr);c("Hmm",ur);c("Hmmss",cr);b(["H","HH"],O);b(["k","kk"],function(e,t,r){var a=_(e);t[O]=a===24?0:a});b(["a","A"],function(e,t,r){r._isPm=r._locale.isPM(e),r._meridiem=e});b(["h","hh"],function(e,t,r){t[O]=_(e),x(r).bigHour=!0});b("hmm",function(e,t,r){var a=e.length-2;t[O]=_(e.substr(0,a)),t[A]=_(e.substr(a)),x(r).bigHour=!0});b("hmmss",function(e,t,r){var a=e.length-4,i=e.length-2;t[O]=_(e.substr(0,a)),t[A]=_(e.substr(a,2)),t[X]=_(e.substr(i)),x(r).bigHour=!0});b("Hmm",function(e,t,r){var a=e.length-2;t[O]=_(e.substr(0,a)),t[A]=_(e.substr(a))});b("Hmmss",function(e,t,r){var a=e.length-4,i=e.length-2;t[O]=_(e.substr(0,a)),t[A]=_(e.substr(a,2)),t[X]=_(e.substr(i))});function Ui(e){return(e+"").toLowerCase().charAt(0)==="p"}var Li=/[ap]\.?m?\.?/i,Ai=ve("Hours",!0);function Ii(e,t,r){return e>11?r?"pm":"PM":r?"am":"AM"}var br={calendar:Oa,longDateFormat:ja,invalidDate:Na,ordinal:Fa,dayOfMonthOrdinalParse:Ua,relativeTime:Aa,months:ti,monthsShort:mr,week:fi,weekdays:wi,weekdaysMin:vi,weekdaysShort:wr,meridiemParse:Li},M={},Se={},Re;function $i(e,t){var r,a=Math.min(e.length,t.length);for(r=0;r<a;r+=1)if(e[r]!==t[r])return r;return a}function Jt(e){return e&&e.toLowerCase().replace("_","-")}function Ei(e){for(var t=0,r,a,i,n;t<e.length;){for(n=Jt(e[t]).split("-"),r=n.length,a=Jt(e[t+1]),a=a?a.split("-"):null;r>0;){if(i=tt(n.slice(0,r).join("-")),i)return i;if(a&&a.length>=r&&$i(n,a)>=r-1)break;r--}t++}return Re}function Hi(e){return!!(e&&e.match("^[^/\\\\]*$"))}function tt(e){var t=null,r;if(M[e]===void 0&&typeof module<"u"&&module&&module.exports&&Hi(e))try{t=Re._abbr,r=require,r("./locale/"+e),oe(t)}catch{M[e]=null}return M[e]}function oe(e,t){var r;return e&&(j(t)?r=re(e):r=Nt(e,t),r?Re=r:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Re._abbr}function Nt(e,t){if(t!==null){var r,a=br;if(t.abbr=e,M[e]!=null)sr("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),a=M[e]._config;else if(t.parentLocale!=null)if(M[t.parentLocale]!=null)a=M[t.parentLocale]._config;else if(r=tt(t.parentLocale),r!=null)a=r._config;else return Se[t.parentLocale]||(Se[t.parentLocale]=[]),Se[t.parentLocale].push({name:e,config:t}),null;return M[e]=new St(pt(a,t)),Se[e]&&Se[e].forEach(function(i){Nt(i.name,i.config)}),oe(e),M[e]}else return delete M[e],null}function Gi(e,t){if(t!=null){var r,a,i=br;M[e]!=null&&M[e].parentLocale!=null?M[e].set(pt(M[e]._config,t)):(a=tt(e),a!=null&&(i=a._config),t=pt(i,t),a==null&&(t.abbr=e),r=new St(t),r.parentLocale=M[e],M[e]=r),oe(e)}else M[e]!=null&&(M[e].parentLocale!=null?(M[e]=M[e].parentLocale,e===oe()&&oe(e)):M[e]!=null&&delete M[e]);return M[e]}function re(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Re;if(!I(e)){if(t=tt(e),t)return t;e=[e]}return Ei(e)}function Vi(){return yt(M)}function Ct(e){var t,r=e._a;return r&&x(e).overflow===-2&&(t=r[Q]<0||r[Q]>11?Q:r[G]<1||r[G]>Wt(r[W],r[Q])?G:r[O]<0||r[O]>24||r[O]===24&&(r[A]!==0||r[X]!==0||r[de]!==0)?O:r[A]<0||r[A]>59?A:r[X]<0||r[X]>59?X:r[de]<0||r[de]>999?de:-1,x(e)._overflowDayOfYear&&(t<W||t>G)&&(t=G),x(e)._overflowWeeks&&t===-1&&(t=Ba),x(e)._overflowWeekday&&t===-1&&(t=Ja),x(e).overflow=t),e}var zi=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,qi=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Zi=/Z|[+-]\d\d(?::?\d\d)?/,Le=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],ct=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Bi=/^\/?Date\((-?\d+)/i,Ji=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Qi={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Sr(e){var t,r,a=e._i,i=zi.exec(a)||qi.exec(a),n,s,u,p,g=Le.length,T=ct.length;if(i){for(x(e).iso=!0,t=0,r=g;t<r;t++)if(Le[t][1].exec(i[1])){s=Le[t][0],n=Le[t][2]!==!1;break}if(s==null){e._isValid=!1;return}if(i[3]){for(t=0,r=T;t<r;t++)if(ct[t][1].exec(i[3])){u=(i[2]||" ")+ct[t][0];break}if(u==null){e._isValid=!1;return}}if(!n&&u!=null){e._isValid=!1;return}if(i[4])if(Zi.exec(i[4]))p="Z";else{e._isValid=!1;return}e._f=s+(u||"")+(p||""),Ut(e)}else e._isValid=!1}function Xi(e,t,r,a,i,n){var s=[Ki(e),mr.indexOf(t),parseInt(r,10),parseInt(a,10),parseInt(i,10)];return n&&s.push(parseInt(n,10)),s}function Ki(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function en(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function tn(e,t,r){if(e){var a=wr.indexOf(e),i=new Date(t[0],t[1],t[2]).getDay();if(a!==i)return x(r).weekdayMismatch=!0,r._isValid=!1,!1}return!0}function rn(e,t,r){if(e)return Qi[e];if(t)return 0;var a=parseInt(r,10),i=a%100,n=(a-i)/100;return n*60+i}function Dr(e){var t=Ji.exec(en(e._i)),r;if(t){if(r=Xi(t[4],t[3],t[2],t[5],t[6],t[7]),!tn(t[1],r,e))return;e._a=r,e._tzm=rn(t[8],t[9],t[10]),e._d=Te.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),x(e).rfc2822=!0}else e._isValid=!1}function an(e){var t=Bi.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(Sr(e),e._isValid===!1)delete e._isValid;else return;if(Dr(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:d.createFromInputFallback(e)}d.createFromInputFallback=C("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function me(e,t,r){return e??t??r}function nn(e){var t=new Date(d.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Ft(e){var t,r,a=[],i,n,s;if(!e._d){for(i=nn(e),e._w&&e._a[G]==null&&e._a[Q]==null&&sn(e),e._dayOfYear!=null&&(s=me(e._a[W],i[W]),(e._dayOfYear>Ye(s)||e._dayOfYear===0)&&(x(e)._overflowDayOfYear=!0),r=Te(s,0,e._dayOfYear),e._a[Q]=r.getUTCMonth(),e._a[G]=r.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=a[t]=i[t];for(;t<7;t++)e._a[t]=a[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[O]===24&&e._a[A]===0&&e._a[X]===0&&e._a[de]===0&&(e._nextDay=!0,e._a[O]=0),e._d=(e._useUTC?Te:ci).apply(null,a),n=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[O]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==n&&(x(e).weekdayMismatch=!0)}}function sn(e){var t,r,a,i,n,s,u,p,g;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(n=1,s=4,r=me(t.GG,e._a[W],We(S(),1,4).year),a=me(t.W,1),i=me(t.E,1),(i<1||i>7)&&(p=!0)):(n=e._locale._week.dow,s=e._locale._week.doy,g=We(S(),n,s),r=me(t.gg,e._a[W],g.year),a=me(t.w,g.week),t.d!=null?(i=t.d,(i<0||i>6)&&(p=!0)):t.e!=null?(i=t.e+n,(t.e<0||t.e>6)&&(p=!0)):i=n),a<1||a>ee(r,n,s)?x(e)._overflowWeeks=!0:p!=null?x(e)._overflowWeekday=!0:(u=_r(r,a,i,n,s),e._a[W]=u.year,e._dayOfYear=u.dayOfYear)}d.ISO_8601=function(){};d.RFC_2822=function(){};function Ut(e){if(e._f===d.ISO_8601){Sr(e);return}if(e._f===d.RFC_2822){Dr(e);return}e._a=[],x(e).empty=!0;var t=""+e._i,r,a,i,n,s,u=t.length,p=0,g,T;for(i=or(e._f,e._locale).match(Dt)||[],T=i.length,r=0;r<T;r++)n=i[r],a=(t.match(za(n,e))||[])[0],a&&(s=t.substr(0,t.indexOf(a)),s.length>0&&x(e).unusedInput.push(s),t=t.slice(t.indexOf(a)+a.length),p+=a.length),ye[n]?(a?x(e).empty=!1:x(e).unusedTokens.push(n),Za(n,a,e)):e._strict&&!a&&x(e).unusedTokens.push(n);x(e).charsLeftOver=u-p,t.length>0&&x(e).unusedInput.push(t),e._a[O]<=12&&x(e).bigHour===!0&&e._a[O]>0&&(x(e).bigHour=void 0),x(e).parsedDateParts=e._a.slice(0),x(e).meridiem=e._meridiem,e._a[O]=on(e._locale,e._a[O],e._meridiem),g=x(e).era,g!==null&&(e._a[W]=e._locale.erasConvertYear(g,e._a[W])),Ft(e),Ct(e)}function on(e,t,r){var a;return r==null?t:e.meridiemHour!=null?e.meridiemHour(t,r):(e.isPM!=null&&(a=e.isPM(r),a&&t<12&&(t+=12),!a&&t===12&&(t=0)),t)}function ln(e){var t,r,a,i,n,s,u=!1,p=e._f.length;if(p===0){x(e).invalidFormat=!0,e._d=new Date(NaN);return}for(i=0;i<p;i++)n=0,s=!1,t=bt({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[i],Ut(t),kt(t)&&(s=!0),n+=x(t).charsLeftOver,n+=x(t).unusedTokens.length*10,x(t).score=n,u?n<a&&(a=n,r=t):(a==null||n<a||s)&&(a=n,r=t,s&&(u=!0));ie(e,r||t)}function dn(e){if(!e._d){var t=Mt(e._i),r=t.day===void 0?t.date:t.day;e._a=ir([t.year,t.month,r,t.hour,t.minute,t.second,t.millisecond],function(a){return a&&parseInt(a,10)}),Ft(e)}}function un(e){var t=new Pe(Ct(Mr(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Mr(e){var t=e._i,r=e._f;return e._locale=e._locale||re(e._l),t===null||r===void 0&&t===""?Ze({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),$(t)?new Pe(Ct(t)):(je(t)?e._d=t:I(r)?ln(e):r?Ut(e):cn(e),kt(e)||(e._d=null),e))}function cn(e){var t=e._i;j(t)?e._d=new Date(d.now()):je(t)?e._d=new Date(t.valueOf()):typeof t=="string"?an(e):I(t)?(e._a=ir(t.slice(0),function(r){return parseInt(r,10)}),Ft(e)):ue(t)?dn(e):te(t)?e._d=new Date(t):d.createFromInputFallback(e)}function Yr(e,t,r,a,i){var n={};return(t===!0||t===!1)&&(a=t,t=void 0),(r===!0||r===!1)&&(a=r,r=void 0),(ue(e)&&vt(e)||I(e)&&e.length===0)&&(e=void 0),n._isAMomentObject=!0,n._useUTC=n._isUTC=i,n._l=r,n._i=e,n._f=t,n._strict=a,un(n)}function S(e,t,r,a){return Yr(e,t,r,a,!1)}var hn=C("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=S.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Ze()}),fn=C("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=S.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Ze()});function Or(e,t){var r,a;if(t.length===1&&I(t[0])&&(t=t[0]),!t.length)return S();for(r=t[0],a=1;a<t.length;++a)(!t[a].isValid()||t[a][e](r))&&(r=t[a]);return r}function mn(){var e=[].slice.call(arguments,0);return Or("isBefore",e)}function pn(){var e=[].slice.call(arguments,0);return Or("isAfter",e)}var yn=function(){return Date.now?Date.now():+new Date},De=["year","quarter","month","week","day","hour","minute","second","millisecond"];function xn(e){var t,r=!1,a,i=De.length;for(t in e)if(v(e,t)&&!(Y.call(De,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(a=0;a<i;++a)if(e[De[a]]){if(r)return!1;parseFloat(e[De[a]])!==_(e[De[a]])&&(r=!0)}return!0}function gn(){return this._isValid}function _n(){return E(NaN)}function rt(e){var t=Mt(e),r=t.year||0,a=t.quarter||0,i=t.month||0,n=t.week||t.isoWeek||0,s=t.day||0,u=t.hour||0,p=t.minute||0,g=t.second||0,T=t.millisecond||0;this._isValid=xn(t),this._milliseconds=+T+g*1e3+p*6e4+u*1e3*60*60,this._days=+s+n*7,this._months=+i+a*3+r*12,this._data={},this._locale=re(),this._bubble()}function $e(e){return e instanceof rt}function gt(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function wn(e,t,r){var a=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),n=0,s;for(s=0;s<a;s++)(r&&e[s]!==t[s]||!r&&_(e[s])!==_(t[s]))&&n++;return n+i}function Tr(e,t){m(e,0,0,function(){var r=this.utcOffset(),a="+";return r<0&&(r=-r,a="-"),a+V(~~(r/60),2)+t+V(~~r%60,2)})}Tr("Z",":");Tr("ZZ","");c("Z",Ke);c("ZZ",Ke);b(["Z","ZZ"],function(e,t,r){r._useUTC=!0,r._tzm=Lt(Ke,e)});var vn=/([\+\-]|\d\d)/gi;function Lt(e,t){var r=(t||"").match(e),a,i,n;return r===null?null:(a=r[r.length-1]||[],i=(a+"").match(vn)||["-",0,0],n=+(i[1]*60)+_(i[2]),n===0?0:i[0]==="+"?n:-n)}function At(e,t){var r,a;return t._isUTC?(r=t.clone(),a=($(e)||je(e)?e.valueOf():S(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+a),d.updateOffset(r,!1),r):S(e).local()}function _t(e){return-Math.round(e._d.getTimezoneOffset())}d.updateOffset=function(){};function kn(e,t,r){var a=this._offset||0,i;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Lt(Ke,e),e===null)return this}else Math.abs(e)<16&&!r&&(e=e*60);return!this._isUTC&&t&&(i=_t(this)),this._offset=e,this._isUTC=!0,i!=null&&this.add(i,"m"),a!==e&&(!t||this._changeInProgress?jr(this,E(e-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,d.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?a:_t(this)}function bn(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function Sn(e){return this.utcOffset(0,e)}function Dn(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(_t(this),"m")),this}function Mn(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Lt(Ga,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Yn(e){return this.isValid()?(e=e?S(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function On(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Tn(){if(!j(this._isDSTShifted))return this._isDSTShifted;var e={},t;return bt(e,this),e=Mr(e),e._a?(t=e._isUTC?z(e._a):S(e._a),this._isDSTShifted=this.isValid()&&wn(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Wn(){return this.isValid()?!this._isUTC:!1}function Rn(){return this.isValid()?this._isUTC:!1}function Wr(){return this.isValid()?this._isUTC&&this._offset===0:!1}var jn=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Pn=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function E(e,t){var r=e,a=null,i,n,s;return $e(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:te(e)||!isNaN(+e)?(r={},t?r[t]=+e:r.milliseconds=+e):(a=jn.exec(e))?(i=a[1]==="-"?-1:1,r={y:0,d:_(a[G])*i,h:_(a[O])*i,m:_(a[A])*i,s:_(a[X])*i,ms:_(gt(a[de]*1e3))*i}):(a=Pn.exec(e))?(i=a[1]==="-"?-1:1,r={y:le(a[2],i),M:le(a[3],i),w:le(a[4],i),d:le(a[5],i),h:le(a[6],i),m:le(a[7],i),s:le(a[8],i)}):r==null?r={}:typeof r=="object"&&("from"in r||"to"in r)&&(s=Nn(S(r.from),S(r.to)),r={},r.ms=s.milliseconds,r.M=s.months),n=new rt(r),$e(e)&&v(e,"_locale")&&(n._locale=e._locale),$e(e)&&v(e,"_isValid")&&(n._isValid=e._isValid),n}E.fn=rt.prototype;E.invalid=_n;function le(e,t){var r=e&&parseFloat(e.replace(",","."));return(isNaN(r)?0:r)*t}function Qt(e,t){var r={};return r.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(r.months,"M").isAfter(t)&&--r.months,r.milliseconds=+t-+e.clone().add(r.months,"M"),r}function Nn(e,t){var r;return e.isValid()&&t.isValid()?(t=At(t,e),e.isBefore(t)?r=Qt(e,t):(r=Qt(t,e),r.milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function Rr(e,t){return function(r,a){var i,n;return a!==null&&!isNaN(+a)&&(sr(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=r,r=a,a=n),i=E(r,a),jr(this,i,e),this}}function jr(e,t,r,a){var i=t._milliseconds,n=gt(t._days),s=gt(t._months);e.isValid()&&(a=a??!0,s&&yr(e,Oe(e,"Month")+s*r),n&&fr(e,"Date",Oe(e,"Date")+n*r),i&&e._d.setTime(e._d.valueOf()+i*r),a&&d.updateOffset(e,n||s))}var Cn=Rr(1,"add"),Fn=Rr(-1,"subtract");function Pr(e){return typeof e=="string"||e instanceof String}function Un(e){return $(e)||je(e)||Pr(e)||te(e)||An(e)||Ln(e)||e===null||e===void 0}function Ln(e){var t=ue(e)&&!vt(e),r=!1,a=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],i,n,s=a.length;for(i=0;i<s;i+=1)n=a[i],r=r||v(e,n);return t&&r}function An(e){var t=I(e),r=!1;return t&&(r=e.filter(function(a){return!te(a)&&Pr(e)}).length===0),t&&r}function In(e){var t=ue(e)&&!vt(e),r=!1,a=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i,n;for(i=0;i<a.length;i+=1)n=a[i],r=r||v(e,n);return t&&r}function $n(e,t){var r=e.diff(t,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function En(e,t){arguments.length===1&&(arguments[0]?Un(arguments[0])?(e=arguments[0],t=void 0):In(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var r=e||S(),a=At(r,this).startOf("day"),i=d.calendarFormat(this,a)||"sameElse",n=t&&(q(t[i])?t[i].call(this,r):t[i]);return this.format(n||this.localeData().calendar(i,this,S(r)))}function Hn(){return new Pe(this)}function Gn(e,t){var r=$(e)?e:S(e);return this.isValid()&&r.isValid()?(t=F(t)||"millisecond",t==="millisecond"?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(t).valueOf()):!1}function Vn(e,t){var r=$(e)?e:S(e);return this.isValid()&&r.isValid()?(t=F(t)||"millisecond",t==="millisecond"?this.valueOf()<r.valueOf():this.clone().endOf(t).valueOf()<r.valueOf()):!1}function zn(e,t,r,a){var i=$(e)?e:S(e),n=$(t)?t:S(t);return this.isValid()&&i.isValid()&&n.isValid()?(a=a||"()",(a[0]==="("?this.isAfter(i,r):!this.isBefore(i,r))&&(a[1]===")"?this.isBefore(n,r):!this.isAfter(n,r))):!1}function qn(e,t){var r=$(e)?e:S(e),a;return this.isValid()&&r.isValid()?(t=F(t)||"millisecond",t==="millisecond"?this.valueOf()===r.valueOf():(a=r.valueOf(),this.clone().startOf(t).valueOf()<=a&&a<=this.clone().endOf(t).valueOf())):!1}function Zn(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function Bn(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function Jn(e,t,r){var a,i,n;if(!this.isValid())return NaN;if(a=At(e,this),!a.isValid())return NaN;switch(i=(a.utcOffset()-this.utcOffset())*6e4,t=F(t),t){case"year":n=Ee(this,a)/12;break;case"month":n=Ee(this,a);break;case"quarter":n=Ee(this,a)/3;break;case"second":n=(this-a)/1e3;break;case"minute":n=(this-a)/6e4;break;case"hour":n=(this-a)/36e5;break;case"day":n=(this-a-i)/864e5;break;case"week":n=(this-a-i)/6048e5;break;default:n=this-a}return r?n:N(n)}function Ee(e,t){if(e.date()<t.date())return-Ee(t,e);var r=(t.year()-e.year())*12+(t.month()-e.month()),a=e.clone().add(r,"months"),i,n;return t-a<0?(i=e.clone().add(r-1,"months"),n=(t-a)/(a-i)):(i=e.clone().add(r+1,"months"),n=(t-a)/(i-a)),-(r+n)||0}d.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";d.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Qn(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Xn(e){if(!this.isValid())return null;var t=e!==!0,r=t?this.clone().utc():this;return r.year()<0||r.year()>9999?Ie(r,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):q(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Ie(r,"Z")):Ie(r,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Kn(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",r,a,i,n;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),r="["+e+'("]',a=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",n=t+'[")]',this.format(r+a+i+n)}function es(e){e||(e=this.isUtc()?d.defaultFormatUtc:d.defaultFormat);var t=Ie(this,e);return this.localeData().postformat(t)}function ts(e,t){return this.isValid()&&($(e)&&e.isValid()||S(e).isValid())?E({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function rs(e){return this.from(S(),e)}function as(e,t){return this.isValid()&&($(e)&&e.isValid()||S(e).isValid())?E({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function is(e){return this.to(S(),e)}function Nr(e){var t;return e===void 0?this._locale._abbr:(t=re(e),t!=null&&(this._locale=t),this)}var Cr=C("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Fr(){return this._locale}var Ve=1e3,xe=60*Ve,ze=60*xe,Ur=(365*400+97)*24*ze;function ge(e,t){return(e%t+t)%t}function Lr(e,t,r){return e<100&&e>=0?new Date(e+400,t,r)-Ur:new Date(e,t,r).valueOf()}function Ar(e,t,r){return e<100&&e>=0?Date.UTC(e+400,t,r)-Ur:Date.UTC(e,t,r)}function ns(e){var t,r;if(e=F(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?Ar:Lr,e){case"year":t=r(this.year(),0,1);break;case"quarter":t=r(this.year(),this.month()-this.month()%3,1);break;case"month":t=r(this.year(),this.month(),1);break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=r(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=ge(t+(this._isUTC?0:this.utcOffset()*xe),ze);break;case"minute":t=this._d.valueOf(),t-=ge(t,xe);break;case"second":t=this._d.valueOf(),t-=ge(t,Ve);break}return this._d.setTime(t),d.updateOffset(this,!0),this}function ss(e){var t,r;if(e=F(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?Ar:Lr,e){case"year":t=r(this.year()+1,0,1)-1;break;case"quarter":t=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=r(this.year(),this.month()+1,1)-1;break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=ze-ge(t+(this._isUTC?0:this.utcOffset()*xe),ze)-1;break;case"minute":t=this._d.valueOf(),t+=xe-ge(t,xe)-1;break;case"second":t=this._d.valueOf(),t+=Ve-ge(t,Ve)-1;break}return this._d.setTime(t),d.updateOffset(this,!0),this}function os(){return this._d.valueOf()-(this._offset||0)*6e4}function ls(){return Math.floor(this.valueOf()/1e3)}function ds(){return new Date(this.valueOf())}function us(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function cs(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function hs(){return this.isValid()?this.toISOString():null}function fs(){return kt(this)}function ms(){return ie({},x(this))}function ps(){return x(this).overflow}function ys(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}m("N",0,0,"eraAbbr");m("NN",0,0,"eraAbbr");m("NNN",0,0,"eraAbbr");m("NNNN",0,0,"eraName");m("NNNNN",0,0,"eraNarrow");m("y",["y",1],"yo","eraYear");m("y",["yy",2],0,"eraYear");m("y",["yyy",3],0,"eraYear");m("y",["yyyy",4],0,"eraYear");c("N",It);c("NN",It);c("NNN",It);c("NNNN",Ys);c("NNNNN",Os);b(["N","NN","NNN","NNNN","NNNNN"],function(e,t,r,a){var i=r._locale.erasParse(e,a,r._strict);i?x(r).era=i:x(r).invalidEra=e});c("y",_e);c("yy",_e);c("yyy",_e);c("yyyy",_e);c("yo",Ts);b(["y","yy","yyy","yyyy"],W);b(["yo"],function(e,t,r,a){var i;r._locale._eraYearOrdinalRegex&&(i=e.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?t[W]=r._locale.eraYearOrdinalParse(e,i):t[W]=parseInt(e,10)});function xs(e,t){var r,a,i,n=this._eras||re("en")._eras;for(r=0,a=n.length;r<a;++r){switch(typeof n[r].since){case"string":i=d(n[r].since).startOf("day"),n[r].since=i.valueOf();break}switch(typeof n[r].until){case"undefined":n[r].until=1/0;break;case"string":i=d(n[r].until).startOf("day").valueOf(),n[r].until=i.valueOf();break}}return n}function gs(e,t,r){var a,i,n=this.eras(),s,u,p;for(e=e.toUpperCase(),a=0,i=n.length;a<i;++a)if(s=n[a].name.toUpperCase(),u=n[a].abbr.toUpperCase(),p=n[a].narrow.toUpperCase(),r)switch(t){case"N":case"NN":case"NNN":if(u===e)return n[a];break;case"NNNN":if(s===e)return n[a];break;case"NNNNN":if(p===e)return n[a];break}else if([s,u,p].indexOf(e)>=0)return n[a]}function _s(e,t){var r=e.since<=e.until?1:-1;return t===void 0?d(e.since).year():d(e.since).year()+(t-e.offset)*r}function ws(){var e,t,r,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),a[e].since<=r&&r<=a[e].until||a[e].until<=r&&r<=a[e].since)return a[e].name;return""}function vs(){var e,t,r,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),a[e].since<=r&&r<=a[e].until||a[e].until<=r&&r<=a[e].since)return a[e].narrow;return""}function ks(){var e,t,r,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),a[e].since<=r&&r<=a[e].until||a[e].until<=r&&r<=a[e].since)return a[e].abbr;return""}function bs(){var e,t,r,a,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(r=i[e].since<=i[e].until?1:-1,a=this.clone().startOf("day").valueOf(),i[e].since<=a&&a<=i[e].until||i[e].until<=a&&a<=i[e].since)return(this.year()-d(i[e].since).year())*r+i[e].offset;return this.year()}function Ss(e){return v(this,"_erasNameRegex")||$t.call(this),e?this._erasNameRegex:this._erasRegex}function Ds(e){return v(this,"_erasAbbrRegex")||$t.call(this),e?this._erasAbbrRegex:this._erasRegex}function Ms(e){return v(this,"_erasNarrowRegex")||$t.call(this),e?this._erasNarrowRegex:this._erasRegex}function It(e,t){return t.erasAbbrRegex(e)}function Ys(e,t){return t.erasNameRegex(e)}function Os(e,t){return t.erasNarrowRegex(e)}function Ts(e,t){return t._eraYearOrdinalRegex||_e}function $t(){var e=[],t=[],r=[],a=[],i,n,s,u,p,g=this.eras();for(i=0,n=g.length;i<n;++i)s=K(g[i].name),u=K(g[i].abbr),p=K(g[i].narrow),t.push(s),e.push(u),r.push(p),a.push(s),a.push(u),a.push(p);this._erasRegex=new RegExp("^("+a.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}m(0,["gg",2],0,function(){return this.weekYear()%100});m(0,["GG",2],0,function(){return this.isoWeekYear()%100});function at(e,t){m(0,[e,e.length],0,t)}at("gggg","weekYear");at("ggggg","weekYear");at("GGGG","isoWeekYear");at("GGGGG","isoWeekYear");c("G",Xe);c("g",Xe);c("GG",D,P);c("gg",D,P);c("GGGG",Ot,Yt);c("gggg",Ot,Yt);c("GGGGG",Qe,Be);c("ggggg",Qe,Be);Ce(["gggg","ggggg","GGGG","GGGGG"],function(e,t,r,a){t[a.substr(0,2)]=_(e)});Ce(["gg","GG"],function(e,t,r,a){t[a]=d.parseTwoDigitYear(e)});function Ws(e){return Ir.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Rs(e){return Ir.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function js(){return ee(this.year(),1,4)}function Ps(){return ee(this.isoWeekYear(),1,4)}function Ns(){var e=this.localeData()._week;return ee(this.year(),e.dow,e.doy)}function Cs(){var e=this.localeData()._week;return ee(this.weekYear(),e.dow,e.doy)}function Ir(e,t,r,a,i){var n;return e==null?We(this,a,i).year:(n=ee(e,a,i),t>n&&(t=n),Fs.call(this,e,t,r,a,i))}function Fs(e,t,r,a,i){var n=_r(e,t,r,a,i),s=Te(n.year,0,n.dayOfYear);return this.year(s.getUTCFullYear()),this.month(s.getUTCMonth()),this.date(s.getUTCDate()),this}m("Q",0,"Qo","quarter");c("Q",lr);b("Q",function(e,t){t[Q]=(_(e)-1)*3});function Us(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}m("D",["DD",2],"Do","date");c("D",D,we);c("DD",D,P);c("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});b(["D","DD"],G);b("Do",function(e,t){t[G]=_(e.match(D)[0])});var $r=ve("Date",!0);m("DDD",["DDDD",3],"DDDo","dayOfYear");c("DDD",Je);c("DDDD",dr);b(["DDD","DDDD"],function(e,t,r){r._dayOfYear=_(e)});function Ls(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}m("m",["mm",2],0,"minute");c("m",D,Tt);c("mm",D,P);b(["m","mm"],A);var As=ve("Minutes",!1);m("s",["ss",2],0,"second");c("s",D,Tt);c("ss",D,P);b(["s","ss"],X);var Is=ve("Seconds",!1);m("S",0,0,function(){return~~(this.millisecond()/100)});m(0,["SS",2],0,function(){return~~(this.millisecond()/10)});m(0,["SSS",3],0,"millisecond");m(0,["SSSS",4],0,function(){return this.millisecond()*10});m(0,["SSSSS",5],0,function(){return this.millisecond()*100});m(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});m(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});m(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});m(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});c("S",Je,lr);c("SS",Je,P);c("SSS",Je,dr);var ne,Er;for(ne="SSSS";ne.length<=9;ne+="S")c(ne,_e);function $s(e,t){t[de]=_(("0."+e)*1e3)}for(ne="S";ne.length<=9;ne+="S")b(ne,$s);Er=ve("Milliseconds",!1);m("z",0,0,"zoneAbbr");m("zz",0,0,"zoneName");function Es(){return this._isUTC?"UTC":""}function Hs(){return this._isUTC?"Coordinated Universal Time":""}var l=Pe.prototype;l.add=Cn;l.calendar=En;l.clone=Hn;l.diff=Jn;l.endOf=ss;l.format=es;l.from=ts;l.fromNow=rs;l.to=as;l.toNow=is;l.get=Xa;l.invalidAt=ps;l.isAfter=Gn;l.isBefore=Vn;l.isBetween=zn;l.isSame=qn;l.isSameOrAfter=Zn;l.isSameOrBefore=Bn;l.isValid=fs;l.lang=Cr;l.locale=Nr;l.localeData=Fr;l.max=fn;l.min=hn;l.parsingFlags=ms;l.set=Ka;l.startOf=ns;l.subtract=Fn;l.toArray=us;l.toObject=cs;l.toDate=ds;l.toISOString=Xn;l.inspect=Kn;typeof Symbol<"u"&&Symbol.for!=null&&(l[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});l.toJSON=hs;l.toString=Qn;l.unix=ls;l.valueOf=os;l.creationData=ys;l.eraName=ws;l.eraNarrow=vs;l.eraAbbr=ks;l.eraYear=bs;l.year=hr;l.isLeapYear=Qa;l.weekYear=Ws;l.isoWeekYear=Rs;l.quarter=l.quarters=Us;l.month=xr;l.daysInMonth=li;l.week=l.weeks=yi;l.isoWeek=l.isoWeeks=xi;l.weeksInYear=Ns;l.weeksInWeekYear=Cs;l.isoWeeksInYear=js;l.isoWeeksInISOWeekYear=Ps;l.date=$r;l.day=l.days=Wi;l.weekday=Ri;l.isoWeekday=ji;l.dayOfYear=Ls;l.hour=l.hours=Ai;l.minute=l.minutes=As;l.second=l.seconds=Is;l.millisecond=l.milliseconds=Er;l.utcOffset=kn;l.utc=Sn;l.local=Dn;l.parseZone=Mn;l.hasAlignedHourOffset=Yn;l.isDST=On;l.isLocal=Wn;l.isUtcOffset=Rn;l.isUtc=Wr;l.isUTC=Wr;l.zoneAbbr=Es;l.zoneName=Hs;l.dates=C("dates accessor is deprecated. Use date instead.",$r);l.months=C("months accessor is deprecated. Use month instead",xr);l.years=C("years accessor is deprecated. Use year instead",hr);l.zone=C("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",bn);l.isDSTShifted=C("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Tn);function Gs(e){return S(e*1e3)}function Vs(){return S.apply(null,arguments).parseZone()}function Hr(e){return e}var k=St.prototype;k.calendar=Ta;k.longDateFormat=Pa;k.invalidDate=Ca;k.ordinal=La;k.preparse=Hr;k.postformat=Hr;k.relativeTime=Ia;k.pastFuture=$a;k.set=Ya;k.eras=xs;k.erasParse=gs;k.erasConvertYear=_s;k.erasAbbrRegex=Ds;k.erasNameRegex=Ss;k.erasNarrowRegex=Ms;k.months=ii;k.monthsShort=ni;k.monthsParse=oi;k.monthsRegex=ui;k.monthsShortRegex=di;k.week=hi;k.firstDayOfYear=pi;k.firstDayOfWeek=mi;k.weekdays=Di;k.weekdaysMin=Yi;k.weekdaysShort=Mi;k.weekdaysParse=Ti;k.weekdaysRegex=Pi;k.weekdaysShortRegex=Ni;k.weekdaysMinRegex=Ci;k.isPM=Ui;k.meridiem=Ii;function qe(e,t,r,a){var i=re(),n=z().set(a,t);return i[r](n,e)}function Gr(e,t,r){if(te(e)&&(t=e,e=void 0),e=e||"",t!=null)return qe(e,t,r,"month");var a,i=[];for(a=0;a<12;a++)i[a]=qe(e,a,r,"month");return i}function Et(e,t,r,a){typeof e=="boolean"?(te(t)&&(r=t,t=void 0),t=t||""):(t=e,r=t,e=!1,te(t)&&(r=t,t=void 0),t=t||"");var i=re(),n=e?i._week.dow:0,s,u=[];if(r!=null)return qe(t,(r+n)%7,a,"day");for(s=0;s<7;s++)u[s]=qe(t,(s+n)%7,a,"day");return u}function zs(e,t){return Gr(e,t,"months")}function qs(e,t){return Gr(e,t,"monthsShort")}function Zs(e,t,r){return Et(e,t,r,"weekdays")}function Bs(e,t,r){return Et(e,t,r,"weekdaysShort")}function Js(e,t,r){return Et(e,t,r,"weekdaysMin")}oe("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,r=_(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+r}});d.lang=C("moment.lang is deprecated. Use moment.locale instead.",oe);d.langData=C("moment.langData is deprecated. Use moment.localeData instead.",re);var Z=Math.abs;function Qs(){var e=this._data;return this._milliseconds=Z(this._milliseconds),this._days=Z(this._days),this._months=Z(this._months),e.milliseconds=Z(e.milliseconds),e.seconds=Z(e.seconds),e.minutes=Z(e.minutes),e.hours=Z(e.hours),e.months=Z(e.months),e.years=Z(e.years),this}function Vr(e,t,r,a){var i=E(t,r);return e._milliseconds+=a*i._milliseconds,e._days+=a*i._days,e._months+=a*i._months,e._bubble()}function Xs(e,t){return Vr(this,e,t,1)}function Ks(e,t){return Vr(this,e,t,-1)}function Xt(e){return e<0?Math.floor(e):Math.ceil(e)}function eo(){var e=this._milliseconds,t=this._days,r=this._months,a=this._data,i,n,s,u,p;return e>=0&&t>=0&&r>=0||e<=0&&t<=0&&r<=0||(e+=Xt(wt(r)+t)*864e5,t=0,r=0),a.milliseconds=e%1e3,i=N(e/1e3),a.seconds=i%60,n=N(i/60),a.minutes=n%60,s=N(n/60),a.hours=s%24,t+=N(s/24),p=N(zr(t)),r+=p,t-=Xt(wt(p)),u=N(r/12),r%=12,a.days=t,a.months=r,a.years=u,this}function zr(e){return e*4800/146097}function wt(e){return e*146097/4800}function to(e){if(!this.isValid())return NaN;var t,r,a=this._milliseconds;if(e=F(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+a/864e5,r=this._months+zr(t),e){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(t=this._days+Math.round(wt(this._months)),e){case"week":return t/7+a/6048e5;case"day":return t+a/864e5;case"hour":return t*24+a/36e5;case"minute":return t*1440+a/6e4;case"second":return t*86400+a/1e3;case"millisecond":return Math.floor(t*864e5)+a;default:throw new Error("Unknown unit "+e)}}function ae(e){return function(){return this.as(e)}}var qr=ae("ms"),ro=ae("s"),ao=ae("m"),io=ae("h"),no=ae("d"),so=ae("w"),oo=ae("M"),lo=ae("Q"),uo=ae("y"),co=qr;function ho(){return E(this)}function fo(e){return e=F(e),this.isValid()?this[e+"s"]():NaN}function ce(e){return function(){return this.isValid()?this._data[e]:NaN}}var mo=ce("milliseconds"),po=ce("seconds"),yo=ce("minutes"),xo=ce("hours"),go=ce("days"),_o=ce("months"),wo=ce("years");function vo(){return N(this.days()/7)}var J=Math.round,pe={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function ko(e,t,r,a,i){return i.relativeTime(t||1,!!r,e,a)}function bo(e,t,r,a){var i=E(e).abs(),n=J(i.as("s")),s=J(i.as("m")),u=J(i.as("h")),p=J(i.as("d")),g=J(i.as("M")),T=J(i.as("w")),U=J(i.as("y")),f=n<=r.ss&&["s",n]||n<r.s&&["ss",n]||s<=1&&["m"]||s<r.m&&["mm",s]||u<=1&&["h"]||u<r.h&&["hh",u]||p<=1&&["d"]||p<r.d&&["dd",p];return r.w!=null&&(f=f||T<=1&&["w"]||T<r.w&&["ww",T]),f=f||g<=1&&["M"]||g<r.M&&["MM",g]||U<=1&&["y"]||["yy",U],f[2]=t,f[3]=+e>0,f[4]=a,ko.apply(null,f)}function So(e){return e===void 0?J:typeof e=="function"?(J=e,!0):!1}function Do(e,t){return pe[e]===void 0?!1:t===void 0?pe[e]:(pe[e]=t,e==="s"&&(pe.ss=t-1),!0)}function Mo(e,t){if(!this.isValid())return this.localeData().invalidDate();var r=!1,a=pe,i,n;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(r=e),typeof t=="object"&&(a=Object.assign({},pe,t),t.s!=null&&t.ss==null&&(a.ss=t.s-1)),i=this.localeData(),n=bo(this,!r,a,i),r&&(n=i.pastFuture(+this,n)),i.postformat(n)}var ht=Math.abs;function he(e){return(e>0)-(e<0)||+e}function it(){if(!this.isValid())return this.localeData().invalidDate();var e=ht(this._milliseconds)/1e3,t=ht(this._days),r=ht(this._months),a,i,n,s,u=this.asSeconds(),p,g,T,U;return u?(a=N(e/60),i=N(a/60),e%=60,a%=60,n=N(r/12),r%=12,s=e?e.toFixed(3).replace(/\.?0+$/,""):"",p=u<0?"-":"",g=he(this._months)!==he(u)?"-":"",T=he(this._days)!==he(u)?"-":"",U=he(this._milliseconds)!==he(u)?"-":"",p+"P"+(n?g+n+"Y":"")+(r?g+r+"M":"")+(t?T+t+"D":"")+(i||a||e?"T":"")+(i?U+i+"H":"")+(a?U+a+"M":"")+(e?U+s+"S":"")):"P0D"}var w=rt.prototype;w.isValid=gn;w.abs=Qs;w.add=Xs;w.subtract=Ks;w.as=to;w.asMilliseconds=qr;w.asSeconds=ro;w.asMinutes=ao;w.asHours=io;w.asDays=no;w.asWeeks=so;w.asMonths=oo;w.asQuarters=lo;w.asYears=uo;w.valueOf=co;w._bubble=eo;w.clone=ho;w.get=fo;w.milliseconds=mo;w.seconds=po;w.minutes=yo;w.hours=xo;w.days=go;w.weeks=vo;w.months=_o;w.years=wo;w.humanize=Mo;w.toISOString=it;w.toString=it;w.toJSON=it;w.locale=Nr;w.localeData=Fr;w.toIsoString=C("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",it);w.lang=Cr;m("X",0,0,"unix");m("x",0,0,"valueOf");c("x",Xe);c("X",Va);b("X",function(e,t,r){r._d=new Date(parseFloat(e)*1e3)});b("x",function(e,t,r){r._d=new Date(_(e))});//! moment.js
d.version="2.30.1";Da(S);d.fn=l;d.min=mn;d.max=pn;d.now=yn;d.utc=z;d.unix=Gs;d.months=zs;d.isDate=je;d.locale=oe;d.invalid=Ze;d.duration=E;d.isMoment=$;d.weekdays=Zs;d.parseZone=Vs;d.localeData=re;d.isDuration=$e;d.monthsShort=qs;d.weekdaysMin=Js;d.defineLocale=Nt;d.updateLocale=Gi;d.locales=Vi;d.weekdaysShort=Bs;d.normalizeUnits=F;d.relativeTimeRounding=So;d.relativeTimeThreshold=Do;d.calendarFormat=$n;d.prototype=l;d.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const Yo=Kr`
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
  .react-datepicker__month-select{
    background-color: transparent;
    border: 1px solid ${h.colorInput};
    border-radius: 2px;
    color: ${h.colorWhite};
    outline: none;

    & >option{
      color: ${h.colorBlack};  
      background-color:${h.colorWhite} ;   
    }
  }

  .react-datepicker__year-select{
    background-color: transparent;
    border: 1px solid ${h.colorInput};
    border-radius: 2px;
    color: ${h.colorWhite};
     outline: none;

    & >option{
      color: ${h.colorBlack};  
      background-color:${h.colorWhite} ;   
    }
  }
`,Oo=y.div`
  display: flex;
`,Kt=y.label`
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
`,To=y.div`
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
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,er=y.input`
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

    ${({haserror:e,isValidationCompleted:t,...r})=>se`
      border: 1px solid
        ${e?`${h.colorSecondaryRed}`:t?`${h.colorSecondaryGreen}`:`${h.colorInput}`};
    `}
  }

  @media screen and (min-width: 375px) {
    color: white;
    width: 335px;
    ${({haserror:e,isValidationCompleted:t,...r})=>se`
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

    ${({haserror:e,isValidationCompleted:t})=>se`
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
`,Ro=y.div`
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
`,Ae=y.label`
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
`,ft=y.input`
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

    ${({haserror:e,isValidationCompleted:t,...r})=>se`
      border: 1px solid
        ${e?`${h.colorSecondaryRed}`:t?`${h.colorSecondaryGreen}`:`${h.colorInput}`};
    `}
  }

  @media screen and (min-width: 375px) {
    color: white;
    width: 161px;
    ${({haserror:e,isValidationCompleted:t,...r})=>se`
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

    ${({haserror:e,isValidationCompleted:t})=>se`
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
`,jo=y(la)`
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

  ${({haserror:e,isValidationCompleted:t,...r})=>se`
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

    ${({haserror:e,isValidationCompleted:t})=>se`
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
`,tr=y.div`
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
`,Po=y.div`
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
`,H=y.label`
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
`,L=y(ea)`
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
`,No=y.svg`
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
`,B=y(ta)`
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
`,Co=y.div`
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
`,Fo=y.button`
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
  }
`;d().format("YYYY-MM-DD");const Uo=ra().shape({name:Fe().min(2,"Too Short!").required("Name is required"),email:Fe().email("Invalid email address").required("Email is required"),height:ke().label("Height").min(150,"Height must be a number greater than or equal to 150").required("Height is required"),currentWeight:ke().label("Current Weight").min(35,"Current Weight must be a number greater than or equal to 35").required("Current Weight is required"),desiredWeight:ke().label("Desired Weight").min(35,"Desired Weight must be a number greater than or equal to 35").required("Desired Weight is required"),blood:ke().label("Blood Type").oneOf([1,2,3,4,"1","2","3","4"],"Invalid Blood Type").required("Blood Type is required"),sex:Fe().label("Gender").oneOf(["male","female"],"Invalid Gender").required("Gender is required"),levelActivity:ke().label("Level of Activity").oneOf([1,2,3,4,5,"1","2","3","4","5"],"Invalid Level of Activity").required("Level of Activity is required"),birthday:Fe().label("Date of Birth").typeError("Invalid Date!")}),Lo=({profile:e,refreshUserData:t})=>{const r=rr(),[a,i]=fe.useState(e),[n,s]=fe.useState(null),[u,p]=fe.useState(!1),[g,T]=fe.useState(e.birthday?d(e.birthday).format("DD.MM.YYYY"):"");fe.useEffect(()=>{(async()=>{try{const R=await r(na());R.payload.birthday===void 0&&(R.payload.birthday=""),i(R.payload),t(R.payload),T(R.payload.birthday?d(R.payload.birthday).format("DD.MM.YYYY"):"")}catch(R){console.error("Error fetching user data:",R)}})()},[]);const U=async(f,R)=>{f.birthday===g&&(f.birthday=a.birthday,R.setFieldValue("birthday",g));try{const Ht=d(f.birthday,"DD.MM.YYYY");if(d().diff(Ht,"years")<18){Gt.error("You must be at least 18 years old.",{theme:"dark"}),p(!1);return}const Eo=await r(sa(f));p(!0)}catch{Gt.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return o.jsx(Oo,{children:o.jsx(aa,{initialValues:{...a,birthday:g},enableReinitialize:!0,validationSchema:Uo,onSubmit:U,children:f=>o.jsxs(ia,{children:[o.jsxs(To,{children:[o.jsxs(Wo,{children:[o.jsxs(Kt,{children:["Name",o.jsx(er,{name:"name",placeholder:"Mike",type:"text",onChange:f.handleChange,value:f.values.name}),o.jsx(B,{name:"name",component:"div"})]}),o.jsxs(Kt,{children:["Email",o.jsx(er,{name:"email",placeholder:"jane@acme.com",type:"email",onChange:f.handleChange,value:f.values.email}),o.jsx(B,{name:"email",component:"div"})]})]}),o.jsxs(Ro,{children:[o.jsxs(Ae,{children:["Height",o.jsx(ft,{name:"height",placeholder:"0",type:"number",onChange:f.handleChange,value:f.values.height}),o.jsx(B,{name:"height",component:"div"})]}),o.jsxs(Ae,{children:["Current Weight",o.jsx(ft,{name:"currentWeight",placeholder:"0",type:"number",onChange:f.handleChange,value:f.values.currentWeight}),o.jsx(B,{name:"currentWeight",component:"div"})]}),o.jsxs(Ae,{children:["Desired Weight",o.jsx(ft,{name:"desiredWeight",placeholder:"0",type:"number",onChange:f.handleChange,value:f.values.desiredWeight}),o.jsx(B,{name:"desiredWeight",component:"div"})]}),o.jsxs(Ae,{children:["Date of birth",o.jsx(jo,{selected:n,onChange:R=>{f.handleChange,s(R),f.setFieldValue("birthday",R),f.setFieldTouched("birthday",!0)},dateFormat:"dd.MM.yyyy",placeholderText:"00.00.00",name:"birthday",value:f.values.birthday,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",calendarStartDay:1,formatWeekDay:R=>R.substr(0,1)}),o.jsx(No,{children:o.jsx("use",{href:`${Me}#icon-calendar`})}),o.jsx(B,{name:"birthday",component:"div"}),o.jsx(Yo,{})]})]}),o.jsxs(tr,{children:[o.jsxs("div",{role:"group","aria-labelledby":"bloodLevel",children:[o.jsx(B,{name:"blood",component:"div"}),o.jsxs(Po,{children:["Blood",o.jsxs(H,{children:[o.jsx(L,{type:"radio",name:"blood",value:"1",onChange:f.handleChange,checked:f.values.blood==="1"||f.values.blood===1}),"1"]}),o.jsxs(H,{children:[o.jsx(L,{type:"radio",name:"blood",value:"2",onChange:f.handleChange,checked:f.values.blood==="2"||f.values.blood===2}),"2"]}),o.jsxs(H,{children:[o.jsx(L,{type:"radio",name:"blood",value:"3",onChange:f.handleChange,checked:f.values.blood==="3"||f.values.blood===3}),"3"]}),o.jsxs(H,{children:[o.jsx(L,{type:"radio",name:"blood",value:"4",onChange:f.handleChange,checked:f.values.blood==="4"||f.values.blood===4}),"4"]})]})]}),o.jsxs("div",{role:"group","aria-labelledby":"genderType",children:[o.jsx(B,{name:"sex",component:"div"}),o.jsxs(H,{children:[o.jsx(L,{type:"radio",name:"sex",value:"male",checked:f.values.sex==="male"}),"Male",o.jsx(L,{type:"radio",name:"sex",value:"female",checked:f.values.sex==="female"}),"Female"]})]})]}),o.jsxs(tr,{role:"group","aria-labelledby":"activityGroup",children:[o.jsx(B,{name:"levelActivity",component:"div"}),o.jsxs(Co,{children:[o.jsxs(H,{children:[o.jsx(L,{type:"radio",name:"levelActivity",value:"1",required:!0,onChange:f.handleChange,checked:f.values.levelActivity==="1"||f.values.levelActivity===1}),"Sedentary lifestyle (little or no physical activity)"]}),o.jsxs(H,{children:[o.jsx(L,{type:"radio",name:"levelActivity",value:"2",required:!0,onChange:f.handleChange,checked:f.values.levelActivity==="2"||f.values.levelActivity===2}),"Light activity (light excercises/sports 1-3 days per week)"]}),o.jsxs(H,{children:[o.jsx(L,{type:"radio",name:"levelActivity",value:"3",required:!0,onChange:f.handleChange,checked:f.values.levelActivity==="3"||f.values.levelActivity===3}),"Moderately active (moderate excercises/sports 2-5 days per week)"," "]}),o.jsxs(H,{children:[o.jsx(L,{type:"radio",name:"levelActivity",value:"4",required:!0,onChange:f.handleChange,checked:f.values.levelActivity==="4"||f.values.levelActivity===4}),"Very active (intence excercises/sports 6-7 days per week)"]}),o.jsxs(H,{children:[o.jsx(L,{type:"radio",name:"levelActivity",value:"5",required:!0,onChange:f.handleChange,checked:f.values.levelActivity==="5"||f.values.levelActivity===5}),"Extremely active (very strenous exercises/sports and physical work)"]})]})]})]}),o.jsx(Fo,{type:"submit",disabled:u,children:"Save"})]})})})},Ao=y.div`
  padding-top: 72px;
`,Io=y.div`
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
`;class qo extends fe.Component{constructor(){super(...arguments);nt(this,"state",{profile:{name:"Jane",email:"",height:0,currentWeight:0,desiredWeight:0,blood:"1",sex:"female",levelActivity:"1",avatarURL:"",birthday:""}});nt(this,"refreshProfileState",r=>{this.setState({profile:r})})}render(){return o.jsx(oa,{children:o.jsxs(Ao,{children:[o.jsx("h1",{children:"Profile Settings"}),o.jsxs(Io,{children:[o.jsx(Lo,{profile:this.state.profile,refreshUserData:this.refreshProfileState}),o.jsx(Sa,{profile:this.state.profile,refreshUserData:this.refreshProfileState})]})]})})}}export{qo as ProfilePage,qo as default};
