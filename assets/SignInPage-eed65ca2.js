import{s as n,g as o,n as p,N as y,r as m,u as $,l as S,j as e,M as v,C,a as s}from"./index-eac704ce.js";import{u as F,c as z,a as x}from"./index.esm-241a3b9e.js";import{S as I}from"./StatisticsInfo-40b19fac.js";import{L as k}from"./Logo-a9106ed5.js";import"./hoist-non-react-statics.cjs-a7150307.js";const R=n.div`
  display: flex;
  position: relative;

  @media screen and (min-width: 768px) {
  }
`,E=n.div`
  padding: 24px 0;

  @media screen and (min-width: 768px) {
    padding: 32px 0;
  }
  @media screen and (min-width: 1440px) {
    width: 48%;
    margin-right: 178px;
  }
`,W=n.h2`
  @media screen and (min-width: 320px) {
    color: ${o.colorWhite};
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
`,P=n.p`
  @media screen and (min-width: 320px) {
    width: 335px;
    color: ${o.colorInput};
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
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 32px;
    width: 496px;
  }

  @media screen and (min-width: 1440px) {
    width: 496px;
  }
`,L=n.form``,D=n.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
  }
`,h=n.label`
  position: relative;
  border-radius: 12px;
  border: transparent;
  outline: transparent;
  width: 364px;
`,g=n.input`
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

    ${({haserror:r,isValidationCompleted:t,...d})=>p`
      border: 1px solid
        ${r?`${o.colorSecondaryRed}`:t?`${o.colorSecondaryGreen}`:`${o.colorInput}`};
    `}
  }

  @media screen and (min-width: 375px) {
    width: 335px;
    ${({haserror:r,isValidationCompleted:t,...d})=>p`
      border: 1px solid
        ${r?`${o.colorSecondaryRed}`:t?`${o.colorSecondaryGreen}`:`${o.colorInput}`};
    `}
  }

  @media screen and (min-width: 768px) {
    width: 364px;
  }

  @media screen and (min-width: 1440px) {
    padding: 14px;
    font-size: 16px;
    line-height: 24px;
    transition: border-color 0.3s;

    ${({haserror:r,isValidationCompleted:t})=>p`
      border: 1px solid
        ${r?`${o.colorSecondaryRed}`:t?`${o.colorSecondaryGreen}`:`${o.colorInput}`};

      &:hover,
      &:focus {
        ${!t&&`
        border: 1px solid ${o.colorOrange};
      `}
      }
    `}
  }
`,f=n.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  fill: ${o.colorWhite};

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
`,w=n.div`
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
`,l=n.svg`
  width: 16px;
  height: 16px;
`,V=n.button`
  @media screen and (min-width: 320px) {
    position: sticky;
    display: flex;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 140px;
    border-radius: 12px;
    background-color: ${o.colorOrange};
    color: ${o.colorWhite};
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
    width: 190px;
    padding: 16px 60px;
    font-size: 20px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;

    &:hover,
    &:focus {
      background-color: ${o.colorOrange1};
    }
  }
`,q=n.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,B=n.p`
  color: rgba(239, 237, 232, 0.6);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,T=n(y)`
  color: ${o.colorWhite};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-decoration-line: underline;
`,G=n.div`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    position: absolute;
    z-index: -1;
    top: 55%;
    left: 17.1%;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
  }
  @media screen and (min-width: 1440px) {
    width: 52%;
  }
`,O=()=>{const[r,t]=m.useState(!1),[d,u]=m.useState(!1),b=$(),j=a=>!["isValidationCompleted"].includes(a),c=()=>{t(!r),u(!1)},i=F({initialValues:{email:"",password:""},validationSchema:z().shape({email:x().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Example: test@gmail.com").email("Invalid email").required("Email is required"),password:x().min(6,"at least 6 characters").required("Password is required")}),onSubmit:a=>{console.log(a),b(S({email:a.email,password:a.password})),i.resetForm()}});return e.jsx(v,{shouldForwardProp:j,children:e.jsx(C,{children:e.jsxs(R,{children:[e.jsxs(E,{children:[e.jsx(k,{}),e.jsx(W,{children:"Sign in"}),e.jsx(P,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsxs(L,{autoComplete:"off",onSubmit:i.handleSubmit,children:[e.jsxs(D,{children:[e.jsxs(h,{children:[e.jsx(g,{id:"email",name:"email",type:"email",placeholder:"Email",onChange:i.handleChange,value:i.values.email,haserror:!d&&i.touched.email&&i.errors.email,isValidationCompleted:!i.errors.email&&i.touched.email}),i.touched.email&&e.jsx(w,{style:{color:i.errors.email?"#D80027":"#3CBF61"},children:i.errors.email?e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx("use",{href:`${s}#icon-red`})}),`Error email. ${i.errors.email}`]}):e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx("use",{href:`${s}#icon-green`})}),"Success email"]})})]}),e.jsxs(h,{children:[e.jsx(g,{id:"password",name:"password",type:r?"text":"password",placeholder:"Password",onChange:i.handleChange,value:i.values.password,haserror:!d&&i.touched.password&&i.errors.password,isValidationCompleted:!i.errors.password&&i.touched.password}),e.jsx(e.Fragment,{children:r?e.jsx(f,{onClick:c,children:e.jsx("use",{href:`${s}#icon-eye`})}):e.jsx(f,{onClick:c,children:e.jsx("use",{href:`${s}#icon-eye-off`})})}),i.touched.password&&e.jsx(w,{style:{color:i.errors.password?"#D80027":"#3CBF61"},children:i.errors.password?e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx("use",{href:`${s}#icon-red`})}),`Error password, ${i.errors.password}`]}):e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx("use",{href:`${s}#icon-green`})}),"Success password"]})})]})]}),e.jsx(V,{type:"Submit",children:"Sign In"})]}),e.jsxs(q,{children:[e.jsx(B,{children:"Don’t have an account?"}),e.jsx(T,{to:"/signup",children:"Sing Up"})]})]}),e.jsx(G,{children:e.jsx(I,{})})]})})})},_=()=>e.jsx(O,{});export{_ as default};
