import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componennts/Home/Home'
import Header from './componennts/Header/Header'
import Footer from './componennts/Footer/Footer'
function App() {

  return (
    <div className="App">
    <h1>welcome to Grocery Stock</h1>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/header" element={<Header/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
