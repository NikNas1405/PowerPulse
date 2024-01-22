import{s as n,aa as c,j as e,ab as o,u as p,f as r,ac as d,ad as l,ae as m,r as a,C as g,A as h,S as f,af as u}from"./index-9f8b1d2a.js";import{W as j}from"./ProductsPage.styled-08820104.js";import{T as w}from"./TitlePage-48d3c212.js";const E=n.ul`
  display: flex;
  /* margin-top: 20px;
  margin-bottom: 40px; */
  gap: 10px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`,b=n(c)`
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
`,C=()=>{const t=["Body parts","Muscles","Equipment"];return e.jsx(e.Fragment,{children:e.jsx(E,{children:t.map(s=>e.jsx("li",{children:e.jsx(b,{to:`/exercises/${s}`,children:s})},s))})})},y=o.div`
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
`;const k=()=>{const t=p(),s=r(d),x=r(l),{filter:i}=m();return a.useEffect(()=>{(async()=>{if(i===void 0)return console.log("something wrong");t(u({filter:i}))})()},[t,i]),e.jsx(j,{children:e.jsxs(g,{children:[e.jsxs(y,{children:[e.jsx(w,{title:"Exercises"}),e.jsx(C,{})]}),s&&!x&&e.jsx(h,{}),e.jsx(e.Fragment,{children:e.jsx(a.Suspense,{children:e.jsx(f,{})})})]})})};export{k as default};
