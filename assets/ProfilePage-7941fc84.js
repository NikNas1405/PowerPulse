var E=Object.defineProperty;var P=(n,t,r)=>t in n?E(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r;var w=(n,t,r)=>(P(n,typeof t!="symbol"?t+"":t,r),r);import{s as o,g as a,j as e,a as j,L as M,c as m,d as v,Q as h,n as x,u as N,r as f}from"./index-51b0d73f.js";import{e as H}from"./react-datepicker-c218bca7.js";import{F as V,E as J,c as _,a as $,b as p,d as Q,e as X}from"./index.esm-18f40bfe.js";import"./warning-2987de73.js";import"./hoist-non-react-statics.cjs-a6b57d0f.js";const Y=o.div`
  margin-top: 40px;
  margin-bottom: 78px;

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 78px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
  }
`,K=o.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 834px) {
    width: 219px;
  }
`,Z=o.img`
  border-radius: 50%;
  background-color: rgba(48, 48, 48, 0.3);
  border: 1px solid #e6533c;
  width: 90px;
  height: 90px;
  object-fit: cover;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 31px;
`,ee=o.div`
  display: flex;
  align-items: center;
  align-content: center;
`,ie=o.input`
  display: none;
`,te=o.div`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 8px;
`,ne=o.h2`
  color: #efede8;

  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`,ae=o.p`
  color: rgba(239, 237, 232, 0.5);

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,re=o.div`
  display: flex;
  gap: 14px;
  margin: 0 auto;
`,R=o.div`
  @media screen and (min-width: 320px) {
    width: 157px;
    height: 96px;
    border-radius: 12px;
    background-color: #e6533c;
    padding: 14px 18px;
  }

  @media screen and (min-width: 375px) {
    width: 157px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 209px;
    height: 108px;
    /* flex-shrink: 0; */
    /* padding: 14px 28px 14px 38px; */
    /* margin: 0 auto; */
  }

  @media screen and (min-width: 1440px) {
    top: 65%;
    right: 5%;
    width: 214px;
    height: 108px;
    margin-top: 0;
    margin-left: 0;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
`,S=o.svg`
  @media screen and (min-width: 320px) {
    width: 12px;
    height: 12px;
    fill: ${a.colorWhite};
  }

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,k=o.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${a.colorBeige};
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,g=o.div`
  display: flex;
  align-items: baseline;
  gap: 11px;
`,q=o.p`
  color: ${a.colorWhite};
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -1px;
  text-transform: uppercase;

  @media screen and (min-width: 375px) {
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 50px;
  }

  @media screen and (min-width: 1440px) {
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
  }
`,C=o.span`
  color: rgba(239, 237, 232, 0.65);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    color: rgba(239, 237, 232, 0.8);
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`,oe=o.p`
  margin: 0 auto;
  margin-top: 40px;
  color: rgba(239, 237, 232, 0.3);

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;o.div`
  margin-right: 96px;

  @media screen and (min-width: 768px) {
    margin-right: 410px;
  }
`;const de=({profile:n})=>e.jsxs(Y,{children:[e.jsxs(K,{children:[e.jsx(Z,{src:n.avatarURL,alt:"User Avatar"}),e.jsx(ee,{children:e.jsx(ie,{type:"file",accept:"image/*"})})]}),e.jsxs(te,{children:[e.jsx(ne,{children:n.name}),e.jsx(ae,{children:"User"})]}),e.jsxs(re,{children:[e.jsxs(R,{children:[e.jsxs(g,{children:[e.jsx(k,{children:e.jsx(S,{children:e.jsx("use",{href:`${j}#icon-fluent_food-24-filled`})})}),e.jsx(C,{children:" Daily calorie intake"})]}),e.jsx(g,{children:e.jsx(q,{children:"0"})})]}),e.jsxs(R,{children:[e.jsxs(g,{children:[e.jsx(k,{children:e.jsx(S,{children:e.jsx("use",{href:`${j}#icon-dumbbell`})})}),e.jsx(C,{children:" Daily physical activity"})]}),e.jsxs(g,{children:[e.jsx(q,{children:"0"}),e.jsx(C,{children:"min"})]})]})]}),e.jsx(oe,{children:e.jsxs(g,{children:[e.jsx(k,{children:e.jsx(S,{children:e.jsx("use",{href:`${j}#exclamation-mark`})})}),"We understand that each individual is unique, so the",e.jsx("br",{})," entire approach to diet is relative and tailored to your",e.jsx("br",{})," unique body and goals."]})}),e.jsx(M,{})]});m.defaults.baseURL="https://powerpulserver.onrender.com/api";const T=n=>{m.defaults.headers.common.Authorization=`Bearer ${n}`},le=v("getCurrentUser",async(n,t)=>{try{const s=t.getState().auth.token;return s===null?(h.info("Unable to get user"),t.rejectWithValue("Token not available")):(T(s),(await m.get("/auth/current")).data.user)}catch(r){return h.error(r.message),t.rejectWithValue(r.message)}}),se=v("updateUser",async(n,t)=>{try{const s=t.getState().auth.token;return s===null?(h.info("Unable to get user"),t.rejectWithValue("Token not available")):(T(s),(await m.put("/auth/params",n)).data.user)}catch(r){return h.error(r.message),t.rejectWithValue(r.message)}});v("auth/avatar",async(n,t)=>{try{const r=new FormData;r.append("avatar",n);const s=await m.patch("/*****",r,{headers:{"content-type":"multipart/form-data"}});return h.success("Avatar updated"),s.data}catch(r){return h.error(r.message),t.rejectWithValue(r.message)}});v("auth/addUserData",async(n,t)=>{try{const r=await m.patch("/****",n);return h.success("Your profile updated"),r.data}catch(r){return h.error(r.message),t.rejectWithValue(r.message)}});const ce=o.div`
  display: flex;
`,D=o.label`
  position: relative;
  border-radius: 12px;
  border: transparent;
  outline: transparent;
  /* width: 364px; */

  color: rgba(239, 237, 232, 0.6);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  flex-direction: column;

  /* @media screen and (min-width: 768px) {
    width: 317px;
  } */

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
`,xe=o.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
  }
