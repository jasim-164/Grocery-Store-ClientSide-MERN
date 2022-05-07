import React from 'react';
import { Button, Card } from 'react-bootstrap';
import useHook from "../../CustomHook/CustomHook"
const ManageItems = () => {
    const [datas, setDatas]= useHook();
    console.log(datas)
    const handleDelete=(id) => {
        //console.log('delete')
        const proceed = window.confirm('Are you sure you want to delete')
        if(proceed) {
            const url= `http://localhost:4000/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then((response) =>response.json())
            .then(data => {
                console.log(data);
                const remaining = datas.filter(service=>service._id!==id);
                setDatas(remaining);
                })
        }
    }
    //<h1>manage items: {datas.length}</h1>
    return (
        <div>
            
            <div className=" row  row-cols-auto m-0 ms-5 mt-5  ">{
                datas?.map(data =>

                    <div key={data?._id} className="text-center p-5 " >
                    <Card style={{ width: '23rem' }}>
                        <Card.Img variant="top" src={data?.picture} />
                        <Card.Body>
                          <Card.Title>Product Name: {data?.productName}</Card.Title>
                          <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                          </Card.Text>
                          <Button variant="primary" onClick={()=>{handleDelete(data._id)}}>Delete</Button>
                        </Card.Body>
                    </Card>

                    
                    
                    </div>
                )
            }
            </div>
     
          
        </div>
    );
};

export default ManageItems;