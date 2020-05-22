import React, { useEffect, useState } from 'react';
import AuthorList from '../components/AuthorList';
import axios from 'axios';
import { Link } from '@reach/router';

export default () => {
    const [authors, setAuthors] = useState([]);

    useEffect (() => {
        axios.get('http://localhost:8000/api/author')
        .then(res=>{
            setAuthors(res.data);
        }, []);
    })
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }

    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link to = {"/new"}>Add an author</Link>
            <p>We have quotes by:</p>
            <AuthorList  authors = {authors} removeFromDom = {removeFromDom}/>
        </div>
    )
}