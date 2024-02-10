import{s as i,g as t,j as e,w as se,Q as O,r as j,a as l,u as L,h as y,x as q,y as F,N as Q,z as de,A as M,B as le,D as ae,G as pe,C as he,H as xe,I as ce}from"./index-8349e76f.js";import{c as T,s as H,a as fe,b as we}from"./diarySelector-59eb112d.js";import{e as me,f as ge}from"./react-datepicker-cssmodules-978da669.js";import{T as ye}from"./TitlePage-2b8a8295.js";import"./defineProperty-889ce187.js";const je=i.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,ue=i.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;

  &:hover {
    > svg {
      fill: ${t.colorOrange};
    }
  }
`,be=i.p`
  font-size: 24px;
  line-height: 1.33;
  margin: 0;
  padding: 0;
  color: ${t.colorWhite};
  font-weight: 700;
  transition: color 0.3s ease;

  &:hover {
    color: ${t.colorOrange1};
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.1;
  }
`,ve=i.svg`
  width: 20px;
  height: 20px;
  stroke: ${t.colorOrange1};

  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,$e=i.button`
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

  &:hover {
    > svg {
      stroke: ${t.colorOrange};
    }
  }
`,De=i.button`
  display: flex;
  margin: 0 6px 0 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;

  &:hover {
    > svg {
      fill: ${t.colorOrange};
    }
  }
`,Ie=i.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,ke=i.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`,ze=i.div`
  position: absolute;
  left: -50%;
  top: 90%;
  transform: translate(0%, 0%);
  z-index: 999;
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
`;const Se=({selectedDate:d,setSelectedDate:a,isOpen:f,onClose:x,setCurrentDate:p,userDateRegistration:r})=>{const h=T(new Date),n=s=>{const w=T(s);h>=w&&w>=r?(a(s),p(s),x()):O.error(`However, we don't have any data to show you. You can review the information from the day of your registration: ${r} up to today: ${h}. `,{theme:"dark"})};return e.jsxs(ze,{children:[e.jsx(me,{selected:d,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:s=>s.substr(0,1),open:f,customInput:e.jsx("div",{style:{display:"none"}}),onChange:n,minDate:new Date(r),maxDate:new Date(h)}),e.jsx(se,{})]})},Ce=({currentDate:d,setCurrentDate:a,userDateRegistration:f})=>{const[x,p]=j.useState(d),[r,h]=j.useState(!1),[n,s]=j.useState(!1),[w,o]=j.useState(!1),g=()=>{h(!r)},B=()=>{s(!0);const u=new Date(d);T(u)>f?(u.setDate(u.getDate()-1),a(u),p(u),s(!1)):(O.error(`However, we don't have any data to show you. Selected date cannot be earlier than the registration date: ${f}.`,{theme:"dark"}),s(!0))},R=()=>{o(!0);const u=T(new Date),W=new Date(x);W.setDate(x.getDate()+1),W>new Date?(O.error(`However, we don't have any data to show you. Selected date cannot be later than today's date: ${u}.`,{theme:"dark"}),o(!0)):(a(W),p(W),o(!1))},_=()=>{h(!1)};return e.jsxs(je,{children:[e.jsxs($e,{onClick:g,children:[e.jsx(be,{children:ge(x,"dd/MM/yyyy")}),e.jsx(ve,{children:e.jsx("use",{href:l+"#icon-calendar"})})]}),e.jsx(De,{type:"button",onClick:B,children:e.jsx(Ie,{className:n?"passivePrev":"",children:e.jsx("use",{href:l+"#icon-chevron-left"})})}),e.jsx(ue,{type:"button",onClick:R,children:e.jsx(ke,{className:w?"passiveNext":"",children:e.jsx("use",{href:l+"#icon-chevron-right"})})}),e.jsx(Se,{selectedDate:x,setSelectedDate:p,isOpen:r,onClose:_,setCurrentDate:a,userDateRegistration:f})]})},V=i.div`
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
`,J=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,K=i.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,X=i.div`
  &:hover span {
    color: ${t.colorOrange1};
  }
