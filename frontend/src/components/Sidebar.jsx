import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="s-container">
      <div className="s-row">
        <h2 className="s-logo">Minz HR</h2>
      </div>
      <div className="s-row">
        <div className="s-groups">
          <div className="s-group">
            <NavLink to="/" className="s-link" activeClassName="active">
              Dashboard
            </NavLink>
          </div>
          <div className="s-group">
            <NavLink to="/users" className="s-link" activeClassName="active">
              Users
            </NavLink>
          </div>
          <div className="s-group">
            <NavLink
              to="/department"
              className="s-link"
              activeClassName="active"
            >
              Department
            </NavLink>
          </div>
          <div className="s-group">
            <NavLink to="/employee" className="s-link" activeClassName="active">
              Employee
            </NavLink>
          </div>
          <div className="s-group">
            <NavLink
              to="/activities"
              className="s-link"
              activeClassName="active"
            >
              Activities
            </NavLink>
          </div>
          <div className="s-group">
            <NavLink to="/events" className="s-link" activeClassName="active">
              Events
            </NavLink>
          </div>
          <div className="s-group">
            <NavLink to="/holidays" className="s-link" activeClassName="active">
              Holidays
            </NavLink>
          </div>
          <div className="s-group">
            <NavLink to="/accounts" className="s-link" activeClassName="active">
              Accounts
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
