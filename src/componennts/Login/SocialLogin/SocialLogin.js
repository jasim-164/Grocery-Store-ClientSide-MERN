import React from 'react';
import {useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import Loading from '../../Loading/Loading'
const SocialLogin = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    let errorElement;

    // if (error1) {
    //   return (
    //     <div>
    //       <p>Error: {error1.message}</p>
    //     </div>
    //   );
    // }
    if (error1) {
      errorElement = <p className='text-danger'>Error: {error1?.message}</p>
  }
    if (loading1) {
      return <Loading/>
    }
    if(user1) {
      <p>{user1.email}</p>
    }
    return (
        <div>
        <div className="d-flex justify-content-center align-items-center">
        <div style={{height: 2,width:100,backgroundColor:"black"}} ></div>
        <div>Or SignUp With</div>
        <div style={{height: 2,width:100,backgroundColor:"black"}}></div>
        </div>
        <div>
        <div className="text-center"><button className="btn btn-primary m-5" onClick={() => signInWithGoogle()}>Google Signin</button></div>
        <div className="text-center"> {
          errorElement
        }</div>
       
        </div>
        </div>
    );
};

export default SocialLogin;