import React from "react";
import './signUp.css'
import {Link} from 'react-router-dom'
import axios from 'axios';
;

const SignUp = () => {
    const createUser = async () => {
        try {
          const response = await axios.post('/register', {
            name,
            email,
            username,
            password,
            elementType,
          });
      
          if (response.status === 201) {
            // Registration successful
            props.history.push('/login'); // Redirect to the login page
          }
        } catch (error) {
          console.error('Error creating user:', error);
        }
      };
      const handleSignUp = (e) => {
        const { name, value } = e.target;
        setUserSignUpData((prevData) => ({ ...prevData, [name]: value }));
      };
      
    return(
        <div className="signUpBox">
            <div className="header">
            </div>
         <div className="signupMain">
                <input onChange={(e) => handleSignUp(e)} placeholder="Name" name="name" />
                <input onChange={(e) => handleSignUp(e)} placeholder="Email" name="email" />
                <input onChange={(e) => handleSignUp(e)} placeholder="Userame" name="username" />
                <input onChange={(e) => handleSignUp(e)} placeholder="Password" name="password" />
                <input onChange={(e) => handleSignUp(e)} placeholder="Element Type" name="elementType" />
            </div>
            <Link to="/">
            <button onClick={() => createUser()} className="submitBtn">Submit</button>
            </Link>

        </div>
    )
}

export default SignUp