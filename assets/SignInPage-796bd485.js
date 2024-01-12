import{s as r,n as j,N as w,r as p,j as e,M as y}from"./index-68270a76.js";import{u as S,c as $,a as h}from"./index.esm-2bacf48d.js";import{g as t,s,S as v}from"./StatisticsInfo-3c4f458a.js";const F=r.div`
  display: flex;
`,C=r.div`
  width: 55%;
  /* margin-right: 178px; */
`,k=r.h2`
  /* color: #efede8; */
  color: ${t.colorWhite};
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  margin-bottom: 16px;
  margin-top: 151px;
`,z=r.p`
  color: rgba(239, 237, 232, 0.3);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 32px;
  width: 496px;
`,E=r.form`
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: 20px; */
`,I=r.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,x=r.label`
  position: relative;
  border-radius: 12px;
  border: transparent;
  outline: transparent;
  width: 364px;
`,m=r.input`
  /* border: 1px solid rgba(239, 237, 232, 0.3); */
  color: rgba(239, 237, 232, 0.6);
  padding: 14px;
  border-radius: 12px;
  width: 364px;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  background-color: transparent;
  outline: none;
  transition: border-color 0.3s;

  ${({haserror:i,isValidationCompleted:n})=>j`
    border: 1px solid
      ${i?`${t.colorSecondaryRed}`:n?`${t.colorSecondaryGreen}`:"rgba(239, 237, 232, 0.3)"};

    &:hover,
    &:focus {
      ${!n&&`
        border: 1px solid ${t.colorOrange};
      `}
    }
  `}
`,f=r.svg`
  position: absolute;
  top: 30%;
  right: 5%;
  display: inline-block;
  width: 20px;
  height: 20px;
  fill: ${t.colorWhite};
`,g=r.div`
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
`,l=r.svg`
  width: 16px;
  height: 16px;
`,R=r.button`
  display: inline-flex;
  padding: 16px 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background-color: ${t.colorOrange};
  color: ${t.colorWhite};
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  width: 192px;
  margin-top: 64px;
  outline: none;
  border: transparent;
  margin-bottom: 12px;

  &:hover,
  &:focus {
    background-color: ${t.colorOrange1};
  }
`,P=r.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,W=r.p`
  color: rgba(239, 237, 232, 0.6);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,V=r(w)`
  color: #efede8;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-decoration-line: underline;
`,q=()=>{const[i,n]=p.useState(!1),[d,u]=p.useState(!1),b=a=>!["isValidationCompleted"].includes(a),c=()=>{n(!i),u(!1)},o=S({initialValues:{email:"",password:""},validationSchema:$().shape({email:h().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Example: test@gmail.com").email("Invalid email").required("Email is required"),password:h().min(6,"at least 6 characters").required("Password is required")}),onSubmit:a=>{alert(JSON.stringify(a,null,2)),console.log(a),o.resetForm()}});return e.jsx(y,{shouldForwardProp:b,children:e.jsxs(F,{children:[e.jsxs(C,{children:[e.jsx(k,{children:"Sign in"}),e.jsx(z,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsxs(E,{autoComplete:"off",onSubmit:o.handleSubmit,children:[e.jsxs(I,{children:[e.jsxs(x,{children:[e.jsx(m,{id:"email",name:"email",type:"email",placeholder:"Email",onChange:o.handleChange,value:o.values.email,haserror:!d&&o.touched.email&&o.errors.email,isValidationCompleted:!o.errors.email&&o.touched.email}),o.touched.email&&e.jsx(g,{style:{color:o.errors.email?"#D80027":"#3CBF61"},children:o.errors.email?e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx("use",{href:`${s}#icon-red`})}),`Error email. ${o.errors.email}`]}):e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx("use",{href:`${s}#icon-green`})}),"Success email"]})})]}),e.jsxs(x,{children:[e.jsx(m,{id:"password",name:"password",type:i?"text":"password",placeholder:"Password",onChange:o.handleChange,value:o.values.password,haserror:!d&&o.touched.password&&o.errors.password,isValidationCompleted:!o.errors.password&&o.touched.password}),e.jsx(e.Fragment,{children:i?e.jsx(f,{onClick:c,children:e.jsx("use",{href:`${s}#icon-eye`})}):e.jsx(f,{onClick:c,children:e.jsx("use",{href:`${s}#icon-eye-off`})})}),o.touched.password&&e.jsx(g,{style:{color:o.errors.password?"#D80027":"#3CBF61"},children:o.errors.password?e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx("use",{href:`${s}#icon-red`})}),`Error password, ${o.errors.password}`]}):e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx("use",{href:`${s}#icon-green`})}),"Success password"]})})]})]}),e.jsx(R,{type:"Submit",children:"Sign In"})]}),e.jsxs(P,{children:[e.jsx(W,{children:"Don’t have an account?"}),e.jsx(V,{to:"/signup",children:"Sing Up"})]})]}),e.jsx(v,{})]})})};r.h1`

`;const T=()=>e.jsx(q,{});export{T as default};
