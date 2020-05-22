import React, { useEffect, useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default () => {
    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState([]); 

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/author', author)
        .then(res => {
            setAuthors([...authors, res.data]);
            navigate("/");
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
            <h1>Favorite Authors</h1>
            <Link to = {"/"}>Home</Link>
            <p>Add a new author:</p>
            <AuthorForm errors={errors} onSubmitProp = {createAuthor} initialName = ""/>
        </div>
    )
}