import { PROJECTS } from "../../../data/projects";
import ProjectDetailClient from "./ProjectDetail";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage() {
  return <ProjectDetailClient projects={PROJECTS} />;
}
