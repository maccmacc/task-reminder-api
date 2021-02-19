const express = require('express');

const router = express.Router();
const {
  getAllPosts, createPost, deletePost, getPostById, updatePost,
} = require('../services/posts.services');

router.get('', ((req, res) => {
  getAllPosts().then((posts) => {
    res.send(posts);
    console.log(posts);
  }).catch((err) => {
    console.error(`Something went wrong${err}`);
  });
}));

router.put('/:id', ((req, res) => {
  const { id } = req.params;
  const { body } = req;
  updatePost(id, body).then((post) => {
    res.send(post);
  }).catch((err) => {
    res.send(err.message).status(400);
  });
}));

router.get('/:id', ((req, res) => {
  const { id } = req.params;
  getPostById(id).then((post) => {
    res.send(post);
  }).catch((err) => {
    console.error(err);
    res.send(err.message).status(404);
  });
}));

router.post('', ((req, res) => {
  createPost(req.body).then((post) => {
    res.send(post);
    console.log(post);
  }).catch((err) => {
    res.send(err.message).status(400);
  });
}));

router.delete('/:id', ((req, res) => {
  const { id } = req.params;

  deletePost(id).then(() => {
    res.send(204);
  }).catch((err) => {
    res.send(err.message).status(404);
  });
}));

module.exports = router;
