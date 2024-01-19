import{s as i,g as n,N as o,K as r,j as e,a as d,P as s}from"./index-6968a334.js";import{b as p,a as c,c as h,d as l,e as x,f as m}from"./bgMobile@2x-26480d49.js";const g=i.div`
  display: flex;
`,w=i.div`
  height: 100vh;
  width: 36%;
  background-image: url(${p});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right bottom;

  @media screen and (min-device-pixel-radio: 2) and (min-width: 320px),
    screen and (min-resolution: 192dpi) and (min-width: 320px),
    screen and (min-resolution: 2dppx) and (min-width: 320px) {
    background-image: url(${c});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${h});
    width: 45%;

    @media screen and (min-device-pixel-radio: 2) and (min-width: 768px),
      screen and (min-resolution: 192dpi) and (min-width: 768px),
      screen and (min-resolution: 2dppx) and (min-width: 768px) {
      background-image: url(${l});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${x});
    width: 54%;

    @media screen and (min-device-pixel-radio: 2) and (min-width: 1440px),
      screen and (min-resolution: 192dpi) and (min-width: 1440px),
      screen and (min-resolution: 2dppx) and (min-width: 1440px) {
      background-image: url(${m});
    }
  }
`,u=i.div`
  background-color: ${n.colorOrange};
  height: 100vh;
  flex: 1;
`,b=i.div`
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
`,f=i.div`
  display: flex;
  flex-direction: column;
  transform: translateY(20vh);
`,v=i.h2`
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
`,j=i.p`
  color: ${n.colorWhite};
  font-size: 14px;
  line-height: 1.28571;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,k=i(o)`
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
`,$=i.div`
  z-index: 1;
`,y=i(o)`
  display: flex;
  gap: 8px;
`,z=i.svg`
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
`,P=i.svg`
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
`,E=()=>{const a=r().pathname==="/error";return e.jsx($,{children:e.jsxs(y,{to:"/",children:[e.jsx(z,{style:{fill:a?"white":"current"},children:e.jsx("use",{href:`${d}#icon-Vector`})}),e.jsx(P,{children:e.jsx("use",{href:`${d}#icon-PowerPulse`})})]})})},N=()=>{const{isLoggedIn:t}=s();return e.jsxs(g,{children:[e.jsx(u,{children:e.jsxs(b,{children:[!t&&e.jsx(E,{}),e.jsxs(f,{children:[e.jsx(v,{children:"404"}),e.jsx(j,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),e.jsx(k,{to:"/",children:"Go Home"})]})]})}),e.jsx(w,{})]})};export{N as default};
