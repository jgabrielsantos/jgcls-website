'use client'

import { isMobileDevice } from '@/utils/userAgent'
import { Inter } from 'next/font/google'
import { Header } from '../Header'
import { SideMenu } from '../SideMenu'

const inter = Inter({ subsets: ['latin'] })

export const AppWrapper = ({ children }: Record<string, React.ReactNode>) => {
  return (
    <body className={`
      ${inter.className}
      flex
      flex-col
      justify-center
      items-center
      bg-grayscale-700
      tablet:flex-row
    `}>
      {isMobileDevice() ? (<Header />) : (<SideMenu menuIsOpen />)}
      {children}
    </body>
  )
}
