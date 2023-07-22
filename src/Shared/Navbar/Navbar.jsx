import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';


const Navbar = () => {
  const navbar = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link>Colleges</Link>
      </li>
      <li>
        <Link>Admission</Link>
      </li>
      <li>
        <Link>My College</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
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
            {" "}
            {navbar}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold">
          College <span className="hidden lg:block">Booking</span>
        </Link>
      </div>
      <div className="form-control lg:-ms-56">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      <div className="navbar-center hidden ms-24 lg:flex">
        <ul className="menu menu-horizontal  px-1"> {navbar}</ul>
      </div>

      <div className="navbar-end">
      <Link to="/login"><AwesomeButton className="px-6"  size="small"   type="primary">Login</AwesomeButton></Link>
     
      </div>
    </div>
  );
};

export default Navbar;
