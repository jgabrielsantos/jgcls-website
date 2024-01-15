import { imageList } from "@/utils/imageList"
import { SideMenuProps } from "./types"
import { ButtonLink } from "../ButtonLink"

export const SideMenu = ({ menuIsOpen, closeMenu }: SideMenuProps) => {
  const toggleMenuClass = menuIsOpen ? 'translate-y-0' : '-translate-y-full'

  return (
    <aside className={`
      ${toggleMenuClass}
      w-screen
      h-[calc(100dvh)]
      fixed
      top-0
      left-0
      p-8
      bg-grayscale-800
      flex
      flex-col
      items-center
      justify-start

      tablet:static
      tablet:w-[450px]
      tablet:py-24
      tablet:px-0
      tablet:pb-8
      overflow-hidden
    `}>
      <div
        className="flex justify-end items-center w-full tablet:hidden"
      >
        <button
          onClick={closeMenu}
          type="button"
        >
          <img
            src={imageList.CloseIcon.src}
            alt={imageList.CloseIcon.alt}
            className="w-[28px] h-[28px]"
          />
        </button>
      </div>

      <div className="relative grid grid-flow-row auto-rows-min justify-center items-start w-3/4 h-full gap-6 tablet:gap-16">
        <header
          className="flex flex-col justify-start items-center w-full gap-2 tablet:gap-8"
        >
          <img
            src={imageList.Avatar.src}
            alt={imageList.Avatar.alt}
            className="
              rounded-full
              w-[100px]
              h-[100px]
              object-cover
              object-top

              tablet:w-[200px]
              tablet:h-[200px]
            "
          />
          <h1 className="
            text-3xl
            text-white-100

            tablet:text-4xl
            tablet:font-medium
          ">
              Gabriel Santos
          </h1>
        </header>

        <nav className="
          flex
          flex-col
          justify-start
          items-center
          w-full
          gap-y-4
          self-start
        ">
          <ButtonLink to="/">
            Homepage
          </ButtonLink>
          <ButtonLink to="/service">
            Service
          </ButtonLink>
          <ButtonLink to="/projects">
            Projects
          </ButtonLink>
          <ButtonLink to="/experience">
            Experience
          </ButtonLink>
          <ButtonLink to="/contact">
            Contact
          </ButtonLink>
        </nav>

        <footer className="flex justify-center self-end items-center w-full gap-[55px] absolute">
          <a href="mailto:jgclsdev@gmail.com">
            <img
              src={imageList.Gmail.src}
              alt={imageList.Gmail.alt}
              className="w-[36px] h-[36px]"
            />
          </a>
          <a href="https://www.linkedin.com/in/jgabriel-santos/" target="_blank">
            <img
              src={imageList.Linkedin.src}
              alt={imageList.Linkedin.alt}
              className="w-[36px] h-[36px]"
            />
          </a>
          <a href="https://github.com/jgabrielsantos" target="_blank">
            <img
              src={imageList.Github.src}
              alt={imageList.Github.alt}
              className="w-[36px] h-[36px]"
            />
          </a>
        </footer>
      </div>
    </aside>
  )
}
