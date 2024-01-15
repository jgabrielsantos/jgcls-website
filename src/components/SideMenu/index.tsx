import { imageList } from "@/utils/imageList"
import { SideMenuProps } from "./types"
import Image from "next/image"

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
            />
        </button>
      </div>

      <div className="flex flex-col justify-between items-center w-full h-full py-8">
        <header
          className="flex flex-col justify-start items-center w-full gap-8"
        >
          <img
            src={imageList.Avatar.src}
            alt={imageList.Avatar.alt}
            className="rounded-full w-[150px] h-[150px] object-cover object-top"
          />
          <h1 className="text-3xl text-white-100">Gabriel Santos</h1>
        </header>

        <nav className="flex flex-col justify-start items-center w-full gap-y-4">
          here
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
