import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useHook from "../../CustomHook/CustomHook"
import Product from "../../Product/Product"
const ManageInventory = () => {
    const [datas,setDatas]=useHook([]);

    return (
        <div>
            <h1>hey,manage this page</h1>
            <h4 className="text-center py-5">Inventory Section</h4>
        <div className=" row row-cols-3 ps-5">
        {
            datas.map(data => {
                return(
                    <div>
                    <Product key={data._id} data={data}/>
                    </div>
                )  
            })
        }
        </div>
        <Link to="/manageinventory"><div className=" text-center pb-5"><Button variant="primary">Manage Inventories</Button></div></Link>
        </div>
    );
};

export default ManageInventory;