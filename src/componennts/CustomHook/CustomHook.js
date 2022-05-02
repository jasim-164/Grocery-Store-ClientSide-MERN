import React,{useState,useEffect} from 'react';

const CustomHook = () => {
    const [tours,setTours]=useState([]);
    const [loading,setLoading]=useState(false);


    useEffect(()=>{
         fetch('data.json')
        .then(result =>result.json())
        .then(data => setTours(data));
        setLoading(true);
    },[]);
    return [tours,loading];
};

export default CustomHook;