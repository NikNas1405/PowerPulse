import{s as t,g as i,j as e,k as oe,Q as P,r as b,a as s,u as H,c as v,m as U,o as q,N as G,p as re,q as Y,C as se,t as de}from"./index-13b631aa.js";import{c as O}from"./helpers-d77433ec.js";import{e as le,f as pe,a as B,s as ae,b as he}from"./react-datepicker-cssmodules-d9439718.js";import{T as xe}from"./TitlePage-d0684919.js";import"./defineProperty-fd8cbc1f.js";const ce=t.div`
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

  &.passive {
    border: 1px solid #e9101d;
  }
`,A=t.svg`
  width: 100%;
  height: 100%;
  fill: ${i.colorWhite};

  &.passive {
    fill: rgba(239, 237, 232, 0.2);
  }
`,je=t.div`
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
`;const ue=({selectedDate:d,setSelectedDate:p,isOpen:h,onClose:r,setCurrentDate:n,userDateRegistration:x})=>{const m=a=>{O(a)>=x?(p(a),n(a),r()):P.error("Selected date cannot be earlier than the registration date.")};return e.jsxs(je,{children:[e.jsx(le,{selected:d,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:a=>a.substr(0,1),open:h,customInput:e.jsx("div",{style:{display:"none"}}),onChange:m,minDate:new Date(x)}),e.jsx(oe,{})]})},be=({currentDate:d,setCurrentDate:p,userDateRegistration:h})=>{const[r,n]=b.useState(d),[x,m]=b.useState(!1),[a,l]=b.useState(!1),w=()=>{m(!x)},o=()=>{const g=new Date(d);O(g)>h?(g.setDate(g.getDate()-1),p(g),n(g),l(!0)):P.error("Selected date cannot be earlier than the registration date.")},y=()=>{const g=new Date(r);g.setDate(r.getDate()+1),p(g),n(g)},T=()=>{m(!1)};return e.jsxs(ce,{children:[e.jsxs(ge,{onClick:w,children:[e.jsx(me,{children:pe(r,"dd/MM/yyyy")}),e.jsx(we,{children:e.jsx("use",{href:s+"#icon-calendar"})})]}),e.jsx(ye,{type:"button",onClick:o,children:e.jsx(A,{className:a?"passive":"",children:e.jsx("use",{href:s+"#icon-chevron-left"})})}),e.jsx(fe,{type:"button",onClick:y,children:e.jsx(A,{children:e.jsx("use",{href:s+"#icon-chevron-right"})})}),e.jsx(ue,{selectedDate:r,setSelectedDate:n,isOpen:x,onClose:T,setCurrentDate:p,userDateRegistration:h})]})},F=t.div`
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
`,Q=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,V=t.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,J=t.div`
  &:hover span {
    color: ${i.colorOrange1};
  }
`,K=t.span`
  color: ${i.colorOrange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,X=t.p`
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
`,W=t.div`
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
`,E=t.div`
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
`,ve=t.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,$=t.li`
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
`,D=t.li`
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
`,Z=t.div`
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
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
      width: 79px;

      &:nth-of-type(2) {
        margin-bottom: 40px;
      }
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
      width: 78px;
    }
  }
