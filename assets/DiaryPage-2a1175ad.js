import{s as t,g as i,r as u,j as e,a as o,f as S,h as $,N as T,u as k,C,i as z,Q as N}from"./index-d3c09ff5.js";import{f as O,S as I}from"./StyledDatepicker-9a327e17.js";import{T as E}from"./TitlePage-7e5c8d6a.js";import"./warning-c23374f8.js";const B=t.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,W=t.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
`,P=t.p`
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
`,R=t.svg`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,A=t.button`
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
`,L=t.button`
  display: flex;
  margin: 0 6px 0 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
`,D=t.svg`
  width: 100%;
  height: 100%;
  fill: ${i.colorWhite};
`,_=({currentDate:n})=>{const[d,a]=u.useState(n),[x,s]=u.useState(!1),l=()=>{s(!x)},r=()=>{const p=new Date(d);p.setDate(d.getDate()-1),p>=n&&a(p)},c=()=>{const p=new Date(d);p.setDate(d.getDate()+1),a(p)},h=()=>{s(!1)};return e.jsxs(B,{children:[e.jsxs(A,{onClick:l,children:[e.jsx(P,{children:O(d,"dd/MM/yyyy")}),e.jsx(R,{children:e.jsx("use",{href:o+"#icon-calendar"})})]}),e.jsx(L,{type:"button",onClick:r,children:e.jsx(D,{children:e.jsx("use",{href:o+"#icon-chevron-left"})})}),e.jsx(W,{type:"button",onClick:c,children:e.jsx(D,{children:e.jsx("use",{href:o+"#icon-chevron-right"})})}),e.jsx(I,{selectedDate:d,setSelectedDate:a,isOpen:x,onClose:h})]})},F=t.div`
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
`,M=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`,U=t.p`
  color: #efede880;
  font-size: 14px;
  line-height: 18px;
`,G=t.div`
  &:hover span {
    color: ${i.colorOrange1};
  }
`,Y=t.span`
  color: ${i.colorOrange};
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  transition: color 300ms;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Q=t.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  stroke: ${i.colorOrange};
`,V=t.p`
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
`,q=t.div`
  scroll-behavior: auto;
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (max-width: 767px) {
    max-height: 762px;
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
    max-height: 177px;
    max-width: 704px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 804px;
    padding: 0 8px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: rgba(239, 237, 232, 0.1);
  }
`,H=t.table`
  border-spacing: 8px;
  border-collapse: separate;
  display: block;

  @media screen and (max-width: 767px) {
    position: relative;
    height: 264px;
    width: 100%;

    &:last-child {
      height: 234px;
    }
  }
`,J=t.thead`
  text-align: left;
`,b=t.th`
  color: #ef8964;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  @media screen and (max-width: 767px) {
    position: absolute;

    &:nth-of-type(2) {
      top: 88px;
    }

    &:nth-of-type(3) {
      top: 168px;
    }

    &:nth-of-type(4) {
      top: 168px;
      left: 33.2%;
    }

    &:nth-of-type(5) {
      top: 168px;
      left: 63.2%;
    }
  }

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
  }
`,K=t.button`
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  background-color: transparent;
  padding: 0;

  @media screen and (max-width: 767px) {
    position: absolute;
    top: 203px;
    left: 91%;
  }

  @media screen and (min-width: 768px) {
    padding-left: 4px;
  }
`,X=t.svg`
  width: 20px;
  height: 20px;
  stroke: ${i.colorOrange1};
  transition:
    stroke 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03),
    fill 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03);

  &:is(:hover, :focus) {
    stroke: ${i.colorOrange};
  }
`,Z=t.span`
  @media screen and (min-width: 320px) {
    color: ${i.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,ee=t.tr`
  font-size: 12px;
  line-height: 18px;
  color: ${i.colorOrange1};
`,m=t.td`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  color: ${i.colorWhite};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &::first-letter {
    text-transform: uppercase;
  }

  @media screen and (max-width: 767px) {
    position: absolute;
    padding: 10px 14px;
    font-size: 14px;
    line-height: ${18/14};

    &:first-of-type {
      top: 34px;
      width: 93.6%;
    }

    &:nth-of-type(2) {
      top: 114px;
      width: 93.6%;
    }

    &:nth-of-type(3) {
      top: 194px;
      width: 26.2%;
    }

    &:nth-of-type(4) {
      top: 194px;
      left: 33.2%;
      width: 25.9%;
    }

    &:nth-of-type(5) {
      top: 194px;
      left: 63.2%;
      width: 24.6%;
    }
  }

  @media screen and (min-width: 768px) {
    position: relative;
    font-size: 16px;
    line-height: ${24/16};
    padding: 7px 14px;

    &:first-of-type {
      max-width: 204px;
    }

    &:nth-of-type(2) {
      max-width: 128px;
    }

    &:nth-of-type(3) {
      max-width: 90px;
    }

    &:nth-of-type(4) {
      max-width: 90px;
    }

    &:nth-of-type(5) {
      max-width: 80px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:first-of-type {
      max-width: 212px;
    }

    &:nth-of-type(2) {
      max-width: 166px;
    }

    &:nth-of-type(3) {
      max-width: 105px;
    }

    &:nth-of-type(4) {
      max-width: 105px;
    }

    &:nth-of-type(5) {
      max-width: 110px;
    }
  }
`,te=({productsArray:n,handleDeleteButtonClick:d})=>{const x=S($).blood;let s,l;return n&&(l=n.map(r=>r.productId.groupBloodNotAllowed[x])),l?s="Yes":s="No",e.jsx(F,{children:n?e.jsxs(e.Fragment,{children:[e.jsxs(M,{children:[e.jsx(U,{children:"Products"}),e.jsx(G,{children:e.jsxs(T,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(Y,{children:"Add product"}),e.jsx(Q,{children:e.jsx("use",{href:o+"#icon-arrow"})})]})})]}),e.jsx(q,{children:e.jsx("div",{children:e.jsxs(H,{children:[e.jsx(J,{children:e.jsxs("tr",{children:[e.jsx(b,{children:"Title"}),e.jsx(b,{children:"Category"}),e.jsx(b,{children:"Calories"}),e.jsx(b,{children:"Weight"}),e.jsx(b,{children:"Recommend"})]})}),e.jsx("tbody",{children:n.map(r=>e.jsxs(ee,{item:r,children:[e.jsx(m,{children:r.productId.title}),e.jsx(m,{children:r.productId.category}),e.jsx(m,{children:r.calories}),e.jsx(m,{children:r.amount}),e.jsx(m,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:l?e.jsx("use",{href:o+"#icon-Ellipse-82",style:{fill:i.colorSecondaryGreen,stroke:i.colorSecondaryGreen}}):e.jsx("use",{href:o+"#icon-Ellipse-82",style:{fill:i.colorSecondaryRed,stroke:i.colorSecondaryRed}})}),e.jsx(Z,{children:s})]})}),e.jsx(m,{children:e.jsx(K,{children:e.jsx(X,{children:e.jsx("use",{href:o+"#icon-trash"})})})})]},r._id))})]})})})]}):e.jsx(V,{children:"Not found products"})})},ie=t.div`
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
`,ne=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`,re=t.p`
  color: #efede880;
  font-size: 14px;
  line-height: 18px;
