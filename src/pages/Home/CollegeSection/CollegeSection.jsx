import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowCircleRight } from "react-icons/hi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CollegeSection = () => {
  const [colleges, setColleges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://college-server-kappa.vercel.app//collegeSection", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="py-3 px-5 border-2 border-blue-500 text-center mt-20 rounded-tl-3xl rounded-br-3xl text-3xl font-semibold w-1/3 mx-auto">
        College Section
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 my-20 ">
        {isLoading
          ? // Show skeleton while data is loading
            Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <Skeleton height={200} />
                <div className="p-6">
                  <div className="flex gap-3 m-0">
                    <Skeleton width={80} />
                    <Skeleton width={80} />
                  </div>
                  <Skeleton height={30} width={150} />
                  <div>
                    <p className="font-semibold font-mono text-gray-600">
                      {/* Events: */}
                    </p>
                    <div className="mt-1">
                      <Skeleton width={100} />
                    </div>
                  </div>
                  <div className="flex gap-16 justify-between">
                    <div className="mt-4 w-1/2">
                      <p className="text-base">
                        {/* <span className="font-mono font-semibold text-gray-700">
                          History
                        </span> */}
                        <br />
                        <Skeleton height={60} />
                      </p>
                    </div>
                    <div className=" mt-4 w-1/2">
                      <span className="me-4 font-semibold  text-gray-700">
                        {/* Sports */}
                      </span>
                      <br />
                      <Skeleton width={150} />
                      <Skeleton width={120} />
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <Skeleton width={100} height={40} />
                  </div>
                </div>
              </div>
            ))
          : // Show the college data once it's loaded
            colleges.map((college) => (
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
                    <p className="font-semibold font-mono text-gray-600">
                      Events:
                    </p>
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
