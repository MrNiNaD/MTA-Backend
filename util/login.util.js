const bcrypt = require('bcrypt');

const hashPassword = async (password, saltRounds = 10) => {
  try {
    // Hash password
    return await bcrypt.hash(password, saltRounds)
  } catch (error) {
    console.log(error)
  }

  // Return null if error
  return null
}

const comparePassword = async (password, hash) => {
  try {
    // Compare password
    return await bcrypt.compare(password, hash)
  } catch (error) {
    console.log(error)
  }

  // Return false if error
  return false
}

module.exports = {
  hashPassword,
  comparePassword,
}