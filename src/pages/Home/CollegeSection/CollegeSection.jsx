import React, { useEffect, useState } from "react";

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
  console.log(colleges); // Use 'colleges' instead of 'object'

  return (
    <div className="flex justify-around gap-11 px-8 my-20">
      {colleges.map((college) => (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={college?.college_image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{college?.college_name}</h2>
            <p className="font-semibold text-gray-600">
              {" "}
              Admission Dates: {college?.admission_dates?.fall}
            </p>
            <p className="font-semibold text-gray-600">
              {" "}
              Admission Last Date: {college?.admission_dates?.spring}
            </p>
            <div>
              <p className="font-semibold font-mono">Events:</p>
              {college?.events.map((events) => (
                <div>
                  <p className="bg-green-500 italic text-white my-3">{events}</p>
                </div>
              ))}
            </div>
            <div>
              <p ><span className="font-mono font-semibold">History</span>: <span className="font-sans">{college?.research_history}</span> </p>
            </div>
            <div className="flex justify-center"><span className="me-4 font-semibold font-mono">Sports:</span>{college?.sports.map(sport => <p className="font-mono">{sport}</p>)}</div>
            <div className="card-actions justify-end">
              <button className="btn btn-block btn-primary">Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollegeSection;
