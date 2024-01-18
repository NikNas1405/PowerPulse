import{s as i,g as t,r as m,j as e,a as r,N as j}from"./index-7e968d56.js";import{f as D,S as R}from"./StyledDatepicker-4a335bd2.js";import{T as k}from"./TitlePage-7d95e6b5.js";import{P as n}from"./warning-e0cb6438.js";const q=i.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,T=i.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
`,C=i.p`
  font-family: 'RobotoBold';
  font-size: 24px;
  line-height: 1.33;
  margin: 0;
  padding: 0;
  color: ${t.colorWhite};

  &:hover {
    color: ${t.colorOrange1};
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.1;
  }
`,z=i.div`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,O=i.svg`
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
`,S=i.button`
  display: flex;
  margin: 0 6px 0 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
`,f=i.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
`,N=({currentDate:p})=>{const[s,h]=m.useState(p),[g,u]=m.useState(!1),b=()=>{u(!g)},y=()=>{const o=new Date(s);o.setDate(s.getDate()-1),o>=p&&h(o)},v=()=>{const o=new Date(s);o.setDate(s.getDate()+1),h(o)},$=()=>{u(!1)};return e.jsxs(q,{children:[e.jsxs(P,{onClick:b,children:[e.jsx(C,{children:D(s,"dd/MM/yyyy")}),e.jsx(z,{children:e.jsx(O,{children:e.jsx("use",{href:`${r}#icon-normal`})})})]}),e.jsx(S,{type:"button",onClick:y,children:e.jsx(f,{children:e.jsx("use",{href:`${r}#icon-chevron-left`})})}),e.jsx(T,{type:"button",onClick:v,children:e.jsx(f,{children:e.jsx("use",{href:`${r}#icon-chevron-right`})})}),e.jsx(R,{selectedDate:s,setSelectedDate:h,isOpen:g,onClose:$})]})},B=i.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;
  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,W=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,I=i.div`
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
`,A=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,E=i.div`
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
`,L=i.p`
  color: #efede880;
  font-size: 14px;
  line-height: 18px;
`,M=i.div`
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
`,F=i.svg`
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
`,H=()=>e.jsxs(E,{children:[e.jsxs(_,{children:[e.jsx(L,{children:"Products"}),e.jsx(M,{children:e.jsxs(j,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(V,{children:"Add product"}),e.jsx(F,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:r+"#icon-arrow",style:{stroke:t.colorOrange}})})]})})]}),e.jsx(G,{children:"Not found products"})]}),J=i.div`
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
`,K=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`,Q=i.p`
  color: #efede880;
  font-size: 14px;
  line-height: 18px;
`,U=i.div`
  &:hover span {
    color: ${t.colorOrange1};
  }
`,X=i.span`
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
`,Z=i.p`
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
`,ee=()=>e.jsxs(J,{children:[e.jsxs(K,{children:[e.jsx(Q,{children:"Exercises"}),e.jsx(U,{children:e.jsxs(j,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(X,{children:"Add exercises"}),e.jsx(Y,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:r+"#icon-arrow",style:{stroke:t.colorOrange}})})]})})]}),e.jsx(Z,{children:"Not found exercises"})]}),ie=i.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,ne=i.ul`
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
`,d=i.li`
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
`,a=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,x=i.svg`
  width: 20px;
  height: 20px;
  fill: ${t.colorOrange1};
`,c=i.h2`
  font-size: 12px;
  line-height: ${16/12};
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: ${18/12};
  }
`,l=i.p`
  font-weight: 700;
  font-size: 18px;
  line-height: ${20/18};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: ${32/24};
  }
`,te=i.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,re=i.div`
  width: 24px;
  height: 24px;
  background-color: ${t.colorBeige};
  border-radius: 50%;
`,se=i.svg`
  width: 24px;
  height: 24px;
`,oe=i.p`
  font-size: 14px;
  line-height: ${18/14};
  color: ${t.colorInput};

  @media screen and (max-width: 374px) {
    max-width: calc(100% - 72px);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: ${24/16};
  }
`,w=()=>e.jsxs(ie,{children:[e.jsxs(ne,{children:[e.jsxs(d,{style:{backgroundColor:t.colorOrange},children:[e.jsxs(a,{children:[e.jsx(x,{children:e.jsx("use",{href:`${r}#icon-fluent_food-24-filled`})}),e.jsx(c,{children:"Daily calory intake"})]}),e.jsx(l,{children:2200})]}),e.jsxs(d,{style:{backgroundColor:t.colorOrange},children:[e.jsxs(a,{children:[e.jsx(x,{children:e.jsx("use",{href:`${r}#icon-dumbbell`})}),e.jsx(c,{children:"Daily norm of sports"})]}),e.jsx(l,{children:"110 min"})]}),e.jsxs(d,{children:[e.jsxs(a,{children:[e.jsx(x,{children:e.jsx("use",{href:`${r}#icon-fluent_food-apple-20-filled`})}),e.jsx(c,{children:"Calories consumed"})]}),e.jsx(l,{children:0})]}),e.jsxs(d,{children:[e.jsxs(a,{children:[e.jsx(x,{children:e.jsx("use",{href:`${r}#icon-calories-1`})}),e.jsx(c,{children:"Calories burned"})]}),e.jsx(l,{children:0})]}),e.jsxs(d,{caloriesOverConsumed:0,children:[e.jsxs(a,{children:[e.jsx(x,{children:e.jsx("use",{href:`${r}#icon-bubble`})}),e.jsx(c,{children:"The rest of the calories"})]}),e.jsx(l,{children:2200})]}),e.jsxs(d,{caloriesOverBurned:0,children:[e.jsxs(a,{children:[e.jsx(x,{children:e.jsx("use",{href:`${r}#icon-running-stick-figure-svgrepo-com-1`})}),e.jsx(c,{children:"The rest of sports"})]}),e.jsxs(l,{children:[110," min"]})]})]}),e.jsxs(te,{children:[e.jsx(re,{children:e.jsx(se,{children:e.jsx("use",{href:`${r}#icon-tabler_exclamation-mark`})})}),e.jsx(oe,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]});w.propTypes={bmrData:n.number,diaryProducts:n.arrayOf(n.shape({amount:n.number.isRequired,calories:n.number.isRequired,date:n.string.isRequired,groupBloodNotAllowed:n.shape({1:n.bool.isRequired,2:n.bool.isRequired,3:n.bool.isRequired,4:n.bool.isRequired}),product_ID:n.string.isRequired,title:n.string.isRequired,_id:n.string.isRequired})).isRequired,diaryExercises:n.arrayOf(n.shape({bodyPart:n.string.isRequired,calories:n.number.isRequired,date:n.string.isRequired,equipment:n.string.isRequired,exercise_ID:n.string.isRequired,name:n.string.isRequired,target:n.string.isRequired,time:n.number.isRequired,_id:n.string.isRequired})).isRequired};const le=()=>{const[p]=m.useState(new Date);return e.jsxs(B,{children:[e.jsxs(W,{children:[e.jsx(k,{title:"Diary"}),e.jsx(N,{currentDate:p})]}),e.jsxs(A,{children:[e.jsx(w,{}),e.jsxs(I,{children:[e.jsx(H,{}),e.jsx(ee,{})]})]})]})};export{le as default};
