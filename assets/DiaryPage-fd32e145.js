import{s as t,g as i,j as e,k as ne,Q as L,r as k,a as d,u as _,c as u,m as H,o as U,N as q,p as oe,q as G,C as re,t as de}from"./index-f4cf5a11.js";import{c as S}from"./helpers-d77433ec.js";import{e as se,f as le,a as P,s as pe,b as ae}from"./react-datepicker-cssmodules-4e0f62e5.js";import{T as he}from"./TitlePage-e7976a42.js";import"./defineProperty-0660a724.js";const xe=t.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,ce=t.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
`,fe=t.p`
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
`,me=t.svg`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,we=t.button`
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
`,B=t.svg`
  width: 100%;
  height: 100%;
  fill: ${i.colorWhite};
`,ye=t.div`
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
`;const je=({selectedDate:s,setSelectedDate:a,isOpen:x,onClose:r,setCurrentDate:n,userDateRegistration:c})=>{const w=h=>{S(h)>=c?(a(h),n(h),r()):L.error("Selected date cannot be earlier than the registration date.")};return e.jsxs(ye,{children:[e.jsx(se,{selected:s,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:h=>h.substr(0,1),open:x,customInput:e.jsx("div",{style:{display:"none"}}),onChange:w,minDate:new Date(c)}),e.jsx(ne,{})]})},ue=({currentDate:s,setCurrentDate:a,userDateRegistration:x})=>{const[r,n]=k.useState(s),[c,w]=k.useState(!1),h=()=>{w(!c)},l=()=>{const p=new Date(s);S(p)>x?(p.setDate(p.getDate()-1),a(p),n(p)):L.error("Selected date cannot be earlier than the registration date.")},g=()=>{const p=new Date(r);p.setDate(r.getDate()+1),a(p),n(p)},o=()=>{w(!1)};return e.jsxs(xe,{children:[e.jsxs(we,{onClick:h,children:[e.jsx(fe,{children:le(r,"dd/MM/yyyy")}),e.jsx(me,{children:e.jsx("use",{href:d+"#icon-calendar"})})]}),e.jsx(ge,{type:"button",onClick:l,children:e.jsx(B,{children:e.jsx("use",{href:d+"#icon-chevron-left"})})}),e.jsx(ce,{type:"button",onClick:g,children:e.jsx(B,{children:e.jsx("use",{href:d+"#icon-chevron-right"})})}),e.jsx(je,{selectedDate:r,setSelectedDate:n,isOpen:c,onClose:o,setCurrentDate:a,userDateRegistration:x})]})},Y=t.div`
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
`,F=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Q=t.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,V=t.div`
  &:hover span {
    color: ${i.colorOrange1};
  }
`,J=t.span`
  color: ${i.colorOrange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,K=t.p`
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
`,be=t.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,b=t.li`
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
`,A=t.ul`
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
`,v=t.li`
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
`,X=t.div`
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
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
      width: 79px;

      &:nth-of-type(2) {
        margin-bottom: 40px;
      }
    }
  }
