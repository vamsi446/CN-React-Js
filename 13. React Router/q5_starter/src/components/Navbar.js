import { NavLink, Outlet } from "react-router-dom";

export const Navbar = () => {

  const activeStyle = {
    border: '2px solid #fff',
    backgroundColor: '#e1d1f976'
  };
  return (
    <div>
      <div className="navbar">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
          alt="logo"
          onClick={() => window.location.replace("/")}
        />

        <nav>
          {/* use NavLink inplace of Link to set the style to the active links */}
          <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="/">Home</NavLink>
      <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="/list">List</NavLink>
      <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="/contact">Contact</NavLink>
    </nav>
      </div>
      <Outlet />
    </div>
  );
};
