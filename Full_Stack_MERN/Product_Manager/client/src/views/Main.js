import React, { useEffect, useState } from 'react';
import ProductForm from '../components/productForm';
import ProductList from '../components/ProductList';
import axios from 'axios';
export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 

    useEffect (() => {
        axios.get('http://localhost:8000/api/product')
        .then(res=>{
            setProducts(res.data);
            setLoaded(true);
        }, []);
    })
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }
    const createProduct = product => {
        axios.post('http://localhost:8000/api/product', product)
        .then(res => {
            setProducts([...products, res.data]);
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for( const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }
    return(
        <div>
            <ProductForm errors= {errors} onSubmitProp = {createProduct} initialTitle = "" initialPrice = ""  initialDescription = ""/>
            <hr/>
            {loaded && <ProductList  products = {products} removeFromDom = {removeFromDom}/>}
        </div>
    )
}