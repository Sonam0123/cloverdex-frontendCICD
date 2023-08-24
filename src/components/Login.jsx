import {useState, React} from 'react';
import './login.css';
import axios from 'axios';
import { Link} from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);



const handleLogin = async () => {
  try {
    const response = await axios.post('http://localhost:3001/api/login', { email, password });
    const token = response.data.token;
    const username = response.data.username;
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    console.log('Login successful');
    setLoginError(false);

  } catch (error) {
    console.error('Login failed:', error);
    setLoginError(true);
  }
};

  console.log(loginError)
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
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          name='username'
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          name='password'
        />
        <Link to='/home'>
          <button className='loginBtn' onClick={handleLogin}>
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