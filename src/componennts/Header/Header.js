import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo 3.png'
const Header = () => {
    return (
        <div>
        <div className="d-flex  mr-auto justify-content-around align-items-center">

        <div >
        <Link to='/home'><img src={logo} width='200' height='100'alt="logo" ></img></Link>
        </div>
        <div className="d-flex mr-auto">    
        <Link to='/' className=" mr-auto p-4">Home</Link>
        <Link to='/grocery' className="  p-4">Grocery-Items</Link>
        <Link to='/blog' className=" p-4">Blog</Link>
        <Link to='/login' className="  p-4">Login</Link></div>
        </div> 
        </div>
    );
};

export default Header;