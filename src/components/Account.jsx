import {React, useState} from "react";
import './account.css'
import {Link} from 'react-router-dom'
import axios from 'axios';
;

const Account = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  const handleAccUpdate = async (token, name, email, username) => {
    try {
      // Ensure token is valid and non-empty before making the request
      if (!token) {
        console.error('Invalid or missing token');
        return;
      }

      const response = await axios.put('http://localhost:3001/api/user', { name, email, username }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Update successful:', response.data);
    } catch (error) {
      // Log the error details for debugging
      console.error('Update failed', error);

      // Check if the error is related to the JWT
      if (error.response && error.response.status === 401) {
        console.error('Unauthorized: JWT token might be invalid or expired');
        // Handle JWT-related errors gracefully, e.g., redirect to login page
      }
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
            </div>
            <Link to="/home">
            <button onClick={handleAccUpdate} className="submitBtn">Submit</button>
            </Link>

        </div>
    )
}

export default Account;