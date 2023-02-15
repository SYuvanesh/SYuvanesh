import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../Footer'
import Header from '../Header'
import Product from './product'
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


function ProductList() {
  var token=useSelector(state=>state.currentUser)
  console.log(useSelector(state=>state.user))
  console.log(token)
  return (
    <div style={{overflowX:'hidden'}}>
    <Header page={"Product"} />
    <Product />
    
    </div>
  )
}

export default ProductList