import{s as x,ac as p,ad as l,ae as d,j as e,af as o,u as g,v as n,ag as m,ah as h,r as c,C as f,ai as u,D as j,V as E,aj as w}from"./index-7273bd8a.js";import{T as v}from"./TitlePage-b42ae5a3.js";const b=x.ul`
  display: flex;
  /* margin-top: 20px;
  margin-bottom: 40px; */
  gap: 10px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`,C=x(p)`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  word-wrap: break-word;

  color: ${t=>t.isactive==="true"?"#EFEDE8":""};
  position: relative;

  &:after {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: ${t=>t.isactive==="true"?"4px":"0"};
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
`,L=()=>{const t=["Body parts","Muscles","Equipment"],{filter:a}=l(),r=d(),s=a;return e.jsx(e.Fragment,{children:e.jsx(b,{children:t.map(i=>e.jsx("li",{children:e.jsx(C,{to:`/exercises/${i}`,state:{from:r},isactive:i===s?"true":"false",children:i})},i))})})},y=o.div`
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
`;o.div`
  text-align: center;
`;o.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;const P=()=>{const t=g(),a=n(m),r=n(h),{filter:s,filterList:i}=l();return c.useEffect(()=>{(async()=>{if(s===void 0)return console.log("something wrong");t(w({filter:s}))})()},[t,s]),e.jsxs(f,{children:[e.jsxs(y,{children:[e.jsx(v,{title:i?u(i.split(" ")[0]):"Exercises"}),e.jsx(L,{})]}),a&&!r&&e.jsx(j,{}),e.jsx(e.Fragment,{children:e.jsx(c.Suspense,{children:e.jsx(E,{})})})]})};export{P as default};
