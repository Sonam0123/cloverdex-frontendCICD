import React from 'react';
import './home.css'; // Make sure to create this CSS file
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">PokiDex</div>
      <ul className="navbar-links">
        <Link to='/sign-up'>
          <li className="navbar-link">Account</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Home;
