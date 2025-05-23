import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {

  const {pathname} = useLocation();

  return (
    <div className={`navbar shadow-sm ${pathname == '/' ? "bg-[#9538E2] mt-5 rounded-t-xl" : "bg-base-100"}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
            >
              Statistics
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
            >
              About US
            </NavLink>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-2xl">Gadget Heaven</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
            >
              About US
            </NavLink>
        </ul>
      </div>
      <div className="navbar-end flex gap-5">
        <a className="bg-white text-xl text-black p-1 rounded-full">
          <IoCartOutline />
        </a>
        <a className="bg-white text-xl text-black p-1 rounded-full">
          <GiSelfLove />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
