import { Link, NavLink } from "react-router-dom";
import { paths } from "../routes";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="column">
            <Link to={paths.books} className="logo">
              Book Library
            </Link>
          </div>

          <div className="column">
            <nav className="mainnav">
              <NavLink
                to={paths.books}
                end
                className={({ isActive }) =>
                  `mainnav-link${isActive ? " mainnav-link--active" : ""}`
                }
              >
                Books
              </NavLink>

              <NavLink
                to={paths.favorites}
                className={({ isActive }) =>
                  `mainnav-link${isActive ? " mainnav-link--active" : ""}`
                }
              >
                Favorites <span className="mainnav-number">2</span>
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
