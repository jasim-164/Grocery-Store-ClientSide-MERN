import React, { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from "../../firebase.init"
import logo from '../../images/Logo 3.png'

const Header = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    console.log(user?.displayName);
    console.log(user?.photoURL);

    const handleSignOut = () =>{
        signOut(auth);
    }
    

  const url='https://www.seekpng.com/png/full/245-2454602_tanni-chand-default-user-image-png.png';
    return (
        <div>
        <div className="d-flex mr-auto justify-content-around align-items-center bg-light flex-sm-column flex-lg-row ">

        <div >
        <Link to='/home'><img src={logo} width='200' height='100'alt="logo" ></img></Link>
        </div>
        <div className=" mr-auto d-flex flex-sm-column flex-lg-row  justify-content-center align-items-center ">    
        <Link to='/' className=" mr-auto p-4 text-decoration-none">Home</Link>
        <Link to='/manageinventory' className="  p-4 text-decoration-none">Grocery-Items</Link>
        <Link to='/blog' className=" p-4 text-decoration-none">Blog</Link>
        {
            user? <div className="p-2 d-flex flex-sm-column flex-lg-row align-items-center justify-content-center"> <Link to='/myitems' className=' text-decoration-none p-4'>My Items</Link> <Link to='/manageitems' className='p-4 mt-2 text-decoration-none'>Manage Items</Link> <Link to='/additem' className='p-4 mt-2 text-decoration-none'>Add Item</Link> <span className="text-black ms-5">{user?.displayName}  </span> <span><img src={user?.photoURL || url}style ={{height:"60px", width:"60px", borderRadius:"20px"}}alt="user"></img></span><button className='btn btn-link text-black text-decoration-none ms-5 ' onClick={handleSignOut}>  sign out</button> </div>  :
            <div className='p-4'><Link className="" to='/login'>Login</Link> </div>
            
        }
        </div> 
        </div>
        </div>
    );
};

export default Header;