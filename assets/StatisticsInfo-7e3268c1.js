import{s as e,j as i}from"./index-fdccee64.js";const n={colorBlack:" #040404",colorOrange:" #E6533C",colorOrange1:"#EF8964",colorBeige:"#EFA082",colorWhite:"#EFEDE8",colorSecondaryGreen:"#3CBF61",colorSecondaryRed:"#D80027",colorSecondaryGrey:"#303030"},d="/PowerPulse/assets/bgDesktop@1x-65809e4b.jpg",p="/PowerPulse/assets/bgDesktop@2x-ed7242a6.jpg",a="/PowerPulse/assets/bgTablet@1x-e78a8eb2.jpg",r="/PowerPulse/assets/bgTablet@2x-aedbf112.jpg",o="/PowerPulse/assets/bgMobile@1x-3af5d636.jpg",x="/PowerPulse/assets/bgMobile@2x-8a68f471.jpg",s=e.div`
  display: flex;

  @media screen and (min-width: 320px) {
    background-image: url(${o});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;
    width: 320px;
    height: 669px;

    @media screen and (min-device-pixel-radio: 2) and (min-width: 320px),
      screen and (min-resolution: 192dpi) and (min-width: 320px),
      screen and (min-resolution: 2dppx) and (min-width: 320px) {
      background-image: url(${x});
    }
  }

  @media screen and (min-width: 375px) {
    width: 446px;
    height: 669px;
    flex-shrink: 0;
  }

  @media screen and (min-width: 768px) {
    background-image: url(${a});
    width: 670px;
    height: 800px;
    background-position: right;
    position: relative;

    @media screen and (min-device-pixel-radio: 2) and (min-width: 768px),
      screen and (min-resolution: 192dpi) and (min-width: 768px),
      screen and (min-resolution: 2dppx) and (min-width: 768px) {
      background-image: url(${r});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${d});
    width: 670px;
    height: 800px;

    @media screen and (min-device-pixel-radio: 2) and (min-width: 1440px),
      screen and (min-resolution: 192dpi) and (min-width: 1440px),
      screen and (min-resolution: 2dppx) and (min-width: 1440px) {
      background-image: url(${p});
    }
  }
`,h=e.div`
  position: absolute;
  display: flex;
  width: 146px;
  height: 66px;
  background-color: ${n.colorSecondaryGrey};
  flex-shrink: 0;
  border-radius: 12px;
  padding: 14px 18px;
  margin-top: 383px;
  margin-left: 123px;

  @media screen and (min-width: 375px) {
    margin-left: 123px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 206px;
    height: 96px;
    padding: 20px 23px 20px 36px;
    margin-top: 512px;
    margin-left: 277px;
  }

  @media screen and (min-width: 1440px) {
    top: 47%;
    right: 70%;
    width: 206px;
    height: 96px;
    padding: 20px 23px 20px 36px;
    margin-top: 0;
    margin-left: 0;
  }
`,c=e.div`
  padding: 8px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: ${n.colorOrange1};
  margin-right: 8px;
  text-align: center;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    padding: 10px;
    margin-top: 8px;
  }

  @media screen and (min-width: 1440px) {
    width: 40px;
    height: 40px;
    margin-top: 8px;
    margin-right: 12px;
    padding: 10px;
  }
`,m=e.svg`
  width: 14px;
  height: 14px;
  fill: ${n.colorWhite};

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 20px;
    height: 20px;
  }
`,g=e.svg`
  @media screen and (min-width: 320px) {
    width: 12px;
    height: 12px;
    fill: ${n.colorWhite};
  }

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,l=e.p`
  margin-bottom: 8px;
  color: ${n.colorWhite};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`,w=e.p`
  color: rgba(239, 237, 232, 0.65);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`,f=e.div`
  @media screen and (min-width: 320px) {
    position: absolute;
    width: 100px;
    height: 76px;
    border-radius: 12px;
    background-color: ${n.colorOrange1};
    padding: 14px 18px;
    margin-top: 492px;
    margin-left: 200px;
  }

  @media screen and (min-width: 375px) {
    width: 119px;
    margin-top: 548px;
    margin-left: 253px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 180px;
    height: 110px;
    flex-shrink: 0;
    padding: 14px 28px 14px 38px;
    margin-top: 657px;
    margin-left: 480px;
  }

  @media screen and (min-width: 1440px) {
    top: 65%;
    right: 5%;
    width: 180px;
    height: 110px;
    margin-top: 0;
    margin-left: 0;
  }
`,b=e.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${n.colorBeige};
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,u=e.div`
  display: flex;
  align-items: baseline;
  gap: 11px;
`,j=e.p`
  color: ${n.colorWhite};
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -1px;
  text-transform: uppercase;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 50px;
  }

  @media screen and (min-width: 1440px) {
  }
`,k=e.span`
  color: rgba(239, 237, 232, 0.65);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
`,t="/PowerPulse/assets/sprite-d58fff67.svg",v=()=>i.jsxs(s,{children:[i.jsxs(h,{children:[i.jsx(c,{children:i.jsx(m,{children:i.jsx("use",{href:`${t}#icon-play`})})}),i.jsxs("div",{children:[i.jsx(l,{children:"350+"}),i.jsx(w,{children:"Video tutorial"})]})]}),i.jsxs(f,{children:[i.jsx(b,{children:i.jsx(g,{children:i.jsx("use",{href:`${t}#icon-running-stick-figure-svgrepo-com-1`})})}),i.jsxs(u,{children:[i.jsx(j,{children:"500"}),i.jsx(k,{children:"cal"})]})]})]});export{v as S,n as g,t as s};
