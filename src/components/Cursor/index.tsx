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
        // cursorRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`
        // cursorRef.current.style.top = clientY + 'px'
        // cursorRef.current.style.left = clientX + 'px'
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
      className='w-40 h-40 rounded-full mix-blend-difference bg-white absolute
      z-40'
    />
  )
}

export default Cursor