// config.js

const config = {
    // Backend API URL, can be set dynamically using environment variables or default to local
    apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  
    // Key for storing the JWT token in localStorage/sessionStorage
    tokenKey: 'authToken',
  
    // Role Management for Users (Admin, Mechanic, User)
    roles: {
      admin: 'admin',
      mechanic: 'mechanic',
      user: 'user',
    },
  
    // Session Storage or Local Storage options
    storageType: 'localStorage', // You can change this to 'sessionStorage' if needed
  
    // Define endpoints for role-based functionalities
    endpoints: {
      login: '/auth/login',
      signup: '/auth/signup',
      adminDashboard: '/admin/dashboard',
      mechanicDashboard: '/mechanic/dashboard',
      userDashboard: '/user/dashboard',
      getMechanics: '/mechanics', // Endpoint for fetching nearby mechanics
    },
  
    // Role-specific Redirects
    redirects: {
      admin: '/admin/dashboard',
      mechanic: '/mechanic/dashboard',
      user: '/user/dashboard',
    },
  
    // General application configurations
    appName: 'FixiGo',  // Name of the app, used across the frontend
    supportEmail: 'support@fixigo.com',  // Example: for displaying in help/support areas
  
    // Map API or Location Service (if using a 3rd-party service like Google Maps for mechanics search)
    mapServiceKey: process.env.REACT_APP_MAP_API_KEY || 'YOUR_MAP_API_KEY_HERE',
  
    // Token expiry handling (optional)
    tokenExpiryKey: 'tokenExpiry',  // Used to track token expiration in local/session storage
    tokenExpiryDuration: 3600, // Expiration time in seconds (e.g., 1 hour)
  };
  
  module.exports= config;
  