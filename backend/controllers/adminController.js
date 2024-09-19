const User = require('../models/User');
const Mechanic = require('../models/Mechanic');

exports.getReports = async (req, res) => {
  const userCount = await User.countDocuments();
  const mechanicCount = await Mechanic.countDocuments();
  const approvedMechanics = await Mechanic.countDocuments({ status: 'approved' });
  res.json({
    userCount,
    mechanicCount,
    approvedMechanics,
  });
};
