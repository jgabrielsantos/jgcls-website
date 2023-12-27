export class WorkStyles {
  rules: Record<string, Map<string, string>> = {
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
    company: new Map([
      ["font-size", "text-2xl"],
      ["font-weight", "font-semibold"],
    ]),
    position: new Map([
      ["font-size", "text-base"],
      ["font-weight", "font-semibold"],
      ["margin-vertical", "my-4"],
    ]),
    taskList: new Map([
      ["display", "flex"],
      ["flex-direction", "flex-col"],
      ["align-items", "items-start"],
      ["justify-content", "justify-start"],
      ["gap", "gap-4"],
    ]),
    task: new Map([
      ["font-size", "text-base"],
      ["font-weight", "font-normal"],
    ]),
  }

  buildStyles(): Record<string, string> {
    return {
      wrapper: [...this.rules.wrapper.values()].join(" "),
      company: [...this.rules.company.values()].join(" "),
      position: [...this.rules.position.values()].join(" "),
      taskList: [...this.rules.taskList.values()].join(" "),
      task: [...this.rules.task.values()].join(" "),
    }
  }
}
