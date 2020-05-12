import React from'react';
import { Link, navigate } from '@reach/router';

const Input = props => {

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    {
                        isNaN(props.input) === false?
                        <div className="col">The Number is: {props.input}</div>:
                        <div style={{color:`${props.tColor}`, background:`${props.bColor}`}} className="col">The word is: {props.input}</div>
                    }
                    {
                        props === "home"?
                        <div className="col">Welcome</div>:
                        ""
                    }
                </div>
            </div>
        </div>
    )
}
export default Input;