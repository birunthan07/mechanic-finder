// 

import React, { useEffect, useState } from 'react';
import './MechanicDashboard.css';
import axios from 'axios';

const MechanicDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/mechanic/appointments', {
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
    <div className="mechanic-dashboard">
      <h1>Mechanic Dashboard</h1>
      <section id="appointments" className="appointments">
        <h2>Your Appointments</h2>
        {appointments.length === 0 ? (
          <p>No appointments available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Customer</th>
                <th>Service</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{new Date(appointment.date).toLocaleDateString()}</td>
                  <td>{appointment.customerName}</td>
                  <td>{appointment.serviceType}</td>
                  <td>{appointment.status}</td>
                  <td>
                    <button className="btn complete-btn">Complete</button>
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

export default MechanicDashboard;
