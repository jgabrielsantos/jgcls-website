import { Tabs } from "@/components"
import { HomepageStyles } from "./styles"
import { Static } from "./static"
import { Repository, Work } from "./components"

const Homepage = () => {
  const styles = new HomepageStyles()
  const {
    main,
    heading,
    link
  } = styles.buildStyleRules()

  return (
    <main className={main}>
      <h1 className={heading} >
        Hello there! I&apos;m excited to share my projects and work experience with you
      </h1>

      <Tabs
        tabs={[
          {
            title: 'Projects',
            element: <div className="flex flex-col gap-4">
              {Object.values(Static.Repositories).map((project, index) => (
                <Repository
                  key={index}
                  title={project.title}
                  description={project.description}
                  frontend={project.frontend}
                  backend={project.backend}
                />
              ))}

              <a
                href="https://github.com/jgabrielsantos?tab=repositories"
                target="_blank"
                className={link}
              >Check all the GitHub repositories</a>
            </div>
          },
          {
            title: 'Work',
            element: <Work />
          }
        ]}
      />
    </main>
  )
}

export default Homepage