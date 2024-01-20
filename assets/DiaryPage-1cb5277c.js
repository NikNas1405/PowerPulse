import{s as i,g as n,r as j,j as e,a as s,N as D,f as d,u as $,h as r,C as T}from"./index-b9b3a3d1.js";import{f as S,S as O}from"./StyledDatepicker-aa4fe387.js";import{f as z,T as B}from"./TitlePage-c889612c.js";import"./warning-95e586c1.js";const N=i.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,P=i.button`
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
`,R=i.svg`
  width: 24px;
  height: 24px;
`,A=i.button`
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
`,W=i.button`
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
`,L=({currentDate:t})=>{const[o,g]=j.useState(t),[w,u]=j.useState(!1),y=()=>{u(!w)},b=()=>{const x=new Date(o);x.setDate(o.getDate()-1),x>=t&&g(x)},v=()=>{const x=new Date(o);x.setDate(o.getDate()+1),g(x)},C=()=>{u(!1)};return e.jsxs(N,{children:[e.jsxs(A,{onClick:y,children:[e.jsx(E,{children:S(o,"dd/MM/yyyy")}),e.jsx(I,{children:e.jsx(R,{children:e.jsx("use",{href:`${s}#icon-normal`})})})]}),e.jsx(W,{type:"button",onClick:b,children:e.jsx(k,{children:e.jsx("use",{href:`${s}#icon-chevron-left`})})}),e.jsx(P,{type:"button",onClick:v,children:e.jsx(k,{children:e.jsx("use",{href:`${s}#icon-chevron-right`})})}),e.jsx(O,{selectedDate:o,setSelectedDate:g,isOpen:w,onClose:C})]})},_=i.div`
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
`,M=i.div`
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
`,V=i.div`
  &:hover span {
    color: ${n.colorOrange1};
  }
`,q=i.span`
  color: ${n.colorOrange};
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,G=i.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,H=i.p`
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
`,J=()=>e.jsxs(_,{children:[e.jsxs(M,{children:[e.jsx(F,{children:"Exercises"}),e.jsx(V,{children:e.jsxs(D,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(q,{children:"Add exercises"}),e.jsx(G,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:s+"#icon-arrow",style:{stroke:n.colorOrange}})})]})})]}),e.jsx(H,{children:"Not found exercises"})]}),K=i.div`
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
`,Q=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`,U=i.p`
  color: #efede880;
  font-size: 14px;
  line-height: 18px;
`,X=i.div`
  &:hover span {
    color: ${n.colorOrange1};
  }
`,Y=i.span`
  color: ${n.colorOrange};
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  transition: color 300ms;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Z=i.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,ee=i.p`
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
`,ie=i.div`
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
`,te=i.table`
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
`,ne=i.thead`
  text-align: left;
`,se=i.tr`
  font-size: 12px;
  line-height: 18px;
  color: ${n.colorOrange1};
`,oe=i.button`
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
`,re=i.svg`
  width: 20px;
  height: 20px;
  stroke: #ef8964;
  transition:
    stroke 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03),
    fill 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03);

  &:is(:hover, :focus) {
    stroke: #e6533c;
  }
