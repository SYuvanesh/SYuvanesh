import React, { useEffect, useRef, useState } from 'react'
import pic from '../HTML/assets/images/thumbnails/picture.svg'
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
import minus from '../HTML/assets/images/icons/minus.png'
import { useDispatch, useSelector } from 'react-redux';
import { Prod_List } from '../stateManagement/action';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

function ProdContent(props) {
    const dispatch = useDispatch()
    const nav=useNavigate()
    const [tabs, setTab] = useState(true)
    const [pname, setPname] = useState('')
    const [descri, setDescri] = useState('')
    const [price, setPrice] = useState("")
    const [cprice, setCprice] = useState('')
    const [cost, setCost] = useState('')
    const [tax, setTax] = useState('')
    const [category, setCategory] = useState('')
    const [status, setStatus] = useState('')
    const [varitants, setVaritant] = useState('')
    const [vprice, setVprice] = useState('')
    const [stock, setStock] = useState('')
    const [image, setImage] = useState('')
    const [inputs, setInputs] = useState([{ variant: '', productImage: '', price: '', stock: '' }]);
    var products = useSelector(state => state.productList)
    var selectedIndex=useSelector(state=>state.selIndex)
    console.log(products)

    useEffect(() => {
       // //debugger
        if(props.page=='Edit Product'){
            var val=products[selectedIndex]
            setPname(val.productName)
            setDescri(val.description)
            setCategory(val.category)
            setStatus(val.status)
            setPrice(val.price)
            //setCprice(val.)
            setInputs(val.variation)
        }
        
      },[]);

    const handleInputChange = (index, event) => {
        //debugger
        const values = [...inputs];
        if(event.target.name=='productImage'){
            values[index][event.target.name] = URL.createObjectURL(event.target.files[0]);
        }else{
            values[index][event.target.name] = event.target.value;
        }   
        setInputs(values);
        console.log(values)
      };

      const handleRemoveInput = (index) => {
        const values = [...inputs];
        values.splice(index, 1);
        setInputs(values);
      };

      const handleAddInput = () => {
        setInputs([...inputs, { variant: '', productImage: '', price: '', stock:''}]);
      };

    function OnGeneralClick() {
        setTab(true)
    }

    function OnVariationClick() {
        setTab(false)
    }

    function onPrice(e) {
        setPrice(e.target.value)
    }

    function OnDiscard(){
        nav('/products')
    }

    function OnSaveClick(){
        //debugger
        if(props.page=='Edit Product'){
            if(pname!='' && category !="" && descri !='' && price !='' && cprice !='' && cost !='' && tax !='' && status !='' && inputs.variant!="" && inputs.price !='' && inputs.stock !='' ){
                products[selectedIndex]={
                    "id":selectedIndex+1,
                  "productName":pname,
                  "category":category,
                  "status":status,
                  "description": descri,
                  "variation":inputs
                }
                console.log(products)
                dispatch(Prod_List(products))
                nav('/products')
            }else{
                alert('Please enter required fields')
            }
        }else{
            if(pname!='' && category !="" && descri !='' && price !='' && cprice !='' && cost !='' && tax !='' && status !=''&& inputs.variant!="" && inputs.price !='' && inputs.stock !='' ){
                products.push({
                    "id":(products.length+1).toString(),
                  "productName":pname,
                  "category":category,
                  "status":status,
                  "description": descri,
                  "variation":inputs
                })
                console.log(products)
                dispatch(Prod_List(products))
                nav('/products')
            }else{
                alert('Please enter required fields')
            }
        }
        
       
    }

    return (
        <div class="content-area-wrapper" style={{ marginTop: '70px', overflowX: 'hidden', width: '83%' }}>
            <div class="content-area-wrapper">
                <div class="content-wrapper">
                    <div class="filter_wrapper  d-block d-sm-none">
                        <div class="filet_left_content">
                            <div class="input-group">
                                <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABHNCSVQICAgIfAhkiAAAAXtJREFUOE+tVEFOwkAU7e8Q1yyNmFhv0Ih7yg1acW89AXADj1BOYN2D9gaUPZjeABZiXLI2DOObZmiGwSKGTjJpZ/6819f/3x+yjHHu+g6r1bpCCA8hV4UzIkr5ej34ypKFidmuSQ80mp1IWFYXey+YiU20kvGNEHU8fMwHkEbL6bD/G2FBdtHsZDmQc7/s61K1zViCY/PP2SgwCXMypcg749xbZEmupmw4rl//ZiwFMF3ORj39HKmvzaHo+lA+dFAZhpSqOmSHhxSZMaQlhrqVro5Urp5AJnNx9ADOJyF6y/dXr6gmNgWq1v6YDtOjmXDw8vbeQ5XHEFEUUSqrlExaoprfrLQAlVpDM20Lpm0fadoxsj7ZM+22giiEtMYVzBv80U5vOOfCFo+wRbzTAfpCa/TYIko2qtFt2ehCyEYPoWiA90wQPZuEO7eGJM6vIMZ6ALgAtOQeQBOQZ5zzaKu6cXMXmoR7ZP8xrkl4EllePKUQr8HJZAWhbTs/jATsJjmQpCoAAAAASUVORK5CYII=" alt="search" /></span></div>
                                <input type="text" class="form-control input_modify" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                    <div class="card nav_pills_card nav_pills_card_new">
                        <div class="card-body">
                            <div class="heading_wrapper heading_right_content">
                                <h1 class="head_title">{props.page}</h1>
                                <div class="btn_wrapper"><button type="button" class="theme-btn btn-outline-secondary" onClick={OnDiscard}>Discard</button><button type="button" class="theme-btn theme-btn-primary" onClick={OnSaveClick}>Save</button></div>
                            </div>
                            <ul class="nav nav-pills mb-0 nav_pills_wrapper" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation"><button class={tabs ? "nav-link active" : "nav-link "} id="pills-general-tab" data-toggle="pill" data-target="#pills-general" type="button" role="tab" aria-controls="pills-general" aria-selected="true" onClick={OnGeneralClick}>General</button></li>
                                <li class="nav-item" role="presentation"><button class={!tabs ? "nav-link active" : "nav-link"} id="pills-variation-tab" data-toggle="pill" data-target="#pills-variation" type="button" role="tab" aria-controls="pills-variation" aria-selected="false" onClick={OnVariationClick}>Variation</button></li>
                            </ul>
                        </div>
                    </div>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-general" role="tabpanel" aria-labelledby="pills-general-tab" style={{ display: (tabs ? "block" : 'none') }}>
                            <div class="card nav_pills_card">
                                <div class="card-body">
                                    <div>
                                        <div class="form-title">Basic Info</div>
                                        <div class="form-group"><label for="productName"><span class="text-danger">*</span> Product Name</label><input type="text" name="productName" class="form-control" id="productName" value={pname} onChange={(e) => setPname(e.target.value)} /></div>
                                        <div class="form-group"><label for="Description"><span class="text-danger">*</span> Description</label><textarea type="text" id="Description" class="form-control" name="description" rows="3" value={descri} onChange={(e) => setDescri(e.target.value)}></textarea></div>
                                    </div>
                                </div>
                            </div>
                            <div class="card nav_pills_card">
                                <div class="card-body">
                                    <div>
                                        <div class="form-title">Pricing</div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"><label for="price"><span class="text-danger">*</span> Price</label><input type="number" pattern="[0-9]*" name="pricess" class="form-control" id="price" value={price} onChange={onPrice} /></div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group"><label for="comparePrice"><span class="text-danger">*</span> Compare price</label><input type="number" name="comparePrice" class="form-control" id="comparePrice" value={cprice} onChange={(e) => setCprice(e.target.value)} /></div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"><label for=" costPerItem"><span class="text-danger">*</span> Cost per item</label><input type="number" name="costPerItem" class="form-control" id="costPerItem" value={cost} onChange={(e) => setCost(e.target.value)} /></div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group"><label for="taxRate"><span class="text-danger">*</span> Tax rate</label><input type="number" name="taxRate" class="form-control" id="taxRate" value={tax} onChange={(e) => setTax(e.target.value)} /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card nav_pills_card">
                                <div class="card-body">
                                    <div>
                                        <div class="form-title">Organization</div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="productName"><span class="text-danger">*</span> Category</label>
                                                    <select class="form-control" id="productName" value={category} onChange={(e) => setCategory(e.target.value)}>
                                                        <option value="">Select</option>
                                                        <option value="clothe">Clothe</option>
                                                        <option value="bags">Bags</option>
                                                        <option value="shoes">Shoes</option>
                                                        <option value="watches">Watches</option>
                                                        <option value="device">Devices</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="Description"><span class="text-danger">*</span> Status</label>
                                                    <select class="form-control" id="productName" value={status} onChange={(e) => setStatus(e.target.value)}>
                                                        <option value="">Select</option>
                                                        <option value="In stock">In stock</option>
                                                        <option value="Limited stock">Limited stock</option>
                                                        <option value="Out of stock">Out of stock</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane  " id="pills-variation" role="tabpanel" aria-labelledby="pills-variation-tab" style={{ display: (!tabs ? "block" : 'none') }}>
                            <div class="card nav_pills_card">
                                <div class="card-body">
                                    <div>
                                        <div class="form-title">Variants</div>
                                        <p>Add A Custome Variat Options For Your Product, Like Different Sizes Or Colors.</p>
                                        {/* <>
                                            <div class="">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="form-group"><label for=" productName"><span class="text-danger">*</span> Variant</label><input type="text" name="variant" class="form-control" id="productName" value="" /></div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group"><label for=" productName"><span class="text-danger">*</span> Price</label><input type="text" name="variantPrice" class="form-control" id="productName" value="" /></div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group"><label for=" productName"><span class="text-danger">*</span> Stock keeping unit</label><input type="text" name="variantPrice" class="form-control" id="productName" value="" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group uploader-wrapper">
                                                <label for="Description"><span class="text-danger">*</span> Upload Image</label>
                                                <div class="uploader-wrapper-inner">
                                                    <img src={pic} alt="pictures" />
                                                    <input type="file" />
                                                    Click or drag file to upload
                                                </div>
                                            </div>
                                        </> */}
                                        {/* {components.map((component, index) => (
                                            <div key={index}>{component}</div>
                                        ))} */}

                                        {inputs.map((i, index) => (
                                            <>
                                                <div class="" key={index}>
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <div class="form-group"><label for=" productName"><span class="text-danger">*</span> Variant</label><input type="text" name="variant" class="form-control" id="productName"
                                                                value={i.variant}
                                                                onChange={(event) => handleInputChange(index, event)} /></div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="form-group"><label for=" productName"><span class="text-danger">*</span> Price</label><input type="number" name="price" class="form-control" id="productName" 
                                                            value={i.price}
                                                            onChange={(event) => handleInputChange(index, event)} /></div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="form-group"><label for=" productName"><span class="text-danger">*</span> Stock keeping unit</label><input type="number" name="stock" class="form-control" id="productName" 
                                                            value={i.stock}
                                                            onChange={(event) => handleInputChange(index, event)} /></div>
                                                            
                                                        </div>
                                                        <img src={minus} style={{position:'absolute', right:0, height:'25px', width:'25px', cursor:'pointer' }} onClick={() => handleRemoveInput(index)}></img>
                                                    </div>
                                                </div>
                                                <div class="form-group uploader-wrapper">
                                                    <label for="Description"><span class="text-danger">*</span> Upload Image</label>
                                                    <div class="uploader-wrapper-inner" >
                                                        <img src={pic} alt="pictures" />
                                                        <input type="file" name='productImage' onChange={(event) => handleInputChange(index, event)} />
                                                        Click or drag file to upload
                                                    </div>
                                                </div>
                                            </>
                                        ))}

                                        <button class="uploader-add-btne" type="button" onClick={handleAddInput}>Add field</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default ProdContent