

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AuthPage.css';
// import axios from 'axios';

// const AuthPage = ({ isLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [role, setRole] = useState('user'); // Default role
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const endpoint = isLogin 
//         ? 'http://localhost:5000/auth/login' 
//         : 'http://localhost:5000/auth/signup';
  
//       const data = isLogin ? { email, password } : { name, email, password };
  
//       const response = await axios.post(endpoint, data);
  
//       // Store JWT and role in localStorage
//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('role', response.data.role);
  
//       // Navigate based on user role
//       const userRole = response.data.role;
//       if (userRole === 'admin') {
//         navigate('/admin-dashboard');
//       } else if (userRole === 'mechanic') {
//         navigate('/mechanic-dashboard');
//       } else {
//         navigate('/normal-user-dashboard');
//       }
//     } catch (error) {
//       console.error('Error during authentication:', error.response.data);
//       setError(error.response.data.message || 'Authentication failed.');
//     }
//   };
  
//   return (
//     <div className="auth-page">
//       <header className="header">
//         <div className="container">
//           <div className="logo">
//             <h1>FixiGo</h1>
//           </div>
//           <nav className="nav">
//             <ul>
//               <li><a href="/">Home</a></li>
//               <li><a href={isLogin ? "/signup" : "/login"}>{isLogin ? "Sign Up" : "Login"}</a></li>
//             </ul>
//           </nav>
//         </div>
//       </header>

//       <main className="main-section">
//         <div className="form-container">
//           <h2>{isLogin ? "Login" : "Sign Up"}</h2>
//           <form onSubmit={handleSubmit}>
//             {!isLogin && (
//               <>
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//                 <select value={role} onChange={(e) => setRole(e.target.value)} required>
//                   <option value="user">User</option>
//                   <option value="admin">Admin</option>
//                   <option value="mechanic">Mechanic</option>
//                 </select>
//               </>
//             )}
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             {!isLogin && (
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 required
//               />
//             )}
//             <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
//             {error && <p className="error">{error}</p>}
//           </form>
//         </div>
//       </main>

//       <footer className="footer">
//         <div className="container">
//           <a href="/privacy">Privacy Policy</a>
//           <a href="/terms">Terms of Service</a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AuthPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';
import axios from 'axios';

const AuthPage = ({ isLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('user'); // Default role
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin 
        ? 'http://localhost:5000/auth/login' 
        : 'http://localhost:5000/auth/signup';
  
      const data = isLogin 
        ? { email, password } 
        : { name, email, password, role }; // Include role during signup
  
      const response = await axios.post(endpoint, data);
  
      // Store JWT and role in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role);
  
      // Navigate based on user role
      const userRole = response.data.role;
      if (userRole === 'admin') {
        navigate('/admin-dashboard');
      } else if (userRole === 'mechanic') {
        navigate('/mechanic-dashboard');
      } else {
        navigate('/normal-user-dashboard');
      }
    } catch (error) {
      console.error('Error during authentication:', error.response?.data);
      setError(error.response?.data.message || 'Authentication failed.');
    }
  };
  
  return (
    <div className="auth-page">
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>FixiGo</h1>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href={isLogin ? "/signup" : "/login"}>{isLogin ? "Sign Up" : "Login"}</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-section">
        <div className="form-container">
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <select value={role} onChange={(e) => setRole(e.target.value)} required>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="mechanic">Mechanic</option>
                </select>
              </>
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                required
              />
            )}
            <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default AuthPage;
