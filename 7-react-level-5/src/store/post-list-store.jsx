import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newCurrPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newCurrPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newCurrPostList = [action.payload.post, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POST") {
    newCurrPostList = action.payload.posts;
  }
  return newCurrPostList;
};

const PostListContextProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        post: {
          id: Date.now(),
          title: postTitle,
          body: postBody,
          reactions: reactions,
          userId: userId,
          tags: tags,
        },
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPost, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListContextProvider;
