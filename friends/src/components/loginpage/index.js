import React, { useState } from "react";
import { axiosWithAuth } from "../../api/axiosAuth";
import { Link } from "react-router-dom";

const LoginPage = (props) => {

    const [ credentials, setCredentials ] = useState({});

    const login = e => {
            e.preventDefault();
            console.log(credentials)
            axiosWithAuth()
                .post('http://localhost:5000/api/login', credentials)
                .then(res => {
                    localStorage.setItem('token', res.data.token);
                    props.history.push("/")
                })
        };

    const handleChange = e => {
        setCredentials({
          ...credentials,
          [e.target.name]: e.target.value,
        })
    }

    return (
        <form onSubmit = {login}>
            <input 
                onChange = {handleChange} 
                type="text"
                name="username" 
                value= {credentials.username}
                placeholder="login" />
            <input 
                onChange = {handleChange} 
                type="password"
                name="password"
                value={credentials.password}
                placeholder="password"/>
            <button><Link to ="/friendsPage" >Login</Link></button>
        </form>
    )
};

export default LoginPage;