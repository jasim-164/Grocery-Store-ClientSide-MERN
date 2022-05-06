//import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init'
import Loading from '../Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    // const signinWithGoogle=(e)=>{
    //     e.preventDefault();
    //     console.log('click me');
    //     const provider = new GoogleAuthProvider();
    //     signInWithPopup(auth,provider)
    //     .then((result)=>{
    //         console.log(result);
    //     }) 
    //     .then((error)=>{
    //         console.log(error);
    //     })
    // }
    //
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);
    console.log(email);
    console.log(password);


    const signIn=(event)=>{
     event.preventDefault();
      createUserWithEmailAndPassword(email, password);
      if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return (
          <div>
            <p>Registered User: {user.email}</p>
          </div>
        );
      }
      setEmail('');
      setPassword('');

    }

    return (
        <div className="">
        <div className="text-center p-5"><h5>Sign Up</h5></div>
        <Form >
        <Form.Group className="mb-3 w-50 m-auto " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3 w-50 m-auto " controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3 m-auto w-50" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" disabled required/>
          <Button variant="primary" type="submit" className='' onClick={signIn}>
          Submit
          </Button>
        </Form.Group>
      </Form>
       <SocialLogin/>
       <div className="text-center pb-5"><h1>Already have an account? </h1><Link to="/register">SignIn</Link></div>
 
      
    </div>
    );
};

export default Login;