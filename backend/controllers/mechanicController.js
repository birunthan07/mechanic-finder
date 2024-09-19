// const Mechanic = require('../models/Mechanic');

// exports.getAllMechanics = async (req, res) => {
//   const mechanics = await Mechanic.find();
//   res.json(mechanics);
// };

// exports.approveMechanic = async (req, res) => {
//   const { mechanicId } = req.params;
//   const mechanic = await Mechanic.findByIdAndUpdate(mechanicId, { status: 'approved' }, { new: true });
//   res.json(mechanic);
// };


const Mechanic = require('../models/Mechanic');

// Get all mechanics
exports.getAllMechanics = async (req, res) => {
  try {
    const mechanics = await Mechanic.find();
    res.json(mechanics);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching mechanics', error });
  }
};

// Approve mechanic
exports.approveMechanic = async (req, res) => {
  const { mechanicId } = req.params;
  try {
    const mechanic = await Mechanic.findByIdAndUpdate(mechanicId, { status: 'approved' }, { new: true });
    res.json(mechanic);
  } catch (error) {
    res.status(500).json({ message: 'Error approving mechanic', error });
  }
};
