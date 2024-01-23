import{s as n,ac as c,j as e,ad as o,u as p,v as r,ae as d,af as l,ag as m,r as a,C as g,B as h,U as f,ah as u}from"./index-8d04d221.js";import{W as j}from"./ProductsPage.styled-fd43d82d.js";import{T as w}from"./TitlePage-21c5dfc1.js";const E=n.ul`
  display: flex;
  /* margin-top: 20px;
  margin-bottom: 40px; */
  gap: 10px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`,C=n(c)`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  word-wrap: break-word;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }

  @media (max-width: 374px) {
    font-size: 18px;
  }
`,b=()=>{const t=["Body parts","Muscles","Equipment"];return e.jsx(e.Fragment,{children:e.jsx(E,{children:t.map(s=>e.jsx("li",{children:e.jsx(C,{to:`/exercises/${s}`,children:s})},s))})})},y=o.div`
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
`;const k=()=>{const t=p(),s=r(d),x=r(l),{filter:i}=m();return a.useEffect(()=>{(async()=>{if(i===void 0)return console.log("something wrong");t(u({filter:i}))})()},[t,i]),e.jsx(j,{children:e.jsxs(g,{children:[e.jsxs(y,{children:[e.jsx(w,{title:"Exercises"}),e.jsx(b,{})]}),s&&!x&&e.jsx(h,{}),e.jsx(e.Fragment,{children:e.jsx(a.Suspense,{children:e.jsx(f,{})})})]})})};export{k as default};
