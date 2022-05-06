import React,{useState,useEffect} from 'react';

const CustomHook = () => {
    const [datas,setDatas]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const fetchJSON=async()=>{
            const response= await fetch("http://localhost:4000/products")
            let json=await response.json();
            setDatas(json);
        };
        fetchJSON();
    },[]);

    console.log(datas[0]);
    return [datas,setDatas];
};

export default CustomHook;