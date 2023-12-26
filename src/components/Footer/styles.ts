import { FooterComponentsEnum } from "./types"

export class FooterStyles {
  rules: Record<FooterComponentsEnum, Map<string, string>> = {
    wrapper: new Map([
      ["width", "w-full"],
      ["position", "fixed"],
      ["bottom", "bottom-0"],
      ["display", "flex"],
      ["justify-content", "justify-between"],
      ["align-items", "center"],
      ["padding", "p-4"],
      ["background-color", "bg-white-100"],
      ["font-size", "text-5xl"],
    ]),
    icon: new Map([
      ["width", "w-10"],
      ["aspect-ratio", "aspect-[3/4]"],
      ["object-fit", "object-contain"],
    ]),
  }

  buildStyleRules(): Record<string, string> {
    return {
      wrapper: [...this.rules.wrapper.values()].join(" "),
      icon: [...this.rules.icon.values()].join(" "),
    }
  }
}
