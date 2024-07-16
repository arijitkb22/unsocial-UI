import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FcExternal } from "react-icons/fc";
import { FcComments } from "react-icons/fc";
import { PostListContext } from "../store/post-list-store";
import { useState } from "react";

const Post = ({ post }) => {
  // const { handleLike } = useContext(PostListContext);

  const [like, setLike] = useState(1000);

  const handleLike = () => {
    setLike(like + 1);
  };

  return (
    <div className="post-component">
      <div className="card-header post-header">
        <FaUserCircle />
        <span className="user-name">{post.userTag}</span>
      </div>
      <div className="card-body text-primary">
        <p className="card-text">{post.body}</p>
      </div>
      <div className="hastags">#leraning #react</div>
      <div className="reaction-section">
        <div className="likes">
          <FcLike /> {like}
        </div>
        <div className="comments">{post.comments} comments</div>
      </div>
      <div className="post-action-buttons">
        <button className="action-button" onClick={() => handleLike(post.id)}>
          <FcLike /> Like
        </button>
        <button className="action-button">
          <FcExternal /> Share
        </button>
        <button className="action-button">
          <FcComments /> Comments
        </button>
      </div>
    </div>
  );
};

export default Post;
