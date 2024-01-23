import{s as i,g as t,j as e,t as se,Q as O,r as y,a as l,u as L,v as j,w as Y,x as q,N as F,y as de,z as M,A as le,B as ae,C as pe,D as he,G as xe}from"./index-a1a718da.js";import{c as T}from"./helpers-d77433ec.js";import{e as ce,f as fe}from"./react-datepicker-cssmodules-95911a94.js";import{T as me}from"./TitlePage-55b4bfb8.js";import"./defineProperty-dcd47f18.js";const we=i.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,ge=i.button`
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
`,ve=i.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,$e=i.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`,De=i.div`
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
`;const Ie=({selectedDate:r,setSelectedDate:h,isOpen:x,onClose:c,setCurrentDate:a,userDateRegistration:d})=>{const p=T(new Date),o=s=>{const w=T(s);p>=w&&w>=d?(h(s),a(s),c()):O.error(`However, we don't have any data to show you. You can review the information from the day of your registration: ${d} up to today: ${p}. `)};return e.jsxs(De,{children:[e.jsx(ce,{selected:r,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:s=>s.substr(0,1),open:x,customInput:e.jsx("div",{style:{display:"none"}}),onChange:o,minDate:new Date(d),maxDate:new Date(p)}),e.jsx(se,{})]})},ze=({currentDate:r,setCurrentDate:h,userDateRegistration:x})=>{const[c,a]=y.useState(r),[d,p]=y.useState(!1),[o,s]=y.useState(!1),[w,n]=y.useState(!1),g=()=>{p(!d)},_=()=>{s(!0);const u=new Date(r);T(u)>x?(u.setDate(u.getDate()-1),h(u),a(u),s(!1)):(O.error(`However, we don't have any data to show you. Selected date cannot be earlier than the registration date: ${x}.`),s(!0))},B=()=>{n(!0);const u=T(new Date),W=new Date(c);W.setDate(c.getDate()+1),W>new Date?(O.error(`However, we don't have any data to show you. Selected date cannot be later than today's date: ${u}.`),n(!0)):(h(W),a(W),n(!1))},re=()=>{p(!1)};return e.jsxs(we,{children:[e.jsxs(ue,{onClick:g,children:[e.jsx(ye,{children:fe(c,"dd/MM/yyyy")}),e.jsx(je,{children:e.jsx("use",{href:l+"#icon-calendar"})})]}),e.jsx(be,{type:"button",onClick:_,children:e.jsx(ve,{className:o?"passivePrev":"",children:e.jsx("use",{href:l+"#icon-chevron-left"})})}),e.jsx(ge,{type:"button",onClick:B,children:e.jsx($e,{className:w?"passiveNext":"",children:e.jsx("use",{href:l+"#icon-chevron-right"})})}),e.jsx(Ie,{selectedDate:c,setSelectedDate:a,isOpen:d,onClose:re,setCurrentDate:h,userDateRegistration:x})]})},Q=i.div`
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
`,N=i.div`
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
`,P=i.div`
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
`,ke=i.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,$=i.li`
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
`,D=i.li`
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
`,oe=i.div`
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
`,ne=i.div`
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

  &:hover {
    > svg {
      stroke: ${t.colorOrange};
    }
  }
