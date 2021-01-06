const express = require('express');

const router = express.Router();
const { createUserById } = require('../services/users.services');

router.get('', (req, res) => {
  res.send('').status(201);
});

router.post('', ((req, res) => {
  createUserById(req.body).then((user) => {
    res.send(user);
  }).catch((err) => {
    console.error(err);
    res.send('Something went wrong').status(500);
  });
}));

module.exports = router;
