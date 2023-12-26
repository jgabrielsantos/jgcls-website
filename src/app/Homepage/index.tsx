import { Tabs } from "@/components"
import { HomepageStyles } from "./styles"
import { Static } from "./static"
import { Repository, Work } from "./components"

const Homepage = () => {
  const styles = new HomepageStyles()
  const {
    main,
    title,
    heading,
    link
  } = styles.buildStyleRules()

  return (
    <main className={main}>
      <h1 className={title}>Joao Gabriel Santos&apos; Portfolio</h1>
      <h2 className={heading}>
        Hello! I&apos;m a Full Stack Developer with a passion for crafting seamless and efficient web applications. Specializing in Next.js, React, TypeScript, Node.js, Express, Prisma, PostgreSQL, and MongoDB, I blend modern front-end techniques with robust back-end solutions to create dynamic and responsive websites.
      </h2>
      <h2 className={heading}>
        My journey in web development has been driven by a keen interest in both front-end aesthetics and back-end functionality. With Next.js and React, I design intuitive user interfaces that not only look great but also provide an engaging user experience. TypeScript adds a layer of reliability and maintainability to my code, ensuring that my applications are not just functional but also scalable.
      </h2>
      <h2 className={heading}>
        On the server side, Node.js and Express form the backbone of my applications. This powerful duo allows me to build fast and efficient server-side solutions. Prisma&apos;s next-generation ORM capabilities, coupled with PostgreSQL and MongoDB databases, enable me to handle complex data with ease, ensuring data integrity and performance.
      </h2>
      <h2 className={heading}>
        Whether it&apos;s developing a brand-new site from scratch or optimizing an existing application, my goal is to deliver high-quality, efficient, and scalable solutions that meet and exceed client expectations. Dive into my portfolio to explore my projects and see the potential of our future collaboration!
      </h2>

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