`,he=o.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,z=o.input`
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

    ${({haserror:n,isValidationCompleted:t,...r})=>x`
      border: 1px solid
        ${n?`${a.colorSecondaryRed}`:t?`${a.colorSecondaryGreen}`:`${a.colorInput}`};
    `}
  }

  @media screen and (min-width: 375px) {
    width: 335px;
    ${({haserror:n,isValidationCompleted:t,...r})=>x`
      border: 1px solid
        ${n?`${a.colorSecondaryRed}`:t?`${a.colorSecondaryGreen}`:`${a.colorInput}`};
    `}
  }

  @media screen and (min-width: 768px) {
    width: 341px;
  }

  @media screen and (min-width: 1440px) {
    padding: 14px;
    font-size: 16px;
    line-height: 24px;
    transition: border-color 0.3s;
    width: 341px;

    ${({haserror:n,isValidationCompleted:t})=>x`
      border: 1px solid
        ${n?`${a.colorSecondaryRed}`:t?`${a.colorSecondaryGreen}`:`${a.colorInput}`};

      &:hover,
      &:focus {
        ${!t&&`
        border: 1px solid ${a.colorOrange};
      `}
      }
    `}
  }
`,pe=o.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (min-width: 320px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 375px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,y=o.label`
  border-radius: 12px;
  border: transparent;
  outline: transparent;
  width: 161px;
  max-width: 364px;
  text-align: left;

  color: rgba(239, 237, 232, 0.6);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,W=o.input`
  @media screen and (min-width: 320px) {
    width: 161px;
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
    margin-top: 4px;

    ${({haserror:n,isValidationCompleted:t,...r})=>x`
      border: 1px solid
        ${n?`${a.colorSecondaryRed}`:t?`${a.colorSecondaryGreen}`:`${a.colorInput}`};
    `}
  }

  @media screen and (min-width: 375px) {
    width: 161px;
    ${({haserror:n,isValidationCompleted:t,...r})=>x`
      border: 1px solid
        ${n?`${a.colorSecondaryRed}`:t?`${a.colorSecondaryGreen}`:`${a.colorInput}`};
    `}
  }

  @media screen and (min-width: 768px) {
    width: 168px;
  }

  @media screen and (min-width: 1440px) {
    padding: 14px;
    font-size: 16px;
    line-height: 24px;
    transition: border-color 0.3s;
    width: 168px;

    ${({haserror:n,isValidationCompleted:t})=>x`
      border: 1px solid
        ${n?`${a.colorSecondaryRed}`:t?`${a.colorSecondaryGreen}`:`${a.colorInput}`};

      &:hover,
      &:focus {
        ${!t&&`
        border: 1px solid ${a.colorOrange};
      `}
      }
    `}
  }
`,me=o(H)`
  width: 161px;
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
  margin-top: 4px;

  ${({haserror:n,isValidationCompleted:t,...r})=>x`
    border: 1px solid
      ${n?`${a.colorSecondaryRed}`:t?`${a.colorSecondaryGreen}`:`${a.colorInput}`};
  `}

  @media screen and (min-width: 768px) {
    width: 187px;
  }

  @media screen and (min-width: 1440px) {
    width: 160px;
    padding: 14px;
    font-size: 16px;
    line-height: 24px;
    transition: border-color 0.3s;

    ${({haserror:n,isValidationCompleted:t})=>x`
      border: 1px solid
        ${n?`${a.colorSecondaryRed}`:t?`${a.colorSecondaryGreen}`:`${a.colorInput}`};

      &:hover,
      &:focus {
        ${!t&&`
        border: 1px solid ${a.colorOrange};
      `}
      }
    `}
  }
`,U=o.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  gap: 21px;
  @media (min-width: 834px) {
    width: 438px;
    margin: 24px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: none;
    margin: 24px 0 0 0;
    gap: 8px;
  }
