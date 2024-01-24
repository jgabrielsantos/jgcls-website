'use client'

import { useUserAgent } from '@/utils/useUserAgent'
import { Inter } from 'next/font/google'
import { Header } from '../Header'
import { SideMenu } from '../SideMenu'

const inter = Inter({ subsets: ['latin'] })

export const AppWrapper = ({ children }: Record<string, React.ReactNode>) => {
  const { isMobile } = useUserAgent()
  return (
    <body className={`
      ${inter.className}
      flex
      flex-col
      justify-center
      items-start
      bg-grayscale-700
      tablet:flex-row
    `}>
      {isMobile ? (<Header />) : (<SideMenu menuIsOpen />)}
      {children}
    </body>
  )
}
