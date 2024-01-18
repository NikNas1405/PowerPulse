import{s as i,g as n,f as $,j as e,r as u,a as r,N as y}from"./index-87dac3b0.js";import{e as D,f as R}from"./react-datepicker-ac2b4c4b.js";import{P as t,T as z}from"./TitlePage-270ae626.js";import"./warning-bf30c7c0.js";const C=i.div`
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
`,q=i.p`
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
`,O=i.div`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,W=i.svg`
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
`,b=i.svg`
  width: 100%;
  height: 100%;
  fill: ${n.colorWhite};
`,N=i.div`
  position: absolute;
  left: -40%;
  top: 50%;
  transform: translate(0%, 0%);
  z-index: 999;
`,B=$`
  .react-datepicker__wrapper {
    position: absolute;
  

  }
  .react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
 
    padding: 9px 18px;
    background-color: ${n.colorOrange1};
    font-family: 'RobotoRegular';
    border-radius: 8px;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
    
  }
   .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .react-datepicker__header {
    position: relative;
    background-color:  ${n.colorOrange1};
  }
 
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    color: ${n.colorWhite};
        font-family: 'RobotoMedium';
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.32px;
  }
  .react-datepicker__day-name {
    margin: 0;
   padding: 8px 8px;
   color: rgba(239, 237, 232, 0.50);
        font-family: 'RobotoMedium';
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.28px;
  }
  .react-datepicker__navigation {
    margin-top: 24px;
    color:${n.colorWhite};
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: ${n.colorWhite};
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${n.colorWhite};
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
   color: ${n.colorWhite};
        font-family: 'RobotoRegular';
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px; 
letter-spacing: -0.28px;
    text-align: center;
  }
  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color: ${n.colorBlack};
    color: ${n.colorWhite};
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
  background-color: ${n.colorWhite};
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: ${n.colorWhite};
    color:#3e85f3;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:${n.colorWhite};
    color:#3e85f3;
  }
  .react-datepicker__day--weekend {
    opacity: 50%;
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
`;i.button`
  width: 195px;
  color: #ffffff;
  background: inherit;
  border-radius: 8px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  padding: 8px 12px;
  font-size: 16px;
  justify-content: space-around;
  align-items: center;
`;const w=({selectedDate:a,setSelectedDate:o,isOpen:h,onClose:m})=>{const f=g=>{o(g),m()};return e.jsxs(N,{children:[e.jsx(D,{selected:a,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:g=>g.substr(0,1),open:h,customInput:e.jsx("div",{style:{display:"none"}}),popperModifiers:{preventOverflow:{enabled:!0,escapeWithReference:!1,boundariesElement:"viewport"}},onChange:f}),e.jsx(B,{})]})};w.propTypes={selectedDate:t.instanceOf(Date),setSelectedDate:t.func,isOpen:t.bool,onClose:t.func};const I=({currentDate:a})=>{const[o,h]=u.useState(a),[m,f]=u.useState(!1),g=()=>{f(!m)},v=()=>{const s=new Date(o);s.setDate(o.getDate()-1),s>=a&&h(s)},k=()=>{const s=new Date(o);s.setDate(o.getDate()+1),h(s)},_=()=>{f(!1)};return e.jsxs(C,{children:[e.jsxs(P,{onClick:g,children:[e.jsx(q,{children:R(o,"dd/MM/yyyy")}),e.jsx(O,{children:e.jsx(W,{children:e.jsx("use",{href:`${r}#icon-normal`})})})]}),e.jsx(S,{type:"button",onClick:v,children:e.jsx(b,{children:e.jsx("use",{href:`${r}#icon-chevron-left`})})}),e.jsx(T,{type:"button",onClick:k,children:e.jsx(b,{children:e.jsx("use",{href:`${r}#icon-chevron-right`})})}),e.jsx(w,{selectedDate:o,setSelectedDate:h,isOpen:m,onClose:_})]})},E=i.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;
  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,A=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,M=i.div`
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
`,L=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,F=i.div`
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
`,G=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`,V=i.p`
  color: #efede880;
  font-size: 14px;
  line-height: 18px;
`,H=i.div`
  &:hover span {
    color: ${n.colorOrange1};
  }
`,J=i.span`
  color: ${n.colorOrange};
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  transition: color 300ms;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,K=i.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,Q=i.p`
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
`,U=()=>e.jsxs(F,{children:[e.jsxs(G,{children:[e.jsx(V,{children:"Products"}),e.jsx(H,{children:e.jsxs(y,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(J,{children:"Add product"}),e.jsx(K,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:r+"#icon-arrow",style:{stroke:n.colorOrange}})})]})})]}),e.jsx(Q,{children:"Not found products"})]}),X=i.div`
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
`,Y=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`,Z=i.p`
  color: #efede880;
  font-size: 14px;
  line-height: 18px;
