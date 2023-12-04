import Link from "next/link"

const Menu = () => {
  return (
    <>
      <div className="flex items-center gap-1.5">
        <div className="space-y-1">
          <div className="h-0.5 w-6 bg-white" />
          <div className="h-0.5 w-6 bg-white" />
        </div>

        <Link href='/' className="text-sm font-medium tracking-tighter">allen.</Link>
      </div>
    </>
  )
}

export default Menu