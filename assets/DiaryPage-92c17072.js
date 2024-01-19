import{s as i,g as n,r as m,j as e,a as t,N as j,C as $}from"./index-93dec247.js";import{f as k,S as T}from"./StyledDatepicker-05391957.js";import{T as D}from"./TitlePage-bc985b10.js";import"./warning-b733026f.js";const C=i.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,z=i.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
`,O=i.p`
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
`,P=i.div`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,S=i.svg`
  width: 24px;
  height: 24px;
`,N=i.button`
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
`,B=i.button`
  display: flex;
  margin: 0 6px 0 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
`,w=i.svg`
  width: 100%;
  height: 100%;
  fill: ${n.colorWhite};
`,W=({currentDate:h})=>{const[r,l]=m.useState(h),[g,f]=m.useState(!1),u=()=>{f(!g)},b=()=>{const o=new Date(r);o.setDate(r.getDate()-1),o>=h&&l(o)},y=()=>{const o=new Date(r);o.setDate(r.getDate()+1),l(o)},v=()=>{f(!1)};return e.jsxs(C,{children:[e.jsxs(N,{onClick:u,children:[e.jsx(O,{children:k(r,"dd/MM/yyyy")}),e.jsx(P,{children:e.jsx(S,{children:e.jsx("use",{href:`${t}#icon-normal`})})})]}),e.jsx(B,{type:"button",onClick:b,children:e.jsx(w,{children:e.jsx("use",{href:`${t}#icon-chevron-left`})})}),e.jsx(z,{type:"button",onClick:y,children:e.jsx(w,{children:e.jsx("use",{href:`${t}#icon-chevron-right`})})}),e.jsx(T,{selectedDate:r,setSelectedDate:l,isOpen:g,onClose:v})]})},E=i.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,I=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,A=i.div`
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
`,R=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,L=i.div`
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
`,M=i.p`
  color: #efede880;
  font-size: 14px;
  line-height: 18px;
`,F=i.div`
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
`,q=i.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,G=i.p`
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
`,H=i.div`
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
`,J=i.table`
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
`,K=i.thead`
  text-align: left;
`,Q=i.tr`
  font-size: 12px;
  line-height: 18px;
  color: ${n.colorOrange1};
`,c=i.th`
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
`;i.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
  background-color: green;
`;const Y=()=>e.jsx(e.Fragment,{children:e.jsxs(H,{children:[e.jsx(J,{children:e.jsx(K,{children:e.jsxs(Q,{children:[e.jsx(c,{children:"Title"}),e.jsx(c,{children:"Category"}),e.jsx(c,{children:"Calories"}),e.jsx(c,{children:"Weight"}),e.jsx(c,{children:"Recommend"})]})})}),e.jsx(U,{children:e.jsx(X,{children:e.jsx("use",{href:`${t}#icon-trash-03`})})})]})}),Z=()=>e.jsxs(L,{children:[e.jsxs(_,{children:[e.jsx(M,{children:"Products"}),e.jsx(F,{children:e.jsxs(j,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(V,{children:"Add product"}),e.jsx(q,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:t+"#icon-arrow",style:{stroke:n.colorOrange}})})]})})]}),e.jsx(Y,{}),e.jsx(G,{children:"Not found products"})]}),ee=i.div`
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
`,ne=i.p`
  color: #efede880;
  font-size: 14px;
  line-height: 18px;
`,te=i.div`
  &:hover span {
    color: ${n.colorOrange1};
  }
`,re=i.span`
  color: ${n.colorOrange};
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,oe=i.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,se=i.p`
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
`,de=()=>e.jsxs(ee,{children:[e.jsxs(ie,{children:[e.jsx(ne,{children:"Exercises"}),e.jsx(te,{children:e.jsxs(j,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(re,{children:"Add exercises"}),e.jsx(oe,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:t+"#icon-arrow",style:{stroke:n.colorOrange}})})]})})]}),e.jsx(se,{children:"Not found exercises"})]}),xe=i.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,ae=i.ul`
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
`,s=i.li`
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
`,d=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,x=i.svg`
  width: 20px;
  height: 20px;
  fill: ${n.colorOrange1};
`,a=i.h2`
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`,p=i.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,pe=i.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,ce=i.div`
  width: 24px;
  height: 24px;
  background-color: ${n.colorBeige};
  border-radius: 50%;
`,he=i.svg`
  width: 24px;
  height: 24px;
`,le=i.p`
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
`,me=()=>e.jsxs(xe,{children:[e.jsxs(ae,{children:[e.jsxs(s,{style:{backgroundColor:n.colorOrange},children:[e.jsxs(d,{children:[e.jsx(x,{children:e.jsx("use",{href:`${t}#icon-fluent_food-24-filled`})}),e.jsx(a,{children:"Daily calory intake"})]}),e.jsx(p,{children:2200})]}),e.jsxs(s,{style:{backgroundColor:n.colorOrange},children:[e.jsxs(d,{children:[e.jsx(x,{children:e.jsx("use",{href:`${t}#icon-dumbbell`})}),e.jsx(a,{children:"Daily norm of sports"})]}),e.jsx(p,{children:"110 min"})]}),e.jsxs(s,{children:[e.jsxs(d,{children:[e.jsx(x,{children:e.jsx("use",{href:`${t}#icon-fluent_food-apple-20-filled`})}),e.jsx(a,{children:"Calories consumed"})]}),e.jsx(p,{children:0})]}),e.jsxs(s,{children:[e.jsxs(d,{children:[e.jsx(x,{children:e.jsx("use",{href:`${t}#icon-calories-1`})}),e.jsx(a,{children:"Calories burned"})]}),e.jsx(p,{children:0})]}),e.jsxs(s,{caloriesOverConsumed:0,children:[e.jsxs(d,{children:[e.jsx(x,{children:e.jsx("use",{href:`${t}#icon-bubble`})}),e.jsx(a,{children:"The rest of the calories"})]}),e.jsx(p,{children:2200})]}),e.jsxs(s,{caloriesOverBurned:0,children:[e.jsxs(d,{children:[e.jsx(x,{children:e.jsx("use",{href:`${t}#icon-running-figure`})}),e.jsx(a,{children:"The rest of sports"})]}),e.jsxs(p,{children:[110," min"]})]})]}),e.jsxs(pe,{children:[e.jsx(ce,{children:e.jsx(he,{children:e.jsx("use",{href:`${t}#icon-tabler_exclamation-mark`})})}),e.jsx(le,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]}),ue=()=>{const[h]=m.useState(new Date);return e.jsx($,{children:e.jsxs(E,{children:[e.jsxs(I,{children:[e.jsx(D,{title:"Diary"}),e.jsx(W,{currentDate:h})]}),e.jsxs(R,{children:[e.jsx(me,{}),e.jsxs(A,{children:[e.jsx(Z,{}),e.jsx(de,{})]})]})]})})};export{ue as default};
