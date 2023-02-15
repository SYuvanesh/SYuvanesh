import logo from './logo.svg';
import './App.css';
import SignIn from './SignUp';
import Login from './Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import ProductList from './Productlist';
import Addproduct from './Addproduct';
import Editproduct from './Editproduct';
import '../src/HTML/assets/css/main.css'
import '../src/HTML/assets/css/animation.css'
import '../src/HTML/assets/css/auth.css'
import '../src/HTML/assets/css/bootstrap.min.css'
import '../src/HTML/assets/css/color-themes.css'
import '../src/HTML/assets/css/confirmDialog.css'
import '../src/HTML/assets/css/custom.css'
import '../src/HTML/assets/css/flaticon.css'
import '../src/HTML/assets/css/media.css'
import '../src/HTML/assets/css/left-sidebar.css'
import '../src//HTML/js/left-sidebar'
import '../src//HTML/js/custom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />}></Route>
        <Route exact path='/signup' element={< SignIn />}></Route>
        <Route exact path='/products' element={<ProductList />}></Route>
        <Route exact path='/addproducts' element={<Addproduct />}></Route>
        <Route exact path='/editproducts' element={<Editproduct />}></Route>
      </Routes>
      </Router>
  );
}

export default App;
