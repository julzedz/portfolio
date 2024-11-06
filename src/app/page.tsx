"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/HomeComp/Services";
import OtherComponents from "./components/HomeComp/Other_Comp/OtherComponents";
import Blogs from "./components/HomeComp/Blogs";
import Footer from "./components/Footer/Footer";
import GradientTxt from "./components/Reusables/GradientTxt";
import Projects from "./components/HomeComp/Projects/Projects";
const Preloader = function () {
  return (
    <section className="fixed left-0 top-0 grid h-full w-full place-content-center bg-[#f3f3f3]">
      <motion.div
        initial={{ y: 100, opacity: 0, rotate: 10 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: -100, opacity: 0, transition: { duration: 0.5 } }}
        transition={{
          type: "spring",
          stiffness: 300,
          duration: 0.5,
        }}
      >
        <GradientTxt
          tagName="h2"
          txt="<ReactMode/>"
          className="text-[22px] font-bold md:text-[36px] xl:text-[54px]"
        />
      </motion.div>
    </section>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Preloader key="preloader" />
      ) : (
        <>
          <Header key="header" />
          <main key="main">
            <div className="container mx-auto px-5 pt-5 lg:px-20">
              <Hero />
              <Services />
              <Projects />
            </div>
            <Blogs />
            <OtherComponents />
          </main>
          <Footer key="footer" />
        </>
      )}
    </AnimatePresence>
  );
}