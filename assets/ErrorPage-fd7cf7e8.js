import{s as i,g as n,N as d,K as a,j as e,a as t}from"./index-0aae1f18.js";import{b as r,a as s,c as p,d as c,e as h,f as l}from"./bgMobile@2x-26480d49.js";const x=i.div`
  display: flex;
`,m=i.div`
  height: 100vh;
  width: 36%;
  background-image: url(${r});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right bottom;

  @media screen and (min-device-pixel-radio: 2) and (min-width: 320px),
    screen and (min-resolution: 192dpi) and (min-width: 320px),
    screen and (min-resolution: 2dppx) and (min-width: 320px) {
    background-image: url(${s});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${p});
    width: 45%;

    @media screen and (min-device-pixel-radio: 2) and (min-width: 768px),
      screen and (min-resolution: 192dpi) and (min-width: 768px),
      screen and (min-resolution: 2dppx) and (min-width: 768px) {
      background-image: url(${c});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${h});
    width: 54%;

    @media screen and (min-device-pixel-radio: 2) and (min-width: 1440px),
      screen and (min-resolution: 192dpi) and (min-width: 1440px),
      screen and (min-resolution: 2dppx) and (min-width: 1440px) {
      background-image: url(${l});
    }
  }
`,g=i.div`
  background-color: ${n.colorOrange};
  height: 100vh;
  flex: 1;
`,w=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }

  @media screen and (min-width: 320px) {
    padding: 20px;
  }

  @media screen and (min-width: 375px) {
    padding: 24px 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 32px 96px;
    /* width: 669px; */
  }
`,u=i.div`
  display: flex;
  flex-direction: column;
  transform: translateY(20vh);
`,b=i.h2`
  color: ${n.colorWhite};
  margin-bottom: 14px;
  font-size: 66px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.66px;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    font-size: 160px;
    line-height: 0.9375;
    letter-spacing: 1.6px;
  }
`,f=i.p`
  color: ${n.colorWhite};
  font-size: 14px;
  line-height: 1.28571;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,v=i(d)`
  display: inline-flex;
  padding: 12px 38px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${n.colorWhite};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  border-radius: 12px;
  border: 1px solid ${n.colorInput};
  width: 147px;

  @media screen and (min-width: 768px) {
    padding: 16px 58px;
    width: 204px;
    font-size: 20px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`,j=i.div`
  z-index: 1;
`,k=i(d)`
  display: flex;
  gap: 8px;
`,$=i.svg`
  fill: ${n.colorOrange};

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
`,y=i.svg`
  fill: ${n.colorWhite};

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
`,z=()=>{const o=a().pathname==="/error";return e.jsx(j,{children:e.jsxs(k,{to:"/",children:[e.jsx($,{style:{fill:o?"white":"current"},children:e.jsx("use",{href:`${t}#icon-Vector`})}),e.jsx(y,{children:e.jsx("use",{href:`${t}#icon-PowerPulse`})})]})})},W=()=>e.jsxs(x,{children:[e.jsx(g,{children:e.jsxs(w,{children:[e.jsx(z,{}),e.jsxs(u,{children:[e.jsx(b,{children:"404"}),e.jsx(f,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),e.jsx(v,{to:"/",children:"Go Home"})]})]})}),e.jsx(m,{})]});export{W as default};
