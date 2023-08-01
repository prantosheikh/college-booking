import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowCircleRight } from "react-icons/hi";

const CollegeSection = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/collegeSection", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  }, []);

  return (
    <div>
      <h1 className="py-3 px-5 border-2 border-blue-500 text-center mt-20 rounded-tl-3xl rounded-br-3xl text-3xl font-semibold w-1/3 mx-auto">
        College Section
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 my-20 ">
        {colleges.map((college) => (
          <div
            key={college?._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={college?.college_image}
              alt="College"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex gap-3 m-0">
                <p className="text-sm font-semibold text-gray-600 ">
                  {college?.admission_dates?.fall}
                </p>
                <p className="text-sm font-semibold text-gray-600 ">
                  {college?.admission_dates?.spring}
                </p>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {college?.college_name}
              </h2>

              <div>
                <p className="font-semibold font-mono text-gray-600">Events:</p>

                <div className="mt-1">
                  <p className="flex  text-gray-600  font-semibold">
                    {college?.event}
                  </p>
                </div>
              </div>
              <div className="flex gap-16 justify-between">
                <div className="mt-4 w-1/2">
                  <p className="text-base">
                    <span className="font-mono font-semibold text-gray-700">
                      History
                    </span>
                    <br />
                    <span className=" text-sm text-gray-800">
                      {college?.research_history}
                    </span>{" "}
                  </p>
                </div>
                <div className=" mt-4 w-1/2">
                  <span className="me-4 font-semibold  text-gray-700">
                    Sports
                  </span>
                  <br />
                  <div className="flex flex-wrap text-sm">
                    {college?.sports.map((sport, index) => (
                      <p
                        key={index}
                        className="text-sm  mr-2 mb-2 text-gray-800"
                      >
                        {sport}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Link to={`/college-details/${college?._id}`}>
                  <HiArrowCircleRight className="text-4xl text-blue-400 hover:text-blue-500">
                    Details
                  </HiArrowCircleRight>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeSection;
