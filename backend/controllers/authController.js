// // // // const User = require('../models/User');
// // // // const jwt = require('jsonwebtoken');

// // // // const generateToken = (user) => {
// // // //   return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
// // // // };

// // // // exports.signup = async (req, res) => {
// // // //   const { name, email, password, role } = req.body;
// // // //   const user = await User.create({ name, email, password, role });
// // // //   const token = generateToken(user);
// // // //   res.status(201).json({ token });
// // // // };

// // // // exports.login = async (req, res) => {
// // // //   const { email, password } = req.body;
// // // //   const user = await User.findOne({ email });
// // // //   if (!user || !(await user.checkPassword(password))) {
// // // //     return res.status(401).json({ message: 'Invalid email or password' });
// // // //   }
// // // //   const token = generateToken(user);
// // // //   res.json({ token });
// // // // };

// // // // exports.getUserData = async (req, res) => {
// // // //   try {
// // // //     const user = await User.findById(req.user.id).select('-password'); // Assuming you're using JWT to authenticate and `req.user` is populated
// // // //     res.json(user);
// // // //   } catch (err) {
// // // //     res.status(500).send('Server error');
// // // //   }
// // // // };


// // // const User = require('../models/User');
// // // const jwt = require('jsonwebtoken');

// // // // Generate JWT token
// // // const generateToken = (user) => {
// // //   return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
// // // };

// // // // User signup
// // // exports.signup = async (req, res) => {
// // //   try {
// // //     const { name, email, password, role } = req.body;
// // //     const user = await User.create({ name, email, password, role });
// // //     const token = generateToken(user);
// // //     res.status(201).json({ token, role: user.role });
// // //   } catch (error) {
// // //     res.status(401).json({ message: 'User registration failed', error });
// // //   }
// // // };

// // // // User login
// // // exports.login = async (req, res) => {
// // //   try {
// // //     const { email, password } = req.body;
// // //     const user = await User.findOne({ email });
// // //     if (!user || !(await user.checkPassword(password))) {
// // //       return res.status(401).json({ message: 'Invalid email or password' });
// // //     }
// // //     const token = generateToken(user);
// // //     res.json({ token, role: user.role });
// // //   } catch (error) {
// // //     res.status(500).json({ message: 'Login failed', error });
// // //   }
// // // };

// // // // Get user data
// // // exports.getUserData = async (req, res) => {
// // //   try {
// // //     const user = await User.findById(req.user.id).select('-password');
// // //     res.json(user);
// // //   } catch (err) {
// // //     res.status(500).send('Server error');
// // //   }
// // // };


// // const User = require('../models/User');
// // const jwt = require('jsonwebtoken');

// // // Generate JWT token
// // const generateToken = (user) => {
// //   return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
// // };

// // // User signup
// // exports.signup = async (req, res) => {
// //   try {
// //     const { name, email, password, role } = req.body;
// //     if (!['user', 'admin', 'mechanic'].includes(role)) {
// //       return res.status(400).json({ message: 'Invalid role' });
// //     }
// //     const user = await User.create({ name, email, password, role });
// //     const token = generateToken(user);
// //     res.status(201).json({ token, role: user.role });
// //   } catch (error) {
// //     res.status(401).json({ message: 'User registration failed', error });
// //   }
// // };

// // // User login
// // exports.login = async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
// //     const user = await User.findOne({ email });
// //     if (!user || !(await user.checkPassword(password))) {
// //       return res.status(401).json({ message: 'Invalid email or password' });
// //     }
// //     const token = generateToken(user);
// //     res.json({ token, role: user.role });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Login failed', error });
// //   }
// // };

// // // Get user data
// // exports.getUserData = async (req, res) => {
// //   try {
// //     const user = await User.findById(req.user.id).select('-password');
// //     res.json(user);
// //   } catch (err) {
// //     res.status(500).send('Server error');
// //   }
// // };


// const User = require('../models/User'); // Adjust the path as necessary

// const signup = async (req, res) => {
//   const { name, email, password, role } = req.body;

//   // Validate the role
//   if (!['user', 'admin', 'mechanic'].includes(role)) {
//     return res.status(400).json({ message: 'Invalid role.' });
//   }

//   try {
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists.' });
//     }

//     // Create a new user
//     const newUser = new User({
//       name,
//       email,
//       password: await bcrypt.hash(password, 10), // Hash the password
//       role, // Store the role
//     });

//     await newUser.save();

//     // Generate JWT token (assuming you have a generateToken function)
//     const generateToken = (id, role) => {
//       return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     };
//   } catch (error) {
//     console.error('Signup error:', error);
//     res.status(500).json({ message: 'Internal server error.' });
//   }
// };

// module.exports = {
//   signup,
//   // ... other controllers
// };


const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// User signup
exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Validate role
    if (!['user', 'admin', 'mechanic'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role.' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Create and save new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();

    // Generate token
    const token = generateToken(newUser);
    res.status(201).json({ token, role: newUser.role });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// User login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Generate token
    const token = generateToken(user);
    res.json({ token, role: user.role });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// Get user data
exports.getUserData = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error('Fetch user data error:', err);
    res.status(500).json({ message: 'Server error.' });
  }
};
