import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { UserContext } from "../store/user-details-store";

const FollowersPreview = () => {
  const { recentFollowersList } = useContext(UserContext);
  return (
    <div className="followers">
      <div className="card" style={{ width: "20rem", height: "20rem" }}>
        <div className="card-body">
          <div className="sec-header">Who is to follow you</div>
          {recentFollowersList.map((follower, index) => (
            <div className="follower">
              <span>
                <FaUserCircle />
              </span>
              <span key={index} className="follower-name">{follower}</span>
              <span>
                <button
                  type="button"
                  className="btn btn-sm btn-light home-btn"
                  style={{
                    borderRadius: "10px",
                    height: "30px",
                    padding: "0px 5px",
                    width: "60px",
                  }}
                >
                  follow
                </button>
              </span>
            </div>
          ))}
          {/* <div className="follower">
            <span>
              <FaUserCircle />
            </span>
            <span>Javascript Knowledge</span>
            <span>
              <button
                type="button"
                className="btn btn-sm btn-light home-btn"
                style={{
                  borderRadius: "10px",
                  height: "30px",
                  padding: "0px 5px",
                  width: "60px",
                }}
              >
                follow
              </button>
            </span>
          </div>
          <div className="follower">
            <span>
              <FaUserCircle />
            </span>
            <span>Javascript Knowledge</span>
            <span>
              <button
                type="button"
                className="btn btn-sm btn-light home-btn"
                style={{
                  borderRadius: "10px",
                  height: "30px",
                  padding: "0px 5px",
                  width: "60px",
                }}
              >
                follow
              </button>
            </span>
          </div>
          <div className="follower">
            <span>
              <FaUserCircle />
            </span>
            <span>Javascript Knowledge</span>
            <span>
              <button
                type="button"
                className="btn btn-sm btn-light home-btn"
                style={{
                  borderRadius: "10px",
                  height: "30px",
                  padding: "0px 5px",
                  width: "60px",
                }}
              >
                follow
              </button>
            </span>
          </div>
          <div className="follower">
            <span>
              <FaUserCircle />
            </span>
            <span>Javascript Knowledge</span>
            <span>
              <button
                type="button"
                className="btn btn-sm btn-light home-btn"
                style={{
                  borderRadius: "10px",
                  height: "30px",
                  padding: "0px 5px",
                  width: "60px",
                }}
              >
                follow
              </button>
            </span>
          </div> */}
          <a href="" className="see-more">
            See More..
          </a>
        </div>
      </div>
    </div>
  );
};

export default FollowersPreview;
