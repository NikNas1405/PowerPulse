import{d as s,c as t,Q as o,A as i,s as c,g as n,j as d}from"./index-ad0607ca.js";const h=s("user/diary/products/addDiaryProducts",async(r,e)=>{try{const a=await t.post("/diary/products",r);return console.log(a.data),a.data}catch(a){return console.log(a),o.error(`${a.message}`),e.rejectWithValue(a.message)}});t.defaults.baseURL="https://powerpulserver.onrender.com/api";const u=()=>async r=>{try{const e=await t.get("user/diary/:data");r(i(e.data))}catch(e){console.error("Error fetching diary data:",e)}},p=c.h1`
  color: ${n.colorWhite};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.167;
  word-wrap: break-word;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 1.375;
  }

  @media (max-width: 374px) {
    font-size: 18px;
  }
`,y=({title:r})=>d.jsx(p,{children:r});export{y as T,h as a,u as f};
