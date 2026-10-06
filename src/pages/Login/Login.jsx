import "./Login.css";

import logo from "../../assets/logo.png";
import { useState } from "react";
import {SignUp,login} from "../../firebse.js"

const Login = () => {
   
  const [loginState,SetloginState]=useState("Sign In")
  const [name,setName]=useState("")
   const [email,setEmail]=useState("")
   const [password,setPassword]=useState("");

   const user_auth =async(e)=>{
    e.preventDefault()
    if(loginState==="Sign In"){
       await login(email,password)
    }else{
       await SignUp(name,email,password)
    }
   }
  return (
    <div className="login">
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{loginState}</h1>
        <form>
          {loginState==="Sign In"?  <></> : <input  type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Your Name" />}
        
          <input  type="email" value={email} onChange={(e)=>{setEmail(e.target.value)} }placeholder="Your Email" />
          <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Your Password" />

          <button onClick={user_auth} type="submit">{loginState}</button>

          <div className="form-help">
            <div className="remenber">
              <input type="checkbox" name="" id="" />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {loginState==="Sign In"?   <p>New To Netflix ? <span onClick={()=>{SetloginState("Sign Up")}}>Sign Up Now</span></p> : <p>Already have Netflix ? <span onClick={()=>{SetloginState("Sign In")}}>Sign In Now</span></p>}
         
           
        </div>
      </div>
    </div>
  );
};

export default Login;
