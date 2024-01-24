'use client'

import { useEffect, useState } from "react"

export const useUserAgent = () => {
  const [isMobile, setIsMobile] = useState(false)
  const checkDevice = () => setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window?.navigator.userAgent))

  useEffect(() => {
    checkDevice()
  }, [])

  return {
    isMobile
  }
}
