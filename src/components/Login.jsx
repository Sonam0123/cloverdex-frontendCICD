import {useState, React} from 'react';
import './login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = (props) => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
      });
    
      const handleLogin = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    

      const validateLogin = async (e) => {
        e.preventDefault();
    
        try {
          const response = await api.post('/login', {
            email: loginData.email,
            password: loginData.password,
          });
    
          // ... rest of the code ...
        } catch (error) {
          console.error('Error logging in:', error);
        }
      };
    
    
  return (
    <form className='login'>
      <div className='logoBox' data-aos='fade-up' data-aos-duration='3000'>
        <h1>Pokedex</h1>
        <h4>Check your pokemon collection</h4>
      </div>

      <div
        className='loginBox'
        data-aos='fade-left'
        data-aos-anchor='#example-anchor'
        data-aos-offset='500'
        data-aos-duration='500'
      >
        <input
          onChange={(e) => handleLogin(e)}
          placeholder='Id'
          name='username'
        />
        <input
          onChange={(e) => handleLogin(e)}
          placeholder='Password'
          name='password'
        />

        <Link to='/home'>
          <button className='loginBtn' onClick={(e) => validateLogin(e)}>
            Log In
          </button>
        </Link>

        <Link to='/sign-up'>
          <button className='newAccountBtn'>Sign Up</button>
        </Link>
      </div>
    </form>
  );
};

export default Login;