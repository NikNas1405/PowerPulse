import{s as o,ac as c,j as e,ad as a,u as p,v as n,ae as d,af as l,ag as g,r,C as m,D as h,V as f,ah as u}from"./index-7f3172e5.js";import{T as j}from"./TitlePage-5bfe33a1.js";const w=o.ul`
  display: flex;
  /* margin-top: 20px;
  margin-bottom: 40px; */
  gap: 10px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`,E=o(c)`
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
`,C=()=>{const i=["Body parts","Muscles","Equipment"];return e.jsx(e.Fragment,{children:e.jsx(w,{children:i.map(s=>e.jsx("li",{children:e.jsx(E,{to:`/exercises/${s}`,children:s})},s))})})},b=a.div`
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
`;a.div`
  text-align: center;
`;a.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;const F=()=>{const i=p(),s=n(d),x=n(l),{filter:t}=g();return r.useEffect(()=>{(async()=>{if(t===void 0)return console.log("something wrong");i(u({filter:t}))})()},[i,t]),e.jsxs(m,{children:[e.jsxs(b,{children:[e.jsx(j,{title:"Exercises"}),e.jsx(C,{})]}),s&&!x&&e.jsx(h,{}),e.jsx(e.Fragment,{children:e.jsx(r.Suspense,{children:e.jsx(f,{})})})]})};export{F as default};
