import type { Metadata } from "next";
import ContactSection from "@/components/AcademicsComponents/ContactSection";
import ActivityCard from "@/components/activityCard";

export const metadata: Metadata = {
  title:
    "Discover the Activities We Keep in Practice | Brookside Global School",
  description:
    "We encourage our children to involve in a variety of activities such as Art, Language Lab, Steam Corner, Dance, Drama, Library and much more. Take a step forward and contact us now.",
    keywords:"Best Primary School in Kondapur - Hyderabad, Best Primary School in Hyderabad, Best Pre Primary Schools in Hyderabad'"

};

const data = [
  {
    content:
      "Our Art and Craft corner where creativity knows no bounds is a place where students can explore their imagination and develop their artistic skills in a fun and engaging way.",
    heading: "Art & Craft Corner",
    imgURL: "/assets/images/artimg.png",
    isReverse: false,
  },
  {
    content:
      "Our language lab in pre-primary and primary schools is a dynamic space where young learners engage in interactive activities to develop language skills. Through interactive games, children explore vocabulary, pronunciation, and grammar fostering a love for language from an early age.",
    heading: "Language Lab",
    imgURL: "/assets/images/starimg.png",
    isReverse: true,
  },
  {
    content:
      "Our one-of-a-kind STEAM (Science, Technology, Engineering, Arts and Mathematics) corner provides an exciting and hands-on learning environment where students can develop critical thinking, problem-solving and creativity skills.",
    heading: "STEAM Corner",
    imgURL: "/assets/images/steamimg.png",
    isReverse: false,
  },
  {
    content:
      "Our Dance and Drama studio provides a vibrant and creative space for our students to explore the world of performing arts. Through dance and drama activities, our students develop self-expression, confidence, teamwork and creativity.",
    heading: "Dance & Drama Studio",
    imgURL: "/assets/images/danceimg.png",
    isReverse: true,
  },
  {
    content:
      "Our Role Play area provides a dynamic and immersive learning experience for our students. By assuming different roles and scenarios, our students develop important social and emotional skills such as empathy, communication, problem-solving, and teamwork.",
    heading: "Role Play Area",
    imgURL: "/assets/images/roleimg.png",
    isReverse: false,
  },
  {
    content:
      "Our Play Area at is designed to help our young students develop their motor skills through fun and engaging activities. By climbing, jumping, swinging and running, our students build strength, coordination, balance and spatial awareness.",
    heading: "Play Area",
    imgURL: "/assets/images/playimg.png",
    isReverse: true,
  },
  {
    content:
      "Our AV Room is a dynamic and versatile space that complements classroom learning by providing resources and opportunities for project-based learning. By utilizing videos, images and interactive software, our students gain a deeper understanding of complex concepts and topics.",
    heading: "AV Room",
    imgURL: "/assets/images/avimg.png",
    isReverse: false,
  },
  {
    content:
      "Our Library provides a quiet and stimulating space for our students to explore the world of literature and learning. By engaging in reading and research, our students develop essential language, communication and critical thinking skills.",
    heading: "Library",
    imgURL: "/assets/images/libraryimg.png",
    isReverse: true,
  },
];
const page = () => {
  return (
    <div className="bg-white">
      <div>
        {/* /assets/images/mainbg1.jpg */}
        <div>
          <img src="/assets/images/activitiesbg.png" />
        </div>
        <div className="w-full flex justify-center py-10">
          <div className="text-center max-w-[900px] flex flex-col justify-center gap-4 px-5 md:px-5 lg:px-0">
            <h1 className="text-[#F3A20C] font-bold md:text-5xl text-2xl">
              ILC’s
            </h1>
            <h3 className="text-[#2E2B4F] font-bold md:text-4xl text-xl">
              Innovative Learning Centres
            </h3>
            <p>
              Brookside Global School's Innovative Learning Center is a dynamic
              educational hub dedicated to fostering creativity, critical
              thinking, and holistic development in students. Through innovative
              teaching methods and personalized support, we nurture students'
              academic growth and equip them with essential skills for the
              future. Our focus on interactive learning, coupled with a
              supportive environment, empowers students to explore, excel, and
              thrive.
            </p>
          </div>
        </div>
        <div>
          {data?.map((item) => {
            return (
              <ActivityCard
                content={item?.content}
                heading={item?.heading}
                imgURL={item?.imgURL}
                isReverse={item?.isReverse}
              />
            );
          })}
        </div>
        <ContactSection />
      </div>
    </div>
    
  );
};

export default page;
