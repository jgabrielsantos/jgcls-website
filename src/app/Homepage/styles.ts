import { HomepageComponentEnums } from "./types"

export class HomepageStyles {
  rules: Record<HomepageComponentEnums, Map<string, string>> = {
    main: new Map([
      ["flex-grow", "flex-grow"],
      ["display", "flex"],
      ["flex-direction", "flex-col"],
      ["tablet-flex-direction", "tablet:flex-row"],
      ["tablet-gap", "tablet:gap-16"],
    ]),
    profileImage: new Map([
      ["width", "w-44"],
      ["height", "h-44"],
      ["object-fit", "object-cover"],
      ["object-position", "object-top"],
      ["border-radius", "rounded-full"],
    ]),
    title: new Map([
      ["width", "w-full"],
      ["text-align", "text-center"],
      ["margin-vertical", "my-12"],
      ["font-size", "text-xl"],
      ["font-weight", "font-semibold"],
      ["tablet-font-size", "tablet:text-3xl"],
    ]),
    heading: new Map([
      ["margin-vertical", "my-4"],
      ["tablet-font-size", "tablet:text-lg"],
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
    repositoryList: new Map([
      ["display", "flex"],
      ["flex-direction", "flex-col"],
      ["gap", "gap-4"],
    ]),
    introWrapper: new Map([
      ["tablet-width", "tablet:max-w-[50%]"],
      ["display", "flex"],
      ["flex-direction", "flex-col"],
      ["align-items", "items-center"],
    ]),
  }

  buildStyleRules(): Record<string, string> {
    return {
      main: [...this.rules.main.values()].join(" "),
      profileImage: [...this.rules.profileImage.values()].join(" "),
      title: [...this.rules.title.values()].join(" "),
      heading: [...this.rules.heading.values()].join(" "),
      link: [...this.rules.link.values()].join(" "),
      repositoryList: [...this.rules.repositoryList.values()].join(" "),
      introWrapper: [...this.rules.introWrapper.values()].join(" "),
    }
  }
}