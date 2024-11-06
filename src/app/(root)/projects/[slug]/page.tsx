/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import type { Project } from "../../../../../types/Project";
import { getProject } from "../../../../../sanity/sanity-utils";
interface Params {
  params: {
    slug: string;
  };
}
export default function ProjectDetails({ params }: Params) {
  const [project, setProject] = useState<Project>();
  useEffect(() => {
    const fetchProject = async function () {
      try {
        const project = await getProject(params.slug);
        console.log(project, "project");
      } catch (error) {
        console.log(error);
      }
    };
    fetchProject();
  }, [params.slug]);
  return (
    <section>
      <div className="container mx-auto px-5 pt-5 lg:px-20">
        this is the project details page
      </div>
    </section>
  );
}