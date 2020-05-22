import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm';
export default props => {
    const { id } = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 


    useEffect (() => {
        axios.get('http://localhost:8000/api/author/' +id)
        .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])
    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/author/' +id, author)
        .then(res => navigate("/"))
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
            <h1>Update an Author</h1>
            {loaded && (
                <>
                <AuthorForm
                onSubmitProp = {updateAuthor}
                initialName = {author.name}
                errors={errors}
                />
                </>
            )}
        </div>
    )
}