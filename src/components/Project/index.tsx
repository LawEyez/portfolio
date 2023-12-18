import Link from "next/link"
import { RiArrowRightUpLine } from 'react-icons/ri'

import { ProjectProps } from "./types"

const Project = ({
  name,
  description,
  tools,
  tags,
  url
}: ProjectProps) => {
  return (
    <div className='flex flex-col md:flex-row gap-10 bg-neutral-900/30 backdrop-blur-sm border border-neutral-800
    p-4 sm:p-6 rounded-xl'>
      {/* Name and URL */}
      <div className="flex-1 flex flex-col gap-5 sm:justify-between">
        <div className="space-y-5">
          <h2 className="capitalize text-3xl font-bold">{name}</h2>
          <p className="text-neutral-300 font-light font-mono">{description}</p>
        </div>

        <Link
          className="px-8 py-4 capitalize border border-white/20 rounded-[9999px]
          flex items-center justify-center text-sm font-medium w-max gap-1.5
          hover:border-white transition group"
          href={url}
          target='_blank'
        >
          open project
          <span className="text-lg text-blue-600 group-hover:text-white transition">
            <RiArrowRightUpLine />
          </span>
        </Link>
      </div>

      {/* Description, Tags & Tools */}
      <div className="space-y-6 flex-1">
        

        <div className="space-y-2">
          <h3 className="font-bold capitalize">tools</h3>

          <div className="flex flex-wrap gap-2">
            {tools.map((tool: string) => (
              <div
                key={tool}
                className="border-2 border-white/20 px-4 py-2 rounded-full text-xs cursor-default
                hover:border-white hover:text-white transition"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-bold capitalize">tags</h3>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag: string) => (
              <div key={tag} className="text-xs text-sky-300">#{tag}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project