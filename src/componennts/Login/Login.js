import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import Loading from '../Loading/Loading';

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
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (error) {
      return (
        <div>
          <p>Error: {error.message}</p>
        </div>
      );
    }
    if (loading) {
      return <Loading/>
    }
    if(user) {
      <p>{user.email}</p>
    }
    return (
        <div>
        <Form >
        <Form.Group className="mb-3 w-50 m-auto " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3 w-50 m-auto " controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3 m-auto w-50" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
          <Button variant="primary" type="submit" className=''>
          Submit
          </Button>
        </Form.Group>
        <div>
        <div className="text-center"><button className="btn btn-primary m-5" onClick={() => signInWithGoogle()}>Google Signin</button></div>
        
        
        </div>

      </Form>
       
        </div>
    );
};

export default Login;