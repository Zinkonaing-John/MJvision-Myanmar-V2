import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/app/globals.css'
import ContionalLayout from './contionalLayout'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {

  title: 'MJVISION',
  description: 'This website is for Myanmar Students of Vision College of Jeonju',

}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContionalLayout>{children}</ContionalLayout>
      </body>
    </html>
  )
}
