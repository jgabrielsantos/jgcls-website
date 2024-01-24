import { useState } from "react"

export const useNavigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const showMenu = () => setMenuIsOpen(true)

  const closeMenu = () => setMenuIsOpen(false)

  return {
    menuIsOpen,
    showMenu,
    closeMenu
  }
}
