import{j as e,h as R,s as i,g as t,r as $,a as o,u as N,e as S,i as A,k as H,N as B,m as _,o as L,Q as M,C as G,p as F}from"./index-2d91437d.js";import{W as U,e as Y,f as Q,a as P,s as V,b as q}from"./StyledDatepicker.styled-e23ea125.js";import{T as J}from"./TitlePage-58fc01c9.js";import"./defineProperty-7712ce6c.js";const K=({selectedDate:s,setSelectedDate:p,isOpen:r,onClose:g,setCurrentDate:x})=>{const d=c=>{p(c),x(c),g()};return e.jsxs(U,{children:[e.jsx(Y,{selected:s,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:c=>c.substr(0,1),open:r,customInput:e.jsx("div",{style:{display:"none"}}),onChange:d}),e.jsx(R,{})]})},X=i.div`
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
`,oe=({currentDate:s,setCurrentDate:p})=>{const[r,g]=$.useState(s),[x,d]=$.useState(!1),c=()=>{d(!x)},m=()=>{const l=new Date(r);l.setDate(r.getDate()-1),p(l),g(l)},a=()=>{const l=new Date(r);l.setDate(r.getDate()+1),p(l),g(l)},f=()=>{d(!1)};return e.jsxs(X,{children:[e.jsxs(te,{onClick:c,children:[e.jsx(ee,{children:Q(r,"dd/MM/yyyy")}),e.jsx(ie,{children:e.jsx("use",{href:o+"#icon-calendar"})})]}),e.jsx(ne,{type:"button",onClick:m,children:e.jsx(I,{children:e.jsx("use",{href:o+"#icon-chevron-left"})})}),e.jsx(Z,{type:"button",onClick:a,children:e.jsx(I,{children:e.jsx("use",{href:o+"#icon-chevron-right"})})}),e.jsx(K,{selectedDate:r,setSelectedDate:g,isOpen:x,onClose:f,setCurrentDate:p})]})},re=i.div`
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
`,le=i.div`
  &:hover span {
    color: ${t.colorOrange1};
  }
`,ae=i.span`
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
`,fe=({productsArray:s,date:p})=>{const r=N(),x=S(A).blood,d=S(P),c=H("(max-width:768px)");let m,a;s&&(a=s.map(n=>n.productId.groupBloodNotAllowed[x])),a?m="Yes":m="No";const f=n=>n[0].toUpperCase()+n.slice(1).toLowerCase(),l=async n=>{try{await r(_(n)),await r(L(p))}catch(k){M.error("Some error occured, try again",k)}};return e.jsxs(re,{children:[e.jsxs(se,{children:[e.jsx(de,{children:"Products"}),e.jsx(le,{children:e.jsxs(B,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(ae,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:o+"#icon-arrow"})})]})})]}),s&&s.length>0&&!d?c?e.jsx(C,{children:e.jsx(T,{children:s.map(n=>e.jsxs(z,{children:[e.jsx(h,{children:"Title"}),e.jsx(h,{children:f(n.productId.title)}),e.jsx(h,{children:"Category"}),e.jsx(h,{children:f(n.productId.category)}),e.jsxs("div",{style:{display:"flex",gap:"14px"},children:[e.jsxs(ce,{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsx(h,{children:"Calories"}),e.jsx(h,{children:n.calories})]}),e.jsxs(he,{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsx(h,{children:"Weight"}),e.jsx(h,{children:n.amount})]}),e.jsxs(ge,{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsx(h,{children:"Recommend"}),e.jsx(h,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:a?e.jsx("use",{href:o+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:o+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(E,{children:m})]})})]}),e.jsxs(me,{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsx(h,{children:""}),e.jsx(h,{children:e.jsx(O,{type:"button",onClick:()=>l(n._id),children:e.jsx(W,{children:e.jsx("use",{href:o+"#icon-trash-03"})})})})]})]})]},n._id))})}):e.jsxs(C,{children:[e.jsxs(xe,{children:[e.jsx(w,{children:"Title"}),e.jsx(w,{children:"Category"}),e.jsx(w,{children:"Calories"}),e.jsx(w,{children:"Weight"}),e.jsx(w,{children:"Recommend"}),e.jsx(w,{children:""})]}),e.jsx(T,{children:s.map(n=>e.jsxs(z,{children:[e.jsx(y,{children:f(n.productId.title)}),e.jsx(y,{children:f(n.productId.category)}),e.jsx(y,{children:n.calories}),e.jsx(y,{children:n.amount}),e.jsx(y,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:a?e.jsx("use",{href:o+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:o+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(E,{children:m})]})}),e.jsx(y,{children:e.jsx(O,{type:"button",onClick:()=>l(n._id),children:e.jsx(W,{children:e.jsx("use",{href:o+"#icon-trash-03"})})})})]},n._id))})]}):e.jsx(pe,{children:"Not found products"})]})},we=i.div`
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
`,$e=()=>e.jsxs(we,{children:[e.jsxs(ye,{children:[e.jsx(je,{children:"Exercises"}),e.jsx(ue,{children:e.jsxs(B,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(be,{children:"Add exercises"}),e.jsx(ve,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:o+"#icon-arrow",style:{stroke:t.colorOrange}})})]})})]}),e.jsx(De,{children:"Not found exercises"})]}),Se=i.div`
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
`,Oe=({userDiaryInformation:s})=>{const{burnedCalories:p,caloriesIntake:r,consumedCalories:g,remainingCalories:x,remainingSports:d}=s,[c,m]=$.useState(!1),a=S(P);return $.useEffect(()=>{x<0&&m(!0)},[x]),e.jsxs(Se,{children:[e.jsxs(ke,{children:[e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(D,{children:e.jsx("use",{href:o+"#icon-fluent_food-24-filled"})}),e.jsx(b,{children:"Daily calory intake"})]}),e.jsx(v,{children:r&&!a?r:0})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(D,{children:e.jsx("use",{href:o+"#icon-dumbbell"})}),e.jsx(b,{children:"Daily norm of sports"})]}),e.jsx(v,{children:"110 min"})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(D,{children:e.jsx("use",{href:o+"#icon-fluent_food-apple-20-filled"})}),e.jsx(b,{children:"Calories consumed"})]}),e.jsx(v,{children:g&&!a?g:0})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(D,{children:e.jsx("use",{href:o+"#icon-calories-1"})}),e.jsx(b,{children:"Calories burned"})]}),e.jsx(v,{children:p&&!a?p:0})]}),e.jsxs(j,{className:c?"redBg":"",children:[e.jsxs(u,{children:[e.jsx(D,{children:e.jsx("use",{href:o+"#icon-bubble"})}),e.jsx(b,{children:"The rest of the calories"})]}),e.jsx(v,{children:x&&!a?x:0})]}),e.jsxs(j,{className:c?"greenBg":"",children:[e.jsxs(u,{children:[e.jsx(D,{children:e.jsx("use",{href:o+"#icon-running-figure"})}),e.jsx(b,{children:"The rest of sports"})]}),e.jsxs(v,{children:[d&&!a?d:110," min"]})]})]}),e.jsxs(Ie,{children:[e.jsx(Ce,{children:e.jsx(Te,{children:e.jsx("use",{href:o+"#icon-running-stick-figure-svgrepo-com-1"})})}),e.jsx(ze,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},We=i.div`
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
`,Ae=()=>{const s=N(),p=S(V),r=S(q),{addProducts:g,addExercises:x}=p,[d,c]=$.useState(new Date),m=String(d.getDate()).padStart(2,"0"),a=String(d.getMonth()+1).padStart(2,"0"),f=d.getFullYear(),l=`${m}-${a}-${f}`;return $.useEffect(()=>{(async()=>{try{await s(L(l))}catch(k){M.error("Error fetching data:",k),console.error("Error fetching data:",k)}})()},[s,l,d]),e.jsx(G,{children:r?e.jsx(F,{}):e.jsxs(We,{children:[e.jsxs(Ee,{children:[e.jsx(J,{title:"Diary"}),e.jsx(oe,{currentDate:d,setCurrentDate:c})]}),e.jsxs(Be,{children:[e.jsx(Oe,{userDiaryInformation:p}),e.jsxs(Ne,{children:[e.jsx(fe,{productsArray:g,date:l}),e.jsx($e,{exercisesArray:x,date:l})]})]})]})})};export{Ae as default};
