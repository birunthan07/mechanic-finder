// const mongoose = require('mongoose');

// const MechanicSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   status: { type: String, enum: ['pending', 'approved'], default: 'pending' },
//   specialty: { type: String },
//   appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
// });

// module.exports = mongoose.model('Mechanic', MechanicSchema);


const mongoose = require('mongoose');

const MechanicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  status: { type: String, enum: ['pending', 'approved'], default: 'pending' },
  specialty: { type: String },
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
});

module.exports = mongoose.model('Mechanic', MechanicSchema);
