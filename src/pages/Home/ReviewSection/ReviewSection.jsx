import React, { useEffect, useState } from "react";
// Import Swiper React components
import { FaRegStar, FaStar } from "react-icons/fa";
import { HiArrowCircleRight } from "react-icons/hi";
import Rating from "react-rating";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ReviewSection";
// import required modules
import {
  Keyboard,
  Navigation,
  Pagination
} from "swiper/modules";
import Container from "../../../Shared/Container/Container";
const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  // const [review, setReview] = useState([]);
  // console.log(reviews);
  useEffect(() => {
    fetch("https://college-server-kappa.vercel.app/review", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <Container>
      <h1 className="py-3 px-5 border-2 border-blue-500 text-center my-8 rounded-tl-3xl rounded-br-3xl text-3xl font-semibold w-1/3 mx-auto">
        {" "}
        Review Section
      </h1>
      {reviews?.map((review) => (
        <p key={review._id}></p>
      ))}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        keyboard={{
          enabled: true,
        }}
        
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper  my-20"
      >
        {reviews?.map((review, i) => (
          <SwiperSlide key={i}>
            {/* {console.log(review)} */}
            <p className="text-center my-8 text-xl font-semibold">
              {review.college_name}
            </p>
            <div className="flex px-16 gap-5 items-center">
              {review?.reviews?.map((revie,ii) => (
                <div data-aos="zoom-in-left" key={ii} className="bg-white rounded-lg shadow-md p-6 max-w-sm w-full mx-auto">
                  {/* {console.log(revie)} */}
                  <div className="flex items-center mb-4">
                    <img
                      className="w-10 h-10 rounded-full mr-4"
                      src={revie?.reviewer_img}
                    />
                    <div>
                      <h2 className="text-xl font-bold">
                        {revie?.reviewer_name}
                      </h2>
                      <p className="text-gray-500">Rating: {revie?.ratting}</p>
                      <span className="text-lg font-semibold">
                    <Rating
                      placeholderRating={revie?.ratting}
                      emptySymbol={
                        <FaRegStar className="text-blue-500"></FaRegStar>
                      }
                      placeholderSymbol={
                        <FaStar className="text-orange-500"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                      readonly
                    />
                  </span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4"> {revie?.review_content}</p>
                  <div className="flex justify-end">
                    <HiArrowCircleRight className="text-4xl text-blue-500">
                      
                    </HiArrowCircleRight>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ReviewSection;