`,te=t.div`
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
`,ne=t.div`
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
`,N=t.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0;
  position: relative;
`,L=t.svg`
  stroke: ${i.colorOrange1};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`,R=t.span`
  @media screen and (min-width: 320px) {
    color: ${i.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,$e=({productsArray:d,date:p})=>{const h=H(),n=v(U).blood,x=v(B),m=q("(max-width:768px)"),a=o=>o[0].toUpperCase()+o.slice(1).toLowerCase();let l;const w=async o=>{try{await h(re(o)),await h(Y(p))}catch(y){P.error("Some error occured, try again",y)}};return e.jsxs(F,{children:[e.jsxs(Q,{children:[e.jsx(V,{children:"Products"}),e.jsx(J,{children:e.jsxs(G,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(K,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:i.colorOrange},children:e.jsx("use",{href:s+"#icon-arrow"})})]})})]}),d&&d.length>0&&!x?m?e.jsx(W,{children:e.jsx(E,{children:d.map(o=>{const y=o.productId.groupBloodNotAllowed[n]?l="Yes":l="No";return e.jsxs(M,{children:[e.jsx(f,{children:"Title"}),e.jsx(f,{children:a(o.productId.title)}),e.jsx(f,{children:"Category"}),e.jsx(f,{children:a(o.productId.category)}),e.jsxs(Z,{children:[e.jsxs(ee,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:"Calories"}),e.jsx(f,{children:o.calories})]}),e.jsxs(ie,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:"Weight"}),e.jsx(f,{children:o.amount})]}),e.jsxs(te,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:"Recommend"}),e.jsx(f,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:y==="Yes"?e.jsx("use",{href:s+"#icon-Ellipse-82",style:{fill:i.colorSecondaryGreen,stroke:i.colorSecondaryGreen}}):e.jsx("use",{href:s+"#icon-Ellipse-82",style:{fill:i.colorSecondaryRed,stroke:i.colorSecondaryRed}})}),e.jsx(R,{children:l})]})})]}),e.jsxs(ne,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:""}),e.jsx(f,{children:e.jsx(N,{type:"button",onClick:()=>w(o._id),children:e.jsx(L,{children:e.jsx("use",{href:s+"#icon-trash-03"})})})})]})]})]},o._id)})})}):e.jsxs(W,{children:[e.jsxs(ve,{children:[e.jsx($,{children:"Title"}),e.jsx($,{children:"Category"}),e.jsx($,{children:"Calories"}),e.jsx($,{children:"Weight"}),e.jsx($,{children:"Recommend"}),e.jsx($,{children:""})]}),e.jsx(E,{children:d.map(o=>{const y=o.productId.groupBloodNotAllowed[n]?l="Yes":l="No";return e.jsxs(M,{children:[e.jsx(D,{children:a(o.productId.title)}),e.jsx(D,{children:a(o.productId.category)}),e.jsx(D,{children:o.calories}),e.jsx(D,{children:o.amount}),e.jsx(D,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:y==="Yes"?e.jsx("use",{href:s+"#icon-Ellipse-82",style:{fill:i.colorSecondaryGreen,stroke:i.colorSecondaryGreen}}):e.jsx("use",{href:s+"#icon-Ellipse-82",style:{fill:i.colorSecondaryRed,stroke:i.colorSecondaryRed}})}),e.jsx(R,{children:l})]})}),e.jsx(D,{children:e.jsx(N,{type:"button",onClick:()=>w(o._id),children:e.jsx(L,{children:e.jsx("use",{href:s+"#icon-trash-03"})})})})]},o._id)})})]}):e.jsx(X,{children:"Not found products"})]})},De=t.ul`
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
`,j=t.li`
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
`,_=t.ul`
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
`,u=t.li`
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
`,Ie=({exercisesArray:d})=>{const p=q("(max-width:768px)"),h=v(B),r=n=>n[0].toUpperCase()+n.slice(1).toLowerCase();return e.jsxs(F,{children:[e.jsxs(Q,{children:[e.jsx(V,{children:"Exercises"}),e.jsx(J,{children:e.jsxs(G,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(K,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:i.colorOrange},children:e.jsx("use",{href:s+"#icon-arrow"})})]})})]}),d&&d.length>0&&!h?p?e.jsx(W,{children:e.jsx(E,{children:d.map(n=>e.jsxs(_,{children:[e.jsx(c,{children:"Body Part"}),e.jsx(c,{children:r(n.exerciseId.bodyPart)}),e.jsx(c,{children:"Equipment"}),e.jsx(c,{children:r(n.exerciseId.equipment)}),e.jsx(c,{children:"Name"}),e.jsx(c,{children:r(n.exerciseId.name)}),e.jsxs(Z,{children:[e.jsxs(ee,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(c,{children:"Target"}),e.jsx(c,{children:r(n.exerciseId.target)})]}),e.jsxs(ie,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(c,{children:"Burned Calories"}),e.jsx(c,{children:n.exerciseId.burnedCalories})]}),e.jsxs(te,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(c,{children:"Time"}),e.jsx(c,{children:n.time})]}),e.jsxs(ne,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(c,{children:""}),e.jsx(c,{children:e.jsx(N,{type:"button",onClick:()=>handleDelete(n._id),children:e.jsx(L,{children:e.jsx("use",{href:s+"#icon-trash-03"})})})})]})]})]},n._id))})}):e.jsxs(W,{children:[e.jsxs(De,{children:[e.jsx(j,{children:"Body Part"}),e.jsx(j,{children:"Equipment"}),e.jsx(j,{children:"Name"}),e.jsx(j,{children:"Target"}),e.jsx(j,{children:"Burned Calories"}),e.jsx(j,{children:"Time"}),e.jsx(j,{children:""})]}),e.jsx(E,{children:d.map(n=>e.jsxs(_,{children:[e.jsx(u,{children:r(n.exerciseId.bodyPart)}),e.jsx(u,{children:r(n.exerciseId.equipment)}),e.jsx(u,{children:r(n.exerciseId.name)}),e.jsx(u,{children:r(n.exerciseId.target)}),e.jsx(u,{children:n.exerciseId.burnedCalories}),e.jsx(u,{children:n.time}),e.jsx(u,{children:e.jsx(N,{type:"button",onClick:()=>handleDelete(n._id),children:e.jsx(L,{children:e.jsx("use",{href:s+"#icon-trash-03"})})})})]},n._id))})]}):e.jsx(X,{children:"Not found exercises"})]})},ze=t.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,Ce=t.ul`
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
`,I=t.li`
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
`,z=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,C=t.h2`
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`,k=t.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,ke=t.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Se=t.div`
  width: 24px;
  height: 24px;
  background-color: ${i.colorBeige};
  border-radius: 50%;
