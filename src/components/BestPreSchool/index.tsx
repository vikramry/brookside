"use client"
import React, { useState } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import preschoolBannerDesk from "../../../public/assets/images/preSchoolBannerDesktop.png";
import preSchoolBannerMobile from "../../../public/assets/images/preSchoolBannerMobile.png";
import AdmissionEnquiryForm from "@/components/admissionEnquiryForm";
import Card2 from "@/components/card2";
import ipre1 from "../../../public/assets/images/ipre1.png";
import ipre2 from "../../../public/assets/images/ipre2.png";
import ipre3 from "../../../public/assets/images/ipre3.png";
import cctvImg from "../../../public/assets/images/cctv.png";
import FirstAid from "../../../public/assets/images/firstaid.png";
import FireSafetyProtocol from "../../../public/assets/images/fireSafetyProtocol.png";
import Paediatrician from "../../../public/assets/images/Paediatrician.png";
import SafetyandHygiene from "../../../public/assets/images/SafetyandHygiene.png";
import TrainedStaff from "../../../public/assets/images/TrainedStaff.png";
import allMix from "../../../public/assets/images/allMix.png";
import parentalInvolvement from "../../../public/assets/images/parentalInvolvement.png";

import PriorityCard from "@/components/PriorityCard";
import { FaArrowRight } from "react-icons/fa6";
import Accordion from "@/components/Accordian";

export const metadata: Metadata = {
  title: "Best Preschool in Kondapur | Brookside Global School",
  description:
    "Shape the future of your Toddler at the Best Preschool in Kondapur, Hyderabad. Fill out the form to reach us today.",
  keywords:
    "Best PreSchool in Kondapur - Hyderabad, Best preSchool in Hyderabad, Best Pre Primary Schools in Hyderabad'",
};

