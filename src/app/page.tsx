import { Card, Chip } from "@/components";
import { Static } from "./static";
import { imageList } from "@/utils/imageList";

export default function Home() {
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
      {Static.PARAGRAPHS.map((paragraph, index) => (
        <p
          key={index}
          className="
            text-base
            font-medium
            text-white-100

            tablet:text-medium
            tablet:text-xl
            tablet:col-span-2
        ">
          {paragraph}
        </p>
      ))}
      <Card>
        <h2 className="
          text-2xl
          font-semibold
          text-white-100
          mb-3

          tablet:text-3xl
        ">
          {Static.SERVICES.TITLE}
        </h2>
        <ul className="flex flex-col items-start gap-5">
          {Static.SERVICES.LIST.map((service, index) => (
            <li
              key={index}
              className="flex items-center justify-start gap-2.5"
            >
              <img
                src={service.ICON.SRC}
                alt={service.ICON.ALT}
                className="w-[36px] h-[36px]"
              />
              <p className="
                text-base
                text-normal
                text-white-100

                tablet:text-xl
              ">
                {service.NAME}
              </p>
            </li>
          ))}
        </ul>
      </Card>
      <Card extraStyle="col-start-1">
        <h2 className="
          text-2xl
          font-semibold
          text-white-100
          mb-3

          tablet:text-3xl
        ">
          {Static.FEATURED_PROJECTS.TITLE}
        </h2>
        <ul className="flex flex-col items-start gap-5">
          {Static.FEATURED_PROJECTS.LIST.map((project, index) => (
            <li
              key={index}
              className="flex items-center justify-start gap-2.5"
            >
              <a
                href={project.LINK}
                target="_blank"
                className="
                  flex
                  items-center
                  justify-start
                  gap-2
                  text-base
                  font-normal
                  text-white-100

                  tablet:text-xl
                ">
                {project.TITLE}
                <img
                  src={imageList.ExternalTabIcon.src}
                  alt={imageList.ExternalTabIcon.alt}
                  className="w-[16px] h-[16px]"
                />
              </a>
            </li>
          ))}
        </ul>
      </Card>
      <Card extraStyle="col-start-2 row-start-4 row-span-2">
        <h2 className="
          text-2xl
          font-semibold
          text-white-100

          tablet:text-3xl
        ">
          {`Ongoing Project - ${Static.ONGOING_PROJECT.TITLE}`}
        </h2>
        <div className="flex flex-wrap gap-x-1.5 gap-y-2 my-3">
          {Static.ONGOING_PROJECT.TECH.map((tech, index) => <Chip key={index} name={tech} />)}
        </div>
        <p className="
          text-base
          font-normal
          text-white-100

          tablet:text-xl
        ">
          {Static.ONGOING_PROJECT.INTRO}
        </p>
        <p className="
          text-base
          font-normal
          text-white-100

          tablet:text-xl
        ">
          {Static.ONGOING_PROJECT.DESCRIPTION}
        </p>
      </Card>
    </main>
  )
}
