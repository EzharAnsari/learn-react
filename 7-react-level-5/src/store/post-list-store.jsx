import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
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
  }
  return newCurrPostList;
};

const PostListContextProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

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

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: 2,
    title: "pass ho gaye bhai",
    body: "4 saal ki masti ke bad bhi ho gaye pass. Hard to believe",
    reactions: 16,
    userId: "user-7",
    tags: ["Graduating", "Unbelievable"],
  },
];

export default PostListContextProvider;