export default function BestPreSchoool() {
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleAccordion = (index:any) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  const accordianData = [
    {
      title: "Which is the best Preschool in Kondapur, Hyderabad?",
      content:
        "Choosing the best preschool at Kondapur, Hyderabad could be a challenging task for every parent.  If you're looking for a preschool at Kondapur Hyderabad our institute stands out with exemplary standards for your growing kids. Brookside Global School at Kondapur provides a comprehensive and child-centric curriculum such as Phone learning activities and play-based learning, understanding the important days, Arts and crafts music and dance, and many more exciting activities for your kids. We also provide transportation facilities to our students with better child safety equipment.",
    },
    {
      title:
        "What is the fee structure for a preschool in Kondapur, Hyderabad?",
      content:
        " The fee structure for preschools in Kondapur, Hyderabad may vary from school to school. At Brookside Global School, we offer an affordable fee structure along with a wide range of facilities and activities.",
    },
    {
      title:
        "How did I choose my child's school in Hyderabad?",
      content:
      "To choose your child's school in Hyderabad first of all, you have to select your nearest location. Then do basic research on every school, whether they are providing child safety and transportation facilities, as well as research on their curriculum, etc. "
    },
    {
      title:
        "Does Brookside Global School provide a transportation facility in Kondapur?",
      content:
        "Yes, Brookside Global School provides a transportation facility. Now it's very easy for every student to go from school to home. Transportation facilities can be very beneficial for those students who live far from the school location.",
    },
  ];
  return (
    <main className=" flex container-fluid min-h-screen bg-white w-full max-w-full flex-col items-center lg:w-full ">
      {/* banner */}
      <div className="w-full flex items-center h-full sm:!h-auto  ">
        <Image
          src={preschoolBannerDesk}
          alt="preschool"
          className="h-full sm:hidden"
        />
        <Image
          src={preSchoolBannerMobile}
          alt="preschool"
          className="h-full md:hidden"
        />
      </div>
      {/* admission enquiry */}
      <div className=" bg-lightBlue w-full flex items-center py-4 justify-center">
        <div className="flex flex-col sm:flex-col-reverse items-center sm:w-full">
          <div className="container px-10 sm:px-5 flex sm:flex-col-reverse ">
            <div className="w-1/2 text-lg sm:text-md lg:text-justify sm:text-center font-normal sm:full flex flex-col  justify-center gap-4 sm:gap-6 sm:w-full ">
              <span>
                Brookside Global School is committed to providing a supportive,
                interactive environment to our kids.  Our Preschool at Kondapur
                Hyderabad is situated in a serene and easily accessible area of
                the city. Our main motive is to establish a strong future for
                every kid. 
              </span>
              <span>
                We are one of the best Preschools in Kondapur, Hyderabad. Our
                school incorporates artistic and physical development with
                academic excellence. Our curriculum emphasises on social,
                cognitive, creative, and physical development of our pre-primary
                students to meet their goals. Our children enjoy learning and
                discovering new things with our engaging activities. 
              </span>
              <span>
                Our Preschool at Kondapur Hyderabad provides a homely
                environment for our talented kids. Our enthusiastic educators
                are dedicated to helping every child and providing attention to
                every individual kid. The teachers make unique cutting-edge
                instructional strategies. Children at Brookside Global School
                have many opportunities to explore their interests and talents
                with our diverse array of extracurricular activities such as
                Dance art, music, fun activities, painting, and many more. 
              </span>
            </div>
            <div className="w-1/2 flex justify-center items-center sm:w-full sm:p-8">
              <div className="w-2/3 shadow-xl sm:w-full sm:shadow-none ">
                <AdmissionEnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Innovative Pre-Primary Curriculum */}
      <div className="w-full py-20 flex items-center justify-center sm:py-20 bg-[#E5F6D4] ">
        <div className="container  lg:px-10 flex flex-col gap-12 items-center justify-center sm:gap-0">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-purpleMain text-3xl font-playfair font-bold sm:text-xl">
              Innovative Pre-Primary Curriculum
            </h2>
          </div>
          <div className=" flex gap-12 w-full font-roboto sm:gap-6 sm:flex-col sm:items-center">
            <Card2
              img={ipre1}
              grade="Best international practices"
              desc="The curriculum at our Preschool at Kondapur, Hyderabad incorporates the finest elements of several educational philosophies. Our children are guaranteed to be motivated and excited about learning with the help of our integrated teaching approach. "
            />
            <Card2
              img={ipre2}
              grade="Fun and Play-Based Learning"
              desc="We encourage every child to be in their comfort zone because we believe that young children learn the best things while playing. When children participate in instructive and fun learning activities it will encourage their social interaction and creativity. "
            />
            <Card2
              img={ipre3}
              grade="Distinct instructional methods "
              desc="Our innovative teaching approaches focus on establishing fundamental principles such as sharing and caring are very crucial for overall development. Our teaching techniques also focus on significant occasions and important days. We celebrate every.......   "
            />
          </div>
        </div>
      </div>
      {/* Admission process for preschool */}
      <div className="w-full py-10 flex items-center justify-center sm:py-20 bg-white font-playfair">
        <div className="container  lg:px-10 flex gap-10 flex-col  items-center justify-center">
          <div className="flex flex-col w-full  items-center gap-6">
            <span className=" text-5xl font-bold text-center sm:px-3 sm:text-4xl">
              Admission process for preschool
            </span>
            <span className="text-base w-1/2 text-center sm:w-full sm:px-5">
              We have a hassle-free admission process for Our Brookside Global
              School.Check out the below steps for the preschool at Kondapur,
              Hyderabad admission.
            </span>
          </div>
          <div className="flex flex-col items-center gap-8 ">
            <div className="flex gap-20 items-center justify-center bg-[#FDF8EE] py-12 w-3/4 sm:flex-col sm:gap-2 sm:py-6 sm:w-5/6 sm:rounded-3xl">
              <div
                style={{
                  //  backgroundImage: ``,
                  background: `url('/assets/images/orbg.png')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "6rem",
                  height: "6rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span className="font-playfair text-7xl  font-bold text-white pb-8">
                  1
                </span>
              </div>
              <span className="w-3/5 sm:w-full sm:text-center sm:px-3">
                You can raise a query through a call, or you can also fill out
                the form to reach out to us. Our team will contact you within
                4-5 business hours.{" "}
                <a href="/" className="font-bold underline">
                  Click here
                </a>{" "}
                to reach out to us.
              </span>
            </div>
            <div className="flex gap-20 items-center justify-center bg-[#FDF8EE] py-12 w-3/4 sm:flex-col  sm:gap-2 sm:py-6 sm:w-5/6 sm:rounded-3xl">
              <div
                style={{
                  //  backgroundImage: ``,
                  background: `url('/assets/images/orbg.png')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "6rem",
                  height: "6rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span className="font-playfair text-7xl  font-bold text-white pb-8">
                  2
                </span>
              </div>
              <span className="w-3/5 sm:w-full sm:text-center sm:px-3">
                Parents can also visit our school directly. You can contact our
                staff to get more information.{" "}
                <a href="/" className="font-bold underline">
                  Click here
                </a>{" "}
                to reach out to us by location.
              </span>
            </div>
            <div className="flex gap-20 items-center justify-center bg-[#FDF8EE] py-12 w-3/4 sm:flex-col sm:gap-2 sm:py-6 sm:w-5/6 sm:rounded-3xl">
              <div
                style={{
                  //  backgroundImage: ``,
                  background: `url('/assets/images/orbg.png')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "6rem",
                  height: "6rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span className="font-playfair text-7xl  font-bold text-white pb-8">
                  3
                </span>
              </div>
              <span className="w-3/5 sm:w-full sm:text-center sm:px-3">
                Fill out the admission form and discuss the fee structure,
                curriculum, and extra facilities provided for students with our
                management staff.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* top priority */}
      <div className="w-full py-10 flex items-center justify-center sm:py-20 bg-[#E5F6D4] font-playfair ">
        <div className="container  lg:px-10 flex gap-10 flex-col  items-center justify-center">
          <div className="flex flex-col w-full  items-center gap-6">
            <span className=" text-5xl font-bold sm:text-4xl sm:px-3 sm:text-center">
              Our Top Priority Is Your Child's Safety
            </span>
            <div className="flex flex-wrap gap-x-16 justify-center ">
              <PriorityCard img={cctvImg} text="CCTV Monitoring" />
              <PriorityCard img={FirstAid} text="First Aid Kits" />
              <PriorityCard
                img={FireSafetyProtocol}
                text="Fire Safety Protocol"
              />
              <PriorityCard img={Paediatrician} text="Paediatrician On Call" />
              <PriorityCard img={SafetyandHygiene} text="Safety and Hygiene" />
              <PriorityCard img={TrainedStaff} text="Trained Staff" />
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive extracurricular activities */}
      <div className="w-full  lg:px-10 pt-16 flex sm:pt-8 flex-col pb-20 bg-lightBlue">
        <div className="flex gap-2 items-baseline justify-center sm:text-center">
          <h2 className="text-purpleMain text-center font-playfair text-4xl font-bold sm:text-center sm:text-3xl sm:contents ">
            Comprehensive <br /> Pre-Primary Extracurricular Activities
          </h2>
        </div>
        <div className="w-1/2 sm:w-full sm:px-5 md:hidden">
            <img src={allMix.src} alt="allmix" />
          </div>
        <div className="w-full container lg:px-10 pt-16 flex sm:pt-8 sm:flex-col sm:mb-20">
          <div className=" w-1/2 flex flex-col gap-16 sm:gap-4 sm:w-full">
            <div className="flex flex-col gap-8 sm:gap-4 sm:items-center">
              <span className="text-4xl activeLink font-playfair font-bold w-fit sm:text-3xl">
                Art & Craft Corner
              </span>
              <span className="text-base w-full font-roboto sm:w-5/6 sm:text-center sm:text-base">
                Our Art and Craft Corner where creativity knows no bounds is a
                place where students can explore their imagination and develop
                their artistic skills in a fun and engaging way.
              </span>
            </div>
            <div className="flex flex-col gap-8 sm:gap-4 sm:items-center">
              <span className="text-4xl activeLink font-playfair font-bold w-fit sm:text-3xl">
                Music and Dance
              </span>
              <span className="text-base w-full font-roboto sm:w-5/6 sm:text-center sm:text-base">
                Our Role Play area provides a dynamic and immersive learning
                experience for our students. By assuming different roles and
                scenarios, our students develop important social and emotional
                skills such as empathy, communication, problem-solving and
                teamwork.
              </span>
            </div>
            <div className="flex flex-col gap-8 sm:gap-4 sm:items-center">
              <span className="text-4xl activeLink font-playfair font-bold w-fit sm:text-3xl">
                Language and Literacy
              </span>
              <span className="text-base w-full font-roboto sm:w-5/6 sm:text-center sm:text-base">
                Our Dance and Drama studio provides a vibrant and creative space
                for our students to explore the world of performing arts.
                Through dance and drama activities, our students develop
                self-expression, confidence, teamwork and creativity.
              </span>
            </div>
            <button className="bg-purpleMain w-fit text-white px-4  py-2 h-fit rounded text-base font-bold flex items-center gap-4 font-playfair sm:ml-24 sm:my-3 sm:p-5 ">
              <a href="/activities">Explore all activities</a>
              <FaArrowRight className="text-base sm:text-2xl" />
            </button>
          </div>
          <div className="w-1/2 sm:p-4 sm:ml-12 sm:!hidden">
            <img src={allMix.src} alt="allmix" />
          </div>
        </div>
      </div>

      {/* Parental Involvement */}
      <div className="w-full py-10 flex items-center justify-center flex-col sm:py-20 bg-[#E5F6D4] font-playfair sm:text-center">
      <span className="text-5xl text-purpleMain font-bold sm:text-4xl">
              Parental Involvement
            </span>
        <div className="container flex gap-10 items-center justify-center sm:flex-col-reverse sm:gap-0">
          <div className="flex flex-col w-2/3 items-center gap-8 sm:gap-4 sm:w-full">
           
            <span className=" text-justify w-3/5 text-sm sm:w-full sm:p-5 sm:text-base sm:text-center">
              Being the best preschool at Kondapur, Hyderabad our aim is to
              Maintain regular communication with children and parents as well.
              We conduct parent-teacher conferences, digital platforms and
              newsletters to maintain communication with parents. We also host
              regular parent workshops and seminars which cover a different
              subject about child development and parenting. Parents are
              encouraged to participate in different school events and
              activities conducted by Brookside Global School.
            </span>
          </div>
          <div className="w-1/3 sm:pt-10 sm:w-full sm:pl-5">
            <Image src={parentalInvolvement} alt="parental Involvement" />
          </div>
        </div>
      </div>
      {/* Admission process for preschool */}
      <div className="w-full py-10 flex items-center justify-center sm:py-20 bg-[#FDF8EE] ">
        <div className="container  lg:px-10 flex gap-10 flex-col  items-center justify-center">
          <div className="flex flex-col w-full  items-center gap-6">
            <span className=" text-5xl font-bold">FAQS</span>
            <div className="flex flex-col gap-4 w-full container">
            {accordianData.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onToggle={() => toggleAccordion(index)}
        >
          {item.content}
        </Accordion>
      ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
