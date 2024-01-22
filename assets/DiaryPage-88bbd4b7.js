import{j as e,h as R,s as i,g as t,r as $,a as r,u as N,e as S,i as A,k as H,N as B,m as _,o as L,Q as M,C as G,p as F}from"./index-1225a6a6.js";import{W as U,e as Y,f as Q,a as P,s as V,b as q}from"./StyledDatepicker.styled-9cb0cb81.js";import{T as J}from"./TitlePage-cb365066.js";import"./warning-764e03a7.js";const K=({selectedDate:o,setSelectedDate:p,isOpen:s,onClose:g,setCurrentDate:x})=>{const d=c=>{p(c),x(c),g()};return e.jsxs(U,{children:[e.jsx(Y,{selected:o,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:c=>c.substr(0,1),open:s,customInput:e.jsx("div",{style:{display:"none"}}),onChange:d}),e.jsx(R,{})]})},X=i.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,Z=i.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
`,ee=i.p`
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
`,ie=i.svg`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,te=i.button`
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
`,ne=i.button`
  display: flex;
  margin: 0 6px 0 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
`,I=i.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
`,re=({currentDate:o,setCurrentDate:p})=>{const[s,g]=$.useState(o),[x,d]=$.useState(!1),c=()=>{d(!x)},m=()=>{const a=new Date(s);a.setDate(s.getDate()-1),p(a),g(a)},l=()=>{const a=new Date(s);a.setDate(s.getDate()+1),p(a),g(a)},f=()=>{d(!1)};return e.jsxs(X,{children:[e.jsxs(te,{onClick:c,children:[e.jsx(ee,{children:Q(s,"dd/MM/yyyy")}),e.jsx(ie,{children:e.jsx("use",{href:r+"#icon-calendar"})})]}),e.jsx(ne,{type:"button",onClick:m,children:e.jsx(I,{children:e.jsx("use",{href:r+"#icon-chevron-left"})})}),e.jsx(Z,{type:"button",onClick:l,children:e.jsx(I,{children:e.jsx("use",{href:r+"#icon-chevron-right"})})}),e.jsx(K,{selectedDate:s,setSelectedDate:g,isOpen:x,onClose:f,setCurrentDate:p})]})},oe=i.div`
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
`,se=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,de=i.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,ae=i.div`
  &:hover span {
    color: ${t.colorOrange1};
  }
`,le=i.span`
  color: ${t.colorOrange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,pe=i.p`
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
`,C=i.div`
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
`,T=i.div`
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
`,xe=i.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,w=i.li`
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
`,z=i.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,h=i.li`
  @media screen and (min-width: 375px) {
    width: 290px;

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
  }
`,y=i.li`
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
`,ce=i.div`
  > li {
    width: 79px;

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
      margin-bottom: 40px;
    }
  }
`,he=i.div`
  > li {
    width: 78px;
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
`,ge=i.div`
  > li {
    width: 74px;
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
`,me=i.div`
  > li {
    &:nth-of-type(1) {
      width: 20px;
      color: ${t.colorOrange1};
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
`,O=i.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0;
  position: relative;
`,W=i.svg`
  stroke: ${t.colorOrange1};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`,E=i.span`
  @media screen and (min-width: 320px) {
    color: ${t.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,fe=({productsArray:o,date:p})=>{const s=N(),x=S(A).blood,d=S(P),c=H("(max-width:768px)");let m,l;o&&(l=o.map(n=>n.productId.groupBloodNotAllowed[x])),l?m="Yes":m="No";const f=n=>n[0].toUpperCase()+n.slice(1).toLowerCase(),a=async n=>{try{await s(_(n)),await s(L(p))}catch(k){M.error("Some error occured, try again",k)}};return e.jsxs(oe,{children:[e.jsxs(se,{children:[e.jsx(de,{children:"Products"}),e.jsx(ae,{children:e.jsxs(B,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(le,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:r+"#icon-arrow"})})]})})]}),o&&o.length>0&&!d?c?e.jsx(C,{children:e.jsx(T,{children:o.map(n=>e.jsxs(z,{children:[e.jsx(h,{children:"Title"}),e.jsx(h,{children:f(n.productId.title)}),e.jsx(h,{children:"Category"}),e.jsx(h,{children:f(n.productId.category)}),e.jsxs("div",{style:{display:"flex",gap:"14px"},children:[e.jsxs(ce,{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsx(h,{children:"Calories"}),e.jsx(h,{children:n.calories})]}),e.jsxs(he,{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsx(h,{children:"Weight"}),e.jsx(h,{children:n.amount})]}),e.jsxs(ge,{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsx(h,{children:"Recommend"}),e.jsx(h,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:l?e.jsx("use",{href:r+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:r+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(E,{children:m})]})})]}),e.jsxs(me,{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsx(h,{children:""}),e.jsx(h,{children:e.jsx(O,{type:"button",onClick:()=>a(n._id),children:e.jsx(W,{children:e.jsx("use",{href:r+"#icon-trash-03"})})})})]})]})]},n._id))})}):e.jsxs(C,{children:[e.jsxs(xe,{children:[e.jsx(w,{children:"Title"}),e.jsx(w,{children:"Category"}),e.jsx(w,{children:"Calories"}),e.jsx(w,{children:"Weight"}),e.jsx(w,{children:"Recommend"}),e.jsx(w,{children:""})]}),e.jsx(T,{children:o.map(n=>e.jsxs(z,{children:[e.jsx(y,{children:f(n.productId.title)}),e.jsx(y,{children:f(n.productId.category)}),e.jsx(y,{children:n.calories}),e.jsx(y,{children:n.amount}),e.jsx(y,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:l?e.jsx("use",{href:r+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:r+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(E,{children:m})]})}),e.jsx(y,{children:e.jsx(O,{type:"button",onClick:()=>a(n._id),children:e.jsx(W,{children:e.jsx("use",{href:r+"#icon-trash-03"})})})})]},n._id))})]}):e.jsx(pe,{children:"Not found products"})]})},we=i.div`
  width: 100%;
  min-height: 335px;
  padding: 16px 8px 16px 16px;

  border: 1px solid #efede820;
  border-radius: 12px;

  background-color: #efede80d;

  @media (min-width: 768px) {
    min-height: auto;
    height: 234px;
    width: 704px;
  }
  @media (min-width: 1440px) {
    width: 826px;
  }

  & table {
    width: 100%;
  }
`,ye=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`,je=i.p`
  color: #efede880;
  font-size: 14px;
  line-height: 18px;
