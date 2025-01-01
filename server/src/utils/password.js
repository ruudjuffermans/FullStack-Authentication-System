const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword
};

const verifyPassword = async (password, hash) => {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch
  };

module.exports = {hashPassword, verifyPassword};