import { HomepageComponentEnums } from "./types"

export class HomepageStyles {
  rules: Record<HomepageComponentEnums, Map<string, string>> = {
    header: new Map([
      ["flex-grow", "flex-grow"]
    ])
  }

  buildStyleRules(): Record<string, string> {
    return {
      header: [...this.rules.header.values()].join(" ")
    }
  }
}