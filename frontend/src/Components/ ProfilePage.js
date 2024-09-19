import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfilePage.css';

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });
  const [serviceHistory, setServiceHistory] = useState([]);
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch user info and service history
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/user'); // Adjust endpoint
        setUserInfo(response.data);
        
        const servicesResponse = await axios.get('http://localhost:3000/api/services'); // Adjust endpoint
        setServiceHistory(servicesResponse.data);
      } catch (err) {
        setError('Error fetching data');
      }
    };

    fetchData();
  }, []);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/change-password', { newPassword });
      alert('Password changed successfully!');
    } catch (err) {
      setError('Error changing password');
    }
  };

  return (
    <div className="profile-page">
      <header className="header">
        <div className="logo">FixiGo</div>
        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-section">
        <h2>Personal Information</h2>
        <div className="personal-info">
          <p>Name: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
          {/* Add edit functionality here */}
        </div>

        <h2>Service History</h2>
        <div className="service-history">
          <ul>
            {serviceHistory.map((service, index) => (
              <li key={index}>{service.description} on {service.date}</li>
            ))}
          </ul>
        </div>

        <h2>Change Password</h2>
        <form onSubmit={handlePasswordChange}>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="submit">Change Password</button>
        </form>
        {error && <p className="error">{error}</p>}
      </main>
    </div>
  );
};

export default ProfilePage;
