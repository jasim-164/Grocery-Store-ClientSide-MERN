import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    console.log(year)
    return (
        

        <div>
            <h1>Footer</h1>
            <div className=" bg-black h-auto text-center">
            <h1 className=" text-white">All reserved Grocery @{year}</h1>
            </div>
        </div>
    );
};

export default Footer;