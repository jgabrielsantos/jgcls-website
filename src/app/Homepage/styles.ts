import { title } from "process"
import { HomepageComponentEnums } from "./types"

export class HomepageStyles {
  rules: Record<HomepageComponentEnums, Map<string, string>> = {
    main: new Map([
      ["flex-grow", "flex-grow"]
    ]),
    title: new Map([
      ["width", "w-full"],
      ["text-align", "text-center"],
      ["margin-vertical", "my-12"],
      ["font-size", "text-xl"],
      ["font-weight", "font-semibold"],
    ]),
    heading: new Map([
      ["margin-vertical", "my-4"]
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
      title: [...this.rules.title.values()].join(" "),
      heading: [...this.rules.heading.values()].join(" "),
      link: [...this.rules.link.values()].join(" "),
    }
  }
}