`,A=i.svg`
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
`,Ce=r=>r.diary.allDiaryInformation,Se=r=>r.diary.isLoading,H=r=>r.diary.error,Oe=({productsArray:r,date:h})=>{const x=L(),a=j(Y).blood,d=j(H),p=q("(max-width:768px)"),o=n=>n[0].toUpperCase()+n.slice(1).toLowerCase();let s;const w=async n=>{try{await x(de(n)),await x(M(h))}catch(g){O.error("Some error occured, try again",g)}};return e.jsxs(Q,{children:[e.jsxs(V,{children:[e.jsx(J,{children:"Products"}),e.jsx(K,{children:e.jsxs(F,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(X,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:l+"#icon-arrow"})})]})})]}),r&&r.length>0&&!d?p?e.jsx(N,{children:e.jsx(P,{children:r.map(n=>{const g=n.productId.groupBloodNotAllowed[a]?s="Yes":s="No";return e.jsxs(R,{children:[e.jsx(m,{children:"Title"}),e.jsx(m,{children:o(n.productId.title)}),e.jsx(m,{children:"Category"}),e.jsx(m,{children:o(n.productId.category)}),e.jsxs(ee,{children:[e.jsxs(te,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:"Calories"}),e.jsx(m,{children:n.calories})]}),e.jsxs(ie,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:"Weight"}),e.jsx(m,{children:n.amount})]}),e.jsxs(oe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:"Recommend"}),e.jsx(m,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:g==="Yes"?e.jsx("use",{href:l+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:l+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(U,{children:s})]})})]}),e.jsxs(ne,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:""}),e.jsx(m,{children:e.jsx(E,{type:"button",onClick:()=>w(n._id),children:e.jsx(A,{children:e.jsx("use",{href:l+"#icon-trash-03"})})})})]})]})]},n._id)})})}):e.jsxs(N,{children:[e.jsxs(ke,{children:[e.jsx($,{children:"Title"}),e.jsx($,{children:"Category"}),e.jsx($,{children:"Calories"}),e.jsx($,{children:"Weight"}),e.jsx($,{children:"Recommend"}),e.jsx($,{children:""})]}),e.jsx(P,{children:r.map(n=>{const g=n.productId.groupBloodNotAllowed[a]?s="Yes":s="No";return e.jsxs(R,{children:[e.jsx(D,{children:o(n.productId.title)}),e.jsx(D,{children:o(n.productId.category)}),e.jsx(D,{children:n.calories}),e.jsx(D,{children:n.amount}),e.jsx(D,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:g==="Yes"?e.jsx("use",{href:l+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:l+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(U,{children:s})]})}),e.jsx(D,{children:e.jsx(E,{type:"button",onClick:()=>w(n._id),children:e.jsx(A,{children:e.jsx("use",{href:l+"#icon-trash-03"})})})})]},n._id)})})]}):e.jsx(Z,{children:"Not found products"})]})},Te=i.ul`
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
`,b=i.li`
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
`,v=i.li`
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
`,We=({exercisesArray:r,date:h})=>{const x=q("(max-width:768px)"),c=j(H),a=L(),d=o=>o[0].toUpperCase()+o.slice(1).toLowerCase(),p=async o=>{try{await a(le(o)),await a(M(h))}catch(s){console.log(s),O.error("Some error occured, try again",s)}};return e.jsxs(Q,{children:[e.jsxs(V,{children:[e.jsx(J,{children:"Exercises"}),e.jsx(K,{children:e.jsxs(F,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(X,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:l+"#icon-arrow"})})]})})]}),r&&r.length>0&&!c?x?e.jsx(N,{children:e.jsx(P,{children:r.map(o=>e.jsxs(G,{children:[e.jsx(f,{children:"Body Part"}),e.jsx(f,{children:d(o.exerciseId.bodyPart)}),e.jsx(f,{children:"Equipment"}),e.jsx(f,{children:d(o.exerciseId.equipment)}),e.jsx(f,{children:"Name"}),e.jsx(f,{children:d(o.exerciseId.name)}),e.jsxs(ee,{children:[e.jsxs(te,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:"Target"}),e.jsx(f,{children:d(o.exerciseId.target)})]}),e.jsxs(ie,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:"Burned Calories"}),e.jsx(f,{children:o.exerciseId.burnedCalories})]}),e.jsxs(oe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:"Time"}),e.jsx(f,{children:o.time})]}),e.jsxs(ne,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:""}),e.jsx(f,{children:e.jsx(E,{type:"button",onClick:()=>p(o._id),children:e.jsx(A,{children:e.jsx("use",{href:l+"#icon-trash-03"})})})})]})]})]},o._id))})}):e.jsxs(N,{children:[e.jsxs(Te,{children:[e.jsx(b,{children:"Body Part"}),e.jsx(b,{children:"Equipment"}),e.jsx(b,{children:"Name"}),e.jsx(b,{children:"Target"}),e.jsx(b,{children:"Burned Calories"}),e.jsx(b,{children:"Time"}),e.jsx(b,{children:""})]}),e.jsx(P,{children:r.map(o=>e.jsxs(G,{children:[e.jsx(v,{children:d(o.exerciseId.bodyPart)}),e.jsx(v,{children:d(o.exerciseId.equipment)}),e.jsx(v,{children:d(o.exerciseId.name)}),e.jsx(v,{children:d(o.exerciseId.target)}),e.jsx(v,{children:o.exerciseId.burnedCalories}),e.jsx(v,{children:o.time}),e.jsx(v,{children:e.jsx(E,{type:"button",onClick:()=>p(o._id),children:e.jsx(A,{children:e.jsx("use",{href:l+"#icon-trash-03"})})})})]},o._id))})]}):e.jsx(Z,{children:"Not found exercises"})]})},Ne=i.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,Pe=i.ul`
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
`,I=i.li`
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
`,z=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,k=i.h2`
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`,C=i.p`
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
`,Ae=i.div`
  width: 24px;
  height: 24px;
  background-color: ${t.colorBeige};
  border-radius: 50%;
