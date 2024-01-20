import{s as i,g as t,r as u,j as e,a as r,N as D,u as T,f as $,C as S,h as k,Q as C}from"./index-0242490f.js";import{f as z,S as O}from"./StyledDatepicker-df800cf1.js";import{T as N}from"./TitlePage-8dfb7ca0.js";import"./warning-a8211bd6.js";const E=i.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,I=i.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
`,B=i.p`
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
`,W=i.div`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,A=i.svg`
  width: 24px;
  height: 24px;
`,P=i.button`
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
`,R=i.button`
  display: flex;
  margin: 0 6px 0 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
`,v=i.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
`,L=({currentDate:s})=>{const[n,o]=u.useState(s),[a,d]=u.useState(!1),c=()=>{d(!a)},l=()=>{const x=new Date(n);x.setDate(n.getDate()-1),x>=s&&o(x)},p=()=>{const x=new Date(n);x.setDate(n.getDate()+1),o(x)},h=()=>{d(!1)};return e.jsxs(E,{children:[e.jsxs(P,{onClick:c,children:[e.jsx(B,{children:z(n,"dd/MM/yyyy")}),e.jsx(W,{children:e.jsx(A,{children:e.jsx("use",{href:`${r}#icon-normal`})})})]}),e.jsx(R,{type:"button",onClick:l,children:e.jsx(v,{children:e.jsx("use",{href:`${r}#icon-chevron-left`})})}),e.jsx(I,{type:"button",onClick:p,children:e.jsx(v,{children:e.jsx("use",{href:`${r}#icon-chevron-right`})})}),e.jsx(O,{selectedDate:n,setSelectedDate:o,isOpen:a,onClose:h})]})},M=i.div`
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
`,_=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`,F=i.p`
  color: #efede880;
  font-size: 14px;
  line-height: 18px;
`,Q=i.div`
  &:hover span {
    color: ${t.colorOrange1};
  }
`,V=i.span`
  color: ${t.colorOrange};
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  transition: color 300ms;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Y=i.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;i.p`
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
`;const q=i.div`
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
`,G=i.table`
  border-spacing: 8px;
  border-collapse: separate;

  @media screen and (max-width: 767px) {
    position: relative;
    height: 264px;
    width: 100%;

    &:last-child {
      height: 234px;
    }
  }
`,H=i.thead`
  text-align: left;
`,y=i.th`
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
`,J=i.button`
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
`,K=i.svg`
  width: 20px;
  height: 20px;
  stroke: #ef8964;
  transition:
    stroke 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03),
    fill 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03);

  &:is(:hover, :focus) {
    stroke: #e6533c;
  }
`,U=i.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
`,X=i.tr`
  font-size: 12px;
  line-height: 18px;
  color: ${t.colorOrange1};
`,Z=({productsArray:s})=>e.jsxs(M,{children:[e.jsxs(_,{children:[e.jsx(F,{children:"Products"}),e.jsx(Q,{children:e.jsxs(D,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(V,{children:"Add product"}),e.jsx(Y,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:r+"#icon-arrow",style:{stroke:t.colorOrange}})})]})})]}),e.jsx(q,{children:e.jsx("div",{children:e.jsxs(G,{children:[e.jsxs(H,{children:[e.jsx(y,{children:"Title"}),e.jsx(y,{children:"Category"}),e.jsx(y,{children:"Calories"}),e.jsx(y,{children:"Weight"}),e.jsx(y,{children:"Recommend"})]}),e.jsx("tbody",{initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},children:e.jsxs(X,{children:[e.jsx("td",{children:e.jsx(U,{})}),e.jsx("td",{children:e.jsx(J,{children:e.jsx(K,{children:e.jsx("use",{href:`${r}#icon-trash-03`})})})})]})})]})})})]}),ee=i.div`
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
`,ie=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`,te=i.p`
  color: #efede880;
  font-size: 14px;
  line-height: 18px;
`,ne=i.div`
  &:hover span {
    color: ${t.colorOrange1};
  }
