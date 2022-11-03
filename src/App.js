import React from 'react';
import './style.css';
import { link, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Senior from './components/Senior';
import Junior from './components/Junior';
import { useEffect, useState } from 'react';
import Home from './Home';
import Profile from './Profile';
import ErrorBoundaries from './components/ErrorBoundaries';
import Senior from './components/Senior';
import Junior from './components/Junior';
import Errorpage from './Errorpage'
export default function App() {
  const [Staffs, setStaff] = useState([]);
  const [loading, setloading] = useState(false);
  const [pages, setPages] = useState(1);
  const [Totalpag, setTotalPag] = useState(0);

  return (
    <div>
      <h1>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} className="home"></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route
            path="/profile/senior"
            element={
              <ErrorBoundaries>
                <Senior />
              </ErrorBoundaries>
            }
          ></Route>
          <Route
            path="/profile/junior"
            element={
              <ErrorBoundaries>
                <Junior />
              </ErrorBoundaries>
            }
          ></Route>
          <Route path='/*' element={<Errorpage/> } ></Route>
        </Routes>
      </h1>
    </div>
  );
}