`,Z=i.span`
  color: ${t.colorOrange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,ee=i.p`
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
`,N=i.div`
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
`,P=i.div`
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
`,Oe=i.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,$=i.li`
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
`,U=i.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,m=i.li`
  @media screen and (max-width: 375px) {
    width: 100%;

    &:first-of-type {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
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
      margin-bottom: 16px;
    }

    &:nth-of-type(3) {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
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
      margin-bottom: 16px;
    }
  }

  @media screen and (min-width: 375px) {
    width: 290px;

    &:first-of-type {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
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
      margin-bottom: 16px;
    }

    &:nth-of-type(3) {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
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
      margin-bottom: 16px;
    }
  }
`,D=i.li`
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
`,te=i.div`
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`,ie=i.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

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

    @media screen and (min-width: 375px) {
      width: 79px;

      &:nth-of-type(2) {
        margin-bottom: 40px;
      }
    }
  }
`,ne=i.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

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

    @media screen and (min-width: 375px) {
      width: 78px;
    }
  }
`,oe=i.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

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

    @media screen and (min-width: 375px) {
      width: 74px;
    }
  }
`,re=i.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        display: none;
      }

      &:nth-of-type(2) {
        height: 38px;
        border: none;
        padding: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    @media screen and (min-width: 375px) {
      width: 20px;

      &:nth-of-type(1) {
        display: block;
        color: ${t.colorOrange1};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        margin-top: 18px;
      }
    }
  }
`,E=i.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0;
  position: relative;

  &:hover {
    > svg {
      stroke: ${t.colorOrange};
    }
  }
`,A=i.svg`
  stroke: ${t.colorOrange1};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;
`,G=i.span`
  @media screen and (min-width: 320px) {
    color: ${t.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Te=({productsArray:d,date:a})=>{const f=L(),p=y(q).blood,r=y(H),h=F("(max-width:768px)"),n=o=>o[0].toUpperCase()+o.slice(1).toLowerCase();let s;const w=async o=>{try{await f(de(o)),await f(M(a))}catch{O.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(V,{children:[e.jsxs(J,{children:[e.jsx(K,{children:"Products"}),e.jsx(X,{children:e.jsxs(Q,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(Z,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:l+"#icon-arrow"})})]})})]}),d&&d.length>0&&!r?h?e.jsx(N,{children:e.jsx(P,{children:d.map(o=>{const g=o.productId.groupBloodNotAllowed[p]?s="Yes":s="No";return e.jsxs(U,{children:[e.jsx(m,{children:"Title"}),e.jsx(m,{children:n(o.productId.title)}),e.jsx(m,{children:"Category"}),e.jsx(m,{children:n(o.productId.category)}),e.jsxs(te,{children:[e.jsxs(ie,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:"Calories"}),e.jsx(m,{children:o.calories})]}),e.jsxs(ne,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:"Weight"}),e.jsx(m,{children:o.amount})]}),e.jsxs(oe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:"Recommend"}),e.jsx(m,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:g==="Yes"?e.jsx("use",{href:l+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:l+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(G,{children:s})]})})]}),e.jsxs(re,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:""}),e.jsx(m,{children:e.jsx(E,{type:"button",onClick:()=>w(o._id),children:e.jsx(A,{children:e.jsx("use",{href:l+"#icon-trash-03"})})})})]})]})]},o._id)})})}):e.jsxs(N,{children:[e.jsxs(Oe,{children:[e.jsx($,{children:"Title"}),e.jsx($,{children:"Category"}),e.jsx($,{children:"Calories"}),e.jsx($,{children:"Weight"}),e.jsx($,{children:"Recommend"}),e.jsx($,{children:""})]}),e.jsx(P,{children:d.map(o=>{const g=o.productId.groupBloodNotAllowed[p]?s="Yes":s="No";return e.jsxs(U,{children:[e.jsx(D,{children:n(o.productId.title)}),e.jsx(D,{children:n(o.productId.category)}),e.jsx(D,{children:o.calories}),e.jsx(D,{children:o.amount}),e.jsx(D,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:g==="Yes"?e.jsx("use",{href:l+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:l+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(G,{children:s})]})}),e.jsx(D,{children:e.jsx(E,{type:"button",onClick:()=>w(o._id),children:e.jsx(A,{children:e.jsx("use",{href:l+"#icon-trash-03"})})})})]},o._id)})})]}):e.jsx(ee,{children:"Not found products"})]})},We=i.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
    justify-content: start;
  }
