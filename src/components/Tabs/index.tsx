'use client'
import { useTabs } from "./logic"
import { TabsStyles } from "./styles"
import { TabsTypes } from "./types"

export const Tabs = ({ tabs }: TabsTypes) => {
  const hook = useTabs({ tabs })
  const styles = new TabsStyles()
  const {
    wrapper,
    buttonItem,
    buttonList
  } = styles.buildStyleRules()

  return (
    <div className={wrapper}>
      <div className={buttonList}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => hook.tabClickHandler(tab)}
            className={hook.selectedTab.title === tab.title ? `${buttonItem} border-primary-50` : `${buttonItem} border-transparent`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div>
        {hook.selectedTab.element}
      </div>
    </div>
  )
}
