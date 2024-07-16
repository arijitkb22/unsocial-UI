import { useContext, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FcStackOfPhotos } from "react-icons/fc";
import { FcVideoCall } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { PostListContext } from "../store/post-list-store";
import { UserContext } from "../store/user-details-store";
import PostPopup from "./PostPopup";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);
  const { userTag } = useContext(UserContext);
  const postReferance = useRef();

  const [photoPopupStatue, setPhotoPopupStatus] = useState(false)
  const [videoPopupStatue, setVideoPopupStatus] = useState(false)

  const handlePhotoPost = () => {
    console.log("On photo click");
    setPhotoPopupStatus(!photoPopupStatue)
  }
  const handleVideoPost = () => {
    console.log("On video click");
    setVideoPopupStatus(!videoPopupStatue)
  }

  const handlePostAdd = (event) => {
    event.preventDefault();
    const postBody = postReferance.current.value;
    addPost(userTag, postBody);
    postReferance.current.value = "";
  };
  return (
    <div className="create-post-component">
      <div className="card-header">
        <span className="user-icon">
          <FaUserCircle />
        </span>

        <span className="post-input">
          <form
            className="create-post"
            onSubmit={(event) => handlePostAdd(event)}
          >
            <div className="mb-3">
              <label htmlFor="userId" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                ref={postReferance}
                id="userId"
                placeholder="
              What did you learned today...."
              />
            </div>
          </form>
        </span>
      </div>

      <div className="post-control-buttons">
        <button type="button" className="btn btn-outline-secondary post-btn" onClick={handlePhotoPost}>
          <FcStackOfPhotos /> Photo
        </button>
        {photoPopupStatue && (
        <PostPopup handlePhotoPost={handlePhotoPost}/> 
      )}
        <button type="button" className="btn btn-outline-secondary post-btn" onClick={handleVideoPost}>
          <FcVideoCall /> Video
        </button>
        {videoPopupStatue && (
        <PostPopup /> 
      )}
        <button type="button" className="btn btn-outline-secondary post-btn">
          <FcCalendar /> Schadule
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