`,ue=o.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  @media (min-width: 834px) {
    width: 438px;
    flex-direction: row;
    /* justify-content: space-between; */
    flex-wrap: wrap;
  }

  @media (min-width: 1440px) {
    text-align: left;
    flex-direction: row;
  }
`,l=o.label`
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.06em;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  justify-content: flex-start;
  @media (min-width: 834px) {
    letter-spacing: 0.01em;
  }
`,d=o(V)`
  appearance: none;

  min-width: 12px;
  min-height: 12px;

  font: inherit;
  color: green;
  background-color: black;

  border: 0.11em solid gray;
  border-radius: 50%;

  &:checked {
    background: radial-gradient(
      circle,
      ${a.colorOrange},
      transparent 50%
    );
    border: 0.11em solid ${a.colorOrange};
  }
`,c=o(J)`
  color: red;
`,ge=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (min-width: 834px) {
    width: 438px;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (min-width: 1440px) {
    text-align: left;
    flex-direction: row;
  }
`,fe=o.button`
  @media screen and (min-width: 320px) {
    position: sticky;
    display: flex;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 140px;
    border-radius: 12px;
    background-color: ${a.colorOrange};
    color: ${a.colorWhite};
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
      background-color: ${a.colorOrange1};
    }
  }
`,ye=_().shape({name:$().min(2,"Too Short!").required("Name is required"),email:$().email("Invalid email address").required("Email is required"),height:p().label("Height").min(150,"Height must be a number greater than or equal to 150").required("Height is required"),currentWeight:p().label("Current Weight").min(35,"Current Weight must be a number greater than or equal to 35").required("Current Weight is required"),desiredWeight:p().label("Desired Weight").min(35,"Desired Weight must be a number greater than or equal to 35").required("Desired Weight is required"),blood:p().label("Blood Type").oneOf([1,2,3,4,"1","2","3","4"],"Invalid Blood Type").required("Blood Type is required"),sex:$().label("Gender").oneOf(["male","female"],"Invalid Gender").required("Gender is required"),levelActivity:p().label("Level of Activity").oneOf([1,2,3,4,5,"1","2","3","4","5"],"Invalid Level of Activity").required("Level of Activity is required"),dateOfBirth:p().label("Date of Birth")}),ve=({profile:n,refreshUserData:t})=>{const r=N(),s={name:"Jane",email:"",height:0,currentWeight:0,desiredWeight:0,blood:"1",sex:"female",levelActivity:"1",dateOfBirth:null,avatarURL:""},[b,L]=f.useState(s),[O,B]=f.useState(null),[F,A]=f.useState(!1),I=async()=>{try{const i=await r(le());L(i.payload),t(i.payload)}catch(i){console.error("Error fetching user data:",i)}};f.useEffect(()=>{I()},[]);const G=i=>{A(!0),console.log(i);try{const u=r(se());console.log(u)}catch(u){console.error("Error fetching user data:",u)}return setTimeout(()=>{A(!1)},3e3),!1};return e.jsx(ce,{children:e.jsx(Q,{initialValues:b,enableReinitialize:!0,validationSchema:ye,onSubmit:G,children:i=>e.jsxs(X,{children:[e.jsxs(xe,{children:[e.jsxs(he,{children:[e.jsxs(D,{children:["Name",e.jsx(z,{name:"name",placeholder:"Mike",type:"text",onChange:i.handleChange,value:i.values.name}),e.jsx(c,{name:"name",component:"div"})]}),e.jsxs(D,{children:["Email",e.jsx(z,{name:"email",placeholder:"jane@acme.com",type:"email",onChange:i.handleChange,value:i.values.email}),e.jsx(c,{name:"email",component:"div"})]})]}),e.jsxs(pe,{children:[e.jsxs(y,{children:["Height",e.jsx(W,{name:"height",placeholder:"0",type:"number",onChange:i.handleChange,value:i.values.height}),e.jsx(c,{name:"height",component:"div"})]}),e.jsxs(y,{children:["Current Weight",e.jsx(W,{name:"currentWeight",placeholder:"0",type:"number",onChange:i.handleChange,value:i.values.currentWeight}),e.jsx(c,{name:"currentWeight",component:"div"})]}),e.jsxs(y,{children:["Desired Weight",e.jsx(W,{name:"desiredWeight",placeholder:"0",type:"number",onChange:i.handleChange,value:i.values.desiredWeight}),e.jsx(c,{name:"desiredWeight",component:"div"})]}),e.jsxs(y,{children:["Date of birth",e.jsx(me,{selected:O,onChange:u=>B(u),dateFormat:"dd.MM.yyyy",placeholderText:"00.00.00"}),e.jsx(c,{name:"fateOfBirth",component:"div"})]})]}),e.jsxs(U,{children:[e.jsxs("div",{role:"group","aria-labelledby":"bloodLevel",children:[e.jsx(c,{name:"blood",component:"div"}),e.jsxs(ue,{children:["Blood",e.jsxs(l,{children:[e.jsx(d,{type:"radio",name:"blood",value:"1",onChange:i.handleChange,checked:i.values.blood==="1"||i.values.blood===1}),"1"]}),e.jsxs(l,{children:[e.jsx(d,{type:"radio",name:"blood",value:"2",onChange:i.handleChange,checked:i.values.blood==="2"||i.values.blood===2}),"2"]}),e.jsxs(l,{children:[e.jsx(d,{type:"radio",name:"blood",value:"3",onChange:i.handleChange,checked:i.values.blood==="3"||i.values.blood===3}),"3"]}),e.jsxs(l,{children:[e.jsx(d,{type:"radio",name:"blood",value:"4",onChange:i.handleChange,checked:i.values.blood==="4"||i.values.blood===4}),"4"]})]})]}),e.jsxs("div",{role:"group","aria-labelledby":"genderType",children:[e.jsx(c,{name:"sex",component:"div"}),e.jsxs(l,{children:[e.jsx(d,{type:"radio",name:"sex",value:"male",checked:i.values.sex==="male"}),"Male",e.jsx(d,{type:"radio",name:"sex",value:"female",checked:i.values.sex==="female"}),"Female"]})]})]}),e.jsxs(U,{role:"group","aria-labelledby":"activityGroup",children:[e.jsx(c,{name:"levelActivity",component:"div"}),e.jsxs(ge,{children:[e.jsxs(l,{children:[e.jsx(d,{type:"radio",name:"levelActivity",value:"1",required:!0,onChange:i.handleChange,checked:i.values.levelActivity==="1"||i.values.levelActivity===1}),"Sedentary lifestyle (little or no physical activity)"]}),e.jsxs(l,{children:[e.jsx(d,{type:"radio",name:"levelActivity",value:"2",required:!0,onChange:i.handleChange,checked:i.values.levelActivity==="2"||i.values.levelActivity===2}),"Light activity (light excercises/sports 1-3 days per week)"]}),e.jsxs(l,{children:[e.jsx(d,{type:"radio",name:"levelActivity",value:"3",required:!0,onChange:i.handleChange,checked:i.values.levelActivity==="3"||i.values.levelActivity===3}),"Moderately active (moderate excercises/sports 2-5 days per week)"," "]}),e.jsxs(l,{children:[e.jsx(d,{type:"radio",name:"levelActivity",value:"4",required:!0,onChange:i.handleChange,checked:i.values.levelActivity==="4"||i.values.levelActivity===4}),"Very active (intence excercises/sports 6-7 days per week)"]}),e.jsxs(l,{children:[e.jsx(d,{type:"radio",name:"levelActivity",value:"5",required:!0,onChange:i.handleChange,checked:i.values.levelActivity==="5"||i.values.levelActivity===5}),"Extremely active (very strenous exercises/sports and physical work)"]})]})]})]}),e.jsx(fe,{type:"submit",children:"Save"}),F&&e.jsx("span",{className:"success-msg",children:"Settings updated successfully"})]})})})},be=o.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 20px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 60%;
    transform: translateX(-50%);
    width: 1px;
    background-color: rgba(239, 237, 232, 0.2);
    display: none; /* Початково приховуємо лінію */
  }

  @media (min-width: 1440px) {
    &:before {
      display: block; /* Показуємо лінію на десктопі */
    }
  }

  @media (max-width: 1439px) {
    flex-direction: column-reverse;
  }
`;class We extends f.Component{constructor(){super(...arguments);w(this,"state",{profile:{name:"Jane",email:"",height:0,currentWeight:0,desiredWeight:0,blood:"1",sex:"female",levelActivity:"1",dateOfBirth:null,avatarURL:""}});w(this,"refreshProfileState",r=>{this.setState({profile:r})})}render(){return e.jsxs("div",{children:[e.jsx("h1",{children:"Profile Settings"}),e.jsxs(be,{children:[e.jsx(ve,{profile:this.state.profile,refreshUserData:this.refreshProfileState}),e.jsx(de,{profile:this.state.profile,refreshUserData:this.refreshProfileState})]})]})}}export{We as ProfilePage,We as default};
