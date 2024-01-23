import{s as i,g as t,j as e,t as se,Q as T,r as y,a as l,u as A,v as b,w as Y,x as q,N as F,y as de,z as P,A as le,f as ae,C as pe,B as he,D as xe}from"./index-8d04d221.js";import{c as W}from"./helpers-d77433ec.js";import{e as ce,f as fe}from"./react-datepicker-cssmodules-aa8d40ff.js";import{T as me}from"./TitlePage-21c5dfc1.js";import"./defineProperty-86b976f7.js";const ge=i.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,we=i.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;

  &:hover {
    > svg {
      fill: ${t.colorOrange};
    }
  }
`,ye=i.p`
  font-size: 24px;
  line-height: 1.33;
  margin: 0;
  padding: 0;
  color: ${t.colorWhite};
  font-weight: 700;
  transition: color 0.3s ease;

  &:hover {
    color: ${t.colorOrange1};
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.1;
  }
`,je=i.svg`
  width: 20px;
  height: 20px;
  stroke: ${t.colorOrange1};

  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,ue=i.button`
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

  &:hover {
    > svg {
      stroke: ${t.colorOrange};
    }
  }
`,be=i.button`
  display: flex;
  margin: 0 6px 0 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;

  &:hover {
    > svg {
      fill: ${t.colorOrange};
    }
  }
`,_=i.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passive {
    fill: rgba(239, 237, 232, 0.2);
  }
`,ve=i.div`
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
`;const $e=({selectedDate:o,setSelectedDate:p,isOpen:h,onClose:x,setCurrentDate:a,userDateRegistration:s})=>{const c=n=>{W(n)>=s?(p(n),a(n),x()):T.error("Selected date cannot be earlier than the registration date.")};return e.jsxs(ve,{children:[e.jsx(ce,{selected:o,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:n=>n.substr(0,1),open:h,customInput:e.jsx("div",{style:{display:"none"}}),onChange:c,minDate:new Date(s)}),e.jsx(se,{})]})},De=({currentDate:o,setCurrentDate:p,userDateRegistration:h})=>{const[x,a]=y.useState(o),[s,c]=y.useState(!1),[n,d]=y.useState(!1),v=()=>{c(!s)},r=()=>{d(!0);const g=new Date(o);W(g)>h?(g.setDate(g.getDate()-1),p(g),a(g),d(!1)):T.error("Selected date cannot be earlier than the registration date.")},w=()=>{const g=new Date(x);g.setDate(x.getDate()+1),p(g),a(g)},$=()=>{c(!1)};return e.jsxs(ge,{children:[e.jsxs(ue,{onClick:v,children:[e.jsx(ye,{children:fe(x,"dd/MM/yyyy")}),e.jsx(je,{children:e.jsx("use",{href:l+"#icon-calendar"})})]}),e.jsx(be,{type:"button",onClick:r,children:e.jsx(_,{className:n?"passive":"",children:e.jsx("use",{href:l+"#icon-chevron-left"})})}),e.jsx(we,{type:"button",onClick:w,children:e.jsx(_,{children:e.jsx("use",{href:l+"#icon-chevron-right"})})}),e.jsx($e,{selectedDate:x,setSelectedDate:a,isOpen:s,onClose:$,setCurrentDate:p,userDateRegistration:h})]})},Q=i.div`
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
`,V=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,J=i.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,K=i.div`
  &:hover span {
    color: ${t.colorOrange1};
  }
