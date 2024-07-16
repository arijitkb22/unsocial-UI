import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";
import Post from "./Post";

const PostList = () => {
  const { postList } = useContext(PostListContext);
  console.log(postList);
  return (
    <div>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
