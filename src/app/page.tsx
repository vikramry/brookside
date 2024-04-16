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
  return (
    <main className="flex container-fluid min-h-screen bg-white w-full max-w-full flex-col items-center justify-between ">
      <div className="w-full bg-white">
        {/* /assets/images/mainbg1.jpg */}
        <div
          className="w-full flex items-center sm:!h-auto sm:!p-4"
          style={{
            backgroundImage: `url('/assets/images/schoolbnr.png')`,
            padding: "40px",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            height: "70vh",
          }}
        >
          <div className="">
            <div className="w-1/2 flex flex-col gap-8 h-4/5 pl-12 sm:gap-0 sm:pl-0 ">
              <div className="flex gap-4 sm:gap-0">
                <span className="font-playfair text-7xl font-bold sm:text-xl">
                  We are the &nbsp;
                </span>
                <span className="flex flex-col ">
                  <span className="font-playfair text-7xl font-bold text-orMain sm:text-xl">
                    future
                  </span>
                  {/* <img  className="w-fit h-3" src={curve.src} alt="curve" /> */}
                </span>
              </div>
              <span className="text-2xl w-4/5 sm:text-xs sm:w-full">
                We strike to make leaders of tomorrow, Equipping them with the
                skills and knowledge to make them future ready.
              </span>
              <div className="flex gap-4 sm:gap-2">
                <button className="bg-orMain text-white px-4 py-2 rounded text-xs font-bold sm:w-16 sm:h-10 sm:mt-2 sm:px-2 sm:py-0">
                  <a href="/about">LEARN MORE</a>
                </button>
                <a href="/gallery">
                  <button className="bg-transparent hover:bg-dGrey text-dGrey font-semibold hover:text-white py-2 px-4 border border-dGrey hover:border-transparent rounded flex items-center gap-2 sm:px-2 sm:py-2 sm:mt-2">
                    <FaCirclePlay className="hover:text-white hover:fill-white" />
                    <span>Video</span>
                  </button>
                </a>
              </div>
            </div>
            <div className="w-1/2"></div>
          </div>
        </div>
        <div className="bg-lightBlue w-full flex items-center justify-center rounded-b-10em">
          <div className="flex flex-col  items-center">
            <div className="container px-10 flex sm:flex-col">
              <div className="w-1/2 flex flex-col gap-4 py-12 sm:gap-2 sm:w-full sm:py-6">
                <span className="text-5xl font-playfair w-1/2 sm:text-base sm:w-full sm:pl-2">
                  Learning Begins With Us
                </span>
                <span className="text-base text-purpleMain sm:text-xs sm:px-2 sm:py-2 sm:text-justify">
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
                  <div key={index} className="flex gap-4 items-center sm:gap-0">
                    <Image
                      className="w-auto sm:pl-4"
                      src={item.image}
                      alt="goldshield"
                    />
                    <span
                      className={`text-base sm:text-xs  ${item.color == "gold" ? "text-orMain" : "text-purpleMain"
                        }`}
                    >
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
              <div className="w-1/2 flex justify-center items-center sm:w-full sm:p-4">
                <div className="w-2/3 shadow-xl sm:w-full">
                  <AdmissionEnquiryForm />
                </div>
              </div>
            </div>
            <div></div>
            <div className="bg-[#E5F6D4] w-4/5 flex justify-center p-8 font-playfair text-3xl flex-col items-baseline gap-8 relative top-24 sm:top-0 sm:w-full sm:p-4 sm:text-base sm:gap-0">

              <div className="flex items-center justify-center">

                <div className="w-3/5 flex flex-col items-baseline gap-8 sm:gap-4 sm:w-5/6">
                  <div className="flex flex-col">
                    <span
                      className="text-6xl w-fit font-bold text-orMain relative sm:text-3xl sm:!left-75em" style={{ left: "-1em" }}

                    >
                      “
                    </span>
                    <span>
                      We aim at inspiring our students to dream more, learn more,
                      do more, and become more in their respective journeys of
                      life.
                    </span>
                  </div>
                  <span className="text-sm ">- Director, Brookside</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-32 bg-white w-full sm:h-0"></div>
        <div className="py-16 sm:py-4 container">
          <div className="flex justify-center container">
            <span className="font-playfair text-3xl text-purpleMain sm:text-xl">
              Parent’s Review
            </span>
          </div>
          <CurouselComponent />
        </div>
        <div
          className="w-full py-40 flex items-center justify-center sm:py-20"
          style={{
            backgroundImage: `url('/assets/images/pagedecor.png')`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container  px-10 flex flex-col gap-12 items-center justify-center">
            <div className="flex flex-col justify-center items-center">
              <span className="text-purpleMain text-3xl font-bold sm:text-xl">
                Ages We meet kids where they are
              </span>
            </div>
            <div className="flex gap-12 w-full sm:gap-6 sm:flex-col">
              <Card2
                img={b1}
                grade="IK1-IK3"
                desc="We focus on helping children discover and explore their surroundings, while also develop their language skills and foster a scientific mindset. We also aim to equip children with new-age skills that prepares them for the future. To promote... "
              />
              <Card2
                img={b2}
                grade="Grade 1-2"
                desc="We place great emphasis on promoting interaction among students, cultivating their creativity, and enhancing their imagination through engaging art and music activities. To ensure effective learning, we provide age-appropriate learning materials... "
              />
              <Card2
                img={b3}
                grade="Grade 3-5"
                desc="We focus on developing students' vocabulary, attention span, reading, and writing skills through innovative and engaging teaching methods. By encouraging active participation and providing personalized feedback, we ensure that every... "
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center py-20 sm:py-0">
          <div className=" w-full flex items-center flex-col justify-center">
            <div className="flex gap-2 items-baseline ">
              <span className="text-orMain text-7xl font-bold sm:text-2xl">ILC’s -</span>
              <span className="text-purpleMain text-4xl font-bold sm:text-xl">
                Innovative Learning Centres
              </span>
            </div>

            <div className="w-full container px-10 pt-16 flex sm:pt-8 sm:flex-col">
              <div className=" w-1/3 flex flex-col gap-16 sm:gap-4 sm:w-full sm:pl-16">
                <div className="flex flex-col gap-8 sm:gap-4">
                  <span className="text-4xl activeLink font-playfair font-bold w-fit sm:text-base">
                    Art & Craft Corner
                  </span>
                  <span className="text-base w-3/5 sm:w-5/6 sm:text-justify sm:text-xs">
                    Our Art and Craft Corner where creativity knows no bounds is
                    a place where students can explore their imagination and
                    develop their artistic skills in a fun and engaging way.
                  </span>
                </div>
                <div className="flex flex-col gap-8 sm:gap-4">
                  <span className="text-4xl activeLink font-playfair font-bold w-fit sm:text-base">
                    Role Play Area
                  </span>
                  <span className="text-base w-3/5 sm:w-5/6 sm:text-justify sm:text-xs">
                    Our Role Play area provides a dynamic and immersive learning
                    experience for our students. By assuming different roles and
                    scenarios, our students develop important social and
                    emotional skills such as empathy, communication,
                    problem-solving and teamwork.
                  </span>
                </div>
                <div className="flex flex-col gap-8 sm:gap-4">
                  <span className="text-4xl activeLink font-playfair font-bold w-fit sm:text-base">
                    Dance & Drama Studio
                  </span>
                  <span className="text-base w-3/5 sm:w-5/6 sm:text-justify sm:text-xs">
                    Our Dance and Drama studio provides a vibrant and creative
                    space for our students to explore the world of performing
                    arts. Through dance and drama activities, our students
                    develop self-expression, confidence, teamwork and
                    creativity.
                  </span>
                </div>
              </div>
              <div className="w-2/3 sm:p-4 sm:ml-12">
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
