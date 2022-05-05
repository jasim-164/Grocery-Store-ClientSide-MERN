import React,{useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import useHook from "../../CustomHook/CustomHook"
const Inventory = () => {
  
    const { id } = useParams();
    console.log(id);
    
    const [datas,setDatas]=useHook([]);
    console.log(datas);
    const alldata=datas.find(data=>data._id===id)
    console.log(alldata);
    let quant= parseInt(alldata?.quantity);
    console.log(Number.isInteger(quant));
    console.log(quant)
    const [quantity,setQuantity]=useState(quant);
    console.log(quantity);

    return (
        <div>
            <div className="d-flex justify-content-evenly">

          
            <div className="p-5">
            <img src={alldata?.picture} alt="product"/>
            </div>
            <div className=" bg-light p-5 text-center">
            <h6>Product-Id: {alldata?._id}</h6>
            <h1 className="bg-info ">{alldata?.productName}</h1>
            <h5>Dealer Name: {alldata?.dealerName}</h5>
            <h5>Quantity: {quantity}</h5>
            <h4>Price: {alldata?.price}</h4>
            <p>{alldata?.description}</p>
            <Button variant="primary" onClick={()=>{setQuantity(quantity-1)}}>Delivered</Button>

            </div> 

            </div>
        

        </div>
    );
};

export default Inventory;