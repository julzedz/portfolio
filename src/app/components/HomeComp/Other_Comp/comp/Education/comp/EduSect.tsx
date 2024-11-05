import Image from "next/image";
import arrowRightUp from "../../../../../../../../public/arrow_right_up.svg";
import nexiImg from "../../../../../../../../public/nexi_img.jpg";
import udemyImg from "../../../../../../../../public/udemy_img.png";
import hngImg from "../../../../../../../../public/hng_img.jpg";
import FadeUp from "@/animations/FadeUp";
interface EduSectProps {
  type: "edu" | "work";
  name: string;
  title: string;
  date: string;
  img?: "nexi" | "udemy" | "hng";
}
export default function EduSect({
  type,
  name,
  title,
  date,
  img,
}: EduSectProps) {
  const image = img === "nexi" ? nexiImg : img === "hng" ? hngImg : udemyImg;
  return (
    <FadeUp
      tag="div"
      className="group relative flex cursor-pointer flex-col justify-between gap-4 border-b border-black pb-10 xl:flex-row xl:items-end"
    >
      <div className={`${type === "work" && "flex items-center gap-4"}`}>
        {type === "work" ? (
          <div className="size-10 min-w-10 rounded-full bg-gray-400">
            <Image
              src={image}
              alt={`${name} image`}
              className="rounded-full border border-gray-400"
            />
          </div>
        ) : (
          ""
        )}
        <div>
          <p className="mb-2 text-[19px] leading-[110%] md:text-[24px] xl:font-medium">
            {name}
          </p>
          <p className="font-medium leading-[130%] text-[#666]">{title}</p>
        </div>
      </div>
      <p className="leading-[130%] text-[#666]">.{date}</p>
      <Image
        src={arrowRightUp}
        alt="arrow right up"
        className="absolute right-2 top-0 transition-all duration-300 group-hover:right-0"
      />
    </FadeUp>
  );
}