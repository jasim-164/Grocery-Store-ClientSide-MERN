import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componennts/Home/Home'
import Header from './componennts/Header/Header'
import Footer from './componennts/Footer/Footer'
import Login from './componennts/Login/Login';
function App() {

  return (
    <div className=" ">
    <h1>welcome to Grocery Stock</h1>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/header" element={<Header/>}/>
    <Route path="/login" element={<Login/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
