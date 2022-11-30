import Image from 'next/image'

export default function Home() {
  return (
    <section className="relative h-screen w-full">
      <div className="flex items-center h-full container">
        <div className='w-full space-y-4 break-words'>
          <p className="text-neutral-300">Hi there, I&apos;m Allen, a...</p>
          <div className="capitalize font-bold text-6xl flex flex-col lg:flex-row
          tracking-tighter">
            <span className="">developer.</span>
            <span className="">designer.</span>
            <span className="">artist</span>
          </div>
        </div>
      </div>

      <div className='w-full space-y-4 break-words container pb-40'>
        <p className="text-neutral-400 w-full md:w-1/2 text-xl">
          By day, a <span className="text-white">software engineer</span>, a <span className="text-white">UI/UX designer</span> and an aspiring <span className="text-white">entrepreneur</span>. By night, a <span className="text-white">writer</span>, <span className="text-white">artist</span>, and <span className="text-white">Batman&apos;s sidekick</span>.
        </p>

        <p className="text-neutral-400 text-sm"></p>
      </div>
    </section>
  )
}
