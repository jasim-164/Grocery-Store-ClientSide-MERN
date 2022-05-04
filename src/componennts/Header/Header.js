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

    const handleSignOut = () =>{
        signOut(auth);
    }
    

  
    return (
        <div>
        <div className="d-flex  mr-auto justify-content-around align-items-center bg-light">

        <div >
        <Link to='/home'><img src={logo} width='200' height='100'alt="logo" ></img></Link>
        </div>
        <div className="d-flex mr-auto">    
        <Link to='/' className=" mr-auto p-4 text-decoration-none">Home</Link>
        <Link to='/grocery' className="  p-4 text-decoration-none">Grocery-Items</Link>
        <Link to='/blog' className=" p-4 text-decoration-none">Blog</Link>
        {
            user? <div className="p-2"> <Link to='/myitems' className=' text-decoration-none p-4'>My Items</Link> <Link to='/' className='p-4 mt-2 text-decoration-none'>Manage Items</Link> <Link to='/' className='p-4 mt-2 text-decoration-none'>Add Item</Link> <span className="text-white">{user.displayName}  </span> <span><img src={user.photoURL}style ={{height:"60px", width:"60px", borderRadius:"20px"}}alt="user"></img></span><button className='btn btn-link text-black text-decoration-none ms-5 ' onClick={handleSignOut}>  sign out</button> </div>  :
            <div className='p-4'><Link className="" to='/login'>Login</Link> </div>
            
        }
        </div> 
        </div>
        </div>
    );
};

export default Header;