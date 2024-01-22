import{j as e,h as ie,s as t,g as i,r as C,a as s,u as A,e as S,i as te,k as R,N as _,m as ne,o as H,Q as G,C as oe,p as re}from"./index-6f2f4bbd.js";import{W as de,e as se,f as le,a as L,s as pe,b as he}from"./StyledDatepicker.styled-6e714a0e.js";import{T as ae}from"./TitlePage-0eeaab3c.js";import"./defineProperty-decf9c6f.js";const xe=({selectedDate:r,setSelectedDate:p,isOpen:l,onClose:d,setCurrentDate:n})=>{const h=f=>{p(f),n(f),d()};return e.jsxs(de,{children:[e.jsx(se,{selected:r,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:f=>f.substr(0,1),open:l,customInput:e.jsx("div",{style:{display:"none"}}),onChange:h}),e.jsx(ie,{})]})},ce=t.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,fe=t.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
`,me=t.p`
  font-size: 24px;
  line-height: 1.33;
  margin: 0;
  padding: 0;
  color: ${i.colorWhite};
  font-weight: 700;

  &:hover {
    color: ${i.colorOrange1};
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.1;
  }
`,we=t.svg`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,ge=t.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 40px;
  background-color: transparent;
  gap: 8px;
  border: none;
  @media screen and (max-width: 767px) {
    margin-right: 20px;
    gap: 6px;
  }
`,ye=t.button`
  display: flex;
  margin: 0 6px 0 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
`,B=t.svg`
  width: 100%;
  height: 100%;
  fill: ${i.colorWhite};
`,je=({currentDate:r,setCurrentDate:p})=>{const[l,d]=C.useState(r),[n,h]=C.useState(!1),f=()=>{h(!n)},w=()=>{const a=new Date(l);a.setDate(l.getDate()-1),p(a),d(a)},x=()=>{const a=new Date(l);a.setDate(l.getDate()+1),p(a),d(a)},g=()=>{h(!1)};return e.jsxs(ce,{children:[e.jsxs(ge,{onClick:f,children:[e.jsx(me,{children:le(l,"dd/MM/yyyy")}),e.jsx(we,{children:e.jsx("use",{href:s+"#icon-calendar"})})]}),e.jsx(ye,{type:"button",onClick:w,children:e.jsx(B,{children:e.jsx("use",{href:s+"#icon-chevron-left"})})}),e.jsx(fe,{type:"button",onClick:x,children:e.jsx(B,{children:e.jsx("use",{href:s+"#icon-chevron-right"})})}),e.jsx(xe,{selectedDate:l,setSelectedDate:d,isOpen:n,onClose:g,setCurrentDate:p})]})},U=t.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 16px;
  height: 335px;
  width: 100%;
  border: 1px solid #efede820;
  border-radius: 12px;
  background-color: #efede80d;

  @media (min-width: 768px) {
    gap: 16px;
    height: 236px;
    width: 704px;
  }

  @media (min-width: 1440px) {
    width: 826px;
  }

  @media screen and (max-width: 768px) {
    max-height: 335px;
  }
`,q=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,F=t.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,Y=t.div`
  &:hover span {
    color: ${i.colorOrange1};
  }
`,Q=t.span`
  color: ${i.colorOrange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,V=t.p`
  color: #efede84d;
  font-size: 14px;
  line-height: 1.2857;
  text-align: center;
  margin-top: 125px;

  @media (min-width: 768px) {
    margin-top: 65px;
    font-size: 16px;
    line-height: 1.5;
  }
