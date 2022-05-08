import React, { useState} from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
  
    // if (error) {
    //   return (
    //     <div>
    //       <p>Error: {error.message}</p>
    //     </div>
    //   );
    // }
    if (loading) {
      return <p>Loading...</p>;
    }
    console.log("user sahin", user?.email);
    if (user) {
      return (
        <div>
          <p>Signed In User: {user?.auth?.email}{user?.email}</p>
        </div>
      );
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
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="my-5 btn-primary" onClick={() => signInWithEmailAndPassword(email, password)}>
        Sign In
      </button>
      <h1> {errorElement}</h1>
     
      <SocialLogin/>
        <div className="text-center pb-5"><h5>Don't have an account? <span><Link to="/login">SignIn</Link></span></h5></div>
      </div>
     
        </div>
    );
};

export default SignIn;