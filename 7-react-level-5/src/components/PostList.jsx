import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { useContext } from "react";
import WelcomeMessage from "./WelcomeMessage";
import { useEffect } from "react";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialPost(data.posts));
  }, []);

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
