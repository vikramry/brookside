
import React from "react";
import type { Metadata } from "next";
import BestPlaySchool from "@/components/BestPlaySchool";

export const metadata: Metadata = {
  title: "Best School for Playgroup in Kondapur | Admissions Open Now",
  description:
    "Looking for the best school for playgroup in Kondapur? We nurture little learners with engaging activities in a safe environment. Admissions open—enquire about fees, timings & more! ",
  keywords:
    "Best school for playgroup in Kondapur, playgroup admissions, early childhood education, best preschool in Kondapur, safe learning for kids, playgroup fees and timings ",
};

export default function Home() {

  return (
    <div>
      <BestPlaySchool/>
    </div>
  );
}
