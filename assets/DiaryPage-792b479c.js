import{s as t,g as i,j as e,k as ie,r as C,a as d,u as A,c as k,m as te,o as R,N as _,p as ne,q as H,Q as Y,C as oe,t as re}from"./index-e1f11fe6.js";import{e as de,f as se,a as E,s as le,b as pe}from"./react-datepicker-cssmodules-3de503dc.js";import{T as ae}from"./TitlePage-f7d596d8.js";import"./defineProperty-d07b8cce.js";const he=t.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,xe=t.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
`,ce=t.p`
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
`,fe=t.svg`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,me=t.button`
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
`,ge=t.button`
  display: flex;
  margin: 0 6px 0 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
`,N=t.svg`
  width: 100%;
  height: 100%;
  fill: ${i.colorWhite};
`,we=t.div`
  position: absolute;
  left: -50%;
  top: 90%;
  transform: translate(0%, 0%);
  z-index: 999;
`;t.button`
  width: 195px;
  color: #ffffff;
  background: inherit;
  border-radius: 8px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  padding: 8px 12px;
  font-size: 16px;
  justify-content: space-around;
  align-items: center;
`;const ye=({selectedDate:s,setSelectedDate:a,isOpen:l,onClose:r,setCurrentDate:n})=>{const h=c=>{a(c),n(c),r()};return e.jsxs(we,{children:[e.jsx(de,{selected:s,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:c=>c.substr(0,1),open:l,customInput:e.jsx("div",{style:{display:"none"}}),onChange:h}),e.jsx(ie,{})]})},je=({currentDate:s,setCurrentDate:a})=>{const[l,r]=C.useState(s),[n,h]=C.useState(!1),c=()=>{h(!n)},m=()=>{const o=new Date(l);o.setDate(l.getDate()-1),a(o),r(o)},p=()=>{const o=new Date(l);o.setDate(l.getDate()+1),a(o),r(o)},y=()=>{h(!1)};return e.jsxs(he,{children:[e.jsxs(me,{onClick:c,children:[e.jsx(ce,{children:se(l,"dd/MM/yyyy")}),e.jsx(fe,{children:e.jsx("use",{href:d+"#icon-calendar"})})]}),e.jsx(ge,{type:"button",onClick:m,children:e.jsx(N,{children:e.jsx("use",{href:d+"#icon-chevron-left"})})}),e.jsx(xe,{type:"button",onClick:p,children:e.jsx(N,{children:e.jsx("use",{href:d+"#icon-chevron-right"})})}),e.jsx(ye,{selectedDate:l,setSelectedDate:r,isOpen:n,onClose:y,setCurrentDate:a})]})},q=t.div`
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
`,G=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,U=t.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,F=t.div`
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
`,S=t.div`
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
`,T=t.div`
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
`,B=t.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,f=t.li`
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
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`,K=t.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

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

    @media screen and (min-width: 375px) {
      width: 79px;

      &:nth-of-type(2) {
        margin-bottom: 40px;
      }
    }
  }
`,X=t.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

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

    @media screen and (min-width: 375px) {
      width: 78px;
    }
  }
`,Z=t.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

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

    @media screen and (min-width: 375px) {
      width: 74px;
    }
  }
`,ee=t.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        display: none;
      }

      &:nth-of-type(2) {
        height: 38px;
        border: none;
        padding: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

    }

    @media screen and (min-width: 375px) {
      width: 20px;

      &:nth-of-type(1) {
        display: block;
        color: ${i.colorOrange1};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        margin-top: 18px;
      }
    }
  }
`,O=t.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0;
  position: relative;
