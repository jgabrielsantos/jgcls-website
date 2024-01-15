import { imageList } from "@/utils/imageList"
import { SideMenuProps } from "./types"
import { ButtonLink } from "../ButtonLink"

export const SideMenu = ({ menuIsOpen, closeMenu }: SideMenuProps) => {
  const toggleMenuClass = menuIsOpen ? 'translate-y-0' : '-translate-y-full'

  return (
    <div className={`
      ${toggleMenuClass}
      w-screen
      h-[calc(100dvh)]
      bg-grayscale-800
      fixed
      top-0
      left-0
      p-8
      flex
      flex-col
      items-center
      justify-start
      overflow-auto
    `}>
      <div
        className="flex justify-end items-center w-full"
      >
        <button
          onClick={closeMenu}
          type="button"
        >
          <img
            src={imageList.CloseIcon.src}
            alt={imageList.CloseIcon.alt}
            className="w-[36px] h-[36px]"
          />
        </button>
      </div>

      <div className="flex flex-col justify-between items-center w-3/4 h-full py-8 gap-8">
        <header
          className="flex flex-col justify-start items-center w-full gap-2"
        >
          <img
            src={imageList.Avatar.src}
            alt={imageList.Avatar.alt}
            className="rounded-full w-[100px] h-[100px] object-cover object-top"
          />
          <h1 className="text-3xl text-white-100">Gabriel Santos</h1>
        </header>

        <nav className="flex flex-col justify-start items-center w-full gap-y-4">
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

        <footer className="flex justify-center items-center w-full gap-[55px]">
          <a href="" target="_blank">
            <img
              src={imageList.Gmail.src}
              alt={imageList.Gmail.alt}
              className="w-[36px] h-[36px]"
            />
          </a>
          <a href="" target="_blank">
            <img
              src={imageList.Linkedin.src}
              alt={imageList.Linkedin.alt}
              className="w-[36px] h-[36px]"
            />
          </a>
          <a href="" target="_blank">
            <img
              src={imageList.Github.src}
              alt={imageList.Github.alt}
              className="w-[36px] h-[36px]"
            />
          </a>
        </footer>
      </div>
    </div>
  )
}
