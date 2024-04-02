import AboutGlance from "@/components/AboutGlance";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <img
          src="/assets/images/aboutbanner.png"
          alt="img-blur-shadow"
          className="w-full h-[400px]"
        />
      </div>
      <div className="flex flex-row justify-center mt-[50px] mb-[30px]">
        <p className="text-blue-950 text-5xl">
          The Brookside <span className="text-orange-500">Global School</span>
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center px-[258px] gap-2">
        <p>
          Welcome to our School. We believe in creating a safe and nurturing
          environment where young children can learn, explore, and grow. We
          believe that children learn best through hands-on experiences and
          play, and our curriculum is designed to promote early learning in a
          fun and engaging way. We focus on building foundational skills in
          language, literacy, math, science, social skills, and physical
          development, and we value a student-centered approach that celebrates
          the unique talents of each child.
        </p>
        <p>
          Our school offers a range of extracurricular activities and clubs,
          including sports, music, drama, robotics, and community service, to
          provide opportunities for students to pursue their interests. Our
          small class sizes ensure that every child receives individual
          attention and maintain inclusive school culture that promotes
          diversity and respect for all.
        </p>
        <p>
          Our experienced and qualified teachers are passionate about working
          with young children and use a variety of teaching methodology,
          including storytelling, music, art, and sensory play, to engage and
          inspire students. We also believe in the importance of parental
          involvement in a child’s education and encourage regular communication
          and feedback on each child’s progress.
        </p>
        <p>
          At our school, we prioritize the health and safety of our students and
          maintain a clean and hygienic environment. Our staff are trained in
          first aid and emergency response procedures to ensure the well-being
          of every child. We believe in developing a strong pedagogical
          environment to make our students future-ready.
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center px-[258px] pt-[90px] pb-[90px]">
        <img
          src="/assets/images/school.png"
          alt="img-blur-shadow"
          className="w-[970px] h-[520px] rounded-md"
        />
      </div>
      <div className="flex flex-col justify-center px-[80px] py-[60px] gap-[50px]">
        <div className="w-[1145px] h-[451px] rounded-xl bg-[#E5F6D4] flex flex-row justify-between px-[47px] py-[49px]">
          <div className=" ">
            <img
              src="/assets/images/profile1.png"
              alt="img-blur-shadow"
              className="  w-[410] h-[350px] "
            />
          </div>
          <div className="flex flex-wrap w-[600px]">
            <p>
              Mr. Jagadish, a seasoned IT professional with 20 years of
              experience and a Master’s degree in IT. However, his true passion
              lies in education and he aims to bring some of the innovative
              practices in the Education field.His vision is to establish
              multiple international schools, where high-quality teaching and
              research will be prioritized, and a responsible, agile, and
              future-oriented mindset will be nurtured among students. He
              strongly believes in the power of higher education to make a
              positive impact on society and is dedicated to inspiring both
              students and faculty to question, experiment, and innovate. His
              mission is to overcome the challenges of higher education and
              create a better future for all.
            </p>
          </div>
        </div>
        <div className="w-[1145px] h-[551px] rounded-xl bg-[#D2EAF1]">
          <div className="flex flex-row justify-between px-[47px] py-[49px]">
            <img
              src="/assets/images/profile2.png"
              alt="img-blur-shadow"
              className="  w-[310px] h-[413px] "
            />
          </div>
        </div>
      </div>
      <AboutGlance />
    </div>
  );
};

export default page;
