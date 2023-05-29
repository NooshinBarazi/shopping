import logo from "../../../assets/images/logo.png";
import user from "../../../assets/images/User.png";
import bag from "../../../assets/images/Bag_alt.png";
import "./header.css";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="topHeader">
      <div>
        <input type="search" placeholder="search" className="serchInput" />
      </div>
      <Link to="/">
        <div>
          <a name="top">
            <img src={logo} className="logoImg" />
          </a>
        </div>
      </Link>
      <div className="icons">
        <Link to="/signup">
          <div className="userIcon">
            <img src={user} className="iconImg" />
            <p>Account</p>
          </div>
        </Link>
        <Link to="/cart">
          <div className="userIcon">
            <img src={bag} className="iconImg" />
            <p>Shopping</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
