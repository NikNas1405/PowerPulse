import{s as x,ac as p,ad as c,j as e,ae as a,u as l,v as o,af as d,ag as g,r as n,C as m,D as h,V as f,ah as u}from"./index-9915d8e8.js";import{T as E}from"./TitlePage-d0877b61.js";const j=x.ul`
  display: flex;
  /* margin-top: 20px;
  margin-bottom: 40px; */
  gap: 10px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`,w=x(p)`
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
`,v=()=>{const t=["Body parts","Muscles","Equipment"],{filter:s}=c(),r=s;return e.jsx(e.Fragment,{children:e.jsx(j,{children:t.map(i=>e.jsx("li",{children:e.jsx(w,{to:`/exercises/${i}`,isactive:i===r?"true":"false",children:i})},i))})})},b=a.div`
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
`;const L=()=>{const t=l(),s=o(d),r=o(g),{filter:i}=c();return n.useEffect(()=>{(async()=>{if(i===void 0)return console.log("something wrong");t(u({filter:i}))})()},[t,i]),e.jsxs(m,{children:[e.jsxs(b,{children:[e.jsx(E,{title:"Exercises"}),e.jsx(v,{})]}),s&&!r&&e.jsx(h,{}),e.jsx(e.Fragment,{children:e.jsx(n.Suspense,{children:e.jsx(f,{})})})]})};export{L as default};
