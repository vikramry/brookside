import Header from "@/components/header";
import React from "react";
import Image from "next/image";
import b1 from "../../public/assets/images/b1.png";
import b2 from "../../public/assets/images/b2.png";
import b3 from "../../public/assets/images/b3.png";
import curve from "../../public/assets/images/curve.png";
import { FaCirclePlay } from "react-icons/fa6";
import goldShield from "../../public/assets/images/goldShield.png";
import greyShield from "../../public/assets/images/greyShield.png";
import AdmissionEnquiryForm from "@/components/admissionEnquiryForm";
import CurouselComponent from "@/components/curousel";
import decorImg from "../../public/assets/images/pagedecor.png";
import Card2 from "@/components/card2";
import allMix from "../../public/assets/images/allMix.png";
import { FaArrowRight } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import k1 from "../../public/assets/images/k1.png";
import k2 from "../../public/assets/images/k2.png";
import k3 from "../../public/assets/images/k3.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import ContactSection from "@/components/AcademicsComponents/ContactSection";
import type { Metadata } from "next";
import mainBanner from '../../public/assets/images/mainBanner.png'
import whyChooseImg from '../../public/assets/images/WhyChoseus.png'

export const metadata: Metadata = {
  title: "Best Primary School in Kondapur, Hyderabad",
  description:
    "Welcome to Brookside Global School, where young minds bloom! We are the Best Primary School in Kondapur, Hyderabad. Join us on an exciting educational journey tailored to inspire and empower our students for a lifetime of success.",
  keywords:
    "Best Primary School in Kondapur - Hyderabad, Best Primary School in Hyderabad, Best Pre Primary Schools in Hyderabad'",
};

