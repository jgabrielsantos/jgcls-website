import { WorkStyles } from "./styles";
import { WorkTypes } from "./types";

export const Work = ({
  name,
  website,
  role,
  duration,
  tasks
}: WorkTypes) => {
  const styles = new WorkStyles();
  const {
    wrapper,
    company,
    position,
    taskList,
    task
  } = styles.buildStyles()
  return (
    <div className={wrapper}>
      <a href={website} target="_blank" className={company}>{name}</a>
      <h3 className={position}>{role} | {duration}</h3>
      <ul className={taskList}>
        {tasks.map((item, index) => (
          <li
            key={index}
            className={task}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}