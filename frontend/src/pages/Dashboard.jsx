import React from 'react';
import { FaCalendar, FaHotel, FaIdCard, FaUserAlt } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="d-container">
      <div className="d-row">
        <h1 className="d-title">Welcome Gedeon Ka</h1>
      </div>
      <div className="d-row">
        <div className="d-groups">
          <div className="d-group">
            <div className="d-badge">0</div>
            <div className="d-content">
              <FaUserAlt />
              <span className="d-subtitle">Users</span>
            </div>
          </div>
          <div className="d-group">
            <FaHotel />
            <span className="d-subtitle">Holidays</span>
          </div>
          <div className="d-group">
            <FaCalendar />
            <span className="d-subtitle">Events</span>
          </div>
          <div className="d-group">
            <FaIdCard />
            <span className="d-subtitle">Accounts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
