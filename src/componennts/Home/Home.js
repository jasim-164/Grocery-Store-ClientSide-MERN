import React,{useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../Product/Product'

const Home = () => {
    const [datas,setDatas]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const url='http://localhost:4000/products';
        fetch(url)
        .then(result =>result.json())
        .then(x => 
            {  
                setDatas(x);  
            })
        .finally(() =>{
            setLoading(false);
        })
        
    },[]);
    if(loading) return "loading..."

    console.log(datas[0]);
    //if(datas && datas.length>0)
   // console.log(datas[0]);


    

    
    return (
        <div className="container">
        <h4 className="text-center py-5">Inventory Section</h4>
        <div className=" row row-cols-3 ps-5">
        {
            datas.slice(0,6).map(data => {
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

export default Home;