// // const mongoose = require('mongoose');
// // const bcrypt = require('bcryptjs');

// // const UserSchema = new mongoose.Schema({
// //   name: { type: String, required: true },
// //   email: { type: String, required: true, unique: true },
// //   password: { type: String, required: true },
// //   role: { type: String, enum: ['user', 'mechanic', 'admin'], default: 'user' },
// // });

// // UserSchema.pre('save', async function (next) {
// //   if (!this.isModified('password')) return next();
// //   this.password = await bcrypt.hash(this.password, 12);
// //   next();
// // });

// // UserSchema.methods.checkPassword = async function (password) {
// //   return await bcrypt.compare(password, this.password);
// // };

// // module.exports = mongoose.model('User', UserSchema);


// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ['user', 'mechanic', 'admin'], default: 'user' },
// });

// // Hash the password before saving
// UserSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password, 12);
//   next();
// });

// // Method to check password
// UserSchema.methods.checkPassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

// module.exports = mongoose.model('User', UserSchema);


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['user', 'admin', 'mechanic'], default: 'user' },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
