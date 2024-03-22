import Menu from "@components/Menu"
import Navlink from "@components/Navlink"
import Link from "next/link"
import { RiDribbbleFill, RiGithubFill, RiLinkedinFill, RiMailFill, RiTwitterFill } from "react-icons/ri"

const Navbar = () => {
  return (
    <header className="fixed left-1/2 -translate-x-1/2 bottom-5 sm:bottom-10 w-[95%] sm:w-max z-50 py-2 sm:py-4
    px-4 sm:px-8 rounded-full bg-neutral-900/50 backdrop-blur-md border border-neutral-800">
      <nav className="flex items-center gap-3 sm:gap-5">
        <Menu />

        <div className="w-px h-5 border border-neutral-800"></div>

        <div className="flex flex-1 items-center gap-8 sm:gap-20 justify-between">
          <div className="flex items-center gap-5">
            <Link
              className="text-sm text-neutral-300 hover:text-white"
              href='https://drive.google.com/file/d/1AjUr0eGe6yX6HO3hZ7KBFUV3mDyZdzl1/view?usp=drive_link'
              target="_blank"
            >
              Resume
            </Link>

            <Link
              className="text-sm text-neutral-300 hover:text-white"
              href='https://www.theryze.net'
              target="_blank"
            >
              Blog
            </Link>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              className="text-neutral-300 hover:text-white"
              href='https://linkedin.com/in/allen-ojuka'
              target="_blank"
            >
              <RiLinkedinFill />
            </Link>

            <Link
              className="text-neutral-300 hover:text-white"
              href='https://github.com/laweyez'
              target="_blank"
            >
              <RiGithubFill />
            </Link>
            
            <Link
              className="text-neutral-300 hover:text-white"
              href='https://dribbble.com/Allen_OJU'
              target="_blank"
            >
              <RiDribbbleFill />
            </Link>
            
            {/* <Link
              className="text-neutral-300 hover:text-white"
              href='https://twitter.com/ojuka_allen'
              target="_blank"
            >
              <RiTwitterFill />
            </Link> */}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar