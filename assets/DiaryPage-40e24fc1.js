import{s as t,g as i,j as e,t as oe,Q as O,r as b,a as d,u as N,v as y,w as G,x as Y,N as q,y as re,z as P,A as se,B as de,C as le,D as ae,G as pe}from"./index-b2aaa20a.js";import{c as T}from"./helpers-d77433ec.js";import{e as he,f as xe}from"./react-datepicker-cssmodules-a7195834.js";import{T as ce}from"./TitlePage-b9071f7a.js";import"./defineProperty-dc9a9bf3.js";const fe=t.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,me=t.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;

  &:hover {
    > svg {
      fill: ${i.colorOrange};
    }
  }
`,ge=t.p`
  font-size: 24px;
  line-height: 1.33;
  margin: 0;
  padding: 0;
  color: ${i.colorWhite};
  font-weight: 700;
  transition: color 0.3s ease;

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
  stroke: ${i.colorOrange1};

  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,ye=t.button`
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
      stroke: ${i.colorOrange};
    }
  }
`,je=t.button`
  display: flex;
  margin: 0 6px 0 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;

  &:hover {
    > svg {
      fill: ${i.colorOrange};
    }
  }
`,R=t.svg`
  width: 100%;
  height: 100%;
  fill: ${i.colorWhite};
  transition: fill 0.3s ease;

  &.passive {
    fill: rgba(239, 237, 232, 0.2);
  }
`,ue=t.div`
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
`;const be=({selectedDate:r,setSelectedDate:p,isOpen:h,onClose:x,setCurrentDate:a,userDateRegistration:s})=>{const c=n=>{T(n)>=s?(p(n),a(n),x()):O.error("Selected date cannot be earlier than the registration date.")};return e.jsxs(ue,{children:[e.jsx(he,{selected:r,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:n=>n.substr(0,1),open:h,customInput:e.jsx("div",{style:{display:"none"}}),onChange:c,minDate:new Date(s)}),e.jsx(oe,{})]})},ve=({currentDate:r,setCurrentDate:p,userDateRegistration:h})=>{const[x,a]=b.useState(r),[s,c]=b.useState(!1),[n,l]=b.useState(!1),v=()=>{c(!s)},o=()=>{l(!0);const g=new Date(r);T(g)>h?(g.setDate(g.getDate()-1),p(g),a(g),l(!1)):O.error("Selected date cannot be earlier than the registration date.")},w=()=>{const g=new Date(x);g.setDate(x.getDate()+1),p(g),a(g)},M=()=>{c(!1)};return e.jsxs(fe,{children:[e.jsxs(ye,{onClick:v,children:[e.jsx(ge,{children:xe(x,"dd/MM/yyyy")}),e.jsx(we,{children:e.jsx("use",{href:d+"#icon-calendar"})})]}),e.jsx(je,{type:"button",onClick:o,children:e.jsx(R,{className:n?"passive":"",children:e.jsx("use",{href:d+"#icon-chevron-left"})})}),e.jsx(me,{type:"button",onClick:w,children:e.jsx(R,{children:e.jsx("use",{href:d+"#icon-chevron-right"})})}),e.jsx(be,{selectedDate:x,setSelectedDate:a,isOpen:s,onClose:M,setCurrentDate:p,userDateRegistration:h})]})},F=t.div`
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
`,$e=t.ul`
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
`,B=t.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0;
  position: relative;

  &:hover {
    > svg {
      stroke: ${i.colorOrange};
    }
  }
`,L=t.svg`
  stroke: ${i.colorOrange1};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;
