import React from "react"

export type TabsComponentEnums = 'wrapper'
| 'buttonList'
| 'buttonItem'

export type TabType = {
  title: string
  element: React.ReactNode
}

export type TabsTypes = {
  tabs: TabType[]
}