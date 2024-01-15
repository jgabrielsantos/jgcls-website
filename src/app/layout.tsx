import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppWrapper } from '@/components'

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
      <AppWrapper>
        {children}
      </AppWrapper>
    </html>
  )
}
