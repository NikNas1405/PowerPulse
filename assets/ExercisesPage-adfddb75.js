import{s as l,aa as u,ab as x,ac as g,j as e,ad as a,g as r,u as f,h as d,ae as w,af as b,ag as j,r as c,C as v,G as p,a as k,ah as E,W as y,Q as C,ai as $}from"./index-904a8b3e.js";import{T as L}from"./TitlePage-0f43c099.js";const P=l.ul`
  display: flex;
  margin-top: 28px;
  gap: 28px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`,F=l(u)`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  word-wrap: break-word;

  color: ${i=>i.isactive==="true"?"#EFEDE8":""};
  position: relative;

  &:after {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: ${i=>i.isactive==="true"?"4px":"0"};
    background-color: #e6533c;
    border-radius: 2px;
    content: '';
    transition: height 0.3s;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }

  @media (max-width: 374px) {
    font-size: 18px;
  }
`,z=()=>{const i=["Body parts","Muscles","Equipment"],{filter:n}=x(),o=g(),t=n;return e.jsx(e.Fragment,{children:e.jsx(P,{children:i.map(s=>e.jsx("li",{children:e.jsx(F,{to:`/exercises/${s}`,state:{from:o},isactive:s===t?"true":"false",children:s})},s))})})},B="/PowerPulse/assets/trainingGym-1-78b576d3.jpg",D="/PowerPulse/assets/trainingGym-1@2x-7f8d3593.jpg",G=a.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 20px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: row;

    margin-top: 78px;
    margin-bottom: 70px;
  }

  @media (max-width: 374px) {
  }
`;a.div`
  text-align: center;
`;a.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;const S=a.a`
  display: flex;
  align-items: center;
  padding-top: 10px;
  gap: 8px;
  color: ${r.colorInput};
  line-height: 1.2357;
  word-wrap: break-word;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    padding-top: 32px;
  }

  > svg {
    stroke: ${r.colorInput};
    width: 16px;
    height: 16px;
    transition: stroke 0.3s ease;
  }

  &:hover {
    color: ${r.colorOrange1};
    cursor: pointer;

    > svg {
      stroke: ${r.colorOrange1};
      width: 16px;
      height: 16px;
    }
  }
`,I=a.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
  @media (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${B});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${D});
  }
`,q=()=>{const i=f(),n=d(w),o=d(b),{filter:t,filterList:s}=x(),h=j(),m=g();return c.useEffect(()=>{(async()=>{t===void 0?C.info("We are still awating for data",{theme:"dark"}):i($({filter:t}))})()},[i,t]),e.jsx(I,{children:e.jsx(v,{children:n?e.jsx(p,{}):e.jsxs("div",{children:[t!==void 0&&m.pathname.endsWith(t.replace(" ","%20"))?null:e.jsxs(S,{onClick:()=>h(-1),children:[e.jsx("svg",{style:{fill:"none"},children:e.jsx("use",{href:k+"#icon-arrow-left"})}),"Back"," "]}),e.jsxs(G,{children:[e.jsx(L,{title:s?E(s.split(" ")[0]):"Exercises"}),e.jsx(z,{})]}),n&&!o&&e.jsx(p,{}),e.jsx(e.Fragment,{children:e.jsx(c.Suspense,{children:e.jsx(y,{})})})]})})})};export{q as default};
