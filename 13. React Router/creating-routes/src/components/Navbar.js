import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "blue" } : { color: undefined }
              }
              to="/"
              className="navbar-link"
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "blue" } : { color: undefined }
              }
              to="/items"
              className="navbar-link"
            >
              Items
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "blue" } : { color: undefined }
              }
              to="/about"
              className="navbar-link"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
