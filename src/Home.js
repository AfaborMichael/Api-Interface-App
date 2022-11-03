import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <p className="Welcome-Text">
        <p>Welcome to the portal</p> 

        <h6>Please Access Your Profile below</h6>
      </p>
      <div className="pcontacts">
        <ul>
          <li className="profile">
            <Link to="/profile">Profile</Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Home;