`,T=t.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;

  @media screen and (min-width: 375px) {
    width: 297px;
  }

  @media screen and (min-width: 768px) {
    width: 656px;
    height: 234px;
  }

  @media screen and (min-width: 1440px) {
    width: 762px;
  }
`,O=t.div`
  overflow: auto;

  @media screen and (min-width: 768px) {
    height: 138px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: rgba(239, 237, 232, 0.1);
  }

  @media screen and (max-width: 768px) {
    height: 285px;
  }
`,ue=t.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,u=t.li`
  color: ${i.colorOrange1};
  font-size: 12px;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    &:first-of-type {
      width: 204px;
    }

    &:nth-of-type(2) {
      width: 128px;
    }

    &:nth-of-type(3) {
      width: 90px;
    }

    &:nth-of-type(4) {
      width: 90px;
    }

    &:nth-of-type(5) {
      width: 80px;
    }

    &:nth-of-type(6) {
      width: 20px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:first-of-type {
      width: 212px;
    }

    &:nth-of-type(2) {
      width: 166px;
    }

    &:nth-of-type(3) {
      width: 105px;
    }

    &:nth-of-type(4) {
      width: 105px;
    }

    &:nth-of-type(5) {
      width: 110px;
    }

    &:nth-of-type(6) {
      width: 20px;
    }
  }
`,N=t.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,m=t.li`
  @media screen and (max-width: 375px) {
    width: 100%;

    &:first-of-type {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }

    &:nth-of-type(3) {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(4) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }
  }

  @media screen and (min-width: 375px) {
    width: 290px;

    &:first-of-type {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }

    &:nth-of-type(3) {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(4) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }
  }
`,b=t.li`
  @media screen and (min-width: 768px) {
    color: ${i.colorWhite};
    border-radius: 12px;
    border: 1px solid ${i.colorInput};
    padding: 8px 14px;
    height: 38px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-size: 16px;
    line-height: 1.5;

    &:first-of-type {
      width: 204px;
    }

    &:nth-of-type(2) {
      width: 128px;
    }

    &:nth-of-type(3) {
      width: 90px;
    }

    &:nth-of-type(4) {
      width: 90px;
    }

    &:nth-of-type(5) {
      width: 80px;
    }

    &:nth-of-type(6) {
      width: 20px;
      border: none;
      padding: 0;
    }
  }

  @media screen and (min-width: 1440px) {
    &:first-of-type {
      width: 212px;
    }

    &:nth-of-type(2) {
      width: 166px;
    }

    &:nth-of-type(3) {
      width: 105px;
    }

    &:nth-of-type(4) {
      width: 105px;
    }

    &:nth-of-type(5) {
      width: 110px;
    }

    &:nth-of-type(6) {
      width: 20px;
    }
  }
`,J=t.div`
  /* @media screen and (min-width: 320px) {
    width: 100%;
  } */

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`,K=t.div`
  > li {
    /* @media screen and (min-width: 320px) {
      width: 100%;
    } */

    @media screen and (min-width: 375px) {
      width: 79px;
    }

    &:nth-of-type(1) {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(2) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 40px;
    }
  }
`,X=t.div`
  > li {
    /* @media screen and (min-width: 320px) {
      width: 100%;
    } */

    @media screen and (min-width: 375px) {
      width: 78px;
    }

    &:nth-of-type(1) {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(2) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`,Z=t.div`
  > li {
    /* @media screen and (min-width: 320px) {
      width: 100%;
    } */

    @media screen and (min-width: 375px) {
      width: 74px;
    }

    &:nth-of-type(1) {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(2) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`,ee=t.div`
  > li {
    /* @media screen and (min-width: 320px) {
      width: 100%;
    } */

    @media screen and (min-width: 375px) {
      width: 20px;
    }

    &:nth-of-type(1) {
      width: 20px;
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(2) {
      width: 20px;
      height: 38px;

      border: none;
      padding: 0;
      margin-top: 18px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`,W=t.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0;
  position: relative;
