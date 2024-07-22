import { Link } from "react-router-dom";
import { FcPlus, FcHome } from "react-icons/fc";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
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
      </ul>
    </nav>
  );
}

export default Navigation;