`,re=i.span`
  color: ${t.colorOrange};
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,se=i.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,oe=i.p`
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
`,de=({exercisesArray:s})=>e.jsxs(ee,{children:[e.jsxs(ie,{children:[e.jsx(te,{children:"Exercises"}),e.jsx(ne,{children:e.jsxs(D,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(re,{children:"Add exercises"}),e.jsx(se,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:r+"#icon-arrow",style:{stroke:t.colorOrange}})})]})})]}),e.jsx(oe,{children:"Not found exercises"})]}),ae=i.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,xe=i.ul`
  margin-bottom: 20px;

  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 13px;
    row-gap: 20px;
  }

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
`,m=i.li`
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
`,g=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,f=i.h2`
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`,w=i.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,ce=i.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,le=i.div`
  width: 24px;
  height: 24px;
  background-color: ${t.colorBeige};
  border-radius: 50%;
`,j=i.svg`
  width: 20px;
  height: 20px;
  fill: ${t.colorOrange1};
`,pe=i.svg`
  width: 24px;
  height: 24px;
`,he=i.p`
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
`,me=({userDiaryInformation:s})=>{console.log(s);const{burnedCalories:n,caloriesIntake:o,consumedCalories:a}=s,d=a-o,c=o-a,l=100-n,[p,h]=u.useState(!1);return u.useEffect(()=>{d>o&&h(!0)},[d]),e.jsxs(ae,{children:[e.jsxs(xe,{children:[e.jsxs(m,{children:[e.jsxs(g,{children:[e.jsx(j,{children:e.jsx("use",{href:`${r}#icon-fluent_food-24-filled`})}),e.jsx(f,{children:"Daily calory intake"})]}),e.jsx(w,{children:o||0})]}),e.jsxs(m,{children:[e.jsxs(g,{children:[e.jsx(j,{children:e.jsx("use",{href:`${r}#icon-dumbbell`})}),e.jsx(f,{children:"Daily norm of sports"})]}),e.jsx(w,{children:"110 min"})]}),e.jsxs(m,{children:[e.jsxs(g,{children:[e.jsx(j,{children:e.jsx("use",{href:`${r}#icon-fluent_food-apple-20-filled`})}),e.jsx(f,{children:"Calories consumed"})]}),e.jsx(w,{children:a||0})]}),e.jsxs(m,{children:[e.jsxs(g,{children:[e.jsx(j,{children:e.jsx("use",{href:`${r}#icon-calories-1`})}),e.jsx(f,{children:"Calories burned"})]}),e.jsx(w,{children:n||0})]}),e.jsxs(m,{className:p?"redBg":"",children:[e.jsxs(g,{children:[e.jsx(j,{children:e.jsx("use",{href:`${r}#icon-bubble`})}),e.jsx(f,{children:"The rest of the calories"})]}),e.jsx(w,{children:c||0})]}),e.jsxs(m,{className:p?"greenBg":"",children:[e.jsxs(g,{children:[e.jsx(j,{children:e.jsx("use",{href:`${r}#icon-running-figure`})}),e.jsx(f,{children:"The rest of sports"})]}),e.jsxs(w,{children:[l||110," min"]})]})]}),e.jsxs(ce,{children:[e.jsx(le,{children:e.jsx(pe,{children:e.jsx("use",{href:`${r}#icon-tabler_exclamation-mark`})})}),e.jsx(he,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},ge=s=>s.diary.allDiaryInformation,fe=i.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,we=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,je=i.div`
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
`,ue=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Te=()=>{const s=T(),n=$(ge),{addProducts:o,addExercises:a}=n,[d]=u.useState(new Date),c=String(d.getDate()).padStart(2,"0"),l=String(d.getMonth()+1).padStart(2,"0"),p=d.getFullYear(),h=`${c}-${l}-${p}`;return u.useEffect(()=>{(async()=>{try{await s(k(h))}catch(b){C.error("Error fetching data:",b),console.error("Error fetching data:",b)}})()},[s,h]),e.jsx(S,{children:e.jsxs(fe,{children:[e.jsxs(we,{children:[e.jsx(N,{title:"Diary"}),e.jsx(L,{currentDate:d})]}),e.jsxs(ue,{children:[e.jsx(me,{userDiaryInformation:n}),e.jsxs(je,{children:[e.jsx(Z,{productsArray:o}),e.jsx(de,{exercisesArray:a})]})]})]})})};export{Te as default};
