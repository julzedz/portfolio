"use client";
import CustomBtn from './Reusables/CustomBtn';
import CustomNav from './Reusables/CustomNav';
import GradientTxt from './Reusables/GradientTxt';
import profImg from "../../../public/prof_img.jpg";
import Image from 'next/image';
import { motion } from "framer-motion";


export default function Hero() {
    const MotionImage = motion(Image);
  return (
    <section className="my-[80px] gap-16 xl:flex">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <h1 className="font-bold text-[40px] md:text-[68px] lg:text-[75px] leading-[110%] mb-4">
          <GradientTxt tagName="span" txt="I develop fullstack" /> solutions that delight and inspire users.
        </h1>
        <p className="text-[#666] text-[19px] lg:text-[22px] mb-16">Hi! I'm Jules, a Fullstack Web Developer based in Nigeria. I create user-friendly websites for fast-growing startups.</p>
        <div className="mb-16 flex flex-col gap-4 md:flex-row">
          <CustomBtn txt="Book a call" className="w-[150px]" />
          <CustomNav txt="Download CV" className="font-bold text-lg flex items-center gap-2" />
        </div>
      </motion.div>
      <MotionImage
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }} src={profImg} alt="profile image" loading="lazy" className="w-full lg:w-[500px]" />
    </section>
  );
}