import{s as e,N as t,j as i}from"./index-fb0384a4.js";import{g as n}from"./root-3d799fe1.js";import{b as o,a as d,c as a,d as r,e as p,f as s}from"./bgMobile@2x-26480d49.js";const x=e.div`
  display: flex;
  position: relative;

  @media screen and (min-width: 320px) {
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,m=e.div`
  z-index: 1;
`,h=e.div`
  background-color: ${n.colorOrange};
  position: absolute;
  top: 0;
  left: -10%;

  @media screen and (min-width: 320px) {
    width: 240px;
    height: 830px;
  }

  @media screen and (min-width: 375px) {
    height: 888px;
  }

  @media screen and (min-width: 768px) {
    width: 420px;
    height: 1024px;
  }

  @media screen and (min-width: 1440px) {
    width: 57%;
    height: 800px;
    position: absolute;
    top: 0;
    left: -10%;
  }
`,c=e.h2`
  color: ${n.colorWhite};
  font-family: Roboto;
  font-size: 66px;
  font-style: normal;
  font-weight: 500;
  line-height: 66px;
  letter-spacing: 0.66px;
  width: 114px;
  height: 66px;
  margin-bottom: 14px;
  margin-top: 250px;

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 160px;
    line-height: 150px;
    letter-spacing: 1.6px;
    margin-top: 309px;
    margin-bottom: 28px;
    width: 277px;
    height: 150px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 221px;
  }
`,l=e.p`
  width: 200px;
  height: 162px;
  color: ${n.colorWhite};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 28px;
  margin-right: 20px;

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 28px;
    margin-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 477px;
    margin-right: 197px;
  }
`,g=e(t)`
  display: inline-flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${n.colorWhite};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  border-radius: 12px;
  border: 1px solid ${n.colorInput};

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    width: 206px;
    font-size: 20px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`,w=e.div`
  @media screen and (min-width: 320px) {
    background-image: url(${o});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top 0% right 125%;
    width: 320px;
    height: 669px;
    position: absolute;
    top: 40%;
    left: 40%;
    z-index: -1;
    object-fit: fill;

    @media screen and (min-device-pixel-radio: 2) and (min-width: 320px),
      screen and (min-resolution: 192dpi) and (min-width: 320px),
      screen and (min-resolution: 2dppx) and (min-width: 320px) {
      background-image: url(${d});
    }
  }

  @media screen and (min-width: 375px) {
    width: 446px;
    height: 669px;
  }

  @media screen and (min-width: 768px) {
    background-image: url(${a});
    width: 670px;
    height: 800px;
    top: 32%;
    left: 50%;

    @media screen and (min-device-pixel-radio: 2) and (min-width: 768px),
      screen and (min-resolution: 192dpi) and (min-width: 768px),
      screen and (min-resolution: 2dppx) and (min-width: 768px) {
      background-image: url(${r});
    }
  }

  @media screen and (min-width: 1440px) {
    /* position: absolute; */
    background-image: url(${p});
    width: 670px;
    height: 800px;
    top: 0;
    left: 55%;
    /* position: relative; */
    /* margin-left: 174px; */
    background-position: top;

    @media screen and (min-device-pixel-radio: 2) and (min-width: 1440px),
      screen and (min-resolution: 192dpi) and (min-width: 1440px),
      screen and (min-resolution: 2dppx) and (min-width: 1440px) {
      background-image: url(${s});
    }
  }
`,v=()=>i.jsxs(x,{children:[i.jsx(h,{}),i.jsxs(m,{children:[i.jsx(c,{children:"404"}),i.jsx(l,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),i.jsx(g,{to:"/",children:"Go Home"})]}),i.jsx("div",{children:i.jsx(w,{})})]});export{v as default};
