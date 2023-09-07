import './home.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [logoutError, setLogoutError] = useState(true);
  const navigate = useNavigate(); // Get the navigate function
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('Token:', token);
      fetchUserData(token);
    } else {
      // If there's no token, navigate to login page
      navigate('/');
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const response = await axios.get('http://localhost:3001/api/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log('Fetched user data:', response.data);
  
      setUserData(response.data);
  
      // Redirect to the home page once userData is fetched
      navigate('/home');
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  const getPokemon = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/type/fire"
    ).then((response) => response.json());
    console.log(response.pokemon[0].pokemon.name)
    // update the state
    setPokemon(response);
  };
  
  useEffect(() => {
    getPokemon();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3001/api/logout', null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      // Clear the token from local storage
      localStorage.removeItem('token');
      console.log('Logout successful');
      setLogoutError(false);
      // Refresh the page to reflect the logout state
      window.location.reload();
    } catch (error) {
      console.error('Logout failed:', error);
      setLogoutError(true);
    }
  };

  if (!userData) {
    // Display a loading message or spinner while data is being fetched
    return <p>Loading...</p>;
  }

  return (
    
    <div>
      <nav className="navbar">
      <div className="navbar-logo">PokiDex</div>
      <ul className="navbar-links">
        <Link to='/account'>
          <li className="navbar-link">Account</li>
        </Link>
        <button onClick={handleLogout}>Logout</button>
      </ul>
      </nav>
      <h1>Welcome, {userData.username}!</h1>
      <p>Your element type is {userData.elementType}</p>
    </div>
  );
};

export default Home;
