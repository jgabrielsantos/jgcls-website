import { TabsComponentEnums } from "./types"

export class TabsStyles {
  rules: Record<TabsComponentEnums, Map<string, string>> = {
    wrapper: new Map([
      ["display", "flex"],
      ["flex-direction", "flex-col"],
      ["gap", "gap-4"]
    ]),
    buttonList: new Map([
      ["display", "flex"],
      ["justify-content", "justify-start"],
      ["align-items", "center"],
      ["gap", "gap-4"]
    ]),
    buttonItem: new Map([
      ["cursor", "pointer"],
      ["padding", "p-2"],
      ["border-width", "border-b-2"],
      ["font-size", "text-base"],
      ["font-weight", "font-medium"]
    ])
  }

  buildStyleRules(): Record<string, string> {
    return {
      wrapper: [...this.rules.wrapper.values()].join(" "),
      buttonList: [...this.rules.buttonList.values()].join(" "),
      buttonItem: [...this.rules.buttonItem.values()].join(" "),
    }
  }
}