`,f=i.th`
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
`;const de=()=>e.jsx(e.Fragment,{children:e.jsxs(ie,{children:[e.jsx(te,{children:e.jsx(ne,{children:e.jsxs(se,{children:[e.jsx(f,{children:"Title"}),e.jsx(f,{children:"Category"}),e.jsx(f,{children:"Calories"}),e.jsx(f,{children:"Weight"}),e.jsx(f,{children:"Recommend"})]})})}),e.jsx(oe,{children:e.jsx(re,{children:e.jsx("use",{href:`${s}#icon-trash-03`})})})]})}),ae=()=>e.jsxs(K,{children:[e.jsxs(Q,{children:[e.jsx(U,{children:"Products"}),e.jsx(X,{children:e.jsxs(D,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(Y,{children:"Add product"}),e.jsx(Z,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:s+"#icon-arrow",style:{stroke:n.colorOrange}})})]})})]}),e.jsx(de,{}),e.jsx(ee,{children:"Not found products"})]}),xe=i.div`
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
`,c=i.li`
  display: block;
  width: 157px;
  padding: 14px;
  background-color: rgba(239, 237, 232, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  @media screen and (max-width: 374px) {
    margin: 0 auto;

    :not(:last-of-type) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    padding: 18px;
  }
`,l=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,p=i.svg`
  width: 20px;
  height: 20px;
  fill: ${n.colorOrange1};
`,h=i.h2`
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`,m=i.p`
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
`,a=t=>t.diary,ge=d([a],t=>t.dailyCaloryIntake),fe=d([a],t=>t.dailyNormOfSports),we=d([a],t=>t.caloriesConsumed),ue=d([a],t=>t.caloriesBurned),je=d([a],t=>t.restOfCalories),ye=d([a],t=>t.restOfSports),be=d([a],t=>t.warningCalories),ve=d([a],t=>t.encouragementSports),Ce=()=>{const t=$();j.useEffect(()=>{t(z())},[t]);const o=r(ge),g=r(fe),w=r(we),u=r(ue),y=r(je),b=r(ye),v=r(be),C=r(ve);return e.jsxs(xe,{children:[e.jsxs(ce,{children:[e.jsxs(c,{style:{backgroundColor:n.colorOrange},children:[e.jsxs(l,{children:[e.jsx(p,{children:e.jsx("use",{href:`${s}#icon-fluent_food-24-filled`})}),e.jsx(h,{children:"Daily calory intake"})]}),e.jsx(m,{children:o})]}),e.jsxs(c,{style:{backgroundColor:n.colorOrange},children:[e.jsxs(l,{children:[e.jsx(p,{children:e.jsx("use",{href:`${s}#icon-dumbbell`})}),e.jsx(h,{children:"Daily norm of sports"})]}),e.jsxs(m,{children:[g,"min"]})]}),e.jsxs(c,{children:[e.jsxs(l,{children:[e.jsx(p,{children:e.jsx("use",{href:`${s}#icon-fluent_food-apple-20-filled`})}),e.jsx(h,{children:"Calories consumed"})]}),e.jsx(m,{children:w})]}),e.jsxs(c,{children:[e.jsxs(l,{children:[e.jsx(p,{children:e.jsx("use",{href:`${s}#icon-calories-1`})}),e.jsx(h,{children:"Calories burned"})]}),e.jsx(m,{children:u})]}),e.jsxs(c,{caloriesOverConsumed:v,children:[e.jsxs(l,{children:[e.jsx(p,{children:e.jsx("use",{href:`${s}#icon-bubble`})}),e.jsx(h,{children:"The rest of the calories"})]}),e.jsx(m,{children:y})]}),e.jsxs(c,{caloriesOverBurned:C,children:[e.jsxs(l,{children:[e.jsx(p,{children:e.jsx("use",{href:`${s}#icon-running-figure`})}),e.jsx(h,{children:"The rest of sports"})]}),e.jsxs(m,{children:[b,"min"]})]})]}),e.jsxs(le,{children:[e.jsx(pe,{children:e.jsx(he,{children:e.jsx("use",{href:`${s}#icon-tabler_exclamation-mark`})})}),e.jsx(me,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},ke=i.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,De=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,$e=i.div`
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
`,Te=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Ne=()=>{const[t]=j.useState(new Date);return e.jsx(T,{children:e.jsxs(ke,{children:[e.jsxs(De,{children:[e.jsx(B,{title:"Diary"}),e.jsx(L,{currentDate:t})]}),e.jsxs(Te,{children:[e.jsx(Ce,{}),e.jsxs($e,{children:[e.jsx(ae,{}),e.jsx(J,{})]})]})]})})};export{Ne as default};