`,W=t.svg`
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
`,be=({productsArray:s,date:a})=>{const l=A(),n=k(te).blood,h=k(E),c=R("(max-width:768px)"),m=o=>o[0].toUpperCase()+o.slice(1).toLowerCase();let p;const y=async o=>{try{await l(ne(o)),await l(H(a))}catch(j){Y.error("Some error occured, try again",j)}};return e.jsxs(q,{children:[e.jsxs(G,{children:[e.jsx(U,{children:"Products"}),e.jsx(F,{children:e.jsxs(_,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(Q,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:i.colorOrange},children:e.jsx("use",{href:d+"#icon-arrow"})})]})})]}),s&&s.length>0&&!h?c?e.jsx(S,{children:e.jsx(T,{children:s.map(o=>{const j=o.productId.groupBloodNotAllowed[n]?p="Yes":p="No";return e.jsxs(B,{children:[e.jsx(f,{children:"Title"}),e.jsx(f,{children:m(o.productId.title)}),e.jsx(f,{children:"Category"}),e.jsx(f,{children:m(o.productId.category)}),e.jsxs(J,{children:[e.jsxs(K,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:"Calories"}),e.jsx(f,{children:o.calories})]}),e.jsxs(X,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:"Weight"}),e.jsx(f,{children:o.amount})]}),e.jsxs(Z,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:"Recommend"}),e.jsx(f,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:j==="Yes"?e.jsx("use",{href:d+"#icon-Ellipse-82",style:{fill:i.colorSecondaryGreen,stroke:i.colorSecondaryGreen}}):e.jsx("use",{href:d+"#icon-Ellipse-82",style:{fill:i.colorSecondaryRed,stroke:i.colorSecondaryRed}})}),e.jsx(P,{children:p})]})})]}),e.jsxs(ee,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:""}),e.jsx(f,{children:e.jsx(O,{type:"button",onClick:()=>y(o._id),children:e.jsx(W,{children:e.jsx("use",{href:d+"#icon-trash-03"})})})})]})]})]},o._id)})})}):e.jsxs(S,{children:[e.jsxs(ue,{children:[e.jsx(u,{children:"Title"}),e.jsx(u,{children:"Category"}),e.jsx(u,{children:"Calories"}),e.jsx(u,{children:"Weight"}),e.jsx(u,{children:"Recommend"}),e.jsx(u,{children:""})]}),e.jsx(T,{children:s.map(o=>{const j=o.productId.groupBloodNotAllowed[n]?p="Yes":p="No";return e.jsxs(B,{children:[e.jsx(b,{children:m(o.productId.title)}),e.jsx(b,{children:m(o.productId.category)}),e.jsx(b,{children:o.calories}),e.jsx(b,{children:o.amount}),e.jsx(b,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:j==="Yes"?e.jsx("use",{href:d+"#icon-Ellipse-82",style:{fill:i.colorSecondaryGreen,stroke:i.colorSecondaryGreen}}):e.jsx("use",{href:d+"#icon-Ellipse-82",style:{fill:i.colorSecondaryRed,stroke:i.colorSecondaryRed}})}),e.jsx(P,{children:p})]})}),e.jsx(b,{children:e.jsx(O,{type:"button",onClick:()=>y(o._id),children:e.jsx(W,{children:e.jsx("use",{href:d+"#icon-trash-03"})})})})]},o._id)})})]}):e.jsx(V,{children:"Not found products"})]})},ve=t.ul`
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
`,g=t.li`
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
`,x=t.li`
  @media screen and (max-width: 375px) {
    width: 100%;
    margin-bottom: 8px;

    &:first-of-type {
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

    &:nth-of-type(3) {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
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
    }

    &:nth-of-type(5) {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
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
`,w=t.li`
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
`,$e=({exercisesArray:s})=>{const a=R("(max-width:768px)"),l=k(E),r=n=>n[0].toUpperCase()+n.slice(1).toLowerCase();return e.jsxs(q,{children:[e.jsxs(G,{children:[e.jsx(U,{children:"Exercises"}),e.jsx(F,{children:e.jsxs(_,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(Q,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:i.colorOrange},children:e.jsx("use",{href:d+"#icon-arrow"})})]})})]}),s&&s.length>0&&!l?a?e.jsx(S,{children:e.jsx(T,{children:s.map(n=>e.jsxs(M,{children:[e.jsx(x,{children:"Body Part"}),e.jsx(x,{children:r(n.exerciseId.bodyPart)}),e.jsx(x,{children:"Equipment"}),e.jsx(x,{children:r(n.exerciseId.equipment)}),e.jsx(x,{children:"Name"}),e.jsx(x,{children:r(n.exerciseId.name)}),e.jsxs(J,{children:[e.jsxs(K,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(x,{children:"Target"}),e.jsx(x,{children:r(n.exerciseId.target)})]}),e.jsxs(X,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(x,{children:"Burned Calories"}),e.jsx(x,{children:n.exerciseId.burnedCalories})]}),e.jsxs(Z,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(x,{children:"Time"}),e.jsx(x,{children:n.time})]}),e.jsxs(ee,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(x,{children:""}),e.jsx(x,{children:e.jsx(O,{type:"button",onClick:()=>handleDelete(n._id),children:e.jsx(W,{children:e.jsx("use",{href:d+"#icon-trash-03"})})})})]})]})]},n._id))})}):e.jsxs(S,{children:[e.jsxs(ve,{children:[e.jsx(g,{children:"Body Part"}),e.jsx(g,{children:"Equipment"}),e.jsx(g,{children:"Name"}),e.jsx(g,{children:"Target"}),e.jsx(g,{children:"Burned Calories"}),e.jsx(g,{children:"Time"}),e.jsx(g,{children:""})]}),e.jsx(T,{children:s.map(n=>e.jsxs(M,{children:[e.jsx(w,{children:r(n.exerciseId.bodyPart)}),e.jsx(w,{children:r(n.exerciseId.equipment)}),e.jsx(w,{children:r(n.exerciseId.name)}),e.jsx(w,{children:r(n.exerciseId.target)}),e.jsx(w,{children:n.exerciseId.burnedCalories}),e.jsx(w,{children:n.time}),e.jsx(w,{children:e.jsx(O,{type:"button",onClick:()=>handleDelete(n._id),children:e.jsx(W,{children:e.jsx("use",{href:d+"#icon-trash-03"})})})})]},n._id))})]}):e.jsx(V,{children:"Not found exercises"})]})},Ie=t.div`
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
`,ke=t.svg`
  width: 24px;
  height: 24px;
`,Se=t.p`
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
`,Te=({userDiaryInformation:s})=>{const{burnedCalories:a,caloriesIntake:l,consumedCalories:r,remainingCalories:n,remainingSports:h}=s,[c,m]=C.useState(!1),p=k(E);return C.useEffect(()=>{n<0&&m(!0)},[n]),e.jsxs(Ie,{children:[e.jsxs(De,{children:[e.jsxs(v,{children:[e.jsxs($,{children:[e.jsx(z,{children:e.jsx("use",{href:d+"#icon-fluent_food-24-filled"})}),e.jsx(I,{children:"Daily calory intake"})]}),e.jsx(D,{children:l&&!p?l:0})]}),e.jsxs(v,{children:[e.jsxs($,{children:[e.jsx(z,{children:e.jsx("use",{href:d+"#icon-dumbbell"})}),e.jsx(I,{children:"Daily norm of sports"})]}),e.jsx(D,{children:"110 min"})]}),e.jsxs(v,{children:[e.jsxs($,{children:[e.jsx(z,{children:e.jsx("use",{href:d+"#icon-fluent_food-apple-20-filled"})}),e.jsx(I,{children:"Calories consumed"})]}),e.jsx(D,{children:r&&!p?r:0})]}),e.jsxs(v,{children:[e.jsxs($,{children:[e.jsx(z,{children:e.jsx("use",{href:d+"#icon-calories-1"})}),e.jsx(I,{children:"Calories burned"})]}),e.jsx(D,{children:a&&!p?a:0})]}),e.jsxs(v,{className:c?"redBg":"",children:[e.jsxs($,{children:[e.jsx(z,{children:e.jsx("use",{href:d+"#icon-bubble"})}),e.jsx(I,{children:"The rest of the calories"})]}),e.jsx(D,{children:n&&!p?n:0})]}),e.jsxs(v,{className:c?"greenBg":"",children:[e.jsxs($,{children:[e.jsx(z,{children:e.jsx("use",{href:d+"#icon-running-figure"})}),e.jsx(I,{children:"The rest of sports"})]}),e.jsxs(D,{children:[h&&!p?h:110," min"]})]})]}),e.jsxs(ze,{children:[e.jsx(Ce,{children:e.jsx(ke,{children:e.jsx("use",{href:d+"#icon-running-stick-figure-svgrepo-com-1"})})}),e.jsx(Se,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},Oe=t.div`
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
`,Ae=()=>{const s=A(),a=k(le),l=k(pe),{addProducts:r,addExercises:n}=a,[h,c]=C.useState(new Date),m=String(h.getDate()).padStart(2,"0"),p=String(h.getMonth()+1).padStart(2,"0"),y=h.getFullYear(),o=`${m}-${p}-${y}`;return C.useEffect(()=>{(async()=>{try{await s(H(o))}catch(L){Y.error("Error fetching data:",L),console.error("Error fetching data:",L)}})()},[s,o,h]),e.jsx(oe,{children:l?e.jsx(re,{}):e.jsxs(Oe,{children:[e.jsxs(We,{children:[e.jsx(ae,{title:"Diary"}),e.jsx(je,{currentDate:h,setCurrentDate:c})]}),e.jsxs(Le,{children:[e.jsx(Te,{userDiaryInformation:a}),e.jsxs(Ee,{children:[e.jsx(be,{productsArray:r,date:o}),e.jsx($e,{exercisesArray:n,date:o})]})]})]})})};export{Ae as default};
