import type { Metadata } from 'next'
import './globals.css'
import { AppWrapper } from '@/components'
import { GoogleTagManager } from '@next/third-parties/google'
import ENVIRONMENT from '@/config/environment'

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
      <GoogleTagManager gtmId={ENVIRONMENT.APP.GOOGLE_TAG_MANAGER_ID} />
    </html>
  )
}
