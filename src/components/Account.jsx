import {React, useState} from "react";
import './account.css'
import {Link} from 'react-router-dom'
import axios from 'axios';
;

const Account = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('')

  const handleAccUpdate = async (token, name, email, username) => {
    try {
      const response = await axios.put('http://localhost:3001/api/user', {name, email, username }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Update failed', error);
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