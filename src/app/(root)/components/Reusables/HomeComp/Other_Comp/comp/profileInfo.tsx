import Image from "next/image";
import GradientTxt from "../../../GradientTxt";
import profImage from "../../../../../../../../public/lap_img.png";
import profImage2 from "../../../../../../../../public/lap_img2.png";
export default function ProfileInfo() {
  return (
    <section>
      <div className="mb-20 flex flex-col items-start justify-between gap-4 lg:flex-row">
        <div>
          <GradientTxt
            txt="FULLSTACK DEVELOPER"
            className="text-[22px] font-bold tracking-[4px]"
            tagName="h5"
          />
          <h2 className="mb-4 mt-2 text-[40px] font-bold leading-[120%] tracking-[0.5px] md:text-[54px]">
            That's me!
          </h2>
        </div>
        <p className="text-[19px] leading-[40px] text-[#666] md:text-[22px] lg:max-w-[50%]">
          Over the past 4 years, I've worked with a diverse range of clients,
          from startups to different clientele.I bring a passion for creating
          seamless digital experiences and solving complex problems through
          code.
        </p>
      </div>
      <div className="grid gap-4">
        <Image
          src={profImage}
          alt="image"
          className="col-span-2 w-full xl:col-start-2 xl:col-end-4 xl:row-start-1 xl:row-end-3 xl:w-auto"
        />
        <Image
          src={profImage2}
          alt="image"
          className="col-span-1 w-full xl:col-span-1 xl:col-start-4 xl:row-start-1 xl:row-end-2 xl:w-auto"
        />
        <Image
          src={profImage}
          alt="image"
          className="col-span-1 w-full xl:col-span-1 xl:col-start-4 xl:row-start-2 xl:row-end-3 xl:w-auto"
        />
        <Image
          src={profImage2}
          alt="image"
          className="xl:aspect-9/16 col-span-2 w-full xl:col-span-1 xl:col-start-1 xl:row-span-2 xl:row-start-1 xl:row-end-3 xl:w-auto xl:object-cover"
        />
      </div>
    </section>
  );
}