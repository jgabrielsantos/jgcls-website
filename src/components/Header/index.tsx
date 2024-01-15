import { imageList } from "@/utils/imageList"
import { useNavigation } from "./logic"
import { SideMenu } from ".."

export const Header = () => {
  const hook = useNavigation()
  return (
    <div className="w-full bg-grayscale-800 p-8 stick top-0 left-0 flex items-center justify-end">
      <button onClick={hook.showMenu}>
        <img
          src={imageList.MenuIcon.src}
          alt={imageList.MenuIcon.alt}
        />
      </button>

      {hook.menuIsOpen && (
        <SideMenu
          menuIsOpen={hook.menuIsOpen}
          closeMenu={hook.closeMenu}
        />
      )}
    </div>
  )
}