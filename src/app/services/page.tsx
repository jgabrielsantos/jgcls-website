import { Card } from "@/components"
import { Static } from "./static"

const Services = () => {
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
      {Static.SERVICES.map((service, index) => (
        <Card key={index}>
          <div className="w-full flex justify-start items-center gap-4 mb-3">
            <img src={service.ICON.SRC} alt={service.ICON.ALT} />
            <h2 className="
              text-2xl
              font-semibold
              text-white-100

              tablet:text-3xl
            ">
              {service.NAME}
            </h2>
          </div>
          <p className="
            text-base
            text-normal
            text-white-100

            tablet:text-xl
          ">
            {service.INTRO}
          </p>
          <p className="
            text-base
            text-normal
            text-white-100

            tablet:text-xl
          ">
            {service.DESCRIPTION}
          </p>
        </Card>
      ))}
    </main>
  )
}

export default Services
