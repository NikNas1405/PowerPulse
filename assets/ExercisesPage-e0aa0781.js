import{s as x,ad as m,ae as l,af as p,j as e,ag as n,u as h,h as r,ah as u,ai as f,aj as j,r as c,C as E,ak as w,G as v,W as b,al as C}from"./index-265dd3f9.js";import{T as L}from"./TitlePage-ea193c90.js";const k=x.ul`
  display: flex;
  /* margin-top: 20px;
  margin-bottom: 40px; */
  gap: 10px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`,y=x(m)`
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
`,F=()=>{const t=["Body parts","Muscles","Equipment"],{filter:a}=l(),o=p(),s=a;return e.jsx(e.Fragment,{children:e.jsx(k,{children:t.map(i=>e.jsx("li",{children:e.jsx(y,{to:`/exercises/${i}`,state:{from:o},isactive:i===s?"true":"false",children:i})},i))})})},z=n.div`
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
`;const B=()=>{const t=h(),a=r(u),o=r(f),{filter:s,filterList:i}=l(),d=j(),g=p();return c.useEffect(()=>{(async()=>{if(s===void 0)return console.log("something wrong");t(C({filter:s}))})()},[t,s]),e.jsxs(E,{children:[g.pathname.includes(i)&&e.jsx("button",{onClick:()=>d(-1),children:"Back"}),e.jsxs(z,{children:[e.jsx(L,{title:i?w(i.split(" ")[0]):"Exercises"}),e.jsx(F,{})]}),a&&!o&&e.jsx(v,{}),e.jsx(e.Fragment,{children:e.jsx(c.Suspense,{children:e.jsx(b,{})})})]})};export{B as default};
