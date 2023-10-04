import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink className="text-xl font-medium text-[#706F6F]" to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-xl font-medium text-[#706F6F]" to={"/about"}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="text-xl font-medium text-[#706F6F]" to={"/career"}>
          Career
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="mx-[4.5rem]">
      <div className="navbar bg-base-100 my-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              onClick={handleSignOut}
              className="bg-[#403F3F] text-white text-xl font-medium px-5 py-3 rounded-lg"
            >
              Sign Out
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="bg-[#403F3F] text-white text-xl font-medium px-5 py-3 rounded-lg">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
