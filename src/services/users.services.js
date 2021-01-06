const { User } = require('../entities/user');

const createUserById = async (userRaw) => {
  const {
    firstName, lastName, email, password, address,
  } = userRaw;

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    address,
  });
  return user;
};

module.exports = { createUserById };