`,S=t.svg`
  width: 20px;
  height: 20px;
  fill: ${i.colorOrange1};
`,Te=t.svg`
  width: 24px;
  height: 24px;
`,Oe=t.p`
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
`,We=({userDiaryInformation:d})=>{const{burnedCalories:p,caloriesIntake:h,consumedCalories:r,remainingCalories:n,remainingSports:x}=d,[m,a]=b.useState(!1),l=v(B);return b.useEffect(()=>{n<0&&a(!0)},[n]),e.jsxs(ze,{children:[e.jsxs(Ce,{children:[e.jsxs(I,{children:[e.jsxs(z,{children:[e.jsx(S,{children:e.jsx("use",{href:s+"#icon-fluent_food-24-filled"})}),e.jsx(C,{children:"Daily calory intake"})]}),e.jsx(k,{children:h&&!l?h:0})]}),e.jsxs(I,{children:[e.jsxs(z,{children:[e.jsx(S,{children:e.jsx("use",{href:s+"#icon-dumbbell"})}),e.jsx(C,{children:"Daily norm of sports"})]}),e.jsx(k,{children:"110 min"})]}),e.jsxs(I,{children:[e.jsxs(z,{children:[e.jsx(S,{children:e.jsx("use",{href:s+"#icon-fluent_food-apple-20-filled"})}),e.jsx(C,{children:"Calories consumed"})]}),e.jsx(k,{children:r&&!l?r:0})]}),e.jsxs(I,{children:[e.jsxs(z,{children:[e.jsx(S,{children:e.jsx("use",{href:s+"#icon-calories-1"})}),e.jsx(C,{children:"Calories burned"})]}),e.jsx(k,{children:p&&!l?p:0})]}),e.jsxs(I,{className:m?"redBg":"",children:[e.jsxs(z,{children:[e.jsx(S,{children:e.jsx("use",{href:s+"#icon-bubble"})}),e.jsx(C,{children:"The rest of the calories"})]}),e.jsx(k,{children:n&&!l?n:0})]}),e.jsxs(I,{className:m?"greenBg":"",children:[e.jsxs(z,{children:[e.jsx(S,{children:e.jsx("use",{href:s+"#icon-running-figure"})}),e.jsx(C,{children:"The rest of sports"})]}),e.jsxs(k,{children:[x&&!l?x:110," min"]})]})]}),e.jsxs(ke,{children:[e.jsx(Se,{children:e.jsx(Te,{children:e.jsx("use",{href:s+"#icon-running-stick-figure-svgrepo-com-1"})})}),e.jsx(Oe,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},Ee=t.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,Ne=t.div`
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
`,Pe=t.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Ue=()=>{const d=H(),p=v(ae),h=v(he),{addProducts:r,addExercises:n}=p,[x,m]=b.useState(new Date),l=v(U).createdAt,w=O(x),o=O(l);return b.useEffect(()=>{(async()=>{try{await d(Y(w))}catch(T){P.error("Error fetching data:",T),console.error("Error fetching data:",T)}})()},[d,w,x]),e.jsx(se,{children:h?e.jsx(de,{}):e.jsxs(Ee,{children:[e.jsxs(Ne,{children:[e.jsx(xe,{title:"Diary"}),e.jsx(be,{currentDate:x,setCurrentDate:m,userDateRegistration:o})]}),e.jsxs(Pe,{children:[e.jsx(We,{userDiaryInformation:p}),e.jsxs(Le,{children:[e.jsx($e,{productsArray:r,date:w}),e.jsx(Ie,{exercisesArray:n,date:w})]})]})]})})};export{Ue as default};
