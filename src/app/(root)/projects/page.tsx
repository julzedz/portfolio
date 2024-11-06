"use client";
import Image from "next/image";
import GradientTxt from "@/app/components/Reusables/GradientTxt";
import CustomNav from "@/app/components/Reusables/CustomNav";
import { useEffect, useState } from "react";
import { getProjects } from "../../../../sanity/sanity-utils";
import type { Project } from "../../../../types/Project";
import { useRouter } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function Projects() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await getProjects();
        console.log(projects, "projects");
        setProjects(projects);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, []);
  const handleNavigation = function (url: string) {
    router.push(`/projects/${url}`);
  };
  return (
    <section>
      <div className="container mx-auto grid gap-40 px-5 pt-10 lg:px-20 xl:gap-20">
        {!projects.length ? (
          <ProjectSkeleton />
        ) : (
          projects.map((project) => (
            <div
              key={project._id}
              className="group relative flex max-w-[600px] cursor-pointer items-center justify-end xl:ml-40"
              onClick={() => handleNavigation(project.slug)}
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={400}
                  height={560}
                  priority
                  className="w-full transition-transform duration-300 group-hover:scale-[1.2]"
                />
              </div>
              <div className="absolute -bottom-16 -right-2 w-[90%] bg-black px-6 py-6 md:-right-[150px] md:py-14 xl:-right-[400px] xl:bottom-20 xl:w-full">
                <GradientTxt
                  tagName="h6"
                  txt={project.tagline}
                  className="text-[13px] font-bold tracking-[4px] md:text-sm xl:text-lg"
                />
                <h2 className="my-2 text-xl font-bold leading-[100%] text-white md:my-8 md:text-[50px] xl:text-[54px]">
                  {project.title}
                </h2>
                <CustomNav
                  txt="View Project"
                  className="flex items-center gap-2 text-sm text-white md:text-lg"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
const ProjectSkeleton = function () {
  return Array.from({ length: 3 }).map((_, index) => (
    <div
      key={index}
      className="group relative max-w-[600px] cursor-pointer xl:ml-40"
    >
      <div className="overflow-hidden">
        <Skeleton className="h-[300px] xl:h-[500px]" />
      </div>
      <div className="absolute -bottom-16 -right-2 w-[90%] bg-black px-6 py-6 md:-right-[150px] md:py-14 xl:-right-[400px] xl:bottom-20 xl:w-full">
        <Skeleton width={150} height={20} />
        <Skeleton width="60%" height={30} className="my-2 md:my-8" />
        <Skeleton width={120} height={20} />
      </div>
    </div>
  ));
};