`,ue=i.div`
  &:hover span {
    color: ${t.colorOrange1};
  }
`,be=i.span`
  color: ${t.colorOrange};
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,ve=i.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,De=i.p`
  color: #efede84d;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  margin-top: 125px;

  @media (min-width: 768px) {
    margin-top: 65px;
    font-size: 16px;
    line-height: 24px;
  }
`,$e=({exercisesArray:o})=>e.jsxs(we,{children:[e.jsxs(ye,{children:[e.jsx(je,{children:"Exercises"}),e.jsx(ue,{children:e.jsxs(B,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(be,{children:"Add exercises"}),e.jsx(ve,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:r+"#icon-arrow",style:{stroke:t.colorOrange}})})]})})]}),e.jsx(De,{children:"Not found exercises"})]}),Se=i.div`
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
`,j=i.li`
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
`,u=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,b=i.h2`
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`,v=i.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,Ie=i.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Ce=i.div`
  width: 24px;
  height: 24px;
  background-color: ${t.colorBeige};
  border-radius: 50%;
`,D=i.svg`
  width: 20px;
  height: 20px;
  fill: ${t.colorOrange1};
`,Te=i.svg`
  width: 24px;
  height: 24px;
`,ze=i.p`
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
`,Oe=({userDiaryInformation:o})=>{const{burnedCalories:p,caloriesIntake:s,consumedCalories:g,remainingCalories:x,remainingSports:d}=o,[c,m]=$.useState(!1),l=S(P);return $.useEffect(()=>{x<0&&m(!0)},[x]),e.jsxs(Se,{children:[e.jsxs(ke,{children:[e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(D,{children:e.jsx("use",{href:r+"#icon-fluent_food-24-filled"})}),e.jsx(b,{children:"Daily calory intake"})]}),e.jsx(v,{children:s&&!l?s:0})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(D,{children:e.jsx("use",{href:r+"#icon-dumbbell"})}),e.jsx(b,{children:"Daily norm of sports"})]}),e.jsx(v,{children:"110 min"})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(D,{children:e.jsx("use",{href:r+"#icon-fluent_food-apple-20-filled"})}),e.jsx(b,{children:"Calories consumed"})]}),e.jsx(v,{children:g&&!l?g:0})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(D,{children:e.jsx("use",{href:r+"#icon-calories-1"})}),e.jsx(b,{children:"Calories burned"})]}),e.jsx(v,{children:p&&!l?p:0})]}),e.jsxs(j,{className:c?"redBg":"",children:[e.jsxs(u,{children:[e.jsx(D,{children:e.jsx("use",{href:r+"#icon-bubble"})}),e.jsx(b,{children:"The rest of the calories"})]}),e.jsx(v,{children:x&&!l?x:0})]}),e.jsxs(j,{className:c?"greenBg":"",children:[e.jsxs(u,{children:[e.jsx(D,{children:e.jsx("use",{href:r+"#icon-running-figure"})}),e.jsx(b,{children:"The rest of sports"})]}),e.jsxs(v,{children:[d&&!l?d:110," min"]})]})]}),e.jsxs(Ie,{children:[e.jsx(Ce,{children:e.jsx(Te,{children:e.jsx("use",{href:r+"#icon-running-stick-figure-svgrepo-com-1"})})}),e.jsx(ze,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},We=i.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,Ee=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,Ne=i.div`
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
`,Be=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Ae=()=>{const o=N(),p=S(V),s=S(q),{addProducts:g,addExercises:x}=p,[d,c]=$.useState(new Date),m=String(d.getDate()).padStart(2,"0"),l=String(d.getMonth()+1).padStart(2,"0"),f=d.getFullYear(),a=`${m}-${l}-${f}`;return $.useEffect(()=>{(async()=>{try{await o(L(a))}catch(k){M.error("Error fetching data:",k),console.error("Error fetching data:",k)}})()},[o,a,d]),e.jsx(G,{children:s?e.jsx(F,{}):e.jsxs(We,{children:[e.jsxs(Ee,{children:[e.jsx(J,{title:"Diary"}),e.jsx(re,{currentDate:d,setCurrentDate:c})]}),e.jsxs(Be,{children:[e.jsx(Oe,{userDiaryInformation:p}),e.jsxs(Ne,{children:[e.jsx(fe,{productsArray:g,date:a}),e.jsx($e,{exercisesArray:x,date:a})]})]})]})})};export{Ae as default};
