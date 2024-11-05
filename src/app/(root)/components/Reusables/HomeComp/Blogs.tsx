"use client";
import { useEffect, useState } from "react";
import CustomNav from "../CustomNav";
import GradientTxt from "../GradientTxt";

export default function Blogs() {
  const [isBottom, setIsBottom] = useState(false);
  useEffect(() => {

    const rightContent = document.getElementById("right-content");

    const handleScroll = function () {
      if (rightContent) {
        const { scrollTop, scrollHeight, clientHeight } = rightContent;
        console.log(scrollTop, scrollHeight, clientHeight, "asdfs");
        if (scrollTop + clientHeight >= scrollHeight) {
          setIsBottom(true);
        } else {
          setIsBottom(false);
        }
      }
    };
    if (rightContent) {
      rightContent.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (rightContent) {
        rightContent.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <section className="mb-[80px] bg-black">
      <div className="container mx-auto flex flex-col items-start justify-between gap-10 px-5 pb-[100px] pt-[300px] md:flex-row md:gap-2 lg:px-20">
        <div
          id="left-content"
          className={`md:sticky ${isBottom ? "md:bottom-0" : "md:top-20"}`}
        >
          <GradientTxt
            tagName="h5"
            txt="BLOGS"
            className="text-[22px] font-bold tracking-[4px]"
          />
          <h2 className="my-6 text-[40px] font-bold leading-[120%] text-white xl:text-[54px]">
            Latest Blogs
          </h2>
          <CustomNav
            txt="View all"
            className="flex items-center gap-2 text-[14px] tracking-[0.5px] text-white lg:text-[18px]"
          />
        </div>
        <div id="right-content" className="overflow-auto md:max-w-[50%]">
          {[1, 2, 3, 4, 5].map((_, ind) => (
            <div
              key={ind}
              className="group mb-[50px] cursor-pointer border-b border-gray-400 pb-5"
            >
              <p className="font-medium leading-[130%] text-[#666]">
                April 16, 2021 .6 mins
              </p>
              <h2 className="md:leading[36px] my-6 text-[22px] font-bold leading-[30px] text-white md:text-[28px] xl:text-[28px]">
                Design tips for designers, that covers everything you need.
              </h2>
              <CustomNav
                txt="Read the article"
                className="flex items-center gap-2 text-white md:text-[18px]"
              />
            </div>
          ))}
        </div>
      </div>
      </section>
  );
}