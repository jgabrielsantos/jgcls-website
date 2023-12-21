import { RepositoryComponentEnums } from "./types";

export class RepositoryStyles {
  rules: Record<RepositoryComponentEnums, Map<string, string>> = {
    wrapper: new Map([
      ["display", "flex"],
      ["flex-direction", "flex-col"],
      ["align-items", "items-start"],
      ["justify-content", "justify-between"],
      ["padding", "p-4"],
      ["gap", "gap-2"],
      ["border-radius", "rounded-md"],
      ["background-color", "bg-grayscale-5"],
    ]),
    title: new Map([
      ["font-size", "text-xl"],
      ["font-weight", "font-medium"],
    ]),
    description: new Map([
      ["font-size", "text-base"]
    ]),
    link: new Map([
      ["width", "w-fit"],
      ["padding", "p-4"],
      ["border-width", "border"],
      ["border-color", "border-primary-50"],
      ["border-radius", "rounded-md"],
      ["background-color", "bg-primary-50"],
      ["color", "text-white-100"],
    ]),
  }

  buildStyleRules(): Record<string, string> {
    return {
      wrapper: [...this.rules.wrapper.values()].join(" "),
      titleStyle: [...this.rules.title.values()].join(" "),
      descriptionStyle: [...this.rules.description.values()].join(" "),
      link: [...this.rules.link.values()].join(" "),
    }
  }
}
