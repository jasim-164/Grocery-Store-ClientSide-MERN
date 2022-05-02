import React,{useState,useEffect} from 'react';
import Product from '../Product/Product'

const Home = () => {
    const [datas,setDatas]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const url='products.json';
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

       
        </div>
    );
};

export default Home;