// src/pages/AdminDashboard.js
import React from 'react';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard container mt-4">
      <h1 className="text-center mb-4">Admin Dashboard</h1>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="admin-card">
            <h5>Manage Products</h5>
            <p>Add, update, or delete grocery products from the system.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="admin-card">
            <h5>View Orders</h5>
            <p>Check current and past customer orders and update statuses.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="admin-card">
            <h5>User Management</h5>
            <p>Manage user accounts, permissions, and troubleshoot issues.</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="admin-card">
            <h5>Sales Analytics</h5>
            <p>View charts, reports, and data insights for sales and performance.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="admin-card">
            <h5>Website Settings</h5>
            <p>Update site settings, homepage banners, and notifications.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="admin-card">
            <h5>Support Requests</h5>
            <p>Respond to customer support tickets and feedback messages.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
