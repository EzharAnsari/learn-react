import { createContext, useReducer, useEffect, useState } from "react";

export const PostList = createContext({
  postList: [],
  fetching: false,
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
  } else if (action.type === "ADD_INITIAL_POST") {
    newCurrPostList = action.payload.posts;
  }
  return newCurrPostList;
};

const PostListContextProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        post,
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

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFetching(false);
      });

    return () => {
      console.log("Cleaning up useEffect.");
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider
      value={{ postList, fetching, addPost, addInitialPost, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListContextProvider;
