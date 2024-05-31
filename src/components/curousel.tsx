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
      desc: "This school is an absolute delight for our little one in Playgroup! 🌈✨ The vibrant classrooms, filled with colors and laughter, create an ideal learning haven. The caring and dedicated staff make every day an exciting adventure for our child, fostering both growth and joy. From interactive play to creative activities, this school strikes the perfect balance between fun and education. This isn't just a school; it's a magical place where our child is blossoming with happiness and knowledge. Grateful for the wonderful start they've provided! 🍎📚🎉",
      userName: "Bharath Velamuri",
    },
    {
      img: logo,
      desc: "My daughter is in Playgroup. She absolutely loves the school and the staff. Her teachers are a great encouragement and the academic program is great.Not a single day she cribs to attend the school, she is always in a joyous mood to go to school.Thanks to Rena madam for creating such a lively, lovely and beautiful environment for young kids.",
      userName: "Ram Kittu",
    },
    {
      img: logo,
      desc: "My Twins are Studying in Brookside Kondapur … And this the best decision i have made … Wonderful infrastructure and Best faculty … Shaping the students and making them ready to face the world holistically.",
      userName: "Mani Kumar",
    },
    {
      img: logo,
      desc: "One of the top schools in the neighbourhood is Brookside school kondapur. We are happy for our 2 kids because it develops a sense of fun, care and helps us realise our confidence in them. All of the classes are engaging since the teachers help kids properly understand each subject. The sports facilities are fantastic.",
      userName: "Rachana N",
    },
    {
      img: logo,
      desc: "My child is studying Grade2. Education system and teaching staff are excellent. My child communication skills are pretty much improved. Thanks a ton to brookside kondapur.",
      userName: "Sukanya Chenare",
    },
   
  ];
  return (
    <div className="container">
      <Swiper
       
        spaceBetween={30}
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
            spaceBetween: 30,
          },
         
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // navigation
        modules={[Pagination,  Navigation,Autoplay]}
        className="container mySwiper !py-8 sm:!p-8 sm:!w-5/6"
      >
        {cardData.map((item, index) => {
          return (
            <SwiperSlide key={index} className="flex justify-center sm:ml-20">
              <Card img={item.img} desc={item.desc} userName={item.userName} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}