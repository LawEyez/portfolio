import { Plus_Jakarta_Sans, Space_Grotesk } from '@next/font/google'

import Navbar from '@components/Navbar'
import Avatar from '@components/Avatar'
import Cursor from '@components/Cursor'

import '@styles/globals.css'
import '@styles/custom.scss'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-mono'
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
      <body className={`${jakarta.variable} ${grotesk.variable} font-sans overflow-x-hidden scrollbar`}>
        <Cursor />
        <Avatar />
        <Navbar />

        {children}
      </body>
    </html>
  )
}
