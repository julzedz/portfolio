"use client";

import FadeUp from "@/animations/FadeUp";
import CustomBtn from "../../Reusables/CustomBtn";
import GradientTxt from "../../Reusables/GradientTxt";
import AnimatedSlide from './Swiper';

export default function Projects() {
  return (
    <section className="mb-[500px]">
      <FadeUp
        tag="div"
        className="relative flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0"
      >
        <div>
          <GradientTxt tagName="h6" txt="PROJECTS" className="font-bold text-[22px] mb-4 text-center" />
          <h2 className="font-bold text-[36px] leading-[120%] mb-10 lg:text-[54px] mx-auto max-w-[600px]">Delivering results my clients are proud of.</h2>
        </div>

        <CustomBtn txt="View all projects" className="w-[200px]" />

        {/* swiper component */}
        <AnimatedSlide />
      </FadeUp>
    </section>
  );
}