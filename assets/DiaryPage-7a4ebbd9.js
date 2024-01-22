import{s as i,g as t,j as e,k as se,Q as N,r as k,a as d,u as _,c as u,m as H,o as Y,N as U,p as de,q,C as le,t as pe}from"./index-fdcd161c.js";import{e as ae,f as he,a as B,s as xe,b as ce}from"./react-datepicker-cssmodules-74a423ff.js";import{T as fe}from"./TitlePage-debb18c8.js";import"./defineProperty-f5145525.js";const ge=i.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,me=i.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
`,we=i.p`
  font-size: 24px;
  line-height: 1.33;
  margin: 0;
  padding: 0;
  color: ${t.colorWhite};
  font-weight: 700;

  &:hover {
    color: ${t.colorOrange1};
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.1;
  }
`,ye=i.svg`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,je=i.button`
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
`,ue=i.button`
  display: flex;
  margin: 0 6px 0 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
`,M=i.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
`,be=i.div`
  position: absolute;
  left: -50%;
  top: 90%;
  transform: translate(0%, 0%);
  z-index: 999;
`;i.button`
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
`;const ve=({selectedDate:l,setSelectedDate:a,isOpen:h,onClose:s,setCurrentDate:n,userDateRegistration:c})=>{const m=r=>{const f=new Date(r),o=String(f.getDate()).padStart(2,"0"),p=String(f.getMonth()+1).padStart(2,"0"),O=f.getFullYear();return`${o}-${p}-${O}`},w=r=>{m(r)>=c?(a(r),n(r),s()):N.warning("Selected date cannot be earlier than the registration date.")};return e.jsxs(be,{children:[e.jsx(ae,{selected:l,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:r=>r.substr(0,1),open:h,customInput:e.jsx("div",{style:{display:"none"}}),onChange:w}),e.jsx(se,{})]})},$e=({currentDate:l,setCurrentDate:a,userDateRegistration:h})=>{const[s,n]=k.useState(l),[c,m]=k.useState(!1),w=()=>{m(!c)},r=()=>{const p=new Date(s);p<h&&(p.setDate(s.getDate()-1),a(p),n(p))},f=()=>{const p=new Date(s);p.setDate(s.getDate()+1),a(p),n(p)},o=()=>{m(!1)};return e.jsxs(ge,{children:[e.jsxs(je,{onClick:w,children:[e.jsx(we,{children:he(s,"dd/MM/yyyy")}),e.jsx(ye,{children:e.jsx("use",{href:d+"#icon-calendar"})})]}),e.jsx(ue,{type:"button",onClick:r,children:e.jsx(M,{children:e.jsx("use",{href:d+"#icon-chevron-left"})})}),e.jsx(me,{type:"button",onClick:f,children:e.jsx(M,{children:e.jsx("use",{href:d+"#icon-chevron-right"})})}),e.jsx(ve,{selectedDate:s,setSelectedDate:n,isOpen:c,onClose:o,setCurrentDate:a,userDateRegistration:h})]})},F=i.div`
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
`,G=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Q=i.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,V=i.div`
  &:hover span {
    color: ${t.colorOrange1};
  }
`,J=i.span`
  color: ${t.colorOrange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,K=i.p`
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
`,T=i.div`
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
`,W=i.div`
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
`,De=i.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,v=i.li`
  color: ${t.colorOrange1};
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
`,P=i.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,g=i.li`
  @media screen and (max-width: 375px) {
    width: 100%;

    &:first-of-type {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${t.colorWhite};
      border-radius: 12px;
      border: 1px solid ${t.colorInput};
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
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(4) {
      color: ${t.colorWhite};
      border-radius: 12px;
      border: 1px solid ${t.colorInput};
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
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${t.colorWhite};
      border-radius: 12px;
      border: 1px solid ${t.colorInput};
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
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(4) {
      color: ${t.colorWhite};
      border-radius: 12px;
      border: 1px solid ${t.colorInput};
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
`,$=i.li`
  @media screen and (min-width: 768px) {
    color: ${t.colorWhite};
    border-radius: 12px;
    border: 1px solid ${t.colorInput};
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
`,X=i.div`
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`,Z=i.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        color: ${t.colorOrange1};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${t.colorWhite};
        border-radius: 12px;
        border: 1px solid ${t.colorInput};
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
`,ee=i.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        color: ${t.colorOrange1};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${t.colorWhite};
        border-radius: 12px;
        border: 1px solid ${t.colorInput};
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
`,te=i.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        color: ${t.colorOrange1};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${t.colorWhite};
        border-radius: 12px;
        border: 1px solid ${t.colorInput};
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
`,ie=i.div`
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
        color: ${t.colorOrange1};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        margin-top: 18px;
      }
    }
  }
