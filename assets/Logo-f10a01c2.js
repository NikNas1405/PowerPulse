import{s,g as a,N as n,af as o,j as e,a as i}from"./index-30b7177d.js";const g="/PowerPulse/assets/bgDesktop@1x-65809e4b.jpg",h="/PowerPulse/assets/bgDesktop@2x-ed7242a6.jpg",b="/PowerPulse/assets/bgTablet@1x-e78a8eb2.jpg",w="/PowerPulse/assets/bgTablet@2x-aedbf112.jpg",m="/PowerPulse/assets/bgMobile@1x-3af5d636.jpg",P="/PowerPulse/assets/bgMobile@2x-8a68f471.jpg",r=s.div`
  @media screen and (min-width: 320px) {
    z-index: 1;
  }
  @media screen and (min-width: 1440px) {
  }
`,d=s(n)`
  display: flex;
  gap: 8px;
`,p=s.svg`
  fill: ${a.colorOrange};

  @media screen and (min-width: 320px) {
    width: 36px;
    height: 13px;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 17px;
  }

  @media screen and (min-width: 1440px) {
  }
`,c=s.svg`
  fill: ${a.colorWhite};

  @media screen and (min-width: 320px) {
    width: 82px;
    height: 12px;
  }
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 15px;
  }
  @media screen and (min-width: 1440px) {
  }
`,j=()=>{const t=o().pathname==="/error";return e.jsx(r,{children:e.jsxs(d,{to:"/",children:[e.jsx(p,{style:{fill:t?"white":"current"},children:e.jsx("use",{href:`${i}#icon-Vector`})}),e.jsx(c,{children:e.jsx("use",{href:`${i}#icon-PowerPulse`})})]})})};export{j as L,P as a,m as b,b as c,w as d,g as e,h as f};
