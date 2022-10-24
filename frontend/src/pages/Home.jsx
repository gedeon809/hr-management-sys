import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Top from '../components/Top';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <Sidebar />
      </div>
      <div className="row">
        <div className="col">
          <Top />
        </div>
        <div className="col">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
