import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componennts/Home/Home'
import Header from './componennts/Header/Header'
import Footer from './componennts/Footer/Footer'
import Login from './componennts/Login/Login';
import Inventory from './componennts/InventoryFolder/Inventory/Inventory'
import ManageInventory from'./componennts/InventoryFolder/ManageInventory/ManageInventory'
import NotFound from './componennts/NotFound/NotFound'
import Register from './componennts/Login/Register/Register';
import MyItems from './componennts/UserItem/MyItems/MyItems'
import ManageItems from './componennts/UserItem/ManageItems/ManageItems'
import AddItem from './componennts/UserItem/AddItem/AddItem'
import Blog from './componennts/Blog/Blog'
import RequireAuth from './componennts/RequireAuth/RequireAuth';
import SignIn from "./componennts/Login/SignIn/SignIn"
function App() {

  return (
    <div className=" ">
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/header" element={<Header/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/register" element= {<Register/>}/>
    <Route path="/signin" element={<SignIn/>}/> 
    <Route path="/login" element={<Login/>}/>
    <Route path="/inventory/:id" element={<RequireAuth><Inventory/></RequireAuth>}/>
    <Route path="/manageinventory" element={<ManageInventory/>}/>
    <Route path="/myitems" element={<MyItems/>}/>
    <Route path="/manageitems" element={<ManageItems/>}/>
    <Route path="/additem" element={<AddItem/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
