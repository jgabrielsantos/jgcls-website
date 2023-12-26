export class WorkStyles {
  rules: Record<string, Map<string, string>> = {
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
      company: [...this.rules.company.values()].join(" "),
      position: [...this.rules.position.values()].join(" "),
      taskList: [...this.rules.taskList.values()].join(" "),
      task: [...this.rules.task.values()].join(" "),
    }
  }
}
