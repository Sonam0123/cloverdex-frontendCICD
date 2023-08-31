import './home.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import ErrorModal from './ErrorModal';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [logoutError, setLogoutError] = useState(true);
  const navigate = useNavigate();
  const [showErrorModal, setShowErrorModal] = useState(false); 


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserData(token);
    } else {
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
  
      navigate('/home');
    } catch (error) {
      console.error('Error fetching user data:', error);
      setShowErrorModal(true); 
    }
  };
  

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3001/api/logout', null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      localStorage.removeItem('token');
      console.log('Logout successful');
      setLogoutError(false);
      window.location.reload();
    } catch (error) {
      console.error('Logout failed:', error);
      setLogoutError(true);
    }
  };

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome, {userData.username}!</h1>
      <p>Your element type is {userData.elementType}</p>
      <button onClick={handleLogout}>Logout</button>

      {/* Add the error modal */}
      <ErrorModal show={showErrorModal} onClose={() => setShowErrorModal(false)} />
    </div>
  );

};

export default Home;
