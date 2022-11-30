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
    <div className='flex flex-col md:flex-row gap-10 bg-black/05 backdrop-blur-sm py-10'>
      {/* Name and URL */}
      <div className="h-max space-y-8 flex-1">
        <h2 className="capitalize text-6xl font-bold tracking-tighter">{name}</h2>

        <div>
          <Link
            className="px-8 py-4 capitalize border border-white/20 rounded-[9999px]
            flex items-center justify-center text-sm font-medium w-max gap-1.5"
            href={url}
            target='_blank'
          >
            open project
            <span className="text-lg">
              <RiArrowRightUpLine />
            </span>
          </Link>

        </div>
      </div>

      {/* Description, Tags & Tools */}
      <div className="space-y-6 flex-1">
        <p className="text-sm leading-6">{description}</p>

        <div className="space-y-2">
          <h3 className="font-bold capitalize">tools</h3>

          <div className="flex flex-wrap gap-2">
            {tools.map((tool: string) => (
              <div key={tool} className="border border-white/20 px-4 py-2 rounded-full text-xs">{tool}</div>
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