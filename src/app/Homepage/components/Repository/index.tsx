import { RepositoryStyles } from "./styles"
import { RepositoryTypes } from "./types"

export const Repository = ({
  title,
  description,
  frontend,
  backend
}: RepositoryTypes) => {
  const styles = new RepositoryStyles()
  const {
    wrapper,
    titleStyle,
    descriptionStyle,
    link
  } = styles.buildStyleRules()
  return (
    <div className={wrapper}>
      <p className={titleStyle}>{title}</p>
      <p className={descriptionStyle}>{description}</p>
      {frontend !== undefined && (
        <a
          href={frontend}
          target="_blank"
          className={link}
        >
          Frontend Repository
        </a>
      )}
      {backend !== undefined && (
        <a
          href={backend}
          target="_blank"
          className={link}
        >
          Backend Repository
        </a>
      )}
    </div>
  )
}
