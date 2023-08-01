import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CollegeDetails = () => {
  const { id } = useParams();
  const [college, setCollege] = useState([]);
  console.log(college.events);
  useEffect(() => {
    fetch(`http://localhost:5000/college-details/${id}`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setCollege(data);
      });
  }, []);

  return (
    <div className="">
      
      <div className="card w-full py-10 my-10  lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="lg:w-4/6 rounded-xl"
            src={college?.college_image}
            alt="Album"
          />
        </figure>
        <div className="card-body lg:w-4/6">
          <h2 className="card-title text-3xl my-3"> {college?.college_name} </h2>
          <div className="flex">
            <div className="w-1/2">
              <p>
                <span className="font-semibold">Application Deadline:</span>{" "}
                {college?.admission_process?.applicationDeadline}
              </p>
              <p>
                <span className="font-semibold">Entrance Exam:</span>{" "}
                {college?.admission_process?.entranceExam}
              </p>
              <p>
                <span className="font-semibold">Selection Criteria:</span>{" "}
                {college?.admission_process?.selectionCriteria}
              </p>
            </div>

            <div className="w-1/2 ms-20">
              <h3 className="text-xl font-semibold">Admission Process</h3>
              {college?.admission_process?.documentsRequired.map(
                (documentsRequired, index) => (
                  <span key={documentsRequired}>
                    {documentsRequired}
                    {index !==
                    college?.admission_process.documentsRequired.length - 1
                      ? ", "
                      : ""}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="flex gap-16 mt-4">
            <div>
              <p className="text-xl font-semibold">Events:</p>
              {college?.events?.map(p => <p>{p}</p>)}
            </div>
            <div>
            <p className="text-xl font-semibold">Sports:</p>
              {college?.sports?.map(e => <p>{e}</p>)}
            </div>
          </div>
          <h2 className="text-xl font-semibold">Research History</h2>
          <p>{college.research_history}</p>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
