const { Post, User } = require('../entities/index');
const { getUserById } = require('./users.services');

const { mapPostToPostResponse, mapPostToPostUserResponse } = require('../utils/mappers/post-mapper');

const getUserPosts = async (userId, limit = 10, offset = 0) => {
  const user = await getUserById(userId);

  try {
    const posts = await Post.findAll({
      where: { userId: user.id },
      limit: +limit,
      offset: +offset,
      include: {
        model: User,
      },
    });
    return posts.map((post) => mapPostToPostUserResponse(post));
  } catch (error) {
    console.log(error);
    throw new Error('Cannot fetch posts for user');
  }
};

const createPost = async (postRaw) => {
  const {
    title, description, status, userId,
  } = postRaw;

  const user = await getUserById(userId);

  try {
    const post = await Post.create({
      title,
      description,
      status,
      userId: user.id,
    });
    return mapPostToPostResponse(post);
  } catch (error) {
    console.error(error);
    // logger
    throw new Error('Post failed');
  }
};
module.exports = {
  createPost, getUserPosts,
};
