import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gabriel Santos',
  description: 'Portfolio website of Joao Gabriel Santos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col h-screen justify-center items-center p-4`}>
        <div className='flex-grow overflow-auto pb-[80px]'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
