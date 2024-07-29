import { Link } from "react-router-dom";
import { FcPlus, FcHome } from "react-icons/fc";
import { FaDoorOpen } from "react-icons/fa";
import PropTypes from "prop-types";
import SliderTheme from "./SliderTheme";

function Navigation({ logout, name }) {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <SliderTheme />
        </li>
        <li>
          <Link to="/">
            <FcHome />
          </Link>
        </li>
        <li>
          <Link to="/new">
            <FcPlus />
          </Link>
        </li>
        <li>
          {" "}
          <p>{name}</p>
        </li>
        <li>
          <button className="logout-button" onClick={logout}>
            <FaDoorOpen />
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