export default function Home() {
  const data = [
    {
      image: goldShield,
      title: "Equips students for evolving global challenges.",
      color: "grey",
    },
    {
      image: greyShield,
      title: "Instills confidence for independent decision-making.",
      color: "gold",
    },
    {
      image: goldShield,
      title: "Cultivates innate potential in students.",
      color: "grey",
    },
    {
      image: greyShield,
      title: "Enables excellence in chosen paths.",
      color: "gold",
    },
    {
      image: goldShield,
      title: "Embraces a holistic approach to education.",
      color: "grey",
    },
    {
      image: greyShield,
      title: "Fosters values in thoughtful individuals.",
      color: "gold",
    },
  ];
//   Art and Craft Zone
// Language lab experience
// STEAM (Science, Technology, Engineering, Arts and Mathematics) corner 
// Dance and Drama studio
// Day care center
// Role Play area 
// Play Area 
// Transportation facility
// AV Room
// Comprehensive curriculum
// Experienced and caring faculty
// Library
// Affordable fee structure
// Exciting Summer Camps at Kondapu


  const whyChooseData = [
    {
      image: goldShield,
      title: "Art and Craft Zone",
      color: "grey",
    },
    {
      image: goldShield,
      title: "Language lab experience",
      color: "grey",
    },
    {
      image: goldShield,
      title: "STEAM (Science, Technology, Engineering, Arts and Mathematics) corner",
      color: "grey",
    },
    {
      image: goldShield,
      title: "Dance and Drama studio",
      color: "grey",
    },
    {
      image: goldShield,
      title: "Day care center",
      color: "grey",
    },
    {
      image: goldShield,
      title: "Role Play area ",
      color: "grey",
    },
    {
      image: goldShield,
      title: "Transportation facility",
      color: "grey",
    },
    {
      image: goldShield,
      title: "AV Room",
      color: "grey",
    },
    {
      image: goldShield,
      title: "Comprehensive curriculum",
      color: "grey",
    },
    {
      image: goldShield,
      title: "Experienced and caring faculty",
      color: "grey",
    },
    {
      image: goldShield,
      title: "Library",
      color: "grey",
    },
    {
      image: goldShield,
      title: "Affordable fee structure",
      color: "grey",
    },
    {
      image: goldShield,
      title: "Exciting Summer Camps at Kondapur",
      color: "grey",
    },

  ]

  return (
    <main className="font-playfair flex container-fluid min-h-screen bg-white w-full max-w-full flex-col items-center justify-between lg:w-full ">
      <div className="w-full bg-white">
        {/* /assets/images/mainbg1.jpg */}
        <div
          className="w-full flex items-center sm:!h-auto sm:!p-4 sm:!hidden"
          style={{
            // backgroundImage: `url('/assets/images/schoolbnr.png')`,
            padding: "40px",
            background:'#2f2a4e',

            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            height: "70vh",
          }}
        >
          <div className=" flex justify-between items-center">
            <div className="w-1/2 flex flex-col gap-8 h-4/5 pl-12 sm:gap-0 sm:pl-0 ">
              <div className="flex gap-4 sm:gap-0">
               
                <h1 className="text-6xl sm:text-xl text-white " style={{lineHeight:'4.5rem'}}>
                  Discover the<br/>
                  <span  className='bg-orMain text-black  '>Top Primary School</span><br/>
                  in Kondapur, Hyderabad!
                </h1>
              </div>
              <span className="text-md w-full sm:text-xs sm:w-full text-white">
                At Brookside, we believe that every child is unique and full of
                ability. Our dedicated and passionate teachers build a nurturing
                and holistic environment in which curiosity thrives and learning
                becomes an exciting adventure. Our primary school is located at
                Kondapur, Hyderabad. We believe in both traditional values and
                modern educational practices.
              </span>
              <div className="flex gap-4 sm:gap-2">
                <button className="bg-orMain text-black px-4 py-2 rounded text-xs font-bold sm:w-16 sm:h-10 sm:mt-2 sm:px-2 sm:py-0">
                  <a href="/about">LEARN MORE</a>
                </button>
                {/* <a href="/gallery">
                  <button className="bg-transparent hover:bg-dGrey text-dGrey font-semibold hover:text-white py-2 px-4 border border-dGrey hover:border-transparent rounded flex items-center gap-2 sm:px-2 sm:py-2 sm:mt-2">
                    <FaCirclePlay className="hover:text-white hover:fill-white" />
                    <span>Video</span>
                  </button>
                </a> */}
              </div>
            </div>
            <div className="w-1/2 flex justify-end">
                <Image src={mainBanner} alt="mainBanner" className="w-auto h-[30rem]"/> 
            </div>
          </div>
        </div>

        <div
          className="md:hidden"
          style={{
            backgroundImage: `url('/assets/images/mobilebg.png')`,
            padding: "40px",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            height: "70vh",
          }}
        >
          <div className="w-full flex flex-col gap-8 h-4/5 pl-12 sm:gap-0 sm:pl-0 ">
            <div className="flex gap-4 sm:gap-2">
              <span className="font-playfair text-7xl font-bold sm:text-4xl">
                We are the
              </span>
              <span className="flex flex-col ">
                <span className="font-playfair text-7xl font-bold text-orMain sm:text-4xl ">
                  future
                </span>
                {/* <img  className="w-fit h-3" src={curve.src} alt="curve" /> */}
              </span>
            </div>
            <span className="text-2xl w-4/5 sm:text-sm sm:w-5/6">
              We strike to make leaders of tomorrow, Equipping them with the
              skills and knowledge to make them future ready.
            </span>
            <div className="flex gap-4 sm:gap-6 sm:mt-2">
              <button className="bg-orMain text-white px-4 py-2 rounded text-xs font-bold sm:w-22 sm:h-10 sm:mt-2 sm:px-2 sm:py-0">
                <a href="/about">LEARN MORE</a>
              </button>
              <a href="/gallery">
                <button className="bg-transparent hover:bg-dGrey text-dGrey font-semibold hover:text-white py-2 px-4 border border-dGrey hover:border-transparent rounded flex items-center gap-2 sm:px-2 sm:py-2 sm:mt-2 sm:w-22">
                  <FaCirclePlay className="hover:text-white hover:fill-white" />
                  <span>Watch Video</span>
                </button>
              </a>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
        <div className="bg-lightBlue w-full flex items-center justify-center rounded-b-10em ">
          <div className="flex flex-col  items-center">
            <div className="container lg:px-10 flex sm:flex-col">
              <div className="w-1/2 flex flex-col gap-4 py-12 sm:gap-2 sm:w-full sm:py-6 sm:hidden">
                <h2 className=" text-5xl font-playfair w-full sm:text-base sm:w-full sm:pl-2">
                  Your child's success story starts here!!!
                </h2>
                <span className="text-base text-purpleMain sm:text-xs sm:px-2 sm:py-2 text-justify">
                  Our goal is to give kids the necessary skills to confront the
                  continuously evolving global challenges, instil the confidence
                  to take risks and make independent decisions, and above all,
                  foster values that contribute to developing thoughtful and
                  engaged individuals. We are the best, affordable Pre-Primary
                  and primary schools in Kondapur, Hyderabad, helping students
                  fulfil their natural abilities and succeed in their chosen
                  fields. We are also known for academic excellence and holistic
                  approach to education focusing on the top 10 best primary
                  schools in Kondapur, Hyderabad.
                </span>
                {data.map((item, index) => (
                  <div key={index} className="flex gap-4 items-center sm:gap-0">
                    <Image
                      className="w-auto sm:pl-4"
                      src={item.image}
                      alt="goldshield"
                    />
                    <span
                      className={`text-base sm:text-xs  ${
                        item.color == "gold" ? "text-orMain" : "text-purpleMain"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="w-1/2 flex justify-center items-center sm:w-full sm:p-8">
                <div className="w-2/3 shadow-xl sm:w-full sm:shadow-none ">
                  <AdmissionEnquiryForm />
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-4 py-12 sm:gap-2 sm:w-full sm:py-6 md:hidden">
                <span className="text-5xl font-playfair w-1/2 sm:text-5xl sm:w-full sm:p-4">
                  Learning Begins With Us
                </span>
                <span className="text-base text-purpleMain sm:text-sm sm:px-5 sm:text-justify">
                  Our objective is to equip  students with the necessary skills
                  to confront the continuously evolving global challenges,
                  instilling them the confidence to take risks and make
                  independent decisions, and above all, fostering values that
                  contribute to the development of thoughtful and engaged
                  individuals. We are the best schools in hyderabad with low
                  fees to  cultivate the innate potential of our students and
                  enable them to excel in their chosen paths. The school is
                  knows for its academic excellence and holistic approach in
                  education focuses to be on top 10 best schools in hyderabad.
                </span>
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-center sm:gap-3 sm:mt-2"
                  >
                    <Image
                      className="w-auto sm:pl-6 sm:w-10 "
                      src={item.image}
                      alt="goldshield"
                    />
                    <span
                      className={`text-base sm:text-xs  ${
                        item.color == "gold" ? "text-orMain" : "text-purpleMain"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div></div>
            <div className="bg-[#E5F6D4] w-4/5 flex justify-center p-8 font-playfair text-3xl flex-col items-baseline gap-8 relative top-24 sm:top-4 sm:gap-0 sm:w-5/6 sm:text-2xl sm:rounded-lg sm:p-4">
              <div className="flex items-center justify-center">
                <div className="w-3/5 flex flex-col items-baseline gap-8 sm:gap-3 sm:w-5/6">
                  <div className="flex flex-col">
                    <span
                      className="text-6xl w-fit font-bold text-orMain relative sm:text-6xl sm:!left 0em sm:p-0 sm:absolute"
                      style={{ left: "-1em" }}
                    >
                      “
                    </span>
                    <span>
                      We aim at inspiring our students to dream more, learn
                      more, do more, and become more in their respective
                      journeys of life.
                    </span>
                  </div>
                  <span className="text-sm ">- Director, Brookside</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* why choose brookside */}
        <div className="bg-lightBlue w-full flex items-center justify-center  mt-32 sm:pb-6">
          <div className="flex flex-col  items-center">
            <div className="container lg:px-10 flex sm:flex-col">
            <div className="w-2/5 flex justify-center items-center sm:w-full sm:p-4">
                <div className="w-full sm:w-full sm:shadow-none ">
                  <Image src={whyChooseImg} alt="why choose" className="w-auto"/>
                </div>
              </div>
              <div className="w-3/5 flex flex-col gap-4 py-12 sm:gap-2 sm:w-full sm:py-3 sm:px-3">
                <h2 className=" text-5xl font-playfair w-full sm:text-xl sm:w-full sm:pl-2">
                Why choose Brookside Global Primary School for your kid?
                </h2>
                <span className="text-base text-purpleMain sm:text-sm sm:px-2 sm:py-4 text-justify">
                  Our goal is to give kids the necessary skills to confront the
                  continuously evolving global challenges, instil the confidence
                  to take risks and make independent decisions, and above all,
                  foster values that contribute to developing thoughtful and
                  engaged individuals. We are the best, affordable Pre-Primary
                  and primary schools in Kondapur, Hyderabad, helping students
                  fulfil their natural abilities and succeed in their chosen
                  fields. We are also known for academic excellence and holistic
                  approach to education focusing on the top 10 best primary
                  schools in Kondapur, Hyderabad.
                </span>
                {whyChooseData.map((item, index) => (
                  <div key={index} className="flex gap-4 items-center sm:gap-3">
                    <Image
                      className="w-auto sm:pl-4"
                      src={item.image}
                      alt="goldshield"
                    />
                    <span
                      className={`text-base sm:text-sm  ${
                        item.color == "gold" ? "text-orMain" : "text-purpleMain"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              
           
            </div>
           
          </div>
        </div>

        {/* parents review */}
        <div className="h-32 bg-white w-full sm:h-0"></div>
        <div className="py-16 sm:py-4 w-full">
          <div className="flex justify-center container">
            <span className="font-playfair text-3xl text-purpleMain sm:text-xl">
              Parent’s Review
            </span>
          </div>
          <CurouselComponent />
        </div>

        {/* ages where we meet */}
        <div className="w-full py-40 flex items-center justify-center sm:py-20 desktopbg">
          <div className="container  lg:px-10 flex flex-col gap-12 items-center justify-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-purpleMain text-3xl font-bold sm:text-xl">
                Ages we meet kids where they are
              </h2>
            </div>
            <div className=" flex gap-12 w-full sm:gap-6 sm:flex-col sm:items-center">
              <Card2
                img={b1}
                grade="IK1-IK3"
                desc="At Brookside School, we focus on guiding pre-primary students to explore and understand their environment while nurturing their language skills and fostering a scientific mindset. We give high priority to child Safety and the right to education for every child.  Being the best Primary school in Kondapur, Hyderabad, we excel in cultivating artistic talents and empowering children to express themselves freely. "
              />
              <Card2
                img={b2}
                grade="Grade 1-2"
                desc="Brookside Global School at Kondapur, Hyderabad Provides an opportunity for every primary grade students to excel in their learning and language abilities, and adopt a scientific mindset. To optimise learning outcomes, we supply age-appropriate educational materials and tools tailored to each student's unique pace, ensuring that all learners can advance at their own speed with the necessary support for success. Children enjoy our special Summer Camps in Kondapur, Hyderabad, It is a unique experience for every student Who has a desire to learn new things. Students will experience a new way of learning with one of the best primary school at kondapur, Hyderabad.
                 "
              />
              <Card2
                img={b3}
                grade="Grade 3-5"
                desc="Brookside Global School focuses on enhancing primary grade students' vocabulary, attention span, reading, and writing abilities using innovative and captivating teaching techniques. Our curriculum emphasises critical thinking, problem-solving, and skillful communication to prepare students for academics in primary school. We work hard to create a safe, supportive environment that inspires curiosity, self-assurance, and a love of learning in each of our students. As one of the best Primary schools in Kondapur, Hyderabad we focus on child safety first.   "
              />
              <Card2
                img={b3}
                grade="Day Care Center"
                desc="At Brookside global we offer a day care center in kondapur, Hyderabad. Our day care center program focus on providing child safety with a fun learning experience. The main aim of our day care center is to promote social and cognitive development of children. We provide day cay center service for Pre-primary, 1st and 2nd grade students in kondapur, hyderabad. 
                Our students enjoy the daycare learning experience. We offer a wide range of activities at our day care center such as, art and craft ,outdoor playing, fun learning experience and every child gets personal attention at our day care center. 
                 "
              />
            </div>
          </div>
        </div>
{/* transport facility */}
<div className="bg-lightBlue w-full flex items-center justify-center  ">
          <div className="flex flex-col  items-center">
            <div className="container lg:px-10 flex sm:flex-col">
            <div className="w-2/5 flex justify-center items-center sm:w-full sm:p-4">
                <div className="w-/3 shadow-xl sm:w-full sm:shadow-none ">
                  
                </div>
              </div>
              <div className="w-3/5 flex flex-col gap-4 py-12 sm:gap-0 sm:w-full sm:py-3 sm:px-3 ">
                <h2 className=" text-5xl font-playfair w-full sm:text-xl sm:w-full sm:pl-2">
                We also provide Transportation facilities

                </h2>
                <span className="text-base text-purpleMain sm:text-sm sm:px-2 sm:py-2 text-justify">
                Brookside Global School offers transportation facilities to ensure our students safety and security. We include modern safety features in our transportation because the safety and wellbeing of every child during the trip is our top priority. We make sure that transportation facilities are available to every student; the transportation service at Brookside covers a larger area; and we ensure that students from various areas can easily access the school.
                </span>
          
              </div>

              
           
            </div>
           
          </div>
        </div>


        <div className="flex justify-center py-20 sm:py-20">
          <div className=" w-full flex items-center flex-col justify-center">
            <div className="flex gap-2 items-baseline sm:gap-5 sm:w-full sm:flex-col sm:items-center">
              <h2 className="text-purpleMain text-4xl font-bold sm:text-3xl sm:contents"><span className="text-orMain text-7xl font-bold sm:text-5xl">ILC’s </span>innovative learning centres</h2>
               
               
            </div>
            <div className="w-3/4 sm:p-3 md:!hidden">
              <img src={allMix.src} alt="allmix" />
            </div>
            <div className="w-full container lg:px-10 pt-16 flex sm:pt-8 sm:flex-col sm:mb-20">
              <div className=" w-1/3 flex flex-col gap-16 sm:gap-4 sm:w-full sm:pl-10">
                <div className="flex flex-col gap-8 sm:gap-4">
                  <span className="text-4xl activeLink font-playfair font-bold w-fit sm:text-3xl">
                    Art & Craft Corner
                  </span>
                  <span className="text-base w-full sm:w-5/6 sm:text-justify sm:text-base">
                  Our Art and Craft Corner where creativity knows no bounds is a place where students can explore their imagination and develop their artistic skills in a fun and engaging way. Different Art and craft activities for primary schoolers provide a sense of achievement and build confidence. Students can also enroll for summer camps at kondapur, Hyderabad for more exciting activities.
                  </span>
                </div>
                <div className="flex flex-col gap-8 sm:gap-4">
                  <span className="text-4xl activeLink font-playfair font-bold w-fit sm:text-3xl">
                    Role Play Area
                  </span>
                  <span className="text-base w-full sm:w-5/6 sm:text-justify sm:text-base">
                  Our Role Play area provides a dynamic and immersive learning experience for our students. By assuming different roles and scenarios, our students develop important social and emotional skills such as empathy, communication, problem-solving and teamwork. We welcome every student to enroll in our primary school kondapur, Hyderabad. It's going to be every exciting and fun learning.
                  </span>
                </div>
                <div className="flex flex-col gap-8 sm:gap-4">
                  <span className="text-4xl activeLink font-playfair font-bold w-fit sm:text-3xl">
                    Dance & Drama Studio
                  </span>
                  <span className="text-base w-full sm:w-5/6 sm:text-justify sm:text-base">
                  Our Dance and Drama studio provides a vibrant and creative space for our students to explore the world of performing arts. Through dance and drama activities, our students develop self-expression, confidence, teamwork and creativity. Come and enjoy a perfect blend of study and fun with the many summer camp programmes offered by Brookside global School in Kondapur, Hyderabad.

                  </span>
                </div>
              </div>
              <div className="w-2/3 sm:p-4 sm:ml-12 sm:!hidden">
                <img src={allMix.src} alt="allmix" />
              </div>
            </div>
            <div className="w-full flex items-center justify-center bg-lightBlue h-40 ">
              <button className="bg-purpleMain text-white px-4  py-2 h-fit rounded text-base font-bold flex items-center gap-4 ">
                <a href="/activities">Explore all activities</a>
                <FaArrowRight className="text-base sm:text-xs" />
              </button>
            </div>
            <ContactSection />
          </div>
        </div>
      </div>
    </main>
  );
}
