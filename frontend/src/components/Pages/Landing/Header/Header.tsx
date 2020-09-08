import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { Navbar } from "../Navbar/Navbar"
import { HamBurgerComp } from "../../../UI/HamBurger/HamBurger"
import { BackdropComp as Backdrop } from "../../../UI/Backdrop/Backdrop"

import "./Header.scss"

export const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<Boolean>(false)

  /**
   * Toggle Menu
   */
  const toggleMenuHandler = (): void => {
    setShowMenu(showMenu => !showMenu)
  }

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <p>BIO</p>
      </Link>
      <Navbar sideDrawer={showMenu} />

      <Backdrop isTrue={showMenu} onClick={toggleMenuHandler} />
      <HamBurgerComp onClick={toggleMenuHandler} isCross={showMenu} />
    </header>
  )
}
