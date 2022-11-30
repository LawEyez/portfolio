import Project from "@components/Project";

import { projects } from "data";

export default function Projects() {
  return (
    <section className="relative min-h-screen w-full">
      <div className="h-full container pt-20 pb-40">
        <h1 className="text-white w-full md:w-1/2 text-2xl font-black tracking-tighter">
          Projects
        </h1>
        
        <div className="mt-10">
          {projects.map((project: any) => (
            <Project
              key={project.id}
              name={project.name}
              description={project.description}
              tools={project.tools}
              tags={project.tags}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </section>
  )
}