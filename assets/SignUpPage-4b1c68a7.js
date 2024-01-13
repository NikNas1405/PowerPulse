import{s as r,n as f,N as b,r as g,j as e,M as w}from"./index-0ab923c4.js";import{u as y,c as v,a as d}from"./index.esm-fe08c72f.js";import{s,S}from"./StatisticsInfo-b6412f59.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const F=r.div`
  display: flex;
`,C=r.div`
  width: 55%;
  /* margin-right: 178px; */
`,$=r.h2`
  color: #efede8;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  margin-bottom: 16px;
  margin-top: 151px;
`,k=r.p`
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
`,z=r.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,c=r.label`
  position: relative;
  border-radius: 12px;
  border: transparent;
  outline: transparent;
  width: 364px;
`,p=r.input`
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

  /* ${({hasError:n,isValidationCompleted:i,...a})=>f`
    border: 1px solid
      ${n?"#D80027":i?"#3CBF61":"rgba(239, 237, 232, 0.3)"};

    &:hover,
    &:focus {
      ${!i&&`
        border: 1px solid #e6533c;
      `}
    }
  `} */

  ${({haserror:n,isValidationCompleted:i,...a})=>f`
    border: 1px solid
      ${n?"#D80027":i?"#3CBF61":"rgba(239, 237, 232, 0.3)"};

    &:hover,
    &:focus {
      ${!i&&`
        border: 1px solid #e6533c;
      `}
    }
  `}
`,h=r.div`
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
`,t=r.svg`
  width: 16px;
  height: 16px;
`,u=r.svg`
  position: absolute;
  top: 30%;
  right: 5%;
  display: inline-block;
  width: 20px;
  height: 20px;
  fill: #efede8;
`,R=r.button`
  display: inline-flex;
  padding: 16px 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background-color: #e6533c;
  color: #efede8;
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

  &:hover {
    background-color: #ef8964;
  }

  &:focus {
    background-color: #ef8964;
  }
`,I=r.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,P=r.p`
  color: rgba(239, 237, 232, 0.6);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,q=r(b)`
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
`,B=()=>{const[n,i]=g.useState(!1),[a,m]=g.useState(!1),j=l=>!["isValidationCompleted"].includes(l),x=()=>{i(!n),m(!1)},o=y({initialValues:{name:"",email:"",password:""},validationSchema:v().shape({name:d().required("Name is required"),email:d().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Example: test@gmail.com").email("Invalid email").required("Email is required"),password:d().min(6,"Enter a valid Password").required("Password is required")}),onSubmit:l=>{m(!0),alert(JSON.stringify(l,null,2)),console.log(l)}});return e.jsx(w,{shouldForwardProp:j,children:e.jsxs(F,{children:[e.jsxs(C,{children:[e.jsx($,{children:"Sign up"}),e.jsx(k,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsxs(E,{autoComplete:"off",onSubmit:o.handleSubmit,children:[e.jsxs(z,{children:[e.jsxs(c,{children:[e.jsx(p,{id:"name",name:"name",type:"text",placeholder:"Name",onChange:o.handleChange,value:o.values.name,haserror:!a&&o.touched.name&&o.errors.name,isValidationCompleted:!o.errors.name&&o.touched.name}),o.touched.name&&e.jsx(h,{style:{color:o.errors.name?"#D80027":"#3CBF61"},children:o.errors.name?e.jsxs(e.Fragment,{children:[e.jsx(t,{children:e.jsx("use",{href:`${s}#icon-red`})}),`Error name, ${o.errors.name}`]}):e.jsxs(e.Fragment,{children:[e.jsx(t,{children:e.jsx("use",{href:`${s}#icon-green`})}),"Success name"]})})]}),e.jsxs(c,{children:[e.jsx(p,{id:"email",name:"email",type:"email",placeholder:"Email",onChange:o.handleChange,value:o.values.email,haserror:!a&&o.touched.email&&o.errors.email,isValidationCompleted:!o.errors.email&&o.touched.email}),o.touched.email&&e.jsx(h,{style:{color:o.errors.email?"#D80027":"#3CBF61"},children:o.errors.email?e.jsxs(e.Fragment,{children:[e.jsx(t,{children:e.jsx("use",{href:`${s}#icon-red`})}),`Error email. ${o.errors.email}`]}):e.jsxs(e.Fragment,{children:[e.jsx(t,{children:e.jsx("use",{href:`${s}#icon-green`})}),"Success email"]})})]}),e.jsxs(c,{children:[e.jsx(p,{id:"password",name:"password",type:n?"text":"password",placeholder:"Password",onChange:o.handleChange,value:o.values.password,haserror:!a&&o.touched.password&&o.errors.password,isValidationCompleted:!o.errors.password&&o.touched.password}),e.jsx(e.Fragment,{children:n?e.jsx(u,{onClick:x,children:e.jsx("use",{href:`${s}#icon-eye`})}):e.jsx(u,{onClick:x,children:e.jsx("use",{href:`${s}#icon-eye-off`})})}),o.touched.password&&e.jsx(h,{style:{color:o.errors.password?"#D80027":"#3CBF61"},children:o.errors.password?e.jsxs(e.Fragment,{children:[e.jsx(t,{children:e.jsx("use",{href:`${s}#icon-red`})}),`Error password, ${o.errors.password}`]}):e.jsxs(e.Fragment,{children:[e.jsx(t,{children:e.jsx("use",{href:`${s}#icon-green`})}),"Success password"]})})]})]}),e.jsx(R,{type:"Submit",children:"Sign Up"})]}),e.jsxs(I,{children:[e.jsx(P,{children:"Already have an account?"}),e.jsx(q,{to:"/signin",children:"Sing In"})]})]}),e.jsx(S,{})]})})},L=()=>e.jsx(B,{});export{L as default};
