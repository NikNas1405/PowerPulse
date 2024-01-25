import{s as l,aa as u,ab as x,ac as g,j as e,ad as n,g as o,u as f,h as d,ae as w,af as b,ag as v,r as p,C as j,G as c,a as k,ah as E,W as y,Q as C,ai as $}from"./index-aa53d373.js";import{T as L}from"./TitlePage-00c14ac6.js";const P=l.ul`
  display: flex;
  margin-top: 28px;
  gap: 28px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`,z=l(u)`
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
`,F=()=>{const i=["Body parts","Muscles","Equipment"],{filter:a}=x(),r=g(),t=a;return e.jsx(e.Fragment,{children:e.jsx(P,{children:i.map(s=>e.jsx("li",{children:e.jsx(z,{to:`/exercises/${s}`,state:{from:r},isactive:s===t?"true":"false",children:s})},s))})})},B="/PowerPulse/assets/trainingGym-1-78b576d3.jpg",D="/PowerPulse/assets/trainingGym-1@2x-7f8d3593.jpg",G=n.div`
  /* border: 2px solid red;
  position: relative; */
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
`;n.div`
  text-align: center;
`;n.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;const S=n.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  /* border: 2px solid red; */
`,I=n.a`
  position: absolute;
  display: flex;
  align-items: center;
  top: 6px;
  gap: 8px;
  color: ${o.colorInput};
  font-size: 10px;
  font-weight: 400;
  line-height: 1.167;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    top: 32px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.167;
  }

  > svg {
    stroke: ${o.colorInput};
    width: 10px;
    height: 10px;
    transition: stroke 0.3s ease;
    @media (min-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }

  &:hover {
    color: ${o.colorOrange1};
    cursor: pointer;

    > svg {
      stroke: ${o.colorOrange1};
      width: 16px;
      height: 16px;
    }
  }
`,O=n.div`
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
`,q=()=>{const i=f(),a=d(w),r=d(b),{filter:t,filterList:s}=x(),h=v(),m=g();return p.useEffect(()=>{(async()=>{t===void 0?C.info("We are still awating for data",{theme:"dark"}):i($({filter:t}))})()},[i,t]),e.jsx(O,{children:e.jsx(j,{children:e.jsx(S,{children:a?e.jsx(c,{}):e.jsxs("div",{children:[t!==void 0&&m.pathname.endsWith(t.replace(" ","%20"))?null:e.jsxs(I,{onClick:()=>h(-1),children:[e.jsx("svg",{style:{fill:"none"},children:e.jsx("use",{href:k+"#icon-arrow-left"})}),"Back"," "]}),e.jsxs(G,{children:[e.jsx(L,{title:s?E(s.split(" ")[0]):"Exercises"}),e.jsx(F,{})]}),a&&!r&&e.jsx(c,{}),e.jsx(e.Fragment,{children:e.jsx(p.Suspense,{children:e.jsx(y,{})})})]})})})})};export{q as default};
