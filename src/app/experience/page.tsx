import { Card, Chip } from "@/components"
import { Static } from "./static"

const Projects = () => {
  return (
    <main className="
      w-full
      p-5
      flex
      flex-col
      gap-4
      items-start

      tablet:pt-24
      tablet:px-10
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
      {Static.EXPERIENCE.map((experience, index) => (
        <Card key={index}>
          <div className="w-full flex items-center justify-between">
            <a
              href={experience.LINK}
              target="_blank"
              className="
              text-2xl
              font-semibold
              text-white-100

              tablet:text-3xl
            "
            >
              {experience.COMPANY}
            </a>
            <p className="
              text-base
              text-white-100

              tablet:text-xl
            ">{experience.LOCATION}</p>
          </div>
          <p className="
            text-base
            font-semibold
            text-white-100
            my-2

            tablet:text-xl
          ">
            {`${experience.ROLE} | ${experience.DURATION}`}
          </p>
          <ul>
            {experience.TASKS.map((task, index) => (
              <li
                key={index}
                className="
                text-base
                text-white-100

                tablet:text-xl
              ">
                - {task}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </main>
  )
}

export default Projects
