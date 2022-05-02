import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    console.log(year)
    return (
        

        <div>
            
            <div className=" bg-black h-auto text-center">
            <h1 className=" text-white">All rights reserved in Grocery Store @{year}</h1>
            </div>
        </div>
    );
};

export default Footer;