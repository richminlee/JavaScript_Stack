import React, {useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';
export default props => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
        .then(res => setAuthors(res.data));
    }, [])
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }

    return(
            <div className="row">
                <div className="col-3"></div>
                <div className="col-sm-6">
                    <table className="table table-bordered table-striped">
                        <tbody>

                        <tr>
                            <th>Authors</th>
                            <th>Actions Available</th>
                        </tr>
                            
                            {authors.map((author, idx)=>{
                                return(
                            <tr key={idx}>
                                
                                <td>{author.name}</td>
                                <td>                
                                    <button onClick={(e) => navigate("/edit/" + author._id)}  style={{marginRight: 1 + "em"}}>Edit</button>
                                    <DeleteButton authorId={author._id} successCallback={() => removeFromDom(author._id)}/>
                                </td>
                        </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
    )
}