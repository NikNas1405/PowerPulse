import{s as i,g as n,r as y,j as e,a as r,N as D,f as w,u as $,C,h as T,Q as S}from"./index-eac704ce.js";import{f as z,S as O}from"./StyledDatepicker-caca67c3.js";import{T as P}from"./TitlePage-90716d75.js";import"./warning-293c9564.js";const B=i.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,N=i.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
`,E=i.p`
  font-family: 'RobotoBold';
  font-size: 24px;
  line-height: 1.33;
  margin: 0;
  padding: 0;
  color: ${n.colorWhite};

  &:hover {
    color: ${n.colorOrange1};
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.1;
  }
`,I=i.div`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,A=i.svg`
  width: 24px;
  height: 24px;
`,L=i.button`
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
  fill: ${n.colorWhite};
`,M=({currentDate:t})=>{const[o,s]=y.useState(t),[a,x]=y.useState(!1),c=()=>{x(!a)},d=()=>{const l=new Date(o);l.setDate(o.getDate()-1),l>=t&&s(l)},b=()=>{const l=new Date(o);l.setDate(o.getDate()+1),s(l)},u=()=>{x(!1)};return e.jsxs(B,{children:[e.jsxs(L,{onClick:c,children:[e.jsx(E,{children:z(o,"dd/MM/yyyy")}),e.jsx(I,{children:e.jsx(A,{children:e.jsx("use",{href:`${r}#icon-normal`})})})]}),e.jsx(R,{type:"button",onClick:d,children:e.jsx(v,{children:e.jsx("use",{href:`${r}#icon-chevron-left`})})}),e.jsx(N,{type:"button",onClick:b,children:e.jsx(v,{children:e.jsx("use",{href:`${r}#icon-chevron-right`})})}),e.jsx(O,{selectedDate:o,setSelectedDate:s,isOpen:a,onClose:u})]})},W=i.div`
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
    color: ${n.colorOrange1};
  }
`,V=i.span`
  color: ${n.colorOrange};
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
`,q=i.p`
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
`,G=i.div`
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
`,H=i.table`
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
`,J=i.thead`
  text-align: left;
`,K=i.tr`
  font-size: 12px;
  line-height: 18px;
  color: ${n.colorOrange1};
`,U=i.button`
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
`,X=i.svg`
  width: 20px;
  height: 20px;
  stroke: #ef8964;
  transition:
    stroke 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03),
    fill 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03);

  &:is(:hover, :focus) {
    stroke: #e6533c;
  }
`,j=i.th`
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
`;i.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
  background-color: green;
