import React,{useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../Product/Product'
import ExtraSection from './ExtraSection/ExtraSection'
import DealSection from './DealSection/DealSection'
import ContactSection from './ContactSection/ContactSection';
import CarouselProduct from '../CarouselProduct/CarouselProduct';


const Home = () => {
    const [datas,setDatas]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const url='https://protected-meadow-32127.herokuapp.com/products';
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
        <div className="my-5"><CarouselProduct/></div>
        
        <h4 className="text-center py-5">Inventory Section</h4>
        <div className=" row ps-5 row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
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
        <ExtraSection/>
        <DealSection/>
        <ContactSection/>
        </div>
    );
};

export default Home;