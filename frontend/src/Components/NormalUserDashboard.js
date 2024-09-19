// 


import React, { useEffect, useState } from 'react';
import './NormalUserDashboard.css';
import axios from 'axios';

const UserDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/user/appointments', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>
      <section id="appointments" className="appointments">
        <h2>Your Upcoming Appointments</h2>
        {appointments.length === 0 ? (
          <p>No upcoming appointments.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Mechanic</th>
                <th>Service</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{new Date(appointment.date).toLocaleDateString()}</td>
                  <td>{appointment.mechanicName}</td>
                  <td>{appointment.serviceType}</td>
                  <td>{appointment.status}</td>
                  <td>
                    <button className="btn cancel-btn">Cancel</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default UserDashboard;
