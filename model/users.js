const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  userType: String,
});

module.exports = mongoose.Model('Users', UserSchema);