`,X=i.span`
  color: ${t.colorOrange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Z=i.p`
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
`,E=i.div`
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
`,B=i.div`
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
`,Ie=i.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,D=i.li`
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
`,H=i.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,m=i.li`
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
`,I=i.li`
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
`,ee=i.div`
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
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
      width: 79px;

      &:nth-of-type(2) {
        margin-bottom: 40px;
      }
    }
  }
`,ie=i.div`
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
`,ne=i.div`
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
`,oe=i.div`
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
`,L=i.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0;
  position: relative;

  &:hover {
    > svg {
      stroke: ${t.colorOrange};
    }
  }
`,N=i.svg`
  stroke: ${t.colorOrange1};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;
`,U=i.span`
  @media screen and (min-width: 320px) {
    color: ${t.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,ze=o=>o.diary.allDiaryInformation,ke=o=>o.diary.isLoading,M=o=>o.diary.error,Ce=({productsArray:o,date:p})=>{const h=A(),a=b(Y).blood,s=b(M),c=q("(max-width:768px)"),n=r=>r[0].toUpperCase()+r.slice(1).toLowerCase();let d;const v=async r=>{try{await h(de(r)),await h(P(p))}catch(w){T.error("Some error occured, try again",w)}};return e.jsxs(Q,{children:[e.jsxs(V,{children:[e.jsx(J,{children:"Products"}),e.jsx(K,{children:e.jsxs(F,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(X,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:l+"#icon-arrow"})})]})})]}),o&&o.length>0&&!s?c?e.jsx(E,{children:e.jsx(B,{children:o.map(r=>{const w=r.productId.groupBloodNotAllowed[a]?d="Yes":d="No";return e.jsxs(H,{children:[e.jsx(m,{children:"Title"}),e.jsx(m,{children:n(r.productId.title)}),e.jsx(m,{children:"Category"}),e.jsx(m,{children:n(r.productId.category)}),e.jsxs(ee,{children:[e.jsxs(te,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:"Calories"}),e.jsx(m,{children:r.calories})]}),e.jsxs(ie,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:"Weight"}),e.jsx(m,{children:r.amount})]}),e.jsxs(ne,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:"Recommend"}),e.jsx(m,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:w==="Yes"?e.jsx("use",{href:l+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:l+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(U,{children:d})]})})]}),e.jsxs(oe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:""}),e.jsx(m,{children:e.jsx(L,{type:"button",onClick:()=>v(r._id),children:e.jsx(N,{children:e.jsx("use",{href:l+"#icon-trash-03"})})})})]})]})]},r._id)})})}):e.jsxs(E,{children:[e.jsxs(Ie,{children:[e.jsx(D,{children:"Title"}),e.jsx(D,{children:"Category"}),e.jsx(D,{children:"Calories"}),e.jsx(D,{children:"Weight"}),e.jsx(D,{children:"Recommend"}),e.jsx(D,{children:""})]}),e.jsx(B,{children:o.map(r=>{const w=r.productId.groupBloodNotAllowed[a]?d="Yes":d="No";return e.jsxs(H,{children:[e.jsx(I,{children:n(r.productId.title)}),e.jsx(I,{children:n(r.productId.category)}),e.jsx(I,{children:r.calories}),e.jsx(I,{children:r.amount}),e.jsx(I,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:w==="Yes"?e.jsx("use",{href:l+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:l+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(U,{children:d})]})}),e.jsx(I,{children:e.jsx(L,{type:"button",onClick:()=>v(r._id),children:e.jsx(N,{children:e.jsx("use",{href:l+"#icon-trash-03"})})})})]},r._id)})})]}):e.jsx(Z,{children:"Not found products"})]})},Se=i.ul`
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
`,j=i.li`
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
`,G=i.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,f=i.li`
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
`,u=i.li`
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
`,Oe=({exercisesArray:o,date:p})=>{const h=q("(max-width:768px)"),x=b(M),a=A(),s=n=>n[0].toUpperCase()+n.slice(1).toLowerCase(),c=async n=>{try{await a(le(n)),await a(P(p))}catch(d){console.log(d),T.error("Some error occured, try again",d)}};return e.jsxs(Q,{children:[e.jsxs(V,{children:[e.jsx(J,{children:"Exercises"}),e.jsx(K,{children:e.jsxs(F,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(X,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:l+"#icon-arrow"})})]})})]}),o&&o.length>0&&!x?h?e.jsx(E,{children:e.jsx(B,{children:o.map(n=>e.jsxs(G,{children:[e.jsx(f,{children:"Body Part"}),e.jsx(f,{children:s(n.exerciseId.bodyPart)}),e.jsx(f,{children:"Equipment"}),e.jsx(f,{children:s(n.exerciseId.equipment)}),e.jsx(f,{children:"Name"}),e.jsx(f,{children:s(n.exerciseId.name)}),e.jsxs(ee,{children:[e.jsxs(te,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:"Target"}),e.jsx(f,{children:s(n.exerciseId.target)})]}),e.jsxs(ie,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:"Burned Calories"}),e.jsx(f,{children:n.exerciseId.burnedCalories})]}),e.jsxs(ne,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:"Time"}),e.jsx(f,{children:n.time})]}),e.jsxs(oe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:""}),e.jsx(f,{children:e.jsx(L,{type:"button",onClick:()=>c(n._id),children:e.jsx(N,{children:e.jsx("use",{href:l+"#icon-trash-03"})})})})]})]})]},n._id))})}):e.jsxs(E,{children:[e.jsxs(Se,{children:[e.jsx(j,{children:"Body Part"}),e.jsx(j,{children:"Equipment"}),e.jsx(j,{children:"Name"}),e.jsx(j,{children:"Target"}),e.jsx(j,{children:"Burned Calories"}),e.jsx(j,{children:"Time"}),e.jsx(j,{children:""})]}),e.jsx(B,{children:o.map(n=>e.jsxs(G,{children:[e.jsx(u,{children:s(n.exerciseId.bodyPart)}),e.jsx(u,{children:s(n.exerciseId.equipment)}),e.jsx(u,{children:s(n.exerciseId.name)}),e.jsx(u,{children:s(n.exerciseId.target)}),e.jsx(u,{children:n.exerciseId.burnedCalories}),e.jsx(u,{children:n.time}),e.jsx(u,{children:e.jsx(L,{type:"button",onClick:()=>c(n._id),children:e.jsx(N,{children:e.jsx("use",{href:l+"#icon-trash-03"})})})})]},n._id))})]}):e.jsx(Z,{children:"Not found exercises"})]})},Te=i.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,We=i.ul`
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
`,z=i.li`
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
`,k=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,C=i.h2`
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
`,Ee=i.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Be=i.div`
  width: 24px;
  height: 24px;
  background-color: ${t.colorBeige};
  border-radius: 50%;
`,O=i.svg`
  width: 20px;
  height: 20px;
  fill: ${t.colorOrange1};
`,Le=i.svg`
  width: 24px;
  height: 24px;
`,Ne=i.p`
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
`,Ae=({userDiaryInformation:o,bmr:p})=>{const{burnedCalories:h,consumedCalories:x,remainingCalories:a,remainingSports:s}=o,[c,n]=y.useState(!1),d=b(M);return y.useEffect(()=>{a<0&&n(!0)},[a]),e.jsxs(Te,{children:[e.jsxs(We,{children:[e.jsxs(z,{children:[e.jsxs(k,{children:[e.jsx(O,{children:e.jsx("use",{href:l+"#icon-fluent_food-24-filled"})}),e.jsx(C,{children:"Daily calory intake"})]}),e.jsx(S,{children:p!==null?p:0})]}),e.jsxs(z,{children:[e.jsxs(k,{children:[e.jsx(O,{children:e.jsx("use",{href:l+"#icon-dumbbell"})}),e.jsx(C,{children:"Daily norm of sports"})]}),e.jsx(S,{children:"110 min"})]}),e.jsxs(z,{children:[e.jsxs(k,{children:[e.jsx(O,{children:e.jsx("use",{href:l+"#icon-fluent_food-apple-20-filled"})}),e.jsx(C,{children:"Calories consumed"})]}),e.jsx(S,{children:x&&!d?x:0})]}),e.jsxs(z,{children:[e.jsxs(k,{children:[e.jsx(O,{children:e.jsx("use",{href:l+"#icon-calories-1"})}),e.jsx(C,{children:"Calories burned"})]}),e.jsx(S,{children:h&&!d?h:0})]}),e.jsxs(z,{className:c?"redBg":"",children:[e.jsxs(k,{children:[e.jsx(O,{children:e.jsx("use",{href:l+"#icon-bubble"})}),e.jsx(C,{children:"The rest of the calories"})]}),e.jsx(S,{children:a&&!d?a:0})]}),e.jsxs(z,{className:c?"greenBg":"",children:[e.jsxs(k,{children:[e.jsx(O,{children:e.jsx("use",{href:l+"#icon-running-figure"})}),e.jsx(C,{children:"The rest of sports"})]}),e.jsxs(S,{children:[s&&!d?s:110," min"]})]})]}),e.jsxs(Ee,{children:[e.jsx(Be,{children:e.jsx(Le,{children:e.jsx("use",{href:l+"#icon-running-stick-figure-svgrepo-com-1"})})}),e.jsx(Ne,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},Pe=i.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,Me=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,Re=i.div`
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
`,_e=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Fe=()=>{const o=A(),p=b(ze),h=b(ke),{addProducts:x,addExercises:a}=p,[s,c]=y.useState(new Date),d=b(Y).createdAt,{bmr:v}=ae(),[r,w]=y.useState(0),$=W(s),g=W(d);return y.useEffect(()=>{(async()=>{try{o(xe()),w(v),await o(P($))}catch(R){T.error("Error fetching data:",R),console.error("Error fetching data:",R)}})()},[o,$,s]),e.jsx(pe,{children:h?e.jsx(he,{}):e.jsxs(Pe,{children:[e.jsxs(Me,{children:[e.jsx(me,{title:"Diary"}),e.jsx(De,{currentDate:s,setCurrentDate:c,userDateRegistration:g})]}),e.jsxs(_e,{children:[e.jsx(Ae,{userDiaryInformation:p,bmr:r}),e.jsxs(Re,{children:[e.jsx(Ce,{productsArray:x,date:$}),e.jsx(Oe,{exercisesArray:a,date:$})]})]})]})})};export{Fe as default};
