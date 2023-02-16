import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useNavigation } from "react-router-dom";
import '../HTML/assets/css/main.css';
import logo from '../HTML/assets/images/thumbnails/Logo.svg'
import { UserID } from "../stateManagement/action";

function SignIn() {
   const [mail,setMail]=useState('')
   const [passwd, setPasswd]=useState('')
   const [cnfmpass, setCnfmpass]=useState('')
   const [error, setError]=useState('')
   const [mailerr, setMailerr]=useState('')
   const dispatch=useDispatch()
   const Users=useSelector(state=>state.user)
   const nav=useNavigate()

   function OnEmail(e){
      setMail(e.target.value)
   }

   function OnPassword(e){
      setPasswd(e.target.value)
   }

   function OnCnfrmPass(e){
setCnfmpass(e.target.value)
   }

   function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

   function OnSignUpClick(e){
      try{
         //debugger
         if (validateEmail(mail) && passwd != '' && cnfmpass!="" && passwd==cnfmpass) {
            //setError("Invalid email address");
            setError('')
            setMailerr('')
            var arr;
            if(Users.length==0){
               var USER=localStorage.getItem('Users')
               arr=JSON.parse(USER)
            }
            //var arr=Users
            arr.push({
               email:mail,
               password:passwd
            })
            dispatch(UserID(arr))
            localStorage.setItem('Users', JSON.stringify(arr));
            nav('/')
          } else{
           if(!validateEmail(mail))
           {
            setMailerr("Invalid email address")
           }else{
            setMailerr("")
           }
           if(mail=='')
           {
            setMailerr("Please Enter MailID")
           }
           if(passwd != cnfmpass){
            setError('Password does not match')
           }
           if(passwd=='' || cnfmpass=='')
           {
            setError('Please Enter Password')
           }
          }
          console.log(arr)

      }catch(err){
         console.log(err)
      }
   }

return (
    <>
<div class="App">
        <div id="wrapper">
           <div class="page-wrapper auth_wrapper">
              <div class="content-area-wrapper">
                 <div class="content-wrapper">
                    <div class="container">
                       <div class="card products_blc">
                          <div class="card-body">
                             <div class="card_content_wrap text-center"></div>
                             <div class="card_content_wrap text-center">
                                <div class="logo_wrap">
                                   <img src={logo} ></img>
                                   <h6>Create an account</h6>
                                </div>
                                <form>
                                   <div class="form_wrapper">
                                      <div class="mb-4"><label for="exampleFormControlInput1" class="form-label label_modify"><span class="mendatary">*</span> Email</label>
                                      <input type="email" name="email" placeholder="demo@gmail.com" class="form-control input_modify" id="exampleFormControlInput1" value={mail} onChange={OnEmail} autoComplete='off'></input></div>
                                      <h6 style={{color:'red'}}>{mailerr}</h6>
                                      <div class="mb-4"><label for="exampleFormControlInput1" class="form-label label_modify"> <span class="mendatary">*</span> Password</label>
                                      <input type="password" placeholder="*****" name="password" class="form-control input_modify" id="exampleFormControlInput2" value={passwd} onChange={OnPassword}></input></div>
                                      <div class="mb-4"><label for="exampleFormControlInput1" class="form-label label_modify"> <span class="mendatary">*</span>Confirm Password</label>
                                      <input type="password" name="confirmpassword" class="form-control input_modify" id="exampleFormControlInput3" placeholder="*****" value={cnfmpass} onChange={OnCnfrmPass}></input></div>
                                      <h6 style={{color:'red'}}>{error}</h6>
                                      <div class="mb-0 auth_btn"><button type="button" class="theme-btn-primary theme-btn" onClick={OnSignUpClick}>Sign Up</button></div>
                                      <div class="already">
                                     <a >Already have Account</a></div>
                                   </div>
                                </form>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
     </>
);
}

export default SignIn;

