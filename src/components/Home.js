import React, { useState } from 'react';
import { logout, isLogin } from '../utils';
import { Link } from 'react-router-dom';

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(isLogin());

  const handleLogout = () => {
    logout();
    setLoggedIn(false);
  }

  return (
    <div>
      <h1>Home</h1>
      {loggedIn ?
        <button onClick={handleLogout}>Click here to log out</button>
        : <Link to="/signin">Go to sign in page</Link>
      }
    </div>
  );
}

export default Home;