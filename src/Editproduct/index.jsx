import React from 'react'
import Header from '../Header'
import ProdContent from '../ProdContent'
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

function Editproduct() {
  return (
    <>
    <Header page={"Addproduct"} />
    <ProdContent page={"Edit Product"} />
    </>
  )
}

export default Editproduct