`,E=t.svg`
  stroke: ${i.colorOrange1};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`,P=t.span`
  @media screen and (min-width: 320px) {
    color: ${i.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,be=({productsArray:r,date:p})=>{const l=A(),n=S(te).blood,h=S(L),f=R("(max-width:768px)");let w,x;r&&(x=r.map(o=>o.productId.groupBloodNotAllowed[n])),x?w="Yes":w="No";const g=o=>o[0].toUpperCase()+o.slice(1).toLowerCase(),a=async o=>{try{await l(ne(o)),await l(H(p))}catch(k){G.error("Some error occured, try again",k)}};return e.jsxs(U,{children:[e.jsxs(q,{children:[e.jsx(F,{children:"Products"}),e.jsx(Y,{children:e.jsxs(_,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(Q,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:i.colorOrange},children:e.jsx("use",{href:s+"#icon-arrow"})})]})})]}),r&&r.length>0&&!h?f?e.jsx(T,{children:e.jsx(O,{children:r.map(o=>e.jsxs(N,{children:[e.jsx(m,{children:"Title"}),e.jsx(m,{children:g(o.productId.title)}),e.jsx(m,{children:"Category"}),e.jsx(m,{children:g(o.productId.category)}),e.jsxs(J,{children:[e.jsxs(K,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:"Calories"}),e.jsx(m,{children:o.calories})]}),e.jsxs(X,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:"Weight"}),e.jsx(m,{children:o.amount})]}),e.jsxs(Z,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:"Recommend"}),e.jsx(m,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:x?e.jsx("use",{href:s+"#icon-Ellipse-82",style:{fill:i.colorSecondaryGreen,stroke:i.colorSecondaryGreen}}):e.jsx("use",{href:s+"#icon-Ellipse-82",style:{fill:i.colorSecondaryRed,stroke:i.colorSecondaryRed}})}),e.jsx(P,{children:w})]})})]}),e.jsxs(ee,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:""}),e.jsx(m,{children:e.jsx(W,{type:"button",onClick:()=>a(o._id),children:e.jsx(E,{children:e.jsx("use",{href:s+"#icon-trash-03"})})})})]})]})]},o._id))})}):e.jsxs(T,{children:[e.jsxs(ue,{children:[e.jsx(u,{children:"Title"}),e.jsx(u,{children:"Category"}),e.jsx(u,{children:"Calories"}),e.jsx(u,{children:"Weight"}),e.jsx(u,{children:"Recommend"}),e.jsx(u,{children:""})]}),e.jsx(O,{children:r.map(o=>e.jsxs(N,{children:[e.jsx(b,{children:g(o.productId.title)}),e.jsx(b,{children:g(o.productId.category)}),e.jsx(b,{children:o.calories}),e.jsx(b,{children:o.amount}),e.jsx(b,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:x?e.jsx("use",{href:s+"#icon-Ellipse-82",style:{fill:i.colorSecondaryGreen,stroke:i.colorSecondaryGreen}}):e.jsx("use",{href:s+"#icon-Ellipse-82",style:{fill:i.colorSecondaryRed,stroke:i.colorSecondaryRed}})}),e.jsx(P,{children:w})]})}),e.jsx(b,{children:e.jsx(W,{type:"button",onClick:()=>a(o._id),children:e.jsx(E,{children:e.jsx("use",{href:s+"#icon-trash-03"})})})})]},o._id))})]}):e.jsx(V,{children:"Not found products"})]})},ve=t.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
    justify-content: start;
  }
