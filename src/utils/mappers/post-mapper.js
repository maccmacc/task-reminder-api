// Request
const mapCreatePostRequest = (postRaw, userId) => ({
  title: postRaw.title,
  description: postRaw.description,
  status: postRaw.status,
  userId,
});

// Response

const mapPostToPostUserResponse = (post) => {
  console.log(123, post, post.User);
  const user = post.User;
  return {
    id: post.id,
    title: post.title,
    description: post.description,
    status: post.status,
    createdAt: post.createdAt,
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  };
};

const mapPostToPostResponse = (post) => ({
  id: post.id,
  title: post.title,
  description: post.description,
  status: post.status,
  createdAt: post.createdAt,
});

module.exports = {
  mapCreatePostRequest,
  mapPostToPostResponse,
  mapPostToPostUserResponse,
};
