import { FcReadingEbook } from "react-icons/fc";
import { MdHome } from "react-icons/md";
import { BsColumnsGap } from "react-icons/bs";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";

const Header = () => {
  return (
    <div className="header">
      <div className="icon">
        <FcReadingEbook />
      </div>
      <form className="d-flex search">
        <input
          className="form-control me-2 search-input"
          type="search"
          placeholder="#Explore"
          aria-label="Search"
        />
      </form>
      <div className="right-header-section">
        <button
          type="button"
          className="btn btn-sm btn-light home-btn"
          style={{ borderRadius: "10px", height: "30px", backgroundColor:"transparent", color:"white" , borderColor:"purple"}}
        >
          <MdHome />
          Home
        </button>
        <span className="icon-right">
          <BiSolidMessageRoundedDots />
        </span>
        <span className="icon-right">
          <IoNotifications />
        </span>
        <span className="icon-right">
          <BsColumnsGap />
        </span>
      </div>
    </div>
  );
};

export default Header;
