import React, { useCallback, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import Container from "../../../Shared/Container/Container";
import { photos } from "../../../assets/Image";

const CollegeImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  // const [images, setImage] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/collegeImageGallery", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setImage(data);
  //     });
  // }, []);

  return (
    <Container>
      <div>
        <h1 className="py-3 px-5 border-2 border-blue-500 text-center my-8 rounded-tl-3xl rounded-br-3xl text-3xl font-semibold w-1/3 mx-auto">
          {" "}
          Gallery Section
        </h1>
        <div data-aos="zoom-in-left">
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </div>
    </Container>
  );
};

export default CollegeImageGallery;