`,S=i.svg`
  width: 20px;
  height: 20px;
  fill: ${t.colorOrange1};
`,Be=i.svg`
  width: 24px;
  height: 24px;
`,Le=i.p`
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
`,Me=({userDiaryInformation:r,bmr:h})=>{const{burnedCalories:x,consumedCalories:c,remainingCalories:a,remainingSports:d}=r,[p,o]=y.useState(!1),s=j(H);return y.useEffect(()=>{a<0&&o(!0)},[a]),e.jsxs(Ne,{children:[e.jsxs(Pe,{children:[e.jsxs(I,{children:[e.jsxs(z,{children:[e.jsx(S,{children:e.jsx("use",{href:l+"#icon-fluent_food-24-filled"})}),e.jsx(k,{children:"Daily calory intake"})]}),e.jsx(C,{children:h!==null?h:0})]}),e.jsxs(I,{children:[e.jsxs(z,{children:[e.jsx(S,{children:e.jsx("use",{href:l+"#icon-dumbbell"})}),e.jsx(k,{children:"Daily norm of sports"})]}),e.jsx(C,{children:"110 min"})]}),e.jsxs(I,{children:[e.jsxs(z,{children:[e.jsx(S,{children:e.jsx("use",{href:l+"#icon-fluent_food-apple-20-filled"})}),e.jsx(k,{children:"Calories consumed"})]}),e.jsx(C,{children:c&&!s?c:0})]}),e.jsxs(I,{children:[e.jsxs(z,{children:[e.jsx(S,{children:e.jsx("use",{href:l+"#icon-calories-1"})}),e.jsx(k,{children:"Calories burned"})]}),e.jsx(C,{children:x&&!s?x:0})]}),e.jsxs(I,{className:p?"redBg":"",children:[e.jsxs(z,{children:[e.jsx(S,{children:e.jsx("use",{href:l+"#icon-bubble"})}),e.jsx(k,{children:"The rest of the calories"})]}),e.jsx(C,{children:a&&!s?a:0})]}),e.jsxs(I,{className:p?"greenBg":"",children:[e.jsxs(z,{children:[e.jsx(S,{children:e.jsx("use",{href:l+"#icon-running-figure"})}),e.jsx(k,{children:"The rest of sports"})]}),e.jsxs(C,{children:[d&&!s?d:110," min"]})]})]}),e.jsxs(Ee,{children:[e.jsx(Ae,{children:e.jsx(Be,{children:e.jsx("use",{href:l+"#icon-running-stick-figure-svgrepo-com-1"})})}),e.jsx(Le,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},He=i.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,_e=i.div`
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
`,Ue=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Ve=()=>{const r=L(),h=j(Ce),x=j(Se),{addProducts:c,addExercises:a}=h,[d,p]=y.useState(new Date),o=j(ae),w=j(Y).createdAt,n=T(d),g=T(w);return y.useEffect(()=>{(async()=>{try{await r(xe()),await r(M(n))}catch(B){O.error("Error fetching data:",B)}})()},[r,n,d]),e.jsx(pe,{children:x?e.jsx(he,{}):e.jsxs(He,{children:[e.jsxs(_e,{children:[e.jsx(me,{title:"Diary"}),e.jsx(ze,{currentDate:d,setCurrentDate:p,userDateRegistration:g})]}),e.jsxs(Ue,{children:[e.jsx(Me,{userDiaryInformation:h,bmr:o}),e.jsxs(Re,{children:[e.jsx(Oe,{productsArray:c,date:n}),e.jsx(We,{exercisesArray:a,date:n})]})]})]})})};export{Ve as default};