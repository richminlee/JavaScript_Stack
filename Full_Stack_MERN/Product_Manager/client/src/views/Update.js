import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import ProductForm from '../components/productForm';
import DeleteButton from '../components/DeleteButton';
export default props => {
    const { id } = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect (() => {
        axios.get('http://localhost:8000/api/product/' +id)
        .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/product/' +id, product)
        .then(res => navigate("/product/"));
    }
    return(
        <div>
            <h1>Update a Product</h1>
            {loaded && (
                <>
                <ProductForm
                onSubmitProp = {updateProduct}
                initialTitle = {product.title}
                initialPrice = {product.price}
                initialDescription = {product.description}
                />
                <DeleteButton productId={product._id} successCallback={() => navigate("/product/")}/>
                </>
            )}
            {/* <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br/>
                    <input type="text"
                    name = "title"
                    value = {title}
                    onChange={(e) => { setTitle(e.target.value)}}/>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="text"
                    name = "price"
                    value = {price}
                    onChange={(e) => { setPrice(e.target.value)}}/>
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text"
                    name = "description"
                    value = {description}
                    onChange={(e) => { setDescription(e.target.value)}}/>
                </p>
                <input type="submit"/>
            </form> */}
        </div>
    )
}