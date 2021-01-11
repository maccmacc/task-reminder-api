const express = require('express');

const router = express.Router();
const {
  createPost, getUserPosts,
} = require('../services/posts.services');

const { mapCreatePostRequest } = require('../utils/mappers/post-mapper');

router.get('/:id/posts', ((req, res) => {
  const { id } = req.params;
  const { offset, limit } = req.query;
  getUserPosts(id, limit, offset).then((posts) => {
    res.send(posts);
  }).catch((err) => {
    console.error(`Something went wrong ${err}`);
  });
}));

router.post('/:id/posts', ((req, res) => {
  const { id } = req.params;
  const createPostRequest = mapCreatePostRequest(req.body, id);
  createPost(createPostRequest).then((post) => {
    res.send(post);
  }).catch((err) => {
    res.send(err.message).status(400);
  });
}));

module.exports = router;
