import React, { useState,useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import {Name} from '../../InventoryFolder/Inventory/Inventory'
import useHook from "../../CustomHook/CustomHook"
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from "../../../firebase.init"
const MyItems = () => {
    const [dealerProduct,setDealerProduct]=useState([])
    const [user] = useAuthState(auth);
    console.log(user)
    
    const email = user?.email;
    console.log(email)
    const value='YES'
    useEffect(()=>{
        const  url=`http://localhost:4000/products?email=${email}`
        fetch(url)
        .then(response => response.json())
        .then(data=>{console.log("jasim")
            setDealerProduct(data)
        })
    },[])
    const [datas, setDatas]= useHook();
    console.log(datas)
    const handleDelete=(id) => {
        //console.log('delete')
        const proceed = window.confirm('Are you sure you want to delete')
        if(proceed) {
            const url= `http://localhost:4000/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then((response) =>response.json())
            .then(data => {
                console.log(data);
                const remaining = dealerProduct.filter(service=>service._id!==id);
                setDealerProduct(remaining);
                })
        }
    }

    return (
        <div>
        <h5 className="text-center my-5">My Added Product:</h5>
            <div className="row  row-cols-auto m-0 ms-5 mt-5">
             
            {
               
                dealerProduct?.map(item =>
                    <div className="    ">
                    <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={item?.picture} height="250" width="250"/>
                    <Card.Body>
                      <Card.Title>{item?.productName}</Card.Title>
                      <Card.Text>
                      {item?.description}
                      </Card.Text>
                    </Card.Body>
                    <Button variant="primary" onClick={()=>{handleDelete(item?._id)}}>Delete</Button>
                   
                  </Card>
                  </div>
               
                  )
            }
           
            </div>
        </div>
    );
};

export default MyItems;
