import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../HTML/assets/css/main.css';
import logo from '../HTML/assets/images/thumbnails/Logo.svg'
import { currUser, Incre, UserID } from '../stateManagement/action';

function Login() {
   const dispatch = useDispatch()
   const selector = useSelector(state => state.user)
   const [mail, setMail] = useState('')
   const [passwd, setPasswd] = useState('')
   const [error, setError]=useState('')

   var users = JSON.parse(localStorage.getItem("Users"))
   const nav = useNavigate()

   function OnEmail(e) {
      setMail(e.target.value)
   }

   function OnPassword(e) {
      setPasswd(e.target.value)
   }

   function OnSignClick() {
      var index = users.findIndex(x => x.email == mail)
      dispatch(UserID(users))
      if (index != -1) {
         if (users[index].email == mail && users[index].password == passwd) {
            setError('')
            localStorage.setItem('currentUser',mail+passwd)
            dispatch(currUser(mail+passwd))
            nav('/products')
         }else{
            setError('Invalid email ID or password')
         }
      }else{
         if(mail=='' || passwd==''){
            setError('Please enter email ID or password')
         }else{
            setError('Invalid email ID or password')
         }
        
      }

   }

   return (
      <div class="App">
         <div id="wrapper">
            <div class="page-wrapper auth_wrapper">
               <div class="content-area-wrapper">
                  <div class="content-wrapper">
                     <div class="container">
                        <div class="card products_blc">
                           <div class="card-body">
                              <div class="card_content_wrap text-center">
                                 <div class="card_content_wrap text-center">
                                    <div class="logo_wrap">
                                       <img src={logo} ></img>
                                       <h6>Don’t have an account yet?<a class="signUpSpan" href="/signup"> Sign Up</a></h6>
                                    </div>
                                    <form>
                                       <div class="form_wrapper">
                                          <div class="mb-4"><label for="exampleFormControlInput1" class="form-label label_modify"><span class="mendatary">*</span> Email</label>
                                             <input type="email" class="form-control input_modify" id="exampleFormControlInput1" name="email" placeholder="demo@demo.com" value={mail} onChange={OnEmail} autoComplete='off'></input></div>
                                          <div class="mb-4"><label for="exampleFormControlInput2" class="form-label label_modify"> <span class="mendatary">*</span> Password</label>
                                             <input type="password" class="form-control input_modify" name="password" id="exampleFormControlInput1" placeholder="********" value={passwd} onChange={OnPassword}></input></div>
                                          <h6 style={{ color: 'red' }}>{error}</h6>
                                          <div class="mb-0 auth_btn"><button type="button" class="theme-btn-primary theme-btn" onClick={OnSignClick}>Sign In</button></div>
                                          {/* <h2>{selector}</h2> */}
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
      </div>
   )
}

export default Login