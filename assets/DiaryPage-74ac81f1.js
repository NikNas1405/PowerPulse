import{s as i,g as t,r as $,j as e,a as o,u as W,f as S,h as R,i as A,N as B,k as H,m as L,Q as P,C as _,o as G}from"./index-b555377e.js";import{f as U,S as F}from"./StyledDatepicker-936aab5f.js";import{T as Y}from"./TitlePage-44bee814.js";import"./warning-5627fdc3.js";const Q=i.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,V=i.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
`,q=i.p`
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
`,J=i.svg`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,K=i.button`
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
`,X=i.button`
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
`,Z=({currentDate:r,setCurrentDate:x})=>{const[d,g]=$.useState(r),[c,a]=$.useState(!1),m=()=>{a(!c)},h=()=>{const s=new Date(d);s.setDate(d.getDate()-1),x(s),g(s)},l=()=>{const s=new Date(d);s.setDate(d.getDate()+1),x(s),g(s)},f=()=>{a(!1)};return e.jsxs(Q,{children:[e.jsxs(K,{onClick:m,children:[e.jsx(q,{children:U(d,"dd/MM/yyyy")}),e.jsx(J,{children:e.jsx("use",{href:o+"#icon-calendar"})})]}),e.jsx(X,{type:"button",onClick:h,children:e.jsx(I,{children:e.jsx("use",{href:o+"#icon-chevron-left"})})}),e.jsx(V,{type:"button",onClick:l,children:e.jsx(I,{children:e.jsx("use",{href:o+"#icon-chevron-right"})})}),e.jsx(F,{selectedDate:d,setSelectedDate:g,isOpen:c,onClose:f,setCurrentDate:x})]})},ee=i.div`
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
`,ie=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,te=i.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,ne=i.div`
  &:hover span {
    color: ${t.colorOrange1};
  }
`,re=i.span`
  color: ${t.colorOrange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,oe=i.p`
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
`,z=i.div`
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
`,se=i.ul`
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
`,C=i.ul`
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
`,p=i.li`
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
`,de=i.div`
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
`,le=i.div`
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
`,ae=i.div`
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
`,pe=i.div`
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
`,E=i.svg`
  stroke: ${t.colorOrange1};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`,N=i.span`
  @media screen and (min-width: 320px) {
    color: ${t.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,xe=r=>r.diary.allDiaryInformation,ce=r=>r.diary.isLoading,M=r=>r.diary.error,he=({productsArray:r,date:x})=>{const d=W(),c=S(R).blood,a=S(M),m=A("(max-width:768px)");let h,l;r&&(l=r.map(n=>n.productId.groupBloodNotAllowed[c])),l?h="Yes":h="No";const f=n=>n[0].toUpperCase()+n.slice(1).toLowerCase(),s=async n=>{try{await d(H(n)),await d(L(x))}catch(k){P.error("Some error occured, try again",k)}};return e.jsxs(ee,{children:[e.jsxs(ie,{children:[e.jsx(te,{children:"Products"}),e.jsx(ne,{children:e.jsxs(B,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(re,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:o+"#icon-arrow"})})]})})]}),r&&r.length>0&&!a?m?e.jsx(T,{children:e.jsx(z,{children:r.map(n=>e.jsxs(C,{children:[e.jsx(p,{children:"Title"}),e.jsx(p,{children:f(n.productId.title)}),e.jsx(p,{children:"Category"}),e.jsx(p,{children:f(n.productId.category)}),e.jsxs("div",{style:{display:"flex",gap:"14px"},children:[e.jsxs(de,{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsx(p,{children:"Calories"}),e.jsx(p,{children:n.calories})]}),e.jsxs(le,{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsx(p,{children:"Weight"}),e.jsx(p,{children:n.amount})]}),e.jsxs(ae,{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsx(p,{children:"Recommend"}),e.jsx(p,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:l?e.jsx("use",{href:o+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:o+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(N,{children:h})]})})]}),e.jsxs(pe,{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsx(p,{children:""}),e.jsx(p,{children:e.jsx(O,{type:"button",onClick:()=>s(n._id),children:e.jsx(E,{children:e.jsx("use",{href:o+"#icon-trash-03"})})})})]})]})]},n._id))})}):e.jsxs(T,{children:[e.jsxs(se,{children:[e.jsx(w,{children:"Title"}),e.jsx(w,{children:"Category"}),e.jsx(w,{children:"Calories"}),e.jsx(w,{children:"Weight"}),e.jsx(w,{children:"Recommend"}),e.jsx(w,{children:""})]}),e.jsx(z,{children:r.map(n=>e.jsxs(C,{children:[e.jsx(y,{children:f(n.productId.title)}),e.jsx(y,{children:f(n.productId.category)}),e.jsx(y,{children:n.calories}),e.jsx(y,{children:n.amount}),e.jsx(y,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:l?e.jsx("use",{href:o+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:o+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(N,{children:h})]})}),e.jsx(y,{children:e.jsx(O,{type:"button",onClick:()=>s(n._id),children:e.jsx(E,{children:e.jsx("use",{href:o+"#icon-trash-03"})})})})]},n._id))})]}):e.jsx(oe,{children:"Not found products"})]})},ge=i.div`
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
`,me=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`,fe=i.p`
  color: #efede880;
  font-size: 14px;
  line-height: 18px;
