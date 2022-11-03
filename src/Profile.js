import React from 'react';
import { NavLink, Routes, Route, Outlet } from 'react-router-dom';

import Info from './Info';

function Profile() {
  return (
    <div>
      <p className="Welcome-Text">Employee Profile Page</p>
      <div className="pcontacts">
        <ul>
          <li className="profile">
            <NavLink to="/profile/Senior">Senior Staffs</NavLink>
          </li>
          <li className="profile">
            <NavLink to="/profile/Junior">Junior Staffs</NavLink>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}

export default Profile;
