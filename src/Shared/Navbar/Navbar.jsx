import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { useState } from "react";
import "./Navbar.css";
import axios from "axios";

const Navbar = () => {
  const [college, setCollege] = useState([]);
  const [search, setSearch] = useState("");
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  console.log(college);
  const handleSearch = (event) => {
    event.preventDefault();
    const search = event.target.search.value;
    if (search.trim() === "") {
      toast.error("Please Input Something!");
      return;
    }

    fetch(`http://localhost:5000/collegeSearchByName/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setCollege(data);
        setShowAutocomplete(data.length > 0); // Show the autocomplete only if there are search results
      })
      .catch((error) => console.log(error));
  };

  const navbar = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/colleges">Colleges</Link> {/* Add proper 'to' attribute */}
      </li>
      <li>
        <Link to="/admission">Admission</Link> {/* Add proper 'to' attribute */}
      </li>
      <li>
        <Link to="/mycollege">My College</Link>{" "}
        {/* Add proper 'to' attribute */}
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 -py-2 ">
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
            {navbar}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold">
          College <span className="hidden lg:block">Booking</span>
        </Link>
      </div>
      <div className="form-control lg:-ms-56">
        <div>
          <div className="form-control ms-12">
           
          </div>
        </div>
        <div></div>
      </div>
      <div className="navbar-center hidden ms-10 lg:flex">
        <ul className="menu menu-horizontal px-1">{navbar}</ul>
      </div>

      <div className="navbar-end">
        <Link to="/login">
          <AwesomeButton className="px-6" size="small" type="primary">
            Login
          </AwesomeButton>
        </Link>
      </div>

      {/* Display search results */}
      {/* <div>
        {results.length > 0 ? (
          <ul>
            {results.map((college) => (
              <li key={college._id}>{college.name}</li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div> */}
    </div>
  );
};

export default Navbar;
