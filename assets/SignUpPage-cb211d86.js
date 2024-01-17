import{s as o,g as n,n as p,N as y,r as f,u as $,b as S,j as e,M as v,a}from"./index-51b0d73f.js";import{u as C,c as F,a as m}from"./index.esm-18f40bfe.js";import{S as z}from"./StatisticsInfo-e43fa47a.js";import"./hoist-non-react-statics.cjs-a6b57d0f.js";import"./bgMobile@2x-26480d49.js";const k=o.div`
  display: flex;
  position: relative;
`,E=o.div`
  @media screen and (min-width: 1440px) {
    width: 55%;
    margin-right: 178px;
  }
`,I=o.h2`
  @media screen and (min-width: 320px) {
    color: ${n.colorWhite};
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    /* margin-top: 90px; */
    margin-top: 127px;
    margin-bottom: 14px;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 44px;
    /* margin-top: 140px; */
    margin-top: 189px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    /* margin-top: 151px; */
    margin-top: 200px;
  }
`,R=o.p`
  @media screen and (min-width: 320px) {
    width: 335px;
    color: ${n.colorInput};
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
`,W=o.form``,P=o.div`
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
`,c=o.label`
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

    ${({haserror:r,isValidationCompleted:t,...s})=>p`
      border: 1px solid
        ${r?`${n.colorSecondaryRed}`:t?`${n.colorSecondaryGreen}`:`${n.colorInput}`};
    `}
  }

  @media screen and (min-width: 375px) {
    width: 335px;
    ${({haserror:r,isValidationCompleted:t,...s})=>p`
      border: 1px solid
        ${r?`${n.colorSecondaryRed}`:t?`${n.colorSecondaryGreen}`:`${n.colorInput}`};
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

    ${({haserror:r,isValidationCompleted:t,...s})=>p`
      border: 1px solid
        ${r?`${n.colorSecondaryRed}`:t?`${n.colorSecondaryGreen}`:`${n.colorInput}`};

      &:hover,
      &:focus {
        ${!t&&`
        border: 1px solid ${n.colorOrange};
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
`,l=o.svg`
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
  fill: ${n.colorWhite};

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
`,q=o.button`
  @media screen and (min-width: 320px) {
    position: sticky;
    display: flex;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 140px;
    border-radius: 12px;
    background-color: ${n.colorOrange};
    color: ${n.colorWhite};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    outline: none;
    border: transparent;
    margin-top: 28px;
    margin-bottom: 12px;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 24px;
    width: 192px;

    &:hover,
    &:focus {
      background-color: ${n.colorOrange1};
    }
  }
`,T=o.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,V=o.p`
  color: rgba(239, 237, 232, 0.6);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,B=o(y)`
  color: ${n.colorWhite};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-decoration-line: underline;
`,D=o.div`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    position: absolute;
    z-index: -1;
    top: 40%;
    left: 20%;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    top: 15%;
    left: 5%;
  }
`,L=()=>{const[r,t]=f.useState(!1),[s,w]=f.useState(!1),j=$(),b=d=>!["isValidationCompleted","haserror"].includes(d),g=()=>{t(!r),w(!1)},i=C({initialValues:{name:"",email:"",password:""},validationSchema:F().shape({name:m().required("Name is required"),email:m().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Example: test@gmail.com").email("Invalid email").required("Email is required"),password:m().min(6,"Enter a valid Password").required("Password is required")}),onSubmit:d=>{console.log(d),j(S({name:d.name,email:d.email,password:d.password}))}});return e.jsx(v,{shouldForwardProp:b,children:e.jsxs(k,{children:[e.jsxs(E,{children:[e.jsx(I,{children:"Sign up"}),e.jsx(R,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsxs(W,{autoComplete:"off",onSubmit:i.handleSubmit,children:[e.jsxs(P,{children:[e.jsxs(c,{children:[e.jsx(h,{id:"name",name:"name",type:"text",placeholder:"Name",onChange:i.handleChange,value:i.values.name,haserror:!s&&i.touched.name&&i.errors.name,isValidationCompleted:!i.errors.name&&i.touched.name}),i.touched.name&&e.jsx(x,{style:{color:i.errors.name?"#D80027":"#3CBF61"},children:i.errors.name?e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx("use",{href:`${a}#icon-red`})}),`Error name, ${i.errors.name}`]}):e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx("use",{href:`${a}#icon-green`})}),"Success name"]})})]}),e.jsxs(c,{children:[e.jsx(h,{id:"email",name:"email",type:"email",placeholder:"Email",onChange:i.handleChange,value:i.values.email,haserror:!s&&i.touched.email&&i.errors.email,isValidationCompleted:!i.errors.email&&i.touched.email}),i.touched.email&&e.jsx(x,{style:{color:i.errors.email?"#D80027":"#3CBF61"},children:i.errors.email?e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx("use",{href:`${a}#icon-red`})}),`Error email. ${i.errors.email}`]}):e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx("use",{href:`${a}#icon-green`})}),"Success email"]})})]}),e.jsxs(c,{children:[e.jsx(h,{id:"password",name:"password",type:r?"text":"password",placeholder:"Password",onChange:i.handleChange,value:i.values.password,haserror:!s&&i.touched.password&&i.errors.password,isValidationCompleted:!i.errors.password&&i.touched.password}),e.jsx(e.Fragment,{children:r?e.jsx(u,{onClick:g,children:e.jsx("use",{href:`${a}#icon-eye`})}):e.jsx(u,{onClick:g,children:e.jsx("use",{href:`${a}#icon-eye-off`})})}),i.touched.password&&e.jsx(x,{style:{color:i.errors.password?"#D80027":"#3CBF61"},children:i.errors.password?e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx("use",{href:`${a}#icon-red`})}),`Error password, ${i.errors.password}`]}):e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx("use",{href:`${a}#icon-green`})}),"Success password"]})})]})]}),e.jsx(q,{type:"Submit",children:"Sign Up"})]}),e.jsxs(T,{children:[e.jsx(V,{children:"Already have an account?"}),e.jsx(B,{to:"/signin",children:"Sing In"})]})]}),e.jsx(D,{children:e.jsx(z,{})})]})})},M=()=>e.jsx(L,{});export{M as default};
