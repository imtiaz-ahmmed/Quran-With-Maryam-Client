import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Log Out Successful!",
      showConfirmButton: false,
      timer: 1500,
    }).catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-base text-blue-600 font-bold"
              : "text-base text-[#111827] font-sans font-semibold"
          }
        >
          QWM Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/quran"
          className={({ isActive }) =>
            isActive
              ? "text-base text-blue-600 font-bold"
              : "text-base text-[#111827] font-sans font-semibold"
          }
        >
          Quran
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dua"
          className={({ isActive }) =>
            isActive
              ? "text-base text-blue-600 font-bold"
              : "text-base text-[#111827] font-sans font-semibold"
          }
        >
          Dua
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive }) =>
            isActive
              ? "text-base text-blue-600 font-bold"
              : "text-base text-[#111827] hover:font-semibold"
          }
        >
          Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          className={({ isActive }) =>
            isActive
              ? "text-base text-blue-600 font-bold"
              : "text-base text-[#111827] hover:font-semibold"
          }
        >
          Instructors
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-base text-blue-600 font-bold"
                : "text-base text-[#111827] hover:font-semibold"
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/features"
          className={({ isActive }) =>
            isActive
              ? "text-base text-blue-600 font-bold"
              : "text-base text-[#111827] hover:font-semibold"
          }
        >
          Features
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive
              ? "text-base text-blue-600 font-bold"
              : "text-base text-[#111827] hover:font-semibold"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-base text-blue-600 font-bold"
              : "text-base text-[#111827] hover:font-semibold"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-[#f7f6f6] shadow-cyan-400 bg-gradient-to-r from-[#edf5ff] to-[#d7ebff]">
      <div className="navbar-start">
        <div className="dropdown ml-40">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <img className="w-48" src={logo} alt="QWM Logo" />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-2 gap-1">{navOptions}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4 mr-40">
            <div
              className="tooltip tooltip-bottom"
              data-tip={user.displayName || "User"}
            >
              <img
                className="h-12 w-12 lg:h-14 lg:w-14 rounded-full object-cover"
                src={
                  user.photoURL
                    ? user.photoURL
                    : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80"
                }
                alt="User Profile"
              />
            </div>
            <button
              onClick={handleLogOut}
              className="btn text-white bg-sky-600 hover:bg-sky-400 p-2 rounded-lg border-none"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-4 mr-40">
            <Link
              to="/login"
              className="btn btn-neutral btn-outline rounded-lg"
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="btn btn-neutral rounded-lg bg-gradient-to-r from-[#04a6f6] to-[#53ed83]"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
