import React from 'react';
import { register } from '../utils/userService';

// const initialState = {
//     email: '',
//     password: '',
//     name: '',
//   };

function Register(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: e.target.email.value,
            password: e.target.password.value,
            username: e.target.username.value
        }
        
        register(user).then(username => 
            props.setUsername(prevUsername => {
                return {
                    ...prevUsername,
                    username
                }
            })
        )
        
        props.setIsAuthenticated(true);
        props.cb();
    }

    return(
        <div>
            <div className="black fullscreen"></div>
            <div className="register-form-container fullscreen">
                <div id="register">
                    <h2>Register</h2>
                    <button className="close" onClick={() => props.cb()}></button>
                    <form className="register-form" onSubmit={handleSubmit}>
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email" required></input>
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" required></input>
                        <label for="username">Name</label>
                        <input type="text" name="username" id="username" required></input>
                        <button id="register-form-button" type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;