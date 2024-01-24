import{s as o,g as i,n as p,N as $,r as f,u as y,b as S,c as v,d as c,e as C,j as e,M as F,C as z,a as t}from"./index-227d9ce8.js";import{S as k}from"./StatisticsInfo-ed36c13e.js";import{L as E}from"./Logo-575273e4.js";const I=o.div`
  display: flex;
  position: relative;
`,R=o.div`
  padding: 24px 0;
  @media screen and (min-width: 768px) {
    padding: 32px 0;
  }
  @media screen and (min-width: 1440px) {
    width: 56%;
  }
`,W=o.h2`
  @media screen and (min-width: 320px) {
    color: ${i.colorWhite};
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    margin-top: 90px;
    margin-bottom: 14px;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 44px;
    margin-top: 140px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 151px;
  }
`,P=o.p`
  @media screen and (min-width: 320px) {
    width: 335px;
    color: ${i.colorInput};
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 28px;
    position: sticky;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    width: 496px;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 496px;
  }
`,q=o.form``,L=o.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
  }
`,m=o.label`
  position: relative;
  border-radius: 12px;
  border: transparent;
  outline: transparent;
  width: 364px;
`,h=o.input`
  @media screen and (min-width: 320px) {
    width: 300px;
    color: rgba(239, 237, 232, 0.6);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    background-color: transparent;
    outline: none;
    padding: 14px;
    border-radius: 12px;

    ${({haserror:r,isValidationCompleted:s,...a})=>p`
      border: 1px solid
        ${r?`${i.colorSecondaryRed}`:s?`${i.colorSecondaryGreen}`:`${i.colorInput}`};
    `}
  }

  @media screen and (min-width: 375px) {
    width: 335px;
    ${({haserror:r,isValidationCompleted:s,...a})=>p`
      border: 1px solid
        ${r?`${i.colorSecondaryRed}`:s?`${i.colorSecondaryGreen}`:`${i.colorInput}`};

      &:hover,
      &:focus {
        ${!s&&`
        border: 1px solid ${i.colorOrange};
      `}
      }
    `}
  }

  @media screen and (min-width: 768px) {
    width: 364px;
  }

  @media screen and (min-width: 1440px) {
    padding: 14px;
    border-radius: 12px;
    width: 364px;
    font-size: 16px;
    line-height: 24px;
    transition: border-color 0.3s;

    ${({haserror:r,isValidationCompleted:s,...a})=>p`
      border: 1px solid
        ${r?`${i.colorSecondaryRed}`:s?`${i.colorSecondaryGreen}`:`${i.colorInput}`};

      &:hover,
      &:focus {
        ${!s&&`
        border: 1px solid ${i.colorOrange};
      `}
      }
    `}
  }
`,x=o.div`
  display: flex;
  gap: 4px;
  position: absolute;
  bottom: -35%;
  left: 0%;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.12px;
`,d=o.svg`
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
  width: 16px;
  height: 16px;
`,u=o.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  fill: ${i.colorWhite};
  cursor: pointer;

  @media screen and (min-width: 320px) {
    top: 30%;
    right: 10%;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    right: 5%;
  }

  @media screen and (min-width: 1440px) {
  }
`,T=o.button`
  @media screen and (min-width: 320px) {
    position: sticky;
    display: flex;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 140px;
    border-radius: 12px;
    background-color: ${i.colorOrange};
    color: ${i.colorWhite};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    outline: none;
    border: transparent;
    margin-top: 28px;
    margin-bottom: 12px;

    &:hover,
    &:focus {
      background-color: ${i.colorOrange1};
    }
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    margin-top: 64px;
    width: 190px;
    padding: 16px 60px;
    font-size: 20px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;

    &:hover,
    &:focus {
      background-color: ${i.colorOrange1};
    }
  }
`,B=o.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,D=o.p`
  color: rgba(239, 237, 232, 0.6);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,O=o($)`
  color: ${i.colorWhite};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-decoration-line: underline;
`,V=o.div`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    position: absolute;
    z-index: -1;
    top: 45.9%;
    left: 17.1%;
    margin: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    margin: 0;
  }
  @media screen and (min-width: 1440px) {
    width: 45%;
  }
`,N=()=>{const[r,s]=f.useState(!1),[a,w]=f.useState(!1),j=y(),b=l=>!["isValidationCompleted","haserror"].includes(l),g=()=>{s(!r),w(!1)},n=S({initialValues:{name:"",email:"",password:""},validationSchema:v().shape({name:c().required("Name is required"),email:c().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Example: test@gmail.com").email("Invalid email").required("Email is required"),password:c().min(6,"Enter a valid Password").required("Password is required")}),onSubmit:l=>{j(C({name:l.name,email:l.email,password:l.password}))}});return e.jsx(F,{shouldForwardProp:b,children:e.jsx(z,{children:e.jsxs(I,{children:[e.jsxs(R,{children:[e.jsx(E,{}),e.jsx(W,{children:"Sign up"}),e.jsx(P,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsxs(q,{autoComplete:"off",onSubmit:n.handleSubmit,children:[e.jsxs(L,{children:[e.jsxs(m,{children:[e.jsx(h,{id:"name",name:"name",type:"text",placeholder:"Name",onChange:n.handleChange,value:n.values.name,haserror:!a&&n.touched.name&&n.errors.name,isValidationCompleted:!n.errors.name&&n.touched.name}),n.touched.name&&e.jsx(x,{style:{color:n.errors.name?"#D80027":"#3CBF61"},children:n.errors.name?e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("use",{href:`${t}#icon-red`})}),`Error name, ${n.errors.name}`]}):e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("use",{href:`${t}#icon-green`})}),"Success name"]})})]}),e.jsxs(m,{children:[e.jsx(h,{id:"email",name:"email",type:"email",placeholder:"Email",onChange:n.handleChange,value:n.values.email,haserror:!a&&n.touched.email&&n.errors.email,isValidationCompleted:!n.errors.email&&n.touched.email}),n.touched.email&&e.jsx(x,{style:{color:n.errors.email?"#D80027":"#3CBF61"},children:n.errors.email?e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("use",{href:`${t}#icon-red`})}),`Error email. ${n.errors.email}`]}):e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("use",{href:`${t}#icon-green`})}),"Success email"]})})]}),e.jsxs(m,{children:[e.jsx(h,{id:"password",name:"password",type:r?"text":"password",placeholder:"Password",onChange:n.handleChange,value:n.values.password,haserror:!a&&n.touched.password&&n.errors.password,isValidationCompleted:!n.errors.password&&n.touched.password}),e.jsx(e.Fragment,{children:r?e.jsx(u,{onClick:g,children:e.jsx("use",{href:`${t}#icon-eye`})}):e.jsx(u,{onClick:g,children:e.jsx("use",{href:`${t}#icon-eye-off`})})}),n.touched.password&&e.jsx(x,{style:{color:n.errors.password?"#D80027":"#3CBF61"},children:n.errors.password?e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("use",{href:`${t}#icon-red`})}),`Error password, ${n.errors.password}`]}):e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("use",{href:`${t}#icon-green`})}),"Success password"]})})]})]}),e.jsx(T,{type:"Submit",children:"Sign Up"})]}),e.jsxs(B,{children:[e.jsx(D,{children:"Already have an account?"}),e.jsx(O,{to:"/signin",children:"Sing In"})]})]}),e.jsx(V,{children:e.jsx(k,{})})]})})})},M=()=>e.jsx(N,{});export{M as default};
