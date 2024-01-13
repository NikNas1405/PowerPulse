import{s as o,n as p,N as u,r as m,u as $,l as S,j as e,M as F}from"./index-fdccee64.js";import{u as v,c as C,a as x}from"./index.esm-60af4913.js";import{g as r,s,S as z}from"./StatisticsInfo-7e3268c1.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const k=o.div`
  display: flex;
  position: relative;
`,I=o.div`
  @media screen and (min-width: 1440px) {
    width: 55%;
  }
`,E=o.h2`
  @media screen and (min-width: 320px) {
    color: ${r.colorWhite};
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
    color: rgba(239, 237, 232, 0.3);
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
`,R=o.form``,W=o.div`
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
`,h=o.label`
  position: relative;
  border-radius: 12px;
  border: transparent;
  outline: transparent;
  width: 364px;
`,g=o.input`
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

    ${({haserror:n,isValidationCompleted:t,...d})=>p`
      border: 1px solid
        ${n?"#D80027":t?"#3CBF61":"rgba(239, 237, 232, 0.3)"};
    `}
  }

  @media screen and (min-width: 375px) {
    width: 335px;
    ${({haserror:n,isValidationCompleted:t,...d})=>p`
      border: 1px solid
        ${n?"#D80027":t?"#3CBF61":"rgba(239, 237, 232, 0.3)"};
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

    ${({haserror:n,isValidationCompleted:t})=>p`
      border: 1px solid
        ${n?`${r.colorSecondaryRed}`:t?`${r.colorSecondaryGreen}`:"rgba(239, 237, 232, 0.3)"};

      &:hover,
      &:focus {
        ${!t&&`
        border: 1px solid ${r.colorOrange};
      `}
      }
    `}
  }
`,f=o.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  fill: ${r.colorWhite};

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
`,w=o.div`
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
  width: 16px;
  height: 16px;
`,D=o.button`
  @media screen and (min-width: 320px) {
    position: sticky;
    display: flex;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 140px;
    border-radius: 12px;
    background-color: ${r.colorOrange};
    color: ${r.colorWhite};
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
    display: inline-flex;
    padding: 16px 60px;
    font-size: 20px;
    line-height: 24px;
    width: 192px;

    &:hover,
    &:focus {
      background-color: ${r.colorOrange1};
    }
  }
`,B=o.div`
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
`,q=o(u)`
  color: ${r.colorWhite};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-decoration-line: underline;
`,L=o.div`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 20%;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    top: 15%;
    left: 5%;
  }
`,T=()=>{const[n,t]=m.useState(!1),[d,b]=m.useState(!1),j=$(),y=a=>!["isValidationCompleted"].includes(a),c=()=>{t(!n),b(!1)},i=v({initialValues:{email:"",password:""},validationSchema:C().shape({email:x().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Example: test@gmail.com").email("Invalid email").required("Email is required"),password:x().min(6,"at least 6 characters").required("Password is required")}),onSubmit:a=>{console.log(a),j(S({email:a.email,password:a.password})),i.resetForm()}});return e.jsx(F,{shouldForwardProp:y,children:e.jsxs(k,{children:[e.jsx(u,{to:"/",children:"PowerPulse"}),e.jsxs(I,{children:[e.jsx(E,{children:"Sign in"}),e.jsx(P,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsxs(R,{autoComplete:"off",onSubmit:i.handleSubmit,children:[e.jsxs(W,{children:[e.jsxs(h,{children:[e.jsx(g,{id:"email",name:"email",type:"email",placeholder:"Email",onChange:i.handleChange,value:i.values.email,haserror:!d&&i.touched.email&&i.errors.email,isValidationCompleted:!i.errors.email&&i.touched.email}),i.touched.email&&e.jsx(w,{style:{color:i.errors.email?"#D80027":"#3CBF61"},children:i.errors.email?e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx("use",{href:`${s}#icon-red`})}),`Error email. ${i.errors.email}`]}):e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx("use",{href:`${s}#icon-green`})}),"Success email"]})})]}),e.jsxs(h,{children:[e.jsx(g,{id:"password",name:"password",type:n?"text":"password",placeholder:"Password",onChange:i.handleChange,value:i.values.password,haserror:!d&&i.touched.password&&i.errors.password,isValidationCompleted:!i.errors.password&&i.touched.password}),e.jsx(e.Fragment,{children:n?e.jsx(f,{onClick:c,children:e.jsx("use",{href:`${s}#icon-eye`})}):e.jsx(f,{onClick:c,children:e.jsx("use",{href:`${s}#icon-eye-off`})})}),i.touched.password&&e.jsx(w,{style:{color:i.errors.password?"#D80027":"#3CBF61"},children:i.errors.password?e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx("use",{href:`${s}#icon-red`})}),`Error password, ${i.errors.password}`]}):e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx("use",{href:`${s}#icon-green`})}),"Success password"]})})]})]}),e.jsx(D,{type:"Submit",children:"Sign In"})]}),e.jsxs(B,{children:[e.jsx(V,{children:"Don’t have an account?"}),e.jsx(q,{to:"/signup",children:"Sing Up"})]})]}),e.jsx(L,{children:e.jsx(z,{})})]})})},U=()=>e.jsx(T,{});export{U as default};
