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
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div>
       <h1 className="py-3 px-5 border-2 border-blue-500 text-center my-8 rounded-tl-3xl rounded-br-3xl text-3xl font-semibold w-1/3 mx-auto">Gallery Section</h1>

<div className="flex  mx-auto">
      
      <div className="flex justify-center">
        <div className="w-1/2">
          <div className="App">
            <LightGallery
              onInit={onInit}
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
            >
              <a href="https://i.ibb.co/HdPXmYW/group-colleagues-with-diploma.jpg">
                <img
                width={600} className="border-white hover:scale-105 transition-transform border-4"
                  alt="img1"
                  src="https://i.ibb.co/HdPXmYW/group-colleagues-with-diploma.jpg"
                />
              </a>
              <a href="https://i.ibb.co/z2hK5W7/low-angle-graduated-students-1.jpg">
                <img
                width={600}
                className="border-white hover:scale-105 transition-transform border-4"
                  alt="img2"
                  src="https://i.ibb.co/C9FbWPM/low-angle-graduated-students.jpg"
                />
              </a>
   
            </LightGallery>
          </div>
        </div>
        <div className="w-1/3">
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            <a href="https://i.ibb.co/Jz8Rngv/group-students-taking-selfie.jpg">
              <img
              className="border-white hover:scale-105 transition-transform border-4"
                alt="img1"
                src="https://i.ibb.co/Jz8Rngv/group-students-taking-selfie.jpg"
              />
            </a>
            <a href="https://i.ibb.co/qjbT8Vs/group-diverse-grads-throwing-caps-up-sky.jpg">
              <img
              className="border-white hover:scale-105 transition-transform border-4"
                alt="img2"
                src="https://i.ibb.co/qjbT8Vs/group-diverse-grads-throwing-caps-up-sky.jpg"
              />
            </a>
            <a href="https://i.ibb.co/fNfJybq/medium-shot-colleagues-posing-together.jpg">
              <img
             
              className="border-white hover:scale-105 transition-transform border-4"
                alt="img2"
                src="https://i.ibb.co/fNfJybq/medium-shot-colleagues-posing-together.jpg"
              />
            </a>
       
          </LightGallery>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default CollegeImageGallery;
