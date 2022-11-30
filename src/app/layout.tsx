import { Plus_Jakarta_Sans } from '@next/font/google'

import Navbar from '@components/Navbar'

import '@styles/globals.css'
import '@styles/custom.scss'
import Avatar from '@components/Avatar'
import Cursor from '@components/Cursor'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--jakarta'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${jakarta.variable} font-sans overflow-x-hidden scrollbar`}>
        <Cursor />
        <Avatar />
        <Navbar />

        {children}
      </body>
    </html>
  )
}
