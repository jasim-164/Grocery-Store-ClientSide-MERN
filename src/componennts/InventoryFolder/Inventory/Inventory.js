import React,{useState,useEffect, createContext} from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

import useHook from "../../CustomHook/CustomHook"
import MyItems from '../../UserItem/MyItems/MyItems';
const Name = createContext();
const Inventory = () => {
    const [datas,setDatas]=useHook([]);
    const { id } = useParams();
    
    //console.log(id);
    const alldata=datas.find(data=>data._id===id)

    const value=Number(alldata?.quantity);
    

    
    //console.log(datas);
 
   // console.log(alldata);
   const [verify,setVerify] =useState(false);
   const navigate= useNavigate();
    const handleQuantity=(id)=>
    {

        
        //const value=Number(alldata?.quantity);
        let newNumQuantity = value - 1;
      
        console.log(value);
        console.log(id);
        const url=`http://localhost:4000/product/${id}`
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
           setVerify(true);
           
       });
       

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
            <Button variant="primary" onClick={()=>{handleQuantity(id)}}>Delivered</Button>
            {
                verify &&    <>
                <Name.Provider value={id}>
                <MyItems/>
                </Name.Provider>
                 </>
            }

            </div> 

            </div>
        

        </div>
    );
};

export default Inventory;
export {Name};
