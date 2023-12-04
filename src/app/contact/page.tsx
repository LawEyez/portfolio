import RotatedText from '@components/RotatedText'
import { RiMailUnreadFill, RiPhoneFill } from 'react-icons/ri'

export default function Contact() {
  return (
    <section className="relative h-screen w-full">
      <RotatedText />
      
      <div className="flex items-center h-full container">
        <div className='w-full space-y-8 break-words'>
          <p className="text-white font-bold w-full md:w-1/2 text-6xl tracking-tighter">
            Don&apos;t be shy, say hi
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 sm:gap-4 p-2 sm:p-4 border border-white/20
            rounded-xl w-full md:w-[40%]">
              <div className="text-2xl text-neutral-400 border-r border-white pr-2 sm:pr-4">
                <RiMailUnreadFill />
              </div>
              <span className="text-sm font-light">
                ojuka.allen@gmail.com
              </span>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-4 p-2 sm:p-4 border border-white/20
            rounded-xl w-full md:w-[40%]">
              <div className="text-2xl text-neutral-400 border-r border-white pr-2 sm:pr-4">
                <RiPhoneFill />
              </div>
              <span className="text-sm font-light">
                (+254) 711 383 990
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}