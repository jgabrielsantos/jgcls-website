'use client'

import { isMobileDevice } from '@/utils/userAgent'
import { Inter } from 'next/font/google'
import { Header } from '../Header'

const inter = Inter({ subsets: ['latin'] })

export const AppWrapper = ({ children }: Record<string, React.ReactNode>) => {
  return (
    <body className={`${inter.className} flex flex-col justify-center items-center`}>
      {isMobileDevice() && (<Header />)}
      {children}
    </body>
  )
}
