const { Post } = require('../entities/index');

const getAllPosts = async () => Post.findAll();

const getPostById = async (id) => {
  const post = await Post.findByPk(id);

  if (!post) {
    throw new Error(`Post with id ${id} is not found`);
  }

  return post;
};

const updatePost = async (id, postRaw) => {
  const {
    title, description,
  } = postRaw;

  const post = await getPostById(id);

  return post.update({
    ...post,
    title,
    description,
  });
};
const createPost = async (postRaw) => {
  const {
    title, description, status,
  } = postRaw;

  try {
    const post = await Post.create({
      title,
      description,
      status,
    });
    return post;
  } catch (error) {
    console.error(error);
    // logger
    throw new Error('Post with this title already exist');
  }
};

const deletePost = async (id) => {
  const result = await Post.destroy({ where: { id } });
  // if => 0 => 0 => false
  if (!result) {
    throw new Error('There is no post to delete');
  }
};

module.exports = {
  getAllPosts, createPost, deletePost, getPostById, updatePost,
};
