import Image from 'next/image'

import Project from "@components/Project";

import { projects } from "data";

export default function Home() {
  return (
    <section className="relative min-h-screen w-full pb-40">
      {/* *********** ROTATED TEXT *********** */}
      <div className="absolute w-64 -rotate-90 translate-y-96">
        <div className="uppercase text-neutral-900 text-9xl font-black
        tracking-[-10px]">
          developer
        </div>
        
        <div className="uppercase text-neutral-900 text-8xl font-black
        tracking-[-10px]">
          designer
        </div>

        <div className="uppercase text-neutral-900 text-7xl font-black
        tracking-[-10px]">
          artist
        </div>
      </div>

      {/* *********** CTA *********** */}
      <div className="relative flex items-center h-screen container">
        <div className='w-full space-y-4 break-words'>
          <p className="text-neutral-300">Hi there, I&apos;m Allen, a...</p>
          <div className="capitalize font-bold text-7xl flex flex-col lg:flex-row
          tracking-tighter">
            <span className="">developer.</span>
            <span className="">designer.</span>
            <span className="">artist</span>
          </div>
        </div>
      </div>

      {/* *********** ABOUT *********** */}
      <div className='w-full space-y-4 break-words container pb-40'>
        <p className="text-neutral-400 w-full text-5xl">
          By day, a <span className="text-white">software engineer</span>, a <span className="text-white">UI/UX designer</span> and an aspiring <span className="text-white">entrepreneur</span>. By night, a <span className="text-white">writer</span>, <span className="text-white">artist</span>, and <span className="text-white">Batman&apos;s sidekick</span>.
        </p>

        <p className="text-neutral-400 text-sm"></p>
      </div>

      {/* *********** PROJECTS *********** */}
      <div className="h-full container pt-20">
        <h1 className="text-white w-full md:w-1/2 text-2xl font-black tracking-tighter">
          Projects
        </h1>
        
        <div className="mt-10 space-y-10">
          {projects.map((project: any) => (
            <>
            <hr className='border-neutral-800' />
            <Project
              key={project.id}
              name={project.name}
              description={project.description}
              tools={project.tools}
              tags={project.tags}
              url={project.url}
            />
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
