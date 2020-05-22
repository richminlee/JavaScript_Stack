import React, { useState } from 'react';
import { navigate } from '@reach/router';

export default props => {
    const { initialName, onSubmitProp, errors } = props;
    const [name, setName] = useState(initialName);
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
    }


    return(
        <div className="row">
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <div className="col-4"></div>
            <div className="col-4 border border-dark p-4">
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br/>
                <input type="text" name="name" value={name} onChange = {(e) => setName(e.target.value)}/>
            </p>
            <button style={{marginRight:1 +'em'}} navigate={"/"}>Cancel</button>
            <input type="submit"/>
        </form>
        </div>
        </div>
    )
}