const express = require('express');

const router = express.Router();
const {
  createUser, getAllUsers, getUserById, updateUser, deleteUser,
} = require('../services/users.services');

router.get('', ((req, res) => {
  getAllUsers().then((users) => {
    res.send(users);
  }).catch((err) => {
    console.error(`Something went wrong${err}`);
  });
}));

router.get('/:id', ((req, res) => {
  const { id } = req.params;
  getUserById(id).then((users) => {
    res.send(users);
  }).catch((err) => {
    console.error(err);
    res.send(err.message).status(404);
  });
}));

router.post('', ((req, res) => {
  createUser(req.body).then((user) => {
    res.send(user);
  }).catch((err) => {
    res.send(err.message).status(400);
  });
}));

router.put('/:id', ((req, res) => {
  const { id } = req.params;
  const { body } = req;
  updateUser(id, body).then((users) => {
    res.send(users);
  }).catch((err) => {
    res.send(err.message).status(400);
  });
}));

router.delete('/:id', ((req, res) => {
  const { id } = req.params;

  deleteUser(id).then(() => {
    res.send(204);
  }).catch((err) => {
    res.send(err.message).status(404);
  });
}));

module.exports = router;
