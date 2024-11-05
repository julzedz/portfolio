import CustomBtn from './Reusables/CustomBtn';
import CustomNav from './Reusables/CustomNav';
import GradientTxt from './Reusables/GradientTxt';
import profImg from '../../../../public/prof_img.jpg';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="my-[80px] gap-16 xl:flex">
      <div>
        <h1 className="font-bold text-[40px] md:text-[68px] lg:text-[75px] leading-[110%] mb-4">
          <GradientTxt tagName="span" txt="I develop fullstack" /> solutions that delight and inspire users.
        </h1>
        <p className="text-[#666] text-[19px] lg:text-[22px] mb-16">Hi! I'm Jules, a Fullstack Web Developer based in Nigeria. I create user-friendly websites for fast-growing startups.</p>
        <div className="mb-16 flex flex-col gap-4 md:flex-row">
          <CustomBtn txt="Book a call" className="w-[150px]" />
          <CustomNav txt="Download CV" className="font-bold text-lg flex items-center gap-2" />
        </div>
      </div>
      <Image src={profImg} alt="profile image" loading="lazy" className="w-full lg:w-[500px]" />
    </section>
  );
}