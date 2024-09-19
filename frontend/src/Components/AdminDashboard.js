// 


import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [mechanics, setMechanics] = useState([]);

  useEffect(() => {
    const fetchUsersAndMechanics = async () => {
      try {
        const token = localStorage.getItem('token');
        const [usersResponse, mechanicsResponse] = await Promise.all([
          axios.get('/admin/users', { headers: { Authorization: `Bearer ${token}` } }),
          axios.get('/admin/mechanics', { headers: { Authorization: `Bearer ${token}` } })
        ]);
        setUsers(usersResponse.data);
        setMechanics(mechanicsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchUsersAndMechanics();
  }, []);

  return (
    <div className="dashboard-page">
      <section id="manage-users" className="manage-users">
        <h2>User Management</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className="btn edit-btn">Edit</button>
                  <button className="btn deactivate-btn">Deactivate</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="manage-mechanics" className="manage-mechanics">
        <h2>Mechanic Management</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mechanics.map((mechanic) => (
              <tr key={mechanic._id}>
                <td>{mechanic.name}</td>
                <td>{mechanic.email}</td>
                <td>{mechanic.status}</td>
                <td>
                  <button className="btn approve-btn">Approve</button>
                  <button className="btn manage-btn">Manage</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminDashboard;
