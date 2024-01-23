import{s as t,g as i,j as e,t as oe,Q as T,r as b,a as l,u as P,f as v,v as G,w as Y,N as q,x as re,y as A,z as se,C as de,A as le,B as pe}from"./index-70a7a61d.js";import{c as W}from"./helpers-d77433ec.js";import{e as ae,f as he,a as M,s as xe,b as ce}from"./react-datepicker-cssmodules-57ed0e0d.js";import{T as fe}from"./TitlePage-7a0a5aaa.js";import"./defineProperty-f92442d0.js";const me=t.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,we=t.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
`,ge=t.p`
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
`,ye=t.svg`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,je=t.button`
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
`,ue=t.button`
  display: flex;
  margin: 0 6px 0 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;

  &.passive {
    border: 1px solid #e9101d;
  }
`,R=t.svg`
  width: 100%;
  height: 100%;
  fill: ${i.colorWhite};

  &.passive {
    fill: rgba(239, 237, 232, 0.2);
  }
`,be=t.div`
  position: absolute;
  left: -50%;
  top: 90%;
  transform: translate(0%, 0%);
  z-index: 999;
`;t.button`
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
`;const ve=({selectedDate:d,setSelectedDate:a,isOpen:h,onClose:x,setCurrentDate:p,userDateRegistration:r})=>{const c=n=>{W(n)>=r?(a(n),p(n),x()):T.error("Selected date cannot be earlier than the registration date.")};return e.jsxs(be,{children:[e.jsx(ae,{selected:d,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:n=>n.substr(0,1),open:h,customInput:e.jsx("div",{style:{display:"none"}}),onChange:c,minDate:new Date(r)}),e.jsx(oe,{})]})},$e=({currentDate:d,setCurrentDate:a,userDateRegistration:h})=>{const[x,p]=b.useState(d),[r,c]=b.useState(!1),[n,s]=b.useState(!1),w=()=>{c(!r)},o=()=>{s(!0);const g=new Date(d);W(g)>h?(g.setDate(g.getDate()-1),a(g),p(g),s(!1)):T.error("Selected date cannot be earlier than the registration date.")},y=()=>{const g=new Date(x);g.setDate(x.getDate()+1),a(g),p(g)},O=()=>{c(!1)};return e.jsxs(me,{children:[e.jsxs(je,{onClick:w,children:[e.jsx(ge,{children:he(x,"dd/MM/yyyy")}),e.jsx(ye,{children:e.jsx("use",{href:l+"#icon-calendar"})})]}),e.jsx(ue,{type:"button",onClick:o,children:e.jsx(R,{className:n?"passive":"",children:e.jsx("use",{href:l+"#icon-chevron-left"})})}),e.jsx(we,{type:"button",onClick:y,children:e.jsx(R,{children:e.jsx("use",{href:l+"#icon-chevron-right"})})}),e.jsx(ve,{selectedDate:x,setSelectedDate:p,isOpen:r,onClose:O,setCurrentDate:a,userDateRegistration:h})]})},F=t.div`
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
`,Q=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,V=t.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,J=t.div`
  &:hover span {
    color: ${i.colorOrange1};
  }
`,K=t.span`
  color: ${i.colorOrange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,X=t.p`
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
`,E=t.div`
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
`,N=t.div`
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
`,De=t.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,$=t.li`
  color: ${i.colorOrange1};
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
`,_=t.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,m=t.li`
  @media screen and (max-width: 375px) {
    width: 100%;

    &:first-of-type {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
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
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(4) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
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
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
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
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(4) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
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
`,D=t.li`
  @media screen and (min-width: 768px) {
    color: ${i.colorWhite};
    border-radius: 12px;
    border: 1px solid ${i.colorInput};
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
`,Z=t.div`
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`,ee=t.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        color: ${i.colorOrange1};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${i.colorWhite};
        border-radius: 12px;
        border: 1px solid ${i.colorInput};
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
`,ie=t.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        color: ${i.colorOrange1};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${i.colorWhite};
        border-radius: 12px;
        border: 1px solid ${i.colorInput};
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
`,te=t.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        color: ${i.colorOrange1};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${i.colorWhite};
        border-radius: 12px;
        border: 1px solid ${i.colorInput};
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
`,ne=t.div`
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
        color: ${i.colorOrange1};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        margin-top: 18px;
      }
    }
  }
`,B=t.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0;
  position: relative;
`,L=t.svg`
  stroke: ${i.colorOrange1};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`,H=t.span`
  @media screen and (min-width: 320px) {
    color: ${i.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Ie=({productsArray:d,date:a})=>{const h=P(),p=v(G).blood,r=v(M),c=Y("(max-width:768px)"),n=o=>o[0].toUpperCase()+o.slice(1).toLowerCase();let s;const w=async o=>{try{await h(re(o)),await h(A(a))}catch(y){T.error("Some error occured, try again",y)}};return e.jsxs(F,{children:[e.jsxs(Q,{children:[e.jsx(V,{children:"Products"}),e.jsx(J,{children:e.jsxs(q,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(K,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:i.colorOrange},children:e.jsx("use",{href:l+"#icon-arrow"})})]})})]}),d&&d.length>0&&!r?c?e.jsx(E,{children:e.jsx(N,{children:d.map(o=>{const y=o.productId.groupBloodNotAllowed[p]?s="Yes":s="No";return e.jsxs(_,{children:[e.jsx(m,{children:"Title"}),e.jsx(m,{children:n(o.productId.title)}),e.jsx(m,{children:"Category"}),e.jsx(m,{children:n(o.productId.category)}),e.jsxs(Z,{children:[e.jsxs(ee,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:"Calories"}),e.jsx(m,{children:o.calories})]}),e.jsxs(ie,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:"Weight"}),e.jsx(m,{children:o.amount})]}),e.jsxs(te,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:"Recommend"}),e.jsx(m,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:y==="Yes"?e.jsx("use",{href:l+"#icon-Ellipse-82",style:{fill:i.colorSecondaryGreen,stroke:i.colorSecondaryGreen}}):e.jsx("use",{href:l+"#icon-Ellipse-82",style:{fill:i.colorSecondaryRed,stroke:i.colorSecondaryRed}})}),e.jsx(H,{children:s})]})})]}),e.jsxs(ne,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(m,{children:""}),e.jsx(m,{children:e.jsx(B,{type:"button",onClick:()=>w(o._id),children:e.jsx(L,{children:e.jsx("use",{href:l+"#icon-trash-03"})})})})]})]})]},o._id)})})}):e.jsxs(E,{children:[e.jsxs(De,{children:[e.jsx($,{children:"Title"}),e.jsx($,{children:"Category"}),e.jsx($,{children:"Calories"}),e.jsx($,{children:"Weight"}),e.jsx($,{children:"Recommend"}),e.jsx($,{children:""})]}),e.jsx(N,{children:d.map(o=>{const y=o.productId.groupBloodNotAllowed[p]?s="Yes":s="No";return e.jsxs(_,{children:[e.jsx(D,{children:n(o.productId.title)}),e.jsx(D,{children:n(o.productId.category)}),e.jsx(D,{children:o.calories}),e.jsx(D,{children:o.amount}),e.jsx(D,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:y==="Yes"?e.jsx("use",{href:l+"#icon-Ellipse-82",style:{fill:i.colorSecondaryGreen,stroke:i.colorSecondaryGreen}}):e.jsx("use",{href:l+"#icon-Ellipse-82",style:{fill:i.colorSecondaryRed,stroke:i.colorSecondaryRed}})}),e.jsx(H,{children:s})]})}),e.jsx(D,{children:e.jsx(B,{type:"button",onClick:()=>w(o._id),children:e.jsx(L,{children:e.jsx("use",{href:l+"#icon-trash-03"})})})})]},o._id)})})]}):e.jsx(X,{children:"Not found products"})]})},ze=t.ul`
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
`,j=t.li`
  color: ${i.colorOrange1};
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
`,U=t.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,f=t.li`
  @media screen and (max-width: 375px) {
    width: 100%;
    margin-bottom: 8px;

    &:first-of-type {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(2) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(3) {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(4) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(5) {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(6) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
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
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
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
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(4) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
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
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(6) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
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
`,u=t.li`
  @media screen and (min-width: 768px) {
    color: ${i.colorWhite};
    border-radius: 12px;
    border: 1px solid ${i.colorInput};
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
`,Ce=({exercisesArray:d,date:a})=>{const h=Y("(max-width:768px)"),x=v(M),p=P(),r=n=>n[0].toUpperCase()+n.slice(1).toLowerCase(),c=async n=>{try{await p(se(n)),await p(A(a))}catch(s){console.log(s),T.error("Some error occured, try again",s)}};return e.jsxs(F,{children:[e.jsxs(Q,{children:[e.jsx(V,{children:"Exercises"}),e.jsx(J,{children:e.jsxs(q,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(K,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:i.colorOrange},children:e.jsx("use",{href:l+"#icon-arrow"})})]})})]}),d&&d.length>0&&!x?h?e.jsx(E,{children:e.jsx(N,{children:d.map(n=>e.jsxs(U,{children:[e.jsx(f,{children:"Body Part"}),e.jsx(f,{children:r(n.exerciseId.bodyPart)}),e.jsx(f,{children:"Equipment"}),e.jsx(f,{children:r(n.exerciseId.equipment)}),e.jsx(f,{children:"Name"}),e.jsx(f,{children:r(n.exerciseId.name)}),e.jsxs(Z,{children:[e.jsxs(ee,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:"Target"}),e.jsx(f,{children:r(n.exerciseId.target)})]}),e.jsxs(ie,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:"Burned Calories"}),e.jsx(f,{children:n.exerciseId.burnedCalories})]}),e.jsxs(te,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:"Time"}),e.jsx(f,{children:n.time})]}),e.jsxs(ne,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:""}),e.jsx(f,{children:e.jsx(B,{type:"button",onClick:()=>c(n._id),children:e.jsx(L,{children:e.jsx("use",{href:l+"#icon-trash-03"})})})})]})]})]},n._id))})}):e.jsxs(E,{children:[e.jsxs(ze,{children:[e.jsx(j,{children:"Body Part"}),e.jsx(j,{children:"Equipment"}),e.jsx(j,{children:"Name"}),e.jsx(j,{children:"Target"}),e.jsx(j,{children:"Burned Calories"}),e.jsx(j,{children:"Time"}),e.jsx(j,{children:""})]}),e.jsx(N,{children:d.map(n=>e.jsxs(U,{children:[e.jsx(u,{children:r(n.exerciseId.bodyPart)}),e.jsx(u,{children:r(n.exerciseId.equipment)}),e.jsx(u,{children:r(n.exerciseId.name)}),e.jsx(u,{children:r(n.exerciseId.target)}),e.jsx(u,{children:n.exerciseId.burnedCalories}),e.jsx(u,{children:n.time}),e.jsx(u,{children:e.jsx(B,{type:"button",onClick:()=>c(n._id),children:e.jsx(L,{children:e.jsx("use",{href:l+"#icon-trash-03"})})})})]},n._id))})]}):e.jsx(X,{children:"Not found exercises"})]})},Se=t.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,ke=t.ul`
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
`,I=t.li`
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
`,z=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,C=t.h2`
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`,S=t.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,Te=t.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Oe=t.div`
  width: 24px;
  height: 24px;
  background-color: ${i.colorBeige};
  border-radius: 50%;
`,k=t.svg`
  width: 20px;
  height: 20px;
  fill: ${i.colorOrange1};
`,We=t.svg`
  width: 24px;
  height: 24px;
`,Ee=t.p`
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
`,Ne=({userDiaryInformation:d})=>{const{burnedCalories:a,caloriesIntake:h,consumedCalories:x,remainingCalories:p,remainingSports:r}=d,[c,n]=b.useState(!1),s=v(M);return b.useEffect(()=>{p<0&&n(!0)},[p]),e.jsxs(Se,{children:[e.jsxs(ke,{children:[e.jsxs(I,{children:[e.jsxs(z,{children:[e.jsx(k,{children:e.jsx("use",{href:l+"#icon-fluent_food-24-filled"})}),e.jsx(C,{children:"Daily calory intake"})]}),e.jsx(S,{children:h&&!s?h:0})]}),e.jsxs(I,{children:[e.jsxs(z,{children:[e.jsx(k,{children:e.jsx("use",{href:l+"#icon-dumbbell"})}),e.jsx(C,{children:"Daily norm of sports"})]}),e.jsx(S,{children:"110 min"})]}),e.jsxs(I,{children:[e.jsxs(z,{children:[e.jsx(k,{children:e.jsx("use",{href:l+"#icon-fluent_food-apple-20-filled"})}),e.jsx(C,{children:"Calories consumed"})]}),e.jsx(S,{children:x&&!s?x:0})]}),e.jsxs(I,{children:[e.jsxs(z,{children:[e.jsx(k,{children:e.jsx("use",{href:l+"#icon-calories-1"})}),e.jsx(C,{children:"Calories burned"})]}),e.jsx(S,{children:a&&!s?a:0})]}),e.jsxs(I,{className:c?"redBg":"",children:[e.jsxs(z,{children:[e.jsx(k,{children:e.jsx("use",{href:l+"#icon-bubble"})}),e.jsx(C,{children:"The rest of the calories"})]}),e.jsx(S,{children:p&&!s?p:0})]}),e.jsxs(I,{className:c?"greenBg":"",children:[e.jsxs(z,{children:[e.jsx(k,{children:e.jsx("use",{href:l+"#icon-running-figure"})}),e.jsx(C,{children:"The rest of sports"})]}),e.jsxs(S,{children:[r&&!s?r:110," min"]})]})]}),e.jsxs(Te,{children:[e.jsx(Oe,{children:e.jsx(We,{children:e.jsx("use",{href:l+"#icon-running-stick-figure-svgrepo-com-1"})})}),e.jsx(Ee,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},Be=t.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,Le=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,Pe=t.div`
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
`,Ae=t.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Ye=()=>{const d=P(),a=v(xe),h=v(ce),{addProducts:x,addExercises:p}=a,[r,c]=b.useState(new Date),s=v(G).createdAt,w=W(r),o=W(s);return b.useEffect(()=>{(async()=>{try{d(pe()),await d(A(w))}catch(O){T.error("Error fetching data:",O),console.error("Error fetching data:",O)}})()},[d,w,r]),e.jsx(de,{children:h?e.jsx(le,{}):e.jsxs(Be,{children:[e.jsxs(Le,{children:[e.jsx(fe,{title:"Diary"}),e.jsx($e,{currentDate:r,setCurrentDate:c,userDateRegistration:o})]}),e.jsxs(Ae,{children:[e.jsx(Ne,{userDiaryInformation:a}),e.jsxs(Pe,{children:[e.jsx(Ie,{productsArray:x,date:w}),e.jsx(Ce,{exercisesArray:p,date:w})]})]})]})})};export{Ye as default};
