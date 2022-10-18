import axios from 'axios'

const PRODUCT_BASE_REST_API_URL = 'http://localhost:8072/api/cart';

class ProductService{
    getAllProducts(){
        return axios.get('http://localhost:8072/api/cart/products')
    }

    createCartShow(product){
        return axios.post(PRODUCT_BASE_REST_API_URL,product)
    }
    getTotalCost(){
        return axios.get('http://localhost:8072/api/cart/costs')
    }
    
}

export default new ProductService();