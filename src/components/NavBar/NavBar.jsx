import { Link } from "react-router-dom";
//linear-gradient(90deg, #edf5ff, #dfefff 63%, #d7ebff);
const NavBar = () => {

  const navOptions = (
    <>
      <li>
        <Link className="text-lg text-[#111827] font-sans font-bold" to="/">
          QWM Home
        </Link>
      </li>
      <li>
        <Link className="text-base text-[#111827] hover:font-bold" to="/">
          Quran
        </Link>
      </li>
      <li>
        <Link className="text-base text-[#111827] hover:font-bold" to="/">
          Dua
        </Link>
      </li>
      <li>
        <Link className="text-base text-[#111827] hover:font-bold" to="/">
          Scheduler
        </Link>
      </li>
      <li>
        <Link className="text-base text-[#111827] hover:font-bold" to="/">
         Features
        </Link>
      </li>
      <li>
        <Link className="text-base text-[#111827] hover:font-bold" to="/">
        About Us
        </Link>
      </li>
      

    </>
  );

  return (
    <div className="navbar fixed z-10 bg-[#f7f6f6] shadow-sm bg-gradient-to-r from-[#edf5ff] to-[#d7ebff]">
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
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <h1 className="ml-20 font-mono text-3xl font-bold text-[#111827]">Quran With Myram</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-2 gap-6">
          {navOptions}
        </ul>
      </div>
      <div class="navbar-end">
        <div class="flex gap-4 mr-40">
          <button class="btn btn-neutral btn-outline rounded-lg">Log in</button>
          <button class="btn btn-neutral rounded-lg bg-gradient-to-r from-[#04a6f6] to-[#53ed83]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
