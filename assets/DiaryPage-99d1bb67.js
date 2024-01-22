import{s as i,g as n,r as D,j as e,a as r,u as E,f as O,h as W,i as M,N as B,k as R,Q as P,C as A,m as L}from"./index-bb43996a.js";import{f as H,S as _}from"./StyledDatepicker-6d36d664.js";import{T as G}from"./TitlePage-04fb8388.js";import"./warning-45b1da1e.js";const U=i.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,F=i.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
`,Y=i.p`
  font-size: 24px;
  line-height: 1.33;
  margin: 0;
  padding: 0;
  color: ${n.colorWhite};
  font-weight: 700;

  &:hover {
    color: ${n.colorOrange1};
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.1;
  }
`,Q=i.svg`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,V=i.button`
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
`,q=i.button`
  display: flex;
  margin: 0 6px 0 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
`,k=i.svg`
  width: 100%;
  height: 100%;
  fill: ${n.colorWhite};
`,J=({currentDate:o,setCurrentDate:x})=>{const[d,h]=D.useState(o),[s,l]=D.useState(!1),p=()=>{l(!s)},c=()=>{const g=new Date(d);g.setDate(d.getDate()-1),x(g),h(g)},f=()=>{const g=new Date(d);g.setDate(d.getDate()+1),x(g),h(g)},t=()=>{l(!1)};return e.jsxs(U,{children:[e.jsxs(V,{onClick:p,children:[e.jsx(Y,{children:H(d,"dd/MM/yyyy")}),e.jsx(Q,{children:e.jsx("use",{href:r+"#icon-calendar"})})]}),e.jsx(q,{type:"button",onClick:c,children:e.jsx(k,{children:e.jsx("use",{href:r+"#icon-chevron-left"})})}),e.jsx(F,{type:"button",onClick:f,children:e.jsx(k,{children:e.jsx("use",{href:r+"#icon-chevron-right"})})}),e.jsx(_,{selectedDate:d,setSelectedDate:h,isOpen:s,onClose:t,setCurrentDate:x})]})},K=i.div`
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
`,X=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Z=i.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,ee=i.div`
  &:hover span {
    color: ${n.colorOrange1};
  }
`,ie=i.span`
  color: ${n.colorOrange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,te=i.p`
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
`,ne=i.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,m=i.li`
  color: #ef8964;
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
`,a=i.li`
  @media screen and (min-width: 375px) {
    width: 290px;

    &:first-of-type {
      color: #ef8964;
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(2) {
      color: #efede8;
      border-radius: 12px;
      border: 1px solid rgba(239, 237, 232, 0.3);
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(3) {
      color: #ef8964;
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(4) {
      color: #efede8;
      border-radius: 12px;
      border: 1px solid rgba(239, 237, 232, 0.3);
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`,w=i.li`
  @media screen and (min-width: 768px) {
    color: #efede8;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
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
`,re=i.div`
  > li {
    width: 79px;

    &:nth-of-type(1) {
      color: #ef8964;
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(2) {
      color: #efede8;
      border-radius: 12px;
      border: 1px solid rgba(239, 237, 232, 0.3);
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
`,oe=i.div`
  > li {
    width: 78px;
    &:nth-of-type(1) {
      color: #ef8964;
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(2) {
      color: #efede8;
      border-radius: 12px;
      border: 1px solid rgba(239, 237, 232, 0.3);
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`,se=i.div`
  > li {
    width: 74px;
    &:nth-of-type(1) {
      color: #ef8964;
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(2) {
      color: #efede8;
      border-radius: 12px;
      border: 1px solid rgba(239, 237, 232, 0.3);
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`,de=i.div`
  > li {
    &:nth-of-type(1) {
      width: 20px;
      color: #ef8964;
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
`,I=i.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0;
  position: relative;
`,$=i.svg`
  stroke: ${n.colorOrange1};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`,N=i.span`
  @media screen and (min-width: 320px) {
    color: ${n.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,le=({productsArray:o})=>{const x=E(),h=O(W).blood,s=M("(max-width:768px)");let l,p;o&&(p=o.map(t=>t.productId.groupBloodNotAllowed[h])),p?l="Yes":l="No";const c=t=>t[0].toUpperCase()+t.slice(1).toLowerCase(),f=t=>{try{x(R(t))}catch(g){P.error("Some error occured, try again",g)}};return e.jsxs(K,{children:[e.jsxs(X,{children:[e.jsx(Z,{children:"Products"}),e.jsx(ee,{children:e.jsxs(B,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(ie,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:n.colorOrange},children:e.jsx("use",{href:r+"#icon-arrow"})})]})})]}),o&&o.length>0?s?e.jsx(T,{children:e.jsx(z,{children:o.map(t=>e.jsxs(C,{children:[e.jsx(a,{children:"Title"}),e.jsx(a,{children:c(t.productId.title)}),e.jsx(a,{children:"Category"}),e.jsx(a,{children:c(t.productId.category)}),e.jsxs("div",{style:{display:"flex",gap:"14px"},children:[e.jsxs(re,{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsx(a,{children:"Calories"}),e.jsx(a,{children:t.calories})]}),e.jsxs(oe,{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsx(a,{children:"Weight"}),e.jsx(a,{children:t.amount})]}),e.jsxs(se,{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsx(a,{children:"Recommend"}),e.jsx(a,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:p?e.jsx("use",{href:r+"#icon-Ellipse-82",style:{fill:n.colorSecondaryGreen,stroke:n.colorSecondaryGreen}}):e.jsx("use",{href:r+"#icon-Ellipse-82",style:{fill:n.colorSecondaryRed,stroke:n.colorSecondaryRed}})}),e.jsx(N,{children:l})]})})]}),e.jsxs(de,{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsx(a,{children:""}),e.jsx(a,{children:e.jsx(I,{type:"button",onClick:()=>f(t._id),children:e.jsx($,{children:e.jsx("use",{href:r+"#icon-trash-03"})})})})]})]})]},t._id))})}):e.jsxs(T,{children:[e.jsxs(ne,{children:[e.jsx(m,{children:"Title"}),e.jsx(m,{children:"Category"}),e.jsx(m,{children:"Calories"}),e.jsx(m,{children:"Weight"}),e.jsx(m,{children:"Recommend"}),e.jsx(m,{children:""})]}),e.jsx(z,{children:o.map(t=>e.jsxs(C,{children:[e.jsx(w,{children:c(t.productId.title)}),e.jsx(w,{children:c(t.productId.category)}),e.jsx(w,{children:t.calories}),e.jsx(w,{children:t.amount}),e.jsx(w,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:p?e.jsx("use",{href:r+"#icon-Ellipse-82",style:{fill:n.colorSecondaryGreen,stroke:n.colorSecondaryGreen}}):e.jsx("use",{href:r+"#icon-Ellipse-82",style:{fill:n.colorSecondaryRed,stroke:n.colorSecondaryRed}})}),e.jsx(N,{children:l})]})}),e.jsx(w,{children:e.jsx(I,{type:"button",onClick:()=>f(t._id),children:e.jsx($,{children:e.jsx("use",{href:r+"#icon-trash-03"})})})})]},t._id))})]}):e.jsx(te,{children:"Not found products"})]})},ae=i.div`
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
`,xe=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`,pe=i.p`
  color: #efede880;
  font-size: 14px;
  line-height: 18px;
`,he=i.div`
  &:hover span {
    color: ${n.colorOrange1};
  }
`,ce=i.span`
  color: ${n.colorOrange};
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,ge=i.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,fe=i.p`
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
`,me=({exercisesArray:o})=>e.jsxs(ae,{children:[e.jsxs(xe,{children:[e.jsx(pe,{children:"Exercises"}),e.jsx(he,{children:e.jsxs(B,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(ce,{children:"Add exercises"}),e.jsx(ge,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:r+"#icon-arrow",style:{stroke:n.colorOrange}})})]})})]}),e.jsx(fe,{children:"Not found exercises"})]}),we=i.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,ye=i.ul`
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
      background-color: ${n.colorOrange};
    }

    &:nth-child(2) {
      background-color: ${n.colorOrange};
    }
  }
`,y=i.li`
  display: block;
  width: 157px;
  padding: 14px;
  background-color: ${n.colorDiaryItem};
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
`,j=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,u=i.h2`
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`,b=i.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,je=i.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,ue=i.div`
  width: 24px;
  height: 24px;
  background-color: ${n.colorBeige};
  border-radius: 50%;
`,v=i.svg`
  width: 20px;
  height: 20px;
  fill: ${n.colorOrange1};
`,be=i.svg`
  width: 24px;
  height: 24px;
`,ve=i.p`
  font-size: 14px;
  line-height: 18px;
  color: ${n.colorInput};

  @media screen and (max-width: 374px) {
    max-width: calc(100% - 72px);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,De=({userDiaryInformation:o})=>{const{burnedCalories:x,caloriesIntake:d,consumedCalories:h,remainingCalories:s,remainingSports:l}=o,[p,c]=D.useState(!1);return D.useEffect(()=>{s<0&&c(!0)},[s]),e.jsxs(we,{children:[e.jsxs(ye,{children:[e.jsxs(y,{children:[e.jsxs(j,{children:[e.jsx(v,{children:e.jsx("use",{href:r+"#icon-fluent_food-24-filled"})}),e.jsx(u,{children:"Daily calory intake"})]}),e.jsx(b,{children:d||0})]}),e.jsxs(y,{children:[e.jsxs(j,{children:[e.jsx(v,{children:e.jsx("use",{href:r+"#icon-dumbbell"})}),e.jsx(u,{children:"Daily norm of sports"})]}),e.jsx(b,{children:"110 min"})]}),e.jsxs(y,{children:[e.jsxs(j,{children:[e.jsx(v,{children:e.jsx("use",{href:r+"#icon-fluent_food-apple-20-filled"})}),e.jsx(u,{children:"Calories consumed"})]}),e.jsx(b,{children:h||0})]}),e.jsxs(y,{children:[e.jsxs(j,{children:[e.jsx(v,{children:e.jsx("use",{href:r+"#icon-calories-1"})}),e.jsx(u,{children:"Calories burned"})]}),e.jsx(b,{children:x||0})]}),e.jsxs(y,{className:p?"redBg":"",children:[e.jsxs(j,{children:[e.jsx(v,{children:e.jsx("use",{href:r+"#icon-bubble"})}),e.jsx(u,{children:"The rest of the calories"})]}),e.jsx(b,{children:s||0})]}),e.jsxs(y,{className:p?"greenBg":"",children:[e.jsxs(j,{children:[e.jsx(v,{children:e.jsx("use",{href:r+"#icon-running-figure"})}),e.jsx(u,{children:"The rest of sports"})]}),e.jsxs(b,{children:[l||110," min"]})]})]}),e.jsxs(je,{children:[e.jsx(ue,{children:e.jsx(be,{children:e.jsx("use",{href:r+"#icon-running-stick-figure-svgrepo-com-1"})})}),e.jsx(ve,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},Se=o=>o.diary.allDiaryInformation,ke=i.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,Te=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,ze=i.div`
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
`,Ce=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Oe=()=>{const o=E(),x=O(Se),{addProducts:d,addExercises:h}=x,[s,l]=D.useState(new Date),p=String(s.getDate()).padStart(2,"0"),c=String(s.getMonth()+1).padStart(2,"0"),f=s.getFullYear(),t=`${p}-${c}-${f}`;return D.useEffect(()=>{(async()=>{try{await o(L(t))}catch(S){P.error("Error fetching data:",S),console.error("Error fetching data:",S)}})()},[o,t,s]),e.jsx(A,{children:e.jsxs(ke,{children:[e.jsxs(Te,{children:[e.jsx(G,{title:"Diary"}),e.jsx(J,{currentDate:s,setCurrentDate:l})]}),e.jsxs(Ce,{children:[e.jsx(De,{userDiaryInformation:x}),e.jsxs(ze,{children:[e.jsx(le,{productsArray:d}),e.jsx(me,{exercisesArray:h})]})]})]})})};export{Oe as default};
