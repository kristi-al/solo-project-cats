import React from 'react';
import { login } from '../utils/userService';
//import auth from '../utils/auth';


function Login(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const user = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        login(user).then(username => 

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
            <div className="login-form-container fullscreen">
                <div id="login">
                    <h2>Login</h2>
                    <button className="close" onClick={() =>props.cb()}></button>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email" required></input>
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" required></input>
                        <button type="submit" id='form-login-button'>Login</button>
                    </form>
                </div>
            </div>
        </div>
        )
    }


export default Login;