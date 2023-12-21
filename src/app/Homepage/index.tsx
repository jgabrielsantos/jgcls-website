import { Tabs } from "@/components"
import { HomepageStyles } from "./styles"
import { Static } from "./static"
import { Repository } from "./components"

const Homepage = () => {
  const styles = new HomepageStyles()
  const {
    header
  } = styles.buildStyleRules()

  return (
    <main className={header}>
      <h1>Hello there! I&apos;m excited to share my projects and work experience with you</h1>

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
            </div>
          },
          {
            title: 'Work',
            element: <div>CCTech, Giant Leap, Fintel</div>
          },
          {
            title: 'Resume',
            element: <div>Resume</div>
          },
        ]}
      />
    </main>
  )
}

export default Homepage