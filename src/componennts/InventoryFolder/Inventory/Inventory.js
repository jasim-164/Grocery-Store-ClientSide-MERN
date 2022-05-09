import axios from 'axios';
import React,{useState,useEffect, createContext} from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from "../../../firebase.init"

import useHook from "../../CustomHook/CustomHook"
import MyItems from '../../UserItem/MyItems/MyItems';
import { toast, ToastContainer } from 'react-toastify';
const Name = createContext();
const Inventory = () => {
    const [datas,setDatas]=useHook([]);
    const { id } = useParams();
    const [user] = useAuthState(auth);
    // console.log(user);
     //console.log(user?.displayName);
     console.log(user);
    
    //console.log(id);
    const alldata=datas.find(data=>data._id===id)

    const value=Number(alldata?.quantity);
    

    
    //console.log(datas);
 
   // console.log(alldata);
   
   const navigate= useNavigate();
    const handleQuantity=(e)=>
    {

        e.preventDefault();
        //const value=Number(alldata?.quantity);
        let newNumQuantity = value - 1;
      
        console.log(value);
        console.log(id);
        const url=`https://protected-meadow-32127.herokuapp.com/product/${id}`
       fetch(url, {
           method: 'PUT',
           headers: {
               'content-type': 'application/json'
           },
           body:  JSON.stringify({
            "quantity": newNumQuantity
               } )
       })
       .then(res=> res.json())
       .then(result =>{
           console.log(result);
           
       });



       const order = {
        email:user.email,
        ProductId:id
    }
  
    axios.post('https://protected-meadow-32127.herokuapp.com/order', order)
    .then(response =>{
        const {data} = response;
        if(data.insertedId){
            toast('Your order is booked!!!');
            // e.target.reset();
        }
    })

       

    }


    return (
        <div>
            <div className="d-flex justify-content-evenly">

          
            <div className="p-5">
            <img src={alldata?.picture} height="400" width="500"alt="product"/>
            </div>
            <div className=" bg-light p-5 text-center">
            <h6>Product-Id: {alldata?._id}</h6>
            <h1 className="bg-info ">{alldata?.productName}</h1>
            <h5>Dealer Name: {alldata?.dealerName}</h5>
            <h5>Quantity: {alldata?.quantity}</h5>
            <h4>Price: {alldata?.price}</h4>
            <p>{alldata?.description}</p>
            <Button variant="primary" onClick={handleQuantity}>Delivered</Button>
            <p className="text-center  bg-warning my-3">After clicking the delivered button please refresh the page,otherwise you will not able to see the changes!!!</p>
            <ToastContainer />
         

            </div> 

            </div>
        

        </div>
    );
};

export default Inventory;
export {Name};
