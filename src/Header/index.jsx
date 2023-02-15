import React from 'react'
import '../HTML/assets/css/main.css';
import '../HTML/assets/css/animation.css';
import '../HTML/assets/css/auth.css';
import '../HTML/assets/css/bootstrap.min.css';
import '../HTML/assets/css/color-themes.css';
import '../HTML/assets/css/confirmDialog.css';
import '../HTML/assets/css/custom.css';
import '../HTML/assets/css/flaticon.css';
import '../HTML/assets/css/left-sidebar.css';
import '../HTML/assets/css/media.css';
import logo from '../HTML/assets/images/thumbnails/Logo.svg'
import menu from '../HTML/assets/images/icons/icon-menu.svg'
import setting from '../HTML/assets/images/icons/setting.png'
import search from '../HTML/assets/images/icons/magnifying-glass.png'
import globe from '../HTML/assets/images/icons/icon-globe.png'
import noti from '../HTML/assets/images/icons/notification.png'
import profile from '../HTML/assets/images/thumbnails/profile-img.png'
import prod from '../HTML/assets/images/icons/Path.svg'
import $ from 'jquery';
import '../HTML/js/custom'
import '../HTML/js/left-sidebar'


function Header(props) {
   var selected=props.page
   function OnEcommerce(){

   }

      

  return (
    <>    <div class="topbar-wrapper">
    <div class="account-wrapper">
       <div class="account-logo-wrapper"><img src={logo} alt="Logo"></img></div>
    </div>
    <button class="toggle-sidebar"><img src={menu} alt="menu"></img></button>
    <div class="user-wrapper">
       <div class="filter_wrapper d-none d-sm-block">
          <div class="filet_left_content">
             <div class="input-group">
                <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">
                    <img src={search} alt="search"></img></span></div>
                <input type="text" class="form-control input_modify" placeholder="Search"></input>
             </div>
          </div>
       </div>
       <ul class="head_right_cont">
          <li class="list-items "><a href="#" class="top_links"><img src={noti} alt="notify"></img><span class="notify_num">5</span></a></li>
          <li class="list-items "><a href="#" class="top_links"><img src={globe} alt="globe" /></a></li>
          <li class="list-items "><a href="#" class="top_links"><img src={setting} alt="setting" /></a></li>
          <li class="list-items user_peofile">
             <div class="media align-items-center dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="avtar_blc"><img src={profile} alt="UserImage" /></div>
                <div class="media-body">
                   <span class="user_name">
                      <h6>Charlie Howard</h6>
                      <p class="">Frontend Developer</p>
                   </span>
                   <div class="dropdown-menu dropdown-menu-right animate slideIn account_info" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="#"> <i class="flaticon-logout"></i> Logout</a></div>
                </div>
             </div>
          </li>
       </ul>
    </div>
 </div>
 <aside class="sidebar-wrapper open custom-scrollbar wow fadeInLeft">
                <div class="sidebar-content-wrapper">
                    <ul class="sidebar-list">
                        <li class="sidebar-list-item has-subnav active" id="listTem">
                            <button class="sidebar-link" id="pro_toggle" >
                                <img src={prod} alt="Product List"></img>
                                <span class="item-text">Ecommerce</span>
                            </button>
                            <ul>
                                <li>
                                    <a href="/products" class={selected=='Product'?"sidebar-link active":"sidebar-link"}>Product List</a>
                                </li>
                                <li>
                                    <a href="/addproducts" class={selected=='Addproduct'?"sidebar-link active":"sidebar-link"}>Add Product</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>
 </>

  )
}

export default Header