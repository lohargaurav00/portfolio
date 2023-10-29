import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gaurav Lohar',
  description: 'Welcome to my stunning portfolio website! This website showcases my work, skills, and achievements in a visually appealing and user-friendly manner. It is built using React.js, Sass, and Sanity CMS for the backend.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
