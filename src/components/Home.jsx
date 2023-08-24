import React from 'react';
import './home.css'; // Make sure to create this CSS file

const Home = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">My Website</div>
      <ul className="navbar-links">
        <li className="navbar-link">Home</li>
        <li className="navbar-link">About</li>
        <li className="navbar-link">Services</li>
        <li className="navbar-link">Contact</li>
      </ul>
    </nav>
  );
};

export default Home;
