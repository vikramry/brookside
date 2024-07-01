import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import preschoolBannerDesk from "../../../public/assets/images/preSchoolBannerDesktop.png";
import preSchoolBannerMobile from "../../../public/assets/images/preSchoolBannerMobile.png";
import AdmissionEnquiryForm from "@/components/admissionEnquiryForm";
import Card2 from "@/components/card2";
import ipre1 from '../../../public/assets/images/ipre1.png'
import ipre2 from '../../../public/assets/images/ipre2.png'
import ipre3 from '../../../public/assets/images/ipre3.png'

export const metadata: Metadata = {
  title: "Best Primary School in Kondapur, Hyderabad",
  description:
    "Welcome to Brookside Global School, where young minds bloom! We are the Best Primary School in Kondapur, Hyderabad. Join us on an exciting educational journey tailored to inspire and empower our students for a lifetime of success.",
  keywords:
    "Best Primary School in Kondapur - Hyderabad, Best Primary School in Hyderabad, Best Pre Primary Schools in Hyderabad'",
};

export default function Home() {
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
        <div className="w-full py-10 flex items-center justify-center sm:py-20 bg-white ">
            <div className="container  lg:px-10 flex flex-col  items-center justify-center">
                <div className="flex flex-col w-full items-center gap-6">
                <span className=" text-5xl font-bold">Admission process for preschool</span>
                <span className="text-base w-2/5 text-justify  ">We have a hassle-free admission process for Our Brookside Global School.Check out the below steps for the preschool at Kondapur, Hyderabad admission.</span>
                </div>
            </div>
        </div>
    </main>
  );
}
