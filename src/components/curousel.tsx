"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import logo from "../../public/assets/images/testi2.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Card from "./card";

export default function CurouselComponent() {
  const cardData = [
    {
      img: logo,
      desc: "Enrolling here was the best decision. My child thrives in the innovative environment, excelling academically and personally. The focus on modern trends ensures future readiness. ",
      userName: "Jasmine Smith",
    },
    {
      img: logo,
      desc: "This school is exceptional. It offers top-notch education and holistic development. My child gains essential skills and values, and I'm confident about their future here. ",
      userName: "Marco Ciampi",
    },
    {
      img: logo,
      desc: "Enrolling here was the best decision. My child thrives in the innovative environment, excelling academically and personally. The focus on modern trends ensures future readiness. ",
      userName: "Nastya Samantha",
    },
   
  ];
  return (
    <>
      <Swiper
       
        spaceBetween={10}
        loop={true}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          // disableOnInteraction: false,
        }}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
         
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // navigation
        modules={[Pagination,  Navigation,Autoplay]}
        className="mySwiper !py-8 sm:!p-8 sm:!w-5/6"
      >
        {cardData.map((item, index) => {
          return (
            <SwiperSlide key={index} className="flex justify-center">
              <Card img={item.img} desc={item.desc} userName={item.userName} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}