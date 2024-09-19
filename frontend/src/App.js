// // // 


// // import React, { useEffect, useState } from 'react';
// // import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // import axios from 'axios';
// // import LandingPage from './Components/LandingPage';
// // import AuthPage from './Components/AuthPage';
// // import UserDashboard from './Components/NormalUserDashboard';
// // import MechanicDashboard from './Components/MechanicDashboard';
// // import AdminDashboard from './Components/AdminDashboard';

// // const App = () => {
// //   const [role, setRole] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const token = localStorage.getItem('token');
// //     if (token) {
// //       axios
// //         .get('/api/auth/user', { headers: { Authorization: `Bearer ${token}` } })
// //         .then((response) => {
// //           setRole(response.data.role); // Fetch role from backend
// //           setLoading(false);
// //         })
// //         .catch((error) => {
// //           console.error('Error fetching user data:', error);
// //           setLoading(false);
// //         });
// //     } else {
// //       setLoading(false);
// //     }
// //   }, []);

// //   if (loading) {
// //     return <div>Loading...</div>; // Add loading state while fetching
// //   }

// //   return (
// //     <Router>
// //       <div className="App">
// //         <Routes>
// //           <Route path="/" element={<LandingPage />} />
// //           <Route path="/login" element={<AuthPage isLogin={true} />} />
// //           <Route path="/signup" element={<AuthPage isLogin={false} />} />
// //           <Route
// //             path="/dashboard"
// //             element={
// //               role === 'admin' ? (
// //                 <AdminDashboard />
// //               ) : role === 'mechanic' ? (
// //                 <MechanicDashboard />
// //               ) : role === 'user' ? (
// //                 <UserDashboard />
// //               ) : (
// //                 <Navigate to="/" />
// //               )
// //             }
// //           />
// //           <Route path="*" element={<Navigate to="/" />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;



// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import axios from 'axios';
// import LandingPage from './Components/LandingPage';
// import AuthPage from './Components/AuthPage';
// import UserDashboard from './Components/NormalUserDashboard';
// import MechanicDashboard from './Components/MechanicDashboard';
// import AdminDashboard from './Components/AdminDashboard';

// const App = () => {
//   const [role, setRole] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       axios
//         .get('/api/auth/user', {
//           headers: { Authorization: `Bearer ${token}` } // Use Bearer token for Authorization
//         })
//         .then((response) => {
//           setRole(response.data.role); // Fetch role from backend
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error('Error fetching user data:', error.response || error.message);
//           setLoading(false);
//         });
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>; // Add loading state while fetching
//   }

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/login" element={<AuthPage isLogin={true} />} />
//           <Route path="/signup" element={<AuthPage isLogin={false} />} />
//           <Route
//             path="/dashboard"
//             element={
//               role === 'admin' ? (
//                 <AdminDashboard />
//               ) : role === 'mechanic' ? (
//                 <MechanicDashboard />
//               ) : role === 'user' ? (
//                 <UserDashboard />
//               ) : (
//                 <Navigate to="/" />
//               )
//             }
//           />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import AuthPage from './Components/AuthPage';
import UserDashboard from './Components/NormalUserDashboard';
import MechanicDashboard from './Components/MechanicDashboard';
import AdminDashboard from './Components/AdminDashboard';

// Mock function to simulate role retrieval after login
const getUserRole = () => {
  // Replace with actual logic to retrieve user role
  return localStorage.getItem('role') || null; // Return role from localStorage
};

function App() {
  const role = getUserRole();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<AuthPage isLogin={true} />} />
          <Route path="/signup" element={<AuthPage isLogin={false} />} />
          <Route
            path="/dashboard"
            element={
              role === 'admin' ? (
                <AdminDashboard />
              ) : role === 'mechanic' ? (
                <MechanicDashboard />
              ) : role === 'user' ? (
                <UserDashboard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