`,y=t.li`
  color: ${i.colorOrange1};
  font-size: 12px;
  line-height: 1.5;
  display: block;

  @media screen and (min-width: 768px) {
    &:first-of-type {
      width: 90px;
    }

    &:nth-of-type(2) {
      width: 132px;
    }

    &:nth-of-type(3) {
      width: 128px;
    }

    &:nth-of-type(4) {
      width: 84px;
    }

    &:nth-of-type(5) {
      width: 78px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(6) {
      width: 32px;
    }

    &:nth-of-type(7) {
      width: 20px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:first-of-type {
      width: 115px;
    }

    &:nth-of-type(2) {
      width: 157px;
    }

    &:nth-of-type(3) {
      width: 131px;
    }

    &:nth-of-type(4) {
      width: 106px;
    }

    &:nth-of-type(5) {
      width: 91px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(6) {
      width: 82px;
    }

    &:nth-of-type(7) {
      width: 20px;
    }
  }
`,M=t.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,c=t.li`
  @media screen and (max-width: 375px) {
    width: 100%;

    &:first-of-type {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }

    &:nth-of-type(3) {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(4) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }

    &:nth-of-type(5) {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(6) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }
  }

  @media screen and (min-width: 375px) {
    width: 290px;

    &:first-of-type {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }

    &:nth-of-type(3) {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(4) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }

    &:nth-of-type(5) {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(6) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }
  }
`,j=t.li`
  @media screen and (min-width: 768px) {
    color: ${i.colorWhite};
    border-radius: 12px;
    border: 1px solid ${i.colorInput};
    padding: 8px 14px;
    height: 38px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-size: 16px;
    line-height: 1.5;

    &:first-of-type {
      width: 90px;
    }

    &:nth-of-type(2) {
      width: 132px;
    }

    &:nth-of-type(3) {
      width: 128px;
    }

    &:nth-of-type(4) {
      width: 84px;
    }

    &:nth-of-type(5) {
      width: 78px;
    }

    &:nth-of-type(6) {
      width: 72px;
    }

    &:nth-of-type(7) {
      width: 20px;
      border: none;
      padding: 0;
    }
  }

  @media screen and (min-width: 1440px) {
    &:first-of-type {
      width: 115px;
    }

    &:nth-of-type(2) {
      width: 157px;
    }

    &:nth-of-type(3) {
      width: 131px;
    }

    &:nth-of-type(4) {
      width: 106px;
    }

    &:nth-of-type(5) {
      width: 91px;
    }

    &:nth-of-type(6) {
      width: 82px;
    }

    &:nth-of-type(7) {
      width: 20px;
    }
  }
`,$e=({exercisesArray:r})=>{const p=R("(max-width:768px)"),l=S(L),d=n=>n[0].toUpperCase()+n.slice(1).toLowerCase();return e.jsxs(U,{children:[e.jsxs(q,{children:[e.jsx(F,{children:"Exercises"}),e.jsx(Y,{children:e.jsxs(_,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(Q,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:i.colorOrange},children:e.jsx("use",{href:s+"#icon-arrow"})})]})})]}),r&&r.length>0&&!l?p?e.jsx(T,{children:e.jsx(O,{children:r.map(n=>e.jsxs(M,{children:[e.jsx(c,{children:"Body Part"}),e.jsx(c,{children:d(n.exerciseId.bodyPart)}),e.jsx(c,{children:"Equipment"}),e.jsx(c,{children:d(n.exerciseId.equipment)}),e.jsx(c,{children:"Name"}),e.jsx(c,{children:d(n.exerciseId.name)}),e.jsxs(J,{children:[e.jsxs(K,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(c,{children:"Target"}),e.jsx(c,{children:d(n.exerciseId.target)})]}),e.jsxs(X,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(c,{children:"Burned Calories"}),e.jsx(c,{children:n.exerciseId.burnedCalories})]}),e.jsxs(Z,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(c,{children:"Time"}),e.jsx(c,{children:n.time})]}),e.jsxs(ee,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(c,{children:""}),e.jsx(c,{children:e.jsx(W,{type:"button",onClick:()=>handleDelete(n._id),children:e.jsx(E,{children:e.jsx("use",{href:s+"#icon-trash-03"})})})})]})]})]},n._id))})}):e.jsxs(T,{children:[e.jsxs(ve,{children:[e.jsx(y,{children:"Body Part"}),e.jsx(y,{children:"Equipment"}),e.jsx(y,{children:"Name"}),e.jsx(y,{children:"Target"}),e.jsx(y,{children:"Burned Calories"}),e.jsx(y,{children:"Time"}),e.jsx(y,{children:""})]}),e.jsx(O,{children:r.map(n=>e.jsxs(M,{children:[e.jsx(j,{children:d(n.exerciseId.bodyPart)}),e.jsx(j,{children:d(n.exerciseId.equipment)}),e.jsx(j,{children:d(n.exerciseId.name)}),e.jsx(j,{children:d(n.exerciseId.target)}),e.jsx(j,{children:n.exerciseId.burnedCalories}),e.jsx(j,{children:n.time}),e.jsx(j,{children:e.jsx(W,{type:"button",onClick:()=>handleDelete(n._id),children:e.jsx(E,{children:e.jsx("use",{href:s+"#icon-trash-03"})})})})]},n._id))})]}):e.jsx(V,{children:"Not found exercises"})]})},Ie=t.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,De=t.ul`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 13px;
  row-gap: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    gap: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 252px;
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
  }

  > li {
    &:nth-child(1) {
      background-color: ${i.colorOrange};
    }

    &:nth-child(2) {
      background-color: ${i.colorOrange};
    }
  }
`,v=t.li`
  display: block;
  width: 157px;
  padding: 14px;
  background-color: ${i.colorDiaryItem};
  border-radius: 12px;
  border: 1px solid #efede833;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
    height: 96px;
    :not(:last-of-type) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 18px;
  }

  &.redBg {
    border: 1px solid #e9101d;
  }

  &.greenBg {
    border: 1px solid #3cbf61;
  }
`,$=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,I=t.h2`
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`,D=t.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,ze=t.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Ce=t.div`
  width: 24px;
  height: 24px;
  background-color: ${i.colorBeige};
  border-radius: 50%;
`,z=t.svg`
  width: 20px;
  height: 20px;
  fill: ${i.colorOrange1};
`,Se=t.svg`
  width: 24px;
  height: 24px;
`,ke=t.p`
  font-size: 14px;
  line-height: 18px;
  color: ${i.colorInput};

  @media screen and (max-width: 374px) {
    max-width: calc(100% - 72px);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Te=({userDiaryInformation:r})=>{const{burnedCalories:p,caloriesIntake:l,consumedCalories:d,remainingCalories:n,remainingSports:h}=r,[f,w]=C.useState(!1),x=S(L);return C.useEffect(()=>{n<0&&w(!0)},[n]),e.jsxs(Ie,{children:[e.jsxs(De,{children:[e.jsxs(v,{children:[e.jsxs($,{children:[e.jsx(z,{children:e.jsx("use",{href:s+"#icon-fluent_food-24-filled"})}),e.jsx(I,{children:"Daily calory intake"})]}),e.jsx(D,{children:l&&!x?l:0})]}),e.jsxs(v,{children:[e.jsxs($,{children:[e.jsx(z,{children:e.jsx("use",{href:s+"#icon-dumbbell"})}),e.jsx(I,{children:"Daily norm of sports"})]}),e.jsx(D,{children:"110 min"})]}),e.jsxs(v,{children:[e.jsxs($,{children:[e.jsx(z,{children:e.jsx("use",{href:s+"#icon-fluent_food-apple-20-filled"})}),e.jsx(I,{children:"Calories consumed"})]}),e.jsx(D,{children:d&&!x?d:0})]}),e.jsxs(v,{children:[e.jsxs($,{children:[e.jsx(z,{children:e.jsx("use",{href:s+"#icon-calories-1"})}),e.jsx(I,{children:"Calories burned"})]}),e.jsx(D,{children:p&&!x?p:0})]}),e.jsxs(v,{className:f?"redBg":"",children:[e.jsxs($,{children:[e.jsx(z,{children:e.jsx("use",{href:s+"#icon-bubble"})}),e.jsx(I,{children:"The rest of the calories"})]}),e.jsx(D,{children:n&&!x?n:0})]}),e.jsxs(v,{className:f?"greenBg":"",children:[e.jsxs($,{children:[e.jsx(z,{children:e.jsx("use",{href:s+"#icon-running-figure"})}),e.jsx(I,{children:"The rest of sports"})]}),e.jsxs(D,{children:[h&&!x?h:110," min"]})]})]}),e.jsxs(ze,{children:[e.jsx(Ce,{children:e.jsx(Se,{children:e.jsx("use",{href:s+"#icon-running-stick-figure-svgrepo-com-1"})})}),e.jsx(ke,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},Oe=t.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,We=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,Ee=t.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
    width: 826px;
  }
`,Le=t.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Ae=()=>{const r=A(),p=S(pe),l=S(he),{addProducts:d,addExercises:n}=p,[h,f]=C.useState(new Date),w=String(h.getDate()).padStart(2,"0"),x=String(h.getMonth()+1).padStart(2,"0"),g=h.getFullYear(),a=`${w}-${x}-${g}`;return C.useEffect(()=>{(async()=>{try{await r(H(a))}catch(k){G.error("Error fetching data:",k),console.error("Error fetching data:",k)}})()},[r,a,h]),e.jsx(oe,{children:l?e.jsx(re,{}):e.jsxs(Oe,{children:[e.jsxs(We,{children:[e.jsx(ae,{title:"Diary"}),e.jsx(je,{currentDate:h,setCurrentDate:f})]}),e.jsxs(Le,{children:[e.jsx(Te,{userDiaryInformation:p}),e.jsxs(Ee,{children:[e.jsx(be,{productsArray:d,date:a}),e.jsx($e,{exercisesArray:n,date:a})]})]})]})})};export{Ae as default};
