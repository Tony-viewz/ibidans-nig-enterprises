import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {hero_slide_data.map((item, index) => {
          const { image, heading, info } = item;
          return (
            <SwiperSlide>
              <div className="p-5 flex flex-col-reverse gap-20 md:flex-row-reverse items-center pt-20">
                <div className=" text-center md:text-left">
                  <p>{info}</p>
                  <h1>{heading}</h1>
                  <button className="py-1 px-3 mt-3">Get Started</button>
                </div>
                <div className="max-w-[400px]">
                  <img src={image} alt={info} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Hero;

const hero_slide_data = [
  {
    image: "./provisions.png",
    heading: "Your Daily Need Products",
    info: "Fresh And Organic",
  },
  {
    image: "./office-equipment.png",
    heading: "Office Essentials",
    info: "Boost Productivity in Style",
  },
  {
    image: "./building-tools.png",
    heading: "Quality Building Tools",
    info: "For Your Construction Needs",
  },
  {
    image: "./welding-tools.png",
    heading: "Professional Welding Tools",
    info: "Precision and Durability",
  },
];
