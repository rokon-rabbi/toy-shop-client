import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../src/assets/Logo.png";

import { FaSignInAlt } from "react-icons/fa";

import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const [icon, setIcon] = useState(true);
  const { user, logOut } = useContext(AuthContext);
  if (user !== null) {
    console.log("user");
    console.log(user);
  }
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error));
  };
  return (
    <>
      <nav className="md:flex bg-cyan-50 sticky z-50 top-0  p-6 md:px-20 md:justify-between   items-center ">
        {icon ? (
          <FontAwesomeIcon
            className="text-3xl  md:hidden inline  relative top-11 justify-start "
            onClick={() => setIcon(!icon)}
            icon={faBars}
          />
        ) : (
          <FontAwesomeIcon
            className="text-4xl  md:hidden inline  relative top-11 justify-start "
            onClick={() => setIcon(!icon)}
            icon={faXmark}
          />
        )}

        <Link
          to={"/"}
          aria-label="Toytopia"
          title="Toytopia"
          className="flex justify-center"
        >
          <img
            className="w-28 md:w-24 lg:w-44"
            src={Logo}
            alt="toytopia logo"
          />
        </Link>
        <ul
          className={`bg-white md:bg-cyan-50 shadow-2xl md:shadow-none md:mr-72 md:border-none border z-10  rounded-r-md px-6 py-4 md:space-x-10 md:flex md:static md:text-md  absolute  md:bg-none text-slate-950 duration-300 ${
            !icon ? "left-0 p-2" : "-left-40 "
          } `}
        >
          <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/alltoys"
              aria-label="Blog"
              title="Blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              All Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              aria-label="Blog"
              title="Blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
        </ul>

        {/* <p>{user.displayName}</p> */}
        {user ? (
          <div className="flex items-center  gap-5">
            <div className="hidden md:block">
              <div className="  hover:cursor-pointer rounded-full overflow-hidden">
                <img
                  className="md:w-14 md:h-14"
                  src={user.photoURL}
                  alt="Profile"
                  title={user.displayName}
                />
              </div>
            </div>
            {/* button  */}
            <button
              onClick={handleLogOut}
              className="hidden md:block text-slate-600  hover:text-sky-600 font-bold md:text-lg  "
            >
              logout
              <FaSignInAlt className="inline ml-1 mb-1 font-bold" />
            </button>
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="hidden md:block  text-slate-600  hover:text-sky-600 font-bold md:text-lg ">
              <FaSignInAlt className="inline mr-1 mb-1 font-bold" />
              login
            </button>
          </Link>
        )}

        <div className="flex right-5 relative md:hidden ">
          {user ? (
            <div className="flex items-center gap-5">
              <div className="">
                <div className=" left-72 bottom-5  absolute hover:cursor-pointer rounded-full overflow-hidden ">
                  <img
                    className=" h-7 w-7"
                    src={user.photoURL}
                    alt="Profile"
                    title={user.displayName}
                  />
                </div>
                <button
                  onClick={handleLogOut}
                  className=" left-80 ml-2  text-slate-600  hover:text-sky-600  relative md:w-100 w-auto bottom-6 font-medium text-xs md:text-lg   p-1 "
                >
                  logout
                  <FaSignInAlt className="inline ml-1 font-bold" />
                </button>
              </div>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className=" left-72  text-slate-600  hover:text-sky-600   ml-auto relative md:w-100 w-20 bottom-6 font-medium text-sm md:md:text-lg   p-1 ">
                <FaSignInAlt className="inline mr-1 font-bold" />
                login
              </button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
