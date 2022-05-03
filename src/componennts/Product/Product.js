import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Inventory from '../InventoryFolder/Inventory/Inventory';

const Product = (props) => {
    const data = props.data;
    const {_id,productName,price,picture,dealerName,description,quantity} =data;

    console.log(props)
    console.log(price)
    // <div className="p-4">{props.data}</div>
    const handleSubmit=()=>{
        console.log("click click click");
    }
    

    return (
        <div className=" col pt-1 bg-light mb-5 h-95 text-center">

        <div  className="text-center ">{productName}</div>
        <div className="align-content-center pe-5 pt-2"><img src={picture} alt="product" height="300" width="450"/></div>
        <div>{description.slice(0,100)}</div>
        <div className="text-center pt-2">Dealer:{dealerName}</div>
        <div className="text-center">{price}</div>
        <div className="text-center">Quantity: {quantity}</div>
        <div className="text-center">Sold: 0</div>
        <Link to={`/inventory/${_id}`} data={data}><Button variant="primary mb-3 mt-3 onClick={handleSubmit} ">Update</Button></Link>
        

        </div>
    );
};

export default Product;