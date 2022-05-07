import React from 'react';
import { useForm } from "react-hook-form";
const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
         const url='http://localhost:4000/product'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )

    }
    ///^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$
    return (
        <div>
        <h1>hello</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column align-items-center justify-content-center   w-25  ">

        <input placeholder="Product Name" {...register("productName", { required: true, maxLength: 20 })} />
        <input placeholder="Dealer Name" {...register("dealerName", { pattern: /^[A-Za-z]+$/i })} />
        <input placeholder="Picture Url" type="text" {...register("picture", { pattern: /([a-z\-_0-9\\.]*\.(jpg|jpeg|png|gif))/i })} />
        <input placeholder="price " type="number" {...register("price", { min: 1, max: 99999999 })} />
        <input placeholder="Quantity" type="number" {...register("quantity", { min: 1, max: 9999999 })} />
        <input placeholder="Description" type="text"{...register("description", { pattern: /^[a-z]/ })} />

        <input type="submit" />
        </form>
        </div>
    );
};

export default AddItem;