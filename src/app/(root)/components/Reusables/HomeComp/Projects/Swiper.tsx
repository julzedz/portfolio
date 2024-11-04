import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import CustomNav from "../../CustomNav";
import GradientTxt from "../../GradientTxt";
import lapImg from "../../../../../../../public/lap_img.png";
import lapImg2 from "../../../../../../../public/lap_img2.png";
import Image from "next/image";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
export default function AnimatedSlide() {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="absolute top-[320px] w-full cursor-pointer sm:top-[300px] xl:right-0">
      <Swiper
        loop={true}
        // slidesPerView={2}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={20}
        autoplay={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide className="group md:min-w-[400px]">
          <div className="w-full overflow-hidden">
            <Image
              src={lapImg}
              alt="project screenshot image"
              className="w-full transition-transform duration-300 group-hover:scale-[1.2]"
            />
          </div>
          <div className="bg-white p-10">
            <GradientTxt
              txt="BRANDING"
              className="text-[14px] font-bold tracking-[4px]"
              tagName="h5"
            />
            <h4 className="my-6 text-[19px] font-bold leading-[110%] transition-opacity duration-300 group-hover:opacity-50">
              Soulful Rebrand
            </h4>
            <CustomNav
              txt="View Project"
              className="flex items-center gap-2 text-[14px] transition-opacity duration-300 group-hover:opacity-50"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="group md:min-w-[400px]">
          <div className="w-full overflow-hidden">
            <Image
              src={lapImg2}
              alt="project screenshot image"
              className="w-full transition-transform duration-300 group-hover:scale-[1.2]"
            />
          </div>
          <div className="bg-white p-10">
            <GradientTxt
              txt="PRODUCT DESIGN"
              className="text-[14px] font-bold tracking-[4px]"
              tagName="h5"
            />
            <h4 className="my-6 text-[19px] font-bold leading-[110%] transition-opacity duration-300 group-hover:opacity-50">
              Soulful Rebrand
            </h4>
            <CustomNav
              txt="View Project"
              className="flex items-center gap-2 text-[14px] transition-opacity duration-300 group-hover:opacity-50"
            />
          </div>
        </SwiperSlide>
        <div className="swiper-buttons-container ml-auto mt-4 flex h-[60px] w-[80px] items-center justify-between bg-white p-2">
          <div
            className="flex h-full w-1/2 items-center justify-start"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
            </svg>
          </div>
          <div
            className="flex h-full w-1/2 items-center justify-end"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
        </div>
      </Swiper>
    </div>
  );
}