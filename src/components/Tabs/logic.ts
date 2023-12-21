import React, { useState } from "react"
import { TabsTypes } from "./types"

export const useTabs = ({ tabs }: TabsTypes) => {
  const [selectedTab, setSelectedTab] = useState<{title: string, element: React.ReactNode}>(tabs[0])

  const tabClickHandler = (tab: {title: string, element: React.ReactNode}) => {
    setSelectedTab(tab)
  }

  return {
    selectedTab,
    tabClickHandler
  }
}