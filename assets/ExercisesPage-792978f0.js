import{H as x,u as p,e as i,I as g,j as e,J as d,s as l,K as j,P as u,R as h,r as m,S as f}from"./index-e28c5d61.js";const y=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,b=x.div`
  text-align: center;
`,n=Object.freeze({bodyParts:"Body parts",muscles:"Muscles",equipment:"Equipment"}),C=()=>{const t=p(),s=i(g),r=c=>{t(s!==c?d(c):d(""))};return console.log(s),e.jsxs("div",{children:[e.jsx("button",{selected:s===n.bodyParts,onClick:()=>r(n.bodyParts),children:"Body Parts"}),e.jsx("button",{selected:s===n.muscles,onClick:()=>r(n.muscles),children:"Muscles"}),e.jsx("button",{selected:s===n.equipment,onClick:()=>r(n.equipment),children:"Equipment"})]})},E=l.div`
  /* display: flex; */
  align-items: center;
  gap: 10px;
  margin: 10px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px;
`,v=l.div`
  display: flex;
  flex-wrap: wrap;
  /* max-height: 40px; */
  width: 1440px;
  /* justify-content: flex-start; */
  margin: 10px;
`,k=l.div`
  width: 230px;
  height: 206px;
  gap: 10px;
  margin: 10px;
  border-radius: 5px;
`,q=({category:{filter:t,name:s,imgURL:r}})=>e.jsx("div",{children:e.jsxs(k,{style:{backgroundImage:`url(${r})`,backgroundSize:"cover"},children:[e.jsxs("p",{children:["Filter: ",t]}),e.jsxs("p",{children:["Name: ",s]})]})}),F=()=>{const t=i(j),s=i(u),r=i(h),c=i(g),o=t.filter(a=>a.filter.toLowerCase()===c.toLowerCase());return console.log(o),e.jsxs("div",{children:[s&&!r&&e.jsx("b",{children:"Request in progress..."}),t?e.jsx(v,{children:o.map(a=>e.jsx(E,{children:e.jsx(q,{category:a})},a._id))}):e.jsx("p",{children:"you do not have any exersise category"})]})},P=()=>{const t=p(),s=i(u),r=i(h);return m.useEffect(()=>{(async()=>{try{t(f())}catch(o){console.log(o.message)}})()},[t]),e.jsx(y,{children:e.jsxs(b,{children:[e.jsx("p",{children:"Exercises"}),e.jsx(C,{}),s&&!r&&e.jsx("b",{children:"Request in progress..."}),e.jsx(F,{})]})})};export{P as default};
