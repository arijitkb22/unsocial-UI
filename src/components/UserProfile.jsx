import { useContext } from "react";
import backImg from "../assets/th.jpg";
import { FaUserCircle } from "react-icons/fa";
import { UserContext } from "../store/user-details-store";

const UserProfile = () => {
  const { userName, userTag, followers, followings, bio } =
    useContext(UserContext);
  console.log(userName);
  return (
    <div className="user-profile">
      <div className="card" style={{ width: "20rem", height: "28rem" }}>
        <img
          src={backImg}
          className="card-img-top bg-img"
          alt="Your Background image"
        />
        <center className="profile-img">
          <FaUserCircle />
        </center>

        <div className="card-body">
          <center className="user-name">{userName}</center>
          <center className="profile-name">{userTag}</center>
          <center className="bio">{bio}</center>
          <hr style={{ width: "100%", size: "4", color: "white" }} />
          <div className="follow-details">
            <div className="following">
              <div className="data">{followings}</div>
              <div className="text">Following</div>
            </div>
            <div className="vl"></div>
            <div className="followers">
              <div className="data">{followers}</div>
              <div className="text">Followers</div>
            </div>
          </div>
          <hr style={{ width: "100%", size: "4", color: "white" }} />
          <a className="full-profile">My Profile</a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
