
import React from "react";
import type { Metadata } from "next";
import BestPreSchoool from "@/components/BestPreSchool";

export const metadata: Metadata = {
  title: "Best Primary School in Kondapur, Hyderabad",
  description:
    "Welcome to Brookside Global School, where young minds bloom! We are the Best Primary School in Kondapur, Hyderabad. Join us on an exciting educational journey tailored to inspire and empower our students for a lifetime of success.",
  keywords:
    "Best Primary School in Kondapur - Hyderabad, Best Primary School in Hyderabad, Best Pre Primary Schools in Hyderabad'",
};

export default function Home() {

  return (
    <div>
      <BestPreSchoool/>
    </div>
  );
}
