import { Card, Chip } from "@/components"
import { Static } from "./static"
import { imageList } from "@/utils/imageList"

const Projects = () => {
  return (
    <main className="
      w-full
      p-5
      flex
      flex-col
      gap-4
      items-start

      tablet:pt-16
      tablet:px-10
      tablet:grid
      tablet:grid-cols-2
      tablet:gap-x-14
      tablet:gap-y-8
    ">
      <h1 className="
        text-3xl
        font-bold
        text-white-100

        tablet:text-5xl
        tablet:col-span-2
      ">
        {Static.TITLE}
      </h1>
      {Static.PROJECTS.map((project, index) => (
        <Card key={index}>
          <div className="w-full flex justify-start items-center gap-4">
            <h2 className="
              text-2xl
              font-semibold
              text-white-100

              tablet:text-3xl
            ">
              {project.NAME}
            </h2>
            <a
              href={project.LINK}
              target="_blank"
            >
              <img src={imageList.ExternalTabIcon.src} alt={imageList.ExternalTabIcon.alt} />
            </a>
          </div>
          <div className='flex flex-wrap gap-x-1.5 gap-y-2 my-3 tablet:gap-3'>
            {project.TECH.map((item, index) => (
              <Chip key={index} name={item} />
            ))}
          </div>
          <p className="
            text-base
            text-normal
            text-white-100

            tablet:text-xl
          ">
            {project.INTRO}
          </p>
          <p className="
            text-base
            text-normal
            text-white-100

            tablet:text-xl
          ">
            {project.DESCRIPTION}
          </p>
        </Card>
      ))}
    </main>
  )
}

export default Projects
