'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NavlinkProps } from './types'

const Navlink = ({
  name,
  path
}: NavlinkProps) => {
  const isActive = usePathname() === path

  return (
    <Link
      className={`text-xs hover:text-white transition mix-blend-difference
      ${isActive ? 'text-white' : 'text-neutral-500'}`}
      href={path}
    >
      {name}
    </Link>
  )
}

export default Navlink