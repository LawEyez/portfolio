'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Cursor = () => {
  const cursorRef = useRef<any>()

  useEffect(() => {
    const followCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: `${clientX}`,
          y: `${clientY}`,
          duration: .3,
          ease: 'sine.out'
        })
      }
    }

    window.addEventListener('mousemove', followCursor)

    return () => {
      window.removeEventListener('mousemove', followCursor)
    }

  }, [])

  return (
    <div
      ref={cursorRef}
      className='hidden w-40 h-40 rounded-full mix-blend-difference
      absolute z-40 border border-white md:flex items-center justify-center'
    >
      <div className="w-[80%] h-[80%] bg-white rounded-full"></div>
    </div>
  )
}

export default Cursor