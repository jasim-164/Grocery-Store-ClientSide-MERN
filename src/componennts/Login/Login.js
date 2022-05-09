import React, { useState} from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import auth from '../../firebase.init'
import SocialLogin from './SocialLogin/SocialLogin';

import Loading from '../Loading/Loading'
import axios, { Axios } from 'axios';
import { Button } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate =useNavigate();
    const location = useLocation();
    let errorElement;
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    if (error) {
      errorElement = <p className='text-danger'>Error: {error?.message}</p>
  }
  
    if (loading) {
      return <Loading/>;
    }

    //console.log("user sahin", user?.email);
    console.log(location); //
    let from = location?.state?.from?.pathname || '/';
    //console.log(from);

      if (user) {

        navigate(from, { replace: true });
  
     }
     console.log(email);
     const handleSignIn = async(event)=>{
       event.preventDefault();
       signInWithEmailAndPassword(email, password)
       const {data}= await axios.post('https://protected-meadow-32127.herokuapp.com/login', { email });

       console.log("data",data);
       localStorage.setItem('accessToken',data.accessToken);

     }
    
     
    
    return (
        <div>
        <div className="text-center d-flex flex-column w-50 justify-content-center m-5 p-5 ">
        <h1>sign In</h1>
        <input
        type="email"
        className="my-3"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Button variant="primary" className="my-5" onClick={handleSignIn}>Sign In</Button>


      <h1> {errorElement}</h1>
     
      <SocialLogin/>
        <div className="text-center pb-5"><h5>Don't have an account? <span><Link to="/signup">SignUp</Link></span></h5></div>
      </div>
     
        </div>
    );
};

export default Login;