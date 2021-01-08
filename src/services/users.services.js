const { User } = require('../entities/index');

const getAllUsers = async () => User.findAll();

const getUserById = async (id) => {
  const user = await User.findByPk(id);

  if (!user) {
    throw new Error(`User with id ${id} is not found`);
  }

  return user;
};

const updateUser = async (id, userRaw) => {
  const {
    firstName, lastName, address,
  } = userRaw;

  const user = await getUserById(id);

  return user.update({
    ...user,
    firstName,
    lastName,
    address,
  });
};

const createUser = async (userRaw) => {
  const {
    firstName, lastName, email, password, address,
  } = userRaw;

  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      address,
    });
    return user;
  } catch (error) {
    console.error(error);
    // logger
    throw new Error('User with this email already exist');
  }
};

const deleteUser = async (id) => {
  const result = await User.destroy({ where: { id } });
  // if => 0 => 0 => false
  if (!result) {
    throw new Error('There is no user to delete');
  }
};

module.exports = {
  createUser, getAllUsers, getUserById, updateUser, deleteUser,
};
