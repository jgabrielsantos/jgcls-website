import { Card, Chip } from "@/components"
import { Static } from "./static"
import { imageList } from "@/utils/imageList"

const Homepage = () => {
  return (
    <main className="w-full p-5 flex flex-col gap-4 items-start">
      <h1
        className="text-3xl font-bold text-white-100"
      >
        {Static.TITLE}
      </h1>
      <p
        className="text-base font-medium text-white-100"
      >
        {Static.PARAGRAPH0}
      </p>
      <p
        className="text-base font-medium text-white-100"
      >
        {Static.PARAGRAPH1}
      </p>
      <Card>
        <h2 className="text-2xl text-semibold text-white-100 mb-5">
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
              <p className="text-base text-normal text-white-100">{service.NAME}</p>
            </li>
          ))}
        </ul>
      </Card>
      <Card>
        <h2 className="text-2xl text-semibold text-white-100 mb-5">
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
                className="flex items-center justify-start gap-2 text-base text-normal text-white-100"
              >
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
      <Card>
        <h2 className="text-2xl text-semibold text-white-100">
          {`Ongoing Project - ${Static.ONGOING_PROJECT.TITLE}`}
        </h2>
        <div className="flex flex-wrap gap-x-1.5 gap-y-2">
          {Static.ONGOING_PROJECT.TECH.map((tech, index) => <Chip key={index} name={tech} />)}
        </div>
        <p className="text-base text-normal text-white-100">
          {Static.ONGOING_PROJECT.INTRO}
        </p>
        <p className="text-base text-normal text-white-100">
          {Static.ONGOING_PROJECT.DESCRIPTION}
        </p>
      </Card>
    </main>
  )
}

export default Homepage