`,b=i.li`
  color: ${t.colorOrange1};
  font-size: 12px;
  line-height: 1.5;
  display: block;

  @media screen and (min-width: 768px) {
    &:first-of-type {
      width: 90px;
    }

    &:nth-of-type(2) {
      width: 132px;
    }

    &:nth-of-type(3) {
      width: 128px;
    }

    &:nth-of-type(4) {
      width: 84px;
    }

    &:nth-of-type(5) {
      width: 78px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(6) {
      width: 32px;
    }

    &:nth-of-type(7) {
      width: 20px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:first-of-type {
      width: 115px;
    }

    &:nth-of-type(2) {
      width: 157px;
    }

    &:nth-of-type(3) {
      width: 131px;
    }

    &:nth-of-type(4) {
      width: 106px;
    }

    &:nth-of-type(5) {
      width: 91px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(6) {
      width: 82px;
    }

    &:nth-of-type(7) {
      width: 20px;
    }
  }
`,Y=i.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,c=i.li`
  @media screen and (max-width: 375px) {
    width: 100%;
    margin-bottom: 8px;

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

    &:nth-of-type(5) {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(6) {
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

  @media screen and (min-width: 375px) {
    width: 290px;

    &:first-of-type {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 8px;
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
      margin-bottom: 16px;
    }

    &:nth-of-type(3) {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
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
      margin-bottom: 16px;
    }

    &:nth-of-type(5) {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(6) {
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
      margin-bottom: 16px;
    }
  }
`,v=i.li`
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
      width: 90px;
    }

    &:nth-of-type(2) {
      width: 132px;
    }

    &:nth-of-type(3) {
      width: 128px;
    }

    &:nth-of-type(4) {
      width: 84px;
    }

    &:nth-of-type(5) {
      width: 78px;
    }

    &:nth-of-type(6) {
      width: 72px;
    }

    &:nth-of-type(7) {
      width: 20px;
      border: none;
      padding: 0;
    }
  }

  @media screen and (min-width: 1440px) {
    &:first-of-type {
      width: 115px;
    }

    &:nth-of-type(2) {
      width: 157px;
    }

    &:nth-of-type(3) {
      width: 131px;
    }

    &:nth-of-type(4) {
      width: 106px;
    }

    &:nth-of-type(5) {
      width: 91px;
    }

    &:nth-of-type(6) {
      width: 82px;
    }

    &:nth-of-type(7) {
      width: 20px;
    }
  }
`,Ne=({exercisesArray:d,date:a})=>{const f=F("(max-width:768px)"),x=y(H),p=L(),r=n=>n[0].toUpperCase()+n.slice(1).toLowerCase(),h=async n=>{try{await p(le(n)),await p(M(a))}catch(s){console.log(s),O.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(V,{children:[e.jsxs(J,{children:[e.jsx(K,{children:"Exercises"}),e.jsx(X,{children:e.jsxs(Q,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(Z,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:l+"#icon-arrow"})})]})})]}),d&&d.length>0&&!x?f?e.jsx(N,{children:e.jsx(P,{children:d.map(n=>e.jsxs(Y,{children:[e.jsx(c,{children:"Body Part"}),e.jsx(c,{children:r(n.exerciseId.bodyPart)}),e.jsx(c,{children:"Equipment"}),e.jsx(c,{children:r(n.exerciseId.equipment)}),e.jsx(c,{children:"Name"}),e.jsx(c,{children:r(n.exerciseId.name)}),e.jsxs(te,{children:[e.jsxs(ie,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(c,{children:"Target"}),e.jsx(c,{children:r(n.exerciseId.target)})]}),e.jsxs(ne,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(c,{children:"Burned Calories"}),e.jsx(c,{children:n.calories})]}),e.jsxs(oe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(c,{children:"Time"}),e.jsx(c,{children:n.time})]}),e.jsxs(re,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(c,{children:""}),e.jsx(c,{children:e.jsx(E,{type:"button",onClick:()=>h(n._id),children:e.jsx(A,{children:e.jsx("use",{href:l+"#icon-trash-03"})})})})]})]})]},n._id))})}):e.jsxs(N,{children:[e.jsxs(We,{children:[e.jsx(b,{children:"Body Part"}),e.jsx(b,{children:"Equipment"}),e.jsx(b,{children:"Name"}),e.jsx(b,{children:"Target"}),e.jsx(b,{children:"Burned Calories"}),e.jsx(b,{children:"Time"}),e.jsx(b,{children:""})]}),e.jsx(P,{children:d.map(n=>e.jsxs(Y,{children:[e.jsx(v,{children:r(n.exerciseId.bodyPart)}),e.jsx(v,{children:r(n.exerciseId.equipment)}),e.jsx(v,{children:r(n.exerciseId.name)}),e.jsx(v,{children:r(n.exerciseId.target)}),e.jsx(v,{children:n.calories}),e.jsx(v,{children:n.time}),e.jsx(v,{children:e.jsx(E,{type:"button",onClick:()=>h(n._id),children:e.jsx(A,{children:e.jsx("use",{href:l+"#icon-trash-03"})})})})]},n._id))})]}):e.jsx(ee,{children:"Not found exercises"})]})},Pe=i.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,Ee=i.ul`
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
`,I=i.li`
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
`,k=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,z=i.h2`
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`,S=i.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,Ae=i.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Be=i.div`
  width: 24px;
  height: 24px;
  background-color: ${t.colorBeige};
  border-radius: 50%;
`,C=i.svg`
  width: 20px;
  height: 20px;
  fill: ${t.colorOrange1};
`,Le=i.svg`
  width: 24px;
  height: 24px;
`,Me=i.p`
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
`,He=({userDiaryInformation:d,bmr:a})=>{const{caloriesIntake:f,burnedCalories:x,consumedCalories:p,remainingCalories:r,remainingSports:h}=d,[n,s]=j.useState(!1),w=y(H);return j.useEffect(()=>{r<0&&s(!0)},[r]),e.jsxs(Pe,{children:[e.jsxs(Ee,{children:[e.jsxs(I,{children:[e.jsxs(k,{children:[e.jsx(C,{children:e.jsx("use",{href:l+"#icon-fluent_food-24-filled"})}),e.jsx(z,{children:"Daily calory intake"})]}),e.jsx(S,{children:a&&a!==null&&a!==0?a:2200})]}),e.jsxs(I,{children:[e.jsxs(k,{children:[e.jsx(C,{children:e.jsx("use",{href:l+"#icon-dumbbell"})}),e.jsx(z,{children:"Daily norm of sports"})]}),e.jsx(S,{children:"110 min"})]}),e.jsxs(I,{children:[e.jsxs(k,{children:[e.jsx(C,{children:e.jsx("use",{href:l+"#icon-fluent_food-apple-20-filled"})}),e.jsx(z,{children:"Calories consumed"})]}),e.jsx(S,{children:p&&!w?p:0})]}),e.jsxs(I,{children:[e.jsxs(k,{children:[e.jsx(C,{children:e.jsx("use",{href:l+"#icon-calories-1"})}),e.jsx(z,{children:"Calories burned"})]}),e.jsx(S,{children:x&&!w?x:0})]}),e.jsxs(I,{className:n?"redBg":"",children:[e.jsxs(k,{children:[e.jsx(C,{children:e.jsx("use",{href:l+"#icon-bubble"})}),e.jsx(z,{children:"The rest of the calories"})]}),e.jsx(S,{children:r&&!w?r:a||0})]}),e.jsxs(I,{className:n?"greenBg":"",children:[e.jsxs(k,{children:[e.jsx(C,{children:e.jsx("use",{href:l+"#icon-running-figure"})}),e.jsx(z,{children:"The rest of sports"})]}),e.jsxs(S,{children:[h&&!w?h:110," min"]})]})]}),e.jsxs(Ae,{children:[e.jsx(Be,{children:e.jsx(Le,{children:e.jsx("use",{href:l+"#icon-running-stick-figure-svgrepo-com-1"})})}),e.jsx(Me,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},Re=i.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,_e=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,Ue=i.div`
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
`,Ge=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Je=()=>{const d=L(),a=y(fe),f=y(we),x=y(ae),p=y(pe),{addProducts:r,addExercises:h}=a,[n,s]=j.useState(new Date),o=y(q).createdAt,g=T(n),B=T(o);return j.useEffect(()=>{(async()=>{try{await d(ce()),await d(M(g))}catch{O.error("Sorry, something went wrong, please try again",{theme:"dark"})}})()},[d,g,n]),e.jsx(he,{children:f||x?e.jsx(xe,{}):e.jsxs(Re,{children:[e.jsxs(_e,{children:[e.jsx(ye,{title:"Diary"}),e.jsx(Ce,{currentDate:n,setCurrentDate:s,userDateRegistration:B})]}),e.jsxs(Ge,{children:[e.jsx(He,{userDiaryInformation:a,bmr:p}),e.jsxs(Ue,{children:[e.jsx(Te,{productsArray:r,date:g}),e.jsx(Ne,{exercisesArray:h,date:g})]})]})]})})};export{Je as default};
