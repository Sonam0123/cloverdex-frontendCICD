import {React, useState} from "react";
import './signUp.css'
import {Link} from 'react-router-dom'
import axios from 'axios';
;

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [elementType, setElementType] = useState('')

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/register', {name, email, username, password, elementType });
      console.log(response.data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

    return(
        <div className="signUpBox">
            <div className="header">
            </div>
         <div className="signupMain">
                <input onChange={(e) => setName(e.target.value)} placeholder="Name" name="name" />
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" name="email" />
                <input onChange={(e) => setUsername(e.target.value)} placeholder="Userame" name="username" />
                <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" name="password" />
                <input onChange={(e) => setElementType(e.target.value)} placeholder="Element Type" name="elementType" />
            </div>
            <Link to="/">
            <button onClick={handleSignUp} className="submitBtn">Submit</button>
            </Link>

        </div>
    )
}

export default SignUp