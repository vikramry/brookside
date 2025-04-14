
import React from "react";
import type { Metadata } from "next";
import BestPreSchoool from "@/components/BestPreSchool";

export const metadata: Metadata = {
  title: "Best Primary School in Kondapur, Hyderabad",
  description:
    "Shape the future of your Toddler at the Best Preschool in Kondapur, Hyderabad. Fill out the form to reach us today.",
  keywords:
    "Best Preschool in Kondapur, Preschools near me, Schools near me, Playschools in Kondapur, Best Kindergarten in Kondapur",
};

export default function Home() {

  return (
    <div>
      <BestPreSchoool/>
    </div>
  );
}
