import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { suggestionContext } from "../store/suggestion-post-store";

const ForYou = () => {
  const {
    similarInterestPeople,
    similarTechnologyPeople,
    similarCareerPeople,
    similarCollagePeople,
  } = useContext(suggestionContext);
  return (
    <div className="for-you">
      <div className="card" style={{ width: "20rem", height: "40rem" }}>
        <div className="card-body">
          <div className="similar-interest">
            <h6 className="header-you">Similar Interest</h6>
            {similarInterestPeople.map((follower) => (
              <div className="follower">
                <span>
                  <FaUserCircle />
                </span>
                <span className="follower-name">{follower}</span>
                <span>
                  <button
                    type="button"
                    className="btn btn-sm btn-light follow-btn"
                    style={{
                      borderRadius: "10px",
                      height: "30px",
                      width: "60px",
                    }}
                  >
                    follow
                  </button>
                </span>
              </div>
            ))}
          </div>
          <div className="technology-suggestion">
            <h6 className="header-you">Technology You Might Right</h6>
            {similarTechnologyPeople.map((follower) => (
              <div className="follower">
                <span>
                  <FaUserCircle />
                </span>
                <span className="follower-name">{follower}</span>
                <span>
                  <button
                    type="button"
                    className="btn btn-sm btn-light follow-btn"
                    style={{
                      borderRadius: "10px",
                      height: "30px",
                      width: "60px",
                    }}
                  >
                    follow
                  </button>
                </span>
              </div>
            ))}
          </div>
          <div className="similar-career">
            <h6 className="header-you">Similar Career</h6>
            {similarCareerPeople.map((follower) => (
              <div className="follower">
                <span>
                  <FaUserCircle />
                </span>
                <span className="follower-name">{follower}</span>
                <span>
                  <button
                    type="button"
                    className="btn btn-sm btn-light follow-btn"
                    style={{
                      borderRadius: "10px",
                      height: "30px",
                      width: "60px",
                    }}
                  >
                    follow
                  </button>
                </span>
              </div>
            ))}
          </div>
          <div className="similar-collage">
            <h6 className="header-you">Similar Collage</h6>
            {similarCollagePeople.map((follower) => (
              <div className="follower">
                <span>
                  <FaUserCircle />
                </span>
                <span className="follower-name">{follower}</span>
                <span>
                  <button
                    type="button"
                    className="btn btn-sm btn-light follow-btn"
                    style={{
                      borderRadius: "10px",
                      height: "30px",
                      width: "60px",
                    }}
                  >
                    follow
                  </button>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForYou;
