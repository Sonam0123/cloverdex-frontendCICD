import './login.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [logoutError, setLogoutError] = useState(true);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Token:', token);
        const response = await axios.get('http://localhost:3001/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
    
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
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
    // You can display a loading message or spinner here
    return <p>Loading...</p>;
  }
  console.log(userData)

  return (
    <div>
      <h1>Welcome, {userData.username}!</h1>
      <p>Your element type is {userData.elementType}</p>
      <Link to='/'>
        <button onClick={handleLogout}>Logout</button>
      </Link>
    </div>
  );
};

export default Home;
