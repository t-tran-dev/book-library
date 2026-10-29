import { Link, NavLink } from "react-router-dom";
import { useFavorites } from "../features/favorites";
import { paths } from "../routes";

export const Header = () => {
  const { favorites } = useFavorites();
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
                Favorites{" "}
                <span className="mainnav-number">{favorites.length}</span>
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
