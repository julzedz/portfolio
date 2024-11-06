import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  techStack: string[];
  image: string;
  alt: string;
  content: PortableTextBlock[];
};