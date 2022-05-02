import React from 'react';
import { Button } from 'react-bootstrap';

const Product = (props) => {
    
    const {_id,productName,price,picture,dealerName,description,quantity} = props.data;
    console.log(props)
    console.log(price)
    // <div className="p-4">{props.data}</div>
    return (
        <div className=" col pt-1 bg-light mb-5 h-95 text-center">

        <div  className="text-center ">{productName}</div>
        <div className="align-content-center pe-5 pt-2"><img src={picture} alt="product" height="300" width="450"/></div>
        <div>{description.slice(0,100)}</div>
        <div className="text-center pt-2">Dealer:{dealerName}</div>
        <div className="text-center">{price}</div>
        <div className="text-center">Quantity: {quantity}</div>
        <Button variant="primary mb-3 mt-3">Update</Button>

        </div>
    );
};

export default Product;