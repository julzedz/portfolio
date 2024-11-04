'use client';

import CustomBtn from '../../CustomBtn';
import GradientTxt from '../../GradientTxt';
import AnimatedSlide from './Swiper';

export default function Projects() {
  return (
    <section className="mb-[500px]">
      <div className="flex flex-col gap-8 lg:gap-0 justify-between lg:flex-row items-center relative">
        <div>
          <GradientTxt tagName="h6" txt="PROJECTS" className="font-bold text-[22px] mb-4 text-center" />
          <h2 className="font-bold text-[36px] leading-[120%] mb-10 lg:text-[54px] mx-auto max-w-[600px]">I bring results my clients are proud of.</h2>
        </div>

        <CustomBtn txt="View all projects" className="w-[200px]" />

        {/* swiper component */}
        <AnimatedSlide />
      </div>
    </section>
  );
}