`,E=i.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0;
  position: relative;
`,L=i.svg`
  stroke: ${t.colorOrange1};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`,A=i.span`
  @media screen and (min-width: 320px) {
    color: ${t.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Ie=({productsArray:l,date:a})=>{const h=_(),n=u(H).blood,c=u(B),m=Y("(max-width:768px)"),w=o=>o[0].toUpperCase()+o.slice(1).toLowerCase();let r;const f=async o=>{try{await h(de(o)),await h(q(a))}catch(p){N.error("Some error occured, try again",p)}};return e.jsxs(F,{children:[e.jsxs(G,{children:[e.jsx(Q,{children:"Products"}),e.jsx(V,{children:e.jsxs(U,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(J,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:d+"#icon-arrow"})})]})})]}),l&&l.length>0&&!c?m?e.jsx(T,{children:e.jsx(W,{children:l.map(o=>{const p=o.productId.groupBloodNotAllowed[n]?r="Yes":r="No";return e.jsxs(P,{children:[e.jsx(g,{children:"Title"}),e.jsx(g,{children:w(o.productId.title)}),e.jsx(g,{children:"Category"}),e.jsx(g,{children:w(o.productId.category)}),e.jsxs(X,{children:[e.jsxs(Z,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(g,{children:"Calories"}),e.jsx(g,{children:o.calories})]}),e.jsxs(ee,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(g,{children:"Weight"}),e.jsx(g,{children:o.amount})]}),e.jsxs(te,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(g,{children:"Recommend"}),e.jsx(g,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:p==="Yes"?e.jsx("use",{href:d+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:d+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(A,{children:r})]})})]}),e.jsxs(ie,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(g,{children:""}),e.jsx(g,{children:e.jsx(E,{type:"button",onClick:()=>f(o._id),children:e.jsx(L,{children:e.jsx("use",{href:d+"#icon-trash-03"})})})})]})]})]},o._id)})})}):e.jsxs(T,{children:[e.jsxs(De,{children:[e.jsx(v,{children:"Title"}),e.jsx(v,{children:"Category"}),e.jsx(v,{children:"Calories"}),e.jsx(v,{children:"Weight"}),e.jsx(v,{children:"Recommend"}),e.jsx(v,{children:""})]}),e.jsx(W,{children:l.map(o=>{const p=o.productId.groupBloodNotAllowed[n]?r="Yes":r="No";return e.jsxs(P,{children:[e.jsx($,{children:w(o.productId.title)}),e.jsx($,{children:w(o.productId.category)}),e.jsx($,{children:o.calories}),e.jsx($,{children:o.amount}),e.jsx($,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:p==="Yes"?e.jsx("use",{href:d+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:d+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(A,{children:r})]})}),e.jsx($,{children:e.jsx(E,{type:"button",onClick:()=>f(o._id),children:e.jsx(L,{children:e.jsx("use",{href:d+"#icon-trash-03"})})})})]},o._id)})})]}):e.jsx(K,{children:"Not found products"})]})},ze=i.ul`
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
`,y=i.li`
  color: ${t.colorOrange1};
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
`,R=i.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,x=i.li`
  @media screen and (max-width: 375px) {
    width: 100%;
    margin-bottom: 8px;

    &:first-of-type {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(2) {
      color: ${t.colorWhite};
      border-radius: 12px;
      border: 1px solid ${t.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(3) {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(4) {
      color: ${t.colorWhite};
      border-radius: 12px;
      border: 1px solid ${t.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(5) {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(6) {
      color: ${t.colorWhite};
      border-radius: 12px;
      border: 1px solid ${t.colorInput};
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
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${t.colorWhite};
      border-radius: 12px;
      border: 1px solid ${t.colorInput};
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
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(4) {
      color: ${t.colorWhite};
      border-radius: 12px;
      border: 1px solid ${t.colorInput};
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
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(6) {
      color: ${t.colorWhite};
      border-radius: 12px;
      border: 1px solid ${t.colorInput};
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
`,j=i.li`
  @media screen and (min-width: 768px) {
    color: ${t.colorWhite};
    border-radius: 12px;
    border: 1px solid ${t.colorInput};
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
`,Se=({exercisesArray:l})=>{const a=Y("(max-width:768px)"),h=u(B),s=n=>n[0].toUpperCase()+n.slice(1).toLowerCase();return e.jsxs(F,{children:[e.jsxs(G,{children:[e.jsx(Q,{children:"Exercises"}),e.jsx(V,{children:e.jsxs(U,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(J,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:d+"#icon-arrow"})})]})})]}),l&&l.length>0&&!h?a?e.jsx(T,{children:e.jsx(W,{children:l.map(n=>e.jsxs(R,{children:[e.jsx(x,{children:"Body Part"}),e.jsx(x,{children:s(n.exerciseId.bodyPart)}),e.jsx(x,{children:"Equipment"}),e.jsx(x,{children:s(n.exerciseId.equipment)}),e.jsx(x,{children:"Name"}),e.jsx(x,{children:s(n.exerciseId.name)}),e.jsxs(X,{children:[e.jsxs(Z,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(x,{children:"Target"}),e.jsx(x,{children:s(n.exerciseId.target)})]}),e.jsxs(ee,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(x,{children:"Burned Calories"}),e.jsx(x,{children:n.exerciseId.burnedCalories})]}),e.jsxs(te,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(x,{children:"Time"}),e.jsx(x,{children:n.time})]}),e.jsxs(ie,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(x,{children:""}),e.jsx(x,{children:e.jsx(E,{type:"button",onClick:()=>handleDelete(n._id),children:e.jsx(L,{children:e.jsx("use",{href:d+"#icon-trash-03"})})})})]})]})]},n._id))})}):e.jsxs(T,{children:[e.jsxs(ze,{children:[e.jsx(y,{children:"Body Part"}),e.jsx(y,{children:"Equipment"}),e.jsx(y,{children:"Name"}),e.jsx(y,{children:"Target"}),e.jsx(y,{children:"Burned Calories"}),e.jsx(y,{children:"Time"}),e.jsx(y,{children:""})]}),e.jsx(W,{children:l.map(n=>e.jsxs(R,{children:[e.jsx(j,{children:s(n.exerciseId.bodyPart)}),e.jsx(j,{children:s(n.exerciseId.equipment)}),e.jsx(j,{children:s(n.exerciseId.name)}),e.jsx(j,{children:s(n.exerciseId.target)}),e.jsx(j,{children:n.exerciseId.burnedCalories}),e.jsx(j,{children:n.time}),e.jsx(j,{children:e.jsx(E,{type:"button",onClick:()=>handleDelete(n._id),children:e.jsx(L,{children:e.jsx("use",{href:d+"#icon-trash-03"})})})})]},n._id))})]}):e.jsx(K,{children:"Not found exercises"})]})},Ce=i.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,ke=i.ul`
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
      background-color: ${t.colorOrange};
    }

    &:nth-child(2) {
      background-color: ${t.colorOrange};
    }
  }
`,D=i.li`
  display: block;
  width: 157px;
  padding: 14px;
  background-color: ${t.colorDiaryItem};
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
`,I=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,z=i.h2`
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`,S=i.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,Oe=i.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Te=i.div`
  width: 24px;
  height: 24px;
  background-color: ${t.colorBeige};
  border-radius: 50%;
`,C=i.svg`
  width: 20px;
  height: 20px;
  fill: ${t.colorOrange1};
`,We=i.svg`
  width: 24px;
  height: 24px;
`,Ee=i.p`
  font-size: 14px;
  line-height: 18px;
  color: ${t.colorInput};

  @media screen and (max-width: 374px) {
    max-width: calc(100% - 72px);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Le=({userDiaryInformation:l})=>{const{burnedCalories:a,caloriesIntake:h,consumedCalories:s,remainingCalories:n,remainingSports:c}=l,[m,w]=k.useState(!1),r=u(B);return k.useEffect(()=>{n<0&&w(!0)},[n]),e.jsxs(Ce,{children:[e.jsxs(ke,{children:[e.jsxs(D,{children:[e.jsxs(I,{children:[e.jsx(C,{children:e.jsx("use",{href:d+"#icon-fluent_food-24-filled"})}),e.jsx(z,{children:"Daily calory intake"})]}),e.jsx(S,{children:h&&!r?h:0})]}),e.jsxs(D,{children:[e.jsxs(I,{children:[e.jsx(C,{children:e.jsx("use",{href:d+"#icon-dumbbell"})}),e.jsx(z,{children:"Daily norm of sports"})]}),e.jsx(S,{children:"110 min"})]}),e.jsxs(D,{children:[e.jsxs(I,{children:[e.jsx(C,{children:e.jsx("use",{href:d+"#icon-fluent_food-apple-20-filled"})}),e.jsx(z,{children:"Calories consumed"})]}),e.jsx(S,{children:s&&!r?s:0})]}),e.jsxs(D,{children:[e.jsxs(I,{children:[e.jsx(C,{children:e.jsx("use",{href:d+"#icon-calories-1"})}),e.jsx(z,{children:"Calories burned"})]}),e.jsx(S,{children:a&&!r?a:0})]}),e.jsxs(D,{className:m?"redBg":"",children:[e.jsxs(I,{children:[e.jsx(C,{children:e.jsx("use",{href:d+"#icon-bubble"})}),e.jsx(z,{children:"The rest of the calories"})]}),e.jsx(S,{children:n&&!r?n:0})]}),e.jsxs(D,{className:m?"greenBg":"",children:[e.jsxs(I,{children:[e.jsx(C,{children:e.jsx("use",{href:d+"#icon-running-figure"})}),e.jsx(z,{children:"The rest of sports"})]}),e.jsxs(S,{children:[c&&!r?c:110," min"]})]})]}),e.jsxs(Oe,{children:[e.jsx(Te,{children:e.jsx(We,{children:e.jsx("use",{href:d+"#icon-running-stick-figure-svgrepo-com-1"})})}),e.jsx(Ee,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},Ne=i.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,Be=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,Me=i.div`
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
`,Pe=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Ye=()=>{const l=_(),a=u(xe),h=u(ce),{addProducts:s,addExercises:n}=a,[c,m]=k.useState(new Date),r=u(H).createdAt,f=O=>{const b=new Date(O),ne=String(b.getDate()).padStart(2,"0"),oe=String(b.getMonth()+1).padStart(2,"0"),re=b.getFullYear();return`${ne}-${oe}-${re}`},o=f(c),p=f(r);return k.useEffect(()=>{(async()=>{try{await l(q(o))}catch(b){N.error("Error fetching data:",b),console.error("Error fetching data:",b)}})()},[l,o,c]),e.jsx(le,{children:h?e.jsx(pe,{}):e.jsxs(Ne,{children:[e.jsxs(Be,{children:[e.jsx(fe,{title:"Diary"}),e.jsx($e,{currentDate:c,setCurrentDate:m,userDateRegistration:p})]}),e.jsxs(Pe,{children:[e.jsx(Le,{userDiaryInformation:a}),e.jsxs(Me,{children:[e.jsx(Ie,{productsArray:s,date:o}),e.jsx(Se,{exercisesArray:n,date:o})]})]})]})})};export{Ye as default};
