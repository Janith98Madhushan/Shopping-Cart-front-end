import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductService from '../services/ProductService'
    


const ItemList= () => {
  
    const [products,setProducts] = useState([])
    const [tCost,setTcost] = useState()
    
    


    useEffect(() => {

        getAllProducts();
        
      
    }, [])

    const getAllProducts =  () =>{
        ProductService.getAllProducts().then((response)=>{
            setProducts(response.data)
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })

        ProductService.getTotalCost().then((response)=>{
            setTcost(response.data)
            console.log.apply(response.data)
        }).catch(error=>{
            console.log(error)
        })

        
    }
    
    

    

    return (
    <div className="container">
        <h2 className='text-center'>Product List</h2>

        <Link to="/add-product" className='btn btn-info mb-3'>Add Product</Link>

        
        <table className="table table-bordered table-striped">

            <thead>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>No of cartons</th>
                <th>No of Units</th>
                <th>Cost</th>
            </thead>

            <tbody>
                {
                    products.map(
                        product =>
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.pname}</td>
                            <td>{product.cartons}</td>
                            <td>{product.units}</td>
                            <td>{product.cost}</td>
                            
                            

                            
                        </tr>
                    )
                }
            </tbody>
            

        </table>

        <div class="card">
            <div class="card-body">
               <h5> Total cost is {tCost} </h5>
            </div>
        </div>

        

    </div>
  )
}

export default ItemList;