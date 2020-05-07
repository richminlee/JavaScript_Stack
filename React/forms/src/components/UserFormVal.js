import React, {useState} from 'react';

const UserFormVal = (props) => {
    const [state, setState] = useState ({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const validForm = e => {
        e.preventDefault();
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    const createUser = e => {
        e.preventDefault();
        console.log(state);
    }

    return(
        <div>
            <form onSubmit={createUser}>
                <p className="validate text-danger">{state.firstName.length < 2 && state.firstName.length > 0 ? "First Name must be at least 2 characters" : ""}</p>
                <label className="col-1 text-left">First Name: </label>
                <input className="col-2" type = "text" name="firstName" onChange={validForm} />
                <br/>
                <p className="validate text-danger">{state.lastName.length < 2 && state.lastName.length > 0 ? "Last Name must be at least 2 characters" : ""}</p>
                <label className="col-1 text-left">Last Name: </label>
                <input className="col-2" type = "text" name="lastName" onChange={validForm} />
                <br/>
                <p className="validate text-danger">{state.email.length < 5 && state.email.length > 0 ? "Email must be at least 5 characters" : ""}</p>
                <label className="col-1 text-left">Email: </label>
                <input className="col-2" type = "email" name="email" onChange={validForm} />
                <br/>
                <p className="validate text-danger">{state.password.length < 8 && state.password.length > 0 ? "Password must be at least 8 characters" : ""}</p>
                <label className="col-1 text-left">Password: </label>
                <input className="col-2" type = "password" name="password" onChange={validForm} />
                <br/>
                <p className="validate text-danger">{state.confirmPassword.length < 8 && state.confirmPassword.length > 0 ? "Password must be at least 8 characters" : ""}</p>
                <p className="validate text-danger">{state.confirmPassword !== state.password ? "Passwords must match!" : ""}</p>
                <label className="col-1 text-left">Confirm Password: </label>
                <input className="col-2" type = "password" name="confirmPassword" onChange={validForm} />
                <br/>
                {
                    state.firstName.length >= 2 &&
                    state.lastName.length >= 2 &&
                    state.email.length >= 5 &&
                    state.password.length >= 8 &&
                    state.confirmPassword.length >= 8 &&
                    state.confirmPassword === state.password
                    ?
                <input className="btn btn-primary mt-2" type = "submit" value = "Create User" /> :
                <input className="btn btn-primary mt-2" type = "submit" value = "Create User" disabled />
                }
                
            </form>
        </div>
    )
}

export default UserFormVal;