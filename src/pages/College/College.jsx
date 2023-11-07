import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { BiTime } from 'react-icons/bi';
import { HiArrowCircleRight } from "react-icons/hi";
import { MdOutlineEmojiEvents, MdSportsFootball } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import PageHeader from '../../Components/PageHeader/PageHeader';
import Container from "../../Shared/Container/Container";

AOS.init();

const College = () => {
  const [colleges, setColleges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/colleges", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setColleges(data);
      });
  }, []);

  useEffect(() => {
    // Perform some action when isLoading or colleges change
    if (isLoading) {
      console.log("Data is currently loading...");
    } else {
      console.log("Data has finished loading.");
    }

    if (colleges.length === 0) {
      console.log("No colleges found.");
    } else {
      console.log("Colleges data:", colleges);
    }

    // Additional logic or actions can be added here.
  }, [isLoading, colleges]);

  return (
    <div>
      <PageHeader
        title="all available college"
        backgroundImage="https://raw.githubusercontent.com/uiaextend/jtutorgo/main/courses-list/breadcrumb-bg-2.jpg"
      />
      <Container> 
      <div
       
       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 space-y-8 md:space-y-0"
     >
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
            console.log(college),
            <div className="">
               <div
               key={college?._id}
               className="bg-white shadow-lg rounded-lg overflow-hidden"
               data-aos="zoom-in-left"
               data-aos-duration="500"
             >
               <img
                 src={college?.college_image}
                 alt="College"
                 className="w-full h-48 object-cover"
               />
               <div className="p-6">
                <div className="flex items-center gap-5">
                <div className="flex items-center gap-1">
                  <MdOutlineEmojiEvents className="text-2xl text-blue-400"/> <span className="text-lg text-blue-400">{college.events.length}</span>
                 </div>
                <div className="flex items-center gap-1">
                  <MdSportsFootball className="text-2xl text-blue-400"/> <span className="text-lg text-blue-400">{college.sports.length}</span> 
                 </div>
                </div>
                 <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                   {college?.collegeName}
                 </h2>
               

               <div className="border border-blue-400 rounded-md my-4">

               </div>

                 <div className="flex gap-3 items-center m-0">
                  <BiTime/>
                   <p className="text-sm font-semibold text-gray-600 ">
                     {college?.admission_dates?.fall}
                   </p>
                   <p className="text-sm font-semibold text-gray-600 ">
                     {college?.admission_dates?.spring}
                   </p>
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
            </div>
           ))}
     </div>
      </Container>
    </div>
  );
};

export default College;
