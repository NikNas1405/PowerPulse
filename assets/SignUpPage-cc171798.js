import{s as n,n as p,N as u,r as f,u as $,a as C,j as e,M as F}from"./index-4068d107.js";import{u as v,c as S,a as m}from"./index.esm-3f5fd74c.js";import{g as l,s}from"./sprite-c77c6b8b.js";import{S as z}from"./StatisticsInfo-fa6a76ac.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const k=n.div`
  display: flex;
  position: relative;
`,E=n.div`
  @media screen and (min-width: 1440px) {
    width: 55%;
  }
`,P=n.h2`
  @media screen and (min-width: 320px) {
    color: ${l.colorWhite};
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
`,B=n.p`
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
    width: 496px;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 496px;
  }
`,D=n.form``,R=n.div`
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
`,c=n.label`
  position: relative;
  border-radius: 12px;
  border: transparent;
  outline: transparent;
  width: 364px;
`,h=n.input`
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

    ${({haserror:r,isValidationCompleted:o,...t})=>p`
      border: 1px solid
        ${r?"#D80027":o?"#3CBF61":"rgba(239, 237, 232, 0.3)"};
    `}
  }

  @media screen and (min-width: 375px) {
    width: 335px;
    ${({haserror:r,isValidationCompleted:o,...t})=>p`
      border: 1px solid
        ${r?"#D80027":o?"#3CBF61":"rgba(239, 237, 232, 0.3)"};
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

    ${({haserror:r,isValidationCompleted:o,...t})=>p`
      border: 1px solid
        ${r?"#D80027":o?"#3CBF61":"rgba(239, 237, 232, 0.3)"};

      &:hover,
      &:focus {
        ${!o&&`
        border: 1px solid #e6533c;
      `}
      }
    `}
  }
`,x=n.div`
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
`,d=n.svg`
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
`,w=n.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  fill: ${l.colorWhite};

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
`,W=n.button`
  @media screen and (min-width: 320px) {
    position: sticky;
    display: flex;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 140px;
    border-radius: 12px;
    background-color: ${l.colorOrange};
    color: ${l.colorWhite};
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
      background-color: ${l.colorOrange1};
    }
  }
`,I=n.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,q=n.p`
  color: rgba(239, 237, 232, 0.6);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,T=n(u)`
  color: ${l.colorWhite};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-decoration-line: underline;
`,V=n.div`
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
`,L=()=>{const[r,o]=f.useState(!1),[t,j]=f.useState(!1),b=$(),y=a=>!["isValidationCompleted","haserror"].includes(a),g=()=>{o(!r),j(!1)},i=v({initialValues:{name:"",email:"",password:""},validationSchema:S().shape({name:m().required("Name is required"),email:m().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Example: test@gmail.com").email("Invalid email").required("Email is required"),password:m().min(6,"Enter a valid Password").required("Password is required")}),onSubmit:a=>{console.log(a),b(C({name:a.name,email:a.email,password:a.password}))}});return e.jsx(F,{shouldForwardProp:y,children:e.jsxs(k,{children:[e.jsx(u,{to:"/",children:"PowerPulse"}),e.jsxs(E,{children:[e.jsx(P,{children:"Sign up"}),e.jsx(B,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsxs(D,{autoComplete:"off",onSubmit:i.handleSubmit,children:[e.jsxs(R,{children:[e.jsxs(c,{children:[e.jsx(h,{id:"name",name:"name",type:"text",placeholder:"Name",onChange:i.handleChange,value:i.values.name,haserror:!t&&i.touched.name&&i.errors.name,isValidationCompleted:!i.errors.name&&i.touched.name}),i.touched.name&&e.jsx(x,{style:{color:i.errors.name?"#D80027":"#3CBF61"},children:i.errors.name?e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("use",{href:`${s}#icon-red`})}),`Error name, ${i.errors.name}`]}):e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("use",{href:`${s}#icon-green`})}),"Success name"]})})]}),e.jsxs(c,{children:[e.jsx(h,{id:"email",name:"email",type:"email",placeholder:"Email",onChange:i.handleChange,value:i.values.email,haserror:!t&&i.touched.email&&i.errors.email,isValidationCompleted:!i.errors.email&&i.touched.email}),i.touched.email&&e.jsx(x,{style:{color:i.errors.email?"#D80027":"#3CBF61"},children:i.errors.email?e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("use",{href:`${s}#icon-red`})}),`Error email. ${i.errors.email}`]}):e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("use",{href:`${s}#icon-green`})}),"Success email"]})})]}),e.jsxs(c,{children:[e.jsx(h,{id:"password",name:"password",type:r?"text":"password",placeholder:"Password",onChange:i.handleChange,value:i.values.password,haserror:!t&&i.touched.password&&i.errors.password,isValidationCompleted:!i.errors.password&&i.touched.password}),e.jsx(e.Fragment,{children:r?e.jsx(w,{onClick:g,children:e.jsx("use",{href:`${s}#icon-eye`})}):e.jsx(w,{onClick:g,children:e.jsx("use",{href:`${s}#icon-eye-off`})})}),i.touched.password&&e.jsx(x,{style:{color:i.errors.password?"#D80027":"#3CBF61"},children:i.errors.password?e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("use",{href:`${s}#icon-red`})}),`Error password, ${i.errors.password}`]}):e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("use",{href:`${s}#icon-green`})}),"Success password"]})})]})]}),e.jsx(W,{type:"Submit",children:"Sign Up"})]}),e.jsxs(I,{children:[e.jsx(q,{children:"Already have an account?"}),e.jsx(T,{to:"/signin",children:"Sing In"})]})]}),e.jsx(V,{children:e.jsx(z,{})})]})})},Z=()=>e.jsx(L,{});export{Z as default};
