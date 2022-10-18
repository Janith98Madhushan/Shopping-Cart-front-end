import React, { useState } from 'react'
import ProductService from '../services/ProductService'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom'

const SelectProduct = () => {

  const [pName,setPname] = useState('')
  const [units,setItems] = useState('')
    const history = useHistory();

  const saveProduct = (e) =>{
      e.preventDefault();

      const product = {pName,units}

      console.log(product);

      ProductService.createCartShow(product).then((response)=>{
          console.log(response.data)

          history.push('/list');
      }).catch(error=>{
          console.log(error)
      })
      

      
  }

  return (
    <div>
        <div className='container'>
            
            <div className='card-body mt-5'>

                <form>

                    <div className='form-group mb-2'>

                        <select 
                        className='btn btn-secondary dropdown-toggle mb-3'
                        value={pName}
                        onChange={(e)=>setPname(e.target.value)}
                        >
                            <option>--Select a product--</option>
                            <option >Penguin-ears</option>
                            <option >Horseshoes</option>
                
                        </select>
                
                

                        <input
                        type="text"
                        placeholder="No of Items"
                        name='units'
                        className="form-control mt-2"
                        value={units}
                        onChange={(e)=>setItems(e.target.value)}
                    
                    
                    
                        ></input>
                </div>

                <br/>
                <br/>
                <button className='btn btn-success '  onClick={(e)=>saveProduct(e)}>

                
                    Add to cart
                </button>
                <Link to="/list" className='btn btn-danger ' >Cancel</Link>
                </form>
                </div>
            </div>


        
    </div>
  )
}

export default SelectProduct