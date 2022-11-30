import Menu from "@components/Menu"
import Navlink from "@components/Navlink"

const Navbar = () => {
  return (
    <header className="fixed bottom-10 lg:bottom-14 w-full z-50  py-1">
      <nav className="flex items-center justify-between w-full container">
        <Menu />

        <div className="flex items-center gap-5 bg-black/80 backdrop-blur">
          <Navlink name="home" path="/" />
          <Navlink name="projects" path="/projects" />
          <Navlink name="contact" path="/contact" />
        </div>
      </nav>
    </header>
  )
}

export default Navbar