`,oe=t.div`
  &:hover span {
    color: ${i.colorOrange1};
  }
`,se=t.span`
  color: ${i.colorOrange};
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,de=t.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,ae=t.p`
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
`,xe=({exercisesArray:n})=>e.jsxs(ie,{children:[e.jsxs(ne,{children:[e.jsx(re,{children:"Exercises"}),e.jsx(oe,{children:e.jsxs(T,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(se,{children:"Add exercises"}),e.jsx(de,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:o+"#icon-arrow",style:{stroke:i.colorOrange}})})]})})]}),e.jsx(ae,{children:"Not found exercises"})]}),le=t.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,pe=t.ul`
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
`,g=t.li`
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
`,f=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,w=t.h2`
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`,y=t.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,ce=t.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,he=t.div`
  width: 24px;
  height: 24px;
  background-color: ${i.colorBeige};
  border-radius: 50%;
`,j=t.svg`
  width: 20px;
  height: 20px;
  fill: ${i.colorOrange1};
`,me=t.svg`
  width: 24px;
  height: 24px;
`,ge=t.p`
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
`,fe=({userDiaryInformation:n})=>{const{burnedCalories:d,caloriesIntake:a,consumedCalories:x,remainingCalories:s,remainingSports:l}=n,r=x-a,[c,h]=u.useState(!1);return u.useEffect(()=>{r>a&&h(!0)},[r]),e.jsxs(le,{children:[e.jsxs(pe,{children:[e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx(j,{children:e.jsx("use",{href:`${o}#icon-fluent_food-24-filled`})}),e.jsx(w,{children:"Daily calory intake"})]}),e.jsx(y,{children:a||0})]}),e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx(j,{children:e.jsx("use",{href:`${o}#icon-dumbbell`})}),e.jsx(w,{children:"Daily norm of sports"})]}),e.jsx(y,{children:"110 min"})]}),e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx(j,{children:e.jsx("use",{href:`${o}#icon-fluent_food-apple-20-filled`})}),e.jsx(w,{children:"Calories consumed"})]}),e.jsx(y,{children:x||0})]}),e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx(j,{children:e.jsx("use",{href:`${o}#icon-calories-1`})}),e.jsx(w,{children:"Calories burned"})]}),e.jsx(y,{children:d||0})]}),e.jsxs(g,{className:c?"redBg":"",children:[e.jsxs(f,{children:[e.jsx(j,{children:e.jsx("use",{href:`${o}#icon-bubble`})}),e.jsx(w,{children:"The rest of the calories"})]}),e.jsx(y,{children:s||0})]}),e.jsxs(g,{className:c?"greenBg":"",children:[e.jsxs(f,{children:[e.jsx(j,{children:e.jsx("use",{href:`${o}#icon-running-figure`})}),e.jsx(w,{children:"The rest of sports"})]}),e.jsxs(y,{children:[l||110," min"]})]})]}),e.jsxs(ce,{children:[e.jsx(he,{children:e.jsx(me,{children:e.jsx("use",{href:`${o}#icon-tabler_exclamation-mark`})})}),e.jsx(ge,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},we=n=>n.diary.allDiaryInformation,ye=t.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,je=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,ue=t.div`
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
`,be=t.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,$e=()=>{const n=k(),d=S(we),{addProducts:a,addExercises:x}=d,[s]=u.useState(new Date),l=String(s.getDate()).padStart(2,"0"),r=String(s.getMonth()+1).padStart(2,"0"),c=s.getFullYear(),h=`${l}-${r}-${c}`;return u.useEffect(()=>{(async()=>{try{await n(z(h))}catch(v){N.error("Error fetching data:",v),console.error("Error fetching data:",v)}})()},[n,h]),e.jsx(C,{children:e.jsxs(ye,{children:[e.jsxs(je,{children:[e.jsx(E,{title:"Diary"}),e.jsx(_,{currentDate:s})]}),e.jsxs(be,{children:[e.jsx(fe,{userDiaryInformation:d}),e.jsxs(ue,{children:[e.jsx(te,{productsArray:a}),e.jsx(xe,{exercisesArray:x})]})]})]})})};export{$e as default};
