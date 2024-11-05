import Link from "next/link";
import GradientTxt from "../../Reusables/GradientTxt";
import FadeUp from "@/animations/FadeUp";
export default function ContactDetails() {
  const date = new Date().getFullYear();
  const navLinks = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Experience",
      path: "/experience",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Instagram",
      path: "#",
    },
    {
      name: "Twitter",
      path: "#",
    },
  ];
  return (
    <section className="pt-[80px] xl:pt-[300px]">
      <FadeUp tag="div" className="mb-8">
        <h2 className="text-[36px] font-bold tracking-[0.5px] text-white md:text-[50px] xl:text-[54px]">
          Ready to create something amazing?
        </h2>
        <GradientTxt
          tagName="h4"
          txt="Let's hop on a call."
          className="call sharedStyles cursor-pointer text-[30px] font-bold tracking-[0.5px] md:text-[50px] xl:text-[54px]"
        />
      </FadeUp>
      <div className="flex flex-col xl:flex-row xl:justify-between">
        <div>
          <h2 className="font-medium italic text-white sm:text-base md:text-[24px] lg:font-bold">
            {" <React"}
            <GradientTxt tagName="span" txt="Mode />." />
          </h2>
          <p className="py-2 text-[#8a95ad]">Lagos, Nigeria</p>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#8a95ad"
              className="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
            <Link
              href="mailto:edoziechukwuma@gmail.com"
              target="_blank"
              className="text-[17px] font-bold text-[#8a95ad]"
            >
              edoziechukwuma@gmail.com
            </Link>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8 xl:mt-0 xl:grid-cols-3 xl:gap-10">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              className="links sharedStyles border-b border-[#8a95ad] pb-4 text-white md:text-xl xl:border-none xl:pb-0"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <p className="pb-10 pt-[100px] text-[#8a95ad]">
        Copyright &copy; {date}{" "}
        <GradientTxt tagName="span" txt="<ReactMode/>." /> all rights reserved.
      </p>
    </section>
  );
}