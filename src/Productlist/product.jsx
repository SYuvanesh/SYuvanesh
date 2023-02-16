import Dropdown from 'react-bootstrap/Dropdown';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import search from '../HTML/assets/images/icons/magnifying-glass.png'
import {Prod_List, Sel_Index } from '../stateManagement/action';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

function Product() {
   const dispatch = useDispatch()
   const[add,setAdd]=useState(0)
   var products = useSelector(state => state.productList)
   const [Prod, setProd] = useState(products)
   const[updateArr, setUpdateArr]=useState([])
   const [serTxt, setSertxt]=useState('')
   const nav=useNavigate()

   const OnDeleteClick = (e, ID) => {
      //debugger
      var arr=Prod
      var index = arr.findIndex((x => x.id == ID))
      arr.splice(index, 1)
      //var delArr = Prod
      setUpdateArr(arr)
      //dispatch(ProdList(arr))
      setAdd(add+1)
      alert('product deleted')
   }

   const OnEditClicked=(e, index)=>{
      dispatch(Sel_Index(index))
      dispatch(Prod_List(products))
      nav('/editproducts')
   }

   const OnProductClick=()=>{
      //debugger
      if(updateArr.length!=0){
         dispatch(Prod_List(updateArr))
      }else{
         dispatch(Prod_List(products))
      }
      nav('/addproducts')
   }

   function OnSelect(e){
      //debugger
      var val=e.target.value
      if(val !=''){
         var arr= products.filter(y => y.category === val)
         setProd(arr)
      }else{
         setProd(products)
      }
     
      setAdd(add+1)
   }

   function OnTextChange(e){
      setSertxt(e.target.value)
   }

   return (
      // <div class="content-area-wrapper">
      <div class="content-area-wrapper" style={{ marginTop: '70px', overflowX:'hidden' }}>
         <div class="content-wrapper">
            <div class="filter_wrapper  d-block d-sm-none">
               <div class="filet_left_content">
                  <div class="input-group">
                     <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1"><img src={search} alt="search" /></span></div>
                     <input type="text" class="form-control input_modify" placeholder="Search" onChange={OnTextChange} />
                  </div>
               </div>
            </div>
            <div class="heading_wrapper d-flex flex-wrap">
               <h1 class="head_title">Product List</h1>
               <nav aria-label="breadcrumb" class="breadcrumb_wrapper">
                  <ul class="breadcrumb">
                     <li class="breadcrumb-item">E-Commerce</li>
                     <li class="breadcrumb-item active" aria-current="page">Product List</li>
                  </ul>
               </nav>
            </div>
            <div class="card products_blc" style={{ width: '82%' }}>
               <div class="card-body">
                  <div class="filter_wrapper">
                     <div class="filet_left_content">
                        <div class="input-group">
                           <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1"><img src={search} alt="search" /></span></div>
                           <input type="text" class="form-control input_modify" placeholder="Search" />
                        </div>
                        <select class="custom-select input_modify" onChange={OnSelect}>
                           <option selected value=''>All</option>
                           <option value="clothe">Clothe</option>
                           <option value="bags">Bags</option>
                           <option value="shoes">Shoes</option>
                           <option value="watches">Watches</option>
                           <option value="device">Devices</option>
                        </select>
                     </div>
                     <div class="filter_btn_wrapper">
                        <a class="btn theme-btn-primary theme-btn" onClick={OnProductClick}>Add Product</a>
                     </div>
                  </div>
                  <div class="app_table table-responsive">
                     <table class="table">
                        <thead>
                           <tr>
                              <th scope="col"><label class="checkbox_container text-uppercase"> ID</label></th>
                              <th scope="col" class="th_didivder">
                                 Products
                                 <span class="filter-order-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13">
                                       <g id="Group_22146" data-name="Group 22146" transform="translate(-501 -126.5)">
                                          <path id="Icon_ionic-md-arrow-dropdown" data-name="Icon ionic-md-arrow-dropdown" d="M9,13.5,14.5,19,20,13.5Z" transform="translate(492 120.5)" fill="rgba(69,85,96,0.2)"></path>
                                          <path id="Icon_ionic-md-arrow-dropdown-2" data-name="Icon ionic-md-arrow-dropdown" d="M9,19l5.5-5.5L20,19Z" transform="translate(492 113)" fill="rgba(69,85,96,0.2)"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </th>
                              <th scope="col" class="th_didivder">
                                 Category
                                 <span class="filter-order-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13">
                                       <g id="Group_22146" data-name="Group 22146" transform="translate(-501 -126.5)">
                                          <path id="Icon_ionic-md-arrow-dropdown" data-name="Icon ionic-md-arrow-dropdown" d="M9,13.5,14.5,19,20,13.5Z" transform="translate(492 120.5)" fill="rgba(69,85,96,0.2)"></path>
                                          <path id="Icon_ionic-md-arrow-dropdown-2" data-name="Icon ionic-md-arrow-dropdown" d="M9,19l5.5-5.5L20,19Z" transform="translate(492 113)" fill="rgba(69,85,96,0.2)"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </th>
                              <th scope="col" class="th_didivder">
                                 Price
                                 <span class="filter-order-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13">
                                       <g id="Group_22146" data-name="Group 22146" transform="translate(-501 -126.5)">
                                          <path id="Icon_ionic-md-arrow-dropdown" data-name="Icon ionic-md-arrow-dropdown" d="M9,13.5,14.5,19,20,13.5Z" transform="translate(492 120.5)" fill="rgba(69,85,96,0.2)"></path>
                                          <path id="Icon_ionic-md-arrow-dropdown-2" data-name="Icon ionic-md-arrow-dropdown" d="M9,19l5.5-5.5L20,19Z" transform="translate(492 113)" fill="rgba(69,85,96,0.2)"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </th>
                              <th scope="col" class="th_didivder">
                                 Stock
                                 <span class="filter-order-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13">
                                       <g id="Group_22146" data-name="Group 22146" transform="translate(-501 -126.5)">
                                          <path id="Icon_ionic-md-arrow-dropdown" data-name="Icon ionic-md-arrow-dropdown" d="M9,13.5,14.5,19,20,13.5Z" transform="translate(492 120.5)" fill="rgba(69,85,96,0.2)"></path>
                                          <path id="Icon_ionic-md-arrow-dropdown-2" data-name="Icon ionic-md-arrow-dropdown" d="M9,19l5.5-5.5L20,19Z" transform="translate(492 113)" fill="rgba(69,85,96,0.2)"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </th>
                              <th scope="col" class="th_didivder">
                                 Status
                                 <span class="filter-order-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13">
                                       <g id="Group_22146" data-name="Group 22146" transform="translate(-501 -126.5)">
                                          <path id="Icon_ionic-md-arrow-dropdown" data-name="Icon ionic-md-arrow-dropdown" d="M9,13.5,14.5,19,20,13.5Z" transform="translate(492 120.5)" fill="rgba(69,85,96,0.2)"></path>
                                          <path id="Icon_ionic-md-arrow-dropdown-2" data-name="Icon ionic-md-arrow-dropdown" d="M9,19l5.5-5.5L20,19Z" transform="translate(492 113)" fill="rgba(69,85,96,0.2)"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </th>
                              <th scope="col" class="th_didivder">
                                 Action
                                 <span class="filter-order-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13">
                                       <g id="Group_22146" data-name="Group 22146" transform="translate(-501 -126.5)">
                                          <path id="Icon_ionic-md-arrow-dropdown" data-name="Icon ionic-md-arrow-dropdown" d="M9,13.5,14.5,19,20,13.5Z" transform="translate(492 120.5)" fill="rgba(69,85,96,0.2)"></path>
                                          <path id="Icon_ionic-md-arrow-dropdown-2" data-name="Icon ionic-md-arrow-dropdown" d="M9,19l5.5-5.5L20,19Z" transform="translate(492 113)" fill="rgba(69,85,96,0.2)"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           {Prod.map((i, index) => {
                              return (
                                 <tr key={index}>
                                    <td><label class="checkbox_container text-uppercase">{i.id}</label></td>
                                    <td>
                                       <div class="media align-items-center">
                                          <div class="product_thumb"><img src={i.variation[0].productImage} alt="Images" /></div>
                                          <div class="media-body product_des">
                                             <h6 class="product_name">{i.productName}</h6>
                                          </div>
                                       </div>
                                    </td>
                                    <td class="text_primary">{i.category}</td>
                                    <td>${i.variation[0].price}</td>
                                    <td>{i.variation[0].stock}</td>
                                    <td>{i.status}</td>
                                    <td class="actions">
                                       <div class="dropdown dropdown_wrapper ">
                                          <Dropdown>
                                             <Dropdown.Toggle variant="none">
                                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC" alt="Donts" />
                                             </Dropdown.Toggle>
                                             <Dropdown.Menu>
                                                <Dropdown.Item onClick={(e)=>OnEditClicked(e,index)} >
                                                   Edit Product
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#" onClick={(e) => OnDeleteClick(e, i.id)}>
                                                   Delete
                                                </Dropdown.Item>
                                             </Dropdown.Menu>
                                          </Dropdown>
                                       </div>
                                    </td>
                                 </tr>
                              )
                           })}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
         <Footer></Footer>
      </div>
      // </div> 
   )
}

export default Product