import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

import useHook from "../../CustomHook/CustomHook"
const Inventory = () => {
  
    const { id } = useParams();
    console.log(id);

    const [datas,setDatas]=useHook([]);
    console.log(datas);
    const alldata=datas.find(data=>data._id===id)
    console.log(alldata);

    return (
        <div>
            <h1>hey why remove</h1>
            
            <h1>id:{alldata?._id}</h1>
            <h1>{alldata?.productName}</h1>

        </div>
    );
};

export default Inventory;