import { HomepageComponentEnums } from "./types"

export class HomepageStyles {
  rules: Record<HomepageComponentEnums, Map<string, string>> = {
    main: new Map([
      ["flex-grow", "flex-grow"]
    ]),
    heading: new Map([
      ["margin-vertical", "my-16"]
    ]),
    link: new Map([
      ["width", "w-fit"],
      ["padding-vertical", "py-2"],
      ["padding-horizontal", "px-4"],
      ["border-width", "border"],
      ["border-color", "border-primary-50"],
      ["border-radius", "rounded-md"],
      ["background-color", "bg-primary-50"],
      ["color", "text-white-100"],
      ["width", "w-full"],
    ]),
  }

  buildStyleRules(): Record<string, string> {
    return {
      main: [...this.rules.main.values()].join(" "),
      heading: [...this.rules.heading.values()].join(" "),
      link: [...this.rules.link.values()].join(" "),
    }
  }
}