`;const Z=()=>e.jsx(e.Fragment,{children:e.jsxs(G,{children:[e.jsx(H,{children:e.jsx(J,{children:e.jsxs(K,{children:[e.jsx(j,{children:"Title"}),e.jsx(j,{children:"Category"}),e.jsx(j,{children:"Calories"}),e.jsx(j,{children:"Weight"}),e.jsx(j,{children:"Recommend"})]})})}),e.jsx(U,{children:e.jsx(X,{children:e.jsx("use",{href:`${r}#icon-trash-03`})})})]})}),ee=()=>e.jsxs(W,{children:[e.jsxs(_,{children:[e.jsx(F,{children:"Products"}),e.jsx(Q,{children:e.jsxs(D,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(V,{children:"Add product"}),e.jsx(Y,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:r+"#icon-arrow",style:{stroke:n.colorOrange}})})]})})]}),e.jsx(Z,{}),e.jsx(q,{children:"Not found products"})]}),ie=i.div`
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
`,te=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`,ne=i.p`
  color: #efede880;
  font-size: 14px;
  line-height: 18px;
`,re=i.div`
  &:hover span {
    color: ${n.colorOrange1};
  }
`,oe=i.span`
  color: ${n.colorOrange};
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
`,de=i.p`
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
`,ae=()=>e.jsxs(ie,{children:[e.jsxs(te,{children:[e.jsx(ne,{children:"Exercises"}),e.jsx(re,{children:e.jsxs(D,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(oe,{children:"Add exercises"}),e.jsx(se,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:r+"#icon-arrow",style:{stroke:n.colorOrange}})})]})})]}),e.jsx(de,{children:"Not found exercises"})]}),xe=i.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,ce=i.ul`
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
`,p=i.li`
  display: block;
  width: 157px;

  padding: 14px;
  background-color: rgba(239, 237, 232, 0.05);
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
`,h=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,m=i.svg`
  width: 20px;
  height: 20px;
  fill: ${n.colorOrange1};
`,g=i.h2`
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`,f=i.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,le=i.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,pe=i.div`
  width: 24px;
  height: 24px;
  background-color: ${n.colorBeige};
  border-radius: 50%;
`,he=i.svg`
  width: 24px;
  height: 24px;
`,me=i.p`
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
`,k=t=>t.diary.allDiaryInformation,ge=t=>t.diary.consumedProductsArray,fe=t=>t.diary.completedExercisesArray,we=t=>t.diary.isLoading,je=t=>t.diary.error,ue=()=>{const t=w(k);w(ge),w(fe),w(we),w(je);const{dailyCaloryIntake:o,dailyNormOfSports:s,caloriesConsumed:a,caloriesBurned:x,restOfCalories:c,restOfSports:d}=t;return e.jsxs(xe,{children:[e.jsxs(ce,{children:[e.jsxs(p,{style:{backgroundColor:n.colorOrange},children:[e.jsxs(h,{children:[e.jsx(m,{children:e.jsx("use",{href:`${r}#icon-fluent_food-24-filled`})}),e.jsx(g,{children:"Daily calory intake"})]}),e.jsx(f,{children:o})]}),e.jsxs(p,{style:{backgroundColor:n.colorOrange},children:[e.jsxs(h,{children:[e.jsx(m,{children:e.jsx("use",{href:`${r}#icon-dumbbell`})}),e.jsx(g,{children:"Daily norm of sports"})]}),e.jsxs(f,{children:[" ",s," min"]})]}),e.jsxs(p,{children:[e.jsxs(h,{children:[e.jsx(m,{children:e.jsx("use",{href:`${r}#icon-fluent_food-apple-20-filled`})}),e.jsx(g,{children:"Calories consumed"})]}),e.jsx(f,{children:a})]}),e.jsxs(p,{children:[e.jsxs(h,{children:[e.jsx(m,{children:e.jsx("use",{href:`${r}#icon-calories-1`})}),e.jsx(g,{children:"Calories burned"})]}),e.jsx(f,{children:x})]}),e.jsxs(p,{style:{borderColor:c>o?"red":"#efede833"},children:[e.jsxs(h,{children:[e.jsx(m,{children:e.jsx("use",{href:`${r}#icon-bubble`})}),e.jsx(g,{children:"The rest of the calories"})]}),e.jsx(f,{children:c})]}),e.jsxs(p,{style:{borderColor:d<s?"red":"green"},children:[e.jsxs(h,{children:[e.jsx(m,{children:e.jsx("use",{href:`${r}#icon-running-figure`})}),e.jsx(g,{children:"The rest of sports"})]}),e.jsxs(f,{children:[d," min"]})]})]}),e.jsxs(le,{children:[e.jsx(pe,{children:e.jsx(he,{children:e.jsx("use",{href:`${r}#icon-tabler_exclamation-mark`})})}),e.jsx(me,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},ye=i.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,be=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,ve=i.div`
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
`,De=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Se=()=>{const t=$(),o=w(k),[s]=y.useState(new Date),a=String(s.getDate()).padStart(2,"0"),x=String(s.getMonth()+1).padStart(2,"0"),c=s.getFullYear(),d=`${a}-${x}-${c}`;return y.useEffect(()=>{(async()=>{try{await t(T(d))}catch(u){S.error("Error fetching data:",u),console.error("Error fetching data:",u)}})()},[t,d]),console.log(o),e.jsx(C,{children:e.jsxs(ye,{children:[e.jsxs(be,{children:[e.jsx(P,{title:"Diary"}),e.jsx(M,{currentDate:s})]}),e.jsxs(De,{children:[e.jsx(ue,{}),e.jsxs(ve,{children:[e.jsx(ee,{}),e.jsx(ae,{})]})]})]})})};export{Se as default};