`,H=t.span`
  @media screen and (min-width: 320px) {
    color: ${i.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,De=r=>r.diary.allDiaryInformation,Ie=r=>r.diary.isLoading,A=r=>r.diary.error,ze=({productsArray:r,date:p})=>{const h=N(),a=y(G).blood,s=y(A),c=Y("(max-width:768px)"),n=o=>o[0].toUpperCase()+o.slice(1).toLowerCase();let l;const v=async o=>{try{await h(re(o)),await h(P(p))}catch(w){O.error("Some error occured, try again",w)}};return e.jsxs(F,{children:[e.jsxs(Q,{children:[e.jsx(V,{children:"Products"}),e.jsx(J,{children:e.jsxs(q,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(K,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:i.colorOrange},children:e.jsx("use",{href:d+"#icon-arrow"})})]})})]}),r&&r.length>0&&!s?c?e.jsx(W,{children:e.jsx(E,{children:r.map(o=>{const w=o.productId.groupBloodNotAllowed[a]?l="Yes":l="No";return e.jsxs(_,{children:[e.jsx(m,{children:"Title"}),e.jsx(m,{children:n(o.productId.title)}),e.jsx(m,{children:"Category"}),e.jsx(m,{children:n(o.productId.category)}),e.jsxs(Z,{children:[e.jsxs(ee,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:"Calories"}),e.jsx(m,{children:o.calories})]}),e.jsxs(ie,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:"Weight"}),e.jsx(m,{children:o.amount})]}),e.jsxs(te,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:"Recommend"}),e.jsx(m,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:w==="Yes"?e.jsx("use",{href:d+"#icon-Ellipse-82",style:{fill:i.colorSecondaryGreen,stroke:i.colorSecondaryGreen}}):e.jsx("use",{href:d+"#icon-Ellipse-82",style:{fill:i.colorSecondaryRed,stroke:i.colorSecondaryRed}})}),e.jsx(H,{children:l})]})})]}),e.jsxs(ne,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:""}),e.jsx(m,{children:e.jsx(B,{type:"button",onClick:()=>v(o._id),children:e.jsx(L,{children:e.jsx("use",{href:d+"#icon-trash-03"})})})})]})]})]},o._id)})})}):e.jsxs(W,{children:[e.jsxs($e,{children:[e.jsx($,{children:"Title"}),e.jsx($,{children:"Category"}),e.jsx($,{children:"Calories"}),e.jsx($,{children:"Weight"}),e.jsx($,{children:"Recommend"}),e.jsx($,{children:""})]}),e.jsx(E,{children:r.map(o=>{const w=o.productId.groupBloodNotAllowed[a]?l="Yes":l="No";return e.jsxs(_,{children:[e.jsx(D,{children:n(o.productId.title)}),e.jsx(D,{children:n(o.productId.category)}),e.jsx(D,{children:o.calories}),e.jsx(D,{children:o.amount}),e.jsx(D,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:w==="Yes"?e.jsx("use",{href:d+"#icon-Ellipse-82",style:{fill:i.colorSecondaryGreen,stroke:i.colorSecondaryGreen}}):e.jsx("use",{href:d+"#icon-Ellipse-82",style:{fill:i.colorSecondaryRed,stroke:i.colorSecondaryRed}})}),e.jsx(H,{children:l})]})}),e.jsx(D,{children:e.jsx(B,{type:"button",onClick:()=>v(o._id),children:e.jsx(L,{children:e.jsx("use",{href:d+"#icon-trash-03"})})})})]},o._id)})})]}):e.jsx(X,{children:"Not found products"})]})},ke=t.ul`
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
`,U=t.ul`
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
`,Ce=({exercisesArray:r,date:p})=>{const h=Y("(max-width:768px)"),x=y(A),a=N(),s=n=>n[0].toUpperCase()+n.slice(1).toLowerCase(),c=async n=>{try{await a(se(n)),await a(P(p))}catch(l){console.log(l),O.error("Some error occured, try again",l)}};return e.jsxs(F,{children:[e.jsxs(Q,{children:[e.jsx(V,{children:"Exercises"}),e.jsx(J,{children:e.jsxs(q,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(K,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:i.colorOrange},children:e.jsx("use",{href:d+"#icon-arrow"})})]})})]}),r&&r.length>0&&!x?h?e.jsx(W,{children:e.jsx(E,{children:r.map(n=>e.jsxs(U,{children:[e.jsx(f,{children:"Body Part"}),e.jsx(f,{children:s(n.exerciseId.bodyPart)}),e.jsx(f,{children:"Equipment"}),e.jsx(f,{children:s(n.exerciseId.equipment)}),e.jsx(f,{children:"Name"}),e.jsx(f,{children:s(n.exerciseId.name)}),e.jsxs(Z,{children:[e.jsxs(ee,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:"Target"}),e.jsx(f,{children:s(n.exerciseId.target)})]}),e.jsxs(ie,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:"Burned Calories"}),e.jsx(f,{children:n.exerciseId.burnedCalories})]}),e.jsxs(te,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:"Time"}),e.jsx(f,{children:n.time})]}),e.jsxs(ne,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:""}),e.jsx(f,{children:e.jsx(B,{type:"button",onClick:()=>c(n._id),children:e.jsx(L,{children:e.jsx("use",{href:d+"#icon-trash-03"})})})})]})]})]},n._id))})}):e.jsxs(W,{children:[e.jsxs(ke,{children:[e.jsx(j,{children:"Body Part"}),e.jsx(j,{children:"Equipment"}),e.jsx(j,{children:"Name"}),e.jsx(j,{children:"Target"}),e.jsx(j,{children:"Burned Calories"}),e.jsx(j,{children:"Time"}),e.jsx(j,{children:""})]}),e.jsx(E,{children:r.map(n=>e.jsxs(U,{children:[e.jsx(u,{children:s(n.exerciseId.bodyPart)}),e.jsx(u,{children:s(n.exerciseId.equipment)}),e.jsx(u,{children:s(n.exerciseId.name)}),e.jsx(u,{children:s(n.exerciseId.target)}),e.jsx(u,{children:n.exerciseId.burnedCalories}),e.jsx(u,{children:n.time}),e.jsx(u,{children:e.jsx(B,{type:"button",onClick:()=>c(n._id),children:e.jsx(L,{children:e.jsx("use",{href:d+"#icon-trash-03"})})})})]},n._id))})]}):e.jsx(X,{children:"Not found exercises"})]})},Se=t.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,Oe=t.ul`
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
`,k=t.h2`
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`,C=t.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,Te=t.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,We=t.div`
  width: 24px;
  height: 24px;
  background-color: ${i.colorBeige};
  border-radius: 50%;
`,S=t.svg`
  width: 20px;
  height: 20px;
  fill: ${i.colorOrange1};
`,Ee=t.svg`
  width: 24px;
  height: 24px;
`,Be=t.p`
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
`,Le=({userDiaryInformation:r,bmr:p})=>{const{burnedCalories:h,consumedCalories:x,remainingCalories:a,remainingSports:s}=r,[c,n]=b.useState(!1),l=y(A);return b.useEffect(()=>{a<0&&n(!0)},[a]),e.jsxs(Se,{children:[e.jsxs(Oe,{children:[e.jsxs(I,{children:[e.jsxs(z,{children:[e.jsx(S,{children:e.jsx("use",{href:d+"#icon-fluent_food-24-filled"})}),e.jsx(k,{children:"Daily calory intake"})]}),e.jsx(C,{children:p!==null?p:0})]}),e.jsxs(I,{children:[e.jsxs(z,{children:[e.jsx(S,{children:e.jsx("use",{href:d+"#icon-dumbbell"})}),e.jsx(k,{children:"Daily norm of sports"})]}),e.jsx(C,{children:"110 min"})]}),e.jsxs(I,{children:[e.jsxs(z,{children:[e.jsx(S,{children:e.jsx("use",{href:d+"#icon-fluent_food-apple-20-filled"})}),e.jsx(k,{children:"Calories consumed"})]}),e.jsx(C,{children:x&&!l?x:0})]}),e.jsxs(I,{children:[e.jsxs(z,{children:[e.jsx(S,{children:e.jsx("use",{href:d+"#icon-calories-1"})}),e.jsx(k,{children:"Calories burned"})]}),e.jsx(C,{children:h&&!l?h:0})]}),e.jsxs(I,{className:c?"redBg":"",children:[e.jsxs(z,{children:[e.jsx(S,{children:e.jsx("use",{href:d+"#icon-bubble"})}),e.jsx(k,{children:"The rest of the calories"})]}),e.jsx(C,{children:a&&!l?a:0})]}),e.jsxs(I,{className:c?"greenBg":"",children:[e.jsxs(z,{children:[e.jsx(S,{children:e.jsx("use",{href:d+"#icon-running-figure"})}),e.jsx(k,{children:"The rest of sports"})]}),e.jsxs(C,{children:[s&&!l?s:110," min"]})]})]}),e.jsxs(Te,{children:[e.jsx(We,{children:e.jsx(Ee,{children:e.jsx("use",{href:d+"#icon-running-stick-figure-svgrepo-com-1"})})}),e.jsx(Be,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},Ne=t.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,Pe=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,Ae=t.div`
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
`,Me=t.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,qe=()=>{const r=N(),p=y(De),h=y(Ie),{addProducts:x,addExercises:a}=p,[s,c]=b.useState(new Date),n=y(de),v=y(G).createdAt,o=T(s),w=T(v);return b.useEffect(()=>{(async()=>{try{await r(pe()),await r(P(o))}catch(g){O.error("Error fetching data:",g)}})()},[r,o,s]),e.jsx(le,{children:h?e.jsx(ae,{}):e.jsxs(Ne,{children:[e.jsxs(Pe,{children:[e.jsx(ce,{title:"Diary"}),e.jsx(ve,{currentDate:s,setCurrentDate:c,userDateRegistration:w})]}),e.jsxs(Me,{children:[e.jsx(Le,{userDiaryInformation:p,bmr:n}),e.jsxs(Ae,{children:[e.jsx(ze,{productsArray:x,date:o}),e.jsx(Ce,{exercisesArray:a,date:o})]})]})]})})};export{qe as default};
