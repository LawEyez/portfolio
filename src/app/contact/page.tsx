import { RiMailUnreadFill } from 'react-icons/ri'

export default function Contact() {
  return (
    <section className="relative h-screen w-full">
      <div className="flex items-center h-full container">
        <div className='w-full space-y-4 break-words'>
          <p className="text-white font-bold w-full md:w-1/2 text-4xl tracking-tighter">
            Let&apos;s Talk
          </p>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-lg text-neutral-400">
                <RiMailUnreadFill />
              </span>
              <span className="text-sm font-light">
                ojuka.allen@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}