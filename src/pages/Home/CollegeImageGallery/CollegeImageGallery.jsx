import React, { useEffect, useState } from "react";
import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Link } from "react-router-dom";

const CollegeImageGallery = () => {
  const [images, setImage] = useState([]);
  console.log(images);
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  useEffect(() => {
    fetch("http://localhost:5000/collegeImageGallery", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data);
      });
  }, []);

  return (
    <div>
      <h1 className="py-3 px-5 border-2 border-blue-500 text-center my-8 rounded-tl-3xl rounded-br-3xl text-3xl font-semibold w-1/3 mx-auto">
        Gallery Section
      </h1>

      <section className="px-4 py-8">
        <div >
          {images.map((re) => (
            <p className="grid gap-4 grid-cols-1  md:grid-cols-3 lg:grid-cols-4">
              {re.img.map((rer) => (
                <img data-aos="zoom-in" className="rounded-md w-4/5 hover:scale-105 transition-transform lg:w-full h-48 lg:h-48  mx-auto" src={rer}alt="" />
              ))}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CollegeImageGallery;
