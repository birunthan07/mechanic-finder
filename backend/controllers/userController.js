// const User = require('../models/User');

// exports.getAllUsers = async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// };

// exports.updateUser = async (req, res) => {
//   const { userId } = req.params;
//   const updatedData = req.body;
//   const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });
//   res.json(updatedUser);
// };

// exports.deactivateUser = async (req, res) => {
//   const { userId } = req.params;
//   await User.findByIdAndDelete(userId);
//   res.status(204).send();
// };


const User = require('../models/User');

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

// Update user
exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const updatedData = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

// Deactivate user
exports.deactivateUser = async (req, res) => {
  const { userId } = req.params;
  try {
    await User.findByIdAndDelete(userId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deactivating user', error });
  }
};