`,we=i.div`
  &:hover span {
    color: ${t.colorOrange1};
  }
`,ye=i.span`
  color: ${t.colorOrange};
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,je=i.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,ue=i.p`
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
`,be=({exercisesArray:r})=>e.jsxs(ge,{children:[e.jsxs(me,{children:[e.jsx(fe,{children:"Exercises"}),e.jsx(we,{children:e.jsxs(B,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(ye,{children:"Add exercises"}),e.jsx(je,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:o+"#icon-arrow",style:{stroke:t.colorOrange}})})]})})]}),e.jsx(ue,{children:"Not found exercises"})]}),ve=i.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,De=i.ul`
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
`,$e=i.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Se=i.div`
  width: 24px;
  height: 24px;
  background-color: ${t.colorBeige};
  border-radius: 50%;
`,D=i.svg`
  width: 20px;
  height: 20px;
  fill: ${t.colorOrange1};
`,ke=i.svg`
  width: 24px;
  height: 24px;
`,Ie=i.p`
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
`,Te=({userDiaryInformation:r})=>{const{burnedCalories:x,caloriesIntake:d,consumedCalories:g,remainingCalories:c,remainingSports:a}=r,[m,h]=$.useState(!1),l=S(M);return $.useEffect(()=>{c<0&&h(!0)},[c]),e.jsxs(ve,{children:[e.jsxs(De,{children:[e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(D,{children:e.jsx("use",{href:o+"#icon-fluent_food-24-filled"})}),e.jsx(b,{children:"Daily calory intake"})]}),e.jsx(v,{children:d&&!l?d:0})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(D,{children:e.jsx("use",{href:o+"#icon-dumbbell"})}),e.jsx(b,{children:"Daily norm of sports"})]}),e.jsx(v,{children:"110 min"})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(D,{children:e.jsx("use",{href:o+"#icon-fluent_food-apple-20-filled"})}),e.jsx(b,{children:"Calories consumed"})]}),e.jsx(v,{children:g&&!l?g:0})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(D,{children:e.jsx("use",{href:o+"#icon-calories-1"})}),e.jsx(b,{children:"Calories burned"})]}),e.jsx(v,{children:x&&!l?x:0})]}),e.jsxs(j,{className:m?"redBg":"",children:[e.jsxs(u,{children:[e.jsx(D,{children:e.jsx("use",{href:o+"#icon-bubble"})}),e.jsx(b,{children:"The rest of the calories"})]}),e.jsx(v,{children:c&&!l?c:0})]}),e.jsxs(j,{className:m?"greenBg":"",children:[e.jsxs(u,{children:[e.jsx(D,{children:e.jsx("use",{href:o+"#icon-running-figure"})}),e.jsx(b,{children:"The rest of sports"})]}),e.jsxs(v,{children:[a&&!l?a:110," min"]})]})]}),e.jsxs($e,{children:[e.jsx(Se,{children:e.jsx(ke,{children:e.jsx("use",{href:o+"#icon-running-stick-figure-svgrepo-com-1"})})}),e.jsx(Ie,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},ze=i.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,Ce=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,Oe=i.div`
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
`,Ee=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Pe=()=>{const r=W(),x=S(xe),d=S(ce),{addProducts:g,addExercises:c}=x,[a,m]=$.useState(new Date),h=String(a.getDate()).padStart(2,"0"),l=String(a.getMonth()+1).padStart(2,"0"),f=a.getFullYear(),s=`${h}-${l}-${f}`;return $.useEffect(()=>{(async()=>{try{await r(L(s))}catch(k){P.error("Error fetching data:",k),console.error("Error fetching data:",k)}})()},[r,s,a]),e.jsx(_,{children:d?e.jsx(G,{}):e.jsxs(ze,{children:[e.jsxs(Ce,{children:[e.jsx(Y,{title:"Diary"}),e.jsx(Z,{currentDate:a,setCurrentDate:m})]}),e.jsxs(Ee,{children:[e.jsx(Te,{userDiaryInformation:x}),e.jsxs(Oe,{children:[e.jsx(he,{productsArray:g,date:s}),e.jsx(be,{exercisesArray:c,date:s})]})]})]})})};export{Pe as default};
