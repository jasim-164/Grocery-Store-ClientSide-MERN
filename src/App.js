import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componennts/Home/Home'
import Header from './componennts/Header/Header'
import Footer from './componennts/Footer/Footer'
import Login from './componennts/Login/Login';
import Inventory from './componennts/InventoryFolder/Inventory/Inventory'
import ManageInventory from'./componennts/InventoryFolder/ManageInventory/ManageInventory'
import NotFound from './componennts/NotFound/NotFound'
function App() {

  return (
    <div className=" ">
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/header" element={<Header/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/inventory/:id" element={<Inventory/>}/>
    <Route path="/manageinventory" element={<ManageInventory/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
