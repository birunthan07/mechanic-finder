// // const jwt = require('jsonwebtoken');
// // const User = require('../models/User');

// // const authMiddleware = async (req, res, next) => {
// //   const token = req.headers.authorization?.split(' ')[1];
// //   if (!token) return res.status(401).json({ message: 'Not authenticated' });

// //   try {
// //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //     req.user = await User.findById(decoded.id);
// //     next();
// //   } catch (error) {
// //     res.status(401).json({ message: 'Invalid token' });
// //   }
// // };

// // const roleMiddleware = (roles) => (req, res, next) => {
// //   if (!roles.includes(req.user.role)) {
// //     return res.status(403).json({ message: 'Permission denied' });
// //   }
// //   next();
// // };

// // module.exports = { authMiddleware, roleMiddleware };


// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// // Auth middleware
// const authMiddleware = async (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) return res.status(401).json({ message: 'Not authenticated' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await User.findById(decoded.id);
//     next();
//   } catch (error) {
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };

// // Role middleware
// const roleMiddleware = (roles) => (req, res, next) => {
//   if (!roles.includes(req.user.role)) {
//     return res.status(403).json({ message: 'Permission denied' });
//   }
//   next();
// };

// module.exports = { authMiddleware, roleMiddleware };



const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Auth middleware
const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization header missing or malformed' });
  }

  const token = authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided, not authenticated' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user by ID and check if the user still exists
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: 'User not found, authentication failed' });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired, please login again' });
    }
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// Role middleware
const roleMiddleware = (roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Permission denied, insufficient role' });
  }
  next();
};

module.exports = { authMiddleware, roleMiddleware };
