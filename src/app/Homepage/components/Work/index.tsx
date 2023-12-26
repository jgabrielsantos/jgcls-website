import { WorkStyles } from "./styles";

export const Work = () => {
  const styles = new WorkStyles();
  const {
    company,
    position,
    taskList,
    task
  } = styles.buildStyles()
  return (
    <div>
      <h2 className={company}>Convergence Concepts</h2>
      <h3 className={position}>Software Developer | July 2021 - Present</h3>
      <ul className={taskList}>
        <li className={task}>
          Deliver high-quality,robust production code across a diverse range of projects for esteemed clients, including Fintel Connect, Giant Leap, and others.
        </li>
        <li className={task}>
          Work along side web development and artificial intelligence experts to drive the planning, architecture, and development of innovative technical solutions that precisely align with business requirements.
        </li>
        <li className={task}>
          ollaborate seamlessly with designers, project managers, and developers to translate creative concepts into tangible production solutions, catering to clients and stakeholders.
        </li>
        <li className={task}>
          Provide leadership within web development department through active collaboration, knowledge shares, and mentorship, fostering an environment of continuous growth and excellence.
        </li>
        <li className={task}>
          Lead and facilitate pivotal company-wide accessibility initiatives, encompassing the creation of best practices technical documentation and spearheading internal projects, including the development of a foundation component library.
        </li>
      </ul>
    </div>
  )
}