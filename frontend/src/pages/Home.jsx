import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Top from '../components/Top';
import Sidebar from '../components/Sidebar';
import Users from './Users';
import Department from './Department';
import Employee from './Employee';
import Activities from './Activities';
import Events from './Events';
import Holidays from './Holidays';
import Accounts from './Accounts';

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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/department" element={<Department />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/events" element={<Events />} />
            <Route path="/holidays" element={<Holidays />} />
            <Route path="/accounts" element={<Accounts />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