`,ee=i.div`
  &:hover span {
    color: ${n.colorOrange1};
  }
`,ie=i.span`
  color: ${n.colorOrange};
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  transition: color 300ms;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,te=i.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,ne=i.p`
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
`,re=()=>e.jsxs(X,{children:[e.jsxs(Y,{children:[e.jsx(Z,{children:"Exercises"}),e.jsx(ee,{children:e.jsxs(y,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(ie,{children:"Add exercises"}),e.jsx(te,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:r+"#icon-arrow",style:{stroke:n.colorOrange}})})]})})]}),e.jsx(ne,{children:"Not found exercises"})]}),oe=i.div`
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
`,c=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,l=i.svg`
  width: 20px;
  height: 20px;
  fill: ${n.colorOrange1};
`,p=i.h2`
  font-size: 12px;
  line-height: ${16/12};
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: ${18/12};
  }
`,x=i.p`
  font-weight: 700;
  font-size: 18px;
  line-height: ${20/18};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: ${32/24};
  }
`,se=i.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,de=i.div`
  width: 24px;
  height: 24px;
  background-color: ${n.colorBeige};
  border-radius: 50%;
`,ce=i.svg`
  width: 24px;
  height: 24px;
`,le=i.p`
  font-size: 14px;
  line-height: ${18/14};
  color: ${n.colorInput};

  @media screen and (max-width: 374px) {
    max-width: calc(100% - 72px);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: ${24/16};
  }
`,j=()=>e.jsxs(oe,{children:[e.jsxs(ae,{children:[e.jsxs(d,{style:{backgroundColor:n.colorOrange},children:[e.jsxs(c,{children:[e.jsx(l,{children:e.jsx("use",{href:`${r}#icon-fluent_food-24-filled`})}),e.jsx(p,{children:"Daily calory intake"})]}),e.jsx(x,{children:2200})]}),e.jsxs(d,{style:{backgroundColor:n.colorOrange},children:[e.jsxs(c,{children:[e.jsx(l,{children:e.jsx("use",{href:`${r}#icon-dumbbell`})}),e.jsx(p,{children:"Daily norm of sports"})]}),e.jsx(x,{children:"110 min"})]}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(l,{children:e.jsx("use",{href:`${r}#icon-fluent_food-apple-20-filled`})}),e.jsx(p,{children:"Calories consumed"})]}),e.jsx(x,{children:0})]}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(l,{children:e.jsx("use",{href:`${r}#icon-calories-1`})}),e.jsx(p,{children:"Calories burned"})]}),e.jsx(x,{children:0})]}),e.jsxs(d,{caloriesOverConsumed:0,children:[e.jsxs(c,{children:[e.jsx(l,{children:e.jsx("use",{href:`${r}#icon-bubble`})}),e.jsx(p,{children:"The rest of the calories"})]}),e.jsx(x,{children:2200})]}),e.jsxs(d,{caloriesOverBurned:0,children:[e.jsxs(c,{children:[e.jsx(l,{children:e.jsx("use",{href:`${r}#icon-running-stick-figure-svgrepo-com-1`})}),e.jsx(p,{children:"The rest of sports"})]}),e.jsxs(x,{children:[110," min"]})]})]}),e.jsxs(se,{children:[e.jsx(de,{children:e.jsx(ce,{children:e.jsx("use",{href:`${r}#icon-tabler_exclamation-mark`})})}),e.jsx(le,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]});j.propTypes={bmrData:t.number,diaryProducts:t.arrayOf(t.shape({amount:t.number.isRequired,calories:t.number.isRequired,date:t.string.isRequired,groupBloodNotAllowed:t.shape({1:t.bool.isRequired,2:t.bool.isRequired,3:t.bool.isRequired,4:t.bool.isRequired}),product_ID:t.string.isRequired,title:t.string.isRequired,_id:t.string.isRequired})).isRequired,diaryExercises:t.arrayOf(t.shape({bodyPart:t.string.isRequired,calories:t.number.isRequired,date:t.string.isRequired,equipment:t.string.isRequired,exercise_ID:t.string.isRequired,name:t.string.isRequired,target:t.string.isRequired,time:t.number.isRequired,_id:t.string.isRequired})).isRequired};const me=()=>{const[a]=u.useState(new Date);return e.jsxs(E,{children:[e.jsxs(A,{children:[e.jsx(z,{title:"Diary"}),e.jsx(I,{currentDate:a})]}),e.jsxs(L,{children:[e.jsx(j,{}),e.jsxs(M,{children:[e.jsx(U,{}),e.jsx(re,{})]})]})]})};export{me as default};