`,ee=t.div`
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
`,ie=t.div`
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
`,te=t.div`
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
`,M=t.span`
  @media screen and (min-width: 320px) {
    color: ${i.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,ve=({productsArray:s,date:a})=>{const x=_(),n=u(H).blood,c=u(P),w=U("(max-width:768px)"),h=o=>o[0].toUpperCase()+o.slice(1).toLowerCase();let l;const g=async o=>{try{await x(oe(o)),await x(G(a))}catch(p){L.error("Some error occured, try again",p)}};return e.jsxs(Y,{children:[e.jsxs(F,{children:[e.jsx(Q,{children:"Products"}),e.jsx(V,{children:e.jsxs(q,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(J,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:i.colorOrange},children:e.jsx("use",{href:d+"#icon-arrow"})})]})})]}),s&&s.length>0&&!c?w?e.jsx(T,{children:e.jsx(O,{children:s.map(o=>{const p=o.productId.groupBloodNotAllowed[n]?l="Yes":l="No";return e.jsxs(A,{children:[e.jsx(m,{children:"Title"}),e.jsx(m,{children:h(o.productId.title)}),e.jsx(m,{children:"Category"}),e.jsx(m,{children:h(o.productId.category)}),e.jsxs(X,{children:[e.jsxs(Z,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:"Calories"}),e.jsx(m,{children:o.calories})]}),e.jsxs(ee,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:"Weight"}),e.jsx(m,{children:o.amount})]}),e.jsxs(ie,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:"Recommend"}),e.jsx(m,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:p==="Yes"?e.jsx("use",{href:d+"#icon-Ellipse-82",style:{fill:i.colorSecondaryGreen,stroke:i.colorSecondaryGreen}}):e.jsx("use",{href:d+"#icon-Ellipse-82",style:{fill:i.colorSecondaryRed,stroke:i.colorSecondaryRed}})}),e.jsx(M,{children:l})]})})]}),e.jsxs(te,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:""}),e.jsx(m,{children:e.jsx(W,{type:"button",onClick:()=>g(o._id),children:e.jsx(E,{children:e.jsx("use",{href:d+"#icon-trash-03"})})})})]})]})]},o._id)})})}):e.jsxs(T,{children:[e.jsxs(be,{children:[e.jsx(b,{children:"Title"}),e.jsx(b,{children:"Category"}),e.jsx(b,{children:"Calories"}),e.jsx(b,{children:"Weight"}),e.jsx(b,{children:"Recommend"}),e.jsx(b,{children:""})]}),e.jsx(O,{children:s.map(o=>{const p=o.productId.groupBloodNotAllowed[n]?l="Yes":l="No";return e.jsxs(A,{children:[e.jsx(v,{children:h(o.productId.title)}),e.jsx(v,{children:h(o.productId.category)}),e.jsx(v,{children:o.calories}),e.jsx(v,{children:o.amount}),e.jsx(v,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:p==="Yes"?e.jsx("use",{href:d+"#icon-Ellipse-82",style:{fill:i.colorSecondaryGreen,stroke:i.colorSecondaryGreen}}):e.jsx("use",{href:d+"#icon-Ellipse-82",style:{fill:i.colorSecondaryRed,stroke:i.colorSecondaryRed}})}),e.jsx(M,{children:l})]})}),e.jsx(v,{children:e.jsx(W,{type:"button",onClick:()=>g(o._id),children:e.jsx(E,{children:e.jsx("use",{href:d+"#icon-trash-03"})})})})]},o._id)})})]}):e.jsx(K,{children:"Not found products"})]})},$e=t.ul`
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
`,R=t.ul`
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
`,De=({exercisesArray:s})=>{const a=U("(max-width:768px)"),x=u(P),r=n=>n[0].toUpperCase()+n.slice(1).toLowerCase();return e.jsxs(Y,{children:[e.jsxs(F,{children:[e.jsx(Q,{children:"Exercises"}),e.jsx(V,{children:e.jsxs(q,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(J,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:i.colorOrange},children:e.jsx("use",{href:d+"#icon-arrow"})})]})})]}),s&&s.length>0&&!x?a?e.jsx(T,{children:e.jsx(O,{children:s.map(n=>e.jsxs(R,{children:[e.jsx(f,{children:"Body Part"}),e.jsx(f,{children:r(n.exerciseId.bodyPart)}),e.jsx(f,{children:"Equipment"}),e.jsx(f,{children:r(n.exerciseId.equipment)}),e.jsx(f,{children:"Name"}),e.jsx(f,{children:r(n.exerciseId.name)}),e.jsxs(X,{children:[e.jsxs(Z,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:"Target"}),e.jsx(f,{children:r(n.exerciseId.target)})]}),e.jsxs(ee,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:"Burned Calories"}),e.jsx(f,{children:n.exerciseId.burnedCalories})]}),e.jsxs(ie,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:"Time"}),e.jsx(f,{children:n.time})]}),e.jsxs(te,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:""}),e.jsx(f,{children:e.jsx(W,{type:"button",onClick:()=>handleDelete(n._id),children:e.jsx(E,{children:e.jsx("use",{href:d+"#icon-trash-03"})})})})]})]})]},n._id))})}):e.jsxs(T,{children:[e.jsxs($e,{children:[e.jsx(y,{children:"Body Part"}),e.jsx(y,{children:"Equipment"}),e.jsx(y,{children:"Name"}),e.jsx(y,{children:"Target"}),e.jsx(y,{children:"Burned Calories"}),e.jsx(y,{children:"Time"}),e.jsx(y,{children:""})]}),e.jsx(O,{children:s.map(n=>e.jsxs(R,{children:[e.jsx(j,{children:r(n.exerciseId.bodyPart)}),e.jsx(j,{children:r(n.exerciseId.equipment)}),e.jsx(j,{children:r(n.exerciseId.name)}),e.jsx(j,{children:r(n.exerciseId.target)}),e.jsx(j,{children:n.exerciseId.burnedCalories}),e.jsx(j,{children:n.time}),e.jsx(j,{children:e.jsx(W,{type:"button",onClick:()=>handleDelete(n._id),children:e.jsx(E,{children:e.jsx("use",{href:d+"#icon-trash-03"})})})})]},n._id))})]}):e.jsx(K,{children:"Not found exercises"})]})},Ie=t.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,ze=t.ul`
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
`,$=t.li`
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
`,D=t.div`
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
`,z=t.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,Ce=t.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,ke=t.div`
  width: 24px;
  height: 24px;
  background-color: ${i.colorBeige};
  border-radius: 50%;
`,C=t.svg`
  width: 20px;
  height: 20px;
  fill: ${i.colorOrange1};
`,Se=t.svg`
  width: 24px;
  height: 24px;
`,Te=t.p`
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
`,Oe=({userDiaryInformation:s})=>{const{burnedCalories:a,caloriesIntake:x,consumedCalories:r,remainingCalories:n,remainingSports:c}=s,[w,h]=k.useState(!1),l=u(P);return k.useEffect(()=>{n<0&&h(!0)},[n]),e.jsxs(Ie,{children:[e.jsxs(ze,{children:[e.jsxs($,{children:[e.jsxs(D,{children:[e.jsx(C,{children:e.jsx("use",{href:d+"#icon-fluent_food-24-filled"})}),e.jsx(I,{children:"Daily calory intake"})]}),e.jsx(z,{children:x&&!l?x:0})]}),e.jsxs($,{children:[e.jsxs(D,{children:[e.jsx(C,{children:e.jsx("use",{href:d+"#icon-dumbbell"})}),e.jsx(I,{children:"Daily norm of sports"})]}),e.jsx(z,{children:"110 min"})]}),e.jsxs($,{children:[e.jsxs(D,{children:[e.jsx(C,{children:e.jsx("use",{href:d+"#icon-fluent_food-apple-20-filled"})}),e.jsx(I,{children:"Calories consumed"})]}),e.jsx(z,{children:r&&!l?r:0})]}),e.jsxs($,{children:[e.jsxs(D,{children:[e.jsx(C,{children:e.jsx("use",{href:d+"#icon-calories-1"})}),e.jsx(I,{children:"Calories burned"})]}),e.jsx(z,{children:a&&!l?a:0})]}),e.jsxs($,{className:w?"redBg":"",children:[e.jsxs(D,{children:[e.jsx(C,{children:e.jsx("use",{href:d+"#icon-bubble"})}),e.jsx(I,{children:"The rest of the calories"})]}),e.jsx(z,{children:n&&!l?n:0})]}),e.jsxs($,{className:w?"greenBg":"",children:[e.jsxs(D,{children:[e.jsx(C,{children:e.jsx("use",{href:d+"#icon-running-figure"})}),e.jsx(I,{children:"The rest of sports"})]}),e.jsxs(z,{children:[c&&!l?c:110," min"]})]})]}),e.jsxs(Ce,{children:[e.jsx(ke,{children:e.jsx(Se,{children:e.jsx("use",{href:d+"#icon-running-stick-figure-svgrepo-com-1"})})}),e.jsx(Te,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},We=t.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,Ee=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,Le=t.div`
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
`,Ne=t.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,_e=()=>{const s=_(),a=u(pe),x=u(ae),{addProducts:r,addExercises:n}=a,[c,w]=k.useState(new Date),l=u(H).createdAt,g=S(c),o=S(l);return k.useEffect(()=>{(async()=>{try{await s(G(g))}catch(N){L.error("Error fetching data:",N),console.error("Error fetching data:",N)}})()},[s,g,c]),e.jsx(re,{children:x?e.jsx(de,{}):e.jsxs(We,{children:[e.jsxs(Ee,{children:[e.jsx(he,{title:"Diary"}),e.jsx(ue,{currentDate:c,setCurrentDate:w,userDateRegistration:o})]}),e.jsxs(Ne,{children:[e.jsx(Oe,{userDiaryInformation:a}),e.jsxs(Le,{children:[e.jsx(ve,{productsArray:r,date:g}),e.jsx(De,{exercisesArray:n,date:g})]})]})]})})